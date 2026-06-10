---
title: "Workflows you've automated"
macro: "AI Stack & Workflow Systems"
slug: workflows-automated
tags: [ai-danny, knowledge, 11-ai-stack-workflows]
status: distilled
last_distilled: 2026-05-26T11:58:21.958Z
description: "Real before/after of automated work."
---

# Workflows you've automated

**Status:** scaffolded · awaiting distillation.

## What this captures

Real before/after of automated work.

## After distillation

3 to 7 specific statements in Danny's voice, each citing a vault note. Written by the synthesis pipeline using the MASTER prompt.

---

<!--::DANNY-DISTILL-START::-->

## The core principle

Every workflow you automate is a strategic bet on where your time should never be spent again.

## Why this matters

Founders drown in execution theatre. They spend twelve hours a week on marketing tasks that feel productive but generate zero pipeline. They manually format content, chase cold leads, update trackers, send follow-ups, compile reports, and somehow convince themselves this is "building the business."

It's not. It's running in place.

The cost shows up in three places. First, opportunity cost: every hour spent on automatable work is an hour not spent on the one call that could close the year's biggest deal. Second, inconsistency: manual workflows break the moment you get busy. Posts go out late, follow-ups get forgotten, data goes stale. Third, mental overhead: carrying fifteen open loops in your head means you're never fully present in the work that actually moves the needle.

The founders who break through don't work harder. They systematically identify the repetitive work that drains their calendar, build systems that run without them, and reclaim those hours for the work only they can do: strategy, relationships, vision.

When you automate the right workflows, marketing runs while you're on client calls. Outreach continues while you're asleep. Reports generate themselves. The business keeps moving even when you're not pushing it.

## How it shows up in client work

The pattern repeats across every client engagement. A founder comes in posting inconsistently, manually drafting every LinkedIn update, spending two hours per post, then going silent for weeks because "it just takes too long."

The first workflow we automate is content production. We build a Claude Content Strategist that plans their next 90 days of posts mapped to business goals, then a Claude Writer that drafts posts in their voice using their Voice DNA document. What used to take twelve hours a week compresses to ninety minutes: thirty minutes for calendar review, sixty minutes for editing and scheduling.

The founder owns the system. They can run it without us. No retainer trap.

Second workflow: LinkedIn outreach. Most founders send cold DMs manually, one at a time, re-typing the same introduction message with minor tweaks. Response rate hovers around 2-3% because the messages sound like templates. We build a Claude Prospector that pulls ICP profiles from Sales Navigator, researches each person's recent activity, and writes personalized first messages that reference something specific they posted or achieved. Response rate jumps to 12-15% because the messages don't read like automation.

The entire sequence runs inside Claude Projects. The founder reviews the draft messages, approves them, then pastes into LinkedIn. The research and writing work that used to take an hour per prospect now takes two minutes.

Third workflow: sales discovery prep. Before any client call, founders waste thirty minutes scrolling the prospect's LinkedIn, reading their website, Googling their company name, trying to piece together context. We build a Claude Call Prep skill that takes a LinkedIn URL and company name, pulls all relevant signals (recent posts, team changes, funding announcements, competitor moves), and outputs a one-page brief with suggested questions and value angles. The founder walks into the call sounding like they've known this prospect for months.

Preparation time drops from thirty minutes to three.

Fourth workflow: workshop operations. The [[Workshop campaign analysis and results - 8e33619f]] note documents a complete campaign for Danny's "Build a Business That Runs By Itself using Claude" workshop in May 2026. The original tracker required manual updates across fourteen tabs: registrations, attendance, outreach status, testimonials, payments, email performance, landing page metrics, hot leads, and weekly signals.

We automated five pieces. Email campaign tracking pulled directly from Mailchimp API. DM outreach status synced from a Google Sheet the team updated. Attendance data imported from Zoom via CSV export. Payment status reflected Stripe webhooks. Landing page views pulled from Vercel Analytics. The only manual entry left: testimonial collection and hot lead notes, because those require human judgment.

Campaign analysis that used to take four hours now runs in twelve minutes. Click one button, wait for the data pull, review the output dashboard.

Fifth workflow: client reporting. The [[LPG distribution inventory and billing management system - 3a9ec055]] engagement for PT. Pilar Rekayasa Muda, an Indonesian LPG distributor, required daily email reports for three stakeholder groups: warehouse managers (stock levels and movement), delivery drivers (route assignments and cylinder counts), and the admin team (payment status and debt collection reminders).

The system generated all three reports automatically at 6 AM Jakarta time using Supabase scheduled functions. Warehouse managers got current stock by product type plus yesterday's movement. Drivers got today's delivery schedule with customer addresses and quantities. Admin got all overdue invoices sorted by days past due.

What used to require one person spending ninety minutes every morning compiling data from three Excel files and sending individual emails now runs completely unattended. The only human input: reviewing the reports when something looks wrong.

