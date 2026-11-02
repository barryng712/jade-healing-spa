# Design — theo user journey

**Status:** owner approved 2026-11-02 for implementation. Preview: `docs/design-preview.html`.  
**Not Figma.** Starter plan cannot have the agent draw on canvas.  
**Not a clone** of nhaspa.com.vn, kimhealingspa.vn, or H3 Group.

Sources used only for rhythm and materials:

- nhaspa research: long photo page, catalog, then contact. We do not copy their cream/green identity.
- Kim's Healing Spa (observed 2026-11-02): slow editorial page, service groups, space, no booking on our MVP.
- H3 project page https://h3group.com.vn/du-an/jade-healing-spa/ : interior style named **Mộc** (wood ceiling, plants, arched glass, curved seat, round wood stools). Do not publish their renders, 105 m², or “Duy Tân” as our address.

Live words stay in `docs/confirmed-content.md`.

---

## Design kit (starting point — change later in code)

| Token | Start value | Why |
| --- | --- | --- |
| Paper | `#F4F0E8` | Warm floor / daylight, not stark white |
| Ink | `#1C1915` | Near-black text |
| Wood | `#5C4636` | Buttons and rules, from dark timber |
| Moss | `#3F4A3A` | Small accents only (plants), not a full green theme |
| Line | `#E4DCD0` | Dividers |
| Display | A serif with Vietnamese (e.g. Fraunces or Source Serif) | Quiet titles |
| Body | A sans with Vietnamese (e.g. Be Vietnam Pro) | Reading |
| Space | 8px steps; sections 80px desktop / 48px mobile | Not cramped cards |
| Motion | Slow fade and a slight image settle on scroll. Honor reduced-motion. | Owner asked 2026-11-02 for full-bleed scenes, closer to the reference site’s rhythm |

Do not use purple gradients, glass cards, or a grid of identical rounded cards.

Photos: full-bleed, real spa files from `assets/spa/` when the owner adds them. Until then, a labeled frame: **Ảnh sẽ được thay bằng ảnh spa**.

---

## Chrome (every page)

**Header.** Left: wordmark “Jade Healing Spa” (logo file replaces it). Center/right links: Trang chủ, Về spa, Dịch vụ, Thư viện ảnh, Đánh giá, Liên hệ. Utilities: Gọi `0357050796`, Facebook. Zalo only after a URL exists.

**Mobile.** Same links in a menu that opens and closes. Phone is a large tap target.

**Footer.** Legal name CÔNG TY TNHH JADE NATURE CARE, address, hours, phone, email, Facebook, nav. No booking.

---

## Journey 1 — Bước vào (Home `/`)

Guest should know the place in one screen, then choose a service or how to visit.

| Band | What they see |
| --- | --- |
| 1. Hero | Full-width interior. Name. Line: **Chăm sóc · An yên · Chữa lành**. Buttons: Gọi điện, Facebook. |
| 2. Quiet line | One short sentence that this is a wood-and-plant spa in Cầu Giấy. No medical claim. No invented story. |
| 3. Four sample services | Horizontal on desktop, stacked on mobile. Each: image frame, name, two lines, “Xem chi tiết”. Banner above the row: **Dịch vụ minh họa — menu thật sẽ thay sau**. |
| 4. Space | Two or three image frames linking to Gallery. |
| 5. Visit strip | Address, 09:00–21:00, có chỗ đỗ xe, link Liên hệ. |

No booking button. No fake reviews on Home.

---

## Journey 2 — Spa là ai (About `/about`)

| Block | Content |
| --- | --- |
| Title | Về Jade Healing Spa |
| Line | Chăm sóc · An yên · Chữa lành |
| Body | Labeled gap: **Câu chuyện sẽ được bổ sung**. Do not invent a founder story. |
| Space note | One sentence: không gian gỗ và cây (from the interior direction), not square meters or Duy Tân. |
| Next | Link to Liên hệ and Dịch vụ. |

---

## Journey 3 — Chọn liệu trình (`/services` and `/services/[slug]`)

These four items are **placeholders**. They are not the real menu and have **no prices**.

| Slug | Name | Short description (placeholder) |
| --- | --- | --- |
| `goi-dau-thu-gian` | Gội đầu thư giãn | Gội và massage da đầu trong không gian yên. Thời lượng và giá sẽ cập nhật theo menu. |
| `massage-body` | Massage body | Massage toàn thân để thư giãn. Không mô tả công dụng y khoa. |
| `cham-soc-da-mat` | Chăm sóc da mặt | Làm sạch và dưỡng da nhẹ. Không hứa kết quả điều trị. |
| `combo-nghi-ngan` | Combo nghỉ ngắn | Một buổi kết hợp ngắn. Nội dung combo sẽ thay khi có menu. |

**Overview.** Page title “Dịch vụ”. Notice that the list is illustrative. Each row is image + name + description + link. Not a dense card grid.

**Detail.** Breadcrumb. Name. Placeholder description. Image frame. Facts row hidden until duration/price exist. Buttons: Gọi điện, Facebook. Related: the other three placeholders.

---

## Journey 4 — Xem không gian (`/gallery`)

A simple masonry or two-column grid. Empty state text: **Ảnh spa sẽ được thêm khi chủ spa gửi file.** No stock interiors. No H3 renders.

When files exist in `assets/spa/`, show them with alt text the owner supplies (or “Không gian Jade Healing Spa”).

---

## Journey 5 — Lời khách (`/reviews`)

No invented quotes. No stars.

Text: chưa có đánh giá được phép đăng. Link **Xem vị trí trên Google Maps** to `https://www.google.com/maps?q=21.03320,105.78426`. When the owner sends a real place URL, switch the link to that listing only.

---

## Journey 6 — Đến hoặc nhắn (`/contact`) — nơi kết thúc

| Field | Show |
| --- | --- |
| Address | Số 2 ngách 66/18 Dịch Vọng Hậu, Cầu Giấy, Hà Nội |
| Hours | 09:00–21:00, thứ Hai–Chủ nhật |
| Phone | 0357050796, `tel:` link |
| Email | jadehealingspa@gmail.com |
| Facebook | https://www.facebook.com/jadehealingspa/ |
| Map | Pin 21.03320, 105.78426 |
| Parking | Có chỗ đỗ xe |
| Zalo | Hidden until URL, or a labeled gap |

No form required for MVP. No calendar.

---

## Desktop and mobile

- Desktop artboard 1440. Content column about 1120.
- Mobile 390. One column. Hero still large. Menu is a real open/close panel.
- No horizontal scroll.

## Out of this design

Booking, payments, accounts, English, news, careers, medical claims, copied nhaspa/Kim/H3 assets.
