import os from "node:os";
import path from "node:path";
import { defineConfig, devices } from "@playwright/test";

if (!process.env.PLAYWRIGHT_BROWSERS_PATH) {
  process.env.PLAYWRIGHT_BROWSERS_PATH = path.join(
    os.homedir(),
    "Library/Caches/ms-playwright",
  );
}

export default defineConfig({
  testDir: "./tests",
  // `npm test` is the nhaspa research suite. `LOCAL_SMOKE=1` (npm run smoke:local) checks 127.0.0.1:3000 only.
  testIgnore:
    process.env.LOCAL_SMOKE === "1"
      ? [/research-/, /verify-playwright\.spec\.ts/]
      : [/local-smoke\.spec\.ts/],
  timeout: 90_000,
  expect: { timeout: 15_000 },
  fullyParallel: false,
  workers: 1,
  retries: 0,
  reporter: [["list"]],
  use: {
    trace: "off",
    video: "off",
    screenshot: "off",
    ignoreHTTPSErrors: true,
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
});
