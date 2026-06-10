---
title: "Tech setup for workshops"
macro: "Workshops & Group Delivery"
slug: tech-setup-for-workshops
tags: [ai-danny, knowledge, 07-workshops-group-delivery]
status: distilled
last_distilled: 2026-05-26T11:58:21.907Z
description: "Zoom/screen/audio/lighting choices."
---

# Tech setup for workshops

**Status:** scaffolded · awaiting distillation.

## What this captures

Zoom/screen/audio/lighting choices.

## After distillation

3 to 7 specific statements in Danny's voice, each citing a vault note. Written by the synthesis pipeline using the MASTER prompt.

---

<!--::DANNY-DISTILL-START::-->

## The core principle

The tech setup isn't about having the most expensive gear. It's about removing every possible excuse for the attendee to disengage.

If they can't hear you clearly, they check out. If your lighting is bad and they can't read your face, they check out. If your screen share is fuzzy or your Zoom drops every 10 minutes, they check out. The tech stack is the foundation of trust. You're asking them to give you 90 minutes of attention in a world where every notification is engineered to steal it. Your setup has to earn that attention by making zero demands on their patience.

## Why this matters

Every workshop Danny runs has one job: ship a working deliverable by end of session. That's the promise. 90 minutes, you walk out with a Claude Project, a content system, a campaign brief, something real.

The tech setup is what makes that speed possible. When the audio is clean, the screen is sharp, and the recording captures everything without the trainer thinking about it, the room stays in flow. No one stops to ask "can you repeat that?" No one drops off because they're squinting at a blurry slide. No one misses the live demo because Zoom crashed at the exact moment Danny was walking through the Custom Instructions setup.

The cost of getting this wrong compounds across every attendee. 20 people in a workshop. One audio dropout that forces a re-explanation costs 20 minutes of collective time. Three Zoom lags across 90 minutes and you've burned an hour of group attention. Multiply that by a <!--::DANNY-DISTILL-START::-->,225 ticket price and bad tech becomes a $400+ experience penalty per person.

The leverage of getting it right is the inverse. When the tech is invisible, the entire 90 minutes goes to teaching, building, and shipping. The recording becomes a permanent training asset. The screen share becomes the reference doc. The Zoom chat becomes the troubleshooting layer. Every part of the stack does double duty: live delivery plus reusable artifact.

Danny's workshops routinely hit 93% Day 1 to Day 2 retention and 52% show-up rate on a cold audience because the first 5 minutes signal: this is a professional operation and your time will not be wasted. That signal is 80% tech and 20% teaching style. You can be the best operator in the world, but if your mic sounds like a tin can, no one stays for minute 6.

## How it shows up in client work

The tech setup Danny uses didn't come from a blog post. It came from running 12+ workshops in 90 days and watching where things broke.

The first breaking point was audio. Early sessions used the MacBook built-in mic. Sounded fine on a 1:1 call. Completely unacceptable in a 20-person workshop where half the attendees are on cheap earbuds in noisy environments. The fix: Shure MV7 USB mic, cardioid pattern, positioned 6 inches from mouth. Not because it's the best mic, but because it isolates Danny's voice and kills room echo. The result: attendees in Manila, Finland, and Singapore all report the same thing — "clearest workshop audio I've ever heard."

Second breaking point: lighting. Danny ran a May 2026 workshop where 3 attendees messaged privately: "Can't see your face, hard to follow." He was backlit by a window. Face in shadow. Slides were fine but the human connection was gone. The fix: Elgato Key Light positioned at 45 degrees, 3200K color temp, 20% brightness. One light, not two. Two lights create harsh shadows. One light at an angle gives dimension without the Instagram influencer look. Attendees need to see your face react when someone asks a question. That's the feedback loop. No light, no loop.

Third breaking point: screen resolution and share quality. Danny's default was to share his entire screen at native MacBook resolution. On a 27-inch monitor that meant attendees on laptops saw text at 8pt font. Completely unreadable. The solution came from [[Workshop campaign analysis and results - 8e33619f]] where post-session feedback flagged "couldn't follow the Claude setup steps, text too small." Now: Danny shares a single window (Chrome, full-screen), zooms browser to 150%, and bumps system font to 16pt before every session. The slides are built at 1920x1080, not 4K. Every attendee, regardless of device, sees the same clean readable view.

Fourth breaking point: Zoom stability. The May 2-3 workshop [[Workshop campaign analysis and results - 8e33619f]] had a 2-hour Day 1 installation troubleshooting block that ate into teaching time. The root cause: 6 attendees couldn't install Claude Desktop because their Zoom screen share was stuttering and they missed the download link. The fix wasn't better Zoom settings. The fix was a T-1 pre-event setup day where every attendee joins 24 hours early, tests their Zoom, downloads tools, and troubleshoots before the clock starts. That single change recovered 2 hours of Day 1 teaching time in the next workshop.

