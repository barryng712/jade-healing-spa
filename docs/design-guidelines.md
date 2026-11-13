# Design — theo user journey

**Status:** foundation palette and type scale owner approved 2026-11-06. The live journeys below match the local site on `staging` (2026-11-13). `docs/design-preview.html` is an older drawing (sand band, old type). The Next.js site is the source of truth.  
**Not Figma.** Starter plan cannot have the agent draw on canvas.  
**Not a clone** of nhaspa.com.vn, kimhealingspa.vn, or H3 Group.

Sources used only for rhythm and materials:

- nhaspa research: long photo page, catalog, then contact. We do not copy their cream/green identity.
- Kim's Healing Spa (observed 2026-11-02): slow editorial page, service groups, space, no booking on our MVP.
- H3 project page https://h3group.com.vn/du-an/jade-healing-spa/ : interior style named **Mộc** (wood ceiling, plants, arched glass, curved seat, round wood stools). Do not publish their renders, 105 m², or “Duy Tân” as our address.

Live words stay in `docs/confirmed-content.md`.

---

## Bộ thông số nền tảng

Owner, 2026-11-06. This replaces the 2026-11-02 kit (Paper `#F4F0E8`, Ink `#1C1915`, Wood `#5C4636`, Moss `#3F4A3A`, Sand `#E9DCC8`, Fraunces, Be Vietnam Pro) wherever they disagree. Offer-card bottoms stay 4px; top corners match the house sheet. The 16px radius is only the massage intent rows (owner, 2026-11-07). Do not use purple gradients, glass cards, or a pale green page wash.

### Color palette

| Token | Hex | Use |
| --- | --- | --- |
| Forest | `#263B32` | Body text, headings, primary CTA fill, dark bands (visit strip, footer if dark) |
| Sage | `#78846B` | 1px rules, chip borders, icons. Not body copy |
| Sand | `#E9E2D5` | Token remains. The services index is Ivory, not a sand band. |
| Ivory | `#F8F6F0` | Page background, text on Forest, primary button label |
| Bronze | `#AD9066` | 1px accent rules and icon strokes only |
| Jade band | Dark moss (Forest-deep + Forest/Sage) | Home services (`bg-jade-band` + tiled moss grain). Adjust in `app/globals.css` |

Contrast on Ivory `#F8F6F0` (WCAG): Forest **11.08:1** (body and UI). Sage **3.66:1** (fails body 4.5:1; large text only, so do not set paragraphs or nav in Sage). Bronze **2.79:1** (fails text and button labels). Ivory on a Bronze fill is the same **2.79:1** — do not make a Bronze button. Bronze on Forest is **3.97:1**: large lines only, not small labels. Forest on Sand is **9.30:1**. Ivory on Forest is **11.08:1**.

### UI characteristics

- Border radius **4px** on buttons and the bottom of offer cards. Gallery and room frames stay **2px**. Owner override 2026-11-07: massage intent rows are **16px** so the photo sits inside the border, the detail photo is **6px**, and offer-card top corners match the house sheet (**28px**, **40px** from `md`). Do not put the 16px radius back on every photo.
- Wide whitespace. Sections stay airy. An 8px step inside a block.
- High-quality photos. Prefer real spa files from `assets/spa/`, published from `public/spa/`. `Unknown-9.jpg` stays unused.
- Light motion only: the home photo drifts, the house reel slides right to left, sections fade in once as they enter. Honor `prefers-reduced-motion`. Do not add parallax or scroll-jacking. If JavaScript is off, faded sections stay visible.
- CTA: **Forest** fill with an **Ivory** label. Secondary: Ivory (or transparent) with a 1px Forest border and a Forest label. On a photo, Ivory fill with a Forest label, or an Ivory hairline with an Ivory label. Bronze is not a button fill.

### Typography

The two English lines are **type specimens**, not live copy. The site stays Vietnamese. Live tagline remains **Chăm sóc · An yên · Chữa lành**. Putting “The Art of Wellness” or “A sanctuary for your wellbeing.” on a page is `NEEDS OWNER INPUT`.

