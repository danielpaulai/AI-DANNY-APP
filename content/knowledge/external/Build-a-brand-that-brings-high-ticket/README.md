# Brand for High-Ticket Buyers · 2026 Session

A 60-minute paid teaching session for business owners. Plus the LinkedIn Profile Optimizer giveaway promised on stage.

Built by [Daniel Paul](https://danielpaul.ai). Free forever.

---

## What's in this repo

### `/session`

The teaching package for the talk.

- **[SESSION-RUN.md](session/SESSION-RUN.md)** — Minute-by-minute 60-minute run sheet. Open this on stage if you only open one file.
- **[SLIDE-BRIEF.md](session/SLIDE-BRIEF.md)** — Slide-by-slide brief for the 28-slide deck. Copy-ready text + layout + brand spec for every slide. Use it in Canva or hand it to a designer.
- **[GENSPARK-PROMPT.md](session/GENSPARK-PROMPT.md)** — A single paste-ready prompt for GenSpark / Gamma / Tome that generates the whole deck in one shot.

### `/slides`

The 28-slide deck, fully rendered HTML. Click through with arrow keys, press G for thumbnail grid, press P to print to PDF.

**Live URL:** [https://slides-lyart-pi.vercel.app](https://slides-lyart-pi.vercel.app)

### The giveaway

Daniel already has a LinkedIn Profile Optimizer:

**[https://linkedinprofile.purelypersonal.ai](https://linkedinprofile.purelypersonal.ai)**

This is the URL referenced on slide 27 and in the run sheet.

- **[index.html](linkedin-optimizer/index.html)** — The whole tool. Open it locally in any browser. Or deploy it.
- **[vercel.json](linkedin-optimizer/vercel.json)** — Vercel deployment config.
- **[package.json](linkedin-optimizer/package.json)** — Project metadata. `npm run dev` to serve locally.

---

## Talk: "How to build a brand that brings high-ticket buyers to you"

**Audience.** Business owners.
**Format.** 60-minute paid keynote. No pitching. Pure value.
**Outcome.** Every person walks out with a clear personal brand plan and the LinkedIn Optimizer.

**The four ones (framework taught in the session).**

1. **One platform.** Pick one. Stay for one year.
2. **One year.** Nothing compounds in 90 days. Most quit at month four.
3. **One target audience.** Stop being useful to everyone. Be unforgettable to one.
4. **One call to action.** One ask. Repeated quietly. For a year.

**The thesis.** In 2026 AI compressed the price of skill from $50,000/year to $20/month. Anyone can copy anyone. Trust is the only asset that does not compress. Build the brand and the buyers come pre-decided.

---

## Viewing the slide deck

**Live preview:** [https://slides-lyart-pi.vercel.app](https://slides-lyart-pi.vercel.app)

**Keyboard shortcuts.**

| Key | Action |
|---|---|
| ← / → | Previous / next slide |
| Space | Next slide |
| G | Toggle thumbnail grid |
| F | Fullscreen |
| P | Print / save as PDF |
| Esc | Close grid |

**Local preview.**

```bash
cd slides
python3 -m http.server 4321
# open http://localhost:4321
```

Or double-click `slides/index.html`.

---

## Brand system

This package follows the Purely Personal design system.

- Near-black `#0a0a0a`
- Red accent `#e90d41`
- Off-white `#f7f7f8`
- Silver `#b8bec1`
- Rethink Sans (headings) + Inter (body)
- No emojis. No em dashes. No banned vocabulary.

Full system: [Purely-Personal-Design-Workspace](https://github.com/danielpaulai/Purely-Personal-Design-Workspace).

---

## License

The session materials and optimizer are free to use. Attribution to Daniel Paul appreciated but not required.

If this tool helps you land a high-ticket buyer, send Daniel a note. He reads every one.
