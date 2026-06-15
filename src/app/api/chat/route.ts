import { convertToModelMessages, streamText, type UIMessage } from "ai";
import { TOKEN_BUDGET, fitSystemPrompt } from "@/lib/agents/token-budget";
import { getChatModel, kimiInstantModeOptions } from "@/lib/agents/model";
import {
  sanitizeVoiceOutput,
  VOICE_GUARDRAILS_COMPACT,
} from "@/lib/agents/voice-guardrails";
import { getSkill, type SkillId } from "@/lib/agents/skills";
import {
  formatBrainHits,
  toBrainCitations,
} from "@/lib/brain/format-hits";
import { buildBrainQuery } from "@/lib/brain/query-boost";
import { searchBrain } from "@/lib/brain/search";
import { checkAndIncrementDailyLimit } from "@/lib/auth/rate-limit";
import { getClerkUserId, getWorkspaceIdFromSession } from "@/lib/auth/session";
import {
  appendSession,
  buildMemoryPreamble,
  loadSession,
  newMessage,
} from "@/lib/memory/store";
import { loadSoulBundle, loadCloudBundle } from "@/lib/soul/loader";
import {
  getWorkspace,
  workspaceContextBlock,
} from "@/lib/workspaces/store";

export const runtime = "nodejs";
export const maxDuration = 60;

const PRIVACY_COMPACT = `Privacy: never other clients' names, exact revenue, or internal pricing — use archetypes and bands.`;

function messageText(parts: UIMessage["parts"]): string {
  return parts
    .filter((p): p is { type: "text"; text: string } => p.type === "text")
    .map((p) => p.text)
    .join("");
}

function trimUiMessages(messages: UIMessage[]): UIMessage[] {
  return messages.slice(-TOKEN_BUDGET.maxChatMessages);
}

export async function POST(req: Request) {
  try {
    const userId = await getClerkUserId();
    if (!userId) {
      return new Response("Unauthorized", { status: 401 });
    }

    const workspaceId = await getWorkspaceIdFromSession();
    if (!workspaceId) {
      return new Response("Unauthorized", { status: 401 });
    }

    const workspace = await getWorkspace(workspaceId);
    if (!workspace) {
      return new Response("Workspace not found", { status: 404 });
    }

    const { messages, skillId: rawSkillId } = (await req.json()) as {
      messages: UIMessage[];
      skillId?: SkillId;
    };

    const skill = getSkill(rawSkillId);
    const isCloud = skill.id === "cloud";

    const rateLimit = await checkAndIncrementDailyLimit(userId, skill.id);
    if (!rateLimit.allowed) {
      return new Response(
        `Daily message limit reached (${rateLimit.limit}/day). Resets ${rateLimit.resetDate} UTC. For strategy, batch your questions — Danny works best with context, not spam.`,
        { status: 429 },
      );
    }

    const soul = isCloud
      ? await loadCloudBundle()
      : await loadSoulBundle({ compact: true });
    const history = await loadSession(workspaceId, {
      skillId: isCloud ? "cloud" : undefined,
    });
    const memory = buildMemoryPreamble(history);

    const uiMessages = trimUiMessages(messages ?? []);
    const lastUser = [...uiMessages].reverse().find((m) => m.role === "user");
    const lastUserText = lastUser ? messageText(lastUser.parts) : "";

    const brainQuery = buildBrainQuery(lastUserText, skill.id);
    const excerptChars =
      skill.id === "diagnostic"
        ? TOKEN_BUDGET.brainExcerptCharsDiagnostic
        : TOKEN_BUDGET.brainExcerptChars;

    const brainResults =
      brainQuery.length > 0
        ? await searchBrain(
            brainQuery,
            TOKEN_BUDGET.brainPrefetchLimit,
            excerptChars,
            { preferBrainSources: !isCloud },
          )
        : [];

    const brainHits = formatBrainHits(brainResults);
    const brainCitations = toBrainCitations(brainResults);

    const replyRules = isCloud
      ? `Reply warm and brief (~150 words). Acknowledge → framework → one small move. Danny voice, lighter.
Always end with a line starting **Try this:** followed by one concrete small action they can do today.`
      : `Reply in Danny's voice: short paragraphs, one move to end. Stay under ~350 words unless they ask for depth.
When relevant, synthesize expert frameworks (Hormozi, Brunson, Robbins, etc.) — name them, apply to this founder, never book summaries.
Always end with a line starting **Your one move:** followed by one specific action tied to their workspace context this week.`;

    const core = `${VOICE_GUARDRAILS_COMPACT}

${soul}

${PRIVACY_COMPACT}

${skill.prompt}

${workspaceContextBlock(workspace)}`;

    const system = fitSystemPrompt(
      core,
      memory,
      brainHits,
      replyRules,
      TOKEN_BUDGET.maxSystemChars,
    );

    const citationTitles = brainCitations.map((c) => c.title);

    const result = streamText({
      model: getChatModel(),
      providerOptions: kimiInstantModeOptions(),
      system,
      messages: await convertToModelMessages(uiMessages),
      maxOutputTokens: isCloud ? 512 : TOKEN_BUDGET.maxOutputTokens,
      onFinish: async ({ text }) => {
        const cleaned = sanitizeVoiceOutput(text);
        if (lastUserText) {
          await appendSession(workspaceId, [
            newMessage("user", lastUserText, { skillId: skill.id }),
            newMessage("assistant", cleaned, {
              skillId: skill.id,
              citations: citationTitles.length ? citationTitles : undefined,
            }),
          ]);
        }
      },
    });

    return result.toUIMessageStreamResponse();
  } catch (err) {
    const message =
      err instanceof Error ? err.message : "Chat failed unexpectedly";
    console.error("[chat]", err);
    return new Response(message, { status: 500 });
  }
}
