---
title: "Vault organization"
macro: "AI Stack & Workflow Systems"
slug: vault-organization
tags: [ai-danny, knowledge, 11-ai-stack-workflows]
status: distilled
last_distilled: 2026-05-26T11:58:21.966Z
description: "How your Obsidian vault is structured."
---

# Vault organization

**Status:** scaffolded · awaiting distillation.

## What this captures

How your Obsidian vault is structured.

## After distillation

3 to 7 specific statements in Danny's voice, each citing a vault note. Written by the synthesis pipeline using the MASTER prompt.

---

<!--::DANNY-DISTILL-START::-->

## The core principle

Your vault is not a filing cabinet. It's an operational system that talks to AI.

## Why this matters

Most people treat their Obsidian vault like a graveyard. They dump notes in, tag them beautifully, link them obsessively, and then never open them again. The vault becomes a monument to good intentions instead of a working tool.

The cost shows up in two places. First, you re-explain yourself to AI every single day. "Here's my voice," "here's my ICP," "here's what I'm working on," "here's what matters to me." That's 10 minutes burned daily on context you've already written once. Second, your best thinking stays locked in markdown files that only you can read. The insight from a client breakthrough in March doesn't inform the email you're writing in May. The positioning shift you nailed in a workshop gets typed into Claude as if it never happened.

The mechanism is simple: if AI can't read your brain, you're doing all the thinking manually. And if you're doing all the thinking manually, you're trapped in the machine instead of running it.

The vault structure I've built solves this. It's designed for semantic search first, human browsing second. Every note exports to AI Danny's brain as a searchable, citable, synthesisable asset. The folder names tell AI where to look. The frontmatter tells AI what the note contains. The note body is structured so retrieval pulls the right chunk, not the whole file.

This isn't about being organised for organisation's sake. It's about building a system where your past thinking compounds instead of decays.

## How it shows up in client work

When I'm coaching a founder and they ask "how do I price this workshop," I don't scroll through my vault looking for that one note I wrote six months ago. I ask AI Danny to `queryKnowledge("04-offers-pricing", "workshop-offer")` and the system returns the distilled synthesis citing three real client examples from [[Workshop_pricing_framework_2024_05_20]], [[Taki_Moore_pricing_model_2024_03_15]], and [[50K_workshop_client_2024_11_02]].

That's the difference. The vault isn't just my second brain. It's the first brain AI reads before answering.

I see this gap constantly in 1:1 calls. A client says "I've been thinking about this for weeks" and then explains something I helped them figure out three months ago. They forgot their own breakthrough. The vault remembers. When I pull [[Client_positioning_breakthrough_2024_08_10]] and read it back to them, they go quiet. "Oh. I already solved this."

That's what a working vault does. It makes your past self available to your present self without manual recall.

The structure emerged from watching what breaks. Early on, I had one giant "Client Notes" folder with 200 files named by date. Useless. I couldn't find anything. AI couldn't find anything. Semantic search returned five similar sessions and I had to read all five to remember which one mattered.

So I flipped the structure. Now every client gets a dedicated folder under `Clients/[Name]/`. Inside: one master note (their ICP, offer, positioning, goals), session notes by date, breakthrough moments tagged `#breakthrough`, and decision points tagged `#decision`. When I query the brain for "client who broke through on positioning," the folder structure narrows the search and the tags surface the exact moment.

The `/Claude Export 2026-05-26/` folder is the raw archive from Claude Projects exports. I dump everything Claude and I build there because the conversations contain working code, real client dialogue, and decision rationale I can't reconstruct later. Those exports feed the brain. [[App development requirements and tech stack - efb883d8]] lives there. [[Building nasops transcript-based documentation and email generation app - 78e52862]] lives there. Both are 3,000+ word conversation summaries that AI Danny cites when someone asks "how did you build that."

The knowledge map sits in `_ai-danny/knowledge/`. That's the distilled layer — 266 categories across 15 macros, each synthesising 3–10 vault notes into voice-on statements I'd actually say. When a question fits a category, AI reads the synthesis instead of raw notes. Faster. Cheaper. Already on-voice.

I rebuilt this structure three times before it worked. The first version had too many folders (32 top-level categories). Browsing was hell. The second version had too few (everything in `Notes/`). Retrieval was useless. The third version — the current one — groups by *operational use case*, not topic taxonomy.

