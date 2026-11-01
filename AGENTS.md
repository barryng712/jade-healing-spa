# AGENTS.md — Jade Healing Spa

Read this file and `PROJECT_BRIEF.md` before any work.

This is a **local, human-gated workflow**. It is not a fully autonomous multi-agent system. Cursor Cloud Agents and Automations are **not available** on the current Cursor Free plan. Roles below are prompts and handoff documents, not background workers that run on their own.

## Current environment (verified 2026-11-01)

| Item | Status |
| --- | --- |
| Workspace | `/Users/nguyenducbinh/dev/jade-healing-spa` |
| GitHub remote | `https://github.com/barryng712/jade-healing-spa.git` (existing; do not create `spa-website`) |
| Cursor plan | Free — local Agent only; limited usage |
| Cloud Agents / Automations | Unavailable on Free |
| Playwright | Project-local `@playwright/test` + Chromium |
| Figma MCP | Configured in `.cursor/mcp.json`; **not connected until owner completes OAuth** |
| Booking / payments | Out of MVP scope |

## How work actually happens

1. Owner opens a Cursor Agent chat (this local agent).
2. Owner names the role for that session, for example: “Act as Website Researcher.”
3. The agent reads this file, `PROJECT_BRIEF.md`, and `docs/STATUS.md`.
4. The agent does only the current phase.
5. Owner reviews the deliverable and updates the gate in `docs/STATUS.md`.
6. The next role starts only after the previous gate is approved.

You may use Cursor’s local subagents for research or review **inside one session**. That is still one person launching one chat. It is not Cloud Agent orchestration.

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

- Maintain `docs/STATUS.md`.
- Enforce phase gates.
- Check that each role’s files exist and are not empty stubs when that phase is marked complete.
- Keep unresolved questions in `docs/unresolved-questions.md`.
- Never claim the project is autonomous.

### Agent 1 — Website Researcher

Prerequisites: Playwright verification passed.

- Browse `https://nhaspa.com.vn/` with Playwright.
- Desktop 1440×1000 and mobile 390×844.
- Observe information architecture, navigation, journeys, and visual patterns.
- Do not copy branding, marketing copy, images, or source code.
- Do not submit forms or make bookings.
- Write files under `research/`.

### Agent 2 — Product / Business Analyst

Prerequisites: research complete and owner approved.

- Read `research/` first.
- Separate observed facts from recommendations.
- Write `docs/requirements.md`, `docs/sitemap.md`, `docs/user-journeys.md`, `docs/content-requirements.md`, `docs/acceptance-criteria.md`.
- Flag every item that needs owner approval as `NEEDS OWNER INPUT`.

### Agent 3 — UI/UX Designer

Prerequisites: BA docs approved; real brand assets in `assets/`.

- Design an original system. Do not clone nhaspa.
- Desktop and mobile.
- Use Figma MCP only after it is connected and write access is verified.
- Record the Figma file URL in `docs/design-guidelines.md`.

### Agent 4 — Developer

Prerequisites: approved design (or an owner-approved design exception).

- Implement the approved design.
- Informational site only. No booking.
- Do not invent business facts.
- Accessibility, SEO basics, responsive layout.

### Agent 5 — Independent QA / Reviewer

Prerequisites: a running local site.

- Test with Playwright independently of the Developer.
- Check navigation, links, layout, content, responsiveness, accessibility, console errors.
- File bugs; Developer fixes; QA re-tests.

## Safety

- No medical claims unless the owner supplies verified wording.
- No fake reviews, awards, prices, or addresses.
- Placeholder content must be labeled until replaced.
- Reasonable request rates against the reference site.

## Paid vs Free (Cursor)

**Works on Free (with usage limits):** local Agent chat, local subagents, Git, Playwright, MCP servers the owner connects.

**Requires a paid Cursor plan (Premium or higher as of 2026-11-01):** Cloud Agents, Automations, Bugbot, Origin code hosting.

Do not upgrade or purchase anything unless the owner asks.
