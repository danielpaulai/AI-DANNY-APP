---
title: "Skill testing / iteration loop"
macro: "AI Stack & Workflow Systems"
slug: skill-testing-iteration
tags: [ai-danny, knowledge, 11-ai-stack-workflows]
status: distilled
last_distilled: 2026-05-26T11:58:21.964Z
description: "How you refine a skill over time."
---

# Skill testing / iteration loop

**Status:** scaffolded · awaiting distillation.

## What this captures

How you refine a skill over time.

## After distillation

3 to 7 specific statements in Danny's voice, each citing a vault note. Written by the synthesis pipeline using the MASTER prompt.

---

<!--::DANNY-DISTILL-START::-->

## The core principle

You don't build a skill once and ship it. You build it, break it, rebuild it, and watch how it fails under real load until it stops failing.

## Why this matters

Most people treat Claude Skills like finished code. They write the SKILL.md, test it once with a happy-path prompt, package it, and assume it works. Then they hand it to a client or use it in production and it collapses the first time someone asks a question slightly differently than the example prompts.

The cost of skipping iteration is credibility. A founder pays you to build them an AI content system. You deliver a skill that sounds smart in the demo but produces generic LinkedIn slop when they use it on their own business. They lose trust in AI, in you, and in the entire promise you sold them.

The leverage of getting this right is compounding reliability. Every iteration makes the skill harder to break. You catch the edge cases. You tighten the triggers. You refine the voice matching logic. You add the safeguards that prevent hallucination or scope creep. By the fifth version, the skill becomes the thing clients run daily without thinking about it, which is the only standard that matters.

Skills that work in demos but fail in production are worse than no skills at all. They burn time, damage reputation, and train the user to stop trusting automation.

## How it shows up in client work

The pattern shows up the same way every time: a client books a call excited about a skill I demoed in a workshop, I build them a custom version for their business, they use it three times and it works perfectly, then the fourth time it outputs something completely off-brand and they assume the whole system is broken.

What actually happened is the skill hit a trigger condition I didn't test for. Maybe they phrased the prompt as a question instead of a command. Maybe they attached a PDF instead of pasting text. Maybe they used industry jargon the voice rules didn't account for. The skill didn't fail because it was bad. It failed because I shipped it after one round of testing.

The fix is always the same: I pull the transcript of the failed prompt, identify what the skill missed, update the SKILL.md with a new trigger pattern or a new safeguard, repackage it, reinstall it, and test again with five variations of the same broken prompt. Then I test five more scenarios I think might break it next. By the third iteration, the failure rate drops to near zero.

[[Creating a new Claude skill - b2426846]] shows this pattern clearly. I built the LinkedIn Triple Pack skill in one session, packaged it, and delivered it. The skill worked perfectly for the first test: "Write LinkedIn content on why founders need a strong personal brand in 2026." Full triple pack, clean output, voice on point. But I didn't test it with a voice DNA file attached yet. I didn't test it with vague prompts. I didn't test it with a founder whose ICP wasn't clearly defined. Those tests would have surfaced failure modes before a paying client hit them.

The iteration loop I use now: build the skill, test it with the canonical prompt (the one prompt it was designed for), test it with five variations of that prompt, test it with edge cases (vague input, wrong file type, conflicting instructions), break it intentionally, fix what broke, repackage, reinstall, test the same sequence again. If it survives three full loops without failing, it's ready to hand off.

[[Building a closing playbook - 381021dc]] demonstrates the same principle in a different context. I built the closing playbook skill from Alex Hormozi's <!--::DANNY-DISTILL-START::-->00M Playbook document in one session. The skill had a clear structure: SKILL.md with the blame framework, reference files with the actual close scripts organized by objection type, and an asset template for sales teams. I packaged it, validated it, and delivered it. But I didn't test whether the skill could handle a sales call with multiple objections stacked together. I didn't test whether it would pull the right close when the objection was phrased differently than the canonical examples. I didn't test whether it would default to generic sales advice when the exact script didn't match. Those are the tests that surface whether the skill is production-ready or demo-ready.

