# CR-20261109-massage-intent-regroup — Nhóm Massage: đổi tên & danh sách intent

| Field | Value |
| --- | --- |
| ID | `CR-20261109-massage-intent-regroup` |
| Created | 2026-11-09 |
| Owner | barryng712 |
| Status | `dev` |
| Branch | `feat/` (khi Dev bắt đầu) |
| Priority | `high` |

## Owner request

**What changes?** Đổi ba nhóm Massage trên trang chủ và ba trang intent; URL slug mới; nội dung card/tier khác logic hiện tại (theo nhóm menu, không còn lọc theo phút toàn category).

**Why / success looks like**

Khách thấy tên nhóm rõ theo spa: Thư giãn toàn thân, Trị liệu chuyên sâu, An thần & giấc ngủ. Mỗi trang intent liệt kê đúng gói menu, giá và phút từ `lib/menu.ts`, với quy tắc “xem chi tiết” / không link như owner mô tả.

**Out of scope**

- Booking, thanh toán, tài khoản
- Đổi giá / tên tier trên menu Canva (chỉ dùng sẵn có)
- Redesign visual system (giữ card / intent row hiện tại)

**Constraints**

- Informational MVP, tiếng Việt
- Nguồn giá & phút: `lib/menu.ts`; bước ritual: `lib/menu-rituals.ts`

## Gates (owner only flips these)

| Stage | Result | Date | Notes |
| --- | --- | --- | --- |
| BA plan | `approved` | 2026-11-09 | Owner: tier than-* có detail; cham-soc display-only |
| Design proposal | `approved` | 2026-11-09 | Owner waived Design — “dev implement” |
| Dev implementation | `pending` | | |
| QA report | `pending` | | |

## BA — evaluation & plan

### Interpretation (observed facts vs owner message)

**Hiện trạng (code):**

| Vị trí | Hiện tại |
| --- | --- |
| Home Massage — 3 offer cards | `lib/service-journeys.ts` L25–28: **Thư giãn** → `/services/massage/nhom/thu-gian`; **Phục hồi** → `phuc-hoi`; **Trị liệu** → `tri-lieu`. Giá/phút gom theo filter phút 40–60 / 90 / 120 trên **toàn** category massage. |
| Trang intent | `app/services/[category]/nhom/[intent]/page.tsx` — `generateStaticParams` cho `thu-gian`, `phuc-hoi`, `tri-lieu`. |
| Intent rows | `rowsForMassageIntent()` — mọi group massage có tier đúng phút đều xuất hiện. |
| Menu (facts) | `thu-gian-toan-than`: than-60/90/120; `co-vai-gay`, `lung-eo`, `lung-hong-chan`; `an-than-giac-ngu`: ngu-60/90/120/150; `cham-soc-theo-nhu-cau` (combo): nhu-cau-90 (890 000₫), nhu-cau-120. |

**Owner muốn:**

| # | Nhóm (tên mới) | URL intent (`/services/massage/nhom/…`) | Nội dung trang |
| --- | --- | --- | --- |
| 1 | **Thư giãn toàn thân** | `thu-gian-toan-than` | Ba row tier **than-60**, **than-90**, **than-120** — **có** link chi tiết từng tier (`?phut=`). Thêm card **chăm sóc theo nhu cầu**: **Từ 890 000₫**, **Từ 90 phút** — **chỉ hiển thị, không bấm được**. |
| 2 | **Trị liệu chuyên sâu** | `tri-lieu-chuyen-sau` | **Ba** card slug **co-vai-gay**, **lung-eo**, **lung-hong-chan**. Mỗi card: **Từ** giá/phút min của slug đó. Bấm card → **trang chi tiết đúng slug** (một URL, list đủ tier trên detail như hiện tại). |
| 3 | **An thần & giấc ngủ** | `an-than-giac-ngu` | Bốn card tier **ngu-60**, **ngu-90**, **ngu-120**, **ngu-150** (group `an-than-giac-ngu`). |

**Redirect (khuyến nghị BA):** `thu-gian` → `thu-gian-toan-than`; `phuc-hoi` → `tri-lieu-chuyen-sau`; `tri-lieu` → `an-than-giac-ngu` (301 trong `next.config.ts`).

### In scope / out of scope

| In scope | Out of scope |
| --- | --- |
| Đổi tên & href 3 card Massage home (`ServiceDirectory` / `massageIntents`) | Sửa menu Canva / thêm tier mới |
| Slug intent mới + `generateStaticParams` + metadata `h1` | Đổi layout intent row (trừ non-link row nếu Design duyệt) |
| Builder riêng cho từng intent (thay `rowsForMassageIntent` filter phút) | Booking |
| Variant row không click (than-*) hoặc card group (cham-soc, 3 slug trị liệu) | Đổi nhóm Gội |
| **Combo home/`/services`:** bỏ card **chăm sóc theo nhu cầu**; bỏ card **An thần 150'** inject từ massage (owner 2026-11-09) | |
| Redirect URL cũ | Header mega-menu copy nếu chưa sync tên (cùng CR) |
| Cập nhật `docs/sitemap.md`, `user-journeys.md`, summaries intent | |

### Impacted routes & journeys

