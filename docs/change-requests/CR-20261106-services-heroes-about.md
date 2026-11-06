# CR-20261106-services-heroes-about — Dịch vụ lớn, hero các trang, về spa mobile

> **Superseded in part, 2026-11-07.** The home opener is now one full screen. Service covers and the living photos remain. The services list is no longer the large group bands from this request. See `docs/design-guidelines.md`.

| Field | Value |
| --- | --- |
| ID | `CR-20261106-services-heroes-about` |
| Created | 2026-11-06 |
| Owner | Product owner |
| Status | `dev` |
| Branch | *(chưa — chờ gate Design)* |
| Priority | `high` |

## Owner request

**What changes?** (UI / feature / page / journey / content / other)

> 1. Trang Dịch vụ: không chia menu thành 3 mục. Hiển thị từng dịch vụ to, kèm ảnh.
> 2. Mọi trang: thêm ảnh animation trên header, giống trang chủ, cho đẹp và bắt mắt.
> 3. Mobile, trang chủ, mục về spa: lấy **bố cục** của khối “( Về Nhà Spa )” trên https://nhaspa.com.vn — chữ phía trên, ngay dưới là một dải ảnh ngang; bấm next thì trượt sang ảnh tiếp theo.

**Why / success looks like**

> Catalog dịch vụ nhìn thấy từng liệu trình ngay, không phải chọn 3 nhóm trước. Các trang có cùng cảm giác ảnh sống như trang chủ. Trên điện thoại, phần giới thiệu spa đọc được rồi lướt ảnh bằng nút.

**Out of scope**

> Booking, thanh toán, tài khoản. Không copy chữ, ảnh, hay brand của nhaspa. Không đổi menu giá/phút trong `lib/menu.ts`. Không vẽ lại Figma.

**Constraints** (MVP, Vietnamese-only, no booking, brand, etc.)

> Informational, tiếng Việt. Ảnh chỉ từ `public/spa/`. Gap copy = `NEEDS OWNER INPUT`. Giữ `prefers-reduced-motion`.

## Gates (owner only flips these)

| Stage | Result | Date | Notes |
| --- | --- | --- | --- |
| BA plan | `approved` | 2026-11-06 | Owner chốt 3 điểm: chữ cũ, chỉ `/services` đổi, mốc phút ở chi tiết |
| Design proposal | `pending` | | |
| Dev implementation | `pending` | | |
| QA report | `pending` | | |

## BA — evaluation & plan

### Interpretation

Ba thay đổi giao diện trên site đang có. Không thêm dữ liệu kinh doanh mới.

**1. Trang `/services`**

Hiện `ServiceCategoryCards` chỉ render 3 thẻ: Massage, Chăm sóc tóc, Combo. Owner muốn **từng dịch vụ** (11 nhóm trong `lib/menu.ts`) hiện lớn kèm ảnh, link thẳng tới trang chi tiết `servicePath`.

Giữ trang nhóm `/services/[category]` và menu hover 3 cột trên header — owner chỉ nói “trang services”, không bảo bỏ điều hướng theo nhóm.

**2. Ảnh động phía trên mọi trang**

Trang chủ dùng `Scene` + `LivingPhoto` (Ken Burns), header trong suốt đè lên ảnh. Các trang khác header nằm trên nền giấy (`main` có `pt-[4.75rem]`).

“Trên header giống trang chủ” = mỗi trang có một dải ảnh chuyển động ở đầu, header overlay khi đang ở đầu trang. Không phải animation trên thanh menu.

Trang chủ **giữ** hero hiện tại (logo + tagline). Các trang còn lại thêm dải ngắn hơn, vẫn một `h1` của trang.

**3. Mobile — khối giới thiệu trên trang chủ**

Khối hiện tại (desktop + mobile): tiêu đề + 2 câu, cạnh phải là `PhotoReel` tự chạy vô hạn.

Owner muốn **chỉ mobile**: chữ trên, ngay dưới một hàng ảnh ngang, nút next trượt từng ảnh (không tự chạy). Desktop giữ reel hiện tại.

Nhà Spa chỉ là **mẫu bố cục** (chữ rồi slider có next). Không dùng câu, tên liệu trình, hay ảnh của họ.

### In scope / out of scope

| In | Out |
| --- | --- |
| `/services` liệt kê 11 nhóm, ảnh + tên, link chi tiết | Đổi giá, phút, tên trong menu |
| Hero ảnh động các route public | Trang 404 full-screen như home (dải ngắn là đủ) |
| Mobile home: chữ + slider next | Copy marketing mới bịa |
| Nút prev nếu tự nhiên với next; reduced-motion = ảnh tĩnh | Bỏ category pages / mega menu |

### Impacted routes & journeys

- `/services` — catalog phẳng thay 3 thẻ.
- `/`, `/about`, `/services`, `/services/massage`, `/services/cham-soc-toc`, `/services/combo`, `/services/[category]/[slug]`, `/gallery`, `/reviews`, `/contact` — dải ảnh đầu trang (home đã có).
- Home mobile — khối “nhà / về spa”.
- Journey: từ Dịch vụ vào thẳng một liệu trình, không bắt buộc qua trang nhóm. Trang nhóm vẫn mở từ menu header.

### Docs to update

