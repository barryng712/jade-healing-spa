# Research summary — nhaspa.com.vn (for owner review)

**Role:** Website Researcher  
**Date:** 2026-11-01  
**Method:** Playwright Chromium, desktop 1440×1000 and mobile 390×844  
**Constraint:** Observe structure. Do not copy branding, copy, or images.

This file is the handoff. Details live in the other `research/` documents.

## What we studied

A live Vietnamese spa marketing site with:

- A photography-heavy homepage
- A service catalog (categories → treatments and named combos)
- About page that also carries **branch / address cards**
- News and careers (extra to our MVP)
- A booking-style CTA on Home and details (**not used**; dedicated `/dat-lich/` 404s)
- Reviews and galleries as **homepage modules**, not separate URLs
- WordPress media URLs (`/wp-content/uploads/`)

## What this means for our site (recommendations, not requirements yet)

Keep a **smaller** MVP than the reference:

| Our page | Inspired by (journey, not look) | Owner must supply |
| --- | --- | --- |
| Home | Orient + featured services + proof | Photos, short positioning line |
| About | Story + how to find us | Real story, team policy, address |
| Services | Browse categories | Real service list |
| Service detail | One template | Descriptions, duration, optional price |
| Gallery | Photo mosaic pattern | Real spa photos |
| Reviews | Homepage review module | Only reviews we may publish |
| Contact | Stronger than their `/lien-he/` | Phone, hours, map, messaging apps |

**Out of MVP:** online booking, payments, accounts, news, careers, multi-language (unless you commit to two full copies of every page).

## Facts vs interpretation

- **Fact:** Their nav “Cơ sở” goes to About, not `/co-so/` (404).
- **Fact:** `/lien-he/` existed but showed almost no contact body in our screenshot.
- **Fact:** Prices appear in at least one treatment page title on the reference site. Those prices are **theirs**, not ours.
- **Interpretation:** Atmosphere and catalog drive the site; contact is secondary in the current UI.
- **Recommendation:** We should not hide our address. Contact should be a first-class page.

## Research completeness

| RESEARCH_TASK item | Status |
| --- | --- |
| Homepage | Done (top + scrolled, desktop + mobile) |
| Navigation | Done (labels + link dump); mobile overlay unconfirmed |
| About | Done |
| Service categories | Done (4 categories) |
| ≥3 service details | Done (2 combos + massage-body) |
| Locations / branches | Done via About; `/co-so/` 404 |
| News | Index visited |
| Reviews | Homepage module; no reviews URL |
| Gallery | Homepage mosaics; no gallery URL |
| Contact | URL visited; thin body in capture |
| Footer | Documented |
| Desktop + mobile | Done for core pages |
| Screenshots | `research/screenshots/` `00`–`12`, `20`–`21`, `30`–`43` |

## Next (after this research)

Research was **owner-approved 2026-11-01**. BA docs are in `docs/requirements.md` and related files. Design, Figma, and website code stay closed until the owner approves the BA package.
