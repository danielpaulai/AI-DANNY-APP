import Link from "next/link";
import BrandMark from "@/components/brand/BrandMark";

export default function LandingPage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="glow-orb -left-32 top-20 h-[36rem] w-[36rem]" />
      <div className="glow-orb right-0 top-1/2 h-[32rem] w-[32rem] opacity-70" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col px-6 py-10">
        <header className="flex items-center justify-between">
          <BrandMark size="md" showTagline />
        </header>

        <section className="flex flex-1 flex-col justify-center py-16">
          <span className="pp-eyebrow pp-eyebrow-pill mb-6 w-fit">
            Purely Personal Branding · Client system
          </span>
          <h1 className="max-w-3xl font-[family-name:var(--font-rethink)] text-5xl font-extrabold leading-[1.02] tracking-[-0.03em] sm:text-6xl">
            Danny&apos;s brain.
            <br />
            Your business.
            <br />
            <span className="text-[var(--pp-red)]">One move at a time.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--text-dim)]">
            AI Danny is the premium operating layer Purely Personal Branding builds
            for founders after the workshop. Methodology-grounded. Workspace-personalized.
            Compounds every week you use it.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/sign-in"
              className="rounded-md bg-[var(--pp-red)] px-7 py-3 text-sm font-extrabold text-white transition hover:bg-[var(--pp-red-deep)]"
            >
              Enter your workspace
            </Link>
          </div>

          <div className="mt-16 grid gap-4 sm:grid-cols-3">
            {[
              ["Cited methodology", "Every answer grounded in Danny's frameworks."],
              ["Your context", "ICP, positioning, and stage loaded per workspace."],
              ["Compounds", "Session memory + brain refresh. Gets sharper over time."],
            ].map(([title, body]) => (
              <div
                key={title}
                className="rounded-md border border-[var(--dark-border)] bg-[var(--dark-card)] p-5"
              >
                <p className="font-[family-name:var(--font-rethink)] font-bold">{title}</p>
                <p className="mt-2 text-sm leading-relaxed text-[var(--text-dim)]">{body}</p>
              </div>
            ))}
          </div>
        </section>

        <footer className="font-[family-name:var(--font-jetbrains)] text-[11px] uppercase tracking-[0.12em] text-[var(--text-faint)]">
          Purely Personal Branding · Private client workspaces only
        </footer>
      </div>
    </main>
  );
}
