---
title: "Sales metrics you track"
macro: "Sales & Discovery"
slug: sales-metrics-tracked
tags: [ai-danny, knowledge, 08-sales-discovery]
status: distilled
last_distilled: 2026-05-26T11:58:21.965Z
description: "Conversion rates, deal sizes, cycle time."
---

# Sales metrics you track

**Status:** scaffolded · awaiting distillation.

## What this captures

Conversion rates, deal sizes, cycle time.

## After distillation

3 to 7 specific statements in Danny's voice, each citing a vault note. Written by the synthesis pipeline using the MASTER prompt.

---

<!--::DANNY-DISTILL-START::-->

## The core principle

Most founders track vanity metrics until they run out of money.

Then they wish they had tracked the three numbers that actually determine whether a business survives: how many people you talk to, how many say yes, and how long it takes between first contact and cash in the bank.

## Why this matters

Revenue doesn't appear because you posted content or ran ads or sent DMs. It appears because someone had a conversation, made a decision, and transferred money. Everything else is theatre.

The typical founder has no idea how many conversations they need to have to close one client. They don't know their average deal size. They don't know if their pipeline is actually moving or just sitting there rotting. They run out of runway six months before they realise the funnel was broken the whole time.

When you track the right metrics, you stop guessing and start operating. You know exactly how many discovery calls you need to book to hit your revenue target. You know which objections kill deals and which ones are just noise. You know whether your pricing is landing or scaring people off. You stop hoping and start executing.

The cost of not tracking is invisible until it's catastrophic. You think you're busy. You're on calls. You're posting. You're "building relationships." But if you're not measuring conversion at every stage, you have no idea whether you're actually building a business or just burning time.

The leverage of getting this right is asymmetric. Once you know your numbers, every decision becomes obvious. Raise prices? Check your close rate. Launch a new offer? Check your average deal size. Hire a salesperson? Check your cycle time. The data tells you what to do next.

## How it shows up in client work

The first question I ask every founder in a sales review is "How many discovery calls did you do last month?" Half the time they don't know. They think they did "a lot." When we pull the calendar, it's seven. They needed twenty to hit their target. The pipeline was dead before they even started tracking.

[[Automation_&_Operations_Scoping_Call_x_Daniel_Paul_2024_11_28]] shows the pattern clearly. Fahad was running at 5-6K monthly revenue, sometimes hitting 8K. All inbound. No predictability. He couldn't scale because he had no idea what inputs created the outputs. Revenue appeared or it didn't. That's not a business, that's a lottery ticket.

I had a client who was closing 40% of discovery calls but only booking three calls a month. She thought she had a sales problem. She didn't. She had a volume problem. We tracked outreach-to-call and call-to-close separately. Once she saw the real bottleneck, she 3x'd outreach and hit 10K MRR within 60 days. Same close rate. More calls.

Another founder was tracking "engaged leads" which meant absolutely nothing. We rebuilt his tracker to show four stages: cold outreach sent, reply received, call booked, deal closed. Immediately he could see the drop-off was between reply and call. People responded but never showed up. We added a calendar link to the first DM instead of the second. Booking rate doubled. The metric revealed the fix.

