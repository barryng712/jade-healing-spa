# Jade Healing Spa

Informational website for the spa. Online booking is **not** in the first version.

The public site is a Vietnamese informational Next.js app. Online booking is not included. It is not deployed.

## Current status

See [`docs/STATUS.md`](docs/STATUS.md).

Design is owner-approved. The local site is built and waiting for your review. QA starts after you approve it.

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

Open `http://127.0.0.1:3000`. Playwright research scripts are still available: `npm run verify:playwright` and `npm run research:nhaspa`.

## Figma (manual connect)

Figma MCP is listed in `.cursor/mcp.json` but is **not authenticated** until you connect it:

1. `Cmd+Shift+P` → Command Palette
2. Run `/add-plugin figma` in Cursor Chat, **or** open **Cursor Settings → Tools & MCP**
3. Click **Connect** next to Figma
4. In the browser, click **Allow access** for your Figma account
5. Return here and ask the agent to verify Figma tools

Do not paste Figma passwords or tokens into chat.

## What you still need to provide

Put real files in:

- `assets/brand/` — logo, colors, fonts
- `assets/spa/` — real spa photographs

Business facts: see [`docs/content-requirements.md`](docs/content-requirements.md) and [`docs/unresolved-questions.md`](docs/unresolved-questions.md). Do not expect the agent to invent them.

## License / content

Reference screenshots in `research/screenshots/` are for internal analysis only. Do not reuse nhaspa assets on the public site.
