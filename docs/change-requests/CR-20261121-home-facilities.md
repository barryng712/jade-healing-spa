# CR-20261121-home-facilities — Section cơ sở vật chất trên trang chủ

| Field | Value |
| --- | --- |
| ID | `CR-20261121-home-facilities` |
| Created | 2026-11-21 |
| Owner | barryng712 |
| Status | `dev` |
| Branch | `improve-ui` |
| Priority | `medium` |

## Owner request

**What changes?** Thêm một section trên trang chủ `/`, **sau house band** (`#tiep-theo`) và **trước** dải Dịch vụ (moss). Section giới thiệu cơ sở vật chất của spa.

Bố cục mong muốn: **3–4 ảnh bên trái** để nhấn mạnh cơ sở vật chất, **đoạn mô tả bên phải**. Ảnh sắp xếp theo layout phù hợp (không chỉ một hàng đều).

Chủ đề owner muốn nhắc trong mô tả:

- Bác sĩ y học cổ truyền
- Máy massage công nghệ cao
- Cơ sở vật chất nói chung

**Why / success looks like**

Khách cuộn qua house band thì thấy spa có không gian và trang thiết bị thật, trước khi chọn dịch vụ. Ảnh là phần nổi; chữ hỗ trợ, không lấn ảnh.

**Out of scope**

- Đổi hero, house band, dải Dịch vụ, banner “Từ gỗ, cây và nước.”, thư viện ảnh, strip “Ghé spa”, header, footer
- Booking, thanh toán, tài khoản
- Trang About, Gallery, hoặc trang dịch vụ (trừ khi BA thấy cần một câu dẫn nội bộ — vẫn chờ owner)
- Copy marketing bịa, claim chữa bệnh, giá, số giường, tên bác sĩ nếu owner chưa cung cấp

**Constraints**

- MVP informational, tiếng Việt, không booking
- Không invent sự thật spa. Ảnh phải là ảnh owner đã có, hoặc khung có nhãn placeholder cho đến khi có ảnh thật
- `docs/unresolved-questions.md`: facilities và team **chưa được cung cấp** (I5–I8). “Phòng khám y học cổ truyền” **không** được dùng như medical claim trên site nếu chưa có quyết định mới
- Giữ visual system hiện tại (`docs/design-guidelines.md` + site). Không clone nhaspa. Không vẽ lại Figma trừ khi owner yêu cầu
- Wording y khoa chỉ dùng khi owner cung cấp câu đã xác minh

### `NEEDS OWNER INPUT` (chưa có trong request)

- Đoạn mô tả tiếng Việt (câu chữ chính xác, không phải chủ đề) => tạm móck
- Tên bác sĩ, chức danh, và câu được phép đăng (nếu có) => tạm mock
- Máy nào, tên máy, và câu được phép đăng (không claim hiệu quả điều trị nếu chưa xác minh) => tạm mock
- 3–4 ảnh: file nào trong `assets/spa/` / `public/spa/`, hoặc ảnh mới; alt text
- Có tiêu đề section không, và chữ tiêu đề nếu có =>có tiêu đè
- Desktop và mobile: trên điện thoại, ảnh vẫn ở trên và chữ ở dưới, hay giữ ảnh trái / chữ phải khi đủ rộng => ảnh trên chữ dưới

## Gates (owner only flips these)

| Stage | Result | Date | Notes |
| --- | --- | --- | --- |
| BA plan | `approved` | 2026-11-21 | Heading **Cơ sở vật chất**. Hai ảnh mới. Body doctor/máy owner ghi `mock`. |
| Design proposal | `approved` | 2026-11-21 | Owner approved. Implement on `improve-ui`. |
| Dev implementation | `pending` | | |
| QA report | `pending` | | |

## BA — evaluation & plan

Written 2026-11-21. Live journey docs are **not** edited in this pass. They still describe the site as built. Amend them after this gate is `approved`, before or with Design.

