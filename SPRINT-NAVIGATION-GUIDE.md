# AI Danny v0.2.0 — Where to See Every Change

Step-by-step guide to navigate the app and verify each sprint improvement.

**Local app:** http://localhost:3000  
**Production:** https://ai-danny-app.vercel.app

---

## Before You Start

1. Make sure the app is running locally:
   ```powershell
   cd "c:\Users\PMLS\Downloads\AI-DANNY-APP\AI-DANNY-APP"
   npm run dev
   ```
2. You need a `.env.local` with Clerk, Supabase, and AI keys — otherwise sign-in or chat may fail.
3. Use a demo access code after sign-up: **`purely-personal-demo`**

---

## Quick Sign-In Flow (Do This Once)

| Step | Action | URL |
|------|--------|-----|
| 1 | Open landing page | http://localhost:3000 |
| 2 | Click **Sign in** (or **Get started**) | http://localhost:3000/sign-in |
| 3 | Sign in with Clerk | — |
| 4 | If new user: enter workspace code `purely-personal-demo` | http://localhost:3000/onboarding |
| 5 | You land in the workspace | http://localhost:3000/app |

**Production:** Replace `localhost:3000` with `https://ai-danny-app.vercel.app`.

---

# Product Changes (3)

## 1. Top-Question Chips (skill + pre-fill composer)

**What it does:** Empty chat shows 8 chips for common founder questions. Clicking one switches the skill mode and fills the text box — you edit and send.

**Where:** `/app` — main workspace chat, empty state only.

**Steps:**

1. Go to http://localhost:3000/app
2. Sign in if prompted.
3. Make sure the chat area is **empty** (no previous messages). If you have history, start a fresh workspace or clear is not in UI — use a new account or ignore old messages and scroll to top empty state is only when `messages.length === 0`).
4. Scroll to the section labelled **TOP QUESTIONS**.
5. Click any chip, e.g. **"Score my latest LinkedIn hook — Invisibility Diagnostic"**.
6. **Verify:**
   - Skill picker at top switches to **Invisibility Diagnostic**
   - Text box at bottom is pre-filled with that question
7. Click **Send** or edit first, then send.

**Direct link:** http://localhost:3000/app

---

## 2. One-Move Closing Block

**What it does:** Every Operator reply ends with a line starting **`Your one move:`** — one concrete action for the week. Cloud replies end with **`Try this:`**.

### Operator Danny (`/app`)

**Steps:**

1. Go to http://localhost:3000/app
2. Pick any skill (e.g. **AI Danny** or **Content Engine**).
3. Type a question, e.g. `What should I post this week?`
4. Click **Send** and wait for the full reply.
5. **Verify:** Last lines of the assistant message include:
   ```
   **Your one move:** [specific action tied to your workspace]
   ```

**Direct link:** http://localhost:3000/app

### Danny Cloud (`/cloud`)

**Steps:**

1. Go to http://localhost:3000/cloud
2. Type e.g. `I'm having a rough week. Help me reset.`
3. Click send (↑ button).
4. **Verify:** Reply ends with:
   ```
   **Try this:** [one small action for today]
   ```

**Direct link:** http://localhost:3000/cloud

---

## 3. Feedback Loop (Helpful / Weak)

**What it does:** Thumbs up/down on every assistant message. Saves to Supabase `feedback` table via `POST /api/feedback`.

**Where:** Under each **AI Danny** or **Danny Cloud** reply (not on your own messages).

**Steps:**

1. Go to http://localhost:3000/app
2. Send any message and wait for a reply.
3. Look **below** the assistant text, under citation chips (if any).
4. Click **👍 Helpful** or **👎 Weak**.
5. **Verify:** Toast says **"Thanks — noted."** Button shows **Noted** and cannot be clicked again.

**Also test on Cloud:**

1. http://localhost:3000/cloud
2. Send a message, get reply, click **Helpful** or **Weak** under the bubble.

**Note:** Feedback only persists when Supabase is configured. Without Supabase, API returns OK but does not store.

---

# UI Changes (3)

## 4. Mobile Workspace Drawer

**What it does:** On small screens, founder context, Danny presence, and Danny Cloud link are in a slide-over menu (hamburger).

