import { chromium } from "@playwright/test";
import { writeFileSync } from "node:fs";

const url =
  "https://www.canva.com/design/DAHZKgx97e0/9xzUApR_eGlEbCF8x_JsvQ/view";

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();
await page.goto(url, { waitUntil: "networkidle", timeout: 120_000 });
await page.waitForTimeout(5000);

const pages = [];
for (let i = 0; i < 24; i++) {
  const text = await page.evaluate(() => {
    const regions = [...document.querySelectorAll('[role="region"][aria-label="Canvas content"]')];
    const visible =
      regions.find((r) => {
        const rect = r.getBoundingClientRect();
        return rect.width > 200 && rect.height > 200 && rect.top >= -100 && rect.top < window.innerHeight;
      }) ?? regions[0];
    return visible?.innerText?.trim() ?? "";
  });
  pages.push({ page: i + 1, text });
  await page.keyboard.press("ArrowRight");
  await page.waitForTimeout(800);
}

writeFileSync("research/canva-menu-chi-tiet-raw.json", JSON.stringify(pages, null, 2));
console.log(`Wrote ${pages.length} pages`);
await browser.close();
