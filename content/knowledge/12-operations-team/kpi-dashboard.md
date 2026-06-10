---
title: "KPI dashboard"
macro: "Operations & Team"
slug: kpi-dashboard
tags: [ai-danny, knowledge, 12-operations-team]
status: distilled
last_distilled: 2026-05-26T11:58:21.937Z
description: "Numbers you track weekly."
---

# KPI dashboard

**Status:** scaffolded · awaiting distillation.

## What this captures

Numbers you track weekly.

## After distillation

3 to 7 specific statements in Danny's voice, each citing a vault note. Written by the synthesis pipeline using the MASTER prompt.

---

<!--::DANNY-DISTILL-START::-->

## The core principle

You track six numbers that tell you if your business is alive.

Everything else is theatre.

## Why this matters

Most operators drown in dashboards they never act on.

Twelve KPIs. Twenty metrics. Five platforms. One outcome: they stop looking after week two because nothing connects to a decision they can make today.

The cost of vague tracking is invisible until you run out of runway. You think you're measuring growth but you're actually measuring activity. Post count went up. Email opens went up. LinkedIn impressions went up. Revenue stayed flat.

The dashboard Danny runs is the opposite of that theatre. Six numbers. Updated weekly. Each one maps to a specific action he can take in the next 72 hours. If a number drops, he knows exactly which system broke and who fixes it.

When the dashboard works, you make decisions faster than competitors who are still waiting for their monthly report. When it doesn't work, you're flying blind and calling it data-driven.

## How it shows up in client work

The pattern across every client engagement is identical: they arrive tracking too much or tracking nothing.

The "too much" clients have Google Analytics open in one tab, HubSpot in another, LinkedIn analytics in a third, Stripe MRR in a fourth. They can tell you page views by device but they can't tell you how many qualified leads they got last week. The "nothing" clients say revenue is the only metric that matters, then wonder why pipeline went quiet three months before revenue crashed.

Danny's first move in both cases: build the Weekly Ops Review document. One page. Six sections. Each section gets one number with a seven-day trend. The six numbers are always outcome-based, never activity-based.

For a workshop client running monthly AI training sessions (similar to the model in [[Workshop campaign analysis and results - 8e33619f]]), the dashboard looked like this:

1. **Registered vs target** — 51 registered, target 40, 128% hit
2. **Cash collected** — €9,828.50 (includes tickets + upsells)
3. **Show-up rate** — 52% (31 peak attendees of 51 registered)
4. **Hot lead close rate** — 41.7% (5 closed of 12 hand-raisers)
5. **Day 1 to Day 2 retention** — 93%
6. **Pipeline value in next 30 days** — 7 open hot leads, named closers, forecast €42K

Every Monday the client updates those six numbers. If show-up rate drops below 60%, the action is clear: add a T-1 pre-event setup day. If hot lead close rate drops below 35%, the action is clear: audit discovery calls for missing positioning.

The breakthrough moment in that engagement came when the client stopped tracking "total DMs sent" (1,000) and started tracking "DM-to-registration close rate" (0.5%). The first number felt productive. The second number killed the channel.

For a personal branding coaching client working 1:1 with founders ([[Session_3_2025_05_11]]), the dashboard compressed to five numbers because the business model was simpler:

1. **Inbound calls booked this week** — target 3, usually hit 2-4
2. **Discovery-to-close rate** — running 30-day average, target 40%
3. **Average deal size** — tracked separately for workshop vs 1:1 vs done-with-you
4. **Content posting streak** — binary: posted 3x this week or didn't
5. **Pipeline value** — sum of all open proposals with named decision dates

The content posting streak was the only activity metric on the board. Danny keeps it because posting consistency predicts inbound volume with a two-week lag. Miss two weeks of posts, pipeline dries up 14 days later like clockwork.

The client hated tracking it at first. "I don't want to be a slave to the algorithm." Danny's response: "You're not tracking the algorithm. You're tracking whether you disappeared from your ICP's feed." The metric stayed.

