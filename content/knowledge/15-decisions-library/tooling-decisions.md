---
title: "Tooling decisions"
macro: "Decisions Library"
slug: tooling-decisions
tags: [ai-danny, knowledge, 15-decisions-library]
status: distilled
last_distilled: 2026-05-26T11:58:21.997Z
description: "Each major tool choice + reason."
---

# Tooling decisions

**Status:** scaffolded · awaiting distillation.

## What this captures

Each major tool choice + reason.

## After distillation

3 to 7 specific statements in Danny's voice, each citing a vault note. Written by the synthesis pipeline using the MASTER prompt.

---

<!--::DANNY-DISTILL-START::-->

## The core principle

Every tool decision is a product decision, not a technical decision.

When you pick a tech stack, you're not choosing what's popular on Twitter or what the senior dev wants to learn. You're choosing what ships fast, stays maintainable, and doesn't lock you into dependencies you can't escape. The tool serves the outcome. The outcome never serves the tool.

## Why this matters

Most founders treat tooling like a research project. They read comparison posts. They ask in Slack channels. They build proof-of-concepts in three frameworks before picking one. Then six months later they're rewriting the entire app because the tool promised scale they didn't need and hid complexity they couldn't manage.

Bad tooling decisions cost you three ways. First, they slow shipping. Every extra dependency is another thing that breaks. Every "industry standard" framework is another 40-hour learning curve before you can move fast. Second, they create technical debt you can't see until you're drowning in it. Supabase auth works great until you need custom flows and realize you're locked into their schema. Third, they drain budget. A tool that costs $50/month at prototype scale costs $800/month at client scale, and you didn't see it coming because you optimized for "getting started fast."

The cost shows up as missed launch dates. As "we need to rebuild this" conversations six months in. As paying a developer <!--::DANNY-DISTILL-START::-->20/hour to duct-tape two services together that were never designed to talk to each other.

The founders who win are the ones who choose boring, proven tools that solve the problem in front of them and nothing else. They don't future-proof. They don't pick tools to impress other developers. They pick tools that let them ship today and refactor tomorrow if the business actually needs it.

## How it shows up in client work

The pattern shows up the same way every time: a founder comes in with a half-built app, a Notion doc full of "features we want to add," and a technical co-founder or agency who sold them on the "right" stack. The app doesn't work yet, but they're already talking about Kubernetes, microservices, and "building for scale."

I ask one question: "What's the one thing this app needs to do to make you money in the next 90 days?"

Most of them can't answer. They've been sold a vision of what the app could be, not what it needs to be right now. [[App development requirements and tech stack - efb883d8]] shows the pattern clearly: Danny builds an internal event operations platform for his team of 10. The requirements are concrete: Campaign Planner, Email Module, Session Builder, GHL integration. The tech stack: Next.js 14, TypeScript, Tailwind, Supabase, Claude API. Deployed on Vercel. Nothing fancy. No "we might need this later." Just the tools that ship the features that matter today.

The conversation shows 34 routes built across all core modules. Every feature decision maps directly to a business outcome. The GHL Workflows API returned 404, so they pivoted to the conversations API. Supabase auth had configuration issues, so they removed it temporarily and committed to re-adding it properly before deployment. No drama. No rewriting the entire stack. Just ship, test, fix, move on.

Compare that to [[App development problem identification - d1955b05]], where the requirements started with "turn customer discovery call transcripts into reviewed, approved, and signed Scopes of Work." The stack: Next.js 14 App Router, TypeScript, Tailwind, Supabase, Anthropic Claude API, Resend for email, Vercel hosting, GitHub CI/CD. Same boring tools. Same pattern. Build the feature, test it live, fix what breaks, ship the next one.

The difference between that founder and the one drowning in technical debt? The first one picked tools that solved the problem. The second one picked tools that looked impressive in the pitch deck.

Another pattern from [[Building nasops transcript-based documentation and email generation app - 78e52862]]: building NasOps, an operations dashboard for AI School. Requirements: paste transcripts, generate session summaries, write campaign emails in Taki Moore style, track attendance, export reports. Stack: Next.js 14, TypeScript, Tailwind, shadcn/ui, Supabase, Anthropic Claude API, Voyage AI for embeddings. Deployed on Vercel.

Sixteen pages. All functional. No rewrites. The session shows the working pattern: build one feature, confirm it works, move to the next. When PDF processing hit token limits, they switched to one file at a time. When Session AI outputs were generic, they rewrote the system prompt to be a master documentarian. No throwing out the stack. No switching frameworks. Just fix the thing that's broken and keep shipping.

The founders who succeed with tooling are the ones who treat every tool as replaceable. They don't fall in love with Supabase or Vercel or Claude. They use them because they solve today's problem. If tomorrow's problem needs a different tool, they swap it out. The stack is a means, not an identity.

