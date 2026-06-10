---
title: "Why Obsidian over Notion"
macro: "AI Stack & Workflow Systems"
slug: obsidian-over-notion
tags: [ai-danny, knowledge, 11-ai-stack-workflows]
status: distilled
last_distilled: 2026-05-26T11:58:21.985Z
description: "Why markdown + local files wins for you."
---

# Why Obsidian over Notion

**Status:** scaffolded · awaiting distillation.

## What this captures

Why markdown + local files wins for you.

## After distillation

3 to 7 specific statements in Danny's voice, each citing a vault note. Written by the synthesis pipeline using the MASTER prompt.

---

<!--::DANNY-DISTILL-START::-->

## The core principle

Markdown files on your machine own you nothing and can never be taken away.

## Why this matters

Every business tool you adopt creates a dependency. The question isn't whether the tool is good today — it's whether you'll still have access to what you built when the company pivots, raises prices, gets acquired, or shuts down.

Notion is a database product dressed up as a note-taking app. It lives on someone else's server. Your content sits in their proprietary format behind their authentication wall. If Notion goes down, you wait. If they change pricing, you pay or migrate. If they get acquired by a company whose terms you don't like, you have no choice.

Obsidian is a text editor that reads files you already own. Every note is a `.md` file sitting in a folder on your computer. You can open it in any text editor. You can version it in Git. You can back it up to three drives. You can grep it from terminal. The app could disappear tomorrow and you'd lose nothing.

When you're building a system that holds your entire business brain — client notes, frameworks, content strategy, voice DNA, offer architecture — the cost of lock-in is catastrophic. You don't rebuild that in a weekend. You don't migrate 1,492 notes without breaking things.

Markdown + local files means the system belongs to you. Not rented. Owned.

## How it shows up in client work

The moment I explain this to a founder, I watch their face change. They've been burned before.

_Sparse vault material on this aspect — add more notes to deepen._

## Specific examples from the vault

In [[Dasha_One_on_One_Personal_Branding_(_advanced)_2025_01_21]], Dasha came into the call thinking Notion was a CRM. I had to correct her immediately: "Notion is not a CRM. Notion is a tool that does multiple things. If you want a CRM, use Folk app."

She wanted to track LinkedIn posts, analyze competitors, schedule content. All valid. Notion could technically do it. But the entire conversation was about retrofitting a database tool into a workflow it wasn't designed for.

She had no Notion setup at all. Zero structure. I had to share my screen and walk her through templates, spaces, private vs. team access, the difference between pages and databases. Ten minutes in she still wasn't clear on where her content calendar would live or how to make it work.

That's the Notion tax. Every new user pays it. You don't "just start using Notion." You learn Notion's way of doing things, then you learn Notion's way of organizing databases, then you learn Notion's way of building views and filters and relations. It's a second job.

The alternative: open Obsidian, type the name of a note, start writing. Done.

In [[Steve_Katz_One_on_One_Personal_Branding_2024_07_19]], Steve was pitching me Bright — a LinkedIn content planning tool built because every other tool (including Notion, Google Sheets, and ClickUp) failed at supporting different workflows. His exact words: "People are using different tools because they have different workflows. Until now there wasn't a tool that was built for LinkedIn but also supported different workflows."

He built an entire product to solve the problem that Notion created: trying to force one structure onto everyone's process.

Obsidian doesn't have that problem. The structure is folders and files. That's it. Your workflow lives in how you name things and where you put them. No database schema to learn. No views to configure. No permissions to set. You organize it like you'd organize anything else on your computer.

In [[March Madness Marathon problems and solutions - 508640a8]], the AI School team was drowning in coordination chaos. Multiple tools, multiple people, no single source of truth. Matt handled Zoom data. Alexa handled Nas.io setup. Jeremiah co-hosted. Lesha ran social. Phil and Adalbert trained. Danny (me) tried to hold it all together.

The briefing docs lived in DOCX files saved to `/mnt/user-data/outputs/`. Session strategy lived in `Summit_v9.docx`. Every iteration required opening a file, editing, saving, renaming, re-sharing. Version control was "which file is the latest one again?"

If that entire system had been Obsidian notes linked together, every person would see the same latest version. No file-naming confusion. No "did you get my updated doc?" messages. Just one connected knowledge graph with backlinks showing what referenced what.