**One display face, one body face.**

| Role | Face | Weights | Fallback |
| --- | --- | --- | --- |
| Headlines | **Cormorant Garamond** | 500; italic 400 for the tagline | `"Times New Roman", serif` |
| Body and interface | **Manrope** | 400 reading, 500 nav and buttons | `"Be Vietnam Pro", "Segoe UI", sans-serif` |

Why this pair: the owner named Playfair Display / Cormorant Garamond for headlines and Inter / Manrope for UI. Cormorant is the quieter sanctuary face; its thinner strokes leave room for Vietnamese diacritics. Playfair’s heavy stems crowd dấu dưới khoảng 32px. Manrope is warmer than Inter and still reads as interface. All four faces ship a `vietnamese` subset on Google Fonts; load `latin` + `vietnamese`, `display: swap`. Do not set a headline in Manrope or a paragraph in Cormorant.

**One `h1` per page.** Section titles are `h2`. Card and step labels are `h3` or `p` if they are not a section. Do not stack two display sizes in the same block.

Sizes are px. Line-height is the second number. Desktop is the 1440 artboard (column about 1120). Mobile is 390.

| Role | Element | Desktop | Mobile | Color | Where it sits |
| --- | --- | --- | --- | --- | --- |
| Page title | `h1` | Cormorant 500, 48 / 56 | 34 / 42 | Forest | Left, top of the content column, under the short photo band. About: “Về Jade Healing Spa”. Services overview: “Dịch vụ”. Gallery, reviews, contact: the page name. |
| Home hero | logo + `p` | Script logo, then tagline Cormorant italic 400, 22 / 32, max 28ch | Tagline 18 / 28 | Ivory | Lower part of a full-viewport photo. No typed wordmark beside the script logo. The home `h1` is the house-block title, in the HTML under the hero. |
| House / section title | `h1` or `h2` | Cormorant 500, 36 / 44 | 28 / 36 | Forest on paper; Ivory on a photo or Forest band | House title stays left. Service section titles (Massage, Gội đầu dưỡng sinh, Combo) are centered. Banner “Từ gỗ, cây và nước.” is centered, Ivory, max 16ch. |
| Card or group title | `h3` | Cormorant 500, 22 / 28 | same | Forest | Left, under the photo on an offer card. |
| Ritual title | `h1` | Cormorant 500, 44 / 52 | 32 / 40 | Forest | Centered. It is the tier name for the minute in `?phut=`, not the group name. |
| Eyebrow | `p` | Manrope 500, 12 / 16, tracking 0.14em, uppercase | same | Forest | 12px above the heading it labels. Not Sage. |
| Tagline | `p` | Cormorant italic 400, 22 / 32 | 18 / 28 | Ivory on the hero; Forest on paper | Under the logo or under the page `h1`. |
| Body | `p` | Manrope 400, 17 / 28, max 62ch | 16 / 26 | Forest | Left. First paragraph sits 16px under its heading (12px on mobile). |
| Description | `p` | Manrope 400, 16 / 26, max 42ch | 15 / 24 | Forest | One supporting line under a heading or card title. Center it only when the heading above is centered. |
| Price | `span` | Manrope 500, 15 / 24 | same | Forest | Detail: on one centered line with a clock and the minutes. Intent row: on the right, with the clock under it. Exact `formatPrice` for that tier. No “từ”. |
| Minute chip | — | Retired 2026-11-07 | — | — | The guest chooses the minute on the list. The detail page does not switch tiers. |
| Nav link | `a` | Manrope 500, 14 / 20 | 16 / 24 in the open panel | Ivory on a photo header; Forest on Ivory | Header. Current page: underline, 4px offset. |
| CTA label | `a` | Manrope 500, 14 / 20, padding 12px 22px, radius 4px, min-height 44px | 15 / 20, padding 14px 22px, min-height 48px | Ivory on Forest | Primary “Gọi điện”. Secondary sits beside it: Forest label, 1px Forest border, radius 4px. |
| Footer | `p`, `a` | Manrope 400, 14 / 22 | same | Forest on Ivory | Legal name, address, hours, phone, email. |
| Caption | `p` | Manrope 400, 13 / 20 | same | Forest | Left, 8px under a gallery frame. |

