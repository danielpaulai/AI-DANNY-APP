# 🔍 Knowledge Base Audit: What Keeps Going Wrong

> **Purpose:** This is the post-mortem the team asked for. It catalogs every *class* of mistake that has shipped in past challenge knowledge bases (Store Bootcamp → Winning Ad), with real examples pulled from the actual files. Each one has a root cause and a permanent fix. The fixes are implemented in `01 - FACTS - Source of Truth`, `02 - Pre-Publish QA Checklist`, and the build rules.
>
> **The one-sentence root cause:** *The same fact (a date, a name, a number, a link) is hand-typed into 10+ documents, and unknown values are pre-written as if they were already true. So one wrong date becomes ten wrong dates, and one invented number ships to students as a fact.*

---

## The 7 Recurring Mistake Classes

### 1. 🔴 Fabricated numbers shipped as facts (the "hallucination" the team caught)

Numbers that **could not be known** when the doc was written were typed in as if real, then copy-pasted across files. If these ship unedited, a student literally reads a made-up fact.

| Fake "fact" | Where it appears | Why it's wrong |
|---|---|---|
| "**142 of you finished**" | WhatsApp Day 14 · Email 6A · Marketing Copy (×2) · Debrief (×2) | Nobody knows the graduation count until graduation. Pre-baked in **6 places**. |
| "**350 of you live**" | Email 8B | Pre-written attendance for an event that hadn't happened. |
| "the audience voted the **Studio-AI ad, by 14 votes**" | Email 8B | A vote result invented before the vote. |
| "your ad, the **Curiosity hook variation**, pulled the lowest Cost per Add to Cart" | Email 8A | A winner named before judging. |
| "voted by **184 of you**" | Email 8 | Invented MVP vote count. |
| "We're at **47 already**" / "**222** registered, **78** left" | Email 2, 3 · Marketing Copy | Live registration counts frozen into copy. |

**Root cause:** unknown values written as literals instead of placeholders.
**Permanent fix:** every not-yet-known value is written as `{{TBD: description}}`. Nothing without a `{{` can be a guessed number. A single search for `{{` before publish surfaces all of them. **See QA Checklist Step 4.**

---

### 2. 🔴 Date & day-of-week contradictions

The flagship example, the **Finale start time is internally impossible**:

- Hub / WhatsApp / Email 6B / Email 7 say the Finale **starts 9:00am SGT** and runs **3 hours** → it ends at **12:00pm**.
- But Competition Rules, WhatsApp, and Emails place segments at **"1:50pm to 2:20pm"** (Top 10 launch), **"2:35pm"** (5-ad reveal), **"2:45 to 3:00pm"** (winners).
- A show that ends at noon cannot have a 2:35pm segment. **These are impossible together.** Students get told two different start times.

Other date errors:

| Error | File | Fix |
|---|---|---|
| "Doors close **Friday June 13**" vs "close **Friday June 12**" elsewhere | Email 2 vs Email 3 / Ops / Marketing Copy | June 13, 2026 is a **Saturday**. Two close dates, one wrong day. |
| "Community announcement (**Mon Jun 9**)" | Ops Checklist | June 9, 2026 is a **Tuesday**. Monday is June 8. |

**Root cause:** dates typed per-doc, day-of-week never verified.
**Permanent fix:** all dates live once in the FACTS sheet **with the weekday pre-computed**; docs reference, never retype. QA Step 2 cross-checks every weekday against a calendar.

---

### 3. 🔴 Broken internal links (the "links are not right" complaint)

The email document is named `08 - Email Sequences (Taki Moore).md`. The `(` **inside the filename** truncates every Markdown link that points to it:

```
[08, Email Sequences](./08 - Email Sequences (Taki Moore).md)
                        └─ link silently ends here ──┘  ← the rest is treated as text
```

So **every reference to the email doc, in every file, is broken**, from one bad filename.

**Root cause:** parentheses / special characters in filenames.
**Permanent fix:** filenames are plain, letters, numbers, hyphens, spaces only. No `()`, `&`, `|`, `:`. QA Step 3 clicks every link.

---

### 4. 🟠 Product name drift

