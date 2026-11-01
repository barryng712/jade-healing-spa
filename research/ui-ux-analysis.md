# UI/UX analysis (patterns, not a copy)

Screenshots in `research/screenshots/` are the visual source of truth. This file records **structural patterns** only. Do not reproduce Nhà Spa branding, illustration, photography, or marketing copy.

## Observed facts

### Canvas

- Desktop research canvas: 1440×1000 (full-page screenshots extend below the fold).
- Mobile research canvas: 390×844.

### Desktop header

- Thin top bar: left text links, **centered logo/illustration**, right-side careers + language dropdown.
- Header sits over or just above a large interior photograph on Home.
- Language switcher lists several languages (labels collected by the crawler).

### Home rhythm (from `01` and `30`)

Long page, repeating this kind of band:

1. Full-width photography hero + overlay CTA
2. Quiet cream band with a short brand line
3. Small circular **category** icons in a row
4. Featured **combo / package** cards with photography
5. Darker green editorial band with lifestyle photos
6. Photo mosaic of the physical space
7. **Review** module (stars + cards + “see more”)
8. Press / “as seen in” strip
9. Another photo grid
10. Footer: logo, social row, copyright, back-to-top

### Service overview (`03`)

- Centered page title
- Category icon row
- Large category headings (Massage, hair, skin, other)
- Under each heading, a **list of treatment names** (not a dense card grid in the first screen)
- FAQ accordion at the bottom

### Service detail (`34`)

- Breadcrumb
- Centered treatment name
- Rating + compact facts row
- Primary button (booking)
- Alternating photo / text
- “Process” and “aftercare / results” sections
- FAQ
- Related treatments as a 4-up photo row

### About / locations (`02`)

- Intro photography
- **Large location title cards** (one per branch) with supporting text
- Landmark / neighborhood list
- FAQ

### Contact (`37`)

- Almost empty in this capture: title then footer. Not a strong contact pattern to copy.

### 404 (`38`)

- Centered apology line + link back to home, same cream field and footer.

### Mobile (`10`, `40`–`43`)

- Single column, generous vertical spacing
- Photography still large
- Category labels stack
- Review and photo modules remain, just narrower
- Persistent round chat control

### Visual language (describe, do not copy)

- Warm cream / paper field
- Dark green used for buttons and some bands
- Serif-like display titles, lighter body text
- Line-drawn botanical / portrait logo
- Real interior photography (plants, wood, treatment rooms)
- Soft snowflake overlay appeared seasonally on some pages during this visit

### Interaction extras

- Floating chat
- Seasonal promo chips
- “Back to top”
- Booking CTA on hero and details — **out of our MVP**

## Interpretations

The site sells **atmosphere first, catalog second**. Trust is built with space photos, Google-style reviews, and press — not with a dense price table on the homepage.

The cream + serif + plant photography combination is a common “premium spa” look. Copying it would look like a clone. Our design should start from **our** photos and brand, not from this palette.

## Recommendations (for later design, after owner approval)

- Photography-forward, but only with real `assets/spa/` images.
- Long Home is fine if each band has a job (orient, prove, choose, contact).
- Prefer a **clear Contact page** (address, hours, map, phone) — stronger than the reference `/lien-he/` capture.
- Put locations on About **or** Contact; do not hide them.
- Service detail template: title, facts the owner approves, photos, what to expect, FAQ, related services. No booking widget.
- Avoid clichés: gold script, purple gradients, fake marble, generic AI interiors.
- Keep chrome quiet: one primary action (“Call” or “How to visit”), not three competing widgets.

## Unresolved questions

- Owner visual direction: warm residential, clinical-clean, garden, or something else?
- Photo set available before design (rooms, treatments, team — with consent)?
- Do we want a language switcher? That is a real cost in content, not just a UI control.
