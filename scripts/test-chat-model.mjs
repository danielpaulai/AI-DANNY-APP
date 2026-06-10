import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { streamText } from "ai";
import { createOpenAI } from "@ai-sdk/openai";

const envPath = resolve(process.cwd(), ".env.local");
const env = Object.fromEntries(
  readFileSync(envPath, "utf8")
    .split("\n")
    .filter((line) => line && !line.startsWith("#"))
    .map((line) => {
      const i = line.indexOf("=");
      return [line.slice(0, i), line.slice(i + 1)];
    }),
);

const mentor = createOpenAI({
  apiKey: env.MENTOR_API_KEY,
  baseURL: env.MENTOR_BASE_URL ?? "https://platform.thementorprogram.xyz/api/v1",
  name: "mentor",
});

const model = mentor.chat(env.AI_MODEL ?? "openai/gpt-4o-mini");

try {
  const result = streamText({
    model,
    system: "Reply in one short sentence.",
    messages: [{ role: "user", content: "Say hello as Danny." }],
    maxOutputTokens: 256,
  });

  let text = "";
  for await (const chunk of result.textStream) text += chunk;
  const usage = await result.usage;
  console.log("OK text:", text.trim() || "(empty)");
  console.log("usage:", usage);
  if (!text.trim()) process.exit(2);
} catch (err) {
  console.error("FAIL:", err.message ?? err);
  process.exit(1);
}
