#!/usr/bin/env node
/**
 * Create a client workspace in Supabase (production).
 * Usage: node scripts/create-workspace.mjs --id acme --code acme-2026 --founder "Jane Doe"
 */
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createClient } from "@supabase/supabase-js";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");

async function loadEnv() {
  try {
    const raw = await fs.readFile(path.join(root, ".env.local"), "utf8");
    for (const line of raw.split("\n")) {
      const m = line.match(/^([A-Z_]+)=(.*)$/);
      if (m && !process.env[m[1]]) process.env[m[1]] = m[2];
    }
  } catch {
    /* use existing env */
  }
}

function arg(name) {
  const i = process.argv.indexOf(`--${name}`);
  return i >= 0 ? process.argv[i + 1] : "";
}

await loadEnv();

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!url || !key) {
  console.error("Set NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in .env.local");
  process.exit(1);
}

const id = arg("id");
const accessCode = arg("code");
const founderName = arg("founder");
const name = arg("name") || `${founderName}'s Workspace`;
const business = arg("business") || "";
const icp = arg("icp") || "";
const positioning = arg("positioning") || "";
const voiceNotes = arg("voice") || "";
const stage = arg("stage") || "";

if (!id || !accessCode || !founderName) {
  console.error(`Usage:
  node scripts/create-workspace.mjs \\
    --id client-slug \\
    --code unique-access-code \\
    --founder "Founder Name" \\
    [--name "Workspace Name"] \\
    [--business "..."] [--icp "..."] [--positioning "..."] [--voice "..."] [--stage "..."]`);
  process.exit(1);
}

const sb = createClient(url, key, { auth: { persistSession: false } });
const { data, error } = await sb
  .from("workspaces")
  .upsert({
    id,
    name,
    access_code: accessCode,
    founder_name: founderName,
    business,
    icp,
    positioning,
    voice_notes: voiceNotes,
    stage,
  })
  .select("id, access_code, founder_name")
  .single();

if (error) {
  console.error("Failed:", error.message);
  process.exit(1);
}

console.log("Workspace ready:");
console.log(`  id:          ${data.id}`);
console.log(`  access code: ${data.access_code}`);
console.log(`  founder:     ${data.founder_name}`);
console.log("\nShare the access code with the client after they sign up.");
