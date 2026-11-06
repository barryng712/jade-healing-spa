---
name: local-smoke
description: Quick local smoke checklist for the Jade Next.js site (routes, nav, no booking, console). Use during QA or after Dev.
disable-model-invocation: true
---

# Skill — Local smoke

## Assume

`npm run dev` → `http://127.0.0.1:3000` (ask owner to start if down).

## Checklist

1. Routes load: `/`, `/about`, `/services`, category + one detail slug, `/gallery`, `/reviews`, `/contact`, unknown → 404.
2. Header: logo accessible name, nav labels per `docs/acceptance-criteria.md` G1; Dịch vụ hover groups if applicable.
3. No booking / payment / login UI.
4. Phone on site is only confirmed numbers from confirmed content (not cropped promotional numbers).
5. Spot-check mobile width ~390 and desktop ~1440 for overflow.
6. Note console errors if browser tools available.

## Output

Pass/fail table + blockers. Do not invent fixes unless owner asks Dev.