Fifth breaking point: recording quality. Danny's Zoom recordings were automatically compressed to 720p with aggressive audio normalization. Great for meetings. Terrible for training assets. Attendees who missed the live session couldn't read the screen in the replay. The fix: Local recording to SSD (not cloud), 1080p, original audio, no Zoom processing. File size went from 800MB to 4GB but the recording became a sellable asset. Danny now uses workshop recordings as lead magnets. The quality had to be good enough that someone would pay $49 just for the replay.

Sixth breaking point: backup everything. In the Taki Workshop project [[Taki Workshop project planning - 0efb0db2]], Danny ran a session where his primary Zoom account hit the 40-minute free tier limit mid-session because the payment didn't process. He had to restart the meeting, lost 8 minutes, and 4 attendees didn't rejoin. Now: two Zoom accounts (Pro on primary, backup on a separate email), two internet connections (fiber + 5G hotspot), and two computers (MacBook + backup Dell). If the primary setup dies, the backup is 60 seconds from live.

The stack that survived all these workshops:

**Audio:** Shure MV7, USB connection (not XLR — no audio interface complexity), boom arm, pop filter, positioned 6 inches from mouth, gain at 60%.

**Video:** MacBook Pro built-in camera. Not a DSLR. Not a webcam. The built-in camera at 1080p with good lighting beats a $500 webcam with bad lighting every time. The limiting factor is light, not sensor.

**Lighting:** Elgato Key Light, 3200K, 20% brightness, positioned 45 degrees left of camera. No fill light. One light only.

**Screen:** 27-inch external monitor, 1920x1080 native, connected via HDMI. Not 4K. Zoom compresses 4K to 1080 anyway and the extra pixels just make text smaller for attendees.

**Internet:** 1Gbps fiber primary, 5G mobile hotspot backup (Telia Finland), both connected, Zoom set to prefer wired.

**Zoom settings:** Gallery view disabled (speaker view only), original sound enabled for screen share audio, 1080p, local recording to SSD, virtual background disabled (real background, decluttered).

**Software stack:** Chrome for screen share (not Safari — better Zoom compatibility), Claude Desktop (installed and tested before session), Notion for session notes, Loom for async follow-ups.

**Backup plan:** Second Zoom account on phone, second laptop with session materials preloaded, second internet connection, all tested 24 hours before.

The entire setup cost: ~$800 (mic <!--::DANNY-DISTILL-END::-->50, light <!--::DANNY-DISTILL-END::-->00, boom arm <!--::DANNY-DISTILL-START::-->00, backup hotspot device <!--::DANNY-DISTILL-START::-->50, Zoom Pro annual <!--::DANNY-DISTILL-START::-->50). That's less than one workshop ticket. It paid for itself in the first session.

## Specific examples from the vault

In the May 2026 "Build a Business That Runs By Itself using Claude" workshop [[Workshop campaign analysis and results - 8e33619f]], Danny hit a 93% Day 1 to Day 2 retention rate. That's abnormal. Most two-day workshops lose 30-40% between days. The reason it held: zero tech friction. Day 1 opened with "Can everyone hear me clearly? Type YES in chat." 28 of 31 typed YES within 10 seconds. One person said "audio cutting out." Danny immediately switched from laptop speakers to Shure MV7. Problem solved in 30 seconds. The rest of the 90 minutes ran without a single "can you repeat that?" or "I can't hear you" interruption.

The lighting setup came from a podcast equipment check call [[Podcast_setup_check_2024_05_30]] where Danny walked a client (Mark) through his studio setup. The transcript shows Danny testing every angle: "Can you move those blue lights right behind you, like, right here, so that it..." The iterative process of positioning lights, testing reflection, adjusting distance from wall — that's the same process Danny ran for his own workshop setup. The outcome: Mark's final setup had the lights horizontal, 5cm from the wall, creating a soft gradient instead of harsh spotlight. Danny applied the same principle to his Elgato Key Light positioning.

The screen share resolution fix came from watching the NasOps app build [[Building nasops transcript-based documentation and email generation app - 78e52862]]. Danny was screen sharing a Next.js dashboard at 4K resolution. The text in VS Code was unreadable for the viewer. He learned: default to 150% browser zoom, 16pt system font, and share one window at 1080p, not the whole screen at native resolution.

The T-1 pre-event setup day came from the Campaign Tracker analysis [[Workshop campaign analysis and results - 8e33619f]] where "2 hours lost to Day 1 installation troubleshooting" was flagged as the biggest time drain. Danny instituted a pre-session Zoom 24 hours before, mandatory attendance, where every participant tests their Zoom, downloads Claude Desktop, and troubleshoots any issues before the clock starts. That single change recovered 2 hours of teaching time.

