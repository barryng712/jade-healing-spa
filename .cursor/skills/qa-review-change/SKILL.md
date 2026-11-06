---
name: qa-review-change
description: QA stage for a change request after Dev gate approved, or full-site QA. Playwright + AC; fill CR QA section. Readonly toward app code.
disable-model-invocation: true
---

# Skill — QA review change

1. For a CR: verify Dev gate is `approved`. Ensure `http://127.0.0.1:3000` or `localhost:3000` (or tell owner to start `npm run dev`).
2. Follow `.cursor/agents/qa-reviewer.md`.
3. Check CR AC + relevant rows in `docs/acceptance-criteria.md`.
4. Use Playwright when useful (`npx playwright test` or focused checks).
5. Fill QA section; optionally invoke **content-guard**.
6. Stop for **Owner gate — QA** (close CR or return to Dev).
