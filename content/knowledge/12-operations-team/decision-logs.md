---
title: "Decision logs"
macro: "Operations & Team"
slug: decision-logs
tags: [ai-danny, knowledge, 12-operations-team]
status: distilled
last_distilled: 2026-05-26T11:58:21.991Z
description: "Where you record key decisions and rationale."
---

# Decision logs

**Status:** scaffolded · awaiting distillation.

## What this captures

Where you record key decisions and rationale.

## After distillation

3 to 7 specific statements in Danny's voice, each citing a vault note. Written by the synthesis pipeline using the MASTER prompt.

---

<!--::DANNY-DISTILL-START::-->

## The core principle

Every decision worth making is worth recording, and every decision worth recording is worth explaining to someone who wasn't in the room.

The moment you write down not just what you decided but why you decided it, the decision becomes an asset instead of a memory that fades in three weeks when someone asks "why did we build it this way again?"

## Why this matters

Most operators make the same decision three times because they never wrote it down the first time.

The cost shows up everywhere. Six months later a team member asks why you chose Supabase over Firebase and you can't remember the actual reasoning, so you rehash the entire evaluation again. A new hire joins and questions a tech stack choice, and instead of pointing them to the log you're explaining from scratch. A client asks why you structured their engagement a certain way and you're reconstructing the rationale live on a call instead of pulling up the documented thinking.

The second cost is invisible but more expensive: you can't learn from decisions you didn't record. You can't pattern-match across situations if each decision lives only in your head at the moment you made it. You can't build frameworks from scattered choices. You can't teach your team to make decisions the way you would if there's no artifact showing how you think.

The third cost is trust. When a decision goes wrong and there's no log, it looks like carelessness. When a decision goes wrong and there IS a log showing you considered the risks and chose anyway, it looks like calculated risk-taking. The documented decision earns you the right to be wrong without losing credibility.

Decision logs aren't documentation theatre. They're the operating system for scaling your judgment to other people.

## How it shows up in client work

The pattern shows up clearest in technical decisions because those are the ones that come back to haunt you.

In [[App development requirements and tech stack - efb883d8]], the entire internal Event Operations Platform for Purely Personal got built across 34 routes with specific architectural choices: Next.js 14 App Router, Supabase for real-time data, Claude API, GoHighLevel integration, port 7777, brand color #e90d41. Six months later when a new developer looks at that codebase, every one of those choices has a traceable reason in the conversation log. Why GHL Workflows API? Because it returned 404 on the plan so drip scheduling went through conversations API instead. Why max_tokens 4000 on Claude? Because social media generation was hitting token cutoff when trying to process full weeks. Why remove authentication temporarily? Because Supabase auth configuration issues blocked deployment and the call was "ship now, secure later."

None of those are great decisions in isolation. But they're documented decisions with clear context, which means the next person doesn't have to reverse-engineer the thinking or assume incompetence.

The same pattern ran through [[LPG distribution inventory and billing management system - 3a9ec055]]. PT. Pilar Rekayasa Muda's LPG system hit cascading deployment issues: conflicting port entries, hardcoded localhost URLs, Supabase client naming conflicts, infinite auth polling loops. Every fix got logged with the problem it solved and the constraint it operated under. When the master document shipped covering all 9 sections of the system, the deployment infrastructure section didn't just list the final state — it documented the path that got there. The value isn't "here's what we built." The value is "here's what we tried, what failed, and what we landed on."

In [[Building nasops transcript-based documentation and email generation app - 78e52862]], Danny's working style became the decision framework itself. One file changed at a time with build confirmation before moving on. Hardcoded hex values with no CSS variables. Brand system strictly enforced. Session AI opening hook leads with positive outcome not engagement gimmicks. Every one of those preferences got documented through the session because Danny caught violations live and corrected them. The eighth session became a decision log by accumulation. The next developer working on NasOps doesn't need to ask "how does Danny want this formatted?" — they read the log.

The pattern that makes decision logs work in client contexts is specificity with consequences named. [[Building an AI brain protocol for leadership decisions - 466ee3a2]] breaks down exactly that problem: how do you structure an Obsidian vault so an AI COO retrieves the right context instead of grabbing irrelevant files? The answer isn't "use good tags." The answer is "consistent frontmatter with decision-type, date, status fields; atomic notes not giant dumps; index notes that link out like a Decisions MOC." Each piece has a job. The decision log explains what breaks if you skip any piece.

