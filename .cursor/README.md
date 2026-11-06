# Cursor project config — Jade Healing Spa

| Path | Purpose |
| --- | --- |
| `rules/` | Always-on + glob rules |
| `agents/` | Subagents: `website-researcher`, `ba-analyst`, `designer`, `developer`, `qa-reviewer`, `content-guard` |
| `skills/` | `/research-reference`, `/product-change`, `/ba-evaluate`, `/design-analyze`, `/implement-change`, `/qa-review-change`, `/handoff-gate`, `/local-smoke` |
| `hooks.json` + `hooks/` | Shell guard (no push `main`, force-push; ask on deploy) |
| `mcp.json` | Figma MCP |

Owner flow for product changes: `docs/change-requests/README.md`.

Cloud Agents / Automations / Bugbot: **not enabled** unless the owner asks (`AGENTS.md`).
