import fs from "node:fs/promises";
import path from "node:path";
import { getSupabase, isSupabaseConfigured } from "@/lib/supabase/server";
import type { ClientWorkspace } from "./types";
import { TOKEN_BUDGET, truncate } from "../agents/token-budget";

const DIR = path.join(process.cwd(), "data", "workspaces");

type WorkspaceRow = {
  id: string;
  name: string;
  access_code: string;
  founder_name: string;
  business: string;
  icp: string;
  positioning: string;
  voice_notes: string;
  stage: string;
  created_at: string;
};

function rowToWorkspace(row: WorkspaceRow): ClientWorkspace {
  return {
    id: row.id,
    name: row.name,
    accessCode: row.access_code,
    founderName: row.founder_name,
    business: row.business,
    icp: row.icp,
    positioning: row.positioning,
    voiceNotes: row.voice_notes,
    stage: row.stage,
    createdAt: row.created_at,
  };
}

async function listWorkspacesFromFiles(): Promise<ClientWorkspace[]> {
  const files = await fs.readdir(DIR);
  const workspaces: ClientWorkspace[] = [];
  for (const file of files) {
    if (!file.endsWith(".json")) continue;
    const raw = await fs.readFile(path.join(DIR, file), "utf8");
    workspaces.push(JSON.parse(raw) as ClientWorkspace);
  }
  return workspaces;
}

export async function listWorkspaces(): Promise<ClientWorkspace[]> {
  if (!isSupabaseConfigured()) return listWorkspacesFromFiles();

  const { data, error } = await getSupabase()
    .from("workspaces")
    .select("*")
    .order("created_at", { ascending: true });

  if (error) throw error;
  return (data as WorkspaceRow[]).map(rowToWorkspace);
}

export async function getWorkspace(id: string): Promise<ClientWorkspace | null> {
  if (!isSupabaseConfigured()) {
    try {
      const raw = await fs.readFile(path.join(DIR, `${id}.json`), "utf8");
      return JSON.parse(raw) as ClientWorkspace;
    } catch {
      return null;
    }
  }

  const { data, error } = await getSupabase()
    .from("workspaces")
    .select("*")
    .eq("id", id)
    .maybeSingle();

  if (error) throw error;
  return data ? rowToWorkspace(data as WorkspaceRow) : null;
}

export async function findWorkspaceByCode(
  code: string,
): Promise<ClientWorkspace | null> {
  if (!isSupabaseConfigured()) {
    const all = await listWorkspacesFromFiles();
    return all.find((w) => w.accessCode === code) ?? null;
  }

  const { data, error } = await getSupabase()
    .from("workspaces")
    .select("*")
    .eq("access_code", code)
    .maybeSingle();

  if (error) throw error;
  return data ? rowToWorkspace(data as WorkspaceRow) : null;
}

export function workspaceContextBlock(ws: ClientWorkspace): string {
  return `## Client context
Founder: ${ws.founderName} | Business: ${truncate(ws.business, TOKEN_BUDGET.workspaceFieldMaxChars)} | Stage: ${ws.stage}
ICP: ${truncate(ws.icp, TOKEN_BUDGET.workspaceFieldMaxChars)}
Positioning: ${truncate(ws.positioning, TOKEN_BUDGET.workspaceFieldMaxChars)}
Voice: ${truncate(ws.voiceNotes, TOKEN_BUDGET.workspaceFieldMaxChars)}
Personalize to this founder.`;
}