In [[Nas.io document redesign with branding - 6b8ef772]], I was building curriculum documents, session title rewrites, email strategies, and challenge operations all at once for AI School. Everything lived in different places. DOCX for formatted deliverables. Markdown for app context documents. Excel for session titles. A Notion Q&A doc that Alexa maintained separately.

Every time I needed to reference something from a previous conversation, I had to remember which file format it was in, where it was saved, and whether I had the latest version. The cognitive load was constant. The friction was high.

If the entire project had lived in Obsidian, every document would link to every other document. I could search across all of them instantly. I could see which sessions referenced which frameworks. I could pull up every mention of Alex's name across all notes to prep for a call. The structure would emerge naturally from the links, not from manually maintaining folder hierarchies.

In [[Premium nas.io branded PDF document - c0a42d0d]], I was rebuilding presentation materials for the March Madness workshop. The content lived in multiple places: session slides, trainer prompts, student cheatsheets, image generation instructions. Every piece referenced the brand guide (Rethink Sans font, specific color palette, minimal text per slide).

The brand guide wasn't a living document. It was a static reference I had to remember. Every time I needed to check a hex code or confirm a font rule, I'd pull up a different file.

In Obsidian, the brand guide would be one note with backlinks from every other note that used it. Change the guide once, and everywhere that references it reflects the update. No hunting through files. No version drift.

In [[Building nasops transcript-based documentation and email generation app - 78e52862]], I was building an ops dashboard for Nas.io that pulled from transcripts, generated session summaries, wrote emails, and tracked attendance. The system needed to read Danny's voice, apply frameworks, cite sources, and stay on-brand.

The knowledge layer was distributed: some in memory, some in context documents, some in previous conversations. There was no single canonical source. If I wanted to update the email writing rules, I'd have to find every place those rules were referenced and update them individually.

The right architecture for that system would have been a knowledge vault in Obsidian with every framework, voice rule, and template living as a discrete note. The app would query the vault, pull the relevant notes, and synthesize them. Updates would happen in one place and propagate everywhere.

In [[Creating a design system for GitHub - 1e119223]], Danny wanted to upload his entire brand system to GitHub: colors, fonts, voice rules, content templates, client documents. The goal was a single source of truth the whole team could reference.

The natural structure for that is markdown files in folders, version-controlled in Git. That's exactly what Obsidian is. If his vault was already in Obsidian, the design system repo would just be `git push`. Done. No conversion. No reformatting. The structure already matches.

In [[LPG distribution inventory and billing management system - 3a9ec055]], I was building a custom inventory and billing system for an Indonesian LPG distributor. The project had 18 database tables, 35+ features, 9 user roles, 7 automated workflows. The documentation was a 15-page DOCX file.

Every time a feature changed, the documentation lagged. Every time a new workflow was added, I had to manually update three different sections. The doc was authoritative only at the moment I saved it. Five minutes later it was already out of sync.

If the entire project lived in Obsidian, each feature would be one note. Each workflow would link to the features it used. The database schema would link to the tables it referenced. The support document would auto-generate from the connected notes. The structure would stay accurate because the structure would be the notes themselves.

## Scripts and exact phrases

When a client asks why I use Obsidian:

"Your business knowledge shouldn't live in a database you rent. It should live in files you own."

"If the app disappears tomorrow, do you still have your notes? With Notion, no. With Obsidian, yes."

"Markdown is the only format that will still be readable in 20 years. Notion's format is whatever Notion says it is."

"I can search my entire vault from terminal in under a second. Try doing that with Notion when their API is down."

When setting up a founder's content system:

"We're building this in Claude, not Notion, because I want you to own the prompts. A Claude Project is just markdown files you can export. A Notion database is locked in their format."

When explaining the knowledge map structure:

"Every category is one markdown file. Every file links to the source notes. Change one note, and every category that references it reflects the update. That's not possible in Notion without manually maintaining relations."

When a founder says they already use Notion:

"Keep using it for project management or team collaboration if it works. But your personal brand system — your voice, your frameworks, your client insights — that should live in files you control."

## Common mistakes

Picking the tool before defining the workflow. Founders see Notion's beautiful templates and think that's what they need. Then they spend three weeks setting up databases that don't match how they actually work.

Confusing "looks good" with "works well." Notion has better aesthetics out of the box. Obsidian looks like a code editor. But aesthetics don't compound. Structure does.

