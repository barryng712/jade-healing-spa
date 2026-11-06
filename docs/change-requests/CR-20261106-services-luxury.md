# CR-20261106-services-luxury — Dịch vụ editorial, luxury

> **Superseded 2026-11-07.** The owner replaced the Ivory price bands and the minute chips. The live journeys are in `docs/design-guidelines.md` and `docs/user-journeys.md`. The sections below are the 2026-11-06 record. Do not build them again.

| Field | Value |
| --- | --- |
| ID | `CR-20261106-services-luxury` |
| Created | 2026-11-06 |
| Owner | Product owner |
| Status | `dev` |
| Branch | `feat/informational-site` |
| Priority | `high` |

## Owner request

**What changes?** (UI / feature / page / journey / content / other)

> Phần dịch vụ của Jade Healing Spa (`/services`, trang nhóm, trang liệu trình) cần đẹp hơn, sang hơn, và giữ chân ánh nhìn. Tham khảo bố cục mảng dịch vụ tại https://nangsen.net/vi/dich-vu — học nhịp trình bày, rồi làm lại bằng ảnh, menu, và hệ màu của Jade. Không sao chép thương hiệu, câu chữ, giá, ảnh, hay mã nguồn của site kia.

**Why / success looks like**

> Khách thấy không gian và tên liệu trình trước, quét được phút và giá thật, rồi vào trang chi tiết. Trang vẫn là gỗ, linen, Cormorant / Manrope. Không biến thành bản sao Nàng Sen.

**Out of scope**

> Đặt lịch, thanh toán, tài khoản. Đổi menu, giá, số phút. Thêm dịch vụ không có trong `lib/menu.ts`. Đổi dải dịch vụ trang chủ (CR riêng). Ảnh stock, icon hoa sen, claim trị liệu.

**Constraints** (MVP, Vietnamese-only, no booking, brand, etc.)

> Informational, tiếng Việt. Ảnh spa sẵn có. Giá và phút chỉ từ `lib/menu.ts`. Bước mẫu vẫn ghi nhãn mẫu. Palette đã duyệt: Ivory, Forest, Sand, Bronze hairline. Owner yêu cầu cùng một lượt: researcher ghi chú, BA chốt phạm vi, Designer đề xuất, Developer sửa trên site hiện có.

## Gates (owner only flips these)

| Stage | Result | Date | Notes |
| --- | --- | --- | --- |
| BA plan | `approved` | 2026-11-06 | Owner authorized this chain in the same message. |
| Design proposal | `approved` | 2026-11-06 | Owner approved the bands and asked that every page stay responsive. |
| Dev implementation | `pending` | | Built locally. Owner has not signed off the result. |
| QA report | `pending` | | QA not requested in this pass. |

## BA — evaluation & plan

### Interpretation

**Facts**

- The site already has `/services`, `/services/[category]` (`massage`, `cham-soc-toc`, `combo`), and `/services/[category]/[slug]` for each entry in `menuGroups`. This CR adds no URL.
- Confirmed menu data is `lib/menu.ts`: three category names and descriptions, 11 groups, tier names, minutes, and `priceVnd`. The live formatter is `formatPrice` (`410.000 Vnđ`). Every `steps` array is still `null`. Room photos already assigned in `lib/photos.ts` (`servicePhotos` for all 11 slugs, `categoryPhotos` for the three categories) are the only images in scope.
- Today `/services` shows a photo, the category label, and `group.name`. The visible lead and the page meta description both say minute marks and prices live on the detail page.
- Today a category row shows a price only when the group has one tier. A multi-tier group shows minute marks and no prices. The detail page already shows the active tier name, minute chips, and price. The photo stays when the chip changes.
- `research/nangsen-services.md` (visited 2026-11-06) records a wide pass (about 1440) and a phone pass (390×844). On the wide screen, that site uses a large photo, a quiet title, featured cards, then wide bands where the price is the loudest figure and the photo swaps sides. Those bands are not links. Inclusions, city chips (Hà Nội / Hồ Chí Minh), booking, the gold header, and the drawings belong to that business.
- On the phone, the same note records: featured cards become one column (photo, name, short line, text link, still no price); the two city chips stay on one row; a menu band stacks with the photograph full width on top and the text under it. The two rows checked both start with the photograph, so the side-swap is wide-screen only. Name and price share a wrapping row. Their detail page at 390 shows a starting-price label and a minute range, then the photograph, then a long numbered step list. It has no minute chips. A booking overlay was present and was not opened.

