# Project status

Last updated: 2026-11-04 (home bands tightened; services band is sand linen; wordmark is the script logo from the spa photos)

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
| BA requirements | owner approved | Answers in `docs/unresolved-questions.md`. Menu names, minutes, and prices are in from the Canva; ritual steps are still open. |
| Design | owner approved | 2026-11-02. `docs/design-guidelines.md` + `docs/design-preview.html` |
| Development | complete | Local Next.js site on `feat/informational-site`. Awaiting owner review. Run `npm run dev`. Not deployed. See “Built locally” below. |
| QA | not started | Gate: owner reviews this local site |
| Release | not started | Domain planned: jadehealingspa.com.vn; hosting not chosen; no deploy |

## Cursor plan

- **Premium** (owner confirmed)
- Local, human-gated workflow unless you ask for Cloud Agents

## Git

- Default: `main` (keep stable)
- Work branch: `feat/informational-site`
- Do not merge or push `main` without approval

## Built locally (2026-11-04)

Routes: `/`, `/about`, `/services`, `/services/massage`, `/services/cham-soc-toc`, `/services/combo`, `/services/[category]/[slug]`, `/gallery`, `/reviews`, `/contact`.

- **Menu.** Canva “MEMU TỔNG JADE”, Vietnamese page, in `lib/menu.ts`. Hover Dịch vụ shows Massage, Chăm sóc tóc, Combo. A category page lists only that group. Combo items are separate gói pages. Old `/services/[slug]` URLs redirect.
- **Detail.** Photo left, ritual right. Minute chips change the name, price, and step slot. The photo stays. Steps are ten labeled “Bước mẫu” lines, not real ritual text.
- **Home.** Shorter hero. Script logo, then the tagline. House block: text left, photos sliding right to left. Services on sand `#E9DCC8`. Banner “Từ gỗ, cây và nước.” uses `soaking-hall` as a stand-in. Gallery frames, then the moss visit strip.
- **Wordmark.** `public/spa/logo-mark.png`, cut from the logo already on the spa photos. Cream on the dark hero, wood `#5C4636` on paper. Section titles stay in Fraunces. A separate vector file is still open.
- **Photos.** Nine frames from `assets/spa/` are on the site. `Unknown-9.jpg` stays unused (unconfirmed menu and promotional lines). The printed footer with **0917 110 066** was cropped. The only phone on the site is **0357050796**.
- **Not on the site.** Booking, payments, accounts, English, medical claims, review quotes, a Zalo link, a real About story.

## Next chat (new Agent — after the owner reviews this site)

Paste this as the first message only after you approve the local site:

> Act as QA. The informational site is built. Read `AGENTS.md`, `PROJECT_BRIEF.md`, `docs/STATUS.md`, `docs/confirmed-content.md`, and `docs/acceptance-criteria.md`. Test the local Next.js site with Playwright, independently of the Developer. Do not deploy. Do not push `main`.

Still open: ritual steps for each minute mark, Vietnamese name for Jade Emperor Therapy, S8 category placement, Zalo URL, Google Maps place URL, About story, a separate vector logo, hosting.
