#!/usr/bin/env node
/**
 * Growth pipeline stub — re-ingest brain + log refresh.
 * Wire to cron / GitHub Action for compounding knowledge.
 */
import { execSync } from "node:child_process";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const logPath = path.join(root, "data", "growth-log.jsonl");

execSync("node scripts/ingest-brain.mjs", { cwd: root, stdio: "inherit" });

const entry = {
  type: "brain_reindex",
  at: new Date().toISOString(),
  note: "Brain index refreshed from content/brain",
};

await fs.mkdir(path.dirname(logPath), { recursive: true });
await fs.appendFile(logPath, `${JSON.stringify(entry)}\n`);
console.log("Growth log updated.");