Space around type: heading to description **12px** (8px on mobile); description to the next block **24px**; paragraphs **12px** apart. Do not center a long body. Center the service section titles, the intent page title, the detail tier name, the detail price line, and the banner. The house block and the step list stay left.

Owner approved this scale on 2026-11-06. It is applied on the local site. **Owner gate — approve Dev before QA.**

---

## Design kit (tokens to implement after the gate)

| Token | Value | Why |
| --- | --- | --- |
| Ivory | `#F8F6F0` | Page background |
| Forest | `#263B32` | Text and primary CTA |
| Sage | `#78846B` | Rules, not body text |
| Sand | `#E9E2D5` | Token. Not the services index ground |
| Bronze | `#AD9066` | Hairline accent only |
| Display | Cormorant Garamond | Headlines and tagline |
| Body | Manrope | Reading, nav, buttons |
| Radius | 4px card bottoms and buttons, 28/40px offer-card tops, 2px frames, 6px detail photo, 16px intent rows | Card tops match the house sheet |
| Space | 8px steps; sections stay airy | Not cramped |
| Motion | Slow drift, one fade, optional muted home film | No parallax. Honor reduced-motion. | |

Photos: real spa files from `assets/spa/`, published from `public/spa/`. `Unknown-9.jpg` stays unused.

---

## Chrome (every page)

**Header.** Left: the script mark cut from the logo already on the spa photos (`public/spa/logo-mark.png`). Ivory while it sits on a photo, Forest `#263B32` after scroll. Home keeps the overlay until the guest has scrolled most of the first screen. Other pages open with a living photo under the header (`PagePhotoBand`). Service routes use a taller cover on desktop (about 48svh, between 380px and 520px) and a shorter one on a phone. Detail routes draw the group name on that cover. The cover is decorative (`aria-hidden`). Center/right links: Trang chủ, Về spa, Dịch vụ, Thư viện ảnh, Đánh giá, Liên hệ. Hovering Dịch vụ opens three columns: **Massage** (Thư giãn toàn thân, Trị liệu chuyên sâu, An thần & giấc ngủ), **Gội đầu dưỡng sinh** (the three tier names), **Combo** (the three gói). Jade Emperor Therapy, Chăm sóc theo nhu cầu, and the 150-minute sleep ritual are not in that Combo column. The first click still goes to the link. Utilities: Gọi `0357050796`, Facebook. Zalo only after a URL exists.

**Mobile.** Same links in a menu that opens and closes. Under Dịch vụ: Massage and the three intents, then the three gội tier names, then the three combo gói names. Phone is a large tap target.

**Footer.** Legal name CÔNG TY TNHH JADE NATURE CARE, address, hours, phone, email, Facebook, nav. No booking.

---

## Journey 1 — Bước vào (Home `/`)

Guest should know the place in one screen, then choose a service or how to visit.

