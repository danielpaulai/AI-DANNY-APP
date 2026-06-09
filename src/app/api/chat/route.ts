import {
  convertToModelMessages,
  streamText,
  tool,
  stepCountIs,
  type UIMessage,
} from "ai";
import { createAnthropic } from "@ai-sdk/anthropic";
import { z } from "zod";
import { loadSoulBundle } from "@/lib/soul/loader";
import { searchBrain } from "@/lib/brain/search";
import { getSkill, type SkillId } from "@/lib/agents/skills";
import { getWorkspaceIdFromSession } from "@/lib/auth/session";
import {
  getWorkspace,
  workspaceContextBlock,
} from "@/lib/workspaces/store";
import {
  appendSession,
  buildMemoryPreamble,
  loadSession,
  newMessage,
} from "@/lib/memory/store";

export const runtime = "nodejs";
export const maxDuration = 60;

function getModel() {
  const anthropic = createAnthropic({
    apiKey: process.env.ANTHROPIC_API_KEY,
  });
  const modelId = process.env.AI_MODEL ?? "claude-sonnet-4-6";
  return anthropic(modelId);
}

function messageText(parts: UIMessage["parts"]): string {
  return parts
    .filter((p): p is { type: "text"; text: string } => p.type === "text")
    .map((p) => p.text)
    .join("");
}

export async function POST(req: Request) {
  const workspaceId = await getWorkspaceIdFromSession();
  if (!workspaceId) {
    return new Response("Unauthorized", { status: 401 });
  }

  const workspace = await getWorkspace(workspaceId);
  if (!workspace) {
    return new Response("Workspace not found", { status: 404 });
  }

  const { messages, skillId } = (await req.json()) as {
    messages: UIMessage[];
    skillId?: SkillId;
  };

  const skill = getSkill(skillId);
  const soul = await loadSoulBundle();
  const history = await loadSession(workspaceId);
  const memory = buildMemoryPreamble(history);

  const system = `${soul}

${skill.prompt}

${workspaceContextBlock(workspace)}

${memory}

You have a tool \`queryBrain\` that searches Danny's curated methodology knowledge base.
Use it when answering needs grounding in frameworks, positioning, ICP, or diagnostics.
Always cite framework or source titles inline.
If nothing relevant is found, say what you'd need and still give your best operator take.`;

  const uiMessages = messages ?? [];
  const lastUser = [...uiMessages].reverse().find((m) => m.role === "user");
  const lastUserText = lastUser ? messageText(lastUser.parts) : "";

  const result = streamText({
    model: getModel(),
    system,
    messages: await convertToModelMessages(uiMessages),
    tools: {
      queryBrain: tool({
        description:
          "Search Danny's methodology knowledge base for frameworks, positioning, ICP, and diagnostics.",
        inputSchema: z.object({
          query: z.string().describe("What to search for in the knowledge base."),
        }),
        execute: async ({ query }) => {
          const results = await searchBrain(query, 5);
          return { count: results.length, results };
        },
      }),
    },
    stopWhen: stepCountIs(3),
    onFinish: async ({ text, steps }) => {
      const citations = steps
        .flatMap((step) => step.toolResults ?? [])
        .flatMap((tr) => {
          const output = tr.output as { results?: { title: string }[] };
          return output.results?.map((r) => r.title) ?? [];
        })
        .filter(Boolean);

      if (lastUserText) {
        await appendSession(workspaceId, [
          newMessage("user", lastUserText, { skillId: skill.id }),
          newMessage("assistant", text, {
            skillId: skill.id,
            citations: [...new Set(citations)],
          }),
        ]);
      }
    },
  });

  return result.toUIMessageStreamResponse();
}
