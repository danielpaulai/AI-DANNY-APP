"use client";

import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport, type UIMessage } from "ai";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { toast } from "sonner";
import DannyAvatar from "@/components/danny/DannyAvatar";
import { sanitizeVoiceOutput } from "@/lib/agents/voice-guardrails";
import { cn } from "@/lib/utils";

const SUGGESTIONS = [
  "I'm having a rough week. Help me reset.",
  "How do I stay motivated when pipeline is slow?",
  "Give me a Stoic reframe for something I can't control.",
  "What's one small win I can get today?",
  "I feel like an imposter. Talk me through it.",
  "Help me balance life and business without the guilt trip.",
];

function getMessageText(message: UIMessage): string {
  const raw = message.parts
    .filter((p): p is { type: "text"; text: string } => p.type === "text")
    .map((p) => p.text)
    .join("");
  return message.role === "assistant" ? sanitizeVoiceOutput(raw) : raw;
}

export default function CloudChatPanel() {
  const [input, setInput] = useState("");
  const [historyLoaded, setHistoryLoaded] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const transport = useMemo(
    () =>
      new DefaultChatTransport({
        api: "/api/chat",
        body: () => ({ skillId: "cloud" }),
      }),
    [],
  );

  const { messages, sendMessage, setMessages, status } = useChat({
    transport,
    onError: (err) => {
      toast.error(err.message || "Cloud couldn't reach Danny. Try again.");
    },
  });

  const isLoading = status === "submitted" || status === "streaming";

  useEffect(() => {
    fetch("/api/messages?skillId=cloud")
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
      <div className="cloud-shell flex min-h-screen items-center justify-center">
        <p className="text-sm text-[var(--cloud-muted)]">Opening the cloud…</p>
      </div>
    );
  }

  return (
    <div className="cloud-shell relative flex min-h-screen flex-col">
      <div className="cloud-bg" aria-hidden />
      <div className="cloud-orb cloud-orb-a" aria-hidden />
      <div className="cloud-orb cloud-orb-b" aria-hidden />

      <header className="relative z-10 mx-auto flex w-full max-w-3xl items-center justify-between px-4 py-5 sm:px-6">
        <div className="flex items-center gap-3">
          <div className="cloud-logo flex h-10 w-10 items-center justify-center rounded-2xl bg-white/80 shadow-sm">
            <span className="text-lg" aria-hidden>
              ☁️
            </span>
          </div>
          <div>
            <p className="font-[family-name:var(--font-rethink)] text-lg font-extrabold tracking-tight text-[var(--cloud-text)]">
              Danny Cloud
            </p>
            <p className="text-xs text-[var(--cloud-muted)]">
              Ask anything. Lighter. Supportive.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/app"
            className="hidden rounded-full border border-[var(--cloud-border)] bg-white/70 px-4 py-2 text-xs font-semibold text-[var(--cloud-text)] shadow-sm transition hover:bg-white sm:inline-block"
          >
            Full workspace →
          </Link>
          <UserButton
            appearance={{
              variables: {
                colorPrimary: "#6366f1",
                colorBackground: "#ffffff",
              },
            }}
          />
        </div>
      </header>

      <div
        ref={scrollRef}
        className="relative z-10 mx-auto w-full max-w-3xl flex-1 overflow-y-auto px-4 pb-32 pt-2 sm:px-6"
      >
        {messages.length === 0 ? (
          <div className="flex flex-col items-center pt-8 text-center sm:pt-16">
            <DannyAvatar size="lg" className="mb-6 ring-4 ring-white/80" />
            <h1 className="font-[family-name:var(--font-rethink)] text-3xl font-extrabold tracking-tight text-[var(--cloud-text)] sm:text-4xl">
              What's on your mind?
            </h1>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-[var(--cloud-muted)]">
              Motivation, mindset, life, business, a bad day, a big decision.
              Same Danny brain. Softer landing.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-2">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => submit(s)}
                  className="cloud-chip rounded-full border border-[var(--cloud-border)] bg-white/75 px-4 py-2.5 text-left text-xs leading-snug text-[var(--cloud-text)] shadow-sm transition hover:border-[var(--cloud-accent)] hover:bg-white"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="space-y-4 pb-4">
            <AnimatePresence initial={false}>
              {messages.map((m) => (
                <motion.div
                  key={m.id}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={cn(
                    "flex",
                    m.role === "user" ? "justify-end" : "justify-start",
                  )}
                >
                  <div
                    className={cn(
                      "max-w-[88%] rounded-2xl px-4 py-3 text-[15px] leading-relaxed shadow-sm",
                      m.role === "user"
                        ? "cloud-bubble-user text-white"
                        : "cloud-bubble-assistant text-[var(--cloud-text)]",
                    )}
                  >
                    {m.role === "assistant" && (
                      <div className="mb-2 flex items-center gap-2">
                        <DannyAvatar size="xs" />
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--cloud-muted)]">
                          Danny Cloud
                        </span>
                      </div>
                    )}
                    <div className="whitespace-pre-wrap">{getMessageText(m)}</div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            {isLoading && (
              <div className="flex items-center gap-2 text-sm text-[var(--cloud-muted)]">
                <span className="cloud-pulse h-2 w-2 rounded-full bg-[var(--cloud-accent)]" />
                Thinking…
              </div>
            )}
          </div>
        )}
      </div>

      <div className="fixed bottom-0 left-0 right-0 z-20 border-t border-[var(--cloud-border)]/60 bg-white/70 px-4 py-4 backdrop-blur-xl sm:px-6">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            submit(input);
          }}
          className="mx-auto flex max-w-3xl items-end gap-2"
        >
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            rows={1}
            placeholder="Ask anything…"
            className="cloud-input max-h-32 min-h-[48px] flex-1 resize-none rounded-2xl border border-[var(--cloud-border)] bg-white px-4 py-3 text-sm text-[var(--cloud-text)] shadow-sm outline-none transition placeholder:text-[var(--cloud-muted)] focus:border-[var(--cloud-accent)]"
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
            className="cloud-send flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-white shadow-md transition disabled:opacity-40"
            aria-label="Send"
          >
            ↑
          </button>
        </form>
        <p className="mx-auto mt-2 max-w-3xl text-center text-[10px] text-[var(--cloud-muted)]">
          Supportive coaching, not therapy. For strategy and pipeline, use{" "}
          <Link href="/app" className="underline">
            full workspace
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