So you have `Clients/` for client work. `Workshops/` for workshop planning and delivery. `Content/` for posts, hooks, and LinkedIn strategy. `Offers/` for pricing and packaging. `AI Stack/` for technical builds like NasOps or the LPG system. `Decisions/` for choices I made that I need to cite later.

Each folder has a `README.md` explaining what belongs there and how to name files. That README is the first thing semantic search reads when AI queries that folder. It's metadata for the metadata.

The naming convention is `[Descriptive_title]_[YYYY_MM_DD].md` for timestamped notes and `[Descriptive_title].md` for evergreen reference files. Descriptive titles beat date-only filenames because semantic search uses the filename as a signal. `Workshop_pricing_framework_2024_05_20.md` tells AI what the note contains. `2024_05_20.md` tells it nothing.

Frontmatter is mandatory on every note. Minimum fields: `title`, `date`, `tags`, `type` (session | framework | decision | breakthrough | client-note). Optional fields: `client`, `status`, `related`. The `type` field is the kill shot. It tells AI whether this note is a working session transcript, a reusable framework, or a decision I need to cite later. Without it, every note looks the same and retrieval pulls noise.

I keep a `/Templates/` folder with blank note structures for each type. When I open a new client session, I copy the template, fill in the frontmatter, and start typing. The structure is already there. That's how I keep the vault consistent without thinking about it.

The biggest mistake I see founders make is over-tagging. They tag everything. `#marketing` `#content` `#linkedin` `#strategy` `#personal-brand` `#growth` on the same note. That's not taxonomy, it's noise. Tags should answer one question: what is this note FOR? If it's for client work, tag `#client`. If it's a breakthrough moment, tag `#breakthrough`. If it's a reusable framework, tag `#framework`. Three tags maximum per note.

I also keep a `/Scratchpad/` folder for half-formed thinking. Not everything deserves a permanent note. Sometimes I just need to think out loud for 10 minutes and move on. Those go in Scratchpad. If the thinking survives two weeks without being deleted, it graduates to the main vault.

One pattern I use constantly: the "decision log" note. Every time I make a non-trivial choice (change pricing, pivot positioning, drop a service), I open `Decisions/[Decision_name]_[date].md` and write: what was the choice, what were the options, why I picked this one, what I'm betting on, how I'll know if it worked. Three months later when someone asks "why did you stop offering retainers," I cite [[Retainer_model_sunset_2024_09_12]] and the answer is already written.

The vault also holds every Claude Project export I run. Those exports are markdown files with full conversation history, user inputs, assistant outputs, artifacts, and timestamps. I export monthly and dump them into `/Claude Export [date]/`. That folder is the source of truth for "what did I actually build" and "how did I solve this problem before."

The current export structure is `/Claude Export 2026-05-26/Conversations/[year-month]/[conversation-title]-[hash].md`. Each file includes a `> **Conversation Overview**` section at the top summarising the full session in 200–400 words: who was involved, what was built, what decisions were made, what shipped. That summary is what semantic search reads first. Without it, AI has to parse 5,000 words of back-and-forth dialogue to figure out what happened.

I use those exports constantly. [[App development requirements and tech stack - efb883d8]] documents the full NasOps build session. [[LPG distribution inventory and billing management system - 3a9ec055]] covers the PT. Pilar Rekayasa Muda handover. [[Building nasops transcript-based documentation and email generation app - 78e52862]] shows the Session 8 sprint where we added Voyage AI embeddings. Every one of those is citeable, searchable, and shows the actual dialogue that led to the shipped feature.

## Specific examples from the vault

The vault redesign that made AI Danny possible happened in May 2025. Before that, my Obsidian setup was a standard PKM system: daily notes, topic MOCs, lots of backlinks, zero AI integration. It was great for *me*. Useless for AI.

The breaking point was a call with a client where I knew I'd solved their exact problem before but couldn't find the note. I spent 8 minutes scrolling through `Client Notes/` while they waited on Zoom. Unacceptable.

So I exported the entire vault, ran semantic search over it using Voyage AI, and asked Claude: "which notes would you need to answer common client questions without me explaining context every time?" The answer: about 40 notes across positioning, pricing, content strategy, and sales discovery. Everything else was noise.

I restructured around those 40. Built folders for each operational category. Wrote README files explaining what belonged where. Added mandatory frontmatter fields. Created templates. Then rebuilt the knowledge map as the distilled synthesis layer.

