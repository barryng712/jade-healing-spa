# CR-20261106-home-services-band — Dải dịch vụ trang chủ

> **Superseded 2026-11-07.** Home services are the card directory (Massage, Gội đầu dưỡng sinh, Combo), not the sand band. See `docs/design-guidelines.md` Journey 1. The sections below are the earlier record.

| Field | Value |
| --- | --- |
| ID | `CR-20261106-home-services-band` |
| Created | 2026-11-06 |
| Owner | Product owner (chat) |
| Status | `dev` |
| Branch | `feat/informational-site` (current; Dev does not open a second app) |
| Priority | `high` |

## Owner request

**What changes?**

> On the homepage, the services section cards look uneven next to the rest of the page. Redesign that band only: a calmer background and an even layout for the three category cards.

**Why / success looks like**

> The band sits quietly between the linen house section and the spa photo. Titles stay easy to read. Massage, Chăm sóc tóc, and Combo share one row on a desktop screen and stack on a phone, with no empty cell.

**Out of scope**

> The 11-item catalog (that stays on `/services` only). Booking. New copy, prices, or medical claims. The house band, gallery band, visit strip, and “Từ gỗ, cây và nước.” banner. The rolled-back five-swatch moodboard (ivory / taupe / terracotta / olive / walnut) and any terracotta plaster.

**Constraints**

> Vietnamese only. Informational MVP. Mộc / wood-linen: paper `#F4F0E8`, ink `#1C1915`, wood `#5C4636`, sand `#E9DCC8`, line `#E4DCD0`. Moss is not a panel color here. No purple, no glass, no full green wash. Do not clone nhaspa or Kim Healing Spa.

## Gates (owner only flips these)

| Stage | Result | Date | Notes |
| --- | --- | --- | --- |
| BA plan | `waived` | 2026-11-06 | Owner waived BA in chat and asked Designer, then Developer, in the same message. |
| Design proposal | `approved` | 2026-11-06 | Owner asked for this spec to go straight to Developer. No separate design pause. |
| Dev implementation | `pending` | | |
| QA report | `pending` | | QA has not started. |

## BA — evaluation & plan

Owner waived BA for this change in chat on 2026-11-06. No BA doc pass.

### Acceptance criteria (for Dev and later QA)

1. Homepage services band shows only Massage, Chăm sóc tóc, and Combo, using `category.name` and `category.description` from `lib/menu.ts` and `categoryPhotos` from `lib/photos.ts`.
2. At 1440px the three cards sit on one row inside the 1120px column, with no empty cell. At 390px they stack, one card per row, photo on top.
3. The band background is the new sand-stucco file below, on sand `#E9DCC8`, light enough that “Dịch vụ” and the intro read in ink / muted. It is not olive, not a dark moss panel, and not terracotta.
4. House (`linen-neutral` on `bg-paper`), gallery (same), visit strip (olive-weave on `#2a3328`), and the soaking-hall banner are unchanged.
5. No new prices, services, or medical claims.

## Design — review & proposal

### Current design relevant to this CR

Checked on `http://localhost:3000/` at 1440×1000 and 390×844.

The services band is `bg-[#e9dcc8]` plus `/textures/olive-weave.jpg` at `mix-blend-multiply opacity-80`. That file is an olive corduroy (raw average about `#585337`). Multiply turns the band into a dark khaki panel. The house and gallery bands are `linen-neutral.jpg` (a warm trowel plaster, raw average about `#D4C9B8`) on `bg-paper`. The middle banner is the real photo `homeNatureBanner`. The visit strip correctly keeps olive-weave, but on `#2a3328` with soft-light.

What looks uneven:

- Hue. Khaki corduroy between warm plaster and the spa photo.
- Value. The band is much darker than the linen neighbors, so the cream cards (`#f7f1e6`) read as bright stickers.
- Type. The intro “Ba lối vào…” is `text-muted` (`#5C554C`) and nearly disappears on the olive.
- Grid. `md:grid-cols-2` on a 1040px row. Measured at 1440: two cards at 512px, and Combo alone on the left. That empty cell is the ugly part of the layout.
- Mobile already stacks (photo on top, cards about 350px wide). The stack is fine. The olive ground is not.

`ServiceCategoryCards` is only used on the homepage. Radius today is already 16px card / 12px photo (`rounded-2xl` / `rounded-xl`). Keep that. Do not add shadow.

### Fit with `docs/design-guidelines.md`

Band 3 stays a light sand menu index. The guideline row now names this texture and the one-row layout. Card radius, flat cards, and the `/services` catalog are unchanged. No new color token. Sand stays `#E9DCC8`. This band does not become moss or olive.

### Chosen background

One pin, for this band only.

| | |
| --- | --- |
| Pin | https://www.pinterest.com/pin/26388347812306225/ |
| Direct image | https://i.pinimg.com/1200x/1e/a8/08/1ea8084116ec22fc7fdb8d1f8ec837ba.jpg |
| Save as | `public/textures/sand-stucco.jpg` |
| What it is | Close-up warm plaster / fine stucco. No text, no logo, no people, no watermark. |
| Size | Largest URL that returns a real file. `originals/` is 403. The `1200x` file is a portrait JPEG, about 896×1344, about 270KB. |

