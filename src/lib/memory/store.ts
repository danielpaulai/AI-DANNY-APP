import fs from "node:fs/promises";
import path from "node:path";
import { randomUUID } from "node:crypto";
import { getSupabase, isSupabaseConfigured } from "@/lib/supabase/server";
import type { SessionMessage } from "../workspaces/types";
import { TOKEN_BUDGET, truncate } from "../agents/token-budget";

const DIR = path.join(process.cwd(), "data", "sessions");
const MAX_MESSAGES = 80;

type MessageRow = {
  id: string;
  workspace_id: string;
  role: "user" | "assistant";
  content: string;
  skill_id: string | null;
  citations: string[];
  created_at: string;
};

async function ensureDir() {
  await fs.mkdir(DIR, { recursive: true });
}

function sessionPath(workspaceId: string) {
  return path.join(DIR, `${workspaceId}.json`);
}

function rowToMessage(row: MessageRow): SessionMessage {
  return {
    id: row.id,
    role: row.role,
    content: row.content,
    skillId: row.skill_id ?? undefined,
    citations: row.citations?.length ? row.citations : undefined,
    createdAt: row.created_at,
  };
}

async function loadSessionFromFile(
  workspaceId: string,
): Promise<SessionMessage[]> {
  await ensureDir();
  try {
    const raw = await fs.readFile(sessionPath(workspaceId), "utf8");
    return JSON.parse(raw) as SessionMessage[];
  } catch {
    return [];
  }
}

export async function loadSession(
  workspaceId: string,
  options?: { skillId?: string },
): Promise<SessionMessage[]> {
  let messages: SessionMessage[];
  if (!isSupabaseConfigured()) {
    messages = await loadSessionFromFile(workspaceId);
  } else {
    const { data, error } = await getSupabase()
      .from("messages")
      .select("*")
      .eq("workspace_id", workspaceId)
      .order("created_at", { ascending: true })
      .limit(MAX_MESSAGES);

    if (error) throw error;
    messages = (data as MessageRow[]).map(rowToMessage);
  }

  if (options?.skillId === "cloud") {
    return messages.filter((m) => m.skillId === "cloud");
  }
  return messages.filter((m) => m.skillId !== "cloud");
}

async function appendSessionToFile(
  workspaceId: string,
  messages: SessionMessage[],
): Promise<void> {
  await ensureDir();
  const existing = await loadSessionFromFile(workspaceId);
  const merged = [...existing, ...messages].slice(-MAX_MESSAGES);
  await fs.writeFile(sessionPath(workspaceId), JSON.stringify(merged, null, 2));
}

export async function appendSession(
  workspaceId: string,
  messages: SessionMessage[],
): Promise<void> {
  if (!messages.length) return;

  if (!isSupabaseConfigured()) {
    await appendSessionToFile(workspaceId, messages);
    return;
  }

  const rows = messages.map((m) => ({
    id: m.id,
    workspace_id: workspaceId,
    role: m.role,
    content: m.content,
    skill_id: m.skillId ?? null,
    citations: m.citations ?? [],
    created_at: m.createdAt,
  }));

  const { error } = await getSupabase().from("messages").insert(rows);
  if (error) throw error;

  const { data: stale, error: listError } = await getSupabase()
    .from("messages")
    .select("id")
    .eq("workspace_id", workspaceId)
    .order("created_at", { ascending: false })
    .range(MAX_MESSAGES, MAX_MESSAGES + 50);

  if (listError) throw listError;
  if (stale?.length) {
    const ids = stale.map((r) => r.id);
    const { error: deleteError } = await getSupabase()
      .from("messages")
      .delete()
      .in("id", ids);
    if (deleteError) throw deleteError;
  }
}

export function buildMemoryPreamble(history: SessionMessage[]): string {
  if (!history.length) return "";
  const recent = history.slice(-TOKEN_BUDGET.memoryMessages);
  const lines = recent.map(
    (m) =>
      `${m.role === "user" ? "Client" : "AI Danny"}: ${truncate(m.content, TOKEN_BUDGET.memoryCharsPerMessage)}`,
  );
  return `## Recent memory\n${lines.join("\n")}`;
}

export function newMessage(
  role: SessionMessage["role"],
  content: string,
  extra?: Partial<SessionMessage>,
): SessionMessage {
  return {
    id: randomUUID(),
    role,
    content,
    createdAt: new Date().toISOString(),
    ...extra,
  };
}