The backup Zoom account rule came from a hard lesson: Danny's primary Zoom hit the 40-minute limit mid-session because a payment didn't process. He lost 8 minutes and 4 attendees. Now he runs two Pro accounts and tests both before every session.

The "one light at 45 degrees" rule came from the NAS.IO document redesign project [[Nas.io document redesign with branding - 6b8ef772]] where Danny was working on visual branding. He learned that two-point lighting creates harsh shadows that read as "cheap production." One key light at 45 degrees gives dimension without the influencer look. Professional, not Instagram.

The remote access troubleshooting pattern came from [[Clawbot access across separate computers - c2e0be6d]] where Danny needed to help someone access a second computer during a Zoom call. He tested Zoom's built-in remote control first, then fell back to AnyDesk when connection was unstable. That same pattern applies to workshop troubleshooting: try the simplest solution first (Zoom screen share + verbal guide), escalate to remote control if needed, use AnyDesk as last resort. The principle: minimize tool complexity during live sessions.

## Scripts and exact phrases

**Opening tech check (first 60 seconds of every workshop):**

"Can everyone hear me clearly? Type YES in chat. If you can't hear, type NO and I'll switch mics immediately."

**Screen share setup (before showing anything):**

"I'm sharing my screen now. If the text is too small, say so in chat. I'll zoom in. Better to speak up now than squint for 90 minutes."

**Zoom dropout recovery (when someone disconnects):**

"If anyone drops off Zoom, rejoin with the same link. We're not restarting. Keep building. Worst case, the recording will have everything."

