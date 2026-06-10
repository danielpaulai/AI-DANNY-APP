---
title: "Tools per engagement"
macro: "Onboarding & Engagement"
slug: tools-per-engagement
tags: [ai-danny, knowledge, 09-onboarding-engagement]
status: distilled
last_distilled: 2026-05-26T11:58:21.967Z
description: "The standard tech stack per client."
---

# Tools per engagement

**Status:** scaffolded · awaiting distillation.

## What this captures

The standard tech stack per client.

## After distillation

3 to 7 specific statements in Danny's voice, each citing a vault note. Written by the synthesis pipeline using the MASTER prompt.

---

<!--::DANNY-DISTILL-START::-->

## The core principle

Every client gets the same stack because the stack isn't the constraint — skill design is.

The tools don't change. Claude Projects, GoHighLevel, Notion, Make, Supabase, sometimes Apify. The system architecture stays identical. What changes is how the tools are configured, which skills are built, and what workflows get automated for that specific founder's ICP and offer.

## Why this matters

Most agencies sell you on their proprietary tech or their "custom solution" that only they can operate. That's vendor lock-in disguised as innovation.

Purely Personal does the opposite. We build the system with tools the founder already uses or can own independently. By the end of the engagement, the founder has full access to every Claude Project, every Make scenario, every Notion database, every GoHighLevel campaign. They can walk away and keep running it. No monthly retainer. No dependency.

This matters because the founder's business shouldn't collapse if we disappear. The system should be theirs. The intelligence should live in their Claude Skills, not in some black-box agency dashboard they'll never understand.

The cost of getting this wrong is permanent dependency. Founders who hire agencies that own the tech end up trapped. When they try to leave, their content voice disappears, their workflows break, and they're back to square one. The agency designed it that way. Purely Personal refuses to.

The leverage of getting it right is a founder who can scale without us. They own the voice DNA, the ICP brief, the content calendar template, the outreach scripts, the call prep workflow. When they hire their first marketing person, that person inherits a working system, not a pile of disparate tools.

## How it shows up in client work

The standard stack gets assembled in the first two weeks of every engagement. Claude Projects goes first because that's where the brain lives. GoHighLevel second because that's where email campaigns and contact management happen. Notion third for content calendars and task tracking. Make fourth to connect everything. Supabase shows up only when the client needs a custom dashboard or real-time data sync that Make can't handle.

The pattern from [[Propellus_x_PurelyPersonal_Weekly_Alignment_2026_04_09]] and [[Propellus_x_PurelyPersonal_Weekly_Alignment_2026_04_02]] shows the standard onboarding sequence. Week 1: build the Voice DNA and ICP documents in Claude. Week 2: migrate contacts into GoHighLevel and set up the first email sequence using Make to pull data from Notion. Week 3: build the Content Strategist, Writer, and Editor skills. Week 4: deploy the first content batch and measure open rates through GoHighLevel's API.

What's consistent across every client is the tool hierarchy. Claude is the brain. GoHighLevel is the distribution layer. Notion is the planning layer. Make is the glue. Everything else is optional.

The reason this works is because we're not asking the founder to learn five new platforms. Most founders already use Notion for task management or have tried GoHighLevel for email. Claude is new to most, but it's the only new thing they need to master. Everything else just connects.

From [[Cohort_Launch_-Planning_2025_05_23]], the launch sequence for AI Business School used this exact stack: Claude Skills for curriculum writing and session planning, Notion for the 14-day challenge tracker, GoHighLevel for email sequencing to 15K NAS.IO users, Make to sync registrations between the Zoom webinar and the CRM. No custom code. No proprietary tools. Just configuration and skill design.

The contrarian pattern is what we don't use. No Canva Pro. No Hootsuite. No Buffer. No Zapier (we use Make because it's cheaper at scale and has better API control). No proprietary AI writing tools. No analytics dashboards beyond what GoHighLevel already tracks. Every tool we reject is because it either duplicates something the stack already does or creates vendor dependency.

From [[GHL_planning_2025_10_21]], the decision to move fully into GoHighLevel for campaign management came from watching clients waste hours context-switching between email tools, CRM tools, and automation tools. GoHighLevel collapsed five tools into one. The founders who resisted the switch kept bleeding hours. The ones who migrated got their time back.

