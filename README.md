# Jade Healing Spa

Informational website for the spa. Online booking is **not** in the first version.

The public site is a Vietnamese informational Next.js app. Online booking is not included. It is not deployed.

## Current status

See [`docs/STATUS.md`](docs/STATUS.md).

Research, BA, and design are approved. The local site is on `staging` (`feat/informational-site` is legacy) and waiting for your review. See [`docs/STATUS.md`](docs/STATUS.md). The site is not deployed.

## How this project uses AI

You work with the **local Cursor Agent** (the chat in Cursor). Each phase is a different role. You review before the next phase starts.

Cursor plan is **Premium**. Cloud Agents and Automations are still **not used** unless you ask.

Read [`AGENTS.md`](AGENTS.md) and [`PROJECT_BRIEF.md`](PROJECT_BRIEF.md) first.

## Git in plain language

| Word | Meaning |
| --- | --- |
| Commit | A saved snapshot of your files |
| Branch | A separate copy of the work so `main` stays stable |
| Pull request | A review request before merging a branch into `main` |

Do not push straight to `main`. Do not merge or publish the site without your approval.

Remote already connected: `https://github.com/barryng712/jade-healing-spa.git`

## Commands

```bash
npm install
npm run dev
npm run build
npm run lint
```

Open `http://127.0.0.1:3000`.

| Script | What it hits |
| --- | --- |
| `npm run smoke:local` | Local site at `http://127.0.0.1:3000`. Start `npm run dev` first |
| `npm test` | Research Playwright files only (nhaspa). Not the local site |
| `npm run research:nhaspa` | Reference site https://nhaspa.com.vn |
| `npm run research:nhaspa:followup` | Same reference, follow-up pass |
| `npm run research:scroll` | Same reference, scroll capture |
| `npm run research:verify` | Chromium can open nhaspa. Alias: `npm run verify:playwright` |

## Figma

Figma MCP is connected. Canvas write is not available, so the design stays in `docs/design-guidelines.md` and the site. Do not redraw it in Figma.

## What you still need to provide

Photos are already in `assets/spa/` and on the site. The header logo is the script mark cut from those photos.

Still needed: a Vietnamese name and steps for Jade Emperor Therapy, the Zalo URL, a Google Maps place URL, the About story, and a hosting choice. A separate vector logo is optional. Other ritual steps already come from `lib/menu-rituals.ts`. See [`docs/unresolved-questions.md`](docs/unresolved-questions.md). Do not expect the agent to invent them.

## License / content

Reference screenshots in `research/screenshots/` are for internal analysis only. Do not reuse nhaspa assets on the public site.
