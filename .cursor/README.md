# Cursor project config — Jade Healing Spa

Active site branch: `staging`. `feat/informational-site` is legacy. Live services UI is `ServiceDirectory` (`docs/STATUS.md`).

| Path | Purpose |
| --- | --- |
| `rules/` | Always-on + glob rules |
| `agents/` | Subagents: `website-researcher`, `ba-analyst`, `designer`, `developer`, `qa-reviewer`, `content-guard` |
| `skills/` | Slash skills below |
| `hooks.json` + `hooks/` | Shell guard (no push `main`, force-push; ask on deploy) |
| `mcp.json` | Figma MCP |

## Skills

| Slash | File | Notes |
| --- | --- | --- |
| `/research-reference` | `skills/research-reference` | Reference-site notes. Does not edit the Next.js site |
| `/reference-intake` | `skills/reference-intake` | BA turns a research note into CR scope |
| `/product-change` | `skills/product-change` | Open a CR. Does not skip to Design or Dev |
| `/ba-evaluate` | `skills/ba-evaluate` | Delegates to `agents/ba-analyst.md` |
| `/design-analyze` | `skills/design-analyze` | Delegates to `agents/designer.md` |
| `/implement-change` | `skills/implement-change` | Delegates to `agents/developer.md` |
| `/qa-review-change` | `skills/qa-review-change` | Delegates to `agents/qa-reviewer.md`. Checks `http://127.0.0.1:3000` |
| `/local-smoke` | `skills/local-smoke` | Local checklist. `npm run smoke:local` when dev is up |
| `/handoff-gate` | `skills/handoff-gate` | After the owner approves a CR stage |
| `/service-rhythm-study` | `skills/service-rhythm-study` | **Superseded.** `disable-model-invocation`. Do not apply |
| `/services-aesthetic-scope` | `skills/services-aesthetic-scope` | **Superseded.** `disable-model-invocation`. Do not apply |
| `/services-luxury-proposal` | `skills/services-luxury-proposal` | **Superseded.** `disable-model-invocation`. Do not apply |

There is no `/ba-analyst` skill. BA is `/ba-evaluate`. The subagent file is `agents/ba-analyst.md`.

Pipeline skills still delegate: `/ba-evaluate` → `ba-analyst.md`, `/design-analyze` → `designer.md`, `/implement-change` → `developer.md`, `/qa-review-change` → `qa-reviewer.md`.

Owner flow for product changes: `docs/change-requests/README.md`.

Cloud Agents / Automations / Bugbot: **not enabled** unless the owner asks (`AGENTS.md`).
