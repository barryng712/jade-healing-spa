# User journeys — Jade Healing Spa (our site)

**Status:** complete — awaiting owner approval  

Reference journeys (observed) live in `research/user-journeys.md`. This file is for **our** visitors. Every path ends in **call, message, or visit**. Online booking is out of MVP.

---

## Observed facts (why these journeys)

- Reference visitors are led to “see the space → pick a treatment → book”. Their booking URL 404s; we will not copy that dead end.
- Their Contact page was weak; location lived on About. We should not make guests hunt for hours and phone.
- Reviews and photos there were mixed into Home. We still give Gallery and Reviews their own URLs so proof is easy to share.

## Recommendation

Design six journeys below. Primary action is **NEEDS OWNER INPUT** (call vs Zalo vs walk-in). Until then, journeys assume Contact is the conversion page.

---

## Journey 1 — First impression (Home)

1. Visitor opens `/`.
2. Sees a real spa photograph (or labeled placeholder) and a short positioning line.
3. Understands this is an informational spa site, not a booking app.
4. Chooses: About, Services, Gallery, or Contact.

**Success:** Visitor knows what the spa is and where to go next.  
**Failure:** Generic template look, fake photos, or a fake “Đặt lịch” button.

## Journey 2 — Who we are (About)

1. Visitor opens `/about` from header or Home.
2. Reads owner-approved story and approach.
3. Sees facilities only as described/photographed by the owner.
4. Finds a clear link to Contact (address must not be hidden).

**Success:** Visitor can explain the spa in one sentence and knows how to get details to visit.  
**Blocked today:** All story text is **NEEDS OWNER INPUT**.

## Journey 3 — Choose a treatment (Services)

1. Visitor opens `/services`.
2. Scans the full publishable list (grouped only if owner defines groups).
3. Opens `/services/[slug]`.
4. Reads name, short description, optional duration/price, photos, what to expect (owner text only).
5. Uses Contact CTA (or `tel:` / Zalo if approved) — **not** a booking form.

**Success:** Visitor can name a treatment they might request in person or by phone.  
**Blocked today:** Service list is **NEEDS OWNER INPUT**.

## Journey 4 — See the space (Gallery)

1. Visitor opens `/gallery` or a Home photo preview.
2. Views owner photos of interiors / facilities.
3. May continue to Contact or Services.

**Success:** Visitor believes the space is real.  
**Empty state:** Honest labeled placeholders; no stock interiors passed off as ours.

## Journey 5 — Proof (Reviews)

1. Visitor opens `/reviews` or a Home review module.
2. Reads only quotes the owner has allowed, with real attribution rules the owner sets.

**Success:** Trust without fabrication.  
**Empty state:** Explain that reviews will appear when approved — never invent stars or names.

## Journey 6 — Visit or call (Contact) — primary conversion

1. Visitor opens `/contact` from header, footer, or in-page CTA.
2. Sees address, hours, phone, map or maps link, and messaging apps — all verified.
3. Taps phone or opens maps on mobile; copies details on desktop.

**Success:** Visitor can call or arrive without guessing.  
**Blocked today:** All contact fields are **NEEDS OWNER INPUT**.  
**Do not:** Add a booking calendar to mimic the reference CTA.

---

## Cross-cutting journeys

| Journey | Requirement |
| --- | --- |
| Mobile | Same URLs; stacked layout; menu that actually opens; tap targets for phone and maps |
| Keyboard | Skip to content (later), visible focus, menu close with Escape |
| Dead ends | Unknown URLs → original 404 with link Home |
| Language | Single language until owner supplies a full second copy of every page |

## Out of MVP (do not design as a path)

- Create account / log in
- Pick a bed, therapist, or time slot
- Pay online
- Submit a booking form
- Read news or apply for a job

## Unresolved

- Primary CTA: call, Zalo, Facebook, walk-in, or email? **NEEDS OWNER INPUT**
- One branch or many?
- Publish prices on detail pages, or “liên hệ để biết giá”?
