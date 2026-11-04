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
| Motion | Hero image drifts slowly. The home house photos slide right to left. Other photos drift a little inside their frame. Text fades in once. Honor reduced-motion. | The home hero is shorter than the screen. |
| Sand | `#E9DCC8` | Home services band, from plaster and linen in the spa photos |

Do not use purple gradients, glass cards, or a pale green page wash.

Photos: real spa files from `assets/spa/`, published from `public/spa/`. `Unknown-9.jpg` stays unused.

---

## Chrome (every page)

**Header.** Left: the script mark cut from the logo already on the spa photos (`public/spa/logo-mark.png`). Cream on the home hero, wood `#5C4636` on paper. Center/right links: Trang chủ, Về spa, Dịch vụ, Thư viện ảnh, Đánh giá, Liên hệ. Hovering Dịch vụ opens Massage, Chăm sóc tóc, and Combo, with the menu items under each. Utilities: Gọi `0357050796`, Facebook. Zalo only after a URL exists.

**Mobile.** Same links in a menu that opens and closes. Under Dịch vụ, the three categories are links. Phone is a large tap target.

**Footer.** Legal name CÔNG TY TNHH JADE NATURE CARE, address, hours, phone, email, Facebook, nav. No booking.

---

## Journey 1 — Bước vào (Home `/`)

Guest should know the place in one screen, then choose a service or how to visit.

| Band | What they see |
| --- | --- |
| 1. Hero | Shorter than the screen, so the next band can show. The script logo, not a typed name. Line: **Chăm sóc · An yên · Chữa lành**. Buttons: Gọi điện, Facebook. |
| 2. House | Paper. Text on the left: working title **Một nhà cho thân, sự nghỉ, và nghi thức.** Then the wood-and-plant sentence. Right: at least three spa photos, corners slightly rounded, drifting right to left. No medical claim. |
| 3. Menu index | Sand band `#E9DCC8`, from the linen and plaster in the spa photos, not a green wash. Three compact cards. |
| 4. Banner | Short full-bleed photo with **Từ gỗ, cây và nước.** Picture is a layout stand-in (`soaking-hall`) until the owner picks another. |
| 5. Space | Two or three contained image frames linking to Gallery. |
| 6. Visit strip | Moss band. Address, 09:00–21:00, có chỗ đỗ xe, link Liên hệ. |

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

## Journey 3 — Chọn liệu trình (`/services`, `/services/[category]`, `/services/[category]/[slug]`)

Owner menu is the Canva file “MEMU TỔNG JADE” (2026-11-02). The site uses the **Vietnamese** names, minutes, and prices. The printed sheet is two price columns. The website is not that sheet. A reference service page may suggest a two-column detail (picture beside the process). Do not copy its wording, prices, ratings, or photos.

**Categories (owner, 2026-11-03).** Hover Dịch vụ: Massage, Chăm sóc tóc, Combo. Combo means gói. Each gói, and each minute mark inside a group, is its own liệu trình.

- Massage: Cổ vai gáy, Thư giãn toàn thân, Chăm sóc lưng – eo, Chăm sóc lưng – hông – chân. An thần & giấc ngủ is placed here until the owner says otherwise.
- Chăm sóc tóc: Gội dưỡng sinh an thần only. Do not invent more hair services.
- Combo: Nghi Thức Thải Độc Ấm Tử Cung, Dưỡng Sinh Nhuận Tràng Thải Độc Vùng Bụng, Đả Thông Kinh Lạc Nâng Cơ Mặt, Jade Emperor Therapy, each on its own page. Chăm sóc theo nhu cầu (two gói, 90 and 120) sits here until the owner says otherwise.

**Rule.** Switching minutes replaces the ritual name, price, and step list. The photo stays. Minutes stay the real marks from the menu: cổ vai gáy includes 40; giấc ngủ and Jade Emperor include 150; lưng – eo is 60/90; chăm sóc theo nhu cầu is 90/120. A single-duration gói shows that one mark.

**Overview.** Home and `/services` show the same three cards. They do not list every ritual. Card radius stays small (16px card, 12px photo), flat, no shadow. A category page lists only that group’s rituals, each with a small rounded still and “Xem chi tiết”. Full step lists stay on the ritual page.

**Detail.** Breadcrumb, then one band. Wide screens: the room photo fills the left and ends level with the steps. From 9 steps the list is two columns, so about ten lines stay beside the photo instead of dragging the page down. If the list is taller than the screen, the photo stays and the steps scroll in the right side, with no blank well under the picture. Phone: a short photo, then the ritual underneath. The photo is the room, not that treatment.

**Still empty:** the ordered steps for every tier. The detail page shows ten labeled layout lines (`Bước mẫu`) until the owner sends the real sequence. Do not treat those lines as ritual copy. Jade Emperor Therapy has no Vietnamese name on the Vietnamese Canva page.

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