### Interpretation

**Fact (site now).** Home order is hero, house band `#tiep-theo`, moss Dịch vụ, banner “Từ gỗ, cây và nước.”, Thư viện ảnh, Ghé spa. House band is copy on the left and a drifting photo reel on the right. Gallery teaser is three frames (`treatment-room`, `treatment-bed`, `soaking-hall`).

**Fact (confirmed content).** Facilities, team, and About story are still gaps (I5–I8). Tone is wellness, not a medical-efficacy claim. Traditional-medicine clinic wording from tax records is listed as **not for the live site** unless the owner later says yes. Published photos are rooms, water, flowers, herbs, reception, and the logo wall. None are documented as a doctor or a massage machine.

**Owner request (intent, not yet copy).** Insert one facilities section after the house band and before Dịch vụ. Left: a collage of 3–4 photos, not one even row. Right: a description that the owner wants to cover the place, a traditional-medicine doctor, and high-tech massage machines. Photos should carry more visual weight than the text.

**Recommendation.** Treat the doctor line and the machine line as **claims waiting for approved sentences and matching photos**. Do not publish “bác sĩ”, “y học cổ truyền”, “phòng khám”, machine names, or treatment results in this CR until the owner pastes the exact Vietnamese and points at files that show those things. A collage of the current room photos must not sit next to a machine or doctor claim.

The new band should read as the mirror of the house band (photos left, words right), on the ivory paper surface, then the moss services band stays the dark break. One fade. No second photo reel and no Tiếp/Trước control.

### In scope / out of scope

**In scope**

- One new section on `/` only, between `#tiep-theo` and `ServicesMossBand`.
- Desktop: photo collage left, description right. Photos are the larger side.
- Mobile (BA default, owner may override): collage first, description under it.
- Collage of **3** photos for the first ship. A 4th frame only if the owner names a fourth file before Design is approved.
- One `h2`. The page keeps a single `h1`.
- Copy and alts only from owner-approved text. Until that text exists, the visible body is the labeled gap **Nội dung sẽ được bổ sung**.
- Static collage. One enter fade. `prefers-reduced-motion` and no-JavaScript keep the section visible.

**Out of scope**

- Hero, house copy, house reel, services directory, nature banner, gallery teaser, visit strip, header, footer.
- `/about`, `/gallery`, service routes, new pages, booking, prices, bed counts.
- Invented doctor names, machine names, or medical outcomes.
- Reusing this section to close the About story gap.
- Changing which photo the house reel or the gallery teaser already uses, except to avoid showing the exact same three frames again if the owner assigns different files.

### Impacted routes & journeys

- **Journey 1 — Home** `/` **only.** Insert a facilities band after the house sheet and before Dịch vụ. Later bands stay in order.
- Journey 2–6 unchanged. About remains the labeled story/team/facilities gap.

### Docs to update

After the BA gate is `approved` (not in this session):

- [ ] `docs/user-journeys.md` — Journey 1 order
- [ ] `docs/sitemap.md` — Home note
- [ ] `docs/requirements.md` — Home row
- [ ] `docs/content-requirements.md` — facilities copy still a gap until sentences arrive
- [ ] `docs/acceptance-criteria.md` — add the HF rows below
- [ ] `docs/design-guidelines.md` — Designer, Journey 1 band list
- [ ] `docs/unresolved-questions.md` — only when the owner answers the items below

### `NEEDS OWNER INPUT`

Owner answers, 2026-11-21:

1. **Mobile.** Approved: photos on top, text below.
2. **Photo count.** Approved: **3** frames. No fourth file.
3. **Which files.** Two assigned. The third frame is still open.
   - `assets/spa/anh_bac_si.jpeg` (owner said `.png`; the file on disk is `.jpeg`) — doctor photo.
   - `assets/spa/cong_nghe_cao.jpeg` — high-tech massage photo.
