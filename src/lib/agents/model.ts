import { createAnthropic } from "@ai-sdk/anthropic";
import { createOpenAI } from "@ai-sdk/openai";
import type { LanguageModel } from "ai";
import { TOKEN_BUDGET } from "./token-budget";

export type AiProvider = "anthropic" | "kimi" | "mentor";

const MENTOR_DEFAULT_BASE = "https://platform.thementorprogram.xyz/api/v1";
const MENTOR_DEFAULT_MODEL = "openai/gpt-4o-mini";

export function resolveProvider(): AiProvider {
  const raw = (process.env.AI_PROVIDER ?? "anthropic").toLowerCase();
  if (raw === "mentor") return "mentor";
  if (raw === "kimi" || raw === "moonshot") return "kimi";
  return "anthropic";
}

export function isAiConfigured(): boolean {
  const provider = resolveProvider();
  if (provider === "mentor") return Boolean(process.env.MENTOR_API_KEY);
  if (provider === "kimi") return Boolean(process.env.MOONSHOT_API_KEY);
  return Boolean(process.env.ANTHROPIC_API_KEY);
}

function createOpenAiGateway(
  apiKey: string | undefined,
  baseURL: string,
  name: string,
) {
  return createOpenAI({ apiKey, baseURL, name });
}

export function getChatModel(): LanguageModel {
  const provider = resolveProvider();

  if (provider === "mentor") {
    const mentor = createOpenAiGateway(
      process.env.MENTOR_API_KEY,
      process.env.MENTOR_BASE_URL ?? MENTOR_DEFAULT_BASE,
      "mentor",
    );
    return mentor.chat(process.env.AI_MODEL ?? MENTOR_DEFAULT_MODEL);
  }

  if (provider === "kimi") {
    const moonshot = createOpenAiGateway(
      process.env.MOONSHOT_API_KEY,
      process.env.MOONSHOT_BASE_URL ?? "https://api.moonshot.ai/v1",
      "moonshot",
    );
    return moonshot.chat(process.env.AI_MODEL ?? "kimi-k2.5");
  }

  const anthropic = createAnthropic({
    apiKey: process.env.ANTHROPIC_API_KEY,
  });
  return anthropic(process.env.AI_MODEL ?? TOKEN_BUDGET.defaultModel);
}

/** Instant mode = no thinking tokens (Moonshot Kimi only). */
export function kimiInstantModeOptions() {
  if (resolveProvider() !== "kimi") return undefined;
  if (process.env.KIMI_THINKING === "enabled") return undefined;
  return {
    openai: {
      extraBody: {
        thinking: { type: "disabled" as const },
      },
    },
  };
}
