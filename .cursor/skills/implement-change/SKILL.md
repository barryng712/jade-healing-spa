---
name: implement-change
description: Developer stage for a change request after Design gate approved. Implement on existing Next.js site; fill CR Dev section.
disable-model-invocation: true
---

# Skill — Implement change

1. Verify BA and Design gates are `approved`. If not, stop.
2. Follow `.cursor/agents/developer.md`.
3. Implement on the existing app; set Branch on the CR; keep MVP constraints.
4. Optionally run **content-guard** before finishing.
5. Fill Dev section with verify steps (`npm run dev` + routes).
6. Stop for **Owner gate — Dev**. Do not start QA unless owner approved Dev and asked.
