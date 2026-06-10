---
title: "The Claude Code workflow"
macro: "AI Stack & Workflow Systems"
slug: claude-code-workflow
tags: [ai-danny, knowledge, 11-ai-stack-workflows]
status: distilled
last_distilled: 2026-05-26T11:58:22.003Z
description: "How you build with Claude Code specifically."
---

# The Claude Code workflow

**Status:** scaffolded · awaiting distillation.

## What this captures

How you build with Claude Code specifically.

## After distillation

3 to 7 specific statements in Danny's voice, each citing a vault note. Written by the synthesis pipeline using the MASTER prompt.

---

<!--::DANNY-DISTILL-START::-->

## The core principle

Claude Code is not a tool you use to write code faster. It's a new operating model where you treat AI as the full-stack engineer on the project and you act as the product owner who ships.

The shift is from "I type into Claude and it gives me an answer" to "I give Claude a working brief, it builds the entire feature in one pass, I test it live, and I move on."

## Why this matters

Most founders waste 80% of their Claude sessions re-explaining context. Every new chat starts from zero. The AI forgets what you built yesterday. You spend more time briefing than building.

Claude Code solves this by living inside your actual project folder. It reads your files. It knows your stack. It sees your git history. It doesn't need you to explain what the app does because it can literally read the codebase.

The cost of getting this wrong is you stay trapped in the "use ChatGPT to write a function" paradigm. You're still the engineer. The AI is just autocomplete. You ship nothing.

The cost of getting this right is you become a 10x operator overnight. You go from "I can't build this" to "I shipped three features this week." The founder who learns to operate Claude Code as a team replaces an entire dev shop.

This is the actual moat for solo founders in 2025. Not "I know how to use AI." Everyone knows how to use AI. The moat is "I know how to ship production-grade software with AI as my engineer."

## How it shows up in client work

The pattern I see across every client who breaks through is the same. They stop asking Claude Code to "help me write this function" and start giving it the full feature spec in one prompt.

In [[Building nasops transcript-based documentation and email generation app - 78e52862]], Danny (NAS Daily ops lead) is building a full ops dashboard. Session transcripts go in. Documentation comes out. Email campaigns get written. The entire workflow runs through Claude Code.

What's notable is Danny's working style: he pastes outputs, identifies what's wrong, and expects targeted fixes. He doesn't want full file rewrites. He wants Claude Code to edit the exact line that broke and nothing else.

This is the right operating model. Claude Code is the engineer. Danny is the product owner. When a feature breaks, Danny says "the URL extraction in Session AI is wrong — fix it." He doesn't say "can you help me debug this?" He just points at the bug and Claude Code fixes it.

Five iterations to get URL extraction working. Three iterations to get PDF parsing right. That's not a failure. That's exactly how you'd work with a real engineer. You ship, you test, you identify the issue, you fix it. Repeat until it works.

The other pattern in that session: Danny uses localStorage persistence, hardcoded hex values, and brand-strict enforcement. No CSS variables. No ThemeProvider. Just ship the thing. Claude Code adapts to his preferences because he stated them clearly once at the start of the project.

In [[LPG distribution inventory and billing management system - 3a9ec055]], the entire production deployment happened in one session. Eight user roles. Thirty-five features. Eighteen database tables. Three daily email reports. Six WhatsApp triggers.

The breakthrough moment was when Daniel realised the Supabase client needed to be renamed from `supabase` to `supabaseAdmin` across 27 backend files to bypass RLS. Claude Code made that change in one pass. No human could do that without breaking something. Claude Code did it in 30 seconds.

The deployment workflow was pure production ops: fix conflicting port entries, replace hardcoded localhost URLs with relative paths, prefix environment variables correctly for Vite, fix infinite auth polling loop. Each fix was one prompt. Each fix shipped immediately to Replit.

By end of session, login worked. The app was live. The master document was written. The handover call was scheduled.

This is what "AI as your engineer" actually looks like. You're not writing code. You're giving orders. Claude Code is doing the work.

## Specific examples from the vault

In [[Building nasops transcript-based documentation and email generation app - 78e52862]], Danny needed a Participant Intelligence tab with CEO/COO/CMO executive report views and CSV exports. One prompt. Claude Code built the entire tab, wired it into the dashboard, and added the export functionality.

