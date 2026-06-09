import { getWorkspaceIdFromSession } from "@/lib/auth/session";
import { getWorkspace } from "@/lib/workspaces/store";

export async function GET() {
  const workspaceId = await getWorkspaceIdFromSession();
  if (!workspaceId) {
    return Response.json({ error: "no_workspace" }, { status: 404 });
  }

  const workspace = await getWorkspace(workspaceId);
  if (!workspace) {
    return Response.json({ error: "Not found" }, { status: 404 });
  }

  const { accessCode: _, ...safe } = workspace;
  return Response.json({ workspace: safe });
}
