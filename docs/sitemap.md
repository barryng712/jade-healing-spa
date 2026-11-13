# Sitemap — Jade Healing Spa

**Status:** these routes are on the local site (`staging`), 2026-11-13.  
**Language:** Vietnamese  
**Not** a reference-site sitemap.

---

## Site tree

```
/                                          Trang chủ
/about                                     Về spa
/services                                  Dịch vụ (Massage, Gội, Combo)
/services/massage                          Chỉ mục massage
/services/cham-soc-toc                     Chỉ mục gội
/services/combo                            Chỉ mục combo
/services/massage/nhom/thu-gian-toan-than  Thư giãn toàn thân (than-60/90/120 + chăm sóc theo nhu cầu, chỉ hiện)
/services/massage/nhom/tri-lieu-chuyen-sau Trị liệu chuyên sâu (cổ vai gáy, lưng eo, lưng hông chân)
/services/massage/nhom/an-than-giac-ngu    An thần & giấc ngủ (ngu-60/90/120/150)
/services/[category]/[slug]                Chi tiết một nhóm
/services/[category]/[slug]?phut=          Đúng một mốc phút
/gallery                                   Thư viện ảnh
/reviews                                   Đánh giá
/contact                                   Liên hệ
```

`nhom` is a static segment. It must not be treated as a service slug. 404 + robots/XML sitemap at release. **Out of MVP:** booking, news, careers, English routes.

---

## Navigation

| Label | Target |
| --- | --- |
| Trang chủ | `/` |
| Về spa | `/about` |
| Dịch vụ | `/services` |
| Thư viện ảnh | `/gallery` |
| Đánh giá | `/reviews` |
| Liên hệ | `/contact` |

**Dịch vụ menu:** Massage → Thư giãn toàn thân, Trị liệu chuyên sâu, An thần & giấc ngủ. Gội đầu dưỡng sinh → the three tier names. Combo → the three gói (thải độc ấm tử cung, nhuận tràng, nâng cơ mặt). Jade Emperor Therapy and Chăm sóc theo nhu cầu are not in that menu. Old intent URLs `thu-gian`, `phuc-hoi`, and `tri-lieu` redirect.

**Header utilities:** Facebook (https://www.facebook.com/jadehealingspa/) and Zalo (URL **NEEDS OWNER INPUT**). Also `tel:+84357050796`.

**Footer:** nav + legal name CÔNG TY TNHH JADE NATURE CARE · address · phone · email · Facebook · copyright. Domain later: jadehealingspa.com.vn.

---

## Page notes

**Home.** Full-viewport moving photo, then house, services, banner, gallery, visit strip. Optional film path is `heroVideoSrc` (empty).

**About.** Minimal: name, line, link to Contact. No invented story.

**Services.** Three card sections. Thư giãn and An thần open a tier list (`?phut=`). Trị liệu opens one row per group. Gội cards open `?phut=`. Combo cards are the three gói pages. The 150-minute sleep ritual is ngu-150 on An thần, not a combo card. Steps stay on the detail page, for the selected minute, from `lib/menu-rituals.ts` when that tier has them.

**Gallery.** Owner photos from `assets/spa/` only. `Unknown-9.jpg` stays unused.

**Reviews.** No quotes on file. Show a “Xem trên Google Maps” link to the confirmed pin. Do not scrape neighbors in ngách 66/18.

**Contact.** Publish confirmed address, hours, phone, email, Facebook, parking note, map.

## Unresolved for IA

Keep `/reviews` in the header even with zero quotes (honest empty + Maps link).
