# Reference sitemap (observed)

Research date: 2026-11-01  
This is a map of pages **visited or clearly linked** during Playwright sessions. It is not a complete crawl of the domain.

## Observed facts

### Confirmed working pages (visited)

| Role on reference site | URL | Notes |
| --- | --- | --- |
| Home | https://nhaspa.com.vn/ | Long scrolling marketing page |
| About / locations | https://nhaspa.com.vn/gioi-thieu/ | Nav “Cơ sở” resolves here |
| Services overview | https://nhaspa.com.vn/dich-vu/ | Categories + featured combos |
| Category: massage | https://nhaspa.com.vn/danh-muc-san-pham/massage/ | |
| Category: hair / scalp | https://nhaspa.com.vn/danh-muc-san-pham/cham-soc-toc/ | |
| Category: skin | https://nhaspa.com.vn/danh-muc-san-pham/cham-soc-da/ | |
| Category: combo | https://nhaspa.com.vn/danh-muc-san-pham/combo/ | |
| Combo detail | https://nhaspa.com.vn/combo-2-cham-soc-toan-than-tai-tao-nang-luong/ | |
| Combo detail | https://nhaspa.com.vn/combo-1-cham-soc-da-dau-chuyen-sau-lam-dep-thu-gian/ | |
| Treatment detail | https://nhaspa.com.vn/massage-body/ | Individual service template |
| News index | https://nhaspa.com.vn/tin-tuc/ | Out of our MVP unless owner wants a journal |
| Careers | https://nhaspa.com.vn/tuyen-dung/ | Out of our MVP |
| Contact | https://nhaspa.com.vn/lien-he/ | Title + footer in capture; little contact body |
| Editorial | https://nhaspa.com.vn/nha-spa-dia-diem-thu-gian-minh-bach-giua-long-ha-noi/ | Story page |

### Linked from homepage but not all visited

From `research/link-dump.json` (same-origin). Listed as **linked**, not audited in full:

- https://nhaspa.com.vn/combo-3-cham-soc-da-chuyen-sau/
- https://nhaspa.com.vn/goi-dau-tinh-luon-duong-sinh/
- https://nhaspa.com.vn/sach-sau-cap-am-2/
- https://nhaspa.com.vn/massage-chan/
- Several `/tin-tuc/` article URLs
- WordPress media under `/wp-content/uploads/` (platform signal only; do not reuse files)

### Visited URLs that 404

| Guessed slug | Result |
| --- | --- |
| https://nhaspa.com.vn/co-so/ | Page Not Found |
| https://nhaspa.com.vn/dat-lich/ | Page Not Found |

### Page types **not** found as standalone URLs

- Dedicated gallery
- Dedicated reviews / testimonials index
- Working standalone booking page at `/dat-lich/`

Those functions appear as **homepage or detail-page modules** (photo grids, Google-style reviews, in-page booking CTA).

## Interpretations

URL patterns (`gioi-thieu`, `dich-vu`, `danh-muc-san-pham/{category}`, treatment slugs, `lien-he`, `tin-tuc`) match a typical Vietnamese spa marketing site on WordPress.

The information architecture is **catalog-heavy**: home → category → treatment or combo detail. Location proof lives on About. Trust proof (reviews, press, photos) lives mainly on Home.

## Recommendations

For Jade Healing Spa MVP, use a **shorter** tree:

1. Home  
2. About  
3. Services (overview)  
4. Service detail (one template, many pages)  
5. Gallery (only if we have real photos)  
6. Reviews (only if the owner supplies publishable reviews)  
7. Contact / location  

Do **not** copy their category names, combo names, or slugs. Skip News, Careers, multi-language, and booking until the owner asks.

## Unresolved questions

- Single location or multiple branches for our spa?
- Public prices on detail pages, or contact-to-ask?
- Whether we need a news/journal at all.
