---
title: "Designing a Claude Skill"
macro: "AI Stack & Workflow Systems"
slug: designing-a-claude-skill
tags: [ai-danny, knowledge, 11-ai-stack-workflows]
status: distilled
last_distilled: 2026-05-26T11:58:21.978Z
description: "What makes a skill work vs fail."
---

# Designing a Claude Skill

**Status:** scaffolded · awaiting distillation.

## What this captures

What makes a skill work vs fail.

## After distillation

3 to 7 specific statements in Danny's voice, each citing a vault note. Written by the synthesis pipeline using the MASTER prompt.

---

<!--::DANNY-DISTILL-START::-->

## The core principle

A Claude Skill either solves a specific repeatable problem or it's noise in the context window.

Most people treat skills like documentation dumps — paste everything you know, hope Claude figures it out, call it done. That's not a skill. That's a liability. A skill that doesn't earn its tokens costs you money, slows down every response, and trains Claude to ignore you.

The line between a working skill and a failed one is this: can you describe the trigger condition in one sentence, and does the skill deliver a concrete output every time it fires?

## Why this matters

Every skill you install competes for the same finite context window. Claude loads your system prompt, conversation history, all active skills' metadata, and the user's actual question — then decides what to do. If your skill is 800 lines of vague instructions with no clear trigger, Claude skips it. If it's 200 lines with a sharp trigger and a defined workflow, Claude runs it.

The cost of a bad skill isn't just that it doesn't work. It's that it pollutes every other interaction. Vague skills make Claude hedge. Bloated skills crowd out the conversation. Skills without examples make Claude guess. And when Claude guesses, you get generic output that sounds like every other AI on the internet.

Founders waste weeks building skills that never fire. They paste their entire business strategy, add five frameworks, throw in some brand guidelines, and wonder why Claude still writes like ChatGPT. The skill didn't fail because the content was wrong. It failed because there was no workflow, no trigger, no output specification, no test case.

The leverage of getting this right is immediate. A well-designed skill turns Claude from a general assistant into a specialist who knows your business, your voice, your process. You stop re-explaining yourself. You stop editing every output. You ship faster, and the output sounds like you.

When I built the `linkedin-triple-pack` skill, I went from typing 1,300-character posts by hand to saying "triple pack: AI content systems" and getting three production-ready assets in 90 seconds. That's not because Claude got smarter. It's because the skill was designed to do one thing and do it completely.

## How it shows up in client work

Most clients arrive with Claude open in a tab, typing the same prompts over and over, getting average results, moving on. They think the problem is the model. The problem is they're treating Claude like a search engine instead of a team member.

The pattern I see most: founder has a content process that works manually, wants to "put it in AI," pastes the whole thing into Claude as instructions, gets disappointed when it doesn't magically work. They're missing the structural step: designing the skill.

Example from [[Carousel creation skill ideas for marketing - 1be5146e]]: client wanted to generate LinkedIn carousels. First attempt: "write me a carousel about personal branding." Result: generic 10-slide deck, no voice, no formatting, required 30 minutes of editing. We rebuilt it as a skill with a clear trigger ("carousel: [topic]"), defined output structure (title slide, 8 content slides with specific formulas, CTA slide), visual specs (CSS grid, exact dimensions, typography rules), and voice rules (one-sentence-per-slide, no AI slop). Next attempt: "carousel: why founders need personal brands in 2026." Result: production-ready in 90 seconds, no edits needed.

The difference wasn't the prompt. The difference was the skill had a workflow.

Another pattern from [[Creating a new Claude skill - b2426846]]: client wanted LinkedIn content in three formats simultaneously — post, carousel, cheatsheet. Manually, this took 2+ hours per topic. We built the `linkedin-triple-pack` skill with a 10-step workflow: voice DNA loading, intent selection (Educating/Nurturing/Selling/Engaging), ICP targeting, content brief generation, simultaneous triple output with format-specific rules for each asset, and an AI-pattern blacklist. Trigger: "triple pack: [topic]." Outcome: three assets in under 3 minutes, all matching voice, all ready to ship.

What made it work: the skill specified the EXACT output structure for each format. Post = 1,300-1,500 characters, hook + setup + proof + turn + CTA. Carousel = 10 slides with title/subtitle/body formulas per slide. Cheatsheet = 6 main points with 4 takeaways each. Claude didn't have to guess. It just executed.

From [[Building a closing playbook - 381021dc]]: founder needed sales objection handling scripts based on Alex Hormozi's CLOSER framework. First attempt: gave Claude a 40-page PDF, asked for "objection scripts." Got generic responses. Rebuilt as a skill with three-layer structure: SKILL.md with the blame framework (circumstances/other people/self), four reference files with actual scripts organized by objection type (time/money/decision-maker/think-about-it), and a template for generating custom closes. Trigger: "handle objection: [specific objection]." Result: founder gets the exact script, the framework context, and the reasoning in one output.

The lesson from that build: reference files are your friend. Don't dump 40 pages into SKILL.md. Put the workflow in SKILL.md, put the scripts in `/references/`, let Claude load what it needs when it needs it.

