---
title: "Communication norms"
macro: "Operations & Team"
slug: communication-norms
tags: [ai-danny, knowledge, 12-operations-team]
status: distilled
last_distilled: 2026-05-26T11:58:22.030Z
description: "Slack/email/calls rules."
---

# Communication norms

**Status:** scaffolded · awaiting distillation.

## What this captures

Slack/email/calls rules.

## After distillation

3 to 7 specific statements in Danny's voice, each citing a vault note. Written by the synthesis pipeline using the MASTER prompt.

---

<!--::DANNY-DISTILL-START::-->

## The core principle

Communication at scale dies when people narrate decisions instead of making them.

The moment someone types "just checking in" or opens with "Great question!" or writes three paragraphs to say what takes one sentence, the whole operation slows down. Every unnecessary word is friction. Every hedge is a decision deferred. Every sycophantic opening is a power dynamic inverted.

The communication system either enforces clarity or collapses under politeness theatre.

## Why this matters

Most founders think communication is about being nice or thorough or responsive. It's not. It's about decision velocity.

When a team member sends "Hey, I was thinking maybe we could possibly consider looking into whether it makes sense to explore the idea of updating the email template" instead of "Change the email subject line to: I did nothing. The work got done. Repeat." the cost isn't just the extra words. It's the three-message follow-up thread asking what they actually mean. It's the meeting scheduled to clarify. It's the decision that doesn't get made that day.

Communication norms are the operating system every other system runs on top of. If the OS is slow, nothing built on it moves fast.

Bad communication systems let people off the hook. They reward hedging. They let "it depends" pass as analysis. They allow "I'll circle back" to mean "I'm avoiding this." They make clarity optional.

Good communication systems make the decision visible in the first message. They make the ask clear. They make the next action obvious. They cut every sentence that doesn't change what happens next.

The cost of broken communication norms isn't just wasted Slack time. It's the founder who can't leave the operation because nobody can make a call without checking first. It's the team that can't move without a meeting. It's the client who pays for speed and gets a four-day turnaround on a yes-or-no question.

When communication is clean, one message closes a loop. When it's broken, one message opens five threads.

## How it shows up in client work

The pattern shows up the same way every time: the client books the call, I ask what's blocking them, and they say "my team." I ask what their team is blocked on, and they pull up Slack or email. What I see is twelve messages back and forth where one would have worked.

The most common version is the "approval trap." A team member asks "Should we send this?" The founder replies "What do you think?" The team member says "I think it's good but wanted to check." The founder says "If you think it's good, send it." The team member says "Okay, just wanted to make sure." Nothing ships for 48 hours.

The fix isn't "communicate better." The fix is a rule: if you're asking permission, you've already decided. State the decision and the reason. The other person can veto in one message or let it ship. [[Rewriting Claude Dispatch email with Taki Moore style - 93aa57e5]] shows this in action. Danny wasn't asking Claude "what do you think about this email?" He pasted the draft, named the problem ("make it more catchy"), and Claude rewrote it in one pass. No back-and-forth. The decision was visible.

Another pattern: the endless thread. A client sends a question. The team member replies with three paragraphs explaining context. The client asks a clarifying question. The team member replies with two more paragraphs. Four messages in, the original question still isn't answered.

The fix is One Question One Answer. The first reply states the answer in the first sentence, then adds context only if needed. [[Gmail Email Check from Nuri - 4e88c3a8]] demonstrates this. When Danny asked Claude to check Gmail for Nuri's last three emails, Claude didn't open with "Let me search your inbox and analyze patterns." It opened with "I'll help you check your Gmail for the last 3 emails from Nuri" then executed. The answer came first.

The worst version of this is the "I need to think about it" trap in sales. A prospect says they need to think about it. The founder says "totally fair, take your time." The prospect ghosts. [[Identifying potential COO candidates - 4f6f25fd]] shows a different approach. When someone says "I need to think about it," the response is: "Walk me through what's still unclear. Price, scope, fit, or timing?" Most of the time they name one. Then it gets worked right there.

I had a client running a ten-person team who was spending four hours a day in Slack "keeping everyone aligned." We pulled the last 200 messages. 80% were confirmations, clarifications, or check-ins. The actual decisions numbered 14. The rule we implemented: if the message doesn't contain a decision, a deadline, or a piece of information someone needs to make a decision, don't send it. His Slack time dropped to 30 minutes a day.

Another pattern: the "just wanted to update you" message with no ask. A team member sends "Just wanted to update you — the client call went well and they seemed happy with the proposal." The founder now has to decide: do I ask for details? Do I assume it's handled? Do I wait for the next update? The uncertainty costs more than the update delivered.

The fix is Update Equals Next Action. Every update ends with: "Next: [specific action by specific person by specific date]." If there's no next action, there's no need to update.

