# Project status

Last updated: 2026-11-07 (docs match the local card, intent, and full-screen home)

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
| QA | complete for the 2026-11-06 build | Report: `docs/qa-draft-1.md`. That pass predates the card directory, intent lists, detail without minute chips, and the full-screen home. Those later changes have no new QA pass. Not deployed. |
| Release | not started | Domain planned: jadehealingspa.com.vn; hosting not chosen; no deploy |

## Cursor plan

- **Premium** (owner confirmed)
- Local, human-gated workflow unless you ask for Cloud Agents
- Change-request pipeline (BA → Design → Dev → QA): `docs/change-requests/README.md` · agents/skills under `.cursor/`

## Active change requests

See `docs/change-requests/INDEX.md`. The three November 6 requests record earlier proposals. The live layout is `docs/design-guidelines.md` and `docs/user-journeys.md` (2026-11-07). Owner has not closed those CRs.

Owner shortcut: `/product-change` then approve each gate; `/handoff-gate` after approval.

## Git

- Default: `main` (keep stable)
- Work branch: `feat/informational-site`
- Do not merge or push `main` without approval

## Built locally (2026-11-07)

Routes: `/`, `/about`, `/services`, `/services/massage`, `/services/cham-soc-toc`, `/services/combo`, `/services/massage/nhom/thu-gian|phuc-hoi|tri-lieu`, `/services/[category]/[slug]`, `/gallery`, `/reviews`, `/contact`.

- **Menu.** Canva “MEMU TỔNG JADE”, Vietnamese page, in `lib/menu.ts`. Hover Dịch vụ opens massage intents, gội tier names, and combo gói names. Home and `/services` share `ServiceDirectory`: Massage, Gội đầu dưỡng sinh, Combo.
- **Lists.** Massage intents are one row per matching tier (40/60, 90, 120), using that tier’s menu name and exact price. Gội cards open `?phut=`. Combo includes the 150-minute sleep ritual. Lưng – eo has no 120-minute row.
- **Detail.** `?phut=` selects one tier. Centered tier name, price and clock, photo, then Canva steps from `lib/menu-rituals.ts` when that tier has them. No sample blurb and no “Bước mẫu” filler. Jade Emperor omits Quy trình (no steps on the VN Canva page). No minute chips.
- **Home.** The first screen is the moving lounge photo (optional `heroVideoSrc`, currently empty). Scroll reveals the house block, services, banner, gallery, and visit strip. The services band uses dark **`bg-jade-band`** + tiled owner **velvet** `home-services-moss.jpg` (520px / 40% soft-light; no cover zoom). Ivory headings on Home. Cards: Ivory + `border-sage/45`. `/services` unchanged. Banner “Từ gỗ, cây và nước.” uses `soaking-hall` as a stand-in.
- **Wordmark.** `public/spa/logo-mark.png`, cut from the logo already on the spa photos. Ivory `#F8F6F0` on a photo, Forest `#263B32` on paper. Headlines are Cormorant Garamond; body and UI are Manrope. Offer-card tops match the house sheet (28px, 40px from `md`); bottoms stay 4px. Intent rows 16px. Detail photo 6px. A separate vector file is still open.
- **Palette (2026-11-06, owner approved).** Ivory `#F8F6F0`, Forest `#263B32`, Sage `#78846B` (rules only), Sand `#E9E2D5` (token; the services index is Ivory), Bronze `#AD9066` (hairline only, not buttons). Primary buttons are Forest with an Ivory label. On a photo, the call button is Ivory with a Forest label.
- **Photos.** Nine frames from `assets/spa/` are on the site. `Unknown-9.jpg` stays unused (unconfirmed menu and promotional lines). The printed footer with **0917 110 066** was cropped. The only phone on the site is **0357050796**.
- **Not on the site.** Booking, payments, accounts, English, medical claims, review quotes, a Zalo link, a real About story, a homepage film file.

## Next chat

Read `docs/design-guidelines.md` and `docs/user-journeys.md` before changing layout. Do not restore the sand services band, the eleven price bands, the minute chips, or the “Nhóm dịch vụ” bar. Do not deploy until the owner says so.

Still open: ritual steps for each minute mark, Vietnamese name for Jade Emperor Therapy, Zalo URL, Google Maps place URL, About story, a separate vector logo, a homepage film if they want one, hosting. The 150-minute sleep ritual is in Combo by owner direction; its shorter tiers stay in the massage intents.
