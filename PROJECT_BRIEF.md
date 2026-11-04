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

## Where the site is (2026-11-04)

A local Next.js site exists on `feat/informational-site`. It is not deployed. QA has not started.

Built:

- Home, About, Services, Gallery, Reviews, Contact
- Menu from the Canva “MEMU TỔNG JADE” Vietnamese page: Massage, Chăm sóc tóc, Combo, then one page per liệu trình
- Detail: photo on the left, ritual on the right; minute chips change the name and price; the photo stays
- Owner photos from `assets/spa/` (copied for the site under `public/spa/`)
- Header and home hero use the script logo cut from those photos (`public/spa/logo-mark.png`)
- Home services band is sand linen `#E9DCC8`, taken from the plaster, linen, and wood in the photos

Still labeled, not invented:

- Ritual steps are ten “Bước mẫu” lines until the owner sends the real steps
- About story is still a gap
- Reviews have no quotes
- Zalo has no URL
- The nature banner photo is a stand-in (`soaking-hall`)

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

- Ritual steps for each minute mark
- Vietnamese name for Jade Emperor Therapy
- Whether An thần & giấc ngủ stays under Massage, and Chăm sóc theo nhu cầu stays under Combo (assumption S8)
- Zalo URL
- Google Maps place URL (reviews stay empty until then)
- About story, facilities, and team
- A separate vector logo file, if a cleaner master than the photo cut is wanted
- Hosting, and who signs off before go-live

## Workflow gates

See `docs/STATUS.md`. Research, BA, and design are approved. Development is built locally and waiting for owner review. QA is next, and only after that review. Do not deploy.

## Repository note

The GitHub repository is already `barryng712/jade-healing-spa`. Do not create a second repository named `spa-website`.
