# Website requirements — Jade Healing Spa MVP

**Role:** Product / Business Analyst  
**Updated:** 2026-11-04 (local site progress)  
**Status:** BA package owner-approved. The site is built locally. Remaining gaps: ritual steps, Zalo URL, Google listing, About story, hosting.  
**Live copy:** `docs/confirmed-content.md`

This is **our** site. Not a clone of nhaspa.com.vn. Not Jade Spa & Clinic / jadespa.vn.

---

## Observed (research, 2026-11-01)

See the source table in git history of this file / earlier BA refresh. Summary: Facebook page, tax company Jade Nature Care, no Google Business listing found, look-alikes excluded.

## Owner-confirmed (publish)

Jade Healing Spa · CÔNG TY TNHH JADE NATURE CARE · “Chăm sóc · An yên · Chữa lành” · Vietnamese only · address ngách 66/18 · phone 0357050796 · email · 09:00–21:00 daily · Facebook · map pin · parking available · CTAs Facebook + Zalo · planned domain jadehealingspa.com.vn · public prices from the Canva menu.

## Recommendations

- Informational MVP: seven page types. No booking.
- Header: Facebook + Zalo; also `tel:` because the hotline is confirmed. Zalo stays incomplete until a URL is given.
- Services and gallery use the Canva menu and the owner photos already in `assets/spa/`.
- Reviews: link to Google Maps pin; **do not invent or copy other businesses’ reviews**. Prefer embed when owner supplies a Maps place URL.
- Visual design uses those photos and the script mark cut from them.

---

## 1. Goals

Discover the spa, read the confirmed line, browse the Canva menu, see the owner photos, open Maps reviews when a listing exists, then **call, Facebook, Zalo, or visit**.

## 2. Non-goals (MVP)

Booking, payments, accounts, extra backend, English site, medical claims, fake reviews, copying other brands.

## 3. Audience

Guests in Hanoi looking for a wellness spa (Facebook service area).

## 4. MVP pages

| Page | On the local site | Still a labeled gap |
| --- | --- | --- |
| Home | Full-screen moving photo, logo, I3 line, services directory, visit strip | Banner photo is a stand-in. Optional film path is empty |
| About | Name, I3 line, one space photo | Story, team, facilities |
| Services | Massage intents (Thư giãn toàn thân, Trị liệu chuyên sâu, An thần & giấc ngủ), three gội tiers, three combo gói | Short lines are in `lib/service-summaries.ts` |
| Service detail | One tier from `?phut=`: name, price, minutes, room photo, steps from `lib/menu-rituals.ts` when present | Jade Emperor Therapy has no steps (`NEEDS OWNER INPUT`) |
| Gallery | Owner photos from `assets/spa/` | `Unknown-9.jpg` stays unused |
| Reviews | Maps pin link; no quotes | Google place URL / quotes |
| Contact | Confirmed address, hours, phone, email, Facebook, parking, map | Zalo URL |

## 5. Content sources

`docs/confirmed-content.md` · owner files in `assets/` · nhaspa research for IA only.

## 6. Quality bar

Original design; semantic HTML; keyboard; no overflow at 390×844 / ~768 / 1440×1000; no nhaspa or jadespa.vn assets.

## 7. Open questions

`docs/unresolved-questions.md` — still open: ritual steps, S8 category placement, Zalo URL, Google listing URL, About copy, vector logo, hosting.
