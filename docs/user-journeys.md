# User journeys — Jade Healing Spa

**Status:** local site on `staging`, 2026-11-13. Contact facts from 2026-11-01.  
Ends in **call, Facebook, Zalo, or visit**. No online booking.  
Layout detail: `docs/design-guidelines.md`.

---

## Observed vs now confirmed

Public Facebook had email and address, no phone. Owner **confirmed** hotline 0357050796, hours 09:00–21:00 daily, Facebook + Zalo as primary buttons. Zalo URL still missing. Google Maps reviews for this spa were **not found** on 2026-11-01.

---

## Journey 1 — First impression (Home)

The first screen is only the moving lounge photo, the script logo, **Chăm sóc · An yên · Chữa lành**, Gọi điện, and Facebook. **Kéo xuống** moves to the next band. A video can replace the moving photo later (`heroVideoSrc` in `lib/photos.ts`); it stays empty until the owner supplies a file.

Scrolling reveals, with one fade: the house block (the page `h1`), the services directory (Massage, Gội đầu dưỡng sinh, Combo), the nature banner, gallery frames, and the visit strip. The `h1` and the service names are in the HTML, not inside the photo.

## Journey 2 — Who we are (About)

Short confirmed line + Contact. Full story waits for owner text. The page opens with a living photo under the header.

## Journey 3 — Choose a treatment

Hover **Dịch vụ**. Three columns: massage intents (Thư giãn toàn thân, Trị liệu chuyên sâu, An thần & giấc ngủ), the three gội tier names, and the combo gói names. Chăm sóc theo nhu cầu and the 150-minute sleep ritual are not combo cards.

On `/services` or Home, the same three sections are cards: photo, the short line from `lib/service-summaries.ts`, **Xem chi tiết**. There is no “Nhóm dịch vụ” bar.

- Massage card → `/services/massage/nhom/thu-gian-toan-than`, `tri-lieu-chuyen-sau`, or `an-than-giac-ngu`. Thư giãn lists than-60/90/120 (each opens `?phut=`) plus a non-link card for chăm sóc theo nhu cầu (Từ 890.000 Vnđ, Từ 90 phút). Trị liệu lists three group cards (cổ vai gáy, lưng – eo, lưng – hông – chân), each “Từ” the minimum price and minutes of that slug, opening that slug’s detail. An thần lists ngu-60/90/120/150.
- Gội card → the detail page for that minute (`?phut=`).
- Combo card → the gói page. Chăm sóc theo nhu cầu and the 150-minute sleep ritual are not in this section.

The detail page shows the minute in `?phut=`: tier name, the short line from `lib/service-summaries.ts`, price beside the clock, photo, then **Quy trình** when `lib/menu-rituals.ts` has steps for that tier. Jade Emperor Therapy has no array and omits Quy trình. A group with more than one tier also lists those tiers as links to `?phut=` (not the retired minute chips). Then contact and related services. See `docs/design-guidelines.md`.

## Journey 4 — Gallery

Owner photos from `assets/spa/` are on `/gallery`. `Unknown-9.jpg` is not used.

## Journey 5 — Reviews

Do not invent quotes. Offer Google Maps pin. When the owner sends a Maps **place** URL, embed or link that listing only.

## Journey 6 — Visit or message (conversion)

Contact shows address (ngách 66/18), 09:00–21:00, `tel:+84357050796`, email, Facebook, parking note, map. Zalo button waits for URL.

**Mobile:** tap-to-call and Facebook work; Zalo only after a link exists. The home services section must be on screen after a scroll. A fade must not leave it invisible.

## Out of MVP

Accounts, scheduling, payment, news, careers, English.