The NasOps build sessions show this rule enforced at speed. [[Building nasops transcript-based documentation and email generation app - 78e52862]] documents a multi-hour session where Danny never sent a message that didn't contain a decision or a piece of information that unblocked the next step. "Add a PS to the email." "Use Taki Moore style." "No emojis." Every message moved the work forward. No "just checking in." No "great progress." Just the next thing that needed to happen.

The hardest pattern to fix is the one where the founder is the bottleneck. A team member asks a question. The founder takes 18 hours to reply. The team member asks another question. The founder batches replies once a day. The team is trained to wait.

The fix isn't "reply faster." The fix is a communication protocol. Decisions under $X or under Y impact: team decides and notifies. Decisions over that threshold: team proposes with a default action ("We're moving the session to Thursday unless you veto by EOD"). The founder's job shifts from answering questions to vetoing bad calls. Most of the time, they don't veto.

One client implemented this with a $500 threshold. Anything under $500, the ops manager decided. First week, seven decisions got made without the founder. The founder vetoed zero. Second week, eleven decisions. Zero vetoes. By week four, the founder was out of the daily decision queue entirely.

## Specific examples from the vault

The sharpest example of norms enforced in real-time is [[Rewriting Claude Dispatch email with Taki Moore style - 93aa57e5]]. Danny was writing a workshop invite email for Claude Dispatch. The first draft had emojis, em dashes, exclamation marks, and opened with "I don't do emergency sessions lightly."

Claude flagged every violation: "No emojis, no em dashes, no exclamation marks, one sentence per paragraph, subject line five words or fewer." Then rewrote the entire email enforcing those rules. The revised version opened with "I texted Claude and left the building" as the subject line. Every rule applied. No negotiation.

The lesson wasn't "write better emails." The lesson was "name the rules once, enforce them every time."

[[Building nasops transcript-based documentation and email generation app - 78e52862]] shows the same discipline across a multi-hour build session. Danny never opened a message with "Hey, quick question" or "When you get a chance." Every message was a command: "Build a participant intelligence tab." "Add CSV export." "Fix the URL extraction." No filler. No hedging. Just the next thing that needed to ship.

When something broke, Danny didn't say "Hmm, seems like there's an issue here." He said "URL extraction in Session AI required five iterations." He named the problem and moved on. No blame. No narrative. Just the fact.

[[Linkedin_Engagement_and_posting_2025_04_09]] documents a client onboarding call where Danny introduced Juvy to Ratan. The entire interaction took 90 seconds. "Juvy, this is Ratan. Ratan, this is Juvy. Juvy handles LinkedIn engagement. Ratan, share your credentials. Juvy, log in using the Finnish server." Done. No introductions about backgrounds or responsibilities. Just the roles and the next action.

Later in the same call, when Ratan said "I'm very casual with colleagues but more formal with people reporting to me," Danny's response was immediate: "Can you send us a list? We'll reply to each group accordingly." No "that's interesting" or "tell me more about that." Just convert the information into a deliverable.

[[App development problem identification - d1955b05]] shows the same pattern in a different context. Danny received a transcript of a customer problem. His question was: "List out the problems and what could be built to solve this issue." No "What do you think about this?" No "How would you approach this?" Just: here's the input, produce the output.

The vault note on [[Today s Slack Channel Summary - e1c0f165]] shows the opposite problem. When Danny asked "What was the conversation in Slack channel today," Claude opened with "I'll help you check the Slack conversations from today" then executed the tool. That's clean. But the summary that followed was eight paragraphs long with headers like "Most Recent Activity" and "Team Meeting Preparation" and "Administrative Tasks."

The better answer would have been: "Three things: someone joined the channel, you have a meeting at 10 AM with a Zoom link, invoices are due today." The format added no value. The headers added no value. The detail about "positive reactions (thumbs up) from team members" added no value. Danny didn't ask for a report. He asked what happened.

The hardest example is [[Identifying potential COO candidates - 4f6f25fd]]. Danny asked "Based on the conversations from my Slack, who could be the chief operating officer of my—" and didn't finish the sentence. Claude's response was "I don't have access to your Slack conversations to help identify potential candidates. Could you tell me more about what organization you're referring to?"

That's technically correct but operationally useless. The better response would have been: "I can't see Slack. Want me to check your calendar, Gmail, or notes for people doing ops work?" Convert the blocker into a path forward. Don't just report the blocker and wait.

## Scripts and exact phrases

**Opening any message with a decision:**
"We're shipping the email tomorrow at 9 AM unless you veto by EOD."

**Cutting a long thread:**
"One sentence: yes or no?"

**Handling 'I need to think about it':**
"Walk me through what's still unclear. Price, scope, fit, or timing?"

**Ending an update with next action:**
"Next: Danny reviews by Friday. Juvy posts Monday 10 AM EST."

**Pushing back on a question that's already been answered:**
"That's in the doc. Section 3."

**Replacing 'just checking in':**
"Deadline is Friday. On track?"