**Where:** `/app` — only visible when screen width is below `lg` (~1024px).

**Steps:**

1. Go to http://localhost:3000/app
2. Narrow the browser window **or** open DevTools (F12) → **Toggle device toolbar** (phone icon) → pick iPhone or similar.
3. Top-left: click the **☰ hamburger** button (three lines).
4. **Verify drawer shows:**
   - Purely Personal brand mark
   - Danny presence card
   - **Founder** name
   - **Business**, **Stage**, **Positioning**
   - **☁️ Danny Cloud** link
   - Compounding workspace note
5. Click **☁️ Danny Cloud** → goes to `/cloud` and drawer closes.
6. Click dark overlay or press **Escape** to close drawer.

**Direct link:** http://localhost:3000/app (resize to mobile first)

**Desktop:** Sidebar is always visible on the left — same content, no hamburger.

---

## 5. Danny Avatar (D Monogram)

**What it does:** Replaces missing `/avatars/danny.png` with a branded **D** circle. Dark ring on workspace, indigo styling on Cloud.

**Where to look:**

| Location | URL | What you see |
|----------|-----|--------------|
| Workspace header | http://localhost:3000/app | Large **D** with red ring + green online dot |
| Empty chat state | http://localhost:3000/app | XL **D** next to "Hey. I'm AI Danny." |
| Each assistant message | http://localhost:3000/app | Small **D** left of reply |
| Composer (desktop) | http://localhost:3000/app | Tiny **D** beside text box |
| Cloud empty state | http://localhost:3000/cloud | **D** with light/indigo styling |
| Cloud assistant bubbles | http://localhost:3000/cloud | Small **D** + "Danny Cloud" label |

**Steps:**

1. Open http://localhost:3000/app — confirm **D** appears (not broken image icon).
2. Open http://localhost:3000/cloud — confirm **D** has lighter indigo look, not dark red ring.

---

## 6. Branded PageLoader (Skeleton)

**What it does:** Pulse skeleton with **D** and loading text instead of plain "Loading…".

**Where it appears:**

| Screen | How to trigger | Loading text |
|--------|----------------|--------------|
| Workspace | http://localhost:3000/app — hard refresh (Ctrl+Shift+R) while signed in | "Loading workspace…" |
| Onboarding | http://localhost:3000/onboarding — hard refresh | "Checking workspace…" |
| Chat history | http://localhost:3000/app — brief moment on first load | "Waking up Danny's brain…" |
| Cloud | http://localhost:3000/cloud — hard refresh | "Opening the cloud…" |

**Steps:**

1. Sign in, then go to http://localhost:3000/app
2. Press **Ctrl+Shift+R** (hard refresh).
3. **Verify:** Brief branded skeleton (pulsing circle + **D** + grey bars) before chat loads.

**Tip:** Slow network in DevTools (Network → Slow 3G) makes the loader easier to see.

---

# Prompt / RAG Changes (3)

These are mostly **behaviour** — you verify by asking questions and checking reply quality and citation chips.

## 7. Skill-Aware Brain Prefetch

**What it does:** Search query is boosted per skill so the right methodology chunks are retrieved.

**Steps:**

1. Go to http://localhost:3000/app
2. Select **Invisibility Diagnostic** in the skill picker.
3. Ask: `Score this hook: "AI won't replace you. Someone using AI will."`
4. **Verify:** Reply uses diagnostic framing (Voice, POV, Specificity, Asking scores).
5. Switch to **Positioning**, ask: `Pressure-test my ICP`
6. **Verify:** Reply focuses on ICP/category/offer, not generic advice.
7. Switch to **Content Engine**, ask: `What should I post this week?`
8. **Verify:** Hooks, pillars, pipeline language.

**Direct link:** http://localhost:3000/app

---

## 8. Framework Citation Chips

**What it does:** After brain search, assistant messages show **Frameworks:** chips with methodology titles used (e.g. Invisibility Diagnostic, LinkedIn playbook).

**Steps:**

1. Go to http://localhost:3000/app
2. Send a substantive question, e.g. `Why isn't my LinkedIn content converting to calls?`
3. Wait for full reply (stream completes).
4. **Verify:** Below assistant text, grey chips labelled **Frameworks:** with 1–3 titles.
5. Page may refresh messages from server after stream — chips appear after reload from `/api/messages`.