Then he needed a Command Center with three separate multi-file upload zones: Feedback PDF, Feedback Excel, Attendees Excel. Each zone needed Claude AI-powered session merging. One prompt. Claude Code built all three zones and the merge logic.

Then he added Voyage AI embeddings for feedback clustering, topic gap analysis, and similar session detection. Another prompt. Claude Code integrated Voyage AI, built the clustering engine, and wired it into the UI.

The pattern is consistent: one feature = one prompt. No back-and-forth. No "can you also add this?" Just write the full spec once and Claude Code ships it.

In [[Nas.io document redesign with branding - 6b8ef772]], Danny needed a 31-session curriculum document reformatted with NAS.IO branding. Color-coded session cards. Week themes removed. Day themes preserved. Fireside chat sessions reformatted to interview-only structure.

Claude Code read the Excel source file, cross-checked all 31 session titles, rebuilt the entire document with the correct branding, and exported it as a formatted docx. One session. Done.

The key move Danny made: he didn't ask Claude Code to "help him format the document." He said "turn this into a beautifully structured document using NAS.IO branding and fonts." Full brief. Full outcome. Claude Code delivered.

In [[LPG distribution inventory and billing management system - 3a9ec055]], the entire deployment to Replit required fixing six things in sequence: port conflicts, hardcoded URLs, Supabase client naming, environment variable mapping, and infinite auth loop. Each fix was one prompt. Each fix landed correctly.

The moment where this became real: Daniel's SuperAdmin account needed to be created in Supabase. Claude Code discovered the users table schema, wrote the SQL INSERT, confirmed the auth user needed to exist first, and walked Daniel through creating it manually in the Supabase dashboard.

That's not "using AI to write code." That's having a senior engineer who knows the stack, reads the schema, and tells you the exact steps to fix the issue.

## Scripts and exact phrases

"Build this feature in one pass. Don't ask clarifying questions. Make reasonable assumptions and ship it."

"Fix the URL extraction in Session AI. It's failing on lines 47-52. Don't rewrite the whole file. Just fix those lines."

"Read the Excel source file and cross-check all session titles before you rebuild the document."

"Rename the Supabase client from `supabase` to `supabaseAdmin` across all 27 backend files."

"Replace every hardcoded localhost URL with relative /api paths. Then deploy to Vercel and confirm it works."

"I'm pasting the error. Fix it. Don't explain what went wrong. Just push the fix."

"One feature = one prompt. I'm not iterating. Build the whole thing now."

"Read the brand guidelines from the screenshot. Then rebuild the form with the correct colors, fonts, and glassmorphism style."

## Common mistakes

**Mistake 1: Asking Claude Code to "help you" instead of telling it to build the feature.**

The prompt should not be "Can you help me add a user authentication system?" It should be "Build a user authentication system with email/password login, JWT tokens, and protected routes. Use Supabase Auth. Ship it now."

Help-asking is the assistant mindset. Building is the engineer mindset. Claude Code operates as an engineer when you treat it like one.

**Mistake 2: Not giving Claude Code access to your actual project folder.**

If you're copying files into the chat manually, you're doing it wrong. Claude Code should be running inside your project directory so it can read your package.json, see your folder structure, and understand your stack without you explaining it.

Run `cd /path/to/project && claude` from your terminal. That's how you start a Claude Code session correctly.

**Mistake 3: Asking Claude Code clarifying questions before it ships.**

Claude Code should make reasonable assumptions and build the feature. If you're getting questions back, your prompt was too vague. Rewrite the prompt with more specificity and re-run it.

The goal is one prompt = one shipped feature. If Claude Code is asking you three clarifying questions, you've added three unnecessary rounds of latency.

**Mistake 4: Letting Claude Code rewrite entire files when you only need one line fixed.**

In [[Building nasops transcript-based documentation and email generation app - 78e52862]], Danny explicitly stated: "Don't rewrite the whole file. Just fix lines 47-52." That's the right move.

When Claude Code rewrites entire files, git diffs become unreadable. You lose the ability to review changes. You introduce new bugs because Claude Code "improved" something you didn't ask it to touch.

Tell Claude Code exactly which lines to change. It will respect that instruction.

**Mistake 5: Not testing immediately after each feature ships.**

Danny's workflow in [[Building nasops transcript-based documentation and email generation app - 78e52862]] was: feature ships → test on localhost → identify what broke → paste the error → Claude Code fixes it → deploy to Vercel → confirm live.

