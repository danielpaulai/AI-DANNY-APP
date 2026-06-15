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
import { loadSoulBundle, loadCloudBundle } from "@/lib/soul/loader";
import type { ClientWorkspace } from "@/lib/workspaces/types";
import { workspaceContextBlock } from "@/lib/workspaces/store";

const PRIVACY_COMPACT = `Privacy: never other clients' names, exact revenue, or internal pricing — use archetypes and bands.`;

export type EmbedFounderContext = {
  founderName: string;
  business?: string;
  icp?: string;
  positioning?: string;
  voiceNotes?: string;
  stage?: string;
  /** Optional program-specific context (e.g. FounderOS Foundation docs). */
  programContext?: string;
};

function messageText(parts: UIMessage["parts"]): string {
  return parts
    .filter((p): p is { type: "text"; text: string } => p.type === "text")
    .map((p) => p.text)
    .join("");
}

function trimUiMessages(messages: UIMessage[]): UIMessage[] {
  return messages.slice(-TOKEN_BUDGET.maxChatMessages);
}

function embedContextBlock(ctx: EmbedFounderContext): string {
  const workspace: ClientWorkspace = {
    id: "embed",
    name: "Embed",
    accessCode: "",
    founderName: ctx.founderName,
    business: ctx.business ?? "",
    icp: ctx.icp ?? "",
    positioning: ctx.positioning ?? "",
    voiceNotes: ctx.voiceNotes ?? "",
    stage: ctx.stage ?? "",
    createdAt: new Date().toISOString(),
  };
  const base = workspaceContextBlock(workspace);
  if (!ctx.programContext?.trim()) return base;
  return `${base}\n\n## Program context\n${ctx.programContext.trim()}`;
}

export async function runDannyChatStream(options: {
  messages: UIMessage[];
  skillId?: SkillId;
  founderContext: EmbedFounderContext;
  memory?: string;
}) {
  const skill = getSkill(options.skillId);
  const isCloud = skill.id === "cloud";

  const soul = isCloud
    ? await loadCloudBundle()
    : await loadSoulBundle({ compact: true });

  const uiMessages = trimUiMessages(options.messages ?? []);
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

${embedContextBlock(options.founderContext)}`;

  const system = fitSystemPrompt(
    core,
    options.memory ?? "",
    brainHits,
    replyRules,
    TOKEN_BUDGET.maxSystemChars,
  );

  return streamText({
    model: getChatModel(),
    providerOptions: kimiInstantModeOptions(),
    system,
    messages: await convertToModelMessages(uiMessages),
    maxOutputTokens: isCloud ? 512 : TOKEN_BUDGET.maxOutputTokens,
  });
}
