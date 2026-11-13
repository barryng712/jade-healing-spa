---
name: qa-review-change
description: QA stage for a change request after Dev gate approved, or full-site QA. Playwright + AC; fill CR QA section. Readonly toward app code.
disable-model-invocation: true
---

# Skill — QA review change

1. For a CR: verify Dev gate is `approved`. The site under test is `http://127.0.0.1:3000` when `npm run dev` is up. If it is down, ask the owner to start it. Do not substitute `npm test` or `npm run research:*` — those open nhaspa.com.vn.
2. Follow `.cursor/agents/qa-reviewer.md`.
3. Check CR AC + relevant rows in `docs/acceptance-criteria.md`.
4. Local Playwright: `npm run smoke:local` (dev server required), plus the checklist in `/local-smoke`. Add focused checks on the changed routes.
5. Fill QA section; optionally invoke **content-guard**.
6. Stop for **Owner gate — QA** (close CR or return to Dev).