Why it belongs next to paper `#F4F0E8` and sand `#E9DCC8`:

- The photo’s own average is about `#DDD2C0`. That is the same warm yellow-beige as paper `#F4F0E8` and sand `#E9DCC8`, a step deeper, with no green cast.
- `linen-neutral.jpg` is a cousin plaster (`#D4C9B8`) with diagonal trowel marks. This file is a finer, even stipple, so the two light bands rhyme and do not repeat one photograph.
- It is not the olive corduroy, not a bright green, and not a terracotta-orange wash. It is not one of the deleted palette crops.

Rights: third-party Pinterest image. Use it only because the owner asked for a new Pinterest background. This spec is not a license. Download the file into the repo. Do not hotlink `i.pinimg.com`.

### Proposal (layout, tokens, motion, content slots)

**Band**

```tsx
<section className="relative overflow-hidden bg-[#e9dcc8] py-8 text-ink md:py-12">
  <SectionTexture
    src="/textures/sand-stucco.jpg"
    blend="mix-blend-multiply opacity-40"
  />
  <Wrap className="relative">
    <Reveal>
      <ServiceCategoryCards />
    </Reveal>
  </Wrap>
</section>
```

- Base color: sand `#E9DCC8` (`bg-[#e9dcc8]`), the token this band already uses. Do not switch the base to moss, wood, or `#2a3328`.
- Blend: `mix-blend-multiply` at `opacity-40`. Full multiply on this file drops to about `#CBB597` and the muted intro falls under 4.5:1 on the darker pores. At 40% the field lands near `#DCCCB4`, still sand, and muted text stays about 4.6:1 on those pores.
- No second veil. No soft-light (that treatment stays on the dark visit strip). No extra white wash.
- If 40% looks flatter than the house plaster in the browser, raise it only to `opacity-45`. Do not go past 50. If the intro then fails contrast, change the intro and the card descriptions from `text-muted` to `text-ink/80`. Do not darken the band to fix type.
- Text: `text-ink` on the section. Light band, dark type. Do not set `text-cream`.

**Cards**

Keep the heading “Dịch vụ”, the intro sentence, and each category’s name and description. Do not rewrite them.

```tsx
<ul className="mt-8 grid grid-cols-1 gap-4 lg:mt-10 lg:grid-cols-3">
  <li className="min-w-0">
    <Link
      href={categoryPath(category.slug)}
      className="flex h-full flex-col gap-3 rounded-2xl border border-wood/25 bg-cream p-3 text-ink no-underline hover:border-wood"
    >
      <span className="relative block h-[168px] overflow-hidden rounded-xl lg:h-[132px]">
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          sizes="(min-width: 1024px) 336px, 100vw"
          className="object-cover"
        />
      </span>
      <span className="block min-w-0">
        <span className="block font-display text-[22px] font-[460] leading-tight">
          {category.name}
        </span>
        <span className="mt-2 block text-sm leading-relaxed text-muted">
          {category.description}
        </span>
      </span>
    </Link>
  </li>
</ul>
```

- Radius: `rounded-2xl` (16px) on the card, `rounded-xl` (12px) on the photo. Same as the service lists. Flat. No shadow, no lift, no scale.
- Fill: `bg-cream` (`#FBF8F3`), the existing token, in place of the one-off `#f7f1e6`.
- Border: `border-wood/25`, hover `border-wood`. The old `#e0d3c0` will vanish on a sand field.
- Photo moves above the text. A 140px side photo does not fit a ~336px column with these descriptions.
- `h-full` so the three cards share a height when the Combo line wraps longer.
- Hover is the border only. Focus keeps the global wood outline.

**Motion.** No new motion. Leave the existing `Reveal` on the band. Photos stay still.

### Desktop / mobile notes

Content column is `max-w-[1120px]` with `md:px-10` (40px each side), so the inner row at a 1440 desktop is **1040px**.

- `lg:grid-cols-3` and `gap-4` (16px): `(1040 − 32) / 3 = 336px` per card. It fits.
- At the `lg` breakpoint (1024px) the inner width is 944px, about **304px** per card. Photo-on-top still fits. “Chăm sóc tóc” stays one line. The Combo description wraps to about three lines.
- Do **not** use `md:grid-cols-3`. At 768px the inner width is about 688px, about 218px per card, and the descriptions crush.
- Do **not** use `md:grid-cols-2`. That is the current hole.
- Below `lg`, including 390: one column, full width of the wrap, photo on top at 168px, then the name, then the description. Gap 16px. No horizontal scroll.

### Explicit non-goals

- Do not draw this in Figma.
- Do not bring back the five-band moodboard or those deleted palette files.
- Do not use terracotta plaster, a green wash, glass cards, or olive-weave on this band.
- Do not turn the band into the full menu. Three cards only.
- Do not restyle the house, gallery, visit strip, or nature banner.
- Do not invent services, prices, or claims.