Sixth workflow: session documentation for AI Business School. The [[Building nasops transcript-based documentation and email generation app - 78e52862]] conversation documents building NasOps for the operations team at NAS.IO. Every live training session generates a Zoom transcript, attendance list, and participant feedback. The ops team needed three deliverables within two hours of each session ending: a formatted session summary document sent to attendees, a Weekly Summary comparing this week to last week's performance, and an executive report for Alex (COO) showing CEO/COO/CMO-level signals.

We built Session AI that ingests the transcript, extracts key teaching points, pulls actionable implementation steps, formats a worksheet, and generates the attendee document. The entire process takes four minutes. Human review adds ten minutes. Total time: fourteen minutes instead of ninety.

The Weekly Summary auto-generates from Supabase persistence comparing current week metrics (attendance rate, feedback scores, hot leads, testimonials collected) against previous week. The executive report uses Voyage AI embeddings to cluster feedback into themes and flag sentiment shifts.

All three outputs ship automatically to the right people at the right time. The ops team reviews for errors but doesn't build anything from scratch.

## Specific examples from the vault

The [[Multi-Platform Analytics Workflow Automation - b2560f23]] conversation shows the clearest before/after. A client was manually pulling social media analytics from Facebook, Twitter, and LinkedIn every Monday morning, copying numbers into Excel, calculating week-over-week changes, formatting a report, and emailing it to stakeholders. Total time: two hours.

We built an n8n workflow with a cron trigger set to Mondays at 9 AM. Three parallel branches hit each platform's API, pull the previous week's metrics, format the data into standardized JSON, merge into one dataset, write to Google Sheets, and send an email report with the sheet attached.

The entire workflow runs unattended. The only human action: reading the email and reviewing the numbers. Time saved: one hundred and four hours per year.

The [[Nas.io document redesign with branding - 6b8ef772]] engagement for AI Business School curriculum documentation shows automation applied to creative work. Every month, the team needed to produce a formatted trainer guide, a condensed quick reference doc, and five challenge submission forms—all matching brand guidelines with consistent formatting, color-coded session cards, and structured layouts.

Originally this took Alexa (ops lead) six hours: manually formatting in Google Docs, adjusting spacing, updating session details from the master Excel, ensuring every color matched the brand, exporting to PDF, uploading to Notion.

We built a document generation system using the docx Python library. Input: the master Excel file with session details. Output: a fully formatted DOCX and PDF with brand colors, proper spacing, session cards, week themes, and all content structured exactly to spec.

Generation time: forty seconds. Human review: fifteen minutes to spot-check accuracy. Total time: sixteen minutes instead of six hours.

The challenge forms went from manual HTML coding (thirty minutes per form, five forms total, two and a half hours) to templated generation with variable injection (three minutes total for all five forms).

The [[Adisseo_set_up_2025_09_21]] call transcript documents building two automation workflows for a corporate client demo. Aziz needed to show regional heads real-time competitor intelligence: LinkedIn posts from three competitor organizations and news articles mentioning those competitors, all updating live in Google Sheets.

Before automation, this required a marketing intern spending three hours daily searching LinkedIn, copying post URLs, opening competitor websites, scanning for news mentions, and manually logging everything in a spreadsheet.

We built two Apify workflows. First: LinkedIn competitor analysis using a rented post scraper, pulling the last twenty posts from three specified organizations, extracting engagement metrics, and writing to Google Sheets via API. Second: website news scraping hitting each competitor's press page, pulling article titles and dates, checking for company name mentions, and appending to a separate sheet tab.

Both workflows run on a daily schedule. The sheets update automatically. The intern's three-hour daily task became a five-minute weekly review to flag anything unusual.

Demo impact: the client saw live data updating during the presentation. They approved the project immediately and paid the <!--::DANNY-DISTILL-END::-->,000 invoice within two days.

The [[Making sessions AI school friendly - 5f56aa1f]] conversation shows content workflow automation at curriculum scale. AI Business School runs thirty sessions per month with different trainers, topics, and formats. Every session needs a title that passes three filters: Alex Hormozi's outcome-first specificity test, Nuseir Yassin's plain-English rule (a twelve-year-old should understand it), and the NAS.IO brand voice (no jargon, no hype, no AI buzzwords).

The original process: Danny writes a draft title, sends to Alexa for feedback, Alexa tests with Alex, Alex sends notes, Danny rewrites, Alexa tests again, Nuseir gives final approval. Average iterations per title: four. Average time per title: forty minutes. Thirty titles per month: twenty hours.

We extracted every rejection pattern from six months of feedback: no "How to" openings, no em dashes, no model version numbers, no technical acronyms, no vague aspirational language, outcome must be visible in the title, tool named only when widely recognized. We built a Title Builder skill that ingests the session topic, applies all rejection filters, generates three variations using approved structure templates, and scores each against the three filters.

New process: paste topic into Title Builder, review three options, pick one or request a fourth variation. Average iterations: one. Average time: eight minutes. Twenty hours per month became four.

