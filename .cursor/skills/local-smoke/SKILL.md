---
name: local-smoke
description: Quick local smoke checklist for the Jade Next.js site (routes, nav, no booking, console). Use during QA or after Dev.
disable-model-invocation: true
---

# Skill — Local smoke

## Assume

`npm run dev` → `http://127.0.0.1:3000` (ask owner to start if down).

Run `npm run smoke:local` against that origin. `npm test` and `npm run research:*` open https://nhaspa.com.vn. They are research, not this smoke.

## Checklist

1. Routes load: `/`, `/about`, `/services`, `/services/massage`, `/services/cham-soc-toc`, `/services/combo`, `/services/massage/nhom/thu-gian-toan-than`, `tri-lieu-chuyen-sau`, `an-than-giac-ngu`, one detail `?phut=`, `/gallery`, `/reviews`, `/contact`, unknown → 404.
2. Header: logo accessible name, nav labels per `docs/acceptance-criteria.md` G1. Desktop Dịch vụ hover and the mobile menu both list the three massage intents, the three gội tier names, and the three combo gói names.
3. No booking / payment / login UI.
4. Phone on site is only confirmed numbers from confirmed content (not cropped promotional numbers).
5. Spot-check mobile width ~390 and desktop ~1440 for overflow.
6. Note console errors if browser tools available.

## Output

Pass/fail table + blockers. Do not invent fixes unless owner asks Dev.