For the NasOps dashboard built for AI Business School ([[Building nasops transcript-based documentation and email generation app - 78e52862]]), the system ran on a different six because the business was curriculum-based, not client-based:

1. **Weekly active users by bucket** — NAS.IO paid (~15K), AI School paid (~5.7K), free users (~34K)
2. **Session attendance rate** — actual attendees divided by registered
3. **Graduation rate** — users who completed all checkpoints in a challenge
4. **Email open rate by bucket** — tracked separately for each user type
5. **Challenge submission rate** — percentage of users who submitted graded work on Days 2, 5, 7, 9, 11
6. **Feedback sentiment score** — pulled from Claude analysis of post-session PDFs

Each number connected to a specific person on the team. Attendance below 70%? Alexa (ops lead) fixes the reminder cadence. Email opens below 20%? Danny rewrites the subject lines. Feedback sentiment drops? Matt (technical lead) audits whether Zoom data export broke.

The pattern that shows up in every client dashboard: **the numbers you track change behaviour faster than the goals you set**. A founder who tracks "posts published this week" will post. A founder who tracks "inbound calls from LinkedIn this week" will post differently. Same activity, different outcome, because the measurement shaped the execution.

## Specific examples from the vault

The workshop campaign tracker ([[Workshop campaign analysis and results - 8e33619f]]) surfaced a metric contradiction that would have stayed hidden in a traditional dashboard: Campaign Metrics tab showed 0 testimonials while the Testimonials tab had 5 filled entries. Landing page views showed 598 in one tab, 227 in another.

The client's first instinct was to reconcile the numbers and move on. Danny's move: flag it as an audit trail issue and add "data hygiene score" as a seventh temporary metric. Every Monday the client checked whether tabs matched. If they didn't, the spreadsheet got rebuilt before any other work started.

Result: four weeks later, every tab cross-referenced correctly. The temporary metric came off the board. Data hygiene became a habit, not a metric.

In the Adisseo onboarding call ([[Adisseo_onboarding_2025_12_03]]), the client wanted to track "number of articles scraped per day" because it felt productive. Danny pushed back: "That's an input. What's the outcome?" The real metric became "articles starred as relevant divided by total articles scraped" — the relevance ratio.

When the ratio dropped below 15%, it meant the scraping parameters were too broad. When it spiked above 40%, it meant the filters were too narrow and they were missing market signals. The sweet spot was 20-30%. That range became the weekly target.

The dashboard also tracked "scraping frequency" as a negotiable metric. The client's historic practice was manual checks on Tuesdays and Fridays. The pilot started with a three-day scrape cycle to match that rhythm, with a plan to move to weekly once the team trusted the system. Scraping frequency wasn't the goal — trusted data flow was. The metric reflected that.

For the LSCS goal-setting session ([[LSCS_goal_setting_2024_03_26]]), Danny introduced the concept of "attention-to-completion ratio" — how many goals were set divided by how many were actually finished. The client was setting 12 quarterly objectives. Finishing 3.

The dashboard metric became brutally simple: **goals completed this quarter divided by goals set**. First quarter: 25%. The number was embarrassing enough to force a strategy shift. Next quarter: 6 goals set instead of 12. Completion rate: 67%. Third quarter: 4 goals set, 100% completion.

The metric trained the behaviour: set fewer goals, finish what you start.

## Scripts and exact phrases

**"If you wouldn't check this number before a Monday team call, it's not a KPI — it's theatre."**

**"The dashboard tells you what broke. Your calendar tells you who fixes it."**

**"Track outcomes, not activity. Post count is activity. Inbound calls is an outcome."**

**"Six numbers. Seven is too many. Five might work if your business is simple. Twelve means you're measuring everything and watching nothing."**

**"Show-up rate below 60% means your reminder cadence is broken. Below 50% means your offer was unclear."**

**"Pipeline value without decision dates is a wish list, not a forecast."**

**"If the metric doesn't map to an action you can take this week, delete it."**

**"The only activity metric I keep is posting streak, because posting consistency predicts inbound volume with a two-week lag."**

## Common mistakes