### Handoff notes for Developer

Download (do not hotlink):

```bash
curl -L -o public/textures/sand-stucco.jpg \
  "https://i.pinimg.com/1200x/1e/a8/08/1ea8084116ec22fc7fdb8d1f8ec837ba.jpg"
```

Expect a warm stippled plaster, no letters, roughly 896×1344. If the response is a tiny file, an error image, or a watermark, stop and do not substitute olive-weave, linen-neutral, or a terracotta texture.

Files to touch:

- `app/page.tsx` — the services `<section>` only (src, blend, `text-ink`). Leave the other four bands as they are.
- `components/service-category-cards.tsx` — grid and card classes above. It is homepage-only.
- `public/textures/sand-stucco.jpg` — new file.

Do not edit `components/service-catalog.tsx`, `lib/menu.ts`, or `lib/photos.ts`.

Leave unchanged:

- House and gallery: `bg-paper` + `/textures/linen-neutral.jpg` (default multiply).
- Visit strip: `bg-[#2a3328]` + `/textures/olive-weave.jpg` at `mix-blend-soft-light opacity-90`.
- Banner: `homeNatureBanner` (`/spa/soaking-hall.jpg`) with the ink veil and the line “Từ gỗ, cây và nước.”

`SectionTexture` already accepts a blend class string. No API change.

Check at 1440 and 390 on `http://localhost:3000/` (not `127.0.0.1`): three even cards, readable intro, sand field rather than khaki, neighbors untouched.

## Dev — implementation

Implemented on `feat/informational-site`. Not committed, pushed, or deployed. QA has not started.

### Files

- `public/textures/sand-stucco.jpg` — downloaded locally (not hotlinked). JPEG 896×1344, 271KB. Warm stippled plaster, no letters, no logo, no watermark.
- `app/page.tsx` — services `<section>` only. Base `bg-[#e9dcc8]`, texture `/textures/sand-stucco.jpg`, blend `mix-blend-multiply opacity-40`, `text-ink`.
- `components/service-category-cards.tsx` — `lg:grid-cols-3`, photo on top, `bg-cream`, `border-wood/25`. Title, intro sentence, and category name/description copy unchanged.

### Contrast

Left the blend at 40%. The stipple is visible and still sand, so it was not raised to 45.

`text-muted` (`#5C554C`) on the rendered field averaged about 4.6:1, but about a quarter of the darker stipple pores fell under 4.5:1 (darkest pores about 3.6:1). Intro and the two card description lines now use `text-ink/80`. Descriptions sit on `bg-cream`; that change keeps them with the intro, as specified. The band was not darkened to fix type.

### Verified

`http://localhost:3000/` (not `127.0.0.1`).

- Desktop 1440×1000: three cards on one row, each 336px, same top, no empty cell. No horizontal scroll. Field reads as warm sand plaster, not khaki or olive. Intro is readable. House (`linen-neutral` on `bg-paper`), soaking-hall banner (“Từ gỗ, cây và nước.”), gallery (`linen-neutral` on `bg-paper`), and visit strip (`olive-weave` on `#2a3328`, soft-light 90%) unchanged.
- Mobile 390×844: one column. Cards about 350px wide, photo 168px on top, then name, then description. `scrollWidth` 390. Card links: `/services/massage`, `/services/cham-soc-toc`, `/services/combo`. Texture and card photos loaded.

### Not changed

`components/service-catalog.tsx`, `lib/menu.ts`, `lib/photos.ts`. No new copy, prices, motion, or shadow.

## QA — review

2026-11-06, trên `http://localhost:3000`. Báo cáo đầy đủ: `docs/qa-draft-1.md`.

Pass theo quyết định owner trong decision log (ảnh bên trái, không thẻ kem), không theo mock “ảnh phía trên / nền kem” ở phần Design.

- Desktop 1440: ba thẻ một hàng (Massage, Chăm sóc tóc, Combo), cát sáng, chữ forest đọc được, không ô trống.
- Không giá mới, không booking.
- Token cát trên site là `#E9E2D5` (palette owner duyệt sau), không phải `#E9DCC8` trong spec cũ.

Dev gate trên bảng CR vẫn `pending`. Không đóng CR.

## Decision log

| Date | Who | Decision |
| --- | --- | --- |
| 2026-11-06 | Owner | Waived BA. Asked Designer, then Developer, in the same message. Rejected the five-swatch moodboard and terracotta backgrounds. |
| 2026-11-06 | Designer | Services band uses sand-stucco on `#E9DCC8` at multiply 40%. Three cards, one row from `lg`, photo on top. Olive weave stays on the visit strip only. |
| 2026-11-06 | Owner | Cream tiles read as too much white on the sand. Each entry is a square photo on the left, title and the existing short line on the right. No card fill. Title sizes follow the type scale (section 36/44, card 24/32), left aligned, weight 500. Faces stay Fraunces and Be Vietnam Pro until a site-wide font swap is approved. |
