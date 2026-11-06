#!/usr/bin/env node
/**
 * Project hook: block dangerous git/deploy patterns for Jade Healing Spa.
 * Reads JSON on stdin; writes JSON permission on stdout.
 */
import { readFileSync } from "node:fs";

let raw = "";
try {
  raw = readFileSync(0, "utf8");
} catch {
  process.stdout.write(JSON.stringify({ permission: "allow" }));
  process.exit(0);
}

let command = "";
try {
  const parsed = JSON.parse(raw || "{}");
  command = String(parsed.command ?? "");
} catch {
  process.stdout.write(JSON.stringify({ permission: "allow" }));
  process.exit(0);
}

const denyPatterns = [
  {
    re: /git\s+push\s+([^\n]*\s)?(origin\s+)?main\b/,
    message: "Blocked: do not push to main without explicit owner approval (AGENTS.md).",
  },
  {
    re: /git\s+push\s+[^\n]*--force/,
    message: "Blocked: force-push is not allowed unless the owner explicitly requests it.",
  },
  {
    re: /git\s+push\s+[^\n]*-f\b/,
    message: "Blocked: force-push (-f) is not allowed unless the owner explicitly requests it.",
  },
  {
    re: /\brm\s+(-[^\s]*\s+)*-r[^\s]*\s+\/\s*$|\brm\s+-rf\s+\/\b/,
    message: "Blocked: recursive delete of filesystem root.",
  },
];

for (const { re, message } of denyPatterns) {
  if (re.test(command)) {
    process.stdout.write(
      JSON.stringify({
        permission: "deny",
        user_message: message,
        agent_message: message,
      }),
    );
    process.exit(0);
  }
}

const askPatterns = [
  {
    re: /\b(vercel\s+deploy|vercel\s+--prod|npm\s+run\s+deploy)\b/i,
    message: "Deploy requires explicit owner approval. Confirm before continuing.",
  },
  {
    re: /git\s+merge\s+[^\n]*main\b/,
    message: "Merging involving main needs owner approval per AGENTS.md.",
  },
];

for (const { re, message } of askPatterns) {
  if (re.test(command)) {
    process.stdout.write(
      JSON.stringify({
        permission: "ask",
        user_message: message,
        agent_message: message,
      }),
    );
    process.exit(0);
  }
}

process.stdout.write(JSON.stringify({ permission: "allow" }));
process.exit(0);
