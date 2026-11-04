# Proposed sitemap — Jade Healing Spa

**Status:** these routes are on the local site, 2026-11-04.  
**Language:** Vietnamese  
**Not** the nhaspa sitemap.

---

## Site tree

```
/                       Trang chủ
/about                  Về spa
/services                         Dịch vụ
/services/massage                  Massage
/services/cham-soc-toc             Chăm sóc tóc
/services/combo                    Combo (các gói)
/services/[category]/[slug]        Chi tiết liệu trình
/gallery                Thư viện ảnh
/reviews                Đánh giá
/contact                Liên hệ
```

404 + robots/XML sitemap at release. **Out of MVP:** booking, news, careers, English routes.

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

**Header utilities:** Facebook (https://www.facebook.com/jadehealingspa/) and Zalo (URL **NEEDS OWNER INPUT**). Also `tel:+84357050796`.

**Footer:** nav + legal name CÔNG TY TNHH JADE NATURE CARE · address · phone · email · Facebook · copyright. Domain later: jadehealingspa.com.vn.

---

## Page notes

**Home.** Shorter hero with the script logo and the confirmed line. House block, three service cards, nature banner, gallery frames, visit strip.

**About.** Minimal: name, line, link to Contact. No invented story.

**Services.** Overview of Massage, Chăm sóc tóc, and Combo, then a category page, then `/services/[category]/[slug]`. Steps stay on the detail page.

**Gallery.** Owner photos from `assets/spa/` only. `Unknown-9.jpg` stays unused.

**Reviews.** No quotes on file. Show a “Xem trên Google Maps” link to the confirmed pin. Do not scrape neighbors in ngách 66/18.

**Contact.** Publish confirmed address, hours, phone, email, Facebook, parking note, map.

## Unresolved for IA

Keep `/reviews` in the header even with zero quotes (honest empty + Maps link).