| Route | Thay đổi |
| --- | --- |
| `/` | 3 card Massage: title + link intent |
| `/services/massage/nhom/thu-gian-toan-than` | **Mới** (thay `thu-gian`) |
| `/services/massage/nhom/tri-lieu-chuyen-sau` | **Mới** (thay `phuc-hoi`) |
| `/services/massage/nhom/an-than-giac-ngu` | **Mới** (thay `tri-lieu`) |
| `/services/massage/nhom/{thu-gian,phuc-hoi,tri-lieu}` | Redirect 301 |
| Header nav Massage columns | URL + nhãn intent ( `header.tsx` ) |

**Giá/phút tham chiếu từ menu (facts, không bịa):**

| Slug | Từ (giá) | Từ (phút) |
| --- | --- | --- |
| thu-gian-toan-than | 590 000₫ (than-60) | 60 |
| cham-soc-theo-nhu-cau | 890 000₫ (nhu-cau-90) | 90 |
| co-vai-gay | 410 000₫ (co-40) | 40 |
| lung-eo | 590 000₫ (lung-60) | 60 |
| lung-hong-chan | 690 000₫ (hong-60) | 60 |

### Docs to update

- [x] BA trong CR này
- [ ] `docs/sitemap.md` — intent URLs & mô tả
- [ ] `docs/user-journeys.md` — journey Massage
- [ ] `docs/design-guidelines.md` — mục Massage intent (L166 area)
- [ ] `docs/acceptance-criteria.md` — nếu có AC massage cũ
- [ ] `lib/service-summaries.ts` — `intentSummaries` keys/nội dung cho 3 id mới

### Owner clarifications (2026-11-09)

| # | Câu hỏi | Owner |
| --- | --- | --- |
| 1 | Số card `tri-lieu-chuyen-sau` | **3 card** (co-vai-gay, lung-eo, lung-hong-chan). |
| 2 | Link chi tiết | Mỗi card → **trang chi tiết cùng slug** (co-vai-gay / lung-eo / lung-hong-chan), trên detail hiển thị **đủ tier** của slug đó (pattern `servicePath(group)` hiện có). |
| 3 | ngu-150 vs Combo home | **Bỏ** card An thần 150' khỏi band Combo (không còn inject `an-than-giac-ngu` 150 trong `comboOffers()`). |
| 4 | Chăm sóc theo nhu cầu | **Bỏ** khỏi band Combo home & `/services`; chỉ còn trên intent **thu-gian-toan-than** (+ detail combo khi guest đi sâu). |
| 5 | than-* vs cham-soc | **than-60/90/120:** **có** xem chi tiết **từng tier** (link như intent row hiện tại). **Chăm sóc theo nhu cầu:** **không** bấm — chỉ hiển thị thông tin. |

### `NEEDS OWNER INPUT`

_(Đã đủ cho Dev sau khi owner approve BA gate.)_

### Acceptance criteria (draft)

**Home — Massage band**

- [ ] AC1: Ba card hiển thị đúng tên: **Thư giãn toàn thân**, **Trị liệu chuyên sâu**, **An thần & giấc ngủ**.
- [ ] AC2: Href lần lượt: `/services/massage/nhom/thu-gian-toan-than`, `tri-lieu-chuyen-sau`, `an-than-giac-ngu`.
- [ ] AC3: Giá “Từ …” / phút trên card home vẫn lấy từ menu theo quy tắc mới (BA/Dev định nghĩa trong `service-journeys.ts`; không invent).

**Intent `thu-gian-toan-than`**

- [ ] AC4: Hiển thị đúng 3 tier than-60, than-90, than-120 (tên, giá, phút từ menu).
- [ ] AC5: Ba tier than-* link tới `thu-gian-toan-than` + `?phut=` đúng tier (pattern hiện tại).
- [ ] AC6: Card **Chăm sóc theo nhu cầu** — **Từ 890 000₫**, **Từ 90 phút**; **không** link / không navigate.

**Intent `tri-lieu-chuyen-sau`**

- [ ] AC7: Có card cho co-vai-gay, lung-eo, lung-hong-chan.
- [ ] AC8: Mỗi card hiển thị **Từ** giá & **Từ** phút = minimum tier của **slug đó** (bảng facts trên).
- [ ] AC9: Mỗi card slug → `/services/massage/{slug}` (chi tiết đủ tier của slug đó).

**Intent `an-than-giac-ngu`**

- [ ] AC10: Bốn row/card ngu-60, ngu-90, ngu-120, ngu-150 — giá & phút khớp menu; link detail `?phut=` như pattern hiện tại (trừ khi owner đổi).

**Combo band (home + `/services`)**

- [ ] AC13: Band Combo **không** còn card **Chăm sóc theo nhu cầu**.
- [ ] AC14: Band Combo **không** còn card ritual **150 phút** tách từ `an-than-giac-ngu`.

**Routing & SEO**

- [ ] AC11: URL intent cũ 301 sang slug mới.
- [ ] AC12: `generateMetadata` `h1` khớp tên nhóm mới.

### Recommended next step for Designer

- Xác nhận UI **non-link intent row** (than-*) — có giữ layout `IntentRows` nhưng `<div>` thay `<Link>`, hoặc nút disabled?
- Xác nhận card **group** (3 slug trị liệu): một row với “Từ …” vs tier row — owner mô tả dạng **card theo slug**, không phải từng tier.
- Không đổi token; chỉ mapping nội dung.

## Design — review & proposal

*(Chờ owner approve BA)*

## Dev — implementation

*(Chờ Design gate)*

## QA — review

*(Chờ Dev gate)*