## Specific examples from the vault

The clearest example is [[Taki Workshop project planning - 0efb0db2]], where Danny asks why creating a Claude Project actually matters. The answer: "Without a Project, Claude has no persistent memory and every conversation starts blank — equivalent to re-hiring a new employee every session. A Project provides persistent memory across conversations, role separation between different AI employees, and reinforces the 'employee not tool' mental model."

That's the entire tooling philosophy in one answer. The tool (Claude Project) exists to solve one specific problem (persistent memory). It's not about using the latest model. It's not about being on the cutting edge. It's about making the tool do what the business needs it to do.

Another example from [[Making sessions AI school friendly - 5f56aa1f]]: Danny's building session titles for NAS AI School. The tool requirement is simple: titles need to pass Nuseir Yassin's plain-English test (12-year-old anywhere in the world should understand it) and Alex Hormozi's outcome-first test (what's the concrete number, timeframe, and walk-out deliverable). The tool that solves this isn't a fancy title generator. It's Claude running a specific skill that applies both frameworks to every title and rewrites until it passes. The skill file exists because the decision was made to codify the rules once and apply them consistently, not to debate style every time a title needs to ship.

From [[14-day challenge trainer guide - df2161fd]]: building the AI Employee Bootcamp, a 14-day challenge for AI School. Each day has a fixed three-part structure: lesson (under 10 minutes), task (under 30 minutes), community post as proof of work. The challenge required a host and trainer guide, originally built as a DOCX, then rebuilt as an HTML page styled with AI School branding when Danny requested a Notion document.

The tooling decision here: the Notion MCP connector available only supports database schema updates, not rich content creation. So instead of forcing Notion integration or complaining about the limitation, Claude produced a self-contained HTML file with embedded CSS and JavaScript that replicates Notion's visual aesthetic. The file can be embedded in Notion via an Embed block. Problem solved. The tool (HTML) served the outcome (Notion-style document). No waiting for the "right" tool to exist.

[[Nas.io document redesign with branding - 6b8ef772]] shows the same pattern. Danny needed a March 2026 AI School trainer guide formatted as a DOCX, then a condensed quick reference DOCX, then fillable HTML submission forms for a 14-day challenge, first in orange NAS.IO style, then fully rebuilt in AI Business School purple branding after he shared a screenshot. The tool shifted based on the requirement. DOCX when portability mattered. HTML when deployment to Netlify mattered. No single "right" tool. Just the tool that ships the deliverable the client can use today.

From [[Claude design system with 2,025 variations - a6d5e333]]: building a comprehensive design system for Purely Personal with 2,025 unique configurations (45 Visual Styles × 45 Use Cases). The person initially asked for section-level landing page prompts, then clarified they wanted individual component kit prompts for specific UI kits: calculator, background, announcement, border, CTA, comparison, features, logos, maps, images, pricing, testimonials, video. The correction came with a specific request: "world-class quality." Claude rewrote all 13 prompts with exact animation specs, easing curves (e.g., cubic-bezier(0.16, 1, 0.3, 1)), millisecond timings, CSS and JS animation techniques (Framer Motion, FLIP animation, Web Audio API, SVG stroke-dashoffset, clip-path reveals).

The tooling decision: the output needed to look like it cost serious money to produce. So the prompts specified world-class techniques by name. The tool (Claude) ran the prompts. The prompts codified the standard. The standard never dropped below "looks expensive."

Every example follows the same pattern: define the outcome, pick the simplest tool that delivers it, ship fast, refactor only when the business actually needs it.

## Scripts and exact phrases

"Every tool decision is a product decision, not a technical decision."

"The tool serves the outcome. The outcome never serves the tool."

"Pick boring, proven tools that solve the problem in front of them and nothing else."

"What's the one thing this app needs to do to make you money in the next 90 days?"

"The founders who win treat every tool as replaceable. They don't fall in love with the stack."

"Without a Project, you are hiring a new freelancer every Monday who has never heard of you. A Project is the office they work in."

"If the tool promises scale you don't need and hides complexity you can't manage, it's the wrong tool."

"Ship, test, fix, move on. No rewrites. No switching frameworks. Just fix the thing that's broken and keep shipping."

## Common mistakes

The first mistake: picking tools to impress other developers. Founders choose Kubernetes because it's what senior engineers talk about, not because their 10-user MVP needs container orchestration. They choose microservices because they read a blog post about Netflix, not because their monolith is actually causing problems. Result: six months of over-engineering before a single paying customer sees the product.

The second mistake: future-proofing. Founders optimize for scale they don't have. They build auth systems that handle 100,000 users when they have 12. They architect databases for query patterns they haven't validated. They add caching layers before they know what's slow. All of this costs time and money. None of it moves the business forward.