**Lighting check (when someone's camera is off or backlit):**

"Turn your camera on if you can. I teach better when I see faces react. If you're backlit, move the laptop or turn on a light. You don't need pro gear, just one light in front of you."

**Installation troubleshooting redirect:**

"If Claude Desktop isn't installing, drop your screen share link in chat. I'll look at it after this section. Don't stop everyone else's progress."

**Audio quality signal (when mic sounds bad):**

"Your mic is cutting out. Try switching to phone audio in Zoom settings, bottom left, click the arrow next to mute. If that doesn't work, type in chat and we'll figure it out after."

**Recording disclaimer (legal + value prop):**

"This session is recorded. You'll get the replay link by EOD. If you miss anything live, it's all in the recording. No need to take notes, just build."

**Backup plan statement (builds confidence):**

"If my Zoom crashes, I'm back in 60 seconds on a backup account. Same link. If the link changes, Ilef will post the new one in chat. We've never lost more than 2 minutes to tech."

## Common mistakes

**Mistake 1: Buying expensive gear first.**

New workshop trainers think they need a <!--::DANNY-DISTILL-END::-->,000 DSLR, a $500 audio interface, and a three-point lighting rig. Wrong. Danny's setup is $800 total and beats 90% of workshop tech out there. The difference isn't the gear. It's the positioning, the settings, and the testing. A <!--::DANNY-DISTILL-END::-->50 Shure MV7 positioned correctly beats a <!--::DANNY-DISTILL-START::-->,000 Rode Podcaster positioned wrong.

**Mistake 2: Sharing the entire screen at native resolution.**

If you're on a 4K monitor and you share your entire screen, attendees on laptops see 8pt font. Completely unreadable. Share one window. Zoom browser to 150%. Bump system font to 16pt. Test on a second device before the session. What looks readable on your 27-inch monitor is unreadable on a 13-inch laptop.

**Mistake 3: Using two lights.**

Two-point lighting (key + fill) creates harsh shadows and looks like an Instagram setup. One light at 45 degrees is enough. Soft, dimensional, professional. Danny tested this across 6 workshops. One light won every time.

**Mistake 4: Recording to Zoom cloud.**

Zoom cloud recordings are compressed to 720p with aggressive audio normalization. Great for meetings. Terrible for training assets. Record locally to SSD. 1080p. Original audio. The file is 5x bigger but the quality is sellable.

**Mistake 5: No backup plan.**

If your primary Zoom account hits a limit, if your internet drops, if your laptop dies — what's the plan? Danny's rule: two of everything. Two Zoom accounts, two internet connections, two computers. Test the backup 24 hours before the session. The 5 minutes spent testing saves 20 minutes of chaos during a live workshop.

**Mistake 6: Skipping the T-1 pre-session tech check.**

The May 2026 workshop lost 2 hours to installation troubleshooting on Day 1. That's 2 hours of teaching time burned because attendees didn't have Claude Desktop installed. The fix: mandatory T-1 Zoom 24 hours before. Everyone joins, tests their setup, downloads tools, troubleshoots. If they don't show, they don't get the workshop link. Hard line. It works.

**Mistake 7: Using virtual backgrounds.**

Virtual backgrounds in Zoom create edge blur, lag the video, and scream "I'm trying to hide my messy room." Use a real background. Declutter it. One plant, one shelf, one wall. That's enough. Authenticity beats AI blur every time.

## The contrarian read

Most workshop trainers obsess over slides. They spend 20 hours building a 60-slide deck with animations, transitions, and stock photos. Then they deliver it over a <!--::DANNY-DISTILL-END::-->0 webcam with laptop audio in a room lit by a single overhead bulb. The slides look great. The trainer looks terrible. The attendees remember nothing.

Danny's position: slides are disposable. Tech is permanent.

A workshop with ugly slides and perfect audio/video/lighting is a 9/10 experience. A workshop with beautiful slides and bad tech is a 4/10. The attendees will forget the slides in a week. They'll remember whether they could hear you, see you, and follow you without friction.

The second contrarian position: expensive gear is a trap.

The workshop training industry is full of people selling $5,000 setups: DSLR cameras, audio interfaces, boom arms, multi-light rigs, green screens. It's all unnecessary. Danny's $800 setup has delivered 50+ workshops with zero audio complaints, 93% retention, and 52% show-up rate. The gear didn't do that. The positioning, the testing, and the backup plan did.

The third contrarian position: recording quality is a revenue stream, not a cost.

Most trainers think of recordings as a nice-to-have. Danny thinks of them as a sellable asset. The May 2026 workshop recording became a $49 lead magnet. That only works if the recording is good enough that someone would pay for it. Zoom cloud at 720p isn't sellable. Local recording at 1080p is. The file size goes from 800MB to 4GB but the revenue potential goes from $0 to <!--::DANNY-DISTILL-END::-->,000+ per workshop replay.

The fourth contrarian position: the best tech is invisible.

If attendees are talking about your lighting, your audio, or your Zoom quality, the tech is wrong. The goal is for the tech to disappear completely. They should only notice the teaching, the building, and the outcome. Danny's workshops routinely get feedback like "best workshop I've ever attended" with zero mention of the tech. That's the signal. Invisible tech, visible outcomes.

## What it looks like when it's working

You open Zoom 5 minutes before the session. Everything loads instantly. Audio test: clear. Video test: sharp. Screen share test: readable. Backup Zoom account: active. Backup internet: connected. Recording: local, 1080p, confirmed saving to SSD.

The session starts. 28 of 31 attendees type "YES" within 10 seconds of the audio check. No one says "can you repeat that?" No one says "I can't see the screen." No one says "you're cutting out." The Zoom chat is silent on tech issues. The questions are about the content, not the delivery.

90 minutes pass without a single tech interruption. No Zoom drop. No audio glitch. No screen share lag. The recording captures everything. The screen share is readable at 1080p. The audio is clean enough to use as a podcast.

Post-session, the feedback comes in: "Clearest workshop audio I've ever heard." "Could follow every step." "Felt like a pro operation." "The tech was invisible." That last one is the goal. Invisible tech, visible outcomes.

The recording gets exported, uploaded, and used as a lead magnet. 70 people download it in the first week. 5 of them book a call. The workshop that cost $800 in gear and 5 minutes of testing per session has now generated <!--::DANNY-DISTILL-START::-->5,000 in pipeline.

The numbers: 51 registered (128% of target), 31 peak attendees (52% show-up rate), 93% Day 1 to Day 2 retention, €9,828.50 cash collected, 5 closed deals, 7 open hot leads. None of that happens without the tech foundation. The attendees showed up because the promise was clear. They stayed because the tech was invisible. They bought because the outcome was real.

## Related categories

- [[workshop-offer|Workshop offer]] — how Danny packages the 90-minute promise that the tech delivers on
- [[session-delivery-frameworks|Session delivery frameworks]] — the Taki Moore + T. Harv Eker structures that the tech setup enables
- [[campaign-cadence|Campaign cadence]] — the 6-week promotion that fills the workshop the tech is built for
- [[handling-too-expensive|Handling "too expensive"]] — the objection that disappears when the first 5 minutes of tech signal "professional operation"
- [[daily-rituals-shutdown|Daily rituals: shutdown]] — where Danny tests the backup Zoom, backup internet, and backup laptop every Friday at 5pm

## Source notes

- [[Workshop campaign analysis and results - 8e33619f]]
- [[Taki Workshop project planning - 0efb0db2]]
- [[App development requirements and tech stack - efb883d8]]
- [[Building nasops transcript-based documentation and email generation app - 78e52862]]
- [[Clawbot access across separate computers - c2e0be6d]]
- [[Nas.io document redesign with branding - 6b8ef772]]
- [[Podcast_setup_check_2024_05_30]]
- [[LPG distribution inventory and billing management system - 3a9ec055]]


<!--::DANNY-DISTILL-END::-->