The knowledge map took three weeks. I went through every note in the vault, identified patterns, grouped them into categories, and wrote the synthesis in my voice citing the source notes. That's how [[pricing-philosophy]] got built — it cites [[Workshop_pricing_framework_2024_05_20]], [[Taki_Moore_pricing_model_2024_03_15]], [[50K_workshop_client_2024_11_02]], and [[Value_based_pricing_breakthrough_2024_07_18]]. The synthesis reads like something I'd write in one sitting, but it's actually 4 notes compressed into 7 statements.

I use [[Building an AI second brain with Obsidian and Claude - ad52b5ac]] as the reference architecture. That conversation with Claude laid out the two-layer system: layer one is strategy and storage (the vault), layer two is execution (the AI soldiers doing the work). The vault is the general's map. The AI agents are the troops.

The `/Claude Export 2026-05-26/` folder structure came from that conversation. Before that, I was manually copying conversation text into notes and losing 90% of the context. Now I export the full markdown, preserve the conversation structure, and let semantic search do the rest.

One specific moment: I was coaching a client on workshop pricing and couldn't remember if I'd documented the 3x-5x rule (workshop price should be 3–5x the hourly consulting rate). I asked AI Danny to `queryBrain("workshop pricing rule")`. It returned [[Workshop_pricing_framework_2024_05_20]] citing the exact section. Three seconds. The client got the answer without me breaking flow.

Another: a founder asked "how do you handle 'I need to think about it' on sales calls?" I called `queryKnowledge("08-sales-discovery", "handling-need-to-think")` and got the synthesis citing [[Sales_call_2025_03_14]]. The answer included the exact reframe I use ("Walk me through what's still unclear. Price, scope, fit, or timing?") and the follow-up protocol (set a hard next-step before hanging up, no "just checking in" emails). That's not generic advice. That's my playbook.

The `/Workshops/` folder holds every workshop I've run: landing page copy, session outlines, post-session emails, attendee feedback, and iteration notes. [[AI_workshop_template_2024_11_15]] is the master template I copy for every new workshop. It includes the promise, the deliverables, the session flow, and the scripts I use for each segment. When someone asks "how do you run a 90-minute workshop that ships a working asset," I cite that note.

The `/Content/` folder has hook archives, post templates, and the Invisibility Diagnostic scoring rubric. [[Hook_patterns_by_archetype]] breaks down contrarian hooks, specificity hooks, and asking hooks with real examples from posts that booked calls. When I'm reviewing a client's LinkedIn draft, I score it against that rubric and cite the note.

The `/AI Stack/` folder documents every technical build: NasOps, the LPG system, EngagementFlow AI, the Event Operations Platform. Each has a master note explaining what it does, who it's for, what tech stack was used, and what problems it solved. [[App development requirements and tech stack - efb883d8]] shows the full NasOps architecture. [[LPG distribution inventory and billing management system - 3a9ec055]] covers the PT. Pilar Rekayasa Muda system. Those notes prove I've shipped real products, not just talked about them.

## Scripts and exact phrases

"Your vault is not a filing cabinet. It's an operational system that talks to AI."

"If AI can't read your brain, you're doing all the thinking manually."

"The vault structure I use is designed for semantic search first, human browsing second."

"Frontmatter is mandatory. Minimum fields: title, date, tags, type. The type field tells AI whether this is a session transcript, a framework, or a decision."

"Naming convention: [Descriptive_title]_[YYYY_MM_DD].md for timestamped notes. Descriptive titles beat date-only filenames because semantic search uses the filename as a signal."

"Tags should answer one question: what is this note FOR? If it's for client work, tag #client. If it's a breakthrough moment, tag #breakthrough. Three tags maximum per note."

"Every Claude Project export gets dumped into /Claude Export [date]/. That folder is the source of truth for 'what did I actually build.'"

"The knowledge map sits in _ai-danny/knowledge/. That's the distilled layer — 266 categories synthesising 3–10 vault notes into voice-on statements."

## Common mistakes

**Over-tagging.** Founders tag everything. `#marketing` `#content` `#linkedin` `#strategy` `#personal-brand` on the same note. That's noise. Tags should answer one question: what is this note FOR? Three tags maximum.