**Also on Cloud:** http://localhost:3000/cloud — ask a motivation question; chips may appear if brain hits match.

---

## 9. Deduplicated System Prompt (Lower Tokens)

**What it does:** No duplicate voice guardrails in prompt; Cloud loads only `CLOUD.md`. Not visible in UI — affects cost and consistency.

**How to verify (indirect):**

1. Replies still sound like Danny (short paragraphs, dry wit, no AI slop).
2. Cloud replies stay ~150 words and supportive.
3. Operator replies stay focused with **Your one move:** at end.

No separate page — test via chat on http://localhost:3000/app and http://localhost:3000/cloud.

---

# Cost Control (1)

## 10. Daily Message Cap

**What it does:** Each Clerk user gets a daily limit (default **50** Operator, **30** Cloud). Over limit → **429** error and toast.

**Env vars (`.env.local` / Vercel):**

```
DAILY_MESSAGE_CAP=50
DAILY_CLOUD_MESSAGE_CAP=30
```

**How to test (optional):**

1. Temporarily set `DAILY_MESSAGE_CAP=2` in `.env.local`
2. Restart dev server: `npm run dev`
3. Send 3 messages on http://localhost:3000/app
4. **Verify:** Third message shows error toast about daily limit.
5. Set cap back to 50 and restart.

**Normal use:** You will not hit this unless you send many messages in one day.

---

# Full Test Checklist (All 10 Founder Questions)

Use http://localhost:3000/app unless noted.

| # | Question | Skill to use | Where to verify |
|---|----------|--------------|-----------------|
| 1 | Why isn't my LinkedIn/content converting to calls? | General or Top chip | Reply + **Your one move:** + Frameworks chips |
| 2 | Score my post/hook | Diagnostic | Scores 0–4 on four dimensions |
| 3 | Pressure-test my positioning / ICP | Positioning | Pushback on vagueness |
| 4 | How do I fix my offer? | General | Hormozi-style value stack language |
| 5 | What should I post this week? | Content | Hooks/pillars |
| 6 | How would Danny set up an AI content system? | General | Marketing Employee framing |
| 7 | Help me with DMs / follow-up / pipeline | Content | Pipeline-first advice |
| 8 | Workshop / funnel / webinar structure | General | Brunson-style structure |
| 9 | I'm stuck / burnt out | **Cloud** → http://localhost:3000/cloud | **Try this:** + supportive tone |
| 10 | What's my one move this week? | General | Explicit **Your one move:** line |

---

# Route Map (All Pages)

| Page | URL (local) | Purpose |
|------|-------------|---------|
| Landing | http://localhost:3000 | Marketing / sign-in entry |
| Sign in | http://localhost:3000/sign-in | Clerk auth |
| Sign up | http://localhost:3000/sign-up | New user |
| Onboarding | http://localhost:3000/onboarding | Access code entry + PageLoader |
| **Workspace** | http://localhost:3000/app | **Main product — most changes here** |
| **Danny Cloud** | http://localhost:3000/cloud | **Lighter mode — Cloud changes** |
| Health API | http://localhost:3000/api/health | `{ "status": "ok" }` |

---

# Files Changed (Reference)

If you need to inspect code:

| Area | Key files |
|------|-----------|
| Product chips + feedback UI | `src/components/chat/ChatPanel.tsx`, `CloudChatPanel.tsx`, `MessageFeedback.tsx` |
| Mobile drawer | `src/app/app/page.tsx`, `src/components/shell/WorkspacePanel.tsx` |
| Avatar + loader | `src/components/danny/DannyAvatar.tsx`, `src/components/shell/PageLoader.tsx` |
| Citations | `src/components/chat/CitationChips.tsx`, `src/app/api/messages/route.ts` |
| Chat / RAG / cost | `src/app/api/chat/route.ts`, `src/lib/brain/search.ts`, `src/lib/auth/rate-limit.ts` |
| Changelog | `CHANGELOG.md` |
| Audit | `SPRINT-FINDINGS.md` |

---

**Version:** 0.2.0 (24h Sprint)  
**Last updated:** 2026-06-15