4. **Heading.** `Cơ sở vật chất`.
5. **Body.** Owner wrote `mock`. Designer may show a labeled mock paragraph. It is not confirmed content. Do not turn the burned-in promo lines into that mock or into live copy (free consult, booking button, **299K**). Those lines are not on the menu and include a booking CTA, which stays out of MVP.
6. **Ship rule.** BA default stands: Designer proposes now. Dev uses only assigned photos and does not invent doctor or machine sentences.

**Asset treatment (owner, same day).** When these two photos are used:

- Remove the type laid on top of the picture. Publish the photograph only.
- `anh_bac_si.jpeg` overlay to remove: corner logo, **MIỄN PHÍ**, **KHÁM VÀ TƯ VẤN SỨC KHOẺ**, **bởi BS Y học cổ truyền**, **Đăng ký lịch với Jade ngay!**
- `cong_nghe_cao.jpeg` overlay to remove: corner logo, **ƯU ĐÃI TRẢI NGHIỆM**, **MASSAGE CỔ VAI GÁY CÔNG NGHỆ CAO**, **CHỈ 299K**.
- The mark stitched on clothing is part of the photo. Remove it only if the owner says so.
- On `cong_nghe_cao` only, brighten the woman so she reads lighter. Do not replace her, and do not lift the whole room to white.

### Acceptance criteria (draft for this CR)

| ID | Criterion |
| --- | --- |
| HF1 | On `/`, the facilities section sits after `#tiep-theo` and before the moss Dịch vụ band. Hero, house band, services, banner, gallery teaser, and visit strip otherwise stay as they are. |
| HF2 | From the `md` breakpoint up, the collage is on the left and the description on the right. The photo group is wider than the text. |
| HF3 | Below `md`, the collage is first and the description is second. No horizontal overflow at 390px wide. |
| HF4 | The collage shows 3 frames. Two are the cleaned `anh_bac_si` and `cong_nghe_cao` photos. The third is an owner file still to be named, or a visibly labeled empty slot. No stock photo and no nhaspa image. |
| HF5 | The `h2` is **Cơ sở vật chất**. Body copy is either owner-approved Vietnamese or a paragraph labeled mock. The mock does not repeat the deleted overlays: miễn phí khám, đăng ký lịch, or 299K. |
| HF6 | The section has one `h2`. The page still has one `h1`. |
| HF7 | No booking control and no new route. |
| HF8 | The section fades in once. Reduced motion and no JavaScript leave it visible. The delayed float stays on the house band only. |
| HF9 | The collage is static. No Tiếp/Trước control. |
| HF10 | The published doctor and machine photos have no promo overlay and no corner logo. The picture itself remains. |
| HF11 | In the machine photo, the woman is brighter than in `assets/spa/cong_nghe_cao.jpeg`. She is not replaced. The room is not graded white. |

### Recommended next step for Designer

After this gate is `approved`, propose the collage inside the current system: ivory paper, linen texture like the house and gallery bands, Forest type, existing frame radius (2px on room frames). Desktop split mirrors the house band (photos left, copy right) so the two bands do not repeat the same side. Keep the moss services band as the next dark section.

Plan the collage for **3** photos: cleaned `anh_bac_si`, cleaned `cong_nghe_cao` with the woman brighter, and one unnamed third frame marked `NEEDS OWNER INPUT`. Do not draw a new Figma file. Heading in the proposal is **Cơ sở vật chất**. Body is a labeled mock, not the promo lines that get stripped off the photos.

## Design — review & proposal

Written 2026-11-21. No new color, type, or radius. `docs/design-guidelines.md` stays as the live site until this Design gate is `approved`. After approval, insert the band below as Journey 1 item 3 and renumber Services through Visit strip to 4–7.

### Current design relevant to this CR

