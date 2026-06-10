"use client";

import { useMemo } from "react";
import DannyAvatar from "./DannyAvatar";
import { randomQuip, DANNY_TAGLINE } from "@/lib/danny/presence";

type Props = {
  compact?: boolean;
};

export default function DannyPresenceCard({ compact = false }: Props) {
  const quip = useMemo(() => randomQuip(), []);

  if (compact) {
    return (
      <div className="flex items-center gap-3">
        <DannyAvatar size="sm" showOnline />
        <div>
          <p className="font-[family-name:var(--font-rethink)] text-sm font-bold">
            AI Danny
          </p>
          <p className="text-[11px] text-[var(--text-faint)]">{DANNY_TAGLINE}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-md border border-[var(--dark-border)] bg-[var(--dark-card)] p-4">
      <div className="flex gap-3">
        <DannyAvatar size="md" showOnline />
        <div className="min-w-0">
          <p className="font-[family-name:var(--font-rethink)] font-bold">AI Danny</p>
          <p className="mt-1 text-xs leading-relaxed text-[var(--text-dim)]">{DANNY_TAGLINE}</p>
        </div>
      </div>
      <p className="mt-2 text-xs italic leading-relaxed text-[var(--text-faint)]">
        &ldquo;{quip}&rdquo;
      </p>
    </div>
  );
}