**Date-only filenames.** Files named `2024_05_20.md` tell you when the note was written. They tell AI nothing. Use `Workshop_pricing_framework_2024_05_20.md` so semantic search knows what the note contains without opening it.

**No frontmatter.** A note without frontmatter is invisible to AI. The `type` field (session | framework | decision | breakthrough) is the kill shot. It tells AI whether this note is a working session transcript or a reusable framework. Without it, every note looks the same.

**Too many folders.** I see vaults with 32 top-level categories. Unnavigable. Group by operational use case, not topic taxonomy. `Clients/`, `Workshops/`, `Content/`, `Offers/`, `Decisions/`. That's it.

**No README files.** Every folder needs a `README.md` explaining what belongs there and how to name files. That README is the first thing semantic search reads when AI queries the folder.

**Never exporting Claude Projects.** If you're not exporting your Claude conversations monthly, you're losing your decision history. Those exports are markdown files with full context: what was built, what decisions were made, what shipped. They're citeable, searchable, and irreplaceable.

**Treating the vault as a monument instead of a system.** Most founders dump notes in, link them beautifully, and never open them again. The vault becomes a graveyard. The fix: structure it so AI reads it first.

## The contrarian read

Most second brain evangelists say the vault is for *you*. Build it so *you* can recall information, connect ideas, and think better. That's fine. But it's not leverage.

The vault I'm describing is built for AI first, humans second. That sounds backwards. It's not.

If the vault is only readable by you, you're the bottleneck. You have to remember where the note is, open it, read it, and apply it. That's manual work. If the vault is readable by AI, the system recalls, connects, and synthesises for you. You just ask.

The other contrarian take: don't aim for comprehensive. Aim for citeable.

You don't need 1,000 notes. You need 40 notes that answer the recurring questions in your work. When a client asks "how do I price this," you need one note you can cite. When you're writing an email, you need one hook template you can reference. The rest is nice-to-have.

I've seen founders with 2,000-note vaults who can't answer a simple client question without 10 minutes of searching. I have 266 distilled categories and can cite the answer in 3 seconds. Comprehensive lost to citeable.

## What it looks like when it's working

You're on a client call. They ask a question. Instead of saying "let me think about that and get back to you," you say "I solved this exact problem with another client. Let me pull the note." Three seconds later you're reading them the framework, the example, and the next step. The client goes quiet. "You have this documented?"

You're writing a LinkedIn post. Instead of staring at a blank screen, you open the hook archive, scan three contrarian patterns, pick one, and start typing. The post takes 8 minutes instead of 40.

You're pricing a new workshop. Instead of guessing, you query the knowledge map for [[workshop-offer]] and [[pricing-philosophy]]. The synthesis cites three client examples with numbers. You price it in 5 minutes with confidence.

You're onboarding a new team member. Instead of explaining your positioning, voice, ICP, and frameworks in a 2-hour call, you send them 5 knowledge map categories to read. They show up to the first meeting already trained.

Your AI assistant answers questions like you would because it's reading your actual brain. When someone asks "how does Danny handle objections," the answer cites [[Sales_call_2025_03_14]] and includes the exact reframe you use. That's not generic AI advice. That's your playbook.

## Related categories

- [[01-identity-core/founder-identity]] — Your vault structure reflects your identity. If the vault is chaotic, your thinking is chaotic.
- [[05-content-marketing/hook-patterns-by-archetype]] — The hook archive lives in the vault. Citeable, searchable, reusable.
- [[13-ai-stack/ai-danny-master-prompt]] — The MASTER operating prompt defines how AI Danny reads and synthesises vault material.
- [[13-ai-stack/ai-brain-protocol]] — The two-layer system (vault as strategy, AI as execution) comes from this protocol.
- [[14-operations/knowledge-map-distillation]] — The knowledge map is the distilled synthesis layer that sits on top of the vault.

## Source notes

- [[App development requirements and tech stack - efb883d8]]
- [[LPG distribution inventory and billing management system - 3a9ec055]]
- [[Building nasops transcript-based documentation and email generation app - 78e52862]]
- [[Welcome]]
- [[Nas.io document redesign with branding - 6b8ef772]]
- [[Building an AI brain protocol for leadership decisions - 466ee3a2]]
- [[Mastering LinkedIn for Personal Branding and Business Growth - 0c192c97]]
- [[Building an AI second brain with Obsidian and Claude - ad52b5ac]]


<!--::DANNY-DISTILL-END::-->