The first iteration always reveals missing triggers. The canonical prompt works, but the five variations don't. The skill fires on "Write me a LinkedIn post" but not on "I need content for LinkedIn." The skill assumes the user will paste in their Voice DNA file but doesn't handle the case where they forget to attach it. The skill outputs a beautiful carousel but doesn't specify dimensions, so the client exports it and the text gets cut off on mobile.

The second iteration always reveals voice drift. The skill outputs content that sounds like the client at first, then drifts into AI-slop phrases from the blacklist. The hook is strong but the body uses "dive deeper" or "let's unpack." The CTA says "drop a comment below" when the client never talks like that. Voice drift happens when the skill has competing instructions: one layer says "write in the founder's voice" and another layer says "make it engaging." The second layer wins and the output becomes generic.

The third iteration always reveals scope creep. The skill was supposed to generate a single LinkedIn post but starts offering to build a 30-day content calendar. The skill was supposed to rewrite one hook but starts critiquing the entire positioning. The skill was supposed to output a carousel and stops to ask clarifying questions about the ICP. Scope creep happens when the skill's description is too broad or when the trigger prompts overlap with other skills the user has installed.

[[Carousel creation skill ideas for marketing - 1be5146e]] shows iteration under live demo pressure. I built three skills in one session: a one-page offer builder, a social proof card studio, and a carousel builder. Each skill worked on the first test. Then I ran a visual critique and found six failure modes: overuse of emoji instead of SVG icons, flat hero sections with no texture, weak Before/After contrast, too much text per carousel slide, no touch swipe support, and missing value stack pricing. I rebuilt all three as v2 versions with every improvement applied. The v2 skills didn't just look better. They were structurally harder to break because I had tested them against real visual standards and real use cases instead of just "does it output something."

The difference between a v1 skill and a v3 skill is reliability under variance. A v1 skill works when you use it exactly the way it was demoed. A v3 skill works when a client uses it at 11pm on their phone with a typo in the prompt and a Voice DNA file that's three months old.

## Specific examples from the vault

[[Making sessions AI school friendly - 5f56aa1f]] shows the iteration loop applied to session titles instead of skills, but the principle is identical. I built 30 session titles for NAS AI School in one pass, then ran them through Alex Hormozi and Nuseir Yassin style checks. The first iteration revealed that most titles were too technical: "Use Claude Code Voice Mode to Code 3x Faster" assumes the audience knows what Claude Code is. "Create AI Agents That Monitor Your Business 24/7 with Claude /loop" assumes they know what /loop means. Both failed the plain-English test.

The second iteration revealed that the titles didn't answer the three questions Alex and Nuseir ask about every session: what is this about, what do I take away, what is the outcome. "Generate Professional Videos from Text in 30 Seconds with AI" says what the tool does but not what the participant walks away with. Is it a video for social media? A product demo? An ad? The title doesn't say.

The third iteration revealed that the titles used AI-slop patterns even when they were technically correct. "Avoid AI Copyright Issues While Creating Commercial Content" is accurate but sounds like a compliance webinar. The rewrite became "How to Use AI Content Without Getting Sued" — same meaning, sharper language, clearer outcome.

The final title ruleset that emerged from iteration: no "How to" openings, no em dashes, no model version numbers, no technical acronyms unless universally recognized, no vague aspirational language, and outcome visibility in the title itself with the tool named only when widely known. That ruleset didn't exist before iteration. It was built by watching 30 titles fail the same tests repeatedly.

[[Building nasops transcript-based documentation and email generation app - 78e52862]] shows iteration at the feature level. I built the NasOps dashboard in eight sessions. Session 8 alone included: rebuilding the Command Center with multi-file upload zones, adding a collapsible sidebar with localStorage persistence, implementing Voyage AI embeddings for feedback clustering, building a Weekly Summary zone with Supabase persistence, updating the Session AI system prompt to master documentarian format with URL pre-extraction, and adding PNG/PDF export with branded dark gradient cards.

Every feature required multiple iterations. The Session AI opening hook initially led with engagement gimmicks instead of positive outcomes. The signals slide initially used hardcoded strings instead of auto-generating from real data. The participant data initially disappeared on page refresh because I didn't reload it from localStorage in useEffect. The PDF processing initially tried to batch all files at once and hit token limits. Each failure surfaced a specific fix: rewrite the prompt, pull from state, add the useEffect hook, process one file at a time.

