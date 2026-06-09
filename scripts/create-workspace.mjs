#!/usr/bin/env node
/**
 * Create a client workspace in Supabase (production).
 * Usage: node scripts/create-workspace.mjs --id acme --code acme-2026 --founder "Jane Doe"
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createClient } from "@supabase/supabase-js";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");

function loadEnv() {
  const envPath = path.join(root, ".env.local");
  try {
    const raw = fs.readFileSync(envPath, "utf8");
    let loaded = 0;
    for (const line of raw.split(/\r?\n/)) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) continue;
      const eq = trimmed.indexOf("=");
      if (eq <= 0) continue;
      const key = trimmed.slice(0, eq).trim();
      const value = trimmed.slice(eq + 1).trim();
      if (key && value) {
        process.env[key] = value;
        loaded++;
      }
    }
    return loaded;
  } catch (err) {
    console.error(`Could not read ${envPath}:`, err instanceof Error ? err.message : err);
    return 0;
  }
}

function arg(name) {
  const i = process.argv.indexOf(`--${name}`);
  return i >= 0 ? process.argv[i + 1] : "";
}

async function loadFromJson(file) {
  const raw = await fs.promises.readFile(
    path.join(root, "data", "workspaces", file),
    "utf8",
  );
  const ws = JSON.parse(raw);
  return {
    id: ws.id,
    accessCode: ws.accessCode,
    founderName: ws.founderName,
    name: ws.name,
    business: ws.business,
    icp: ws.icp,
    positioning: ws.positioning,
    voiceNotes: ws.voiceNotes,
    stage: ws.stage,
  };
}

const loaded = loadEnv();

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!url || !key) {
  console.error(
    `Supabase env missing after loading ${loaded} vars from .env.local.`,
  );
  console.error("Need NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY.");
  process.exit(1);
}

const fromJson = arg("from-json");
let id = arg("id");
let accessCode = arg("code");
let founderName = arg("founder");
let name = arg("name");
let business = arg("business") || "";
let icp = arg("icp") || "";
let positioning = arg("positioning") || "";
let voiceNotes = arg("voice") || "";
let stage = arg("stage") || "";

if (fromJson) {
  const ws = await loadFromJson(fromJson);
  id = ws.id;
  accessCode = ws.accessCode;
  founderName = ws.founderName;
  name = ws.name;
  business = ws.business;
  icp = ws.icp;
  positioning = ws.positioning;
  voiceNotes = ws.voiceNotes;
  stage = ws.stage;
}

if (!name) name = `${founderName}'s Workspace`;

if (!id || !accessCode || !founderName) {
  console.error(`Usage:
  node scripts/create-workspace.mjs \\
    --id client-slug \\
    --code unique-access-code \\
    --founder "Founder Name" \\
    [--name "Workspace Name"] \\
    [--business "..."] [--icp "..."] [--positioning "..."] [--voice "..."] [--stage "..."]

  Or from JSON:
  node scripts/create-workspace.mjs --from-json daniel-paul.json`);
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