The same campaign is called three different things:

- "The Winning Ad **Bootcamp**" (Email 1)
- "The Winning Ad **Challenge**" (everywhere else)
- "The Winning Ad **Summit** Finale" (the event)

A reader can't tell if these are one thing or three.

**Root cause:** no locked naming.
**Permanent fix:** FACTS sheet defines the **one** name for the challenge, the **one** name for the summit, and the rule for when to use each.

---

### 5. 🟠 Submission & draft numbering that doesn't reconcile

- Hub header says "**6 Submissions**," but the Key Dates table labels them "Submission 1, 2, 4, 5" (skipping 3 and 6, which are actually the two gates).
- The Ad Brief is called "**Draft 1**" (Day 5), "**refinement**" (Day 9), and "**polished Draft 3**" (Email 5), three names, and Draft 2 is never defined.

A student can't count how many submissions there are or which draft they're on.

**Permanent fix:** FACTS sheet has one canonical submission/day map. Every doc renders from it.

---

### 6. 🟠 Prize & "credits" ambiguity (a "prize issue" the team flagged)

"$1,000 in credits," "$500 in credits," "$50 Meta ad credit", but **credits for what?** Nas.com credits? Meta ad credits? Cash? The grand-prize "$500 in credits" is never defined, while the "$50 ad credit" clearly means Meta. Students (and the ops team paying it out) can't tell.

**Permanent fix:** FACTS sheet defines each prize: exact amount, **currency/credit type**, what it's redeemable for, and who pays it out.

---

### 7. 🟡 Unresolved placeholders left in shipped copy

218 placeholder tokens (`[link]`, `[CODE]`, `[Name]`, `___`, `[TBD]`) are scattered through the docs. Most are legitimate mail-merge fields, but there's no system to tell a *real merge field* (`[Name]`) from a *forgot-to-fill-this* (`[link]`, `___ enrollees`, `[CODE]`). So real blanks ship.

**Permanent fix:** two distinct token styles, `<<MergeField>>` for things the email tool fills automatically, and `{{TBD: …}}` for things a human must fill. QA Step 4 blocks publish if any `{{TBD}}` remains.

---

### 8. 🔴 Submission mechanics didn't match the rules (the live failure from the last summit)

From the Jun 5 team huddle: the competition rules told students to submit **an ad they built (a video) + a brief**, but the **submission form had only one upload field**. Students couldn't tell whether to upload the video, the brief, or paste a link. The result:

- Only **14 of 22** entrants got a usable submission in.
- Matt got confused DMs and a WhatsApp thread during summit week.
- The team couldn't tell, going into judging, whether they had videos, briefs, or links.
- Quote: *"Next summit we'll make sure the submission form is right and we'll make sure you guys check it before we go live."*

**Root cause:** the rules and the actual submission form were never reconciled, and the form was never test-submitted before launch.
**Permanent fix:** FACTS §5a defines exactly what's submitted, **one form field per item**, and a **mandatory dummy submission test** before the rules go live. QA Step 4a blocks launch until a real test entry lands in the entries Drive. *This is the highest-priority fix for this round.*

---

## Severity Summary

| # | Class | Severity | Lands as… |
|---|---|---|---|
| 1 | Fabricated numbers | 🔴 Critical | A student reading a made-up fact |
| 2 | Date / weekday contradictions | 🔴 Critical | People showing up at the wrong time |
| 3 | Broken links | 🔴 Critical | Dead-end clicks, lost trust |
| 4 | Name drift | 🟠 High | "Is this one thing or three?" |
| 5 | Submission numbering | 🟠 High | Students can't track progress |
| 6 | Prize ambiguity | 🟠 High | Disputes + payout confusion |
| 7 | Stray placeholders | 🟡 Medium | `[link]` shipped to a customer |
| 8 | Submission form ≠ rules | 🔴 Critical | Students can't enter the competition |

Every one of these traces back to the same root cause and is closed by the same three artifacts in this folder.

---

*Audit run 2026-06-07 against `/The Winning Ad Campaign/` + the Store Bootcamp DNA in Notion. AI SCHOOL · NAS.com · CONFIDENTIAL*
