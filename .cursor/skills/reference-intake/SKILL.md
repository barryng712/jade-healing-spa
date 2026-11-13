---
name: reference-intake
description: >-
  Turns a research/*.md reference note into Jade Healing Spa change-request
  scope. Separates observed facts from recommendations, keeps the reference
  business's copy, prices, claims, and images out of Jade, and maps ideas only
  onto routes that already exist. Use when a BA reads a reference-site note to
  fill a CR, or when the owner asks to study another site's layout without
  copying it.
---

# Reference intake

Use when a `research/*.md` note exists and a CR needs scope. Stop when the BA section is filled. Leave visual design and the site code to later roles.

## Read

1. `AGENTS.md`, `PROJECT_BRIEF.md`, `docs/STATUS.md`, and the target `docs/change-requests/CR-*.md`.
2. The named `research/*.md` note. Keep its **Observed facts**, **Interpretations**, **Recommendations**, **Do not copy**, and **Unresolved questions** in those roles even if you merge them into the CR.
3. Confirmed Jade material only: `lib/menu.ts`, `docs/confirmed-content.md`, `lib/photos.ts`, and routes already listed in `docs/STATUS.md`.

## Facts vs recommendations

- **Facts** are what the note says was on the screen, plus data already in this repo. Quote the note. Do not add a visit you did not make.
- **Interpretations** explain why a pattern holds attention. They are not requirements.
- **Recommendations** are unapproved ideas. Lock one only when the owner request already asks for that outcome. Name what you locked and what you left for Designer.
- The reference business's sentences, prices, durations, inclusions, claims, icon names, and image files stay in the research note. Jade copy, prices, and photos come from this repo.

## Scope rules

- Map a pattern only onto a route the site already has: `/`, `/about`, `/services`, `/services/[category]`, `/services/[category]/[slug]`, `/gallery`, `/reviews`, `/contact`. A new route, booking flow, payment, account, or backend is out of MVP.
- Names, minutes, prices, and category descriptions come from `lib/menu.ts`. Photos come from files already on the site. If a figure is missing, write `NEEDS OWNER INPUT` and leave the slot empty.
- Ritual steps come from `lib/menu-rituals.ts`. Do not invent steps or restore “Bước mẫu” filler. Tiers with no array omit Quy trình. Room type, snacks, medical claims, reviews, and awards need owner text before they appear.
- A home band or other journey the owner named as its own CR stays out.
- When the note skipped a viewport (often mobile), record that limit. Designer uses Jade's existing breakpoints. Do not invent the missing reference layout.

## Write the CR

Fill the BA section. Set Status to `design` and the BA gate to `approved` with the owner's date and note only when that same message already authorizes the next role. Otherwise leave Status at `ba` and the gate at `pending`.

Include:

- Interpretation: facts, then recommendations locked vs left open.
- In scope / out of scope.
- Impacted routes (existing only).
- Docs to update. Leave `docs/requirements.md` unchecked for a presentation change. If a journey sentence would become false, point Designer at `docs/design-guidelines.md` and do not edit it yourself.
- `NEEDS OWNER INPUT` for missing business facts. "Make it more luxurious" is not an open question.
- 6–8 testable acceptance criteria: Vietnamese UI, keyboard focus, no horizontal scroll, figures match `lib/menu.ts`, no reference-site strings.

## Example

A note says the reference shows a booking button, two city filters, and a price as the loudest figure in each row. Booking and city filters stay out: Jade has no booking and one address. Showing each real minute mark and its price can lock onto `/services` and `/services/[category]` because those routes exist and `lib/menu.ts` already stores the figures. Which band or card draws that price is Designer's proposal.

## Stop

Leave the Design, Dev, and QA sections empty. Do not edit `app/`, `components/`, or `docs/design-guidelines.md`. End with **Owner gate — approve BA plan before Designer** unless the owner already set that gate in the same message.
