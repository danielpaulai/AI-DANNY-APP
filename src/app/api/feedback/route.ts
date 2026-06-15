import { getClerkUserId, getWorkspaceIdFromSession } from "@/lib/auth/session";
import { getSupabase, isSupabaseConfigured } from "@/lib/supabase/server";
import type { FeedbackEntry } from "@/lib/workspaces/types";

export async function POST(req: Request) {
  const workspaceId = await getWorkspaceIdFromSession();
  const userId = await getClerkUserId();
  if (!workspaceId || !userId) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = (await req.json()) as {
    messageId?: string;
    rating?: FeedbackEntry["rating"];
    note?: string;
  };

  if (!body.messageId || !body.rating) {
    return Response.json(
      { error: "messageId and rating required" },
      { status: 400 },
    );
  }

  if (!["helpful", "used", "weak"].includes(body.rating)) {
    return Response.json({ error: "Invalid rating" }, { status: 400 });
  }

  if (!isSupabaseConfigured()) {
    return Response.json({ ok: true, stored: false });
  }

  const { error } = await getSupabase().from("feedback").insert({
    workspace_id: workspaceId,
    message_id: body.messageId,
    rating: body.rating,
    note: body.note ?? null,
  });

  if (error) {
    console.error("[feedback]", error);
    return Response.json({ error: "Could not save feedback" }, { status: 500 });
  }

  return Response.json({ ok: true });
}
