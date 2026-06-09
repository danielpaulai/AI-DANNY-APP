"use client";

import { Suspense, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { toast } from "sonner";
import BrandMark from "@/components/brand/BrandMark";

function OnboardingForm() {
  const router = useRouter();
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    fetch("/api/workspace")
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (data?.workspace) router.replace("/app");
      })
      .finally(() => setChecking(false));
  }, [router]);

  if (checking) {
    return (
      <div className="text-sm text-[var(--text-dim)]">Loading…</div>
    );
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/workspace/join", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ accessCode: code }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Could not join workspace");
      toast.success(`Welcome, ${data.workspace.founderName}`);
      router.push("/app");
      router.refresh();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Invalid access code");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="relative z-10 w-full max-w-md rounded-md border border-[var(--dark-border)] bg-[var(--dark-card)] p-8 shadow-2xl shadow-black/40">
      <Link
        href="/"
        className="font-[family-name:var(--font-jetbrains)] text-[11px] uppercase tracking-[0.12em] text-[var(--text-faint)] hover:text-[var(--text)]"
      >
        ← Back
      </Link>

      <div className="mt-6">
        <BrandMark size="sm" showTagline />
      </div>

      <h1 className="mt-6 font-[family-name:var(--font-rethink)] text-3xl font-extrabold tracking-tight">
        Link your workspace
      </h1>
      <p className="mt-2 text-sm text-[var(--text-dim)]">
        Enter the workspace code from your Purely Personal Branding onboarding.
        This links your account to your private AI Danny workspace.
      </p>

      <form onSubmit={onSubmit} className="mt-8 space-y-4">
        <div>
          <label htmlFor="code" className="pp-eyebrow text-[10px]">
            Access code
          </label>
          <input
            id="code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="your-workspace-code"
            className="mt-2 w-full rounded-md border border-[var(--dark-border)] bg-[var(--dark)] px-4 py-3 text-sm outline-none focus:border-[var(--pp-red)]"
            autoComplete="off"
          />
        </div>
        <button
          type="submit"
          disabled={loading || !code.trim()}
          className="w-full rounded-md bg-[var(--pp-red)] py-3 text-sm font-extrabold text-white transition hover:bg-[var(--pp-red-deep)] disabled:opacity-40"
        >
          {loading ? "Linking…" : "Enter workspace"}
        </button>
      </form>

      <p className="mt-6 text-xs leading-relaxed text-[var(--text-faint)]">
        Demo code:{" "}
        <code className="font-[family-name:var(--font-jetbrains)] text-[var(--pp-red)]">
          purely-personal-demo
        </code>
      </p>
    </div>
  );
}

export default function OnboardingPage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center px-6">
      <div className="glow-orb left-1/2 top-1/3 h-[28rem] w-[28rem] -translate-x-1/2" />
      <Suspense
        fallback={
          <div className="text-sm text-[var(--text-dim)]">Loading…</div>
        }
      >
        <OnboardingForm />
      </Suspense>
    </main>
  );
}
