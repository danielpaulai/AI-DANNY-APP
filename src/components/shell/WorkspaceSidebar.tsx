"use client";

import type { ClientWorkspace } from "@/lib/workspaces/types";
import WorkspacePanel from "@/components/shell/WorkspacePanel";

type Props = {
  workspace: ClientWorkspace;
};

export default function WorkspaceSidebar({ workspace }: Props) {
  return (
    <aside className="hidden w-72 shrink-0 flex-col border-r border-[var(--dark-border)] bg-[var(--dark-elevated)] p-6 lg:flex">
      <WorkspacePanel workspace={workspace} />
    </aside>
  );
}
