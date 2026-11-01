# Proposed sitemap — Jade Healing Spa (our site)

**Status:** complete — awaiting owner approval  
**Not** the reference sitemap (`research/sitemap.md`).

Slugs below are a **proposal** for a future Next.js App Router. Labels may be Vietnamese on the live site. **NEEDS OWNER INPUT** for language and final labels.

---

## Observed facts (reference, not our tree)

Reference tree was catalog-heavy, with News, Careers, and weak Contact. Gallery and Reviews were not standalone URLs. We are not copying those URLs or names.

## Recommendation

Shorter tree. Always ship Contact as a real page. Keep Gallery and Reviews as routes even if content is a labeled placeholder, so the IA matches the approved MVP.

---

## Site tree

```
/                       Home
/about                  About the spa
/services               Services overview
/services/[slug]        One page per publishable treatment
/gallery                Gallery
/reviews                Customer reviews
/contact                Contact and location
```

Also required later (not marketing pages):

- `/404` (or Next.js not-found) — simple original page with link Home
- `robots.txt` and XML sitemap at release time

**Out of MVP:** `/booking`, `/dat-lich`, `/news`, `/careers`, `/account`, language-prefixed duplicates (`/en/...`) unless the owner commits to two full sites.

---

## Navigation (proposed)

**Primary header (desktop and mobile):**

| Label (VI proposal) | Target |
| --- | --- |
| Trang chủ | `/` |
| Về spa | `/about` |
| Dịch vụ | `/services` |
| Thư viện ảnh | `/gallery` |
| Đánh giá | `/reviews` |
| Liên hệ | `/contact` |

Plus the spa mark linking to `/`.

**Header utility:** one primary action → `/contact` or verified `tel:` / messaging URL. **NEEDS OWNER INPUT.**

**Footer:** same links, plus verified social URLs, legal name, and copyright year. No careers, no language dropdown unless translations exist.

**Mobile:** a real open/close menu (the reference overlay was unconfirmed). Menu must be keyboard-accessible.

---

## Page notes

### Home `/`

Proposed modules (design may reorder after approval):

1. Hero (photo + short positioning line — **NEEDS OWNER INPUT**)
2. Brief introduction → link About
3. Featured treatments (subset of real services — **NEEDS OWNER INPUT** which ones)
4. Facilities / atmosphere preview → Gallery
5. Reviews preview (only if publishable reviews exist)
6. Contact / location CTA

Do not include a booking widget.

### About `/about`

Story, philosophy, service approach, facilities. Team or medical staff **only** with owner text. Address may be summarized here and fully specified on Contact (do not hide it).

### Services `/services`

All publishable treatments. Optional category groupings **NEEDS OWNER INPUT**. Each row/card: name, short description, image, link to detail. Duration and price only if approved.

### Service detail `/services/[slug]`

Same template for every treatment. Slugs derived from owner names (transliterated, not copied from nhaspa). Related-service links only to other real treatments.

If the owner later adds packages/combos, they are still “services” with the same template — do not invent combo names.

### Gallery `/gallery`

Grid of `assets/spa/` images. If the folder is empty at build time: labeled placeholder page, no unrelated stock.

### Reviews `/reviews`

Only owner-approved quotes. If none: labeled placeholder. No generated names, cities, or star ratings.

### Contact `/contact`

Verified address, phone, hours, map embed or maps link, messaging/social links. Optional parking notes. **No contact form required** for MVP unless the owner asks; a form would need a delivery method (email service) they approve.

---

## Dynamic vs static

| Kind | Examples |
| --- | --- |
| Static routes | Home, About, Services index, Gallery, Reviews, Contact |
| Data-driven | `/services/[slug]` from an owner-supplied list in `src/data/` (later) |

Do not create category URLs (`/services/massage/...`) until the owner defines real categories. A single overview page is enough for MVP.

## Unresolved

- One location or several? If several, Contact/About need one block per branch — **NEEDS OWNER INPUT**.
- Public Vietnamese labels vs English labels.
- Whether Reviews stays in the header if there are zero reviews (recommendation: keep the page, honest empty state).
