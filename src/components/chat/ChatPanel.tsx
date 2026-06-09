"use client";

import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport, type UIMessage } from "ai";
import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import SkillPicker from "./SkillPicker";
import { getSkill, type SkillId } from "@/lib/agents/skills";
import { cn } from "@/lib/utils";

function getMessageText(message: UIMessage): string {
  return message.parts
    .filter((p): p is { type: "text"; text: string } => p.type === "text")
    .map((p) => p.text)
    .join("");
}

export default function ChatPanel() {
  const [skillId, setSkillId] = useState<SkillId>("general");
  const [input, setInput] = useState("");
  const [historyLoaded, setHistoryLoaded] = useState(false);
  const skill = getSkill(skillId);
  const scrollRef = useRef<HTMLDivElement>(null);

  const transport = useMemo(
    () =>
      new DefaultChatTransport({
        api: "/api/chat",
        body: () => ({ skillId }),
      }),
    [skillId],
  );

  const { messages, sendMessage, setMessages, status } = useChat({ transport });
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
      <div className="flex flex-1 items-center justify-center text-sm text-[var(--text-dim)]">
        Loading conversation…
      </div>
    );
  }

  return (
    <div className="flex h-full min-h-0 flex-col">
      <header className="border-b border-[var(--dark-border)] px-6 py-5">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="pp-eyebrow mb-2 text-[10px]">Purely Personal Branding</p>
            <h1 className="font-[family-name:var(--font-rethink)] text-2xl font-extrabold tracking-tight">
              {skill.label}
            </h1>
            <p className="mt-1 text-sm text-[var(--text-dim)]">{skill.description}</p>
          </div>
          <SkillPicker active={skillId} onChange={setSkillId} />
        </div>
      </header>

      <div ref={scrollRef} className="flex-1 overflow-y-auto px-6 py-6">
        {messages.length === 0 ? (
          <div className="mx-auto max-w-2xl pt-8">
            <p className="font-[family-name:var(--font-rethink)] text-3xl font-extrabold leading-tight tracking-[-0.02em]">
              Ask anything about your brand, content, or next move.
            </p>
            <p className="mt-4 max-w-lg text-[var(--text-dim)]">
              Grounded in Danny&apos;s methodology. Cited frameworks. One clear action per answer.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
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
                    "rounded-md px-4 py-3",
                    m.role === "user"
                      ? "ml-8 border border-[var(--dark-border)] bg-[var(--dark-card)]"
                      : "mr-4 border-l-4 border-l-[var(--pp-red)] bg-transparent pl-5",
                  )}
                >
                  <p className="pp-eyebrow mb-2 text-[10px]">
                    {m.role === "user" ? "You" : "AI Danny"}
                  </p>
                  <div className="prose-danny whitespace-pre-wrap text-[15px] leading-relaxed">
                    {getMessageText(m)}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            {isLoading && (
              <div className="mr-4 flex items-center gap-2 text-sm text-[var(--text-dim)]">
                <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--pp-red)]" />
                Thinking…
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