- [x] `docs/acceptance-criteria.md` — khi Dev/QA: AC của CR này
- [ ] `docs/requirements.md` — không, trừ khi owner đổi IA chính thức
- [ ] `docs/sitemap.md` — không (route không đổi)
- [ ] `docs/user-journeys.md` — ghi chú journey catalog phẳng sau khi ship
- [ ] `docs/content-requirements.md` — không
- [ ] `docs/design-guidelines.md` — Designer cập nhật mô tả hero các trang + slider mobile

### `NEEDS OWNER INPUT`

1. **Chữ thêm ở khối mobile.** Site chưa có đoạn giới thiệu dài đã duyệt. BA đề xuất **chỉ xếp lại chữ đang có**, không viết đoạn mới:
   - “Một nhà cho thân, sự nghỉ, và nghi thức.”
   - “Một khoảng gỗ và cây giữa Cầu Giấy.”
   - “Không gian yên để nghỉ. Đây không phải lời hứa chữa bệnh.”
   Nếu owner muốn đoạn dài hơn, gửi câu chữ. Không lấy câu của nhaspa.
2. **Trang chủ, band Dịch vụ (nền cát).** Vẫn là 3 thẻ nhóm. Owner chỉ nói trang `/services`. Giữ 3 thẻ trên home trừ khi owner bảo đổi luôn.
3. **“Từng dịch vụ”** = 11 nhóm menu (Cổ vai gáy, Thư giãn toàn thân, …), không phải từng mốc phút. Mốc phút vẫn ở trang chi tiết.

### Acceptance criteria (draft for this CR)

| ID | Criterion |
| --- | --- |
| S1 | `/services` không còn 3 thẻ nhóm làm nội dung chính. Hiện đủ 11 nhóm trong `menuGroups`, mỗi nhóm có ảnh và tên, bấm vào đúng trang chi tiết. |
| S2 | Ảnh là ảnh spa đã có (`servicePhotos` / `public/spa`). Không ảnh stock, không ảnh nhaspa. |
| S3 | Mọi trang public trừ home có dải ảnh đầu trang dùng chuyển động kiểu `LivingPhoto`. Header trong suốt khi chưa scroll, giống home. |
| S4 | Home hero (logo script + tagline) không bị thay bằng dải trang con. |
| S5 | `prefers-reduced-motion`: ảnh không chạy. |
| M1 | Viewport ~390: chữ phía trên, ngay dưới là nhiều ảnh tự trượt. Không nút Tiếp/Trước. Không copy câu/ảnh nhaspa. Owner xác nhận 2026-11-06, thay tiêu chí “một ảnh + nút next”. |
| M2 | Desktop: cùng reel nhiều ảnh tự trượt. Không nút Tiếp/Trước. |
| G | Không booking. Không số điện thoại/giá mới. Một `h1` mỗi trang. |

### Recommended next step for Designer

Sau khi owner duyệt BA (và chốt 3 mục `NEEDS OWNER INPUT`): mô tả kích thước thẻ dịch vụ, chiều cao dải hero theo trang, và control next/prev của slider mobile — bám `docs/design-guidelines.md` (gỗ, cát, không gradient tím). Rồi dừng cho gate Design.

## Design — review & proposal

Owner locked the BA choices on 2026-11-06, so this is the spec that was built.

- `/services`: two-column grid (one column on a phone). Photo on top, about 240–320px tall, category name in small caps, group name under it. No minute or price on the card.
- Other pages: a living photo about 56svh under the header, dark veil only at the top so the logo stays readable, short fade into paper at the bottom. Home hero unchanged.
- House band, desktop and mobile: existing three sentences, then the drifting multi-photo reel. No Tiếp/Trước. Owner confirmed 2026-11-06; this replaces the earlier one-frame slider.

## Dev — implementation

- `components/service-catalog.tsx` on `/services`. Home still uses `ServiceCategoryCards`.
- `components/page-photo-band.tsx` in the root layout. Header overlay on every page until scroll.
- Home house band uses the drifting photo reel on desktop and mobile.
- Detail pages still switch minutes and prices.

Local check: 11 catalog links go to detail URLs; house reel drifts on desktop and mobile with no Tiếp/Trước; `/about` shows the photo band; Cổ vai gáy still has 40/60/90/120 phút.

## QA — review

2026-11-06, trên `http://localhost:3000`. Báo cáo đầy đủ: `docs/qa-draft-1.md`.

| ID | Kết quả |
| --- | --- |
| S1 | Pass. `/services` liệt kê từng nhóm menu, có ảnh và tên, không phút/giá, link tới trang chi tiết. |
| S2 | Pass. Ảnh từ `public/spa/`. |
| S3 | Pass. Trang con có dải ảnh đầu; header trong suốt khi ở đầu trang. |
| S4 | Pass. Home hero vẫn logo script + tagline. |
| S5 | Pass. `prefers-reduced-motion` tắt reel và đổi sang lưới tĩnh. |
| M1 | Pass. Owner 2026-11-06: không một ảnh + nút Tiếp/Trước. Viewport 390 là chữ trên, nhiều ảnh tự trượt. |
| M2 | Pass. Desktop cùng reel, không nút Tiếp/Trước. |
| G | Pass. Không booking, không số/giá mới, một `h1`. |

Dev gate trên bảng CR vẫn `pending`. QA làm vì owner yêu cầu review draft 1. Không đóng CR.

## Decision log

| Date | Who | Decision |
| --- | --- | --- |
| 2026-11-06 | BA | Plan trên. Chưa implement. |
| 2026-11-06 | Owner | Không dùng một khối ảnh với nút Tiếp/Trước. Giữ animation nhiều ảnh chạy, desktop và mobile. QA-1 đóng. |
