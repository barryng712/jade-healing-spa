# Confirmed content (live-site source of truth)

**Owner answers:** `docs/unresolved-questions.md` on 2026-11-01  
**Language of the site:** Vietnamese only

Use this file for later design and development. Do not invent extra facts. Do not copy nhaspa or jadespa.vn.

---

## Identity

| Field | Value |
| --- | --- |
| Display name | Jade Healing Spa |
| Legal name (footer) | CÔNG TY TNHH JADE NATURE CARE |
| Tax code | 0111355336 |
| Hero / positioning line | Chăm sóc · An yên · Chữa lành |
| Tone | Wellness / care. **Not** a medical-efficacy claim |

## Contact (publish)

| Field | Value |
| --- | --- |
| Address | Số 2 ngách 66/18 Dịch Vọng Hậu, Cầu Giấy, Hà Nội |
| Phone | 0357050796 (`tel:+84357050796`) |
| Email | jadehealingspa@gmail.com |
| Hours | 09:00–21:00, Monday–Sunday |
| Facebook | https://www.facebook.com/jadehealingspa/ |
| Map | Facebook pin 21.03320, 105.78426 — e.g. https://www.google.com/maps?q=21.03320,105.78426 |
| Parking | Có chỗ đỗ xe (short note only; no extra directions supplied) |
| Domain (planned) | jadehealingspa.com.vn (not live; no deploy yet) |

## Primary CTAs

Header/contact actions: **Facebook** and **Zalo**.

**Zalo URL still missing.** Do not invent `zalo.me/...`. Until the owner pastes a Zalo link (or confirms Zalo = 0357050796), show Facebook + `tel:` and a labeled Zalo gap, or ask again before launch.

## Not for the live site (unless owner later says yes)

- Tax-only street string “Số 2 phố Dịch Vọng Hậu, tổ 16…” as the public address (Facebook alley string won)
- H3 Group 105 m² / investment
- Traditional-medicine clinic wording from tax codes
- Legal representative’s personal name
- Look-alike spas
- Booking widgets

## Deferred (labeled placeholders on the site)

| Item | Owner note |
| --- | --- |
| Service menu | Owner Canva “MEMU TỔNG JADE”, 2026-11-02. Vietnamese names, minutes, and prices are in `lib/menu.ts`. Do not invent extra items or prices. **Step lists are still empty** — do not write ritual steps. Jade Emperor Therapy has no Vietnamese name on that page. |
| Photography | Owner files are in `assets/spa/` and published from `public/spa/`. `Unknown-9.jpg` is unused. Service photos are rooms and the herb tray, not confirmed photos of a specific ritual. The home banner picture is a stand-in. |
| Logo | Script mark cut from the logo already on the spa photos: `public/spa/logo-mark.png`. Cream on the dark hero, wood `#5C4636` on paper. A separate vector file is still open. |
| About story / team | Not supplied |
| Google Maps reviews | Owner wants them shown. **No GBP/reviews found** for this name on 2026-11-01. Do not quote other businesses. Link/embed Maps when a real listing URL exists; until then Reviews = labeled empty + optional Maps pin link |
| Hosting | Not chosen; Vercel remains a candidate only |