**Locked from the owner request (content and scan behavior, not a layout)**

- On `/services` and on each category list, a guest can scan every real minute mark and its matching price from `lib/menu.ts`, then open the existing detail URL. One shared starting price, or a minute range, does not replace those pairs. The sentence that says those figures are only on the detail page comes off the overview and the meta description. No new marketing sentence replaces it.
- At 390, each offering stacks the existing photo, then the name and the real minute–price pairs. If a row swaps the photo from side to side, that swap is the wide viewport only.
- Every group row links to the existing `/services/[category]/[slug]` URL. The reference bands are not links; Jade’s rows stay links.
- The detail page gets a light hierarchy pass. The active price reads as a display figure for the selected tier. Minute chips stay. Wide layout stays photo on the left and ritual on the right. Narrow layout stays photo above the ritual. Do not import their step article or a “from” price.
- Radius stays 2px on photos and 4px on cards. Sample steps stay labeled `Bước mẫu`.
- No Nàng Sen strings, prices, photos, or drawings. No booking. No city filter. The header and the home services band stay as they are.
- The research note’s Recommendations are input. Only the scan behavior above is locked. The rest is not an approved mock.

**Left open for Designer**

- Band versus card.
- Whether the three category photos lead `/services` before the 11 groups.
- Type scale.
- How several prices sit on one group row, so long as every minute mark and its own price stay visible.
- How the phone stack looks (spacing, alignment, type). The order is locked: photo, then name and prices.
- Whether the wide layout alternates photo sides or keeps one side.

### In scope / out of scope

**In**

- Visual presentation of `/services`, `/services/[category]`, and a light hierarchy pass on `/services/[category]/[slug]`.
- Overview and category list show every tier’s minutes and price from `lib/menu.ts`, plus existing photos, category descriptions, and names. The list unit stays the menu group (11). The link stays the current detail path. Tier ritual names stay on the detail page. Designer may repeat `tier.name` on a row only as that exact string.
- At a narrow viewport, list rows stack photo, then name and prices. At a wide viewport, side-swap is allowed and not required.
- If a category block appears on `/services`, its description is the full string from `lib/menu.ts`, not a shortened rewrite.
- The overview lead and meta description stop claiming that minutes and prices are withheld until the detail page. No new marketing sentence is written here.

**Out**

- Booking, payments, accounts, and any new service.
- Editing a price, a minute mark, or a name in `lib/menu.ts`.
- Invented inclusions (room type, snacks), medical claims, and any Nàng Sen asset or string.
- A city or location filter, a starting-price (“từ”) format, a combined minute range in place of chips, and that site’s numbered step article.
- The home services band (its own CR) and the header, including the Dịch vụ menu.
- Replacing `Bước mẫu` with invented steps. Moving An thần & giấc ngủ or Chăm sóc theo nhu cầu. Inventing a Vietnamese name for Jade Emperor Therapy.
- Changing photo radius away from 2px or card radius away from 4px.
- New routes, a Figma redraw, and a rewrite of `docs/requirements.md`.

### Impacted routes & journeys

- `/services`
- `/services/massage`, `/services/cham-soc-toc`, `/services/combo`
- `/services/[category]/[slug]` — hierarchy of the existing ritual column only
- Journey 3 in `docs/design-guidelines.md` (Designer amends). The home services band in Journey 1 stays as it is.

### Docs to update

