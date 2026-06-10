import { readFileSync } from "node:fs";
import { resolve } from "node:path";

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

const key = env.MENTOR_API_KEY;
const base = env.MENTOR_BASE_URL ?? "https://platform.thementorprogram.xyz/api/v1";
const model = env.AI_MODEL ?? "openai/gpt-5-mini";

if (!key) {
  console.error("MENTOR_API_KEY not set");
  process.exit(1);
}

async function probe(path, method = "GET", body) {
  const res = await fetch(`${base}${path}`, {
    method,
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  const text = await res.text();
  let json;
  try {
    json = JSON.parse(text);
  } catch {
    json = text.slice(0, 200);
  }
  return { status: res.status, body: json };
}

const models = await probe("/models");
console.log("models:", models.status, Array.isArray(models.body?.data) ? `${models.body.data.length} models` : models.body);

const chat = await probe("/chat/completions", "POST", {
  model,
  messages: [{ role: "user", content: "Reply with exactly: pong" }],
  max_tokens: 20,
});
console.log("chat:", chat.status);
if (chat.body?.choices?.[0]?.message?.content) {
  console.log("reply:", chat.body.choices[0].message.content.trim());
}
if (chat.body?.usage) {
  console.log("usage:", chat.body.usage);
}
if (chat.body?.error) {
  console.log("error:", chat.body.error);
}

for (const path of ["/credits", "/usage", "/account", "/me"]) {
  const r = await probe(path);
  if (r.status !== 404) console.log(`${path}:`, r.status, r.body);
}