The third mistake: tool lock-in without realizing it. Supabase is great until you need custom auth flows and realize you're locked into their schema. Firebase is great until you need complex queries and realize you're fighting the database. Notion is great until you need automation and realize the API is limited. The founders who avoid this treat every tool as a rental, not a purchase.

The fourth mistake: not reading the docs before committing. From [[App development requirements and tech stack - efb883d8]]: "GHL Workflows API returns 404 on Danny's plan so drip scheduling via conversations API was used instead." That's a tooling decision made in production because someone didn't confirm API access before building the feature. The fix was easy (pivot to conversations API), but it shouldn't have been necessary.

The fifth mistake: treating every bug as a reason to rewrite the stack. From the same note: "GHL pagination required both startAfter timestamp and startAfterId cursor fields." That's not a failure of the tool. That's a pagination pattern you learn by reading the API docs. The fix: add the fields. The wrong move: switch to a different CRM because "GoHighLevel pagination is broken."

The sixth mistake: not having a working pattern. [[Building nasops transcript-based documentation and email generation app - 78e52862]] shows the right pattern: "build one feature, confirm it works, move to the next. When PDF processing hit token limits, they switched to one file at a time." Most founders do the opposite: they build five features, deploy all at once, and spend three days debugging interactions they can't isolate.

## The contrarian read

The conventional wisdom says "choose the right tool for the job." That's wrong. There's no "right" tool. There's only the tool that ships the feature the business needs today.

The conventional wisdom says "use industry-standard tools so you can hire developers easily." That's backwards. You don't pick tools to make hiring easier. You pick tools that let you ship fast and hire when the business can afford it. If you're a solo founder and you choose Rails because "that's what developers know," you just added a six-month learning curve for a benefit you won't see for two years.

The conventional wisdom says "build with scale in mind from day one." That's future-proofing, and it kills more startups than technical debt ever will. Scale is a nice problem to have. Not having customers is a fatal problem to have. Optimize for the fatal problem first.

The contrarian take: the best tool is the one you already know, even if it's "wrong" by framework standards. If you're fast in PHP, build in PHP. If you're fast in Google Sheets, build in Google Sheets. Speed to market beats technical correctness every time. You can refactor when you have paying customers and a reason to.

## What it looks like when it's working

You ship features in days, not weeks. You don't debate tooling decisions in Slack for three hours. You pick the tool, build the feature, test it live, and move on. When something breaks, you fix it in one file and redeploy. No "we need to rebuild this" conversations. No "the stack is the problem" post-mortems.

Your stack looks boring to other developers. Next.js. Supabase. Tailwind. Vercel. Claude API. Resend. The same five tools every time. No custom solutions. No "we built our own auth system." No "we wrote our own ORM." Just the tools that work and a business that ships.

Your technical debt is manageable. You know where the shortcuts are. You know which features were built fast and will need refactoring later. But the business is moving, so the technical debt doesn't matter yet. When it matters, you'll have revenue to pay for the refactor.

Observable signals: deployment time under 5 minutes. Bug fixes shipped same day. New features added without rewriting old features. Zero conversations about "should we switch to X framework." The only metric that matters: time from idea to live in production.

## Related categories

[[identity/business-model|Business model]] — tooling decisions follow business model decisions. If the business is services, don't build SaaS tools. If the business is SaaS, don't build bespoke client solutions. The stack serves the model.

[[operations/workflows|Workflows]] — tools only work if they fit the actual workflow. If your team uses Notion, build outputs that paste into Notion. If your team uses Google Sheets, build CSV exports. The tool that doesn't fit the workflow is the wrong tool, no matter how good it is.

[[strategy/positioning|Positioning]] — if you're positioned as the AI-native operator, your stack should be AI-native. If you're positioned as the no-code consultant, your stack should be no-code. The tools you use signal who you are. Choose accordingly.

[[cash/pricing|Pricing philosophy]] — free tools cost you in time. Paid tools cost you in money. The decision is which one you have more of right now. Early stage: optimize for free tools and your own time. Revenue stage: pay for tools that buy back your time.

[[decisions/mentor-frameworks|Mentor frameworks]] — Taki Moore's teaching structure, Alex Hormozi's outcome-first specificity, Nuseir Yassin's plain-English rule. Every mentor's framework translates into a tooling requirement. If the tool can't deliver the framework, it's the wrong tool.

## Source notes

- [[Taki Workshop project planning - 0efb0db2]]
- [[App development problem identification - d1955b05]]
- [[Making sessions AI school friendly - 5f56aa1f]]
- [[App development requirements and tech stack - efb883d8]]
- [[14-day challenge trainer guide - df2161fd]]
- [[Nas.io document redesign with branding - 6b8ef772]]
- [[Claude design system with 2 025 variations - a6d5e333]]
- [[Building nasops transcript-based documentation and email generation app - 78e52862]]


<!--::DANNY-DISTILL-END::-->
