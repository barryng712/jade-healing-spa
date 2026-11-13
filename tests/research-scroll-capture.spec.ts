/**
 * RESEARCH — scroll capture on https://nhaspa.com.vn.
 * Not a check of the local Jade site. Local smoke: `npm run smoke:local` (http://127.0.0.1:3000).
 */
import { test, Page } from "@playwright/test";
import path from "node:path";
import fs from "node:fs";

const ORIGIN = "https://nhaspa.com.vn";
const DIR = path.join(process.cwd(), "research", "screenshots");

async function scrollFull(page: Page) {
  await page.evaluate(async () => {
    const delay = (ms: number) => new Promise((r) => setTimeout(r, ms));
    const height = document.body.scrollHeight;
    for (let y = 0; y < height; y += 700) {
      window.scrollTo(0, y);
      await delay(250);
    }
    window.scrollTo(0, 0);
    await delay(400);
  });
}

async function capture(page: Page, url: string, file: string, size: { width: number; height: number }) {
  await page.setViewportSize(size);
  await page.goto(url, { waitUntil: "domcontentloaded", timeout: 45_000 });
  await page.waitForTimeout(1500);
  await scrollFull(page);
  await page.screenshot({ path: path.join(DIR, file), fullPage: true });
  return { url: page.url(), title: await page.title(), file };
}

test("scroll-capture key pages", async ({ page }) => {
  const results = [];
  const desktop = { width: 1440, height: 1000 };
  const mobile = { width: 390, height: 844 };

  const pages = [
    ["/", "30-home-scrolled-desktop.png", desktop],
    ["/gioi-thieu/", "31-about-scrolled-desktop.png", desktop],
    ["/dich-vu/", "32-services-scrolled-desktop.png", desktop],
    ["/danh-muc-san-pham/massage/", "33-massage-cat-scrolled-desktop.png", desktop],
    ["/massage-body/", "34-massage-body-detail-desktop.png", desktop],
    ["/danh-muc-san-pham/combo/", "35-combo-cat-desktop.png", desktop],
    ["/nha-spa/", "36-nha-spa-desktop.png", desktop],
    ["/lien-he/", "37-lien-he-desktop.png", desktop],
    ["/co-so/", "38-co-so-desktop.png", desktop],
    ["/dat-lich/", "39-dat-lich-desktop.png", desktop],
    ["/", "40-home-scrolled-mobile.png", mobile],
    ["/gioi-thieu/", "41-about-scrolled-mobile.png", mobile],
    ["/dich-vu/", "42-services-scrolled-mobile.png", mobile],
    ["/massage-body/", "43-massage-body-detail-mobile.png", mobile],
  ] as const;

  for (const [p, file, size] of pages) {
    try {
      const r = await capture(page, `${ORIGIN}${p}`, file, size);
      results.push({ ...r, ok: true });
    } catch (error) {
      results.push({ url: `${ORIGIN}${p}`, title: "FAILED", file, ok: false, error: String(error).slice(0, 180) });
    }
    await page.waitForTimeout(800);
  }

  fs.writeFileSync(
    path.join(process.cwd(), "research", "scroll-capture.json"),
    JSON.stringify(results, null, 2),
  );
});