The mistake most agencies make is assuming more tools equals more capability. The opposite is true. More tools means more integration points that break, more logins to remember, more monthly fees that stack, more training time per new hire. Purely Personal keeps the stack minimal by design. Five core tools maximum. If a sixth tool is needed, something else gets removed.

## Specific examples from the vault

The LPG system from [[LPG distribution inventory and billing management system - 3a9ec055]] shows what happens when a client needs something beyond the standard stack. PT. Pilar Rekayasa Muda needed inventory tracking, billing management, and WhatsApp automation for 7 user roles across sales, logistics, admin, and warehouse teams. The stack expanded: Supabase for the database, Replit for deployment, WhatsApp Business API for automated triggers, and still Claude for the AI assistant layer.

But the architecture stayed the same. Claude Skills handled order processing and stock predictions. Supabase stored the real-time data. Make connected WhatsApp notifications to order status changes. The tools changed but the system thinking didn't.

From [[App development requirements and tech stack - efb883d8]], the Event Operations Platform build for Purely Personal's own 10-person team used Next.js 14, TypeScript, Supabase, and Claude API for the full-stack app running on port 7777. The reason we built a custom app instead of using Notion was because the team needed real-time collaboration on 34 separate workflows: dashboard, event hub, campaign planner, email module, session builder, live delivery dashboard, task tracker, team standup, analytics, GoHighLevel command centre, and AI assistant.

The tool decision tree was clear: if Notion can handle it, use Notion. If Make can connect it, use Make. If neither works, build custom with Supabase and Next.js. The custom app shipped with GoHighLevel API integration (location ID dFg2YHmji1EidasjBlfQ, sending domain mail.danielpaul.ai), Claude API for AI generation, and a Master Framework Document generated as DOCX covering all 6 Taki Moore email frameworks, the 9-tab Workshop Builder, and the Launchpad Diagnostic health check.

The critical technical decision was upgrading all Claude API routes to max_tokens 4000 with safeParseJSON error recovery and auto-retry. Early versions hit token cutoff mid-generation. The fix wasn't switching tools — it was configuring the existing tool correctly.

From [[Building nasops transcript-based documentation and email generation app - 78e52862]], the NasOps dashboard for AI Business School used the exact same stack: Next.js 14, TypeScript, Tailwind, shadcn/ui, Supabase, Anthropic Claude API, deployed live on Vercel. Session 8 covered building the Participant Intelligence tab with CEO/COO/CMO executive report views, the Command Center with multi-file upload zones for feedback PDFs and attendee Excel files, a Weekly Summary zone and Challenge Tracker in the Data Hub, and a Topic Registry AI research tab with 8 source selectors.

The reason the stack repeats is because the tech isn't the differentiator. The skill design is. The NasOps app used Voyage AI embeddings for feedback clustering and topic gap analysis, but Voyage isn't in the standard stack — it got pulled in only when semantic search was required. Once that need disappeared, Voyage would disappear too.

From [[Workshop campaign analysis and results - 8e33619f]], the May 2-3, 2026 workshop "Build a Business That Runs By Itself using Claude" used GoHighLevel for email delivery (22,383 emails at 19.27% open rate), Make to sync DM outreach (1,000 DMs sent, not 50 as initially tracked), and Supabase to store the campaign tracker spreadsheet versions (v1 through v5) that surfaced the real numbers: 51 registered, €9,828.50 cash received, 12 hand-raisers, 5 closed at 41.7% close rate.

The tool lesson from that workshop was that the Outreach Tracker sample lied by 20x. The team sent 1,000 DMs, not 50. But DMs converted at only 0.5% to registration, making them an awareness channel, not a conversion driver. The data came from GoHighLevel's campaign tracking, not from a separate analytics tool. The stack already had the answer. We just needed to query it correctly.

From [[Giosg]] (unrelated external project context, but included in vault), the principle holds even when consulting for a different company's tech stack. Giosg's platform combined AI assistants, live communication, video commerce, interactive content, and integrations all in one. The reason their clients bought it was the same reason Purely Personal's clients buy our stack: fewer tools, one source of truth, no fragmented workflows.

## Scripts and exact phrases

"We use five tools. Claude for thinking, GoHighLevel for distribution, Notion for planning, Make for connections, Supabase when you need a custom layer. If we add a sixth, we remove something else."