Treating notes as write-once documents. In Notion, once you write something and file it in a database, it lives there. You don't revisit it unless you actively search for it. In Obsidian, backlinks surface old notes automatically. You see what connects to what. The system grows smarter over time without manual curation.

Using Notion as a CRM. It's not. It's a database tool that founders hack into tracking relationships. Use Folk or HubSpot or Airtable. Don't try to make Notion something it isn't.

Building in someone else's walled garden without an export plan. If you have 500 pages in Notion, exporting to markdown breaks formatting, loses relations, and requires manual cleanup. The lock-in is real. The switching cost grows every day.

Assuming "collaborative" means "better for solo founders." Notion's collaboration features are designed for teams with shared access needs. If you're a solo founder, you don't need permissions and comments and mentions. You need speed and structure. Obsidian gives you both.

## The contrarian read

Notion is better for one specific use case: teams that need shared databases with complex views, filters, and permissions.

If you're running a content agency with 10 writers, all pulling from the same client database, all updating the same status fields, all commenting on the same drafts — Notion wins. The collaboration layer is purpose-built for that.

But that's not what most founders are doing. Most founders are writing alone, thinking alone, building systems alone. The collaboration features are overhead they don't need.

The other contrarian take: Obsidian's learning curve is higher at the start. Notion's UI is friendlier. You can onboard a non-technical person into Notion faster than you can teach them markdown and local file systems.

But the learning curve flips over time. Notion's complexity grows as your system grows. You add more databases, more relations, more views. The maintenance burden increases. Obsidian's complexity stays flat. It's folders and files. That's it. Once you learn that, you're done.

The last contrarian point: if you already have 1,000 pages in Notion and they're working, don't migrate. The switching cost is real. Finish the project, then evaluate. Don't churn tools mid-system.

## What it looks like when it's working

You type `[[Client name]]` in any note and instantly see every other note that mentions that client. No manual tagging. No database relations. Just automatic backlinks.

You write a new framework note and every category that should reference it lights up in the graph view. You can see the knowledge map updating in real time.

You search for "pricing conversation" and get results across 1,492 notes in under a second. Not "search within this database." Search everywhere.

You export your entire vault as markdown, push it to GitHub, and it's immediately a design system repo. No conversion. No reformatting. The structure already matches.

You open a client note from six months ago and see backlinks to the session transcript, the offer brief, the discovery call notes, and the post-launch review. You didn't manually create those links. The system surfaced them because they all reference the same client.

You accidentally delete a note. You run `git log`, see the commit history, and restore it. Try doing that in Notion without their paid version history.

Your laptop dies. You pull your vault from Dropbox onto a new machine, open Obsidian, and everything is exactly as you left it. No re-authentication. No "sync pending." No "contact support."

You want to run a script that counts how many client calls you've logged this month. You run `find vault/client-calls -name "*.md" | wc -l` from terminal and get the number instantly. Try doing that with Notion's API rate limits.

## Related categories

- [[01-identity-positioning/positioning-philosophy|Positioning Philosophy]] — Your positioning should be as portable as your notes. If it's locked in a tool, it's not really yours.
- [[15-big-decisions/choosing-tools-and-platforms|Choosing Tools and Platforms]] — Tool decisions compound. Pick tools that give you leverage without creating lock-in.
- [[13-ai-stack/ai-knowledge-systems|AI Knowledge Systems]] — AI works best when it reads from a structured knowledge base. Markdown files in folders is the cleanest input format.
- [[10-operations/documentation-systems|Documentation Systems]] — Documentation that lives in files you control stays accurate longer than documentation in databases you rent.
- [[13-ai-stack/claude-skills-library|Claude Skills Library]] — Every skill I build reads from markdown context documents. Obsidian is the natural source of truth.

## Source notes

- [[March Madness Marathon problems and solutions - 508640a8]]
- [[Nas.io document redesign with branding - 6b8ef772]]
- [[Premium nas.io branded PDF document - c0a42d0d]]
- [[Building nasops transcript-based documentation and email generation app - 78e52862]]
- [[Dasha_One_on_One_Personal_Branding_(_advanced)_2025_01_21]]
- [[Creating a design system for GitHub - 1e119223]]
- [[LPG distribution inventory and billing management system - 3a9ec055]]
- [[Steve_Katz_One_on_One_Personal_Branding_2024_07_19]]


<!--::DANNY-DISTILL-END::-->