Another client pattern: decision logs become training material. In [[Nas.io document redesign with branding - 6b8ef772]], Danny and Claude built a master title-writing rules document by extracting all of Nuseir's rejections, Alexa's feedback patterns, Danny's preferences, and approved title examples. That's a decision log formatted as an operating manual. The document doesn't just say "write good titles." It says "setup line, bold punch line with one italic highlight word, concrete subtitle. Modeled on the 'Sell The Content You Already Made' poster style." Every rejection from Nuseir became a rule. Every rule became a constraint the next person could execute against without needing to be Nuseir.

The most common failure mode in client work is the decision that lives in Slack and dies three days later. Someone asks a question, you answer it with reasoning, the thread scrolls off, six weeks later someone asks the same question. Decision logs prevent that. If the answer matters enough to type once, it matters enough to save permanently.

## Specific examples from the vault

The cleanest example is [[Propellus_x_PurelyPersonal_Weekly_Alignment_2026_04_09]] and the series of weekly alignment calls with Propellus documented under [[Client Calls - Planning]]. These aren't just meeting notes. They're decision logs in disguise. Every alignment call resolves open questions, sets direction for the next week, and names who owns what. The fact that there are 13 logged planning calls means 13 decision points captured. The alternative is 13 conversations that happened and left no trace.

The decision to build internal operations platforms instead of outsourcing them to agencies shows up across three major logs: the Event Operations Platform for Purely Personal [[App development requirements and tech stack - efb883d8]], the LPG system for PT. Pilar Rekayasa Muda [[LPG distribution inventory and billing management system - 3a9ec055]], and NasOps for AI Business School [[Building nasops transcript-based documentation and email generation app - 78e52862]]. Each one documents a choice to build in-house, own the tech stack, and deliver a system the client runs themselves. That's a pattern decision: "we build systems clients own, not dependencies they rent." The decision log is three major implementations proving the strategy works.

The Noman Khan project in [[Noman]] documents a different kind of decision: strategic positioning. The decision to pivot Noman from traditional cybersecurity leadership into building his own consulting practice wasn't one call. It was a series of choices logged across the project memory: develop productized consulting offerings, build LinkedIn presence through engagement-focused content, create scalable business models, position security as a revenue driver not a cost center. The memory itself is the decision log. Every principle documented is a choice made and defended.

The sales and discovery calls logged in [[Client Calls - Sales and Discovery]] capture a pattern that most operators miss: what you ask on a discovery call is a decision. The fact that there are 11 calls logged with specific clients and dates means 11 times Danny chose what questions mattered enough to record. The decision isn't "should I take notes." The decision is "what's worth preserving from this conversation."

One of the sharpest examples is the GHL integration decision in the Event Operations Platform. The log documents that GHL Workflows API returned 404, so the decision was made to route drip scheduling through the conversations API instead. That's not a great outcome. But it's a documented workaround with a clear trigger condition: "when Workflows API is unavailable on this plan tier, use conversations API." The next developer looking at that code doesn't assume the implementation is wrong — they see it's constrained. The decision log protects the implementer from looking incompetent when they were actually solving around a platform limitation.

Another pattern from [[App development requirements and tech stack - efb883d8]]: decisions that prevent rework. Authentication was added then removed after Supabase auth configuration issues, with the explicit note "to be re-added before Vercel deployment." That's not a flip-flop. That's a staged decision: ship now, secure later, with the security step logged as outstanding. The next person looking at the code doesn't ask "why is there no auth?" They read the log and see "auth is staged for the next deployment phase."

## Scripts and exact phrases

"Every decision worth making is worth recording, and every decision worth recording is worth explaining to someone who wasn't in the room."

"The moment you write down not just what you decided but why you decided it, the decision becomes an asset instead of a memory."

"If the answer matters enough to type once, it matters enough to save permanently."

"The documented decision earns you the right to be wrong without losing credibility."

"When a decision goes wrong and there's no log, it looks like carelessness. When a decision goes wrong and there IS a log showing you considered the risks and chose anyway, it looks like calculated risk-taking."

"Decision logs aren't documentation theatre. They're the operating system for scaling your judgment to other people."

"The decision log protects the implementer from looking incompetent when they were actually solving around a platform limitation."

"You can't learn from decisions you didn't record. You can't pattern-match across situations if each decision lives only in your head at the moment you made it."

## Common mistakes

**Mistake 1: Logging the decision but not the reasoning.** "We chose Supabase" is not a decision log. "We chose Supabase over Firebase because real-time syncing was required for the task tracker and Supabase's row-level security model was simpler to implement for multi-tenant access" is a decision log. The reasoning is the artifact. The choice is just the headline.

**Mistake 2: Writing decision logs after the fact.** If you build the thing first and document the decision later, you're writing archaeology not logging decisions. The log needs to be written when the constraints are live, when you still remember what you considered and rejected. Retroactive documentation always misses the alternatives that didn't ship.

