---
title: "Documentation standards"
macro: "Operations & Team"
slug: documentation-standards
tags: [ai-danny, knowledge, 12-operations-team]
status: distilled
last_distilled: 2026-05-26T11:58:22.008Z
description: "What gets written down, how."
---

# Documentation standards

**Status:** scaffolded · awaiting distillation.

## What this captures

What gets written down, how.

## After distillation

3 to 7 specific statements in Danny's voice, each citing a vault note. Written by the synthesis pipeline using the MASTER prompt.

---

<!--::DANNY-DISTILL-START::-->

## The core principle

If it isn't written down, it doesn't exist.

Every system, every decision, every lesson learned from a client call lives inside a vault note or dies with the person who remembered it.

## Why this matters

Documentation is not busywork. It's the difference between building a business and running a hamster wheel.

When nothing is written down, every new team member re-asks the same questions. Every client engagement starts from scratch. Every framework you've taught 47 times gets explained for the 48th time like it's the first.

The founder becomes the bottleneck. Not because they're incompetent, but because they're the only repository of institutional knowledge. They can't scale because the business is stored in their head.

Documentation creates leverage. One well-written document answers 100 questions. One framework captured properly becomes a teachable asset. One client session transcribed and synthesized becomes a training resource for the next hire.

The cost of not documenting is invisible until it's catastrophic. A team member quits and takes three years of client patterns with them. A founder tries to onboard a new hire and realizes they've never written down how the offer actually works. A client asks "what did we decide last month" and nobody can find the answer.

The companies that scale are the ones where knowledge compounds instead of evaporating.

## How it shows up in client work

The documentation problem shows up in three distinct patterns.

**Pattern 1: The vault that doesn't exist.** Founder has run 200 sales calls, closed 40 clients, built a repeatable offer, and has zero written record of what actually works. They know their pitch. They know their frameworks. But when you ask them to write it down, they stare at a blank page for an hour and produce 300 words of generic marketing copy. The real knowledge is locked in their head. They can't delegate sales because nobody else can replicate the call. They can't productize because they don't know which parts of the process are essential and which are theater. Seen this with a consulting founder who was closing <!--::DANNY-DISTILL-END::-->5K engagements consistently but couldn't train his first hire because he'd never documented his discovery questions. [[Sales_call_2024_08_19]] captures the session where we extracted his entire sales process into a 12-step checklist by recording one live call and transcribing it.

**Pattern 2: The documentation theater company.** The opposite problem. Notion workspace with 847 pages. SOPs for everything. Templates for the templates. And nobody uses any of it. The documentation exists but it's written in corporate zombie language. "Leverage synergies to optimize client touchpoints." Nobody knows what that means. Or it's 4,000 words when it should be 400. Or it was written two years ago and hasn't been updated since the offer changed. This is worse than no documentation because it gives the illusion of structure while actually slowing the team down. A founder client had a 47-page onboarding document that took new hires three days to read. We compressed it to a one-page checklist and a 10-minute Loom. Onboarding time dropped from three weeks to three days. [[Client_onboarding_rebuild_2024_11_03]] documents the full before/after.

**Pattern 3: The AI dump.** Founder discovers Claude, dumps every transcript into it, asks it to "write an SOP," gets 2,000 words of generic process documentation that sounds like it was written by a committee, pastes it into Notion, never looks at it again. This is the 2024 version of documentation theater. The output reads like every other AI-generated document: professional, comprehensive, and completely useless. No voice. No specifics. No "this is the moment the client usually asks about price and here's the exact phrase I use to reframe it." Just endless paragraphs of "ensure alignment" and "facilitate communication."

The pattern that works is different. Documentation that actually gets used has four characteristics: it's short, it's specific, it's in the founder's voice, and it's built from real transcripts not from memory.

## Specific examples from the vault