The iteration rule Danny enforced: one file changed at a time with build confirmation before moving on. No multi-file rewrites where one bug could cascade into five broken features. This forced me to isolate each failure, test the fix, confirm it worked, then move to the next failure. By the end of Session 8, the dashboard had survived enough iteration cycles that new features could be added without breaking existing ones.

[[Taki Workshop project planning - 0efb0db2]] shows iteration applied to teaching materials. I built workshop deliverables for a two-day AI Marketing Team session: a Brand Brain worksheet, a Skill Stack worksheet, and a full teaching plan with six-slide deck outlines. The first iteration produced worksheets that looked clean but didn't match the Taki style guide: wrong background color, wrong fonts, wrong border weights. The second iteration fixed the visual layer but didn't account for the actual workflow a participant would follow. The Skill Stack worksheet showed five steps in sequence but didn't clarify which steps happened during the workshop and which happened as homework. The third iteration added pre-work and post-session email templates to the teaching plan, making the participant journey explicit.

The iteration that mattered most: testing whether a real participant could complete the worksheet without additional explanation. The first version assumed the participant already understood terms like "SOP Documentation" and "Master Prompt." The second version added one-line definitions in small text under each section header. That change came from simulating a real session and asking: would someone with no AI background be able to fill this out on their own? The answer was no, so the worksheet got rewritten.

[[Nas.io document redesign with branding - 6b8ef772]] shows iteration driven by stakeholder feedback loops. I rebuilt the March 2026 AI School trainer guide as a formatted docx, then a condensed quick reference docx, both organized by week with color-coded session cards. First iteration: the guide included week theme labels. Alexa flagged them as unnecessary. Second iteration: removed week themes but kept day themes. Alex approved. Third iteration: Fireside chat sessions still had fields for Walk Out With, Primary Tools, and Live Demo. Nuseir rejected that structure because Fireside chats are interviews, not teaching sessions. Fourth iteration: removed those fields for Fireside chats only, preserved them for all other session types, cross-checked all 31 session titles against the source Excel file to confirm accuracy.

Each iteration cycle was triggered by real feedback from real stakeholders. I didn't guess what Nuseir would reject. I shipped the first version, got the rejection, updated the template, shipped v2. That loop repeated four times before the guide was approved. The final version wasn't better because I planned better. It was better because I tested it against real approval criteria and iterated every time it failed.

## Scripts and exact phrases

"Does this skill survive five variations of the same prompt?" — the first test I run after building any skill.

"Break it intentionally, then fix what broke." — the fastest way to surface edge cases.

"One file changed at a time with build confirmation before moving on." — Danny's rule from [[Building nasops transcript-based documentation and email generation app - 78e52862]] that prevents cascading failures.

"Would a client use this on their own without calling me to explain it?" — the standard for whether a skill is production-ready.

"If it worked in the demo but failed in production, we didn't iterate enough." — the post-mortem line I use with clients when a skill breaks.

"Test the canonical prompt, test five variations, test five edge cases, break it on purpose." — the four-step loop I run before shipping a skill.

"Voice drift happens when competing instructions collide. Fix it by making one instruction win." — how I explain voice inconsistency to clients.

"Scope creep happens when the skill description is too broad. Fix it by narrowing the trigger prompts." — the diagnosis I give when a skill starts offering features it wasn't built for.

## Common mistakes

Shipping after one successful test. The canonical prompt works perfectly, so the builder assumes the skill is done. Then a client uses a slightly different phrasing and the skill outputs generic AI content. The fix: test five variations of the canonical prompt before declaring the skill ready.

Skipping edge case testing. The skill works when the user pastes text but breaks when they attach a PDF. The skill works when the Voice DNA file is attached but outputs slop when they forget it. The skill works on desktop but fails on mobile. Edge cases aren't hypothetical. They're the scenarios clients hit in the first week of real use.

Not running the skill through the AI-slop blacklist. The output sounds sharp at first glance but uses "dive deeper," "unlock," or "let's unpack" — phrases the client would never say. The blacklist should be baked into the SKILL.md as a hard constraint, not a post-output filter.

