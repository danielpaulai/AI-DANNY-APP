#!/usr/bin/env node
/**
 * Pull markdown knowledge from configured GitHub repos → content/knowledge/external/
 * Requires: gh auth login (or GITHUB_TOKEN for private repos)
 * Run: npm run sync-experts
 */
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { execSync } from "node:child_process";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const configPath = path.join(root, "config", "expert-sources.json");
const outRoot = path.join(root, "content", "knowledge", "external");

function gh(args) {
  return execSync(`gh ${args}`, { encoding: "utf8", maxBuffer: 20 * 1024 * 1024 });
}

function pathAllowed(filePath, allowedPaths) {
  if (!allowedPaths?.length || allowedPaths.includes(".")) return true;
  return allowedPaths.some(
    (p) => filePath === p || filePath.startsWith(`${p}/`),
  );
}

async function listMarkdownFiles(owner, repo, branch) {
  const tree = JSON.parse(
    gh(
      `api "repos/${owner}/${repo}/git/trees/${branch}?recursive=1" --jq '.tree'`,
    ),
  );
  return tree
    .filter((t) => t.type === "blob" && t.path.endsWith(".md"))
    .map((t) => t.path);
}

async function downloadFile(owner, repo, branch, filePath) {
  const encoded = filePath.split("/").map(encodeURIComponent).join("/");
  const url = `https://raw.githubusercontent.com/${owner}/${repo}/${branch}/${encoded}`;
  const res = await fetch(url, {
    headers: process.env.GITHUB_TOKEN
      ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
      : {},
  });
  if (res.ok) return res.text();

  // Private repos: use gh api contents endpoint
  const quoted = filePath.replace(/"/g, '\\"');
  const b64 = gh(
    `api "repos/${owner}/${repo}/contents/${quoted}?ref=${branch}" --jq .content`,
  ).replace(/\s/g, "");
  if (!b64) throw new Error(`No content for ${filePath}`);
  return Buffer.from(b64, "base64").toString("utf8");
}

async function syncRepo(entry) {
  const { owner, repo, branch = "main", paths = ["."] } = entry;
  const destDir = path.join(outRoot, repo);
  await fs.rm(destDir, { recursive: true, force: true });
  await fs.mkdir(destDir, { recursive: true });

  let files;
  try {
    files = await listMarkdownFiles(owner, repo, branch);
  } catch (err) {
    console.warn(`  skip ${owner}/${repo}: ${err.message}`);
    return { repo, files: 0, skipped: true };
  }

  let saved = 0;
  for (const filePath of files) {
    if (!pathAllowed(filePath, paths)) continue;
    try {
      const text = await downloadFile(owner, repo, branch, filePath);
      const dest = path.join(destDir, filePath);
      await fs.mkdir(path.dirname(dest), { recursive: true });
      await fs.writeFile(dest, text);
      saved += 1;
    } catch (err) {
      console.warn(`  warn ${filePath}: ${err.message}`);
    }
  }
  return { repo, files: saved, skipped: false };
}

const config = JSON.parse(await fs.readFile(configPath, "utf8"));
console.log(`Syncing ${config.repos.length} expert source repos…`);

const results = [];
for (const entry of config.repos) {
  process.stdout.write(`→ ${entry.owner}/${entry.repo}… `);
  const r = await syncRepo(entry);
  console.log(r.skipped ? "skipped" : `${r.files} files`);
  results.push(r);
}

const manifest = {
  syncedAt: new Date().toISOString(),
  repos: results,
};
await fs.writeFile(
  path.join(outRoot, "_manifest.json"),
  JSON.stringify(manifest, null, 2),
);

const total = results.reduce((n, r) => n + r.files, 0);
console.log(`Done — ${total} markdown files in content/knowledge/external/`);
