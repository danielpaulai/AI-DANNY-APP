#!/usr/bin/env node
/**
 * Ingest content/brain/*.md → data/brain-index.json
 * Run after adding knowledge: npm run ingest
 */
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const brainDir = path.join(root, "content", "brain");
const outPath = path.join(root, "data", "brain-index.json");

function chunkMarkdown(text, source, title) {
  const sections = text.split(/\n(?=## )/);
  return sections
    .map((section, i) => section.trim())
    .filter(Boolean)
    .map((section, i) => {
      const heading = section.match(/^## (.+)/)?.[1] ?? title;
      const tags = section
        .toLowerCase()
        .match(/[a-z]{4,}/g)
        ?.slice(0, 12) ?? [];
      return {
        id: `${source}-${i}`,
        title: heading,
        source,
        text: section,
        tags: [...new Set([source.replace(".md", ""), ...tags])],
      };
    });
}

const files = await fs.readdir(brainDir);
const chunks = [];
for (const file of files) {
  if (!file.endsWith(".md")) continue;
  const text = await fs.readFile(path.join(brainDir, file), "utf8");
  const title = file.replace(".md", "");
  chunks.push(...chunkMarkdown(text, file, title));
}

await fs.mkdir(path.dirname(outPath), { recursive: true });
await fs.writeFile(outPath, JSON.stringify(chunks, null, 2));
console.log(`Indexed ${chunks.length} chunks → ${outPath}`);