The savings compound when you consider that every rejected title previously required rewriting all the promotional materials, email copy, and landing page headlines that used that title.

## Scripts and exact phrases

"If you're still doing this manually, you're paying <!--::DANNY-DISTILL-END::-->00/hour for <!--::DANNY-DISTILL-END::-->0/hour work."

"Automate the inputs, not the judgment. The system pulls data and formats it. You decide what it means."

"Your job is strategy and relationships. Everything else is a candidate for automation."

"The test: could a VA do this by following a checklist? If yes, a system can do it better."

"Don't automate broken workflows. Fix them first, then automate."

"The best automation is invisible. It just runs. Nobody thinks about it until it stops working."

"If it takes you five minutes manually and you do it twenty times a month, that's two hours. Automate it."

"Every time you catch yourself thinking 'I should systemize this,' stop what you're doing and systemize it right then."

## Common mistakes

The biggest mistake is automating busywork that shouldn't exist. Founders automate weekly reports nobody reads, daily email summaries of metrics nobody acts on, social posts that generate zero pipeline. The workflow runs perfectly. The output is worthless.

Fix the strategy before you automate the execution.

Second mistake: over-engineering. Founders try to automate fifteen steps at once, build complex branching logic, integrate six tools, and troubleshoot for three weeks. The system never ships. They abandon it and go back to manual work.

Start with one step. Automate the data pull. Run that for a week. Then automate the formatting. Run that for a week. Then automate the output. Compound small wins.

Third mistake: automating without owning the system. Founders hire an agency to build automations in tools they don't understand, using integrations they can't modify, with documentation they can't read. The system breaks. The agency is busy. The founder is stuck.

Every automation you build should be something you could rebuild yourself in two hours if it disappeared tomorrow. If you can't, you don't own it.

Fourth mistake: no monitoring. The workflow runs silently for three months. Nobody checks the output. One day a client asks "why haven't you followed up?" and the founder discovers the system stopped working six weeks ago.

Every automation needs a health check. Weekly for critical workflows, monthly for everything else.

Fifth mistake: automating the wrong bottleneck. A founder spends twelve hours a week on content creation: two hours planning, two hours researching, six hours writing, two hours designing. They automate the design step and save two hours. They still spend ten hours on content.

Automate the six-hour step first.

## The contrarian read

Most productivity advice says "automate everything you can." That's wrong.

Some work should stay manual because the manual process teaches you things the automated version hides. Writing your first hundred LinkedIn posts by hand forces you to understand hook patterns, narrative structures, and audience resonance in a way that hitting "generate" never will.

Automate after you've done something manually enough times to know exactly what good looks like.

Second contrarian take: automation is not always cheaper. If you spend three days building a workflow that saves you thirty minutes per week, break-even is six months. If the task might change in three months, don't automate it. Do it manually, document the process, wait for stability.

Third: some automation increases cognitive load instead of decreasing it. A system that requires daily configuration, constant troubleshooting, and weekly maintenance is more draining than doing the task manually. The goal is to forget the system exists, not to become its full-time operator.

## What it looks like when it's working

Your calendar has white space. You're not scrambling to post content on Friday afternoon. The follow-up email sends itself while you're on the client call. The weekly report lands in your inbox without you remembering to generate it.

You can take a week off and the business keeps moving. Marketing runs. Outreach continues. Reports ship. Nothing breaks.

When someone asks "how do you stay so consistent?" you don't have a good answer because consistency stopped being a thing you think about. The system handles it.

Numbers: content production drops from twelve hours per week to two. Client prep drops from thirty minutes per call to three. Reporting drops from four hours per month to twelve minutes. Total reclaimed time: forty-eight hours per month.

That's a week. Every month.

## Related categories

- [[content-production-workflow|Content Production Workflow]] — the most common first automation for founders, moving from manual posting to systematic content generation
- [[sales-discovery-process|Sales Discovery Process]] — where automated research and prep directly impacts close rates by letting founders walk into calls fully briefed
- [[workshop-operations|Workshop Operations]] — end-to-end automation of campaign tracking, registration, attendance, and follow-up for live training delivery
- [[tool-stack|Tool Stack]] — the specific platforms (n8n, Apify, Claude Projects, Supabase) that power these automations
- [[leveraged-work-vs-busy-work|Leveraged Work vs Busy Work]] — the decision framework for what to automate versus what to eliminate versus what to keep manual

## Source notes

- [[Workshop campaign analysis and results - 8e33619f]]
- [[LPG distribution inventory and billing management system - 3a9ec055]]
- [[Making sessions AI school friendly - 5f56aa1f]]
- [[Building nasops transcript-based documentation and email generation app - 78e52862]]
- [[Multi-Platform Analytics Workflow Automation - b2560f23]]
- [[Nas.io document redesign with branding - 6b8ef772]]
- [[Adisseo_set_up_2025_09_21]]
- [[Noman]]


<!--::DANNY-DISTILL-END::-->