- [ ] `docs/requirements.md` — leave unchanged
- [ ] `docs/sitemap.md`
- [ ] `docs/user-journeys.md`
- [ ] `docs/content-requirements.md`
- [ ] `docs/acceptance-criteria.md` — V5 still says `/services` hides minutes and prices. This CR’s criteria override V5 for these pages. Do not rewrite that file in the BA pass.
- [x] other: Designer amends Journey 3 **Overview** in `docs/design-guidelines.md`. The sentence that becomes false is “Minute marks and prices stay on the detail page.” Also amend the category-list line that describes only a small still and “Xem chi tiết” if the proposal no longer matches it. Keep the radius lines (4px card, 2px photo). Do not edit the home-band sentences. BA does not edit that file.

### `NEEDS OWNER INPUT`

- A replacement marketing sentence for the `/services` lead, if the owner wants one. Until that text arrives, remove the false lead and do not invent a luxury paragraph.
- Still open outside this CR: real ritual steps, a Vietnamese name for Jade Emperor Therapy, and the category placement of An thần & giấc ngủ and Chăm sóc theo nhu cầu.

### Acceptance criteria (draft for this CR)

1. On `/services`, `/services/massage`, `/services/cham-soc-toc`, `/services/combo`, and `/services/massage/co-vai-gay`, the visible UI is Vietnamese. Those pages do not contain `Nàng Sen`, `nangsen`, a Hà Nội / Hồ Chí Minh location filter, or any price that is not produced from `lib/menu.ts`.
2. `/services` lists all 11 `menuGroups`. Each row shows `group.name`, the existing `servicePhotos` frame for that slug, every tier’s `{minutes} phút`, and that tier’s `formatPrice(priceVnd)`. Cổ vai gáy shows 40 phút with `410.000 Vnđ` and 120 phút with `950.000 Vnđ`. The on-page lead and the document description no longer say that minute marks and prices are only on the detail page. At 390×844 each group stacks that photo, then the name and the minute–price pairs.
3. Each category page lists only that category’s groups and shows `category.description` unchanged from `lib/menu.ts`. Every tier on those rows shows its minute mark and matching price, including multi-tier groups. The photo, the name, and those prices sit in one control that links to the existing `/services/[category]/[slug]` URL. At 390×844 each group stacks the photo, then the name and the prices. A photo that swaps sides does so only at a wide viewport (about 1440), on `/services` and on the category pages.
4. On a detail page at a wide viewport, the room photo is on the left and the ritual is on the right. On a narrow viewport the photo is above the ritual. Another minute chip changes the tier name and price and leaves the photo in place. The active price is larger than body text and matches `formatPrice` for the selected tier. Jade Emperor Therapy shows 150 phút and `1.190.000 Vnđ`. The page shows one chip per tier. It does not replace the chips and the selected price with a starting-price label or a combined minute range.
5. Where `steps` is null, the detail page still shows the labeled sample lines (`Bước mẫu`) and does not add a long numbered step article, room-type lines, snack lines, or other inclusion lines. The menu name Jade Emperor Therapy stays. No booking, payment, or account control is added.
6. A keyboard user can tab to every group link and every minute chip, see a visible focus style, and activate the control. At 1440×1000 and 390×844, `/services`, `/services/massage`, and `/services/massage/co-vai-gay` do not scroll horizontally.
7. The home services band is unchanged: three category cards (Massage, Chăm sóc tóc, Combo) and no per-ritual price list. The header is unchanged. No name, minute mark, or price in `lib/menu.ts` is added, removed, or edited.
8. These pages keep Cormorant, Manrope, Ivory, Forest, Sand, Bronze as a hairline only, a 2px photo radius, and a 4px card radius. They do not use the reference site’s gold-on-black header, booking control, or botanical drawings.

### Recommended next step for Designer

The BA gate is approved (2026-11-06). Fill the Design section of this CR. Read `research/nangsen-services.md` for rhythm only, including the 390 pass. Propose presentation for `/services`, the category pages, and the detail page inside the locks above: real minutes and prices, phone stack (photo then name and prices), every row linking to the existing detail URL, detail chips and display price, 2px / 4px radius. Leave band versus card, category photo doors, type scale, price arrangement, and the look of the stack open in your proposal. Amend the Journey 3 Overview sentence “Minute marks and prices stay on the detail page.” Leave the home services band and the header as they are. After that proposal, Developer implements on the existing site. QA was not requested in this pass.

