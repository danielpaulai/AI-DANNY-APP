"use client";

import { usePathname } from "next/navigation";
import {
  Show,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";

const hiddenPrefixes = ["/sign-in", "/sign-up", "/app", "/cloud"];

export default function AuthNav() {
  const pathname = usePathname();
  const hidden = hiddenPrefixes.some((p) => pathname?.startsWith(p));

  if (hidden) return null;

  return (
    <header className="relative z-20 flex items-center justify-end gap-3 px-6 py-4">
      <Show when="signed-out">
        <SignInButton mode="redirect" forceRedirectUrl="/app">
          <button
            type="button"
            className="rounded-md border border-[var(--dark-border)] px-4 py-2 text-sm font-medium transition hover:border-[var(--pp-red)] hover:text-[var(--pp-red)]"
          >
            Sign in
          </button>
        </SignInButton>
        <SignUpButton mode="redirect" forceRedirectUrl="/onboarding">
          <button
            type="button"
            className="rounded-md bg-[var(--pp-red)] px-4 py-2 text-sm font-extrabold text-white transition hover:bg-[var(--pp-red-deep)]"
          >
            Sign up
          </button>
        </SignUpButton>
      </Show>
      <Show when="signed-in">
        <UserButton
          appearance={{
            variables: {
              colorPrimary: "#e90d41",
              colorBackground: "#1a1a1d",
            },
          }}
        />
      </Show>
    </header>
  );
}