Pattern from [[Zoom class call summarization skill - d9706056]]: founder teaching live AI workshops, needed summaries for students. Manually took 90 minutes per session. Built a skill that read Zoom transcripts and extracted: session metadata, core teaching content, tools demonstrated, step-by-step processes, Q&A highlights, action items, key takeaways. Output: four formats (full recap, email to attendees, Slack post, WhatsApp summary). Trigger: upload transcript + "summarize this session." Time saved: 90 minutes to 5 minutes. Quality improved because the skill knew what to extract — teaching content, not filler.

The pattern that keeps showing up: the skill works when you can name the repeatable problem it solves and specify the exact output it produces.

## Specific examples from the vault

From [[Offer Creation - 802ba692]]: built the `hormozi-offer-creator` skill to generate high-value offers using the value equation framework. Workflow: 10-step process including dream outcome identification, obstacle-to-bonus mapping, guarantee selection, naming via MAGIC formula, pricing strategy. The skill included three reference files (value equation framework, bonus/guarantee strategies, naming/pricing methods) and three output templates (structured offer doc, one-pager, sales page). Client uploaded ICP doc + messaging house, skill generated "The Founder Visibility Engine" offer at <!--::DANNY-DISTILL-START::-->3,500 with performance guarantee, fully formatted, in under 10 minutes. Before the skill: 3+ hours manually writing offers. After: 10 minutes to first draft, 20 minutes to polish.

What worked: the skill didn't just explain the framework, it executed it. Each step had a defined input and output. "Identify dream outcome" wasn't a suggestion — it was step 1 with specific questions Claude asked.

From [[Making sessions AI school friendly - 5f56aa1f]]: built a skill to transform technical session topics into NAS AI School-ready titles using Alex Hormozi outcome-first language + Nuseir Yassin plain-English rules. Input: "Use Claude Code Voice Mode to Code 3x Faster." Skill output: "Build 3 Apps in 90 Minutes Using Voice-Controlled AI." The skill encoded specific rules: no "How to" openings, no em dashes, no model version numbers, no technical acronyms, title must answer "what is this about + what do I take away + what is the outcome." Processed 30 session topics in one run. Manual rewrite would've taken 4+ hours with inconsistent quality.

The key: the skill had a blacklist. It didn't just say "write good titles" — it said "never do these 8 things" and "always include these 3 elements."

From [[Skill installation request - 43ce7c34]]: founder needed a content strategy for his LinkedIn. Built the `linkedin-content-strategy` skill with 10-step framework: profile audit, ICP definition, positioning revision, content pillar naming, format mix, 30-day calendar, hook formulas, lead conversion system, metrics dashboard. Skill ran against founder's profile, produced full Word doc strategy in 15 minutes. Profile audit scored CTA clarity 2/5, ICP definition named "service-based founders with blank-page syndrome," positioning statement rewrote headline, four content pillars delivered with names ("The Invisible Founder™"), 30-day calendar included 16 specific post topics with hooks.

What made this work: the skill didn't output generic advice. It outputted a named, specific, executable plan with real hooks in the founder's voice. That only happened because the skill included a `/references/hook-patterns.md` file with 40+ voice-matched formulas.

From [[How compound interest works - c3f5714b]]: built workshop materials from a strategy doc. Skill delivered "The Brand Brain™" worksheet (HTML + fillable PDF) and "The Skill Stack™" worksheet plus full teaching plans with 6-slide deck outlines, 60-minute session flow, pre-work assignments, post-session email templates. All files followed exact style guide: specific hex colors, Georgia serif headings, yellow accent tags. Output was installation-ready.

Pattern: the skill had asset templates. It didn't generate from scratch — it filled in structured templates that guaranteed consistent formatting.

## Scripts and exact phrases

**When writing SKILL.md description (triggers when this loads):**
"This skill should be used when users want to [specific action with specific output]."

**When structuring workflow:**
"Step 1: [Action]. Output: [Specific deliverable]."
"Step 2: [Action that uses Step 1 output]. Output: [Next specific deliverable]."

**When adding voice rules:**
"Never use: [specific banned phrases]. Always use: [specific required patterns]."

**When specifying output:**
"Generate three files: [File 1 with exact format specs], [File 2 with exact format specs], [File 3 with exact format specs]."

**When building reference files:**
"Load `/references/[filename].md` when [specific condition]. This file contains [specific content type]."

**When testing if a skill works:**
"Can I describe the trigger in one sentence? Can I name the exact output it produces? If no to either, rewrite."

**When deciding what goes in SKILL.md vs references:**
"Workflow stays in SKILL.md. Examples, scripts, formulas, data go in `/references/`."

**When adding examples to SKILL.md:**
"Show one good example and one bad example. Label them 'Good:' and 'Bad:'. Keep both under 3 lines."

## Common mistakes

**Mistake 1: No clear trigger.** The description says "helps with content creation." That triggers on everything and nothing. Claude ignores it. Fix: "Triggers when user requests LinkedIn post + carousel + cheatsheet simultaneously."