## Design — review & proposal

*(Filled by Designer, 2026-11-06. Owner gate still pending.)*

### Current design relevant to this CR

`/services` (`app/services/page.tsx`) is an Ivory page: `h1` “Dịch vụ”, then the lead “Từng liệu trình. Mốc phút và giá ở trang chi tiết.” The same claim is the document description. `components/service-catalog.tsx` then lays all 11 `menuGroups` in a two-column grid (`sm:grid-cols-2`). Each cell is a link to `servicePath(group)`: `PhotoFrame` at 240px / 320px, the category name as an eyebrow, then `group.name` in Cormorant 22/30 (24/32 from `md`). No minutes and no prices.

A category page (`app/services/[category]/page.tsx`) keeps the breadcrumb, `h1` = `category.name`, and `category.description` in full. `components/service-group-list.tsx` is a hairline list. The row is a link. The still is 92px on a phone and 148px from `md`. A one-tier group shows `{minutes} phút · formatPrice`. A multi-tier group shows `minuteMarks` only (minutes joined, no prices). A separate “Xem chi tiết” label sits on the row. Cổ vai gáy therefore shows minute marks and hides 410.000 Vnđ and 950.000 Vnđ.

Detail (`app/services/[category]/[slug]/page.tsx`) is already the locked stage. `components/service-detail-stage.tsx` puts the photo left and the ritual right from `lg` (1024), and the photo above the ritual below that. `components/service-ritual.tsx` keeps one chip per tier (`{minutes} phút`). The active price is already the Price role: Cormorant 500, 24/28 below `md`, 28/32 from `md`, under `tier.name`. Chips do not swap the photo. Where `steps` is null, ten labeled `Bước mẫu` lines render. Jade Emperor Therapy is one tier: 150 phút, `formatPrice(1_190_000)` → `1.190.000 Vnđ`.

Photos are the 11 `servicePhotos` frames and the three `categoryPhotos`. `PhotoFrame` is radius 2px and already runs `LivingPhoto` at `tone="soft"` (`film-soft` in `app/globals.css`). Focus already exists: `:focus-visible` in `app/globals.css` is `outline: 2px solid var(--color-wood)` (Forest `#263B32`), `outline-offset: 3px`.

### Fit with `docs/design-guidelines.md`

The page stays Ivory `#F8F6F0`, Forest `#263B32`, Cormorant for names and prices, Manrope for minutes, eyebrows, and chips. Sand `#E9E2D5` stays on the home services band only, so this list does not restage that band. Bronze `#AD9066` is the 1px rule between bands, not a fill and not a button. Sage stays the chip border on the detail page.

The band name uses the existing section title (36/44 desktop, 28/36 mobile). The price uses the existing Price role (28/32 desktop, 24/28 mobile). No new step is added to the type ramp. Photo radius stays 2px. These rows are not cards, so they do not take a 4px shell; 4px remains the radius for buttons and real cards. The global focus outline is the only focus style.

Journey 3 Overview is amended in this pass so it no longer says minute marks and prices stay on the detail page, and so it no longer specifies a small still plus “Xem chi tiết”. The home services band section is unchanged.

### Proposal (layout, tokens, motion, content slots)

**Composition.** A full-width band on Ivory, not a card and not the current two-column grid. One component draws every group: `components/service-group-list.tsx`. `components/service-catalog.tsx` stops being its own grid and renders that list for all `menuGroups`. Category pages render the same list for `groupsInCategory` only.

**Category doors.** `/services` does not open with the three category photo doors. The home sand band already owns that job, and a second set of large rooms would sit in front of the eleven prices. The page is the `h1` “Dịch vụ”, then the eleven bands. No lead paragraph. Delete the false lead and delete the page `description` that says minutes and prices live only on the detail page. Do not write a replacement sentence. A new services sentence is `NEEDS OWNER INPUT` and is not approved copy. With no page description, the root layout description stays.