| Band | What they see |
| --- | --- |
| 1. Opener | The lounge photo fills the first screen. The script logo, **Chăm sóc · An yên · Chữa lành**, Gọi điện, Facebook, and **Kéo xuống** sit on the photo with the block’s center on the lower third, clear of the header and of the bottom edge. On a phone the logo and the call buttons stay one rem above the sheet’s highest rise, and **Kéo xuống** sits just under that line so the sheet covers only the cue. A soft dark wash sits only behind those words, so a lighter photo still keeps the cream type readable. The photo stays pinned for a short scroll and drifts more slowly than the page. The next band then rises over it. Optional film: `heroVideoSrc`. |
| 2. House | `#tiep-theo` rises over the photo with a rounded top, like a sheet settling. One delayed fade. The page `h1` is **Một nhà cho thân, sự nghỉ, và nghi thức.** Then the wood-and-plant sentence and the line that this is not a medical promise. Photos drift right to left. |
| 3. Services | Same directory as `/services`. On Home: **dark moss jade** solid **`bg-jade-band`** plus **tiled** owner **velvet** texture (`home-services-moss.jpg`, **520px** repeat, **40%** soft-light) — **not** full-bleed `cover` (portrait asset would zoom ugly on desktop). **Ivory** band type (`text-cream`): **`h2` Dịch vụ`, `border-cream/40`, subsection titles without underline. **Offer cards**: Ivory fill, Forest copy, **`border-sage/45`**. **Home only** uses the moss band. `/services`, category, and intent pages use **Ivory** (`bg-paper`) and standard card borders (`border-line`). **Service detail** uses **Sand** (`bg-sand`). Tune depth in `globals.css` `--color-jade-band`. Each title and each card fades in once as that row enters. The long float stays on the house band only. |
| 4. Banner | Short full-bleed photo with **Từ gỗ, cây và nước.** Picture is a layout stand-in (`soaking-hall`) until the owner picks another. |
| 5. Space | Three frames linking to Gallery, under **Thư viện ảnh**. |
| 6. Visit strip | Forest `#263B32`, Ivory text. Address, 09:00–21:00, có chỗ đỗ xe, link Liên hệ. |

No booking button. No fake reviews on Home.

The opener is visual. The `h1`, service names, and prices stay in the HTML under it. The house band keeps one delayed float. Later bands fade once. Each home service card fades on its own as it enters, so a tall directory is not one animation. The fade does not hide them from a browser with JavaScript off, and it does not hide a block taller than the phone (the observer uses threshold 0). Do not wrap the whole directory in a rule that requires a large fraction of it to be visible.

### Offer cards

Used on Home and on `/services`. Photo on top, aspect 3/2, flush with a 1px border. The text block uses solid **Sand** via **`.offer-card-body`** on light surfaces; on the moss band, **ivory–sand mix** (`.offer-card-on-moss`) so the panel reads with `text-cream` headings. Depth: **`.offer-card-lift--moss`** on the list item — forest-tinted shadow (not clipped by the card’s `overflow-hidden`); hover/focus lifts ~5px with a stronger shadow (`prefers-reduced-motion` skips lift). Under the photo: title, a short line from `lib/service-summaries.ts` (same sentence as the detail intro for that tier), then price and duration together, then **Xem chi tiết**. No guest-facing sample blurb. The line stays within about four lines so the photo remains the largest part of the card. Top-left and top-right match the house sheet: **28px**, **40px** from `md`. Bottom corners stay **4px**. One column on a phone, two from `sm`, three from `lg`. The whole card is the link. Intent tier rows on massage pages use the same **`.offer-card-body`** panel.

Massage cards are the three intents, not the eleven groups. Gội cards are one per minute and open that tier. Combo cards are the three gói pages. The 150-minute sleep ritual is ngu-150 on An thần, not a combo card.

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

## Journey 3 — Chọn liệu trình

Routes: `/services`, `/services/[category]`, `/services/massage/nhom/[intent]`, `/services/[category]/[slug]`.

Owner menu is the Canva file “MEMU TỔNG JADE” (2026-11-02). The site uses the **Vietnamese** names, minutes, and prices. The printed sheet is two price columns. The website is not that sheet. Do not copy a reference site’s wording, prices, ratings, photos, or inclusions.

**Menu groups (owner, 2026-11-03, placement updated 2026-11-07).**