"The stack doesn't change. What changes is how we configure the skills inside Claude and what workflows we automate through Make. The tools are the same. The intelligence is custom."

"You'll own every login, every API key, every Make scenario. By the end of this, you can fire us and keep running the system. That's the point."

"If you need a tool we don't use, the question isn't 'can we add it.' The question is 'what does this do that the stack doesn't already handle.' If the answer is nothing, we don't add it."

"GoHighLevel replaces five tools: email platform, CRM, SMS, pipeline tracker, and campaign scheduler. You'll save <!--::DANNY-DISTILL-END::-->00-$400 a month switching."

"Supabase shows up when you need real-time data or multi-user collaboration that Notion can't handle. Otherwise, Notion is cheaper and easier."

"Make is better than Zapier at scale because the pricing model rewards complexity instead of punishing it. Once you're running 20+ scenarios, Make is half the cost."

"The custom app decision: if Notion and Make can do it in two weeks, we use Notion and Make. If it would take four weeks to duct-tape together, we build custom with Next.js and Supabase."

## Common mistakes

**Mistake 1: Adding tools to solve workflow problems.** The founder's content production is slow, so they buy Jasper AI or Copy.ai or Notion AI. Three months later, production is still slow because the bottleneck wasn't the tool — it was the lack of a documented voice DNA and a repeatable content structure. Purely Personal solves this by building the Voice DNA document first, then configuring Claude to read it. The tool stays the same. The process changes.

**Mistake 2: Paying for features they don't use.** Founders sign up for GoHighLevel Pro at $497/month because the sales page promises advanced automation, but they only use email campaigns and contact storage — features available in the $97/month plan. The fix is auditing usage before upgrading. Most founders need the base plan for 6-12 months before they earn the Pro tier.

**Mistake 3: Using Zapier when Make would cost less.** Zapier charges per task. Make charges per operation. Once a founder is running 10,000+ tasks a month (which happens fast when syncing Notion to GoHighLevel to Claude), Zapier costs <!--::DANNY-DISTILL-START::-->50-$300/month. Make costs $9-<!--::DANNY-DISTILL-END::-->9/month for the same workload. The migration takes two hours. The savings compound forever.

**Mistake 4: Building custom when the stack already handles it.** A founder asks for a custom dashboard to track LinkedIn post performance. We could build it with Supabase and Next.js in three weeks for $5K. Or we could pull LinkedIn's CSV export, drop it into Notion, and build a formula column that calculates engagement rate in 20 minutes for free. The custom solution is technically better. The Notion solution ships today.

**Mistake 5: Switching tools mid-engagement because a new one launched.** A founder reads about Perplexity or Claude 3.5 Opus or the latest AI writing assistant and wants to migrate the entire system. The answer is almost always no. Migration costs time, breaks workflows, and resets the learning curve. If the new tool offers a 2x improvement, we consider it. If it offers 20%, we ignore it.

**Mistake 6: Assuming the stack needs to be complex to be valuable.** Some founders expect a dozen tools, custom dashboards, and proprietary software. When they see five tools and a Notion database, they think it's too simple. The truth is the simplicity is the value. A system the founder can understand, operate, and debug themselves is worth more than a black-box solution they'll never touch.

## The contrarian read

The entire tech industry teaches founders to adopt the newest tools first and optimize later. Purely Personal does the opposite. We lock the tools down early and optimize configuration forever.

The standard advice is "use the best tool for each job." We say use one tool for five jobs. GoHighLevel handles email, SMS, CRM, pipeline, and campaign scheduling. Claude handles content strategy, writing, editing, research, and call prep. Notion handles planning, task tracking, content calendars, and documentation. Make handles all the connections. Supabase only shows up when those four can't solve the problem.

This is contrarian because it means saying no to tools that are legitimately good. Canva is excellent for design. We still don't use it because Figma templates and Claude-generated copy get the founder 90% of the way there without learning a fifth tool. Hootsuite is great for scheduling. We still don't use it because GoHighLevel already posts to LinkedIn and Facebook through Zapier webhooks.

The hot take: most SaaS tools exist to solve problems that better workflows prevent. If the founder's content workflow is clean, they don't need a content calendar tool — Notion already has that. If their email sequences are templated in GoHighLevel, they don't need Mailchimp. If their discovery calls follow a documented script in Claude, they don't need Gong to analyze them.

