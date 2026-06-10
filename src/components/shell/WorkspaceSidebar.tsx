"use client";

import { UserButton } from "@clerk/nextjs";
import type { ClientWorkspace } from "@/lib/workspaces/types";
import BrandMark from "@/components/brand/BrandMark";
import DannyPresenceCard from "@/components/danny/DannyPresenceCard";

type Props = {
  workspace: ClientWorkspace;
};

export default function WorkspaceSidebar({ workspace }: Props) {
  return (
    <aside className="hidden w-72 shrink-0 flex-col border-r border-[var(--dark-border)] bg-[var(--dark-elevated)] p-6 lg:flex">
      <div className="mb-8 flex items-start justify-between gap-3">
        <div>
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

      <div className="mb-6">
        <DannyPresenceCard />
      </div>

      <div className="space-y-5 text-sm">
        <div>
          <p className="pp-eyebrow text-[10px]">Founder</p>
          <p className="mt-1 font-[family-name:var(--font-rethink)] font-bold">
            {workspace.founderName}
          </p>
        </div>
        <div>
          <p className="pp-eyebrow text-[10px]">Business</p>
          <p className="mt-1 text-[var(--text-dim)]">{workspace.business}</p>
        </div>
        <div>
          <p className="pp-eyebrow text-[10px]">Stage</p>
          <p className="mt-1 text-[var(--text-dim)]">{workspace.stage}</p>
        </div>
        <div>
          <p className="pp-eyebrow text-[10px]">Positioning</p>
          <p className="mt-1 leading-relaxed text-[var(--text-dim)]">
            {workspace.positioning}
          </p>
        </div>
      </div>

      <div className="mt-auto rounded-md border border-[var(--dark-border)] border-l-4 border-l-[var(--pp-red)] bg-[var(--dark-card)] p-4">
        <p className="text-xs leading-relaxed text-[var(--text-dim)]">
          This workspace compounds. Every session sharpens context and memory.
        </p>
      </div>
    </aside>
  );
}
