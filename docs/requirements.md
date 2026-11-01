# Website requirements — Jade Healing Spa MVP

**Role:** Product / Business Analyst  
**Date:** 2026-11-01  
**Status:** complete — awaiting owner approval  
**Gate:** Design must not start until this package is `owner approved`.

This document is for **our** site. It is not a clone of nhaspa.com.vn.

---

## Observed facts (from research)

- The reference site is a photography-heavy, catalog-heavy marketing site: Home → category → treatment/combo detail.
- Location information on the reference site lives mainly on About; their Contact URL was nearly empty in capture.
- Reviews and galleries there are homepage modules, not standalone URLs.
- Their booking-style CTA exists on Home and details, but `/dat-lich/` 404s. We did not submit any booking.
- **Our approved MVP** is informational only. Booking, payments, and accounts are Phase 2.

## Interpretations

- Atmosphere and a clear service list will do more for trust than extra pages (news, careers, language switcher).
- Hiding address and hours would be worse than the reference Contact page. Visitors in Vietnam typically need phone, hours, and a map before they visit.

## Recommendations (ours)

- Seven page types as already approved in `PROJECT_BRIEF.md`.
- Primary conversion: **call, message, or visit** — not an online booking form.
- Vietnamese-first content unless the owner commits to a full second language.
- One original visual identity based on **our** photos and brand files, not the reference cream/green/serif look.

---

## 1. Goals

The MVP website should help a prospective guest:

1. Discover the spa and understand positioning (premium herbal / wellness spa — wording **NEEDS OWNER INPUT**).
2. Learn who we are and how we work (About).
3. Browse real treatments and open a detail page.
4. See authentic facilities through owner-supplied photos.
5. Read only reviews the owner has approved.
6. Find address, hours, phone, map, and messaging apps, then contact or visit.

Success for MVP is a credible, maintainable informational site — not online appointments.

## 2. Non-goals (out of MVP)

Do not build:

- Online booking, calendars, room/therapist availability
- Payments or deposits
- Customer accounts or login
- Receptionist / admin dashboards
- A database “for later booking”
- News / journal, careers, press-logo strips (unless the owner later supplies real, permitted items)
- Multi-language UI until every page has a real translation
- Chat widgets unless the owner names the real account (Zalo, Messenger, etc.)
- Invented medical claims, fake reviews, fake awards, fake prices, or stock photos presented as our rooms

Phase 2 may revisit booking. Structure pages so a future “Call / Book” CTA can change without a rewrite. Do not implement booking now.

## 3. Audience

**NEEDS OWNER INPUT** for exact segments. Working assumption for IA only (not for published copy):

- Adults in Vietnam considering a wellness / herbal spa visit
- Guests who need to check services, photos, and how to arrive
- Possibly first-time visitors who will call or message before coming

Do not write copy that assumes medical spa outcomes, doctor-led treatments, or luxury claims until the owner supplies wording.

## 4. MVP pages and behavior

| Page | Job | Behavior |
| --- | --- | --- |
| Home | Orient + route to services, proof, contact | Photography-forward; one primary CTA to Contact or a verified phone/message link |
| About | Story, approach, facilities (verified only) | Team/doctor content only if owner supplies it |
| Services overview | Browse all publishable treatments | Group by owner-approved categories if they exist |
| Service detail | One consistent template per treatment | Name, short description, optional duration/price, photos, related services |
| Gallery | Show real interiors and atmosphere | If no photos yet: labeled placeholder, never fake rooms |
| Reviews | Show only approved testimonials | If none: labeled empty/placeholder, never generated names or stars |
| Contact | Make a visit or call easy | Address, hours, phone, map, social — all verified |

Global:

- Header and footer on every page
- Working internal links; simple original 404
- Desktop and mobile layouts
- Placeholders visibly labeled until owner content exists

Primary CTA (recommendation): **“Liên hệ / Chỉ đường”** (Contact / Directions) or a `tel:` / Zalo link. **NEEDS OWNER INPUT** which channel is primary.

## 5. Content sources

| Source | Use |
| --- | --- |
| Owner-supplied text, prices, hours, legal name | Only after written approval in chat or in this repo |
| `assets/brand/` | Logo, colors, fonts |
| `assets/spa/` | Real photographs |
| `docs/content-requirements.md` | Checklist of every field |
| Research files | IA and UX patterns only — **do not** copy names, slogans, prices, addresses, or images |

Until a field is supplied, the site (when built) must show a labeled gap, not invented copy.

## 6. Quality bar (requirements)

- Original design; not a generic AI landing page and not a nhaspa clone
- Semantic HTML, sensible heading order, unique title + meta description per page
- Keyboard-usable navigation and visible focus
- No horizontal overflow at 390×844, ~768px, and 1440×1000
- Images from our assets, with descriptive alt text (owner or labeled placeholder)
- Production build, TypeScript, and later Playwright checks must pass before release

## 7. Technical constraints (product, not implementation)

- Content-focused Next.js site later; no extra backend for MVP
- Structured content in data files (services list) once the owner provides it
- Hosting candidate Vercel — **do not deploy without owner approval**
- Repository remains `barryng712/jade-healing-spa`

## 8. Open questions

All items in `docs/unresolved-questions.md` remain **NEEDS OWNER INPUT**. Highest blockers for honest pages:

1. Public display name (confirm “Jade Healing Spa”)
2. Language(s)
3. Address, phone, hours, map
4. Service list (and whether prices are public)
5. Real photos and logo
6. Whether any reviews may be published
7. Primary contact method (call / Zalo / other)
