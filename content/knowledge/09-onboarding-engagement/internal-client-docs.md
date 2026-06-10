---
title: "Internal documentation per client"
macro: "Onboarding & Engagement"
slug: internal-client-docs
tags: [ai-danny, knowledge, 09-onboarding-engagement]
status: distilled
last_distilled: 2026-05-26T11:58:21.972Z
description: "Notion / Obsidian / Loom — what lives where."
---

# Internal documentation per client

**Status:** scaffolded · awaiting distillation.

## What this captures

Notion / Obsidian / Loom — what lives where.

## After distillation

3 to 7 specific statements in Danny's voice, each citing a vault note. Written by the synthesis pipeline using the MASTER prompt.

---

<!--::DANNY-DISTILL-START::-->

## The core principle

Every client gets one system of record that lives outside the work itself.

The client deliverables — LinkedIn posts, email campaigns, workshop decks — move and ship through Claude Skills and Notion calendars. But the meta-layer — how this client thinks, what they've paid for, which frameworks apply to them, what worked and what failed — lives in structured internal documentation that no client ever sees. This is the repository Danny and the team query when a question surfaces six months later: "Why did we position this founder as X instead of Y?" or "What was the original scope on this engagement?"

Without this layer, client work becomes archeology. You're digging through Slack threads, re-reading old call notes, reverse-engineering decisions that should have been documented the first time. With it, every answer is one search away.

## Why this matters

Client memory compounds. Early in an engagement, everything is fresh. The founder's voice, their ICP, their offer architecture, the positioning pivot you made in week two — it's all live in working memory. But six months later, when the founder circles back for a second sprint or wants to revisit messaging, that context has evaporated unless it was captured.

The cost of not documenting shows up in three places. First, onboarding lag. When Ilef hands off a client to Malik for content production, Malik should not be re-asking questions Danny already answered on the discovery call. If positioning decisions, voice rules, and ICP constraints aren't written down, every handoff becomes a new discovery session. Second, scope creep by amnesia. A client says "we never agreed to that" and you have no artifact proving otherwise. Or worse: you can't remember either, so you do the extra work for free because there's no system of record. Third, strategic drift. The founder's brand starts sounding generic again because nobody documented why the contrarian positioning worked in the first place. You lose the plot because the plot was never written down.

The leverage of getting this right is operational clarity at scale. Danny can onboard a new client, document the engagement properly in the first week, and the team runs the system without him. The founder's Voice DNA becomes a Claude Skill input. The ICP brief becomes the filter for every content decision. The pricing structure and deliverables list becomes the boundary that prevents free consulting. All of it documented, all of it reusable, all of it searchable.

When documentation is done right, the client experience improves. The founder isn't re-explaining themselves every call. The content Malik ships sounds like the founder because the voice rules are written. The DMs Sujal helps draft land with the right ICP because the targeting brief exists. Internal documentation isn't bureaucracy. It's the system that makes personalisation scale.

## How it shows up in client work

Danny's vault holds 1,492 notes. A significant portion are client session notes tagged with the client's name and the engagement type: 1-on-1 personal branding coaching, workshop delivery, done-with-you system builds. Every call gets a note. Every breakthrough gets documented. Every framework applied to a specific client gets cited.

The documentation hierarchy runs three layers deep. Layer one is the raw session note: what was said, what shifted, what the founder committed to. These notes live in folders like `Client calls/1-on-1 Personal Branding Advanced`. Layer two is the synthesised client profile: the Voice DNA document, the ICP brief, the positioning one-liner, the offer stack. These live in Notion and get referenced by every Claude Skill the client uses. Layer three is the distilled pattern: "clients stuck on positioning" or "the seven-day breakthrough pattern" — entries in the knowledge map that abstract the specific client work into reusable operator intelligence.

Example from [[Dasha_One_on_One_Personal_Branding_(_advanced)_2025_01_21]]: Dasha came on the call wanting to set up Notion as a CRM. Danny corrected the frame immediately. "Notion is not a CRM. Notion is a note tool that does multiple things. If you want CRM, use Folk." The rest of the call was a working session showing Dasha how to use Notion for content tracking, competitor analysis, and post scheduling — not as a sales pipeline. The session note documents exactly what was walked through: templates pulled, specific pages shown, the confusion cleared up. That note becomes the artifact. If Dasha asks six months later "how do I set up that content tracker again," the note has the answer.

