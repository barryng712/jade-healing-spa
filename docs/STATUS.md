# Project status

Last updated: 2026-11-02 (informational site built locally; awaiting owner review)

Legend: `not started` · `in progress` · `blocked` · `complete` · `owner approved`

| Phase | Status | Notes |
| --- | --- | --- |
| A. Environment inspect | complete | macOS 26.5.2, Apple M5, Node 26.13.0, Git 2.50.1, GitHub remote exists |
| B. GitHub setup | complete | `barryng712/jade-healing-spa` |
| C. Project documentation | complete | Confirmed copy in `docs/confirmed-content.md` |
| D. Playwright setup | complete | `@playwright/test` + Chromium |
| E. Figma MCP | complete | Connected. Canvas write is not available on Starter. Do not redraw in Figma. |
| F. Reference research | owner approved | 2026-11-01 |
| G. Research handoff | owner approved | Closed |
| BA requirements | owner approved | Answers in `docs/unresolved-questions.md`; remaining: menu, photos, Zalo URL, Google listing URL, About story |
| Design | owner approved | 2026-11-02. `docs/design-guidelines.md` + `docs/design-preview.html` |
| Development | complete | Local Next.js site on `feat/informational-site`, 2026-11-02. Awaiting owner review. Run `npm run dev`. Not deployed. Nine spa photos are published from `assets/spa/` with the printed phone footer removed. `Unknown-9.jpg` is unused because it shows an unconfirmed menu. |
| QA | not started | Gate: owner reviews this local site |
| Release | not started | Domain planned: jadehealingspa.com.vn; hosting not chosen; no deploy |

## Cursor plan

- **Premium** (owner confirmed)
- Local, human-gated workflow unless you ask for Cloud Agents

## Git

- Default: `main` (keep stable)
- Work branch: `feat/informational-site`
- Do not merge or push `main` without approval

## Next chat (new Agent — after the owner reviews this site)

Paste this as the first message only after you approve the local site:

> Act as QA. The informational site is built. Read `AGENTS.md`, `PROJECT_BRIEF.md`, `docs/STATUS.md`, `docs/confirmed-content.md`, and `docs/acceptance-criteria.md`. Test the local Next.js site with Playwright, independently of the Developer. Do not deploy. Do not push `main`.

Still open: real menu, logo and approved photos, Zalo URL, Google Maps place URL, About story, hosting.

Nine photos from `assets/spa/` are on the site. The printed footer with **0917 110 066** was cropped so the only phone shown is **0357050796**. `Unknown-9.jpg` stays unused because it lists a menu, 120 phút, and promotional lines that are not confirmed.
