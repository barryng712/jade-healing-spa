# Project status

Last updated: 2026-11-01 (BA docs written; awaiting owner approval)

Legend: `not started` · `in progress` · `blocked` · `complete` · `owner approved`

| Phase | Status | Notes |
| --- | --- | --- |
| A. Environment inspect | complete | macOS 26.5.2, Apple M5, Node 26.13.0, Git 2.50.1, GitHub remote exists |
| B. GitHub setup | complete | Using existing `barryng712/jade-healing-spa`. Do not create `spa-website`. `gh` CLI optional / not required |
| C. Project documentation | complete | Workflow + BA docs in `docs/`. Design guidelines remain a stub until Design |
| D. Playwright setup | complete | `@playwright/test` + Chromium; `tests/verify-playwright.spec.ts` last run passed |
| E. Figma MCP | blocked | `.cursor/mcp.json` points at `https://mcp.figma.com/mcp`. Owner must complete OAuth (see `docs/FIGMA_SETUP.md`) |
| F. Reference research | owner approved | Owner approved 2026-11-01. Deliverables in `research/` |
| G. Research handoff | owner approved | Closed after BA started |
| BA requirements | complete | `docs/requirements.md` and related files written. **Gate: owner review** |
| Design | not started | Gate: owner approves BA; Figma OAuth still blocked; brand photos still empty |
| Development | not started | Gate: owner approves design (or an explicit design exception) |
| QA | not started | Gate: local site exists |
| Release | not started | Gate: owner approval; no deploy without it |

## Cursor plan

- Current: **Premium** (owner confirmed 2026-11-01)
- Local Agent: available
- Cloud Agents / Automations / Bugbot: available on Premium **in product terms**; this project still uses a **local, human-gated** workflow unless the owner asks to use those features
- Fully autonomous multi-agent orchestration: **not in use**

Roles are prompts you start in this chat. They do not run in the background unless you explicitly start Cloud Agents later.

## Git

- Default branch: `main` (keep stable)
- Current work branch: `chore/setup-workflow`
- Do not merge to `main` without owner approval
- Do not push to `main`

## Owner actions right now

1. Review BA docs: `docs/requirements.md`, `docs/sitemap.md`, `docs/user-journeys.md`, `docs/content-requirements.md`, `docs/acceptance-criteria.md`.
2. Approve BA, or request changes.
3. Optional, in parallel: connect Figma MCP (`docs/FIGMA_SETUP.md`).
4. Optional, in parallel: add real files to `assets/brand/` and `assets/spa/`.
5. Answer items in `docs/unresolved-questions.md` / `docs/content-requirements.md` (required before honest website copy).
