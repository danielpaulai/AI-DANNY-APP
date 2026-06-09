"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { UserButton } from "@clerk/nextjs";
import ChatPanel from "@/components/chat/ChatPanel";
import WorkspaceSidebar from "@/components/shell/WorkspaceSidebar";
import BrandMark from "@/components/brand/BrandMark";
import type { ClientWorkspace } from "@/lib/workspaces/types";

export default function AppPage() {
  const router = useRouter();
  const [workspace, setWorkspace] = useState<ClientWorkspace | null>(null);

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

  if (!workspace) {
    return (
      <div className="flex min-h-screen items-center justify-center text-sm text-[var(--text-dim)]">
        Loading workspace…
      </div>
    );
  }

  return (
    <main className="relative flex min-h-screen flex-col lg:flex-row">
      <div className="flex items-center justify-between border-b border-[var(--dark-border)] bg-[var(--dark-elevated)] px-4 py-3 lg:hidden">
        <BrandMark size="sm" showTagline />
        <UserButton
          appearance={{
            variables: {
              colorPrimary: "#e90d41",
              colorBackground: "#1a1a1d",
            },
          }}
        />
      </div>
      <WorkspaceSidebar workspace={workspace} />
      <section className="relative min-h-0 min-w-0 flex-1 lg:min-h-screen">
        <ChatPanel />
      </section>
    </main>
  );
}