**Mistake 3: Logging every micro-decision.** Decision logs are for forks in the road, not every step along the path. "We chose to make the button blue" is not worth logging unless blue vs red had material implications for conversion or brand. "We chose to build a custom auth flow instead of using Clerk because we needed SAML SSO for enterprise clients and Clerk's pricing was prohibitive at our scale" is worth logging. The test: would someone six months from now need to know why you made this choice? If no, skip the log.

**Mistake 4: Treating decision logs as immutable records.** Decisions change when constraints change. The log should document both the original decision and the moment it got revisited. The Event Operations Platform auth decision is a perfect example: added, removed, staged for later. That's three states, all logged. The log isn't sacred. It's a living record of evolving thinking.

**Mistake 5: Logging decisions in Slack or email threads.** If the log lives in a conversation stream, it's not a log. It's a message that will scroll off and get lost. Decision logs need a permanent home: a wiki, a project memory file, a dedicated decisions folder in the vault. Searchable, linkable, preserved.

**Mistake 6: Assuming the decision-maker remembers the context forever.** You will not remember why you made that choice in six months. Your future self is a different person with different context. Write the log for that person, not for the version of you sitting here right now who thinks "I'll obviously remember this."

## The contrarian read

Most operators think decision logs are for big strategic choices only. Board-level decisions. "Should we pivot the product line" type choices.

That's backwards. The decisions worth logging are the ones you make ten times a day without realizing they're decisions. Why did you structure the offer that way? Why did you choose that call-to-action? Why did you send the email on Tuesday instead of Thursday? Why did you decide to record this client call but not that one?

The strategic decisions document themselves because everyone's watching. It's the operational decisions, the ones that feel automatic because you've internalized the reasoning, that need logs. Those are the decisions your team can't replicate because the reasoning never got externalized.

The second contrarian take: decision logs should be written for Claude, not for humans. If you structure a decision log so an AI can read it and understand the constraints that drove the choice, you've forced yourself to document at a level of specificity that most people skip. The act of writing for an AI audience makes the log clearer for human readers too. Vague reasoning doesn't satisfy a language model. It won't satisfy a team member either.

The third take: incomplete decision logs are more valuable than perfect ones. A log that says "we chose X because of Y, but we still don't know how to handle Z" is better than no log at all. The admission of uncertainty is useful information. It tells the next person "this decision wasn't final, here's what we didn't resolve." Most people wait until they have the full picture before logging anything. By then the context is gone.

## What it looks like when it's working

When decision logs are working, new team members onboard themselves by reading old logs instead of asking you the same five questions every hire asks.

When decision logs are working, a technical choice made two years ago still makes sense to the person looking at it today because the log explains the constraints that no longer exist.

When decision logs are working, arguments get shorter because someone can say "we decided this in the March 2024 alignment call, here's the log" and the conversation shifts from relitigating the decision to executing against it.

When decision logs are working, you can hand a project to someone mid-stream and they can pick up where you left off because every fork in the road has been marked with reasoning.

When decision logs are working, you find yourself writing less because you can link to old logs instead of re-explaining the same thinking every time someone asks.

The observable signal: how often does someone on your team say "I found the answer in the logs" instead of "I had to ask you directly." If the ratio is tilting toward self-service, the logs are working. If everyone still pings you for context, the logs aren't detailed enough or aren't structured for discovery.

The financial signal: how many hours a week do you spend re-explaining old decisions? If that number is trending down over six months, the logs are earning their keep. If it's flat or rising, you're either not logging enough or not linking to logs when people ask.

## Related categories

- [[11-operations/systems-over-memory|Systems Over Memory]] — decision logs are the executable memory of your business
- [[11-operations/documentation-standards|Documentation Standards]] — the formatting rules that make logs searchable and reusable
- [[09-strategy/constraint-based-decisions|Constraint-Based Decisions]] — how to document the constraints that shaped a choice, not just the choice itself
- [[11-operations/knowledge-systems|Knowledge Systems]] — how decision logs fit into a broader structure for capturing and surfacing institutional knowledge
- [[15-decisions/reversible-vs-irreversible|Reversible vs Irreversible]] — how to decide which decisions need heavy logging and which can be made fast and changed later

## Source notes

- [[App development requirements and tech stack - efb883d8]]
- [[LPG distribution inventory and billing management system - 3a9ec055]]
- [[Building nasops transcript-based documentation and email generation app - 78e52862]]
- [[Client Calls - Planning]]
- [[Nas.io document redesign with branding - 6b8ef772]]
- [[Building an AI brain protocol for leadership decisions - 466ee3a2]]
- [[Client Calls - Sales and Discovery]]
- [[Noman]]


<!--::DANNY-DISTILL-END::-->
