# Sitemap — Jade Healing Spa

**Status:** these routes are on the local site, 2026-11-07.  
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
/services/massage/nhom/thu-gian            Tầng 40 và 60 phút
/services/massage/nhom/phuc-hoi            Tầng 90 phút
/services/massage/nhom/tri-lieu            Tầng 120 phút
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

**Dịch vụ menu:** Massage → Thư giãn, Phục hồi, Trị liệu. Gội đầu dưỡng sinh → the three tier names. Combo → each gói, plus Đại Nghi Thức Ngủ Sâu Toàn Thân.

**Header utilities:** Facebook (https://www.facebook.com/jadehealingspa/) and Zalo (URL **NEEDS OWNER INPUT**). Also `tel:+84357050796`.

**Footer:** nav + legal name CÔNG TY TNHH JADE NATURE CARE · address · phone · email · Facebook · copyright. Domain later: jadehealingspa.com.vn.

---

## Page notes

**Home.** Full-viewport moving photo, then house, services, banner, gallery, visit strip. Optional film path is `heroVideoSrc` (empty).

**About.** Minimal: name, line, link to Contact. No invented story.

**Services.** Three card sections. Massage intents open a tier list. Gội and the 150-minute sleep ritual open `?phut=`. Other combo cards open the gói page. Steps stay on the detail page, for the selected minute only.

**Gallery.** Owner photos from `assets/spa/` only. `Unknown-9.jpg` stays unused.

**Reviews.** No quotes on file. Show a “Xem trên Google Maps” link to the confirmed pin. Do not scrape neighbors in ngách 66/18.

**Contact.** Publish confirmed address, hours, phone, email, Facebook, parking note, map.

## Unresolved for IA

Keep `/reviews` in the header even with zero quotes (honest empty + Maps link).
