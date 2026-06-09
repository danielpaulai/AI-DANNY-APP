import Link from "next/link";
import { SignIn } from "@clerk/nextjs";
import BrandMark from "@/components/brand/BrandMark";
import { clerkAppearance } from "@/lib/auth/clerk-appearance";

export default function SignInPage() {
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
          <BrandMark size="sm" showTagline />
          <h1 className="mt-6 font-[family-name:var(--font-rethink)] text-3xl font-extrabold tracking-tight">
            Client sign in
          </h1>
          <p className="mt-2 text-sm text-[var(--text-dim)]">
            Purely Personal Branding workspace access for founders.
          </p>
        </div>

        <SignIn
          appearance={clerkAppearance}
          routing="path"
          path="/sign-in"
          signUpUrl="/sign-up"
          forceRedirectUrl="/app"
        />
      </div>
    </main>
  );
}