**What a band holds.** The existing `servicePhotos` frame (`photo.alt`, not an empty alt). Then `group.name`. Then one line per tier, in menu order: `{minutes} phút` and `formatPrice(priceVnd)`. Cổ vai gáy is four lines, including 40 phút / `410.000 Vnđ` and 120 phút / `950.000 Vnđ`. A one-tier group uses the same line, once. Do not call `minuteMarks`. Do not prefix a price with “từ”. Do not print `tier.name` on the row. On `/services` only, `category.name` is the eyebrow 12px above the group name. Category pages omit that eyebrow because the `h1` is already the category. The description under that `h1` stays the full `category.description` string.

**The link.** The whole band — photo, name, and every price line — is one `<a href={servicePath(group)}>`. There is no “Xem chi tiết” label. The group name is an `h2`. The page keeps one `h1`.

**Wide alternation.** Yes, from `lg` (1024) only. First row photo left (on `/services`, that is Cổ vai gáy). The next row photo right. Text inside the text column stays left-aligned either way. Below `lg`, including 390, every row stacks and the photo is always on top. No side swap on a phone.

**Detail.** Light pass only. `ServiceDetailStage` stays photo left / ritual right from `lg`, photo above the ritual below `lg`. `ServiceRitual` chips stay where they are, one per tier, and still change `tier.name` and the price without changing the photo. The active price stays the Price role already in the component: Cormorant 500, **28 / 32** from `md` (11px above the 17px body) and **24 / 28** below `md` (8px above the 16px body). Do not shrink it to body size and do not raise it to a second display size beside the 40px ritual `h1`. Where `steps` is null, the ten `Bước mẫu` lines stay. Do not add room-type or snack lines.

**Motion.** Keep the drift `PhotoFrame` already applies (`LivingPhoto` `tone="soft"`, `film-soft`). Do not switch these frames to `film-a` / `film-b`, and do not add a fade, a hover zoom, a lift, or a shadow. `prefers-reduced-motion` already stops that drift. The short page hero from `bandPhoto` stays as the site has it. No word set on that photo.

**Hover and focus.** Hover adds a Forest underline on the group name, 4px offset. No second color. Focus is the existing `:focus-visible` rule in `app/globals.css` (2px solid Forest, 3px offset) on the band link and on the minute-chip input. Do not set `outline: none`. The chip input stays `absolute inset-0` so the outline paints the chip; the label stays `overflow: visible`.

### Desktop / mobile notes

Artboard 1440. Content is `components/wrap.tsx`: max 1120, padding 40px (`md:px-10`), so the row is 1040 wide. Page padding stays `py-12 md:py-20`. The `h1` stays Cormorant 500, 48/56. With no lead, the first band starts **32px** under the `h1` (`mt-8`). A category page keeps 12px from `h1` to the full description, then **40px** to the first band.

From `lg`:

- The band is a grid: `minmax(0, 1.05fr)` photo, `minmax(0, 0.95fr)` text, **gap 48px**, `align-items: center`, padding **40px** top and bottom.
- Even rows (2nd, 4th, …) set the photo to `order: 2` and the text to `order: 1`. Odd rows, including the first, keep the photo first.
- Photo: width of its column, **aspect-ratio 4 / 3**, radius 2px, `object-fit: cover`. At 1040 that is about 520 × 390. `sizes="(min-width: 1024px) 50vw, 100vw"`.
- Eyebrow, overview only: Manrope 500, 12/16, tracking 0.14em, uppercase, Forest, **12px** above the name.
- Name: Cormorant 500, **36 / 44**, Forest, left. It may wrap. It does not share a line with a price.
- Price stack: **16px** under the name. Each tier is one row, **8px** between rows: a flex line, `align-items: baseline`, `justify-content: space-between`, gap 16px. Minutes: Manrope 500, **14 / 20**, Forest, left. Price: Cormorant 500, **28 / 32**, Forest, right, `white-space: nowrap`.
- Hairline: the list has `border-top: 1px solid #AD9066`; each row has `border-bottom: 1px solid #AD9066`. No side border, no fill, no radius on the row.