Home after the hero is one ivory sheet (`#tiep-theo`, `bg-paper`, linen texture, rounded top, overlap). Inside it: Forest copy on the left, a drifting reel on the right (`md:grid-cols-[0.9fr_1.1fr]`). The next band is dark moss **Dịch vụ**. Gallery frames later use `PhotoFrame`: 2px radius, soft film, not a carousel. Empty frames already say **Ảnh sẽ được thay bằng ảnh spa**.

The two new files are landscape `anh_bac_si.jpeg` (1672×941) and square `cong_nghe_cao.jpeg` (2048×2048). Both still have promo type on the picture.

### Fit with `docs/design-guidelines.md`

Use Ivory paper, linen, Forest Cormorant `h2` (36/44 desktop, 28/36 mobile), Manrope body, left alignment, 2px frames. One enter fade. No float (that stays on the house band). No moss, no Bronze button, no centered long paragraph. Photos stay wider than the words, which is the reverse of the house split, so the two ivory bands do not repeat the same side.

### Proposal (layout, tokens, motion, content slots)

One section, `id="co-so"`, inserted after `#tiep-theo` and before `ServicesMossBand`. Same paper and linen as the house. No second rounded sheet and no new shadow. Top padding is 0 so the house band’s existing bottom padding is the gap. Bottom padding `pb-12 md:pb-16` before the moss band.

**Desktop (**`md` **and up).** One row, `md:grid-cols-[1.2fr_0.8fr]`, `md:gap-10`, `md:items-center`. Collage left. Words right.

Collage, not a row of three equal frames. CSS grid of 5 columns, `gap-3`:

| Frame | Place | File | Shape |
| --- | --- | --- | --- |
| 1 | Top, all 5 columns | Cleaned doctor photo | `aspect-[16/9]` |
| 2 | Bottom, first 3 columns | Cleaned machine photo, woman brighter | `aspect-square` |
| 3 | Bottom, last 2 columns, stretches to the square’s height | No file yet | `PhotoFrame` with no `src` |

**Words.** One `h2`: **Cơ sở vật chất**. Under it, one left paragraph, max 42ch: **Nội dung sẽ được bổ sung.** That is the labeled mock. Do not write a doctor title, a machine name, a result, a price, or a booking line into that paragraph.

**Motion.** One `Reveal` on the grid. Do not add `reveal-float`. Frames may use the existing `PhotoFrame` soft film, the same as gallery. No Tiếp/Trước. No link on the frames.

**Assets.** Leave the owner jpegs in `assets/spa/` untouched (they are the before). Publish cleaned files as `public/spa/bac-si.jpg` and `public/spa/cong-nghe-cao.jpg`. Remove the overlay by repairing the picture underneath. Do not crop off the people or the machine. On the machine photo, lift only the standing woman (face, arms, uniform) so she is clearly lighter than the source. Leave the guest, the machine, and the room at the source brightness.

**Alt.** Doctor: `Người mặc áo blouse trắng đang trao đổi với khách tại Jade Healing Spa`. Machine: `Kỹ thuật viên dùng máy trên lưng khách tại Jade Healing Spa`. Do not put the deleted slogans in the alt.

### Desktop / mobile notes

**Below** `md`**.** Same collage first, full column width, then the heading and the gap sentence (`gap-8` between collage and text). The 3/5 and 2/5 split stays, so the empty slot remains beside the machine photo instead of becoming a third full-width row. Content width at 390 stays inside the wrap (`px-5`). No horizontal scroll.

**1440.** Text column is the narrower 0.8 fraction and stays left-aligned, vertically centered with the collage.

### Explicit non-goals (no clone, no new Figma unless asked)

- No Figma file.
- No change to hero, house copy, house reel, services, banner, gallery teaser, visit strip, header, or footer.
- No booking control, no price, no “miễn phí”, no “đăng ký lịch”.
- No third photo chosen by Design. The empty frame stays until the owner names a file.
- The stitched mark on the uniform stays.

### Handoff notes for Developer

