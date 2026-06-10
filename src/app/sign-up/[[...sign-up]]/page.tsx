import Link from "next/link";
import { SignUp } from "@clerk/nextjs";
import BrandMark from "@/components/brand/BrandMark";
import { DANNY_TAGLINE } from "@/lib/danny/presence";
import { clerkAppearance } from "@/lib/auth/clerk-appearance";

export default function SignUpPage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center px-6 py-12">
      <div className="glow-orb left-1/2 top-1/3 h-[28rem] w-[28rem] -translate-x-1/2" />

      <div className="relative z-10 w-full max-w-md">
        <Link
          href="/"
          className="mb-6 inline-block font-[family-name:var(--font-jetbrains)] text-[11px] uppercase tracking-[0.12em] text-[var(--text-faint)] hover:text-[var(--text)]"
        >
          ← Back
        </Link>

        <div className="mb-8">
          <BrandMark size="sm" />
          <h1 className="mt-6 font-[family-name:var(--font-rethink)] text-3xl font-extrabold tracking-tight">
            Create your account
          </h1>
          <p className="mt-2 text-sm text-[var(--text-dim)]">{DANNY_TAGLINE}</p>
        </div>

        <SignUp
          appearance={clerkAppearance}
          routing="path"
          path="/sign-up"
          signInUrl="/sign-in"
          forceRedirectUrl="/onboarding"
        />
      </div>
    </main>
  );
}