Another contrarian stance: we don't use all-in-one AI platforms like Jasper or Copy.ai because they're too opinionated. They want to own the content voice. Purely Personal refuses. The founder's voice lives in a Claude Project they control. The skills read from documents they wrote. If Claude gets replaced by GPT-6 or Gemini or something better in two years, the migration takes 30 minutes because the intelligence is in the documents, not in the tool.

The final contrarian move: we don't sell the founder on upgrading their stack. Most agencies push premium tiers to increase their own commission or justify their retainer. Purely Personal audits downwards. If the founder is paying for GoHighLevel Pro but only using $97 Starter features, we tell them to downgrade. If they're paying for Make Pro but running 5,000 operations a month, we tell them to drop to Core. The goal is efficiency, not spending.

## What it looks like when it's working

The founder logs into five tools or fewer. They open Claude for content strategy and writing. They open GoHighLevel to schedule the email campaign. They open Notion to check the content calendar. They open Make to confirm the webhook fired. They don't touch Supabase unless they need to query custom data. Most weeks, it's three tools: Claude, GoHighLevel, Notion.

The founder's team doesn't ask "which tool do I use for this?" The answer is always obvious because each tool has one job. Claude thinks. GoHighLevel distributes. Notion plans. Make connects. The new hire learns the system in one day, not one month.

The founder's monthly SaaS spend drops or stays flat even as the business grows. They're not adding tools to scale. They're adding skills inside the tools they already have. A second LinkedIn profile doesn't require a second Buffer account — it requires a second Claude Skill and a second GoHighLevel sub-account.

The founder can leave for two weeks and the system keeps running. The email sequences fire on schedule through GoHighLevel. The content gets generated by Claude Skills that don't need daily input. The DMs get sent through Make workflows that pull from a Notion database of prospects. The founder isn't the operator. The system is.

The founder's content quality doesn't drop when they're busy. Most founders post inconsistently because writing from scratch every week is exhausting. When the founder has five Claude Skills (Content Strategist, Writer, Editor, Analyst, Repurposer) and a 90-day Notion calendar pre-mapped to their offer cycle, content ships whether they feel inspired or not.

The numbers move: 12 hours of weekly content work compresses to 2. Inbound DM reply rates go from 15% to 40% because the scripts are tested and stored in Claude. Discovery call close rates improve because the Call Prep Skill surfaces the prospect's pain points and pre-writes the objection responses. Revenue per founder hour increases because the founder spends less time in tools and more time on calls.

The signal it's not working: the founder is still context-switching between eight tools. They're still manually copying data from one platform to another. They're still asking "where did I save that template" or "which tool tracks email opens." When that happens, it means we misconfigured the stack, the founder didn't adopt the workflow, or we added complexity instead of removing it.

The ultimate test: if the founder could only keep three tools, would they keep the ones we gave them? If yes, the stack is right. If no, we built wrong.

## Related categories

- [[personal-brand-infrastructure|Personal Brand Infrastructure]] — the stack is one piece of infrastructure; the other pieces are voice DNA, ICP brief, positioning, offer architecture, and content calendar template
- [[content-systems-architecture|Content Systems Architecture]] — how the tools connect to the content production workflow, specifically the Claude Skills layer
- [[ai-team-not-tool|AI Is a Team, Not a Tool]] — the philosophical shift that makes the stack work: Claude isn't one assistant, it's 5-10 specialists
- [[workflow-compression|The 12-to-2 Promise]] — how the stack delivers the time savings: automation through Make, generation through Claude, distribution through GoHighLevel
- [[founder-led-systems|Founder-Led Systems]] — why the founder owns every login and API key, and why that's non-negotiable

## Source notes

- [[App development requirements and tech stack - efb883d8]]
- [[Workshop campaign analysis and results - 8e33619f]]
- [[Giosg]]
- [[Building nasops transcript-based documentation and email generation app - 78e52862]]
- [[LinkedIn profile optimization and content strategy for solo founders - 2b414c76]]
- [[Nas.io document redesign with branding - 6b8ef772]]
- [[Client Calls - Planning]]
- [[LPG distribution inventory and billing management system - 3a9ec055]]


<!--::DANNY-DISTILL-END::-->