- Massage groups: Cổ vai gáy, Thư giãn toàn thân, Chăm sóc lưng – eo, Chăm sóc lưng – hông – chân, An thần & giấc ngủ. The guest does not land on an eleven-group list. Massage cards open Thư giãn toàn thân, Trị liệu chuyên sâu, or An thần & giấc ngủ.
- Chăm sóc tóc: Gội dưỡng sinh only. Three cards, one per minute. Do not invent more hair services.
- Combo: Nghi Thức Thải Độc Ấm Tử Cung, Dưỡng Sinh Nhuận Tràng Thải Độc Vùng Bụng, Đả Thông Kinh Lạc Nâng Cơ Mặt. Jade Emperor Therapy is not a combo card. Chăm sóc theo nhu cầu is a display-only row on the thư giãn intent. All four sleep tiers live on the an thần intent.

**Rule.** `?phut=` selects one tier. The page shows that tier’s name, price, minutes, and steps. It does not offer a second minute on the same screen. Minutes stay the real marks: cổ vai gáy includes 40; giấc ngủ includes 150; Jade Emperor is 150; lưng – eo is 60/90; chăm sóc theo nhu cầu is 90/120. The room photo is the space, not a confirmed photo of that ritual.

**How a guest moves.** There is no “Nhóm dịch vụ” jump bar.

1. `/services` is the `h1` **Dịch vụ**, then a full-width **horizontal rule** (`border-line`, not text underline), then the same three sections as Home with the usual vertical gap. Section titles (**Massage**, **Gội đầu dưỡng sinh**, **Combo**) use **text underline** as on Home. No rules between those sections. A category URL (`/services/massage`, `/services/cham-soc-toc`, `/services/combo`) shows that category name, `category.description` from `lib/menu.ts`, and only that section; the section title still uses the underline pattern (one section visible).
2. A massage card opens `/services/massage/nhom/thu-gian-toan-than`, `tri-lieu-chuyen-sau`, or `an-than-giac-ngu`. The `h1` is the intent name. Thư giãn lists than-60/90/120 (linked `?phut=`) and a non-link row for chăm sóc theo nhu cầu (Từ the menu minimum). Trị liệu lists one row per slug (cổ vai gáy, lưng – eo, lưng – hông – chân) with Từ the minimum price and minutes, linking to that slug. An thần lists ngu-60/90/120/150, each linked with `?phut=`.
3. From `md`, rows alternate: photo left, then right, then left. Radius **16px**. The photo is flush with the border. On a phone the photo sits on top, full width, aspect 3/2, with the offer-card top radius (**28px**, bottom **4px**). Title stays left, price and clock stay right. The short line from `lib/service-summaries.ts` stays under the title. Do not add inclusion rows from a reference card.
4. A gội card skips the list and opens the detail with `?phut=`, because that group has one line per minute.
5. A combo card opens the gói page. The sleep ritual is not a combo card. Chăm sóc theo nhu cầu is not a combo card.

**Intent row.** Bordered block. Photo merged to the border. Title, then the same tier summary as the detail page. Price on the right, clock under the price. No separate “Xem chi tiết” line.

**Detail.** Breadcrumb centered. The last crumb is the group name. The visible `h1` is the tier selected by `?phut=` (or the first tier if the query is missing). The short line from `lib/service-summaries.ts` is centered. Price and clock on one centered line. Rounded photo (6px), then **Quy trình** and the steps when `lib/menu-rituals.ts` has an array for that tier, then contact, then related groups. Related links open the group URL without `?phut=`, so they show that group’s first tier. The document title is still the group name. When the group has more than one tier, a list of those tiers links to `?phut=`. That list is not the retired minute-chip row.

Ritual lines on the detail page come from `lib/menu-rituals.ts` (Canva detail slides). Tiers with no array (Jade Emperor Therapy) omit **Quy trình** rather than showing layout filler. Do not invent steps. Jade Emperor Therapy has no Vietnamese name on the Vietnamese Canva page.

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

- Desktop artboard 1440. Content column about 1120. Home opener is one viewport.
- Mobile 390. One column. The opener is still one viewport. Menu is a real open/close panel. The services section must be visible without a stuck fade.
- No horizontal scroll.

## Out of this design

Booking, payments, accounts, English, news, careers, medical claims, copied nhaspa/Kim/H3 assets.
