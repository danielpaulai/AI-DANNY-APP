import { clerkClient } from "@clerk/nextjs/server";
import type { SkillId } from "@/lib/agents/skills";

type UsageMeta = {
  dailyMessageCount?: number;
  dailyResetDate?: string;
};

function todayUtc(): string {
  return new Date().toISOString().slice(0, 10);
}

function getCaps(): { operator: number; cloud: number } {
  const base = Number(process.env.DAILY_MESSAGE_CAP ?? 50);
  const cloudCap = Number(process.env.DAILY_CLOUD_MESSAGE_CAP ?? 30);
  return {
    operator: Number.isFinite(base) && base > 0 ? base : 50,
    cloud: Number.isFinite(cloudCap) && cloudCap > 0 ? cloudCap : 30,
  };
}

export type RateLimitResult =
  | { allowed: true; remaining: number }
  | { allowed: false; remaining: 0; limit: number; resetDate: string };

/** Check and increment daily message count via Clerk privateMetadata. */
export async function checkAndIncrementDailyLimit(
  userId: string,
  skillId: SkillId,
): Promise<RateLimitResult> {
  const caps = getCaps();
  const limit = skillId === "cloud" ? caps.cloud : caps.operator;
  const today = todayUtc();

  const client = await clerkClient();
  const user = await client.users.getUser(userId);
  const meta = (user.privateMetadata ?? {}) as UsageMeta;

  let count = meta.dailyMessageCount ?? 0;
  let resetDate = meta.dailyResetDate ?? today;

  if (resetDate !== today) {
    count = 0;
    resetDate = today;
  }

  if (count >= limit) {
    return { allowed: false, remaining: 0, limit, resetDate };
  }

  const nextCount = count + 1;
  await client.users.updateUser(userId, {
    privateMetadata: {
      ...user.privateMetadata,
      dailyMessageCount: nextCount,
      dailyResetDate: today,
    },
  });

  return { allowed: true, remaining: limit - nextCount };
}