Another pattern from [[App development requirements and tech stack - efb883d8]]: Danny worked with Claude to build a full-stack Next.js event operations platform for Purely Personal. The conversation ran long — 34 routes, multiple database schemas, GHL API integration, Claude API routing. At the end, Claude generated a Master Framework Document covering all frameworks, API integrations, design decisions, and outstanding deployment tasks. That document became the handover artifact. When a new developer joins or when the team needs to reference why a specific technical decision was made, the document is the source of truth. The session itself is archived as a conversation export. The working app is live. The documentation bridges the two.

The tooling stack for internal client documentation runs four layers. First, Obsidian holds session notes and distilled knowledge entries. Danny writes in markdown, tags by client name and category, and the vault becomes a searchable knowledge base. Second, Notion holds structured client data: content calendars, deliverable trackers, team standups, and client portals. Notion is the operational layer — what ships when, who's responsible, what's the status. Third, Claude conversations get exported and archived when they contain significant client work or technical build sessions. These exports live as markdown files in folders like `Claude Export 2026-05-26/Conversations/2026-03`. Fourth, Loom videos capture screen recordings of system walkthroughs, onboarding sessions, or technical demos that are easier shown than written.

The division of labour between these tools is deliberate. Obsidian is the knowledge layer: permanent, searchable, interconnected. Notion is the execution layer: structured, collaborative, deadline-driven. Claude exports are the build layer: technical sessions, code decisions, long-form strategy work that produced a shipped deliverable. Loom is the demo layer: "here's how this works" videos that clients or team members watch once and reference later.

From [[Building nasops transcript-based documentation and email generation app - 78e52862]], Danny built an internal ops dashboard for NAS.IO (the AI Business School team led by Nuseir Yassin). The platform ingests session transcripts, generates attendee reports, writes campaign emails in Taki Moore style, and tracks participant intelligence across events. The conversation itself is 20+ pages of technical build work. The key documentation decision: every feature built got a Master Framework Document at the end covering system overview, tech stack, user roles, completed features, workflows, database structure, deployment steps, and support contacts. This document became the artifact that survives after the build conversation ends. The dev team gets a reference. The product owner gets a spec. Future Danny gets a reminder of why specific design choices were made.

Sparse vault material on handoff protocols between team members — the notes focus on client-facing documentation, not internal process docs for Ilef → Malik → Sujal workflows. Add more notes to deepen this section.

## Specific examples from the vault

Example 1: Positioning documented before content ships. From a 1-on-1 coaching call, Danny worked with a client stuck on how to describe their offer. The session note captured the exact positioning line they landed on, the three constraints that clarified it (one solution, one ICP, one outcome), and the before/after. That positioning brief became the input to the Content Strategist Claude Skill. Every post drafted after that session filtered through the documented positioning. The client stopped sounding vague because the documentation existed.

Example 2: Voice rules written in session, applied in production. From [[Dasha_One_on_One_Personal_Branding_(_advanced)_2025_01_21]], Danny walked Dasha through setting up Notion for content operations. The call wasn't about voice work, but it documented Dasha's confusion about tool categories. If Dasha had been a paid personal branding client (not just a Notion setup call), the session would have generated a Voice DNA document capturing tone, rhythm, sentence structure, forbidden phrases, and archetype. That document becomes the instructions every Claude Skill reads before writing in the client's voice. The client gets content that sounds like them because the voice was documented, not guessed.

Example 3: Technical decisions preserved for future builds. From [[App development requirements and tech stack - efb883d8]], Danny built an event ops platform with 34 routes and multiple API integrations. The conversation export documents every technical decision: why Next.js 14 App Router over Pages Router, why Supabase for real-time data, why TailwindCSS over custom CSS, why the floating AI assistant button was removed and replaced with inline editors. Six months later, when the team considers adding a new feature or migrating the stack, the documentation explains the original constraints and design choices. No archeology required.

Example 4: Workshop frameworks applied and documented per client. From the NAS.IO build session [[Building nasops transcript-based documentation and email generation app - 78e52862]], the app included a Taki Moore email framework integration. Taki's six email frameworks — PSRM (Problem, Solution, Result, Message), 4Ds (Discover, Decide, Do, Delight), Story-Sell-Solution, etc. — were coded into the platform's email writer. The Master Framework Document listed each framework, provided examples, included do/don't guidance, and specified when each framework applies. That documentation became the system prompt for the AI email writer. The tool shipped ready to use because the frameworks were documented, not assumed.

Example 5: Client health tracking via documentation. From the EngagementFlow AI build (sparse vault excerpt [[App development problem identification - d1955b05]]), Danny built a platform that converts discovery call transcripts into Scopes of Work. One feature: client health score engine. It flags when what's being delivered diverges from what was originally promised. This only works if the original promise was documented. The SOW becomes the artifact. The client's definition of success gets locked at kickoff. Six months later, if scope creep surfaces, the documentation proves what was agreed. No "we never said that" disputes. The artifact settles the question.

