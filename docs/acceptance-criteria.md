# Acceptance criteria — Jade Healing Spa MVP

**Status:** complete — awaiting owner approval  
**Use:** QA (Playwright + manual) after a local site exists. Independent of the Developer.

Criteria use **should** for product intent. A criterion that needs owner content is marked **NEEDS OWNER INPUT**; QA then checks the labeled placeholder instead of invented copy.

Viewports: desktop 1440×1000, tablet ~768px width, mobile 390×844.

---

## Global

| ID | Criterion |
| --- | --- |
| G1 | Header shows the display name or logo and links to Home, About, Services, Gallery, Reviews, Contact |
| G2 | Footer repeats primary links and does not invent phone, address, or social URLs |
| G3 | Primary header action goes to Contact or a verified `tel:` / message link — never to a booking flow |
| G4 | No page offers online booking, payment, or login |
| G5 | Unknown paths show an original 404 with a link to Home |
| G6 | No nhaspa.com.vn text, images, or logos appear on our pages |
| G7 | Placeholder copy/images are visibly labeled until replaced |
| G8 | Keyboard: all header/footer links reachable; focus visible |
| G9 | No horizontal scrollbar at the three viewports above |
| G10 | No critical browser console errors on the seven page types |
| G11 | Each page has a unique `<title>` and a meta description |
| G12 | One `h1` per page; heading order does not skip levels |
| G13 | Images have alt text (descriptive, or explicit empty alt for decorative) |

## Home

| ID | Criterion |
| --- | --- |
| H1 | Hero communicates spa positioning using owner text or a labeled placeholder |
| H2 | Featured services, if shown, link to real detail URLs only |
| H3 | Gallery and reviews teasers do not use fake photos or fake quotes |
| H4 | A contact/visit path is available without scrolling past a booking widget (there is no booking widget) |

## About

| ID | Criterion |
| --- | --- |
| A1 | Page exists at `/about` |
| A2 | Story/team/facilities text is owner-approved or labeled **NEEDS OWNER INPUT** |
| A3 | No unverified medical claims, awards, or staff titles |

## Services

| ID | Criterion |
| --- | --- |
| V1 | `/services` lists every **publishable** treatment from owner data (or labeled empty/placeholder list) |
| V2 | Each listed treatment links to `/services/[slug]` and that route renders |
| V3 | No treatment names copied from the reference catalog |
| V4 | Duration and price appear only when owner marked them public |

## Service detail

| ID | Criterion |
| --- | --- |
| D1 | Template includes name, description area, optional facts, photo area, link back to `/services` |
| D2 | Related services, if any, are other real slugs |
| D3 | CTA is contact/call/message, not “book now” online |
| D4 | Invalid slug → 404 |

## Gallery

| ID | Criterion |
| --- | --- |
| Y1 | `/gallery` exists |
| Y2 | Images come from `assets/spa/` (or equivalent public images we own) |
| Y3 | If no images: labeled empty state, not generic hotel/spa stock as “our rooms” |

## Reviews

| ID | Criterion |
| --- | --- |
| R1 | `/reviews` exists |
| R2 | Every quote matches owner-approved text; no generated names |
| R3 | If none approved: labeled empty state; no fake stars |

## Contact

| ID | Criterion |
| --- | --- |
| K1 | `/contact` exists and is linked from header and footer |
| K2 | Address, phone, hours render only if verified; otherwise labeled gaps |
| K3 | Phone is a working `tel:` link when a number is supplied |
| K4 | Map or maps link present when the owner supplied it |
| K5 | No requirement to complete a booking form to see contact details |

## Technical reliability (before release)

| ID | Criterion |
| --- | --- |
| T1 | `npx tsc --noEmit` (or project equivalent) passes |
| T2 | Production build succeeds |
| T3 | ESLint (when configured) reports no errors on CI/local gate |
| T4 | Playwright smoke: each sitemap route returns success (or 404 for invalid slug) |
| T5 | No deploy and no merge to `main` without owner approval |

## Explicit fails

- Fake testimonials, fake prices, fake address
- Copied nhaspa photography or slogans
- Booking calendar, auth, or payment UI
- Unlabeled lorem that looks like real spa policy