That tight feedback loop is what makes Claude Code work. If you're building five features and then testing all of them at once, you won't know which feature broke the app.

One feature. One test. One deploy. Repeat.

**Mistake 6: Using Claude Code for trivial edits instead of just editing the file yourself.**

If you need to change one color hex value, open the file and change it. Don't ask Claude Code to do it. Claude Code is for building features, not for replacing Cmd+F.

The threshold: if the change requires reading context across multiple files or understanding the data flow, Claude Code does it. If it's a one-line typo fix, you do it.

## The contrarian read

Most people think AI coding tools are about speed. "I can write code 10x faster now!"

That's the wrong frame. Claude Code is not about writing code faster. It's about **shipping features you couldn't ship before because you didn't know how to build them.**

The founder who learns Claude Code doesn't become a faster coder. They become a founder who ships software. That's a different category entirely.

The other contrarian take: Claude Code is better when you **don't** know how to code.

Why? Because you won't try to "help" Claude Code by writing bad code yourself. You'll just describe what you want in plain English and let Claude Code build it. Developers get stuck because they keep trying to "assist" Claude Code by pasting half-broken functions into the prompt.

The best Claude Code operators are product owners who think in features, not engineers who think in functions.

Third contrarian take: **One session per feature is slower but ships faster than ten iterative sessions.**

Danny's workflow in [[Building nasops transcript-based documentation and email generation app - 78e52862]] proves this. He gave Claude Code the full feature spec in one prompt. Claude Code built the entire thing. Five iterations to get URL extraction right. But the feature shipped.

If Danny had tried to "help" Claude Code by building it incrementally (first the upload form, then the parsing logic, then the output formatting), he would have spent three hours instead of thirty minutes.

Write the full spec once. Let Claude Code build it once. Fix what breaks. Ship.

## What it looks like when it's working

You're shipping production features weekly without touching the codebase manually.

You can describe what you want in plain English and it works the first time 70% of the time. The other 30% breaks in predictable ways (missing environment variables, wrong API endpoint, schema mismatch). You fix it in one prompt and move on.

Your git commit history looks like "feat: add user authentication system" followed by "fix: update Supabase RLS policies." Not "trying to fix auth" followed by "still broken" followed by "maybe this works??"

You're deploying to production from your phone. Because all you need to do is paste the error log into Claude Code, wait for the fix, and merge the PR. You don't need to open VS Code. You don't need to "look at the code." Claude Code is the engineer. You're the product owner.

The number to watch: **features shipped per week.** If that number is going up and your hours-worked is staying flat, Claude Code is working.

Before: one feature every two weeks. After: three features per week. Same hours. That's 6x leverage.

The before/after from [[LPG distribution inventory and billing management system - 3a9ec055]]: zero software experience → deployed a full production LPG distribution system with 35 features, 18 database tables, and automated daily reports in 45 days.

That's not "I learned to code faster." That's "I became a software company."

## Related categories

- [[ai-native-content-systems|AI-Native Content Systems]] — Claude Code is the same operating model applied to marketing. You're not "using AI to write posts." You're building a content production system where AI is the team.
- [[building-skills-not-using-tools|Building Skills Not Using Tools]] — Claude Code is not a tool. It's a skill. The skill is "how to operate AI as your engineering team."
- [[founder-as-product-owner|Founder as Product Owner]] — The identity shift required to use Claude Code correctly. You're not the coder. You're the person who decides what gets built.
- [[12-to-2-workflow-compression|12-to-2 Workflow Compression]] — The same compression principle applies to software. What used to take 12 hours of manual coding now takes 2 hours of prompting and testing.
- [[outcome-first-language|Outcome-First Language]] — Every Claude Code prompt should describe the outcome, not the steps. "Build a user authentication system" not "create a login form component."

## Source notes

- [[Building nasops transcript-based documentation and email generation app - 78e52862]]
- [[Claude app conversation sync issues - e0df80ab]]
- [[Nas.io document redesign with branding - 6b8ef772]]
- [[Claude VS Code documentation - 33191a6f]]
- [[LPG distribution inventory and billing management system - 3a9ec055]]
- [[Overview of Claude Max AI Assistant - 1da8f813]]
- [[App development problem identification - d1955b05]]
- [[Building an AI second brain with Obsidian and Claude - ad52b5ac]]


<!--::DANNY-DISTILL-END::-->
