# Project brief — Jade Healing Spa website

## What we are building

A premium, professional, responsive **informational website** for the spa business in this repository (`jade-healing-spa`).

The first version helps a visitor understand the spa, browse services, see real photos, read reviews, and find contact / location details. It should feel elegant and authentic, not like a generic template.

## What we are not building in MVP

- Online appointment booking (Phase 2)
- Payments
- Customer accounts
- Admin dashboards
- Unnecessary backend infrastructure

## Reference site (study, do not copy)

Study **https://nhaspa.com.vn/** for:

- Information architecture and page hierarchy
- Navigation and service discovery
- User journeys
- Visual patterns (layout rhythm, not brand identity)

Do **not** copy its branding, text, images, or source code.

## Where the site is (2026-11-13)

A local Next.js site exists on `staging`. `feat/informational-site` is legacy. It is not deployed. The 2026-11-06 QA draft describes an earlier layout.

Built:

- Home, About, Services, Gallery, Reviews, Contact
- Menu from the Canva “MEMU TỔNG JADE” Vietnamese page (`lib/menu.ts`)
- Home opens on a full-screen moving photo. Services are Massage (Thư giãn toàn thân, Trị liệu chuyên sâu, An thần & giấc ngủ), Gội đầu dưỡng sinh, and Combo (three gói)
- Massage intents: thư giãn lists than-60/90/120 plus a non-link row for Chăm sóc theo nhu cầu; trị liệu lists cổ vai gáy, lưng – eo, and lưng – hông – chân; an thần lists ngu-60/90/120/150. Detail uses `?phut=`
- Ritual steps on the detail page come from `lib/menu-rituals.ts` when that tier has them. Jade Emperor Therapy has no array and omits Quy trình
- Owner photos from `assets/spa/` (copied for the site under `public/spa/`)
- Header and home hero use the script logo cut from those photos (`public/spa/logo-mark.png`)

Still labeled, not invented:

- About story is still a gap
- Reviews have no quotes
- Zalo has no URL
- The nature banner photo is a stand-in (`soaking-hall`)
- `heroVideoSrc` is empty until the owner supplies a film
- Jade Emperor Therapy still has no Vietnamese name and no steps on the Vietnamese Canva page

## Our site must use

- Our own spa branding, including the script mark already printed on the spa photos
- Our real photographs in `assets/spa/`
- Our real services and business information
- Original visual design
- Responsive desktop and mobile layouts
- Vietnamese only

Gaps that are still unknown must stay `NEEDS OWNER INPUT`. Inventing those facts is forbidden.

## MVP pages

1. Homepage
2. About the spa
3. Services overview
4. Individual service detail pages
5. Gallery
6. Customer reviews
7. Contact and location

## Quality bar

- Premium, elegant, authentic
- Accessible (keyboard, contrast, semantic HTML, alt text)
- SEO basics (titles, headings, meta description, sitemap later)
- Fast enough on mobile
- No booking widgets in MVP

## Owner decisions still needed

Already confirmed: display name, legal name, address, phone, hours, email, Facebook, map pin, parking note, Vietnamese only, public prices, planned domain `jadehealingspa.com.vn`. See `docs/confirmed-content.md`.

Still open. Do not invent these:

- Vietnamese name and ritual steps for Jade Emperor Therapy (`NEEDS OWNER INPUT`; the detail page omits Quy trình)
- Confirm the 2026-11-09 placement still stands: all four sleep tiers on An thần & giấc ngủ; Chăm sóc theo nhu cầu is a non-link row on Thư giãn toàn thân; neither is a Combo card. CR-20261109 Dev gate is still pending
- Zalo URL
- Google Maps place URL (reviews stay empty until then)
- About story, facilities, and team
- A separate vector logo file, if a cleaner master than the photo cut is wanted
- Hosting, and who signs off before go-live

## Workflow gates

See `docs/STATUS.md`. Research, BA, and design are approved. Development is built locally and waiting for owner review. QA is next, and only after that review. Do not deploy.

## Repository note

The GitHub repository is already `barryng712/jade-healing-spa`. Do not create a second repository named `spa-website`.
