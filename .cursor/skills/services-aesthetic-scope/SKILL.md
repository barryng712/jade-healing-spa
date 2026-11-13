---
name: services-aesthetic-scope
description: >-
  SUPERSEDED. Do not use. Live services UI is ServiceDirectory. This skill
  locked the retired minute-chip / price-band scan.
disable-model-invocation: true
---

# SUPERSEDED — live UI is ServiceDirectory

Do not apply this skill. The live browse model is `components/service-directory.tsx`, massage intents at `/services/massage/nhom/…`, and detail `?phut=`. See `docs/STATUS.md`. The notes below are a historical record. For a new services CR, use `/ba-evaluate` and `.cursor/skills/reference-intake/SKILL.md`.

# Services aesthetic scope

Read `.cursor/skills/reference-intake/SKILL.md` first, then this skill. Stop when the existing services CR’s BA section is refreshed. Do not design. Do not edit `app/`, `components/`, or `docs/design-guidelines.md`.

## Facts vs recommendations

- **Facts** are what the note says was on the screen, plus `lib/menu.ts` and `lib/photos.ts`. Quote the note. Do not add a visit you did not make.
- **Recommendations** stay unapproved until the owner request already asks for that outcome. Name what you locked and what you left for Designer.

## Lock scan behavior

On `/services` and `/services/[category]`:

- Every real minute mark and its matching price from `lib/menu.ts`.
- Every group row links to the existing `/services/[category]/[slug]` URL.
- At phone width, each offering stacks the existing photo, then the name and the prices. Side-swap, if used, is the wide viewport only.
- No horizontal scroll at 390.

On the detail page, keep the photo with the ritual, the selected price as a display figure, and the minute chips.

Leave composition to Designer: band versus card, whether category photo doors lead the overview, type scale, how several prices sit on one row, and how the phone stack looks.

## Do not copy

The reference business’s name, sentences, prices, durations, inclusions, photos, drawings, booking, city filter, and “from” / starting-price format stay in the research note.

Do not invent a luxury paragraph. If a false lead must come off, leave the slot empty and mark a replacement sentence `NEEDS OWNER INPUT`.

## Example

A note says each phone row stacks photo, then name and price, and the page also has two city chips. The stack can lock: those routes exist, and the guest must scan real minutes and prices. The city filter stays out: Jade has one address, and those chips belong to the other business.
