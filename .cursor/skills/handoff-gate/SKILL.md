---
name: handoff-gate
description: After owner approves a CR stage, update CR gates, Status, INDEX, and print the exact next-chat prompt for the following role.
disable-model-invocation: true
---

# Skill — Handoff gate

## Inputs

Owner states: CR ID + which stage they approved (`ba` | `design` | `dev` | `qa`) + optional notes.

## Steps

1. Open the CR; set that stage’s gate to `approved` with today’s date (owner timezone / STATUS date style).
2. Advance Status:
   - BA approved → Status `design`
   - Design approved → Status `dev`
   - Dev approved → Status `qa`
   - QA approved → Status `done`
3. Update `docs/change-requests/INDEX.md` and the Active change requests blurb in `docs/STATUS.md`.
4. Print the **next** paste prompt:

**After BA:**

```text
Act as Designer for CR-…. BA is approved. Read AGENTS.md and the CR. Use /design-analyze if helpful. Stop after the design proposal for my approval.
```

**After Design:**

```text
Act as Developer for CR-…. BA and Design are approved. Read AGENTS.md and the CR. Use /implement-change if helpful. Do not deploy. Stop for my review when done.
```

**After Dev:**

```text
Act as QA for CR-…. Dev is approved. Read AGENTS.md, the CR, and docs/acceptance-criteria.md. Use /qa-review-change. Do not deploy.
```

**After QA:**

```text
Close CR-… as done (or list Dev fixes). Use /handoff-gate if Status/INDEX need a final update.
```

## Do not

- Approve gates yourself without the owner saying so.
- Start the next role’s work inside this skill unless the owner also asks in the same message.
