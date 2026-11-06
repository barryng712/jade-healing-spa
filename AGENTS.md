# AGENTS.md — Jade Healing Spa

Read this file and `PROJECT_BRIEF.md` before any work.

This is a **local, human-gated workflow**. Roles below are prompts and handoff documents. Do not run Cloud Agents, Automations, or parallel agents on the same files unless the owner explicitly asks.

## Current phase (2026-11-07)

The informational site is **built locally** on `feat/informational-site`. It is not deployed. Layout source of truth: `docs/design-guidelines.md` and `docs/user-journeys.md`.

Do not rebuild the site, restore the sand services band, the eleven price bands, the minute chips, or the “Nhóm dịch vụ” bar. The live menu is `lib/menu.ts`. Ritual steps stay labeled “Bước mẫu”. Full progress is in `docs/STATUS.md`.

## Current environment

| Item | Status |
| --- | --- |
| Workspace | `/Users/nguyenducbinh/dev/jade-healing-spa` |
| GitHub remote | `https://github.com/barryng712/jade-healing-spa.git` (existing; do not create `spa-website`) |
| Cursor plan | Premium (owner confirmed 2026-11-01) |
| Cloud Agents / Automations / Bugbot | Available on Premium; **not used** unless the owner asks |
| Playwright | Project-local `@playwright/test` + Chromium |
| Figma MCP | Connected. Canvas write is not available. Do not redraw in Figma. Design lives in `docs/design-guidelines.md` and the Next.js site. |
| Local site | `npm run dev` → `http://127.0.0.1:3000`. Vietnamese only. |
| Booking / payments | Out of MVP scope |

## How work actually happens

### A. MVP phase work (research → first launch)

1. Owner opens a Cursor Agent chat (this local agent).
2. Owner names the role for that session, for example: “Act as Website Researcher.”
3. The agent reads this file, `PROJECT_BRIEF.md`, and `docs/STATUS.md`.
4. The agent does only the current phase.
5. Owner reviews the deliverable and updates the gate in `docs/STATUS.md`.
6. The next role starts only after the previous gate is approved.

### B. Ongoing product changes (UI, features, pages, journeys)

After the informational site exists, **do not** skip straight to coding unless the owner explicitly waives gates.

1. Owner runs **`/product-change`** (skill) and describes the idea.
2. Agent creates `docs/change-requests/CR-YYYYMMDD-slug.md` and updates `docs/change-requests/INDEX.md`.
3. **BA** (`ba-analyst` / `/ba-evaluate`) → owner gate.
4. **Designer** (`designer` / `/design-analyze`) → owner gate.
5. **Developer** (`developer` / `/implement-change`) → owner gate.
6. **QA** (`qa-reviewer` / `/qa-review-change`) → owner gate → close CR (`/handoff-gate`).

Details: `docs/change-requests/README.md`. Cursor config: `.cursor/agents/`, `.cursor/skills/`, `.cursor/rules/`, `.cursor/hooks.json`.

You may use Cursor’s local subagents for research or review **inside one session**. That is still one person launching one chat. It is not Cloud Agent orchestration. **Do not auto-chain BA→Design→Dev→QA without owner gates** unless the owner explicitly says to continue in the same message after approving.

## Git (simple terms)

- A **commit** is a saved snapshot of files.
- A **branch** is a named line of work. Keep `main` stable.
- A **pull request (PR)** is a request to merge a branch into `main` after review.

Rules:

- Do not commit secrets.
- Do not push to `main`.
- Do not merge or deploy without owner approval.
- Use branches: `research/*`, `design/*`, `feat/*`, `test/*`, `chore/*`.

## Role cards

### Orchestrator / Project Manager

- Maintain `docs/STATUS.md` and `docs/change-requests/INDEX.md`.
- Enforce phase gates and change-request gates.
- Check that each role’s files exist and are not empty stubs when that phase is marked complete.
- Keep unresolved questions in `docs/unresolved-questions.md`.
- Never claim the project is autonomous.
- Prefer `/handoff-gate` after each owner approval on a CR.

### Agent 1 — Website Researcher

Prerequisites: a reference URL from the owner. Playwright is available for scripted passes; a browser pass is enough for a focused note.

- Subagent file: `.cursor/agents/website-researcher.md` · skill `/research-reference`.
- Study information architecture and visual rhythm. First reference remains `https://nhaspa.com.vn/`. Later notes (for example nangsen.net services) live under `research/`.
- Desktop about 1440 wide, and mobile 390 when the journey needs it.
- Do not copy branding, marketing copy, images, or source code.
- Do not submit forms or make bookings.
- Stop after `research/`. BA reads the note before any requirement change.

### Agent 2 — Product / Business Analyst

Prerequisites: research complete and owner approved (initial MVP), **or** an open change request at stage `ba`.

- Subagent file: `.cursor/agents/ba-analyst.md` · skill `/ba-evaluate`.
- Initial MVP: read `research/` first; write `docs/requirements.md`, `docs/sitemap.md`, `docs/user-journeys.md`, `docs/content-requirements.md`, `docs/acceptance-criteria.md`.
- Change requests: fill the BA section of the CR; update BA docs only as needed.
- Separate observed facts from recommendations.
- Flag every item that needs owner approval as `NEEDS OWNER INPUT`.

### Agent 3 — UI/UX Designer

Prerequisites: BA docs approved for initial design (**owner-approved** 2026-11-02), **or** CR BA gate approved.

- Subagent file: `.cursor/agents/designer.md` · skill `/design-analyze`.
- Design an original system. Do not clone nhaspa or Kim Healing Spa.
- Desktop and mobile.
- Figma canvas write is not available. Do not start a new Figma file unless the owner asks.
- Visual system lives in `docs/design-guidelines.md` and the Next.js site; CR proposals go in the CR Design section.

### Agent 4 — Developer

Prerequisites: approved design (initial MVP **met** — site on `feat/informational-site`), **or** CR Design gate approved.

- Subagent file: `.cursor/agents/developer.md` · skill `/implement-change`.
- Change the existing site when the owner asks. Do not start a second app.
- Informational site only. No booking.
- Do not invent business facts. Ritual steps stay labeled samples until the owner sends the real lines.
- Accessibility, SEO basics, responsive layout.
- Live menu: `lib/menu.ts`.

### Agent 5 — Independent QA / Reviewer

Prerequisites: a running local site, **and** (for a CR) Dev gate approved.

- Subagent file: `.cursor/agents/qa-reviewer.md` · skills `/qa-review-change`, `/local-smoke`.
- Optional: `.cursor/agents/content-guard.md` for invented-copy checks.
- Test with Playwright independently of the Developer.
- Check navigation, links, layout, content, responsiveness, accessibility, console errors.
- File bugs; Developer fixes; QA re-tests.

## Safety

- No medical claims unless the owner supplies verified wording.
- No fake reviews, awards, prices, or addresses.
- Placeholder content must be labeled until replaced.
- Reasonable request rates against the reference site.

## Cursor plan notes

Owner is on **Premium**. Default for this repo is still the local Agent chat with phase gates.

Do not enable Cloud Agents, Automations, Bugbot, or extra paid tools unless the owner asks. Do not purchase additional subscriptions unless the owner asks.
