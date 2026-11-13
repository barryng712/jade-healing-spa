/**
 * LOCAL smoke — Jade at http://127.0.0.1:3000.
 * Requires `npm run dev`. Does not open nhaspa. Run: `npm run smoke:local`.
 */
import { expect, test } from "@playwright/test";

const origin = "http://127.0.0.1:3000";

const routes = [
  "/",
  "/about",
  "/services",
  "/services/massage",
  "/services/cham-soc-toc",
  "/services/combo",
  "/services/massage/nhom/thu-gian-toan-than",
  "/services/massage/nhom/tri-lieu-chuyen-sau",
  "/services/massage/nhom/an-than-giac-ngu",
  "/services/massage/thu-gian-toan-than?phut=90",
  "/gallery",
  "/reviews",
  "/contact",
];

test.beforeAll(async ({ request }) => {
  try {
    const response = await request.get(origin, { timeout: 5_000 });
    if (!response.ok()) throw new Error(`status ${response.status()}`);
  } catch {
    throw new Error(
      "Local site is not up. Start it with npm run dev (http://127.0.0.1:3000), then rerun npm run smoke:local.",
    );
  }
});

for (const path of routes) {
  test(`loads ${path}`, async ({ page }) => {
    const response = await page.goto(`${origin}${path}`, { waitUntil: "domcontentloaded" });
    expect(response?.ok()).toBe(true);
  });
}

test("unknown path is 404", async ({ page }) => {
  const response = await page.goto(`${origin}/khong-co-trang-nay`, { waitUntil: "domcontentloaded" });
  expect(response?.status()).toBe(404);
});

test("services directory uses the three massage intents", async ({ page }) => {
  await page.goto(`${origin}/services`, { waitUntil: "domcontentloaded" });
  await expect(page.getByRole("link", { name: /Thư giãn toàn thân/ })).toBeVisible();
  await expect(page.getByRole("link", { name: /Trị liệu chuyên sâu/ })).toBeVisible();
  await expect(page.getByRole("link", { name: /An thần & giấc ngủ/ })).toBeVisible();
});

test("mobile Dịch vụ lists gội and combo children", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(`${origin}/`, { waitUntil: "domcontentloaded" });
  await page.getByRole("button", { name: "Menu" }).click();
  const menu = page.getByRole("navigation", { name: "Di động" });
  await expect(menu.getByRole("link", { name: "Thư giãn toàn thân" })).toBeVisible();
  await expect(menu.getByRole("link", { name: "Gội Dưỡng Sinh Tĩnh Tâm" })).toBeVisible();
  await expect(menu.getByRole("link", { name: "Nghi Thức Thải Độc Ấm Tử Cung" })).toBeVisible();
  await expect(menu.getByRole("link", { name: "Jade Emperor Therapy" })).toHaveCount(0);
  await expect(menu.getByRole("link", { name: "Chăm sóc theo nhu cầu" })).toHaveCount(0);
});