The LPG distribution system project is the cleanest example of documentation done right. [[LPG distribution inventory and billing management system - 3a9ec055]] captures the full build. Client needed inventory tracking for 8 product types, debt collection workflows, automated email reports, WhatsApp triggers for overdue invoices, and exchange TT status tracking for customers who require physical invoice acknowledgment before payment terms start. The entire system was built from two video transcripts where the client walked through their current manual process. Those transcripts became the requirements document. Every feature in the system maps to a specific sentence the client said. "Many of our customers are still very paper-based and prefer to have a physical copy of the invoice delivered to their office." That one sentence became the Exchange TT workflow with physical receipt tracking. Zero guessing. Zero generic "here's how inventory systems usually work." Just what this specific client said they needed.

The Nas.io redesign project shows the opposite problem and how it gets fixed. [[Nas.io document redesign with branding - 6b8ef772]] documents rebuilding a March 2026 trainer guide that was originally a 47-page Word doc with no structure. The trainer guide listed 31 sessions but buried the actual teaching points in paragraphs of setup text. Trainers couldn't find what to say on stage. We reformatted it into color-coded session cards, removed week theme labels, isolated Fireside Chat sessions with a different template that removed the teaching fields, and cross-checked every title against the source Excel to catch discrepancies. The new guide was 18 pages and trainers could prep a session in 90 seconds instead of 20 minutes.

The March Madness Marathon debrief in [[March Madness Marathon problems and solutions - 508640a8]] is documentation as learning tool. Event ran with 112 attendees when the goal was 200+. Alex (the stakeholder) asked what went wrong. Instead of a verbal debrief, we documented the full post-mortem: wrong day (Sunday, lowest attendance historically), marketing started too late (one week instead of two), no promotional strategy inside existing sessions, competing priorities protecting Nuseir's attendance, too much content crammed into too little time, and no dry run so Jeremiah underperformed and the app crashed mid-session. Every problem got named, cited with who said it, and turned into a rule for the next event. That document is now the checklist for every launch.

The Taki Workshop project planning session in [[Taki Workshop project planning - 0efb0db2]] shows documentation as product artifact. We built a two-day advanced Claude training called "Bring Your First AI Teammate" with a 5-step framework parallel: Set up their desk (create Claude Project), Give them the onboarding manual (upload Brand Brain), Write their job description (configure Custom Instructions), Share company documents (build Knowledge Base), Run a probation review (test and calibrate). The session deliverables were an SVG diagram showing the full architecture, a formatted DOCX run guide with exact trainer lines and timing tables for both 90-minute sessions, and a facilitation notes section on the step where participants usually stall (Custom Instructions). All three documents shipped the same day because the framework was already clear and we documented as we designed instead of designing then trying to remember what we decided.

The NasOps build session in [[Building nasops transcript-based documentation and email generation app - 78e52862]] is the meta example. We built an app whose entire purpose is to turn session transcripts into documentation. The app takes transcripts from training sessions, extracts the main teaching points, generates step-by-step implementation worksheets, writes Taki Moore-style email campaigns promoting the session, and outputs branded dark gradient card exports. The app exists because documentation was taking 12 hours a week and the team couldn't keep up. Now it's 30 minutes. The documentation system documented itself in real time as we built it.

## Scripts and exact phrases

"If you can't find it in 10 seconds, it doesn't exist." The searchability test. If team members have to ask where something is, the documentation structure failed.

"Write it the way you'd say it on a call." The voice test. If the document sounds like corporate training materials, delete it and start over.

"One transcript is worth 10 planning meetings." When documenting process, record a real session, transcribe it, extract the structure. Never build documentation from memory.

"The document ships today or it doesn't ship." If documentation gets added to a to-do list for "when we have time," it never happens. Build the document as part of the work, not after.

"150 words or 1,500 words, nothing in between." Short documents are checklists and scripts. Long documents are comprehensive guides. The 600-word middleground satisfies nobody.

"The SOP is a checklist, not a novel." Standard operating procedures get formatted as numbered steps with one action per line. If someone has to read paragraphs to figure out what to do, it's not an SOP.

"Name the note for search, not for filing." Vault notes get titled with the specific thing someone would search for. "Sales discovery framework" beats "Client process 2024 v3."