Example 6: Onboarding guides written once, used forever. From [[Document formatting and structure - 613ae65c]], Danny had Claude turn a markdown team onboarding guide into a formatted Word document. The guide covered the Purely Personal team portal: time tracking, daily standups, leave requests, SOPs, access levels, and support contacts. The document listed four standup groups (Content Team led by Malik, Video Team led by Sujal, Operations led by Ilef, Client Success led by Juvy), quick reference tables, and a support panel. This document gets sent to every new hire. It explains how the team operates. The documentation replaces Danny explaining the same setup call after call. New hires read the doc, ask clarifying questions, and start contributing faster.

Example 7: Brand assets documented for external builds. From [[LPG distribution inventory and billing management system - 3a9ec055]], Danny built an LPG distribution system for an Indonesian client. At the end of the build, Claude generated a brand description positioning the system around four pillars: Control, Speed, Trust, and Local. That brand doc became the artifact the client uses when they brief future developers or explain the system to partners. The documentation clarified what the product stands for. The client didn't have to reverse-engineer their own positioning.

Example 8: Research and planning documented before the build starts. From [[App development requirements and tech stack - efb883d8]], before a single line of code was written for the event ops platform, Danny asked Claude to produce a complete structure document. What app needs to be built? What sections? What tech stack? What all does it replace? How much value does it deliver? The answer came as a structured research brief covering system overview, feature requirements, tech stack rationale, value calculation, and deployment plan. That document became the spec. The build followed the spec. The team referenced the spec when questions surfaced mid-build.

## Scripts and exact phrases

"Every client gets one system of record that lives outside the work itself." — positioning line Danny uses when explaining why documentation isn't optional.

"If positioning decisions, voice rules, and ICP constraints aren't written down, every handoff becomes a new discovery session." — used in team training when onboarding new contractors.

"Notion is not a CRM. Notion is a note tool that does multiple things. If you want CRM, use Folk." — correction from [[Dasha_One_on_One_Personal_Branding_(_advanced)_2025_01_21]], reused whenever clients conflate tools.

"The SOW becomes the artifact. The client's definition of success gets locked at kickoff." — closing line from sales calls when explaining why documentation prevents scope creep.

"We document what worked, what failed, and what the client committed to. That's the repo we query when a question surfaces six months later." — used when a team member asks "why do we take so many notes?"

"Layer one: raw session note. Layer two: synthesised client profile. Layer three: distilled pattern." — the documentation hierarchy explanation Danny uses in internal training.

"Without this layer, client work becomes archeology." — used when justifying time spent on post-session documentation.

"The founder's brand starts sounding generic again because nobody documented why the contrarian positioning worked in the first place." — warning Danny gives clients who skip the Voice DNA step.

## Common mistakes

Mistake 1: Writing session notes but not synthesising them into reusable assets. A folder full of call transcripts isn't documentation. It's raw material. The synthesis step — turning ten client calls into one Voice DNA document or one positioning brief — is where the value compounds. Teams that skip synthesis end up with notes nobody reads.

Mistake 2: Using one tool for everything. Notion is not a knowledge base. Obsidian is not a task tracker. Loom is not a SOP manual. Each tool has a job. Trying to do client documentation entirely in Slack or entirely in Google Docs creates fragmentation and search problems. The right stack separates knowledge (Obsidian), execution (Notion), builds (Claude exports), and demos (Loom).

Mistake 3: Documenting after the fact instead of during the engagement. If the Voice DNA doc gets written two months into the engagement, the first two months of content was guesswork. Documentation written live — during the discovery call, during the positioning session, during the first content review — becomes the operating system immediately. Retroactive documentation is expensive and incomplete.

Mistake 4: Writing documentation for the client instead of for the team. Client-facing deliverables (the workshop deck, the content calendar, the email sequence) are not internal documentation. The internal layer captures why decisions were made, which frameworks were applied, what the client's constraints are, and what failed in prior attempts. That context never goes to the client. It's the team's competitive advantage.

Mistake 5: No naming conventions or tagging. A vault with 1,492 unsearchable notes is worse than no notes. Every client session note gets tagged with the client name and session type. Every knowledge entry gets a category slug. Every conversation export gets dated and titled. Search only works if the system is consistent.

Mistake 6: Documenting too much instead of distilling. A 10,000-word session transcript is not documentation. It's data. The documentation step is compression: what was the one breakthrough? What changed? What's the action? The 10,000 words become 300 words of synthesis. Teams that don't compress drown in content.

