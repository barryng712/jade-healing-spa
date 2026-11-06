---
name: product-change
description: Start a Jade Healing Spa change request from an owner idea (UI, feature, page, journey). Creates CR file and INDEX row; does not skip to Design/Dev.
disable-model-invocation: true
---

# Skill — Start product change

## When

Owner wants a UI/feature/page/journey/content change on the existing site.

## Steps

1. Read `AGENTS.md`, `PROJECT_BRIEF.md`, `docs/STATUS.md`, `docs/change-requests/README.md`.
2. Ask the owner (briefly) if missing: what changes, why, out of scope, any hard constraints.
3. Copy `docs/change-requests/_TEMPLATE.md` → `docs/change-requests/CR-YYYYMMDD-slug.md` (slug = short kebab English or ASCII Vietnamese-without-diacritics).
4. Fill **Owner request** from their answers. Set Status `draft` then `ba`. Leave role sections empty.
5. Add a row to `docs/change-requests/INDEX.md`.
6. Add/update the “Active change requests” line in `docs/STATUS.md`.
7. Tell the owner the next message to paste:

```text
Act as BA for CR-YYYYMMDD-slug. Read AGENTS.md and the CR file. Use /ba-evaluate if helpful. Stop after the BA plan for my approval.
```

Or: invoke subagent **ba-analyst** on that CR, then stop for gate.

## Do not

- Run Designer, Developer, or QA in this skill.
- Invent business facts to fill gaps.
- Enable Cloud Agents.
