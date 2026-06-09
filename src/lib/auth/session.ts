import { auth, clerkClient } from "@clerk/nextjs/server";
import { getSupabase, isSupabaseConfigured } from "@/lib/supabase/server";

const WORKSPACE_METADATA_KEY = "workspaceId";

export async function getClerkUserId(): Promise<string | null> {
  const { userId } = await auth();
  return userId;
}

async function getWorkspaceIdFromClerk(userId: string): Promise<string | null> {
  const client = await clerkClient();
  const user = await client.users.getUser(userId);
  const workspaceId = user.privateMetadata[WORKSPACE_METADATA_KEY];
  return typeof workspaceId === "string" ? workspaceId : null;
}

export async function getWorkspaceIdFromSession(): Promise<string | null> {
  const { userId } = await auth();
  if (!userId) return null;

  if (isSupabaseConfigured()) {
    const { data, error } = await getSupabase()
      .from("workspace_members")
      .select("workspace_id")
      .eq("clerk_user_id", userId)
      .maybeSingle();

    if (error) throw error;
    if (data?.workspace_id) return data.workspace_id;
  }

  return getWorkspaceIdFromClerk(userId);
}

export async function linkUserToWorkspace(
  userId: string,
  workspaceId: string,
): Promise<void> {
  if (isSupabaseConfigured()) {
    const { error } = await getSupabase()
      .from("workspace_members")
      .upsert({ clerk_user_id: userId, workspace_id: workspaceId });

    if (error) throw error;
  }

  const client = await clerkClient();
  await client.users.updateUser(userId, {
    privateMetadata: { [WORKSPACE_METADATA_KEY]: workspaceId },
  });
}
