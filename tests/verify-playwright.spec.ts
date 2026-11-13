/**
 * RESEARCH — opens https://nhaspa.com.vn to confirm Chromium.
 * Not a check of the local Jade site. Local smoke: `npm run smoke:local` (http://127.0.0.1:3000).
 */
import { test, expect } from "@playwright/test";
import path from "node:path";

test("Playwright can launch Chromium, open nhaspa.com.vn, and save a screenshot", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto("https://nhaspa.com.vn/", {
    waitUntil: "domcontentloaded",
    timeout: 45_000,
  });
  await page.waitForTimeout(2000);

  const title = await page.title();
  const url = page.url();

  expect(title.length).toBeGreaterThan(0);
  expect(url).toMatch(/nhaspa\.com\.vn/i);

  const screenshotPath = path.join(
    process.cwd(),
    "research",
    "screenshots",
    "00-verify-homepage-desktop.png",
  );
  await page.screenshot({ path: screenshotPath, fullPage: true });

  console.log(`TITLE=${title}`);
  console.log(`URL=${url}`);
  console.log(`SCREENSHOT=${screenshotPath}`);
});
