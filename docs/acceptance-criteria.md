# Acceptance criteria — Jade Healing Spa MVP

**Status:** local site built 2026-11-04. These checks are for QA, which has not started.  
**Copy source:** `docs/confirmed-content.md`

Viewports: 1440×1000, ~768px, 390×844.

---

## Global

| ID | Criterion |
| --- | --- |
| G1 | Header shows the script logo; accessible name **Jade Healing Spa**. Nav: Trang chủ, Về spa, Dịch vụ, Thư viện ảnh, Đánh giá, Liên hệ |
| G2 | Footer may show legal name, ngách address, 0357050796, email, Facebook — nothing invented |
| G3 | Header actions include Facebook and (when URL exists) Zalo; `tel:+84357050796` allowed; never booking |
| G4 | No booking, payment, or login |
| G5 | Unknown paths → original 404 + Home |
| G6 | No nhaspa.com.vn and no jadespa.vn assets or copy |
| G7 | Menu/photos/Zalo/reviews gaps are labeled |
| G8–G13 | Keyboard, no horizontal overflow, no critical console errors, unique title/meta, one `h1`, image alt |

## Home

| ID | Criterion |
| --- | --- |
| H1 | Hero shows the script logo and **Chăm sóc · An yên · Chữa lành** (wellness tone, not medical claims) |
| H2 | Home services are the three category cards only: Massage, Chăm sóc tóc, Combo |
| H3 | No fake photos or fake quotes |
| H4 | No booking widget |

## About

| ID | Criterion |
| --- | --- |
| A1 | `/about` exists |
| A2 | No invented story/team; extras labeled if missing |
| A3 | No clinic/H3/award claims |

## Services

| ID | Criterion |
| --- | --- |
| V1 | Only Canva menu treatments, under Massage, Chăm sóc tóc, and Combo. Detail steps are labeled “Bước mẫu” until real steps arrive |
| V2–V4 | Real slugs only; no invented VND |

## Gallery

| ID | Criterion |
| --- | --- |
| Y1–Y3 | `/gallery` uses owner `assets/spa/` frames only. `Unknown-9.jpg` stays off the site |

## Reviews

| ID | Criterion |
| --- | --- |
| R1 | `/reviews` exists |
| R2 | No quotes unless owner-approved text or a verified Google listing URL |
| R3 | May link Maps pin 21.03320, 105.78426; **must not** show other businesses’ reviews from ngách 66/18 |

## Contact

| ID | Criterion |
| --- | --- |
| K1 | `/contact` in header and footer |
| K2 | Address is the **ngách 66/18** string; hours 09:00–21:00 daily |
| K3 | `tel:+84357050796` |
| K4 | Map uses confirmed pin |
| K5 | Facebook official URL |
| K6 | Parking note allowed (“có chỗ đỗ xe”) |
| K7 | No booking form |
| K8 | Zalo control absent or labeled until URL supplied |

## Technical (before release)

T1–T5 unchanged: TypeScript, production build, ESLint when configured, Playwright smoke, no deploy/merge to `main` without owner approval.
