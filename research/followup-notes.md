# Follow-up session notes

Date: 2026-11-01

## Why this session existed

The first crawl covered Home, About, Services, News, three categories, and two combo details. It missed contact, a treatment-level detail page, combo category, careers, and below-the-fold Home modules (reviews, photo mosaic).

## What was added

- Homepage same-origin link dump: `research/link-dump.json`
- Scrolled captures of Home / About / Services
- Treatment detail: `/massage-body/`
- Combo category
- Contact `/lien-he/`
- Guessed `/co-so/` and `/dat-lich/` (both 404)
- Careers `/tuyen-dung/`
- Mobile stacked captures of Home / About / Services / massage-body
- Forced click on a candidate mobile menu toggle (no distinct overlay confirmed)

## Limits remaining

- Mobile hamburger behavior still unconfirmed.
- Contact page body is thin in the capture; location content lives on About.
- Not every treatment URL in the link dump was opened (reasonable request rate).
- Booking CTA was observed, not used.
