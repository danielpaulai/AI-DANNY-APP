import { z } from "zod";
import type { UIMessage } from "ai";
import type { SkillId } from "@/lib/agents/skills";
import {
  runDannyChatStream,
  type EmbedFounderContext,
} from "@/lib/agents/run-chat";

export const runtime = "nodejs";
export const maxDuration = 60;

const bodySchema = z.object({
  messages: z.array(z.custom<UIMessage>()).min(1).max(20),
  skillId: z
    .enum(["general", "diagnostic", "positioning", "content", "cloud"])
    .optional(),
  founderContext: z.object({
    founderName: z.string().min(1).max(120),
    business: z.string().max(2000).optional(),
    icp: z.string().max(4000).optional(),
    positioning: z.string().max(4000).optional(),
    voiceNotes: z.string().max(2000).optional(),
    stage: z.string().max(500).optional(),
    programContext: z.string().max(24_000).optional(),
  }),
  source: z.string().max(64).optional(),
});

function authorizeEmbed(req: Request): boolean {
  const key = process.env.EMBED_API_KEY?.trim();
  if (!key) return false;
  const auth = req.headers.get("authorization");
  if (!auth?.startsWith("Bearer ")) return false;
  return auth.slice(7) === key;
}

/**
 * Server-to-server Danny chat for embedded apps (e.g. FounderOS).
 * Auth: Authorization: Bearer {EMBED_API_KEY}
 */
export async function POST(req: Request) {
  if (!authorizeEmbed(req)) {
    return new Response("Unauthorized", { status: 401 });
  }

  const parsed = bodySchema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) {
    return new Response("Invalid request", { status: 400 });
  }

  const { messages, skillId, founderContext, source } = parsed.data;

  try {
    const result = await runDannyChatStream({
      messages,
      skillId: skillId as SkillId | undefined,
      founderContext: founderContext as EmbedFounderContext,
    });

    console.info("[embed/chat]", source ?? "unknown", founderContext.founderName);

    return result.toTextStreamResponse();
  } catch (err) {
    console.error("[embed/chat]", err);
    return new Response(
      err instanceof Error ? err.message : "Embed chat failed",
      { status: 500 },
    );
  }
}
