import { getWorkspaceIdFromSession } from "@/lib/auth/session";
import { loadSession } from "@/lib/memory/store";

export async function GET() {
  const workspaceId = await getWorkspaceIdFromSession();
  if (!workspaceId) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const history = await loadSession(workspaceId);
  const messages = history.map((m) => ({
    id: m.id,
    role: m.role,
    parts: [{ type: "text" as const, text: m.content }],
  }));

  return Response.json({ messages });
}