Below `lg`, including 390 × 844. `Wrap` padding is 20px, so the column is 350px at 390. One column. Reset `order` so the photo is always first. Band padding **32px** top and bottom.

- Photo: 100% width, aspect 4/3 (about 350 × 262 at 390), radius 2px.
- **16px** under the photo, then the name: Cormorant 500, **28 / 36**, left. A long name such as Dưỡng Sinh Nhuận Tràng Thải Độc Vùng Bụng wraps here, and the prices stay under it.
- **16px** under the name, then the same tier lines. Price is Cormorant 500, **24 / 28**. “150 phút” plus `1.190.000 Vnđ` fits on one line inside 350px. Do not put the price on the name’s line.
- Below `md`, the `h1` is Cormorant 34/42 and the first band sits **24px** under it (`mt-6`). From `md` up the gap is **32px** (`mt-8`), including while the bands are still stacked. On a category page the description stays, then **32px** to the first band (**40px** from `md`).

No horizontal scroll at 1440 × 1000 or 390 × 844. The text column is `min-width: 0`. The photo is `max-width: 100%`. Nothing in the band uses a fixed width wider than the column.

### Explicit non-goals (no clone, no new Figma unless asked)

- No gold-on-black header, lotus or dragonfly drawing, pill button, booking control, or Hà Nội / Hồ Chí Minh filter.
- No Nàng Sen sentence, price, inclusion, room-type line, snack line, or image.
- No new palette, no shadow, no stock photo, no card fill, no radius above 2px on these photos.
- No category photo doors on `/services`, and no shortened category description.
- No “từ” price, no single shared price, no minute range in place of the lines or the chips.
- No new luxury paragraph and no new meta sentence. That slot is `NEEDS OWNER INPUT`.
- No change to the home services band, the header, `lib/menu.ts` figures, or the “Trong {category}” name list under a detail page.
- No Figma file.

### Handoff notes for Developer

Build only after the owner approves this Design gate. Do not start QA in that pass.

1. `components/service-group-list.tsx` becomes the band above. Props stay `groups` and `photos`. Add `showCategory?: boolean`. Overview passes `true`. Category pages omit it. Map `group.tiers` in order. Each line is `{minutes} phút` and `formatPrice(tier.priceVnd)`. Delete the `minuteMarks` branch and the “Xem chi tiết” span. The `<a>` wraps photo and text. `h2` is `group.name`. Pass `photo.alt`.
2. `components/service-catalog.tsx` renders `<ServiceGroupList groups={menuGroups} photos={servicePhotos} showCategory />`. Remove the two-column grid.
3. `app/services/page.tsx`: delete the lead `<p>` and the `description` field in `metadata`. Keep `title: "Dịch vụ"`. Do not add a sentence. First band margin is `mt-8` desktop and `mt-6` below `md` — put that margin on the list, since the lead `mt-3` is gone.
4. `app/services/[category]/page.tsx`: keep breadcrumb, `h1`, and `{category.description}` with its current classes. Point the list at the same band. Margin above the list: `mt-10` desktop, `mt-8` below `md`.
5. `components/service-detail-stage.tsx`: no layout change. `components/service-ritual.tsx`: leave chip markup, the Price-role classes on the active price (`text-[24px] leading-7 md:text-[28px] md:leading-8`), and the `Bước mẫu` block. Do not add inclusion lines.
6. Focus and hover only as specified. Reuse `:focus-visible` in `app/globals.css`. Do not add a ring utility that replaces it.
7. Check in the browser, Vietnamese UI: `/services` shows 11 bands and both Cổ vai gáy prices; `/services/massage`, `/services/cham-soc-toc`, and `/services/combo` show only that category and the full description; `/services/combo/jade-emperor` shows 150 phút, `1.190.000 Vnđ`, and one chip; a second chip on Cổ vai gáy changes the name and the price and leaves the photo. Keyboard: every band link and every chip. Viewports 1440 × 1000 and 390 × 844, no horizontal scroll. Alternation only at `lg` and up; first photo left.

