"use client";

import { useState } from "react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

type Props = {
  messageId: string;
  variant?: "dark" | "cloud";
};

export default function MessageFeedback({
  messageId,
  variant = "dark",
}: Props) {
  const [sent, setSent] = useState<"helpful" | "weak" | null>(null);

  async function submit(rating: "helpful" | "weak") {
    if (sent) return;
    try {
      const res = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messageId, rating }),
      });
      if (!res.ok) throw new Error("Failed");
      setSent(rating);
      toast.success("Thanks — noted.");
    } catch {
      toast.error("Could not save feedback.");
    }
  }

  const btnClass = cn(
    "rounded px-2 py-1 text-[10px] font-semibold transition disabled:opacity-40",
    variant === "cloud"
      ? "text-[var(--cloud-muted)] hover:bg-white/60 hover:text-[var(--cloud-text)]"
      : "text-[var(--text-faint)] hover:bg-[var(--dark-elevated)] hover:text-[var(--text-dim)]",
  );

  return (
    <div className="mt-2 flex items-center gap-1">
      <button
        type="button"
        disabled={sent !== null}
        onClick={() => submit("helpful")}
        className={cn(btnClass, sent === "helpful" && "text-emerald-500")}
        aria-label="Helpful"
      >
        👍 {sent === "helpful" ? "Noted" : "Helpful"}
      </button>
      <button
        type="button"
        disabled={sent !== null}
        onClick={() => submit("weak")}
        className={cn(btnClass, sent === "weak" && "text-amber-500")}
        aria-label="Weak"
      >
        👎 {sent === "weak" ? "Noted" : "Weak"}
      </button>
    </div>
  );
}