**Mistake 2: Workflow without outputs.** Instructions say "analyze the ICP, then build positioning." What does "analyze" produce? A paragraph? A scored doc? A list? Claude guesses differently every time. Fix: "Step 1 output: ICP document with 6 sections (Current State, Pains, Desired Outcome, Buying Triggers, Disqualifiers, Language They Use). Step 2 input: Use ICP document Section 2 and 3 to write positioning statement."

**Mistake 3: Dumping everything into SKILL.md.** 800-line file with frameworks, examples, guidelines, scripts, voice rules, formatting specs. Claude hits token limit, stops reading halfway, misses the actual instructions. Fix: SKILL.md = workflow only, 200-300 lines max. Everything else goes in `/references/` as separate files.

**Mistake 4: Generic voice rules.** "Write in a professional tone." Every AI writes in a professional tone. You get generic output. Fix: "One sentence per paragraph. No em dashes. No AI-slop phrases from this list: [specific 20-item blacklist]. Use names, numbers, dates."

**Mistake 5: No examples.** Skill explains a framework but doesn't show what good output looks like. Claude interprets it differently than you intended. Fix: Include one "Good:" example and one "Bad:" example for each major output type.

**Mistake 6: Building for multiple use cases.** Skill tries to handle blog posts, emails, social posts, sales pages, and ad copy in one file. Claude gets confused which rules apply when. Fix: One skill per use case. `linkedin-post-writer` is separate from `email-sequence-builder`.

_Sparse vault material on when to split one skill into multiple — add more notes to deepen._

## The contrarian read

Most AI educators teach skills as "prompt libraries" or "instructions for Claude." That's backwards.

A skill isn't instructions. It's a playbook. The difference: instructions tell Claude what to do. Playbooks tell Claude what happens when. Instructions are static. Playbooks are conditional.

Example: "Write in my voice" is an instruction. "Load Voice DNA from `/references/voice-dna.md`, extract 5 writing patterns, apply Pattern 1 to hooks, Pattern 2 to body paragraphs, Pattern 3 to CTAs" is a playbook.

The conventional wisdom says "make your prompts detailed." I say make your workflows explicit. Detail in the prompt helps once. Workflow in the skill helps forever.

Another contrarian take: most people obsess over the system prompt and ignore skills. They spend 3 hours perfecting "You are an expert marketer" and zero hours designing the skill that actually does the marketing. The system prompt sets tone. The skill delivers output. Obsess over the skill.

Third: the best skills are boring. They're not clever. They're not impressive. They're structured, repeatable, boring. If your skill description starts with "revolutionize" or "game-changing," it's probably overengineered. Good skills sound like SOPs.

## What it looks like when it's working

You stop re-explaining yourself. You say "triple pack: AI marketing systems" and three production-ready assets appear. No follow-up questions. No "can you rewrite this in my voice." It just works.

Your editing time drops from 30 minutes per output to 5 minutes. You're fixing one sentence instead of restructuring three paragraphs. The voice is right, the structure is right, the specifics are there.

You use the skill 3-5 times per week minimum. If you haven't touched it in two weeks, it's not solving a real problem. Delete it or rebuild it.

Other people can use your skill and get consistent results. You hand the skill to a team member, they run it, the output matches what you'd produce. That's the test. If only you can make it work, it's not a skill — it's tribal knowledge stuck in your head.

Numbers from [[Creating a new Claude skill - b2426846]]: client went from 12 hours/week on content to 2 hours/week after installing three skills (post writer, carousel builder, cheatsheet generator). Same output quality, same posting frequency, 10 hours saved. That's the metric.

From [[Carousel creation skill ideas for marketing - 1be5146e]]: founder generated 8 production-ready carousels in 90 minutes during a live demo. Before the skill: 90 minutes per carousel. After: 90 minutes for eight. That's 8x leverage.

## Related categories

- [[voice-dna-structure|Voice DNA Structure]] — skills load voice from here; the DNA file is the foundation every writing skill reads from
- [[workflow-not-tool|AI Is a Team Not a Tool]] — skills are team members with specific jobs; this category explains why you need 5-10 skills, not one magic prompt
- [[content-production-system|Content Production System]] — skills are the engine; this shows how they connect into a full weekly workflow
- [[one-sentence-per-paragraph|One Sentence Per Paragraph]] — the #1 voice rule every skill enforces; explains why it works and how to implement it in skill instructions
- [[invisibility-diagnostic|The Invisibility Diagnostic]] — skills should score their own output; this framework shows how to build auto-scoring into content skills

## Source notes

- [[How compound interest works - c3f5714b]]
- [[Zoom class call summarization skill - d9706056]]
- [[Carousel creation skill ideas for marketing - 1be5146e]]
- [[Creating a new Claude skill - b2426846]]
- [[Building a closing playbook - 381021dc]]
- [[Skill installation request - 43ce7c34]]
- [[Offer Creation - 802ba692]]
- [[Making sessions AI school friendly - 5f56aa1f]]


<!--::DANNY-DISTILL-END::-->
