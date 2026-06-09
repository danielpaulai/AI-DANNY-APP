import {
  getClerkUserId,
  getWorkspaceIdFromSession,
  linkUserToWorkspace,
} from "@/lib/auth/session";
import { findWorkspaceByCode } from "@/lib/workspaces/store";

export async function POST(req: Request) {
  const userId = await getClerkUserId();
  if (!userId) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { accessCode } = (await req.json()) as { accessCode?: string };
  if (!accessCode?.trim()) {
    return Response.json({ error: "Access code required" }, { status: 400 });
  }

  const workspace = await findWorkspaceByCode(accessCode.trim());
  if (!workspace) {
    return Response.json({ error: "Invalid access code" }, { status: 404 });
  }

  await linkUserToWorkspace(userId, workspace.id);

  const { accessCode: _, ...safe } = workspace;
  return Response.json({ workspace: safe });
}
