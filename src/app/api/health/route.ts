import { isSupabaseConfigured } from "@/lib/supabase/server";
import { isAiConfigured, resolveProvider } from "@/lib/agents/model";

export async function GET() {
  const provider = resolveProvider();
  const checks = {
    ai: isAiConfigured(),
    aiProvider: provider,
    anthropic: Boolean(process.env.ANTHROPIC_API_KEY),
    moonshot: Boolean(process.env.MOONSHOT_API_KEY),
    mentor: Boolean(process.env.MENTOR_API_KEY),
    clerk: Boolean(
      process.env.CLERK_SECRET_KEY &&
        process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
    ),
    supabase: isSupabaseConfigured(),
  };

  const ok = checks.ai && checks.clerk;

  return Response.json(
    {
      status: ok ? "ok" : "degraded",
      checks,
      version: process.env.VERCEL_GIT_COMMIT_SHA?.slice(0, 7) ?? "local",
    },
    { status: ok ? 200 : 503 },
  );
}
