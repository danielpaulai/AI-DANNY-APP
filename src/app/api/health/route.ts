import { isSupabaseConfigured } from "@/lib/supabase/server";

export async function GET() {
  const checks = {
    anthropic: Boolean(process.env.ANTHROPIC_API_KEY),
    clerk: Boolean(
      process.env.CLERK_SECRET_KEY &&
        process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
    ),
    supabase: isSupabaseConfigured(),
  };

  const ok = checks.anthropic && checks.clerk;

  return Response.json(
    {
      status: ok ? "ok" : "degraded",
      checks,
      version: process.env.VERCEL_GIT_COMMIT_SHA?.slice(0, 7) ?? "local",
    },
    { status: ok ? 200 : 503 },
  );
}
