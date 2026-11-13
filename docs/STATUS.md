# Project status

Last updated: 2026-11-13 (docs match `staging`: ServiceDirectory, massage intents, menu-rituals)

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
| Development | complete | Local Next.js site on `staging`. `feat/informational-site` is legacy. Awaiting owner review. Run `npm run dev`. Not deployed. See “Built locally” below. |
| QA | complete for the 2026-11-06 build | Report: `docs/qa-draft-1.md`. That pass predates the card directory, the 2026-11-09 massage intents, detail without minute chips, ritual steps from `lib/menu-rituals.ts`, and the full-screen home. Those later changes have no new QA pass. Not deployed. |
| Release | not started | Domain planned: jadehealingspa.com.vn; hosting not chosen; no deploy |

## Cursor plan

- **Premium** (owner confirmed)
- Local, human-gated workflow unless you ask for Cloud Agents
- Change-request pipeline (BA → Design → Dev → QA): `docs/change-requests/README.md` · agents/skills under `.cursor/`

## Active change requests

See `docs/change-requests/INDEX.md`. [CR-20261109-massage-intent-regroup](change-requests/CR-20261109-massage-intent-regroup.md) is implemented on `staging`; its Dev gate is still pending owner review. The three November 6 requests are superseded records. Do not rebuild them. Live layout: `docs/design-guidelines.md`, `docs/user-journeys.md`, and this file.

Owner shortcut: `/product-change` then approve each gate; `/handoff-gate` after approval.

## Git

- Default: `main` (keep stable)
- Active work branch: `staging`
- Legacy: `feat/informational-site`
- Do not merge or push `main` without approval

## Built locally (2026-11-13)

Routes: `/`, `/about`, `/services`, `/services/massage`, `/services/cham-soc-toc`, `/services/combo`, `/services/massage/nhom/thu-gian-toan-than|tri-lieu-chuyen-sau|an-than-giac-ngu`, `/services/[category]/[slug]`, `/gallery`, `/reviews`, `/contact`. Old intent URLs `thu-gian`, `phuc-hoi`, and `tri-lieu` redirect to those three.

- **Menu.** Canva “MEMU TỔNG JADE”, Vietnamese page, in `lib/menu.ts`. Hover Dịch vụ (and the mobile menu) opens massage intents (Thư giãn toàn thân, Trị liệu chuyên sâu, An thần & giấc ngủ), the three gội tier names, and the three combo gói names. Home and `/services` share `ServiceDirectory`: Massage, Gội đầu dưỡng sinh, Combo.
- **Lists.** Thư giãn lists than-60/90/120 (each opens `?phut=`) plus a non-link row for Chăm sóc theo nhu cầu. Trị liệu lists cổ vai gáy, lưng – eo, and lưng – hông – chân, each “Từ” that group’s minimum, opening the group page. An thần lists ngu-60/90/120/150. Gội cards open `?phut=`. Combo cards are the three gói only. Jade Emperor Therapy and Chăm sóc theo nhu cầu are not combo cards. Lưng – eo has no 120-minute row.
- **Detail.** `?phut=` selects one tier. Centered tier name, the short line from `lib/service-summaries.ts`, price and clock, photo, then Canva steps from `lib/menu-rituals.ts` when that tier has them. A group with more than one tier also lists those tiers as links to `?phut=` (not the retired minute chips). No “Bước mẫu” filler. Jade Emperor omits Quy trình (no steps on the VN Canva page).
- **Home.** The first screen is the moving lounge photo (optional `heroVideoSrc`, currently empty). Scroll reveals the house block, services, banner, gallery, and visit strip. The services band uses dark **`bg-jade-band`** + tiled owner **velvet** `home-services-moss.jpg` (520px / 40% soft-light; no cover zoom). Ivory headings on Home. Cards: Ivory + `border-sage/45`. `/services` unchanged. Banner “Từ gỗ, cây và nước.” uses `soaking-hall` as a stand-in.
- **Wordmark.** `public/spa/logo-mark.png`, cut from the logo already on the spa photos. Ivory `#F8F6F0` on a photo, Forest `#263B32` on paper. Headlines are Cormorant Garamond; body and UI are Manrope. Offer-card tops match the house sheet (28px, 40px from `md`); bottoms stay 4px. Intent rows 16px. Detail photo 6px. A separate vector file is still open.
- **Palette (2026-11-06, owner approved).** Ivory `#F8F6F0`, Forest `#263B32`, Sage `#78846B` (rules only), Sand `#E9E2D5` (token; the services index is Ivory), Bronze `#AD9066` (hairline only, not buttons). Primary buttons are Forest with an Ivory label. On a photo, the call button is Ivory with a Forest label.
- **Photos.** Nine frames from `assets/spa/` are on the site. `Unknown-9.jpg` stays unused (unconfirmed menu and promotional lines). The printed footer with **0917 110 066** was cropped. The only phone on the site is **0357050796**.
- **Not on the site.** Booking, payments, accounts, English, medical claims, review quotes, a Zalo link, a real About story, a homepage film file.

## Next chat

Read `docs/design-guidelines.md` and `docs/user-journeys.md` before changing layout. Do not restore the sand services band, the eleven price bands, the minute chips, or the “Nhóm dịch vụ” bar. Do not deploy until the owner says so.

Still open (`NEEDS OWNER INPUT`): Vietnamese name and steps for Jade Emperor Therapy, Zalo URL, Google Maps place URL, About story, a separate vector logo, a homepage film if they want one, hosting. Sleep tiers ngu-60/90/120/150 stay on An thần & giấc ngủ. Chăm sóc theo nhu cầu is a non-link row on Thư giãn toàn thân. Confirm that placement when you review CR-20261109 (Dev gate still pending).