## Dev — implementation

*(Filled 2026-11-06. Dev gate still pending.)*

### Summary of code changes

`/services` and each category page now list groups as Ivory bands. Each band is one link: the existing room photo, the group name, and every minute with its own price from `lib/menu.ts`. From `lg` the photo swaps sides, first band photo left. Below `lg` the band stacks photo, then name, then prices. The overview drops the lead and the meta description that said minutes and prices live only on the detail page. The detail page keeps the photo with the ritual, the minute chips, and the display price. `Bước mẫu` stays labeled.

Checked in the browser at 1440×1000, 768×900, and 390×844. `/`, `/about`, `/services`, the three category pages, `/services/massage/co-vai-gay`, `/services/combo/jade-emperor`, `/gallery`, `/reviews`, and `/contact` do not scroll horizontally. The phone menu opens on `/` without sideways scroll. Choosing 120 phút on Cổ vai gáy changes the ritual name to Chăm Sóc Tái Tạo Cổ Vai Gáy Toàn Diện and the price to `950.000 Vnđ`. The photo stays. The home sand band still has three category cards and no per-ritual prices.

### Files touched

- `components/service-group-list.tsx`
- `components/service-catalog.tsx`
- `app/services/page.tsx`
- `app/services/[category]/page.tsx`
- `components/service-ritual.tsx` — focus outline on the minute chip, because the radio is transparent
- `docs/change-requests/CR-20261106-services-luxury.md`
- `docs/change-requests/INDEX.md`
- `docs/STATUS.md`

### Sample / placeholder labels used

`Bước mẫu` lines stay on the detail page. No new sentence was written for the services lead.

### How to verify locally

```bash
npm run dev
# routes:
# http://127.0.0.1:3000/
# http://127.0.0.1:3000/about
# http://127.0.0.1:3000/services
# http://127.0.0.1:3000/services/massage
# http://127.0.0.1:3000/services/cham-soc-toc
# http://127.0.0.1:3000/services/combo
# http://127.0.0.1:3000/services/massage/co-vai-gay
# http://127.0.0.1:3000/services/combo/jade-emperor
# http://127.0.0.1:3000/gallery
# http://127.0.0.1:3000/reviews
# http://127.0.0.1:3000/contact
```

At 1440 and 390, those pages do not scroll sideways. On `/services`, Cổ vai gáy shows 40 phút / `410.000 Vnđ` and 120 phút / `950.000 Vnđ`.

### Follow-ups / debt

A replacement sentence under “Dịch vụ” is `NEEDS OWNER INPUT`. Until then the slot stays empty.

## QA — review

*(Filled by QA agent)*

### Environment

- Local URL:
- Viewports:

### Results vs CR AC + `docs/acceptance-criteria.md`

| ID | Result | Notes |
| --- | --- | --- |
| | pass / fail / blocked | |

### Bugs

| Severity | Summary | Repro |
| --- | --- | --- |
| | | |

### Console / a11y / responsive notes

### Re-test needed after Dev fixes? `yes` / `no`

## Decision log

| Date | Who | Decision |
| --- | --- | --- |
| 2026-11-06 | Owner | Study nangsen.net services rhythm, then elevate Jade services. Same message authorizes BA, Design, and Dev. Do not clone the reference. |
| 2026-11-06 | Website researcher | Note: `research/nangsen-services.md`. Wide viewport only. |
| 2026-11-06 | BA | BA refreshed scope from the mobile pass in `research/nangsen-services.md`. |
| 2026-11-06 | Designer | Proposed the services presentation; owner gate still pending. |
| 2026-11-06 | Owner | Approved the design. Asked that every page stay responsive. |
| 2026-11-06 | Developer | Built the bands on the existing site. Checked 1440, 768, and 390. Dev gate still pending. |
