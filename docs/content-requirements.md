# Content requirements — owner-supplied only

**Status:** complete — awaiting owner approval  

Agents must not invent rows in this checklist. Put files in `assets/` yourself (or ask the agent only to **organize** files you provided). Until a cell is filled, published pages must use a labeled gap (`NEEDS OWNER INPUT`), not plausible filler.

Working name in this repo: **Jade Healing Spa**. Confirm before any public copy.

---

## How to use this list

1. Answer in chat, or add files under `assets/brand/` and `assets/spa/`.
2. BA/Developer will copy verified facts into later data files.
3. Tick boxes here only when the owner has actually supplied the item.

---

## 1. Identity

| ID | Item | Needed for | Status |
| --- | --- | --- | --- |
| I1 | Legal business name | Footer, About, SEO | NEEDS OWNER INPUT |
| I2 | Public display name (confirm “Jade Healing Spa”) | Header, titles | NEEDS OWNER INPUT |
| I3 | One-sentence positioning (no medical claims unless verified) | Home hero, meta | NEEDS OWNER INPUT |
| I4 | Site language: VI, EN, or both (both = full duplicate of every page) | All pages | NEEDS OWNER INPUT |
| I5 | Short About story (owner-written) | `/about` | NEEDS OWNER INPUT |
| I6 | Philosophy / how we work | `/about` | NEEDS OWNER INPUT |
| I7 | Facilities description (beds, rooms, etc. only if you want them public) | `/about` | NEEDS OWNER INPUT — do not publish earlier operational notes unless you confirm |
| I8 | Team / doctor copy (optional; omit if not ready) | `/about` | NEEDS OWNER INPUT |

## 2. Contact and location

| ID | Item | Needed for | Status |
| --- | --- | --- | --- |
| C1 | Street address (and extra branches if any) | Contact, footer, About | NEEDS OWNER INPUT |
| C2 | Phone (and whether it may be a `tel:` link) | Contact, header CTA | NEEDS OWNER INPUT |
| C3 | Email | Contact | NEEDS OWNER INPUT |
| C4 | Hours | Contact | NEEDS OWNER INPUT |
| C5 | Google Maps link or embed-able map | Contact | NEEDS OWNER INPUT |
| C6 | Zalo / Facebook / Instagram / others (real URLs only) | Footer, Contact | NEEDS OWNER INPUT |
| C7 | Parking / access notes (optional) | Contact | NEEDS OWNER INPUT |
| C8 | Primary action: call vs message vs visit | Header button | NEEDS OWNER INPUT |

## 3. Services

Provide a list. Suggested columns per treatment (leave price/duration blank if private):

`name` · `slug` (or we derive it) · `category` · `short_description` · `long_description` · `duration` · `price_public` (yes/no + amount) · `photo` · `what_to_expect` · `related_services`

| ID | Item | Needed for | Status |
| --- | --- | --- | --- |
| S1 | Full list of treatments allowed on the website | `/services`, details | NEEDS OWNER INPUT |
| S2 | Category names, if any | Overview grouping | NEEDS OWNER INPUT |
| S3 | Featured treatments for Home (2–4) | Home | NEEDS OWNER INPUT |
| S4 | Whether prices are public | Detail template | NEEDS OWNER INPUT |
| S5 | Durations | Detail template | NEEDS OWNER INPUT |
| S6 | Any health/contraindication wording (professional, owner-approved) | Detail | NEEDS OWNER INPUT; omit if none |
| S7 | Packages/combos (only real ones) | Same as services | NEEDS OWNER INPUT |

Do **not** reuse nhaspa treatment names, combo names, or prices.

## 4. Brand and media

| ID | Item | Put here | Status |
| --- | --- | --- | --- |
| B1 | Logo (SVG/PNG) and clear-space rules | `assets/brand/` | NEEDS OWNER INPUT |
| B2 | Colors and typefaces, or permission to propose in design | `assets/brand/` or chat | NEEDS OWNER INPUT |
| B3 | Home hero photo | `assets/spa/` | NEEDS OWNER INPUT |
| B4 | Interior / treatment-room photos for Gallery | `assets/spa/` | NEEDS OWNER INPUT |
| B5 | Per-service photos | `assets/spa/` or `assets/spa/services/` | NEEDS OWNER INPUT |
| B6 | Team photos (optional, with consent) | `assets/spa/` | NEEDS OWNER INPUT |
| B7 | Alt-text hints (what each photo shows) | With files | NEEDS OWNER INPUT |

If photos are missing, design may use **labeled** gray/empty frames. Unrelated stock must never be captioned as our spa.

## 5. Reviews

| ID | Item | Status |
| --- | --- | --- |
| R1 | Policy: which reviews may appear (Google, paper, DM) | NEEDS OWNER INPUT |
| R2 | Each quote: exact text, display name rule, date optional, source | NEEDS OWNER INPUT |
| R3 | Permission to show star ratings (only real aggregates) | NEEDS OWNER INPUT |

If R2 is empty, `/reviews` stays an honest placeholder. **Never** generate testimonials.

## 6. SEO and launch

| ID | Item | Status |
| --- | --- | --- |
| L1 | Domain | NEEDS OWNER INPUT |
| L2 | Hosting (Vercel candidate — no purchase/deploy without approval) | NEEDS OWNER INPUT |
| L3 | Who signs off copy and photos before go-live | NEEDS OWNER INPUT |
| L4 | Favicon derived from logo | After B1 |

Per-page titles and meta descriptions can be drafted in design/dev **only** from approved I3 + page purpose — still owner-reviewed before launch.

## 7. Explicitly not requested for MVP

- Booking form copy
- Account/login copy
- News articles
- Job listings
- Multi-language strings (unless I4 = both)

## Minimum to start Design (recommendation)

Design can explore layout with labeled placeholders after BA approval, but **art direction is blocked on photos + logo** if we want a non-generic look.

Practical minimum:

- I2, I3, I4
- C1, C2, C4, C8
- S1 (even a short list)
- B1 and several B3/B4 photos

Everything else can follow, still before public launch.