[[Workshop campaign analysis and results - 8e33619f]] is the clearest example of tracking done right. 51 registered (128% of target). 31 peak attendees (52% show-up rate). 12 hand-raisers. 5 closed (41.7% hot lead close rate). 7 open leads in pipeline. Every number tracked. Every conversion point measured. The result: €9,828.50 cash received and a precise diagnosis of where the funnel leaked (show-up rate too low, DM conversion at 0.5% means it's an awareness channel not a close channel).

The pattern repeats across every client: if you don't measure conversion at each stage, you optimise the wrong thing. You spend three months improving your sales script when the actual problem was you weren't booking enough calls. You rewrite your offer when the real issue was your follow-up emails never went out.

I worked with a consultant who thought he had a pricing problem because people kept saying "too expensive." We tracked objections in his CRM. "Too expensive" came up on 30% of calls but only 10% of those were real price objections. The other 20% were "I don't see the value yet" disguised as price. Once we separated the two, his close rate went from 25% to 40% just by addressing the actual objection.

One founder was tracking "pipeline value" which is meaningless if deals never close. We switched to tracking deal age. Anything over 30 days was dead weight. He had <!--::DANNY-DISTILL-START::-->20K in "pipeline" but $90K of it was 60+ days old. We archived everything stale and rebuilt with only live opportunities. His real pipeline was $30K. Depressing but accurate. Two months later he closed $40K because he stopped wasting time on zombie deals.

The Giosg project [[Giosg]] shows how metrics change by channel. They track website conversion rates (visitors to leads), lead qualification (leads to qualified prospects), response times, and sales conversions. Different funnel, same principle: measure every step or you're flying blind.

## Specific examples from the vault

The workshop campaign in [[Workshop campaign analysis and results - 8e33619f]] tracked 11 primary metrics across the entire funnel. Registration conversion: 51 signups from 1,000 DMs (5.1% cold DM to signup, but only 0.5% DM to paid registration which confirmed DMs are an awareness play not a close play). Show-up rate: 31 of 51 (60.8% target, 52% actual). Day 1 to Day 2 retention: 93% which is exceptionally high. Hot lead conversion: 12 hand-raisers, 5 closed, 41.7% close rate on warm leads. Pipeline: 7 open hot leads with named closers assigned. Email metrics: 22,383 delivered at 19.27% open rate (low but expected for cold sequences). LinkedIn: 22,132 impressions at 5.9% engagement. Lead magnet downloads: 70 (indicating top-of-funnel interest but weak conversion to paid).

The contradiction that surfaced during analysis: Campaign Metrics sheet showed 0 testimonials while the Testimonials tab had 5 filled entries. LP views showed 598 in one tab and 227 in another. Yasmina Mejai (a paid Pro 6 buyer) was deleted from the Outreach Tracker with no audit trail note. These discrepancies prove the point: if the tracker isn't maintained with discipline, the data lies and every decision downstream is wrong.

[[Building nasops transcript-based documentation and email generation app - 78e52862]] shows a different kind of metric tracking. Participant Intelligence tabs tracked attendance by role (CEO/COO/CMO executive reports), session completion rates, and week-over-week engagement trends stored in Supabase tables. The challenge tracker measured daily micro-action completion across 14 days with graduation on Day 14 and summit on Day 16. The metric that mattered: how many participants hit each checkpoint versus how many dropped off. That determined who got advanced to the next cohort and who got re-engagement campaigns.

In [[App development problem identification - d1955b05]], the EngagementFlow AI app tracked different sales metrics: SOW approval time (tokenised reviewer links measured how long between send and approval), scope creep incidents (automatically flagged when new requests came in post-approval), client health scores (calculated from communication frequency, payment timeliness, and change order volume), and renewal probability (based on engagement patterns across the lifecycle). The goal: compress the time from discovery call to signed SOW and catch scope creep before it killed margin.

[[Automation_&_Operations_Scoping_Call_x_Daniel_Paul_2024_11_28]] is a raw transcript of a scoping call where revenue metrics came up directly. Fahad: "Highest was 8,000, 7 to 8,000 per month. And the average was like 5 to 6, 5, 4, 5." All inbound. No predictability. Daniel's response: "You're killing it, brother" (which is sarcasm — 5-6K monthly on pure inbound is not sustainable). The real issue: Fahad couldn't answer "What's your yearly revenue?" which means he wasn't tracking annual trends, just monthly snapshots. No visibility on growth rate, no understanding of seasonality, no ability to forecast.

The Project Memory for Noman [[Noman]] reveals another tracking challenge: "low engagement despite regular posting." The metric being tracked (LinkedIn engagement rate) wasn't the metric that mattered (booked calls from LinkedIn activity). We shifted focus to tracking reply rate on DMs, call booking rate from replies, and deal size from LinkedIn-sourced leads. That told the real story: his content was fine, his outreach was broken.

## Scripts and exact phrases

"How many discovery calls did you do last month?" (Not "how many leads" or "how much pipeline" — actual calls.)

"What's your close rate on calls where the prospect showed up?" (Removes no-shows from the denominator so you're measuring actual sales performance, not calendar management.)

"How long does it take from first contact to cash in the bank?" (Cycle time. If you don't know this number, you can't forecast.)

"What's your average deal size over the last 10 closed deals?" (Not what you wish it was. What it actually is.)

"How many conversations do you need to have to close one client?" (If the answer is "I don't know," you're guessing at everything downstream.)

"What's your show-up rate for booked calls?" (If it's below 60%, your booking process is broken or you're attracting the wrong people.)

"What percentage of deals close in under 30 days versus over 60?" (Anything over 60 days is probably dead. Track deal age religiously.)

"Which objection kills the most deals?" (If you're not logging objections, you're losing the same deal five times for five different made-up reasons.)

## Common mistakes

Tracking "engaged leads" or "interested prospects" instead of actual stage conversions. Engaged means nothing. Did they book a call? Did they show up? Did they pay? Those are the only stages that matter.

Measuring pipeline value without measuring pipeline age. A <!--::DANNY-DISTILL-END::-->00K pipeline full of 90-day-old dead deals is worth zero. Track deal age and archive anything stale.

Conflating awareness metrics (impressions, clicks, opens) with sales metrics (calls booked, deals closed). Awareness fills the top of the funnel but doesn't tell you if the funnel converts. You can have 100K impressions and zero revenue if the next stage is broken.

Not separating no-shows from close rate. If you book 10 calls, 4 people no-show, and you close 2 of the 6 who showed, your close rate is 33%, not 20%. If you measure it wrong, you'll try to fix your sales pitch when the real problem is your booking confirmation sequence.

Tracking monthly revenue without tracking quarterly or annual trends. Monthly is too noisy. You need at least 90 days of data to see if you're growing, flat, or declining. [[Automation_&_Operations_Scoping_Call_x_Daniel_Paul_2024_11_28]] is the textbook example: Fahad knew his monthly range but had "no clue" on yearly revenue, which meant he couldn't spot the trend.

Measuring "conversations" instead of "discovery calls with decision-makers." A conversation with someone who can't buy is worth zero. Track decision-maker calls separately or your data is polluted.

## The contrarian read

Most sales advice says track everything. I say track three things religiously and ignore the rest until you're doing $50K/month.

The three: (1) How many qualified discovery calls you booked. (2) How many of those closed. (3) Average deal size.

That's it. Everything else is distraction until you hit consistent revenue.

The "track your pipeline value" advice is actively harmful for early-stage founders. Pipeline value assumes deals close at some predictable rate, but when you're new, they don't. You waste time inflating pipeline numbers to feel productive instead of doing the actual work of closing.

The obsession with CAC (customer acquisition cost) and LTV (lifetime value) is premature for most founders. You need at least 50 customers before those numbers mean anything. Before that, track cost per conversation and close rate. Cheaper and more actionable.

Cycle time is more important than close rate for founders doing high-ticket work. A 50% close rate with a 90-day cycle is worse than a 30% close rate with a 14-day cycle. You run out of cash waiting for the high close rate to pay off.

## What it looks like when it's working

You know exactly how many outreach messages you need to send to book one call. Example from [[Workshop campaign analysis and results - 8e33619f]]: 1,000 DMs sent, 51 registrations, 5 closed deals. That's 200 DMs per closed deal. Expensive on DMs but now you know the number. You can reverse-engineer the revenue target: need 10 clients? Send 2,000 DMs.

Your close rate is stable month-over-month within 5-10%. If it's 35% in January, 38% in February, and 33% in March, your process is working. If it swings from 20% to 60%, you're not measuring consistently or your leads are all over the place.

You can forecast revenue 60 days out with reasonable accuracy. You know how many calls are in the calendar, your average close rate, and your average deal size. Multiply those three and you have next month's revenue within 20%.

Your average deal size is trending up quarter-over-quarter. Not because you're "charging more" but because you're closing bigger deals by qualifying better. [[Giosg]] shows this in their pricing strategy: they target enterprises and mid-sized companies because the deal sizes justify the integration complexity. Smaller deals wouldn't survive their sales cycle.

You know which lead sources convert and which ones waste time. Email might book 5% of conversations but close at 50%. DMs might book 15% but close at 10%. If you're not tracking source-to-close, you'll keep spending time on the channel that feels busy instead of the one that pays.

You stop saying "I'm busy" and start saying "I closed three this month, I need to book eight more calls to hit target." Busy is a feeling. Metrics are reality.

## Related categories

- [[06-pb-coaching/sales-discovery-process|Sales discovery process]] — the actual structure of the calls you're measuring conversion on
- [[08-sales-discovery/handling-too-expensive|Handling "too expensive"]] — the most common objection that shows up when you track objection frequency
- [[04-offers-pricing/pricing-philosophy|Pricing philosophy]] — average deal size only matters if your pricing is defensible
- [[05-content-marketing/linkedin-conversion-funnel|LinkedIn conversion funnel]] — how content marketing feeds the discovery call pipeline you're tracking
- [[11-ai-stack/ai-crm-and-tracking|AI CRM and tracking]] — the tools that make metric tracking automatic instead of manual spreadsheet hell

## Source notes

- [[Workshop campaign analysis and results - 8e33619f]]
- [[App development problem identification - d1955b05]]
- [[Giosg]]
- [[Building nasops transcript-based documentation and email generation app - 78e52862]]
- [[Building an Effective Marketing Funnel - 6c8da453]]
- [[Nas.io document redesign with branding - 6b8ef772]]
- [[Automation_&_Operations_Scoping_Call_x_Daniel_Paul_2024_11_28]]
- [[Noman]]


<!--::DANNY-DISTILL-END::-->