Iterating based on gut feel instead of real failure. A builder rewrites the skill because they think the output could be sharper, but they didn't actually test whether the current version fails. Iteration without failure data is guessing. Iteration after confirmed failure is engineering.

Over-iterating the structure instead of testing the output. The builder spends three hours reorganizing the SKILL.md into cleaner sections but never runs a single test prompt. Structure matters, but only if the output works. Test first, refactor second.

Not tracking what broke between versions. The v1 skill worked, the v2 skill broke, and the builder doesn't know why because they changed five things at once. The fix: change one thing, test, confirm, then change the next thing. Version control for skills is a discipline, not a luxury.

## The contrarian read

Most AI builders treat iteration like a sign of failure. They want to build the perfect skill on the first try and ship it without revisions. That mindset comes from traditional software development, where shipping broken code damages credibility and costs money to patch.

But Claude Skills aren't software. They're prompts. The cost of iteration is near zero. You rewrite the SKILL.md, repackage the skill, reinstall it, and test again. Five minutes. The cost of not iterating is reputational collapse when the skill breaks in front of a paying client.

The best builders iterate fast and often. They don't wait for failure. They test five scenarios they think might break the skill, find the one that does, fix it immediately, and test five more. By the time the skill ships, it has survived 20+ test cases and has been repackaged four times. That's not inefficiency. That's reliability engineering.

The other contrarian take: iteration isn't about perfection. It's about reducing variance. A perfect skill that only works under perfect conditions is useless. A good-enough skill that works under 15 different conditions is production-ready. The goal isn't to build a skill that never fails. The goal is to build a skill that fails predictably, recovers gracefully, and tells the user exactly what went wrong when it does fail.

## What it looks like when it's working

The skill gets used daily without the client asking for help. That's the only metric that matters.

You stop getting "the skill isn't working" messages and start getting "I just used the skill to do X" screenshots.

The client runs the skill in contexts you didn't anticipate and it still produces on-brand output. A founder uses the LinkedIn skill to write a post about a product launch. You built it for thought leadership content. It works anyway because the voice matching logic and the blacklist constraints were tight enough to handle scope drift.

The skill survives being handed off to someone who didn't build it. A founder's VA uses the skill without reading the SKILL.md and gets usable output on the first try. That signals the trigger prompts are clear and the default behavior is sensible.

You can trace every iteration back to a specific failure it prevented. The v1 skill didn't check for Voice DNA files. A client forgot to attach one and got generic output. The v2 skill added a check: if no Voice DNA is detected, prompt the user to attach one before proceeding. That iteration prevented 10+ future failures.

The skill becomes the boring infrastructure that just works. Clients stop talking about it because it's no longer novel. It's just the thing they use every Tuesday to generate their weekly LinkedIn post. That's the signal the iteration loop worked.

## Related categories

[[voice-dna-extraction|Voice DNA Extraction]] — iteration on skills depends on stable voice matching. If the Voice DNA document drifts or the extraction logic changes, every skill that depends on it breaks.

[[trigger-prompt-design|Trigger Prompt Design]] — skills fail most often at the trigger layer. Iterating on trigger prompts is half the iteration work.

[[ai-slop-blacklist|AI-Slop Blacklist]] — iteration catches blacklist violations that the builder didn't see on the first pass.

[[client-handoff-readiness|Client Handoff Readiness]] — a skill isn't ready to hand off until it has survived at least three full iteration loops.

[[failure-mode-documentation|Failure Mode Documentation]] — tracking what broke between versions prevents regression and speeds up future iteration.

## Source notes

- [[Making sessions AI school friendly - 5f56aa1f]]
- [[How compound interest works - c3f5714b]]
- [[Taki Workshop project planning - 0efb0db2]]
- [[Building a closing playbook - 381021dc]]
- [[Creating a new Claude skill - b2426846]]
- [[Carousel creation skill ideas for marketing - 1be5146e]]
- [[Building nasops transcript-based documentation and email generation app - 78e52862]]
- [[Nas.io document redesign with branding - 6b8ef772]]


<!--::DANNY-DISTILL-END::-->
