# Marketing & Ops | WhatsApp + Launch Checklist

<callout icon="📣" color="blue_bg">
	**MARKETING & OPS** | Part 1: the daily WhatsApp layer. Part 2: the launch checklist. | All times SGT
</callout>

This doc holds the two operational pieces of the campaign: the WhatsApp nudges that carry the daily layer, and the ops checklist that gets the challenge shipped. Dates and facts come from Source of Truth.

---

# Part 1: WhatsApp Daily Nudges

<callout icon="📱" color="blue_bg">
	**WHATSAPP DAILY NUDGES** | The daily layer (email is gates and summit only) | Voice: Matt, 2 to 4 lines | All times SGT
</callout>

<callout icon="📏" color="gray_bg">
	**The 4 rules:** 1. Open with `<<FirstName>>`. 2. Reference what they just did. 3. One question or one micro-action, never both. 4. Texts, not paragraphs. Tokens: `<<FirstName>>` auto-fills, `https://TEAM-TO-ADD` filled before loading, never hand-type a count.
</callout>

## Schedule

<table fit-page-width="true" header-row="true">
<tr color="blue_bg">
<td>Day</td>
<td>Date</td>
<td>Time</td>
<td>Trigger</td>
</tr>
<tr><td>1</td><td>Sun Jun 21</td><td>9am</td><td>Welcome (orientation)</td></tr>
<tr><td>1</td><td>Sun Jun 21</td><td>7pm</td><td>Haven't said hello?</td></tr>
<tr><td>2</td><td>Mon Jun 22</td><td>7pm</td><td>Posted today? (non-posters)</td></tr>
<tr><td>3 to 7</td><td>Jun 23 to 27</td><td>7pm</td><td>Posted today? (non-posters)</td></tr>
<tr color="red_bg"><td>8</td><td>Sun Jun 28</td><td>8am, 6pm, 10pm</td><td>Gate 1 video</td></tr>
<tr><td>9 to 13</td><td>Jun 29 to Jul 3</td><td>7pm</td><td>Posted today? (non-posters)</td></tr>
<tr color="red_bg"><td>14</td><td>Sat Jul 4</td><td>8am, 6pm, 10pm</td><td>Gate 2 final submission</td></tr>
<tr color="purple_bg"><td>15</td><td>Sun Jul 5</td><td>9am</td><td>Graduated or missed</td></tr>
<tr><td>Summit T-1</td><td>Tue Jul 7</td><td>6pm</td><td>Tomorrow</td></tr>
<tr color="green_bg"><td>Summit</td><td>Wed Jul 8</td><td>10pm (1 hr before)</td><td>Starting soon</td></tr>
</table>

## Messages (copy-paste ready)

**Day 1, 9am, Welcome (orientation)**

```
<<FirstName>>
Day 1 is open, welcome.
Today: join the space, create your (empty) Claude Project, and say hello in #Day1. 10 min.
Tomorrow we start building.
Link: https://TEAM-TO-ADD
Matt
```

**Day 2, 7pm, Name your business (non-posters)**

```
<<FirstName>>, Day 2 still open.
Name your business in 3 sentences inside Claude. That's the whole task.
Drop it in #Day2. I'll reply by morning.
Matt
```

**Days 3 to 7, 7pm, daily (non-posters)**, same template with a day-specific line:

- Day 3: "Write your business profile into Claude. 20 min. This is the agent's brain."
- Day 4: "Add your ideal customer. Who buys, and what's their problem?"
- Day 5: "Paste 2 to 3 things you've written so the agent sounds like you."
- Day 6: "The big one, build the idea engine. Run it once, post what it gives you."
- Day 7: "Run your agent. Generate 3 ideas. Keep the best."

**Day 8, 8am, Gate 1**

```
<<FirstName>>, Day 8. The gate.
2-min video today. Phone, no editing.
Show your agent make one idea and say your biggest blocker.
Post in #Day8 by 11:59pm.
Miss it and you're out of the comp.
Matt
```

(6pm: "6 hours to film." 10pm: "2 hours. Open your camera. 2 minutes. Post.")

**Days 9 to 13, 7pm, daily (non-posters):**

- Day 9: "Turn your idea into a ready-to-run prompt."
- Day 10: "Make it output 3 formats: post, reel script, caption."
- Day 11: "Make it proactive, set the daily routine."
- Day 12: "Polish day. Kill anything generic."
- Day 13: "Run it 7 times, a full week of ideas. Pick your favorite."

**Day 14, 8am, Gate 2**

```
<<FirstName>>, final day.
By 11:59pm tonight, submit in #Day14:
- your agent (link or 60 to 90 sec recording)
- your 1-page brief
- one demo idea and prompt
3 boxes on the form, one each.
Submit and you graduate.
Matt
```

(6pm and 10pm last-calls, sent manually.)

**Day 15, 9am, Graduated**

```
<<FirstName>>, you graduated.
You built a working AI marketing agent. Most people never start.
Summit is Wed, 3 experts build 3 agents live. Bring yours.
https://TEAM-TO-ADD
Matt
```

(Missed-the-gate version: "you didn't hit the gate, and that's ok. Reply yes for 30 min to finish.")

