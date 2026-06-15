"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { UserButton } from "@clerk/nextjs";
import ChatPanel from "@/components/chat/ChatPanel";
import WorkspaceSidebar from "@/components/shell/WorkspaceSidebar";
import WorkspacePanel from "@/components/shell/WorkspacePanel";
import BrandMark from "@/components/brand/BrandMark";
import PageLoader from "@/components/shell/PageLoader";
import type { ClientWorkspace } from "@/lib/workspaces/types";
import { cn } from "@/lib/utils";

export default function AppPage() {
  const router = useRouter();
  const [workspace, setWorkspace] = useState<ClientWorkspace | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    fetch("/api/workspace")
      .then(async (r) => {
        const data = await r.json().catch(() => ({}));
        if (r.status === 404 && data.error === "no_workspace") {
          router.push("/onboarding");
          return Promise.reject(new Error("no_workspace"));
        }
        if (!r.ok) return Promise.reject();
        return data;
      })
      .then((d) => setWorkspace(d.workspace))
      .catch((err) => {
        if (err instanceof Error && err.message === "no_workspace") return;
        router.push("/sign-in");
      });
  }, [router]);

  useEffect(() => {
    if (!drawerOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setDrawerOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [drawerOpen]);

  if (!workspace) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <PageLoader label="Loading workspace…" />
      </div>
    );
  }

  return (
    <main className="relative flex min-h-screen flex-col lg:flex-row">
      <div className="flex items-center justify-between border-b border-[var(--dark-border)] bg-[var(--dark-elevated)] px-4 py-3 lg:hidden">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setDrawerOpen(true)}
            className="rounded-md border border-[var(--dark-border)] p-2 text-[var(--text-dim)] transition hover:border-[var(--pp-red)] hover:text-[var(--text)]"
            aria-label="Open workspace menu"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <BrandMark size="sm" />
        </div>
        <UserButton
          appearance={{
            variables: {
              colorPrimary: "#e90d41",
              colorBackground: "#1a1a1d",
            },
          }}
        />
      </div>

      {drawerOpen && (
        <>
          <button
            type="button"
            className="fixed inset-0 z-40 bg-black/60 lg:hidden"
            aria-label="Close menu"
            onClick={() => setDrawerOpen(false)}
          />
          <aside
            className={cn(
              "fixed inset-y-0 left-0 z-50 flex w-72 flex-col overflow-y-auto border-r border-[var(--dark-border)] bg-[var(--dark-elevated)] p-6 shadow-xl lg:hidden",
            )}
          >
            <WorkspacePanel
              workspace={workspace}
              showUserButton={false}
              onNavigate={() => setDrawerOpen(false)}
            />
          </aside>
        </>
      )}

      <WorkspaceSidebar workspace={workspace} />
      <section className="relative min-h-0 min-w-0 flex-1 lg:min-h-screen">
        <ChatPanel />
      </section>
    </main>
  );
}