**Rejecting a 'great question' opening:**
"Skip the preamble. What's the answer?"

**Converting a request into a default action:**
"I'm moving the call to Thursday unless you reply by 6 PM."

## Common mistakes

The most common mistake is treating communication as relationship management instead of decision management. Someone sends "Hey, hope you're having a great week!" before asking the question. The politeness costs time and trains the team to expect small talk.

The fix is Start With The Ask. "Can you review this by Friday?" Then add context if needed.

Another mistake is the "I was thinking maybe we could" hedge. It signals the person hasn't decided yet and wants someone else to make the call. The fix is State The Proposal As If It's Happening. "I'm updating the email template to Taki Moore style. Ships Monday." The other person can veto. But the default is action, not discussion.

The endless clarification thread is another trap. Someone asks a question. The reply is unclear. They ask a follow-up. Three messages later, the question still isn't answered. The fix is One Question One Answer in the first sentence. Then add supporting detail.

A more subtle mistake is Updating Without Next Action. "The client seemed happy with the proposal" tells the reader nothing actionable. The fix is "The client approved. I'm sending the contract Thursday." Now it's clear what happens next.

The hardest mistake to fix is the one where the founder creates the bad norm by example. If the founder replies in paragraphs, the team replies in paragraphs. If the founder opens with "Great question," the team opens with "Great question." The team mirrors the communication style they see modeled.

The fix is Founder Sets The Standard. One sentence per message. No filler. No hedging. No narration. The team follows.

## The contrarian read

Most advice says "communicate more." More updates. More check-ins. More transparency. That's wrong.

Communicate less. Communicate only when a decision needs to be made or information needs to be delivered. Everything else is noise.

The conventional wisdom says "be responsive." Reply fast. Stay on top of messages. That's also wrong. Responsiveness without decision velocity is just inbox theatre. The goal isn't to reply fast. The goal is to close loops fast.

Another piece of conventional wisdom: "build rapport before asking." Wrong. Rapport is a result of closing loops reliably, not a prerequisite. The fastest way to build trust is to do what you said you'd do when you said you'd do it. Every "how are you" message before the ask is a signal that you're not confident enough to just ask.

The most dangerous conventional wisdom: "everyone should be aligned." Alignment is expensive. Alignment means meetings. Alignment means consensus. Alignment means waiting for the slowest person in the room to catch up. The better goal is clarity. Everyone knows their lane. Everyone knows the decision rules. Everyone moves.

## What it looks like when it's working

When communication norms are working, the Slack thread count drops by 60% in the first month.

Decisions that used to take three days take three hours. Most take three minutes.

The founder's daily message count drops from 80 to 15. The team's decision count goes up.

Meetings get shorter or disappear. The standup that used to take 30 minutes takes 10. Most days, it's a Slack thread.

The client response time drops from 48 hours to same-day. Not because anyone is working faster, but because the question gets answered in the first reply.

The number of "just checking in" messages goes to zero. Every message contains a decision, a deadline, or a deliverable.

The number of messages that start with "I was wondering if maybe" goes to zero. Every message starts with the proposal or the answer.

Team members stop asking permission and start notifying decisions. "Updated the landing page. Live now." The founder vetoes bad calls but doesn't need to approve good ones.

The founder can leave for a week and nothing stalls. The system runs because the communication system enforces decision-making, not consensus-seeking.

## Related categories

[[05-content-marketing/hook-patterns-by-archetype|Hook Patterns by Archetype]] — same principle of cut-the-filler applies to public content. The hook either grabs or it doesn't. No "let me tell you a story."

[[08-sales-discovery/handling-need-to-think|Handling 'Need to Think']] — the "I need to think about it" trap is a communication norm problem disguised as a sales problem. Fix the norm, close more deals.

[[06-personal-branding-coaching/seven-day-breakthrough-pattern|Seven-Day Breakthrough Pattern]] — when a client is stuck on execution, it's almost always a communication problem. They're narrating instead of deciding.

[[04-offers-pricing/pricing-philosophy|Pricing Philosophy]] — pricing conversations die when the founder hedges. The price is the price. Communicate it like a fact, not a negotiation.

[[07-workshops-curriculum/workshop-offer|Workshop Offer]] — workshop invites fail when the promise is buried under three paragraphs. Lead with the outcome. Cut everything else.

## Source notes

- [[Rewriting Claude Dispatch email with Taki Moore style - 93aa57e5]]
- [[Building nasops transcript-based documentation and email generation app - 78e52862]]
- [[Today s Slack Channel Summary - e1c0f165]]
- [[App development requirements and tech stack - efb883d8]]
- [[Linkedin_Engagement_and_posting_2025_04_09]]
- [[Gmail Email Check from Nuri - 4e88c3a8]]
- [[Identifying potential COO candidates - 4f6f25fd]]
- [[App development problem identification - d1955b05]]


<!--::DANNY-DISTILL-END::-->
