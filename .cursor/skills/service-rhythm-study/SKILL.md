---
name: service-rhythm-study
description: >-
  Observes a reference site's services area at desktop about 1440 and phone
  about 390, and writes a rhythm note without cloning the reference. Use when
  the owner names nangsen, a services page, layout rhythm, or a reference
  site, or when the website researcher studies how offerings are scanned.
---

# Skill — Service rhythm study

Study how a services area is scanned. Jade keeps its own name, photos, menu, and palette.

Role card: `.cursor/agents/website-researcher.md`. Note shape: `.cursor/skills/research-reference/SKILL.md`.

## Pass

1. Read `AGENTS.md`, `PROJECT_BRIEF.md`, and `docs/design-guidelines.md` only to compare. Do not edit the guidelines or the Next.js site.
2. Open the services URL. Dismiss a language or cookie gate with the least click. Do not book, submit, or sign in.
3. Desktop about 1440 wide, then phone about 390 × 844 (`Emulation.setDeviceMetricsOverride`, `mobile: true`, `deviceScaleFactor: 2`). Clear with `Emulation.clearDeviceMetricsOverride` before you finish.
4. Scroll far enough for the checklist below. Snapshots, not one screenshot. If the phone viewport never loads, say so. Do not invent a mobile layout.
5. If one offering has its own page, open one detail URL. Record the real URL and the scan only.
6. Update `research/<site>-services.md` in place. Recommendations are optional and unapproved. Map them only onto routes Jade already has.

## Checklist

- Hero: photo, the one word on it, what sits under it.
- How a group is introduced: heading, short line, filters.
- How one offering is scanned: photo, name, time, price, and whether the row is a link.
- What the phone does: one column or a row, where the photo goes, whether name and price stay on one line.
- One detail page: order of photo, name, time, price, and what stacks on the phone.

## Do not copy

Their words, prices, durations, inclusions, photos, icons, drawings, header treatment, booking, city or location filters, medical claims, and source code. A short label in the research note is the only quote.

## Example

A header booking button and a two-city filter are real on the reference. Record them, then leave them out of Jade recommendations: Jade has no booking and one address. Prices in the note stay a pattern (“a large figure, duration under it”), not numbers to paste into `lib/menu.ts`.

## Note

Use the template in `.cursor/skills/research-reference/SKILL.md`: Observed facts, Interpretations, Recommendations for Jade, Do not copy, Unresolved questions. Stop with: Handoff — BA reads this note before changing requirements.
