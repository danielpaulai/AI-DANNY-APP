# ✅ Pre-Publish QA Checklist

> **Rule:** No document goes to the team, the community, or a customer until it passes every step below. One person runs this, the "publish gate." It takes ~15 minutes for the whole knowledge base and it catches all 7 mistake classes from `00 - KB AUDIT`.
>
> **The golden test:** search the entire folder for `{{`, if anything comes back, it is **not** ready to ship.

---

## Step 1: Source-of-truth check (kills duplicated-fact errors)

- [ ] `01 - FACTS` is filled in completely, **a search for `{{` across the folder returns zero results.**
- [ ] No date, name, number, price, or link is hand-typed in any doc that contradicts FACTS. (Pick 5 facts at random; confirm each doc matches FACTS exactly.)

## Step 2: Dates & times (kills the Finale-time / wrong-weekday errors)

- [ ] Every date is checked against a real 2026 calendar, **the weekday is correct** (e.g. "Friday June 12" really is a Friday).
- [ ] There is **exactly one** doors-close date, and it matches in every email + landing page.
- [ ] The Summit is written as `start, end [timezone]`. **Every** segment time falls inside that window.
- [ ] Every time has a timezone next to it. No bare times anywhere.

## Step 3: Links (kills the "links are not right" complaint)

- [ ] Every internal link **clicks through** to the right doc.
- [ ] No filename contains `( )`, `&`, `|`, `:`, or `/`.
- [ ] Every external link (registration, Zoom, community) is live and goes where the text says.
- [ ] **No `TEAM-TO-ADD` placeholder links remain**, the team has pasted every live link before send.

## Step 4: Placeholders & fabricated facts (kills the hallucination)

- [ ] **Zero `{{CONFIRM}}` tokens remain.**
- [ ] No result that hasn't happened yet is stated as fact, graduation count, attendance, vote winner, prize winner, "X spots left" are merge fields or were filled *after* the event.
- [ ] Every `<<MergeField>>` is a real field the email tool will fill; spell-check each field name.
- [ ] No stray `[link]`, `[CODE]`, `___`, or empty bracket survives.

## Step 4a: Submission form test (kills the live competition failure)

- [ ] The submission form has **one field per item** the rules ask for (e.g. agent link / brief / demo video), nothing merged.
- [ ] The form accepts **both files and links**, and says so on the form.
- [ ] **A team member has submitted a full dummy entry** (link + file + video) and confirmed it landed in the entries Drive, done **before** the rules go live.
- [ ] The rules doc and the form match field-for-field.

## Step 5: Naming & numbering (kills name drift + submission confusion)

- [ ] The challenge is called its ONE locked name everywhere (no "bootcamp/course/summit" mix-ups).
- [ ] The number of submissions in the header equals the number of graded days actually listed.
- [ ] Each brief draft uses one consistent name (Draft 1 / Draft 2 / Final), no fourth name appears.

## Step 6: Prize clarity (kills the "prize issue")

- [ ] Each prize states amount **and** credit type (what it's redeemable for) **and** who pays it.
- [ ] Prize math adds up (sum of prizes = stated pool; judging weights = 100%).
- [ ] "How to enter" and "eligibility" are stated in plain language a first-timer understands.

## Step 7: Read-aloud voice pass

- [ ] Matt reads every email + nudge out loud. Any sentence he stumbles on gets rewritten.
- [ ] Outcomes are realistic ("your first $1,000"), never hyperbolic ("million-dollar offer").

---

## The 60-second automated pre-flight

Run this in the campaign folder before any publish. If it prints anything, you're not ready:

```bash
cd "AI Marketing Agent Challenge"
echo "── Unresolved facts (must be empty): ──"
grep -rn '{{' *.md
echo "── Stray blanks (review each): ──"
grep -rn '\[link\]\|\[CODE\]\|___\|\[ \]' *.md
echo "── Filenames with link-breaking characters (must be empty): ──"
ls | grep '[()&|:]'
echo "── Unfilled team links (must be empty before send): ──"
grep -rno 'TEAM-TO-ADD' *.md
echo "── Every weekday+date mention (eyeball against a calendar): ──"
grep -rohn '\(Mon\|Tue\|Wed\|Thu\|Fri\|Sat\|Sun\)[a-z]* [A-Z][a-z]* [0-9]\{1,2\}' *.md | sort -u
```

> **Sign-off:** Publisher: __________  Date: __________  "`{{` search returned zero." ✅

---

*Run before every send. AI SCHOOL · NAS.com · CONFIDENTIAL*