**Summit T-1, 6pm:** "Summit tomorrow. Wed, 11:00pm SGT. 3 hours. Bring your own agent. <https://TEAM-TO-ADD/zoom>"
**Summit day, 1 hr before:** "Starting in 1 hour. <https://TEAM-TO-ADD/zoom>"

<callout icon="🚫" color="red_bg">
	**What NOT to send:** generic "how's it going?", more than one nudge a day, any upsell during Days 8 to 14, anything before 8am or after 10pm SGT, anyone who replied "stop."
</callout>

## Automation

- Trigger: "no post in #DayN by 7pm SGT, send Day N nudge."
- Gate last-calls (6pm and 10pm on Days 8 and 14) and the missed-gate message: Matt sends manually.
- Templates pre-approved by Meta (about 7 days, submit early; see Part 2).

---

# Part 2: Launch Ops Checklist

<callout icon="🚀" color="blue_bg">
	**LAUNCH OPS** | The punch-list to ship the challenge | Owner: Danny | Last item closes about Sat Jun 20 | All times SGT
</callout>

## Week-by-Week Critical Path

**T minus 2 weeks (week of Jun 8): strategy and assets**

- [x] Facts locked in Source of Truth. Only the 3 expert names and live links remain.
- [ ] 3 Summit experts recruited (names TBC, placeholders OK)
- [ ] Community space created on Nas.io
- [ ] Daily checkpoints (Days 1 to 15) stubbed
- [ ] Templates uploaded to resources
- [ ] WhatsApp Business templates submitted to Meta (allow about 7 days, do this first)

**T minus 1 week (week of Jun 15): comms and the form**

- [ ] Landing and registration page live
- [ ] Registration feeding the email tool segment
- [ ] All 8 emails drafted, dates and links filled
- [ ] WhatsApp templates approved and loaded
- [ ] Submission form built AND test-submitted (see the gate below)
- [ ] Day 1 and Day 2 trainer videos filmed
- [ ] Student prep checklist scheduled

**Launch week (Sun Jun 21)**

- [ ] Day-1 launch sequence runs on time
- [ ] Daily standup running, gate-day nudges staffed (Days 8 and 14)

<callout icon="⛔" color="red_bg">
	**The submission-form gate (the number-one fix from last time).** Do not let the rules go live until ALL of these pass:
	- Form has three separate fields: (1) agent link or file, (2) brief file or link, (3) demo idea text or link
	- Each field accepts both a file AND a link (video links welcome)
	- "Paste a link or upload a file, video links are fine" printed on the form
	- A team member submits a full dummy entry (link, file, text) and confirms all three land in the entries Drive
	- Matt and Danny added to the entries Drive
	- The form fields match Competition Rules & Entry Process field-for-field
</callout>

## Team and Roles

<table fit-page-width="true" header-row="true">
<tr color="blue_bg">
<td>Person</td>
<td>Role</td>
<td>Confirmed</td>
</tr>
<tr><td>Danny</td><td>Owner, judging</td><td>yes</td></tr>
<tr><td>Matt</td><td>Host, Summit MC</td><td>yes</td></tr>
<tr><td>Alexa</td><td>Ops lead</td><td>yes</td></tr>
<tr><td>Support team</td><td>Chat support</td><td>[ team to confirm names ]</td></tr>
<tr><td>Cholo</td><td>Summit tech</td><td>yes</td></tr>
<tr><td>3 Summit experts</td><td>Build 3 agents live</td><td>placeholders, names TBC</td></tr>
</table>

## Tech Stack

- [ ] Nas.io: community, checkpoints, registration
- [ ] Zoom: Summit, capacity 300 confirmed
- [ ] Email tool, WhatsApp Business API, submission form to entries Drive (tested), recording backup

## Day-1 Launch Sequence (Sun Jun 21, SGT)

<table fit-page-width="true" header-row="true">
<tr color="blue_bg">
<td>Time</td>
<td>Owner</td>
<td>Action</td>
</tr>
<tr><td>7:00am</td><td>Email tool</td><td>Welcome email auto-sends</td></tr>
<tr><td>8:00am</td><td>Multiple</td><td>Day 1 checkpoint live, trainer video posted</td></tr>
<tr><td>9:00am</td><td>WhatsApp</td><td>Welcome nudge sends</td></tr>
<tr><td>9:00am</td><td>Matt</td><td>Daily standup</td></tr>
<tr><td>9:30am</td><td>Matt</td><td>First replies in #Day1</td></tr>
<tr><td>7:00pm</td><td>WhatsApp</td><td>"Posted yet?" to non-posters</td></tr>
</table>

## Definition of Done (ship-ready)

- [ ] Zero unresolved facts (Source of Truth)
- [ ] Submission form tested
- [ ] 8 emails scheduled, WhatsApp loaded
- [ ] Community space live, checkpoints stubbed
- [ ] Day 1 and 2 trainer videos uploaded
- [ ] Prize payout confirmed ($1,000, 4 prizes)
- [ ] Summit start time locked
- [ ] Dry run passed (Sat Jun 20)
- [ ] Alex notified: launching Sun Jun 21, 7am SGT

---
*AI SCHOOL. NAS.com. CONFIDENTIAL.*
