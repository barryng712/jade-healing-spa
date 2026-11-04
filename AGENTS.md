# AGENTS.md — Jade Healing Spa

Read this file and `PROJECT_BRIEF.md` before any work.

This is a **local, human-gated workflow**. Roles below are prompts and handoff documents. Do not run Cloud Agents, Automations, or parallel agents on the same files unless the owner explicitly asks.

## Current phase (2026-11-04)

The informational site is **built locally** on `feat/informational-site`. Research, BA, and design are owner-approved. Development is complete and waiting for the owner to review the local site. **QA has not started. The site is not deployed.**

Do not rebuild the site, restore the old four sample services, or put the step-length mock back. The live menu is `lib/menu.ts`. Full progress is in `docs/STATUS.md`.

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

Prerequisites: BA docs approved. This phase is **owner-approved** (2026-11-02).

- Design an original system. Do not clone nhaspa or Kim Healing Spa.
- Desktop and mobile.
- Figma canvas write is not available. Do not start a new Figma file.
- Later visual changes stay in `docs/design-guidelines.md` and the site.

### Agent 4 — Developer

Prerequisites: approved design. **Met.** The site is already on `feat/informational-site`.

- Change the existing site when the owner asks. Do not start a second app.
- Informational site only. No booking.
- Do not invent business facts. Ritual steps stay labeled samples until the owner sends the real lines.
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

## Cursor plan notes

Owner is on **Premium**. Default for this repo is still the local Agent chat with phase gates.

Do not enable Cloud Agents, Automations, Bugbot, or extra paid tools unless the owner asks. Do not purchase additional subscriptions unless the owner asks.
