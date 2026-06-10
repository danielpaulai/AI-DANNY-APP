"use client";

import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport, type UIMessage } from "ai";
import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { toast } from "sonner";
import SkillPicker from "./SkillPicker";
import DannyAvatar from "@/components/danny/DannyAvatar";
import { getSkill, type SkillId } from "@/lib/agents/skills";
import { randomQuip, DANNY_TAGLINE } from "@/lib/danny/presence";
import { sanitizeVoiceOutput } from "@/lib/agents/voice-guardrails";
import { cn } from "@/lib/utils";

function getMessageText(message: UIMessage): string {
  const raw = message.parts
    .filter((p): p is { type: "text"; text: string } => p.type === "text")
    .map((p) => p.text)
    .join("");
  return message.role === "assistant" ? sanitizeVoiceOutput(raw) : raw;
}

export default function ChatPanel() {
  const [skillId, setSkillId] = useState<SkillId>("general");
  const [input, setInput] = useState("");
  const [historyLoaded, setHistoryLoaded] = useState(false);
  const skill = getSkill(skillId);
  const scrollRef = useRef<HTMLDivElement>(null);
  const quip = useMemo(() => randomQuip(), []);

  const transport = useMemo(
    () =>
      new DefaultChatTransport({
        api: "/api/chat",
        body: () => ({ skillId }),
      }),
    [skillId],
  );

  const { messages, sendMessage, setMessages, status } = useChat({
    transport,
    onError: (err) => {
      toast.error(
        err.message.includes("402")
          ? "Out of Mentor credits — top up at platform.thementorprogram.xyz"
          : err.message.includes("404")
            ? "AI model unavailable — check API keys and AI_MODEL in .env.local, then restart dev."
            : err.message || "Could not reach AI Danny. Try again.",
      );
    },
  });
  const isLoading = status === "submitted" || status === "streaming";

  useEffect(() => {
    fetch("/api/messages")
      .then((r) => (r.ok ? r.json() : { messages: [] }))
      .then((data) => {
        if (data.messages?.length) setMessages(data.messages);
      })
      .finally(() => setHistoryLoaded(true));
  }, [setMessages]);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, isLoading]);

  async function submit(text: string) {
    const trimmed = text.trim();
    if (!trimmed || isLoading) return;
    setInput("");
    await sendMessage({ text: trimmed });
  }

  if (!historyLoaded) {
    return (
      <div className="flex flex-1 flex-col items-center justify-center gap-3 text-sm text-[var(--text-dim)]">
        <DannyAvatar size="md" pulse />
        Waking up Danny&apos;s brain…
      </div>
    );
  }

  return (
    <div className="flex h-full min-h-0 flex-col">
      <header className="border-b border-[var(--dark-border)] px-6 py-5">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-4">
            <DannyAvatar size="lg" showOnline />
            <div>
              <h1 className="font-[family-name:var(--font-rethink)] text-2xl font-extrabold tracking-tight">
                {skill.label}
              </h1>
              <p className="mt-1 text-sm text-[var(--text-dim)]">{skill.description}</p>
            </div>
          </div>
          <SkillPicker active={skillId} onChange={setSkillId} />
        </div>
      </header>

      <div ref={scrollRef} className="flex-1 overflow-y-auto px-6 py-6">
        {messages.length === 0 ? (
          <div className="mx-auto max-w-2xl pt-4">
            <div className="flex flex-col items-center text-center sm:flex-row sm:items-start sm:text-left">
              <DannyAvatar size="xl" showOnline className="mb-4 sm:mb-0 sm:mr-6" />
              <div>
                <p className="font-[family-name:var(--font-rethink)] text-3xl font-extrabold leading-tight tracking-[-0.02em]">
                  Hey. I&apos;m AI Danny.
                </p>
                <p className="mt-3 text-[var(--text-dim)]">{DANNY_TAGLINE}</p>
                <p className="mt-3 text-sm italic text-[var(--text-faint)]">
                  &ldquo;{quip}&rdquo;
                </p>
              </div>
            </div>
            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {skill.suggestions.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => submit(s)}
                  className="rounded-md border border-[var(--dark-border)] bg-[var(--dark-card)] p-4 text-left text-sm leading-relaxed text-[var(--text-dim)] transition hover:border-[var(--pp-red)] hover:text-[var(--text)]"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="mx-auto max-w-2xl space-y-6">
            <AnimatePresence initial={false}>
              {messages.map((m) => (
                <motion.div
                  key={m.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={cn(
                    "flex gap-3",
                    m.role === "user" ? "ml-8 flex-row-reverse" : "mr-2",
                  )}
                >
                  {m.role === "assistant" && (
                    <DannyAvatar size="sm" className="mt-1" />
                  )}
                  <div
                    className={cn(
                      "min-w-0 flex-1 rounded-md px-4 py-3",
                      m.role === "user"
                        ? "border border-[var(--dark-border)] bg-[var(--dark-card)]"
                        : "border-l-4 border-l-[var(--pp-red)] bg-[var(--dark-card)]/40 pl-4",
                    )}
                  >
                    <p className="pp-eyebrow mb-2 text-[10px]">
                      {m.role === "user" ? "You" : "AI Danny"}
                    </p>
                    <div className="prose-danny whitespace-pre-wrap text-[15px] leading-relaxed">
                      {getMessageText(m)}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            {isLoading && (
              <div className="mr-2 flex items-start gap-3">
                <DannyAvatar size="sm" pulse />
                <div className="text-sm text-[var(--text-dim)]">
                  <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--pp-red)]" />{" "}
                  Thinking… probably funnier than this loading message.
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          submit(input);
        }}
        className="border-t border-[var(--dark-border)] bg-[var(--dark-elevated)] px-6 py-4"
      >
        <div className="mx-auto flex max-w-2xl items-end gap-3">
          <DannyAvatar size="xs" className="mb-3 hidden sm:block" showOnline />
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            rows={2}
            placeholder="What's the move?"
            className="min-h-[52px] flex-1 resize-none rounded-md border border-[var(--dark-border)] bg-[var(--dark-card)] px-4 py-3 text-sm outline-none transition placeholder:text-[var(--text-faint)] focus:border-[var(--pp-red)]"
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                submit(input);
              }
            }}
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="rounded-md bg-[var(--pp-red)] px-5 py-3 text-sm font-extrabold text-white transition hover:bg-[var(--pp-red-deep)] disabled:opacity-40"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
