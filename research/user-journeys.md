# Reference user journeys (observed)

Research date: 2026-11-01  
Journeys are inferred only from pages actually opened and from homepage modules visible in screenshots. Booking was never submitted.

## Observed facts

### Journey 1 — Land and orient

1. Visitor opens https://nhaspa.com.vn/.
2. Sees a full-bleed interior photo, centered logo in the header, language control, and a prominent booking-style control on the hero.
3. Scrolling reveals: short brand statement, category icons (massage / hair / skin / combo), featured combo cards, space photography, review cards, press logos, more photography, footer.

### Journey 2 — Learn who they are / where they are

1. Visitor uses header “Cơ sở” or About.
2. Lands on https://nhaspa.com.vn/gioi-thieu/.
3. Sees large **branch cards** (street or building names), neighborhood landmarks, and an FAQ accordion.
4. There is no separate working `/co-so/` page (that slug 404s).

### Journey 3 — Discover a service

1. Visitor opens https://nhaspa.com.vn/dich-vu/ **or** a category such as `/danh-muc-san-pham/massage/`.
2. Overview groups treatments under category headings, with featured combos near the top.
3. Visitor opens a detail URL, e.g. https://nhaspa.com.vn/massage-body/.
4. Detail page pattern: title + rating + duration/price-style facts + photos + process + FAQ + related services + booking CTA.

### Journey 4 — Trust and proof

1. Reviews appear as a **homepage module**, not a separate reviews URL.
2. Photography of rooms and treatments is woven through Home, About, and detail pages rather than a gallery index.
3. News (https://nhaspa.com.vn/tin-tuc/) exists as brand storytelling; not required to complete a visit/book path.

### Journey 5 — Contact

1. https://nhaspa.com.vn/lien-he/ exists.
2. The captured page showed almost no contact body — social footer only.
3. Practical “how to find us” content is stronger on About than on Contact in this sample.
4. Chat widget is persistent (round button). Search-like control appears in the header/hero region.

### Journey 6 — Book (reference site only)

1. Hero and service pages show a booking CTA.
2. https://nhaspa.com.vn/dat-lich/ 404s.
3. **Not explored further.** Our MVP must not implement this journey.

### Mobile

- Same URLs at 390×844.
- Content stacks to a single column.
- A distinct hamburger overlay was **not** confirmed in screenshot `21`.
- Booking-style control and chat remain visible while scrolling.

## Interpretations

The primary conversion path on the reference site is **see the space → pick a treatment → book**. Secondary paths are **find a branch** and **read proof** (reviews, press, photos).

Contact-as-a-page is weak in this capture; location cards on About carry that job.

## Recommendations for our MVP journeys

Design around a **call or visit** ending, not online booking:

1. Discover the spa (Home).
2. Understand who we are (About).
3. Choose a service (overview → detail).
4. See real photos (Gallery and in-page photography).
5. Read allowed reviews.
6. Get address, hours, phone (Contact).

Do not add a fake booking form to mimic the reference CTA.

## Unresolved questions

- Owner: is the primary action “call / Zalo / walk-in” or “Phase 2 online booking”?
- Owner: one location or several?
- Owner: do we publish prices on detail pages?