"Date stamp everything." Every document includes the date it was written and the date it was last updated. Undated documentation breeds distrust.

## Common mistakes

**Writing for the file cabinet instead of for use.** Documentation that exists to prove you have documentation is useless. If nobody opens it after the first week, delete it.

**Documenting the ideal process instead of the real one.** The SOP says "confirm budget before proposal." The actual process is "send proposal immediately if the call went well, negotiate price later if they push back." The real process is what works. Document that.

**Making the founder write it alone.** Founders are terrible at documenting their own process because they skip the steps that feel obvious to them. Better approach: record the founder doing the thing, transcribe it, extract the steps, show them the draft, get the correction.

**Waiting until the process is perfect.** The team needs the V1 document today, not the perfect one in three months. Ship the current process even if it's messy. Update it as it changes.

**No owner.** A document without a named owner rots. Someone needs to be responsible for keeping it current. If that person leaves, reassign it immediately.

**Formatting that fights readability.** Dense paragraphs, no whitespace, walls of text. People scan documents before reading them. If the structure isn't immediately obvious, they close it.

## The contrarian read

Most documentation advice says "write comprehensive guides for every process." I disagree.

Over-documentation is as destructive as under-documentation. The goal is not to write down everything. The goal is to write down the minimum that allows someone else to execute without you.

A three-step checklist beats a 12-page process document. The checklist gets used. The process document gets skimmed once and bookmarked forever.

The other contrarian position: documentation should be ugly. A well-formatted Notion page with custom icons and color-coded tags signals "this is the final version, don't touch it." A raw markdown file in a vault signals "this is the working draft, edit it as you learn." The second one gets updated. The first one gets preserved like a museum piece until it's obsolete.

And the biggest one: AI-generated documentation is worse than no documentation. Generic Claude output trained on corporate best practices produces documents that sound authoritative and contain zero useful specifics. The sentence "Ensure alignment between stakeholders before proceeding to implementation" appears in 10,000 business documents and means nothing. Better to have a two-sentence note in plain English that says exactly what the client said and what you decided.

## What it looks like when it's working

The test is simple. A new team member asks a question. Someone on the team says "check the vault" and pastes a direct link. The new hire reads the note and executes without follow-up questions.

You can onboard a new hire in three days instead of three weeks because every process has a working document.

Client asks "what did we decide about X last month" and you pull the note in 10 seconds with the exact decision and the reasoning.

Team member leaves. Their replacement opens the vault, reads six notes, and picks up where the previous person left off with zero knowledge loss.

You're building a new offer. Instead of starting blank, you pull the last three offer documents, copy the structure, adapt the specifics, and ship the new offer in two hours instead of two days.

A client call ends. You open the vault, drop the transcript, run it through Claude with your session documentation prompt, and the formatted client summary ships before you close the laptop.

The signal is speed. If your team can answer most questions in under 60 seconds by searching the vault, documentation is working. If they're still interrupting you with "how do we do X again," it isn't.

## Related categories

- [[voice-dna|Voice DNA]] — documentation in the founder's voice requires capturing that voice first
- [[intake-and-discovery|Intake and discovery]] — the sales call is documentation material if you record and transcribe it
- [[onboarding-delivery|Onboarding delivery]] — client onboarding fails when the process isn't documented for the delivery team
- [[ai-sop-extraction|AI SOP extraction]] — how to turn transcripts into working process docs using Claude
- [[knowledge-base-structure|Knowledge base structure]] — how the vault itself should be organized for maximum searchability

## Source notes

- [[LPG distribution inventory and billing management system - 3a9ec055]]
- [[Nas.io document redesign with branding - 6b8ef772]]
- [[March Madness Marathon problems and solutions - 508640a8]]
- [[Taki Workshop project planning - 0efb0db2]]
- [[Building nasops transcript-based documentation and email generation app - 78e52862]]
- [[Document formatting and structure - 613ae65c]]
- [[Personal branding document template - b29e56d4]]
- [[App development requirements and tech stack - efb883d8]]


<!--::DANNY-DISTILL-END::-->