- Edit `app/page.tsx` only for this insert. Reuse `SectionTexture`, `Wrap`, `Reveal`, `PhotoFrame`.
- Empty third frame: `<PhotoFrame />` with no `src` (existing label). Give it `className="col-span-2 h-full min-h-[140px]"`.
- Doctor frame: `className="col-span-5 aspect-[16/9]"`, `sizes="(min-width: 768px) 58vw, 100vw"`.
- Machine frame: `className="col-span-3 aspect-square"`, same sizes.
- `h2` classes match the gallery heading: `font-display text-[28px] leading-9 font-medium md:text-[36px] md:leading-[44px]`. Paragraph `mt-3 max-w-[42ch] md:mt-4`.
- Do not import the raw `assets/spa/*.jpeg` into the page.

## Dev — implementation

Implemented 2026-11-21 on `improve-ui`. Not committed.

### Summary of code changes

Home `/` now has `#co-so` after the house sheet and before Dịch vụ. Desktop collage is left and wider; the heading and gap sentence are right. Below `md`, the collage is first and the sentence is under it. The third frame is the existing empty label. Cleaned photos are published; the owner jpegs in `assets/spa/` are unchanged.

### Files touched

- `app/page.tsx` — the section
- `lib/photos.ts` — `homeFacilityDoctor`, `homeFacilityMachine`
- `public/spa/bac-si.jpg`, `public/spa/cong-nghe-cao.jpg` — promo type removed; the woman in the machine photo is brighter (face lightness about 49 → 63)
- `docs/design-guidelines.md`, `docs/user-journeys.md`, `docs/sitemap.md`, `docs/requirements.md`, `docs/acceptance-criteria.md`, `docs/STATUS.md`, `docs/change-requests/INDEX.md`

### Sample / placeholder labels used

- Body: **Nội dung sẽ được bổ sung.**
- Third frame: **Ảnh sẽ được thay bằng ảnh spa**

### How to verify locally

```bash
npm run dev
# route: http://127.0.0.1:3000/#co-so
```

Checked on a running local server: one `h1`, heading order house → Cơ sở vật chất → Dịch vụ, no promo strings in the section, desktop columns about 617 / 411, phone width 390 with no horizontal overflow, machine frame square beside the empty slot.

### Follow-ups / debt

- Third photo is still unnamed.
- The doctor desk still has a soft repaired band where the offer box was. No readable promo line.
- A stronger brighten of the woman is possible if this pass is still too dark.
- 2026-11-21 owner review: the tall stack did not fit one viewport and the rise felt abrupt. Dev tightened the three photos into one frame (about 46svh), moved the words further away (`gap-12`, `md:gap-24`), and shortened the enter motion.

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
| 2026-11-21 | Owner | Mở CR: section cơ sở vật chất sau house band, trước Dịch vụ; 3–4 ảnh trái, mô tả phải. Copy, ảnh, và claim bác sĩ/máy chưa chốt. |
| 2026-11-21 | BA | Plan: ivory band, 3 ảnh trái / chữ phải, mobile ảnh rồi chữ. Claim bác sĩ và máy không lên site cho đến khi owner chốt câu và file. Live journey docs chưa sửa. |
| 2026-11-21 | Owner | BA gate approved. `h2` Cơ sở vật chất. Mobile: ảnh rồi chữ. 3 khung. Files: `anh_bac_si.jpeg`, `cong_nghe_cao.jpeg` (not png). Strip promo type; brighten the woman on the machine photo. Body = mock. Third photo still open. |
| 2026-11-21 | Designer | Collage: doctor 16:9 on top, machine square on 3/5, empty slot on 2/5. Copy column is the gap sentence only. No new tokens. Guidelines update waits for this gate. |
| 2026-11-21 | Owner | Design gate approved. Dev on branch `improve-ui`. |
| 2026-11-21 | Dev | Section `#co-so` on `improve-ui`. Cleaned photos in `public/spa/`. Body and third frame stay labeled gaps. |
