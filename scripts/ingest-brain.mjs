#!/usr/bin/env node
/**
 * Ingest markdown knowledge → data/brain-index.json
 * Sources: content/brain + content/knowledge (vault mirror, recursive)
 * Privacy: excludes sensitive paths; sanitizes names, money, PII before index.
 * Run: npm run ingest
 */
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  sanitizeKnowledgeText,
  shouldExcludeKnowledgePath,
} from "./sanitize-knowledge.mjs";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const sources = [
  path.join(root, "content", "brain"),
  path.join(root, "content", "knowledge"),
];
const outPath = path.join(root, "data", "brain-index.json");

function stripFrontmatter(text) {
  if (text.startsWith("---")) {
    const end = text.indexOf("---", 3);
    if (end !== -1) return text.slice(end + 3).trim();
  }
  return text;
}

function stripScaffold(text) {
  const marker = "<!--::DANNY-DISTILL-START::-->";
  const idx = text.indexOf(marker);
  let out = idx !== -1 ? text.slice(idx + marker.length) : text;
  out = out.replace(/<!--::DANNY-DISTILL-END::-->/g, "");
  return out.trim();
}

function chunkMarkdown(text, source, title) {
  const cleaned = sanitizeKnowledgeText(stripScaffold(stripFrontmatter(text)));
  if (!cleaned || cleaned.length < 40) return [];

  const sections = cleaned.split(/\n(?=## )/);
  return sections
    .map((section) => section.trim())
    .filter((s) => s.length >= 40)
    .map((section, i) => {
      const heading = section.match(/^## (.+)/)?.[1] ?? title;
      const category = source.split("/").slice(0, 2).join("/").replace(".md", "");
      const tags = section
        .toLowerCase()
        .match(/[a-z]{4,}/g)
        ?.slice(0, 12) ?? [];
      return {
        id: `${source.replace(/[/\\]/g, "-").replace(".md", "")}-${i}`,
        title: heading,
        source,
        text: section,
        tags: [...new Set([category, ...tags])],
        sanitized: true,
      };
    });
}

async function walkMd(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walkMd(full)));
    } else if (entry.name.endsWith(".md")) {
      files.push(full);
    }
  }
  return files;
}

const chunks = [];
let excludedFiles = 0;
let ingestedFiles = 0;

for (const dir of sources) {
  try {
    await fs.access(dir);
  } catch {
    continue;
  }
  const files = await walkMd(dir);
  for (const filePath of files) {
    const rel = path.relative(root, filePath).replace(/\\/g, "/");
    if (rel.startsWith("content/knowledge/") && shouldExcludeKnowledgePath(rel)) {
      excludedFiles += 1;
      continue;
    }
    const text = await fs.readFile(filePath, "utf8");
    const title = path.basename(filePath, ".md");
    const fileChunks = chunkMarkdown(text, rel, title);
    if (fileChunks.length) {
      ingestedFiles += 1;
      chunks.push(...fileChunks);
    }
  }
}

await fs.mkdir(path.dirname(outPath), { recursive: true });
await fs.writeFile(outPath, JSON.stringify(chunks, null, 2));
console.log(
  `Indexed ${chunks.length} chunks (${ingestedFiles} files, ${excludedFiles} excluded for privacy) → ${outPath}`,
);