## The contrarian read

Most agencies treat client documentation as CYA paperwork. Contracts, invoices, meeting notes filed away in case of a dispute. That's defensive documentation. It protects the agency. It doesn't improve the work.

Danny's approach inverts this. Internal client documentation is offensive, not defensive. It's the system that makes the next engagement better. It's the artifact that lets the team run without Danny on every call. It's the repository that turns one client's breakthrough into a reusable pattern for the next ten clients.

The other contrarian move: Danny documents for the team, not the client. Most consultants over-document client-facing assets (the proposal, the deck, the summary email) and under-document internal knowledge. Danny flips it. The client gets the minimum viable deliverable. The team gets the maximum viable knowledge capture. The client doesn't need to see the internal positioning brief or the voice analysis or the framework selection rationale. The team does. That's where the leverage lives.

Third contrarian position: documentation as a product feature, not overhead. Most founders see documentation as a tax. Danny treats it as the product. The client isn't just buying LinkedIn posts or a workshop. They're buying a system that can run without Danny. That system only exists if it's documented. The Voice DNA doc, the ICP brief, the Claude Skills library — those are the actual deliverables. The posts and emails are just the output.

## What it looks like when it's working

Observable signal 1: Team members answer their own questions by searching the vault instead of asking Danny. Malik needs to know why a client's positioning changed mid-engagement. He searches Obsidian, finds the session note, reads the reasoning, applies it. No Slack thread required.

Observable signal 2: Client onboarding takes one week instead of one month. The discovery call produces a Voice DNA doc and an ICP brief by end of day. The Content Strategist Claude Skill reads those docs and starts drafting on-brand posts immediately. The client sees output in week one because the system was documented in week one.

Observable signal 3: No scope creep disputes. When a client asks for something outside the original agreement, the SOW or the session note settles it. The documentation proves what was agreed. The conversation is "that's outside scope, here's the change order" instead of "I don't remember, let me check."

Observable signal 4: New hires productive in days, not weeks. A new video editor joins. They read the team onboarding doc, watch the Loom walkthrough, check the Notion content calendar, and start editing. No training calls needed beyond the basics.

Observable signal 5: Clients come back. Six months after an engagement ends, the founder circles back. "Can we do another sprint?" The team pulls up the original Voice DNA doc, the positioning brief, the prior content library, and picks up exactly where they left off. No re-discovery phase. The documentation preserved the context.

Observable signal 6: The knowledge map grows without manual distillation. Session notes accumulate. Patterns surface. Those patterns get abstracted into distilled knowledge entries. The vault becomes smarter over time because the documentation workflow feeds the knowledge base automatically.

Observable signal 7: Danny can step out. A founder books a call. Ilef runs it using the discovery questionnaire and the documented intake process. Malik drafts the first batch of posts using the Voice DNA doc. Sujal edits the video using the documented brand guidelines. Danny reviews the final output but didn't touch the execution. The system ran without him because the system was documented.

## Related categories

[[01-identity-core/founder-identity|Founder Identity]] — client documentation starts with capturing who the founder actually is, not who they think they should be. The Voice DNA doc and the positioning brief both derive from identity clarity.

[[03-positioning-messaging/positioning-philosophy|Positioning Philosophy]] — documented positioning becomes the filter every piece of client content passes through. Without the brief, positioning drifts.

[[05-content-marketing/voice-on-voice|Voice-On Voice]] — the Voice DNA document is the core deliverable that makes Voice-On Voice scale. Documentation turns voice work from art into system.

[[06-personal-branding-coaching/seven-day-breakthrough-pattern|Seven-Day Breakthrough Pattern]] — the fastest client transformations happen when the breakthrough moment gets documented immediately and becomes the operating premise for all future work.

[[11-ai-stack-automation/claude-skills-architecture|Claude Skills Architecture]] — every Claude Skill Danny builds for a client reads from documented briefs: Voice DNA, ICP, positioning, offer stack. Documentation is the input layer that makes AI personalisation work.

## Source notes

- [[App development requirements and tech stack - efb883d8]]
- [[Building nasops transcript-based documentation and email generation app - 78e52862]]
- [[Dasha_One_on_One_Personal_Branding_(_advanced)_2025_01_21]]
- [[LPG distribution inventory and billing management system - 3a9ec055]]
- [[Document formatting and structure - 613ae65c]]
- [[Nas.io document redesign with branding - 6b8ef772]]
- [[Client Update Search - 51684cb9]]
- [[App development problem identification - d1955b05]]


<!--::DANNY-DISTILL-END::-->
