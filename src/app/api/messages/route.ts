import { getWorkspaceIdFromSession } from "@/lib/auth/session";
import { loadSession } from "@/lib/memory/store";
import type { SkillId } from "@/lib/agents/skills";

export async function GET(req: Request) {
  const workspaceId = await getWorkspaceIdFromSession();
  if (!workspaceId) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const skillId = new URL(req.url).searchParams.get("skillId") as SkillId | null;
  const history = await loadSession(
    workspaceId,
    skillId === "cloud" ? { skillId: "cloud" } : undefined,
  );
  const messages = history.map((m) => ({
    id: m.id,
    role: m.role,
    parts: [{ type: "text" as const, text: m.content }],
  }));

  return Response.json({ messages });
}