Tracking vanity metrics and calling them KPIs. LinkedIn impressions went up 40%. Great. Did calls go up? No? Then impressions don't matter.

Updating the dashboard monthly instead of weekly. Monthly is too slow. By the time you see the number drop, you've already lost four weeks of correction time. Weekly lets you fix things before they compound.

Tracking metrics you can't act on. "Industry growth rate" is interesting. You can't change it. It doesn't belong on the dashboard.

Not naming who owns each number. A metric without an owner is a metric nobody fixes. Show-up rate drops — who's responsible? If the answer is "the team," nothing changes.

Building dashboards in five different tools. HubSpot for leads, Stripe for revenue, Google Analytics for traffic, LinkedIn for engagement, a spreadsheet for everything else. By the time you check all five, you're out of time to act on any of them.

Confusing data hygiene with data volume. More tabs, more charts, more integrations — none of it matters if the numbers don't match across sources. One clean spreadsheet beats five dashboards with contradictions.

## The contrarian read

Most dashboard advice says "measure everything, then decide what matters." Danny's position: **decide what matters, then measure only that**.

The industry sells the idea that more data equals better decisions. The opposite is true. More data creates analysis paralysis. You spend Monday reviewing numbers instead of fixing what's broken.

The other contrarian stance: activity metrics are almost always useless. "Posts published this week" feels productive but it's decorative. The outcome is "calls booked from LinkedIn." If posts go up and calls stay flat, the posts were the wrong posts. The metric hid the problem instead of surfacing it.

Traditional dashboards also track lagging indicators and call them real-time. Revenue is the ultimate lagging indicator — by the time it drops, the pipeline dried up eight weeks ago. Danny's dashboards track leading indicators: show-up rate, discovery-to-close rate, posting streak, hot lead pipeline value. These numbers predict revenue before it moves.

## What it looks like when it's working

You open one document every Monday morning. Six numbers stare back at you. You know within 90 seconds whether last week worked or didn't.

Show-up rate dropped from 60% to 52%? You text the ops lead before the team call. "Reminder cadence broke. Fix it by Friday."

Discovery-to-close rate dropped from 40% to 28%? You listen to the last three discovery calls and realize your positioning shifted without you noticing. You rewrite the pitch deck by Wednesday.

Posting streak says zero? You write three posts on Monday and schedule them for Tuesday, Thursday, Saturday. Streak goes back to green.

The dashboard becomes a reflex, not a task. You don't "review KPIs" — you glance at the board, see what broke, fix it, move on. The whole cycle takes six minutes.

When it's really working, your team starts checking the same six numbers without being told. Show-up rate becomes the shared language. Someone says "we're at 54%" and everyone knows exactly what system needs attention.

Revenue becomes predictable because the leading indicators are stable. Pipeline value in next 30 days hasn't dropped below €35K in eight weeks. You know what's closing. You know what's coming. You stop hoping and start planning.

## Related categories

[[daily-rituals-calendar|Daily rituals & calendar]] — the Monday ops review is the anchor ritual that forces dashboard discipline

[[workshop-offer|Workshop offer]] — show-up rate and Day 1 to Day 2 retention are the two metrics that determine whether a workshop business scales

[[sales-discovery-process|Sales discovery process]] — discovery-to-close rate is the single number that tells you if positioning is landing

[[content-repurposing-workflow|Content repurposing workflow]] — posting streak is the only activity metric worth tracking because it predicts inbound volume

[[pricing-philosophy|Pricing philosophy]] — average deal size tracked separately by offer type shows which packages actually close

## Source notes

- [[Workshop campaign analysis and results - 8e33619f]]
- [[Building nasops transcript-based documentation and email generation app - 78e52862]]
- [[Session_3_2025_05_11]]
- [[Nas.io document redesign with branding - 6b8ef772]]
- [[Noman]]
- [[LSCS_goal_setting_2024_03_26]]
- [[Nuri Personal branding]]
- [[Adisseo_onboarding_2025_12_03]]


<!--::DANNY-DISTILL-END::-->
