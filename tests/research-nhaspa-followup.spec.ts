/**
 * RESEARCH — follow-up pass on https://nhaspa.com.vn.
 * Not a check of the local Jade site. Local smoke: `npm run smoke:local` (http://127.0.0.1:3000).
 */
import { test, Page } from "@playwright/test";
import fs from "node:fs";
import path from "node:path";

const ORIGIN = "https://nhaspa.com.vn";
const SCREENSHOT_DIR = path.join(process.cwd(), "research", "screenshots");

async function dumpLinks(page: Page) {
  return page.$$eval("a[href]", (as) =>
    as.map((a) => ({
      href: (a as HTMLAnchorElement).href,
      text: (a.textContent || "").replace(/\s+/g, " ").trim().slice(0, 80),
    })),
  );
}

test("follow-up: contact, branches, remaining IA", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto(`${ORIGIN}/`, { waitUntil: "networkidle", timeout: 45_000 });
  await page.waitForTimeout(1500);

  const links = await dumpLinks(page);
  const sameOrigin = links.filter((l) => l.href.includes("nhaspa.com.vn"));
  const unique = [...new Map(sameOrigin.map((l) => [l.href.split("#")[0], l])).values()];

  const dumpPath = path.join(process.cwd(), "research", "link-dump.json");
  fs.writeFileSync(dumpPath, JSON.stringify(unique, null, 2));

  const extra = unique.filter((l) =>
    /lien-he|contact|co-so|chi-nhanh|dat-lich|gallery|thu-vien|danh-gia|review|tuyen-dung|bang-gia|gia-dich-vu|he-thong/i.test(
      `${l.href} ${l.text}`,
    ),
  );

  let i = 20;
  const extraLog: string[] = [
    "# Follow-up URLs",
    "",
    "Additional pages opened after the first crawl, targeting contact, locations, booking CTAs (not submitted), and other IA gaps.",
    "",
  ];

  for (const item of extra.slice(0, 10)) {
    try {
      await page.goto(item.href, { waitUntil: "domcontentloaded", timeout: 45_000 });
      await page.waitForTimeout(1200);
      const title = await page.title();
      const n = String(i).padStart(2, "0");
      i += 1;
      const slug = new URL(page.url()).pathname.replace(/\W+/g, "-").replace(/^-|-$/g, "") || "page";
      await page.screenshot({
        path: path.join(SCREENSHOT_DIR, `${n}-${slug}-desktop.png`),
        fullPage: true,
      });
      extraLog.push(`- desktop ${title} — ${page.url()} — link text: ${item.text || "(none)"}`);
    } catch (error) {
      extraLog.push(`- FAILED ${item.href} — ${String(error).slice(0, 160)}`);
    }
  }

  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(`${ORIGIN}/`, { waitUntil: "domcontentloaded", timeout: 45_000 });
  await page.waitForTimeout(1500);

  const toggles = page.locator(
    "header button, .elementor-menu-toggle, .menu-toggle, a.menu-toggle, .hfe-nav-menu-icon, .navbar-toggle, [class*='hamburger'], [class*='menu-toggle']",
  );
  const count = await toggles.count();
  extraLog.push(`- mobile toggle candidates: ${count}`);
  if (count > 0) {
    await toggles.first().click({ force: true, timeout: 5000 }).catch(() => undefined);
    await page.waitForTimeout(800);
    await page.screenshot({
      path: path.join(SCREENSHOT_DIR, "21-home-nav-open-mobile.png"),
      fullPage: true,
    });
    extraLog.push("- mobile menu click attempted (force)");
  }

  const contactLike = extra.find((l) => /lien-he|contact|co-so/i.test(`${l.href} ${l.text}`));
  if (contactLike) {
    await page.goto(contactLike.href, { waitUntil: "domcontentloaded", timeout: 45_000 });
    await page.waitForTimeout(1200);
    await page.screenshot({
      path: path.join(SCREENSHOT_DIR, "22-contact-or-location-mobile.png"),
      fullPage: true,
    });
    extraLog.push(`- mobile ${await page.title()} — ${page.url()}`);
  }

  fs.appendFileSync(
    path.join(process.cwd(), "research", "reference-urls.md"),
    `\n## Follow-up session\n\n${extraLog.slice(4).join("\n")}\n`,
  );
  fs.writeFileSync(
    path.join(process.cwd(), "research", "followup-notes.md"),
    extraLog.join("\n") + "\n",
  );
});
