import { test, expect, Page } from "@playwright/test";
import fs from "node:fs";
import path from "node:path";

const ORIGIN = "https://nhaspa.com.vn";
const DESKTOP = { width: 1440, height: 1000 };
const MOBILE = { width: 390, height: 844 };
const SCREENSHOT_DIR = path.join(process.cwd(), "research", "screenshots");
const PAUSE_MS = 1200;

type VisitedPage = {
  url: string;
  title: string;
  h1: string[];
  navLabels: string[];
  footerLabels: string[];
  headingOutline: string[];
  notes: string[];
};

const visited: VisitedPage[] = [];
const urlLog: { url: string; viewport: string; title: string }[] = [];
let shotIndex = 1;

function slugFromUrl(url: string): string {
  try {
    const u = new URL(url);
    const raw = (u.pathname + u.search)
      .replace(/^\//, "")
      .replace(/[/?&=]+/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "");
    return raw.slice(0, 60) || "home";
  } catch {
    return "page";
  }
}

async function pause() {
  await new Promise((r) => setTimeout(r, PAUSE_MS));
}

async function screenshot(page: Page, name: string, viewport: "desktop" | "mobile") {
  const n = String(shotIndex).padStart(2, "0");
  shotIndex += 1;
  const file = path.join(SCREENSHOT_DIR, `${n}-${name}-${viewport}.png`);
  await page.screenshot({ path: file, fullPage: true });
  return file;
}

async function collectText(page: Page, selector: string, limit = 40): Promise<string[]> {
  const values = await page.locator(selector).allTextContents();
  return values
    .map((t) => t.replace(/\s+/g, " ").trim())
    .filter((t) => t.length > 0 && t.length < 120)
    .slice(0, limit);
}

async function recordPage(page: Page, notes: string[] = []): Promise<VisitedPage> {
  const url = page.url();
  const title = await page.title();
  const record: VisitedPage = {
    url,
    title,
    h1: await collectText(page, "h1", 8),
    navLabels: await collectText(page, "header a, nav a, .menu a, .navbar a", 40),
    footerLabels: await collectText(page, "footer a", 40),
    headingOutline: await collectText(page, "h1, h2, h3", 30),
    notes,
  };
  visited.push(record);
  urlLog.push({ url, viewport: `${page.viewportSize()?.width}x${page.viewportSize()?.height}`, title });
  return record;
}

async function gotoQuiet(page: Page, url: string) {
  await page.goto(url, { waitUntil: "domcontentloaded", timeout: 45_000 });
  await pause();
}

function uniqueSameOrigin(hrefs: string[]): string[] {
  const out: string[] = [];
  const seen = new Set<string>();
  for (const href of hrefs) {
    if (!href) continue;
    let abs: URL;
    try {
      abs = new URL(href, ORIGIN);
    } catch {
      continue;
    }
    if (!abs.hostname.endsWith("nhaspa.com.vn")) continue;
    abs.hash = "";
    const key = abs.toString().replace(/\/$/, "") || ORIGIN;
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(abs.toString());
  }
  return out;
}

function classify(url: string): string {
  const u = url.toLowerCase();
  if (/lien-he|contact/.test(u)) return "contact";
  if (/gioi-thieu|about/.test(u)) return "about";
  if (/dich-vu|service/.test(u)) return "services";
  if (/chi-nhanh|co-so|location|branch/.test(u)) return "locations";
  if (/tin-tuc|news|blog/.test(u)) return "news";
  if (/danh-gia|review|testimonial|khach-hang/.test(u)) return "reviews";
  if (/thu-vien|gallery|hinh-anh|album/.test(u)) return "gallery";
  if (/dat-lich|booking|appointment/.test(u)) return "booking-observed-not-used";
  if (u.replace(/\/$/, "") === ORIGIN || u.replace(/\/$/, "") === `${ORIGIN}/`) return "home";
  return "other";
}

function mdEscape(s: string): string {
  return s.replace(/\|/g, "\\|");
}

function writeResearchDocs() {
  const byClass = new Map<string, VisitedPage[]>();
  for (const p of visited) {
    const c = classify(p.url);
    byClass.set(c, [...(byClass.get(c) || []), p]);
  }

  const urlLines = urlLog
    .map((r, i) => `| ${i + 1} | ${r.viewport} | ${mdEscape(r.title)} | ${r.url} |`)
    .join("\n");

  fs.writeFileSync(
    path.join(process.cwd(), "research", "reference-urls.md"),
    `# Reference URLs visited

**Scope:** observational research of https://nhaspa.com.vn/ on 2026-11-01.  
**Rule:** URLs only. Do not reuse this site’s copy, images, or branding.

| # | Viewport | Title | URL |
| --- | --- | --- | --- |
${urlLines}
`,
  );

  const sitemapGroups = [...byClass.entries()]
    .map(([group, pages]) => {
      const rows = pages
        .map((p) => `- ${p.url}\n  - title: ${p.title}\n  - h1: ${p.h1.join(" | ") || "(none collected)"}`)
        .join("\n");
      return `## ${group}\n\n${rows}`;
    })
    .join("\n\n");

  fs.writeFileSync(
    path.join(process.cwd(), "research", "sitemap.md"),
    `# Reference sitemap (observed)

## Observed facts

This is a map of pages **actually visited or linked** during the Playwright session. It is not a claim of a complete crawl of every URL on the domain.

${sitemapGroups}

## Interpretations

URL patterns (Vietnamese slugs such as gioi-thieu, dich-vu, lien-he) suggest a typical corporate spa IA: home → about → services → locations → news → contact.

## Recommendations

Use a similar **journey shape** (discover services, then a detail page, then contact). Do not clone labels or IA names unless they also match our real business.

## Unresolved questions

- Which of these page types our spa actually needs (single location vs branches, news, booking CTA).
`,
  );

  const auditBody = visited
    .map((p) => {
      return `### ${p.title || p.url}

- URL: ${p.url}
- Classification: ${classify(p.url)}
- H1: ${p.h1.join(" / ") || "(none)"}
- Heading outline: ${p.headingOutline.slice(0, 12).join(" · ") || "(none)"}
- Nav labels seen on this page (truncated): ${p.navLabels.slice(0, 12).join(" · ") || "(none)"}
- Footer labels (truncated): ${p.footerLabels.slice(0, 12).join(" · ") || "(none)"}
- Notes: ${p.notes.join("; ") || "none"}
`;
    })
    .join("\n");

  fs.writeFileSync(
    path.join(process.cwd(), "research", "website-audit.md"),
    `# Website audit — nhaspa.com.vn

Research date: 2026-11-01  
Method: Playwright Chromium, desktop 1440×1000 and mobile 390×844.  
No forms submitted. No bookings. No accounts created.

## Observed facts

${auditBody}

## Interpretations

The site presents as a multi-page marketing site with a strong service catalog and location presence. Navigation labels and heading structure (not copied here as marketing copy) are the primary IA signals.

## Recommendations

For Jade Healing Spa MVP, keep a shorter IA: Home, About, Services (+ details), Gallery, Reviews, Contact. Add News or multi-branch pages only if the owner confirms we have that content.

## Unresolved questions

See \`docs/unresolved-questions.md\`.
`,
  );

  fs.writeFileSync(
    path.join(process.cwd(), "research", "user-journeys.md"),
    `# Reference user journeys (observed)

## Observed facts

Journeys inferred from pages actually opened in this session:

1. **Land and orient** — visitor opens the homepage, sees primary navigation and hero/header region (see screenshots).
2. **Learn who they are** — visitor follows About / Giới thiệu if present.
3. **Discover services** — visitor opens a services overview, then a service detail URL.
4. **Trust and proof** — visitor looks for reviews, gallery, news, or branch pages if linked.
5. **Contact / visit** — visitor opens contact or location pages. Booking CTAs may exist; they were **not** used.

Mobile: the same URLs were loaded at 390×844 to observe stacking and nav behavior. Screenshot files document whether a hamburger/menu pattern appears.

## Interpretations

Service discovery is likely the primary conversion path on the reference site. Contact is a secondary path. Booking, if present, is deferred for our MVP even if the reference site includes it.

## Recommendations

Design our journeys around: discover spa → understand a service → view real photos → read reviews → call or visit. Do not implement booking in MVP.

## Unresolved questions

- Owner: which journey is primary for Jade Healing Spa (walk-in/call vs later online booking)?
`,
  );

  fs.writeFileSync(
    path.join(process.cwd(), "research", "ui-ux-analysis.md"),
    `# UI/UX analysis (patterns, not a copy)

Screenshots in \`research/screenshots/\` are the visual source of truth. This file records **structural patterns** only.

## Observed facts

- Desktop canvas used: 1440×1000.
- Mobile canvas used: 390×844.
- Recurring regions observed across pages: header/nav, hero or page title band, content sections, footer.
- Navigation persists globally (same header/footer labels collected on multiple URLs).
- Full-page screenshots were captured; inspect them for spacing, photography, and type scale. Do not reproduce their brand look.

## Interpretations

The reference site aims for a polished hospitality feel: photography-forward, multi-section scrolling pages, catalog of services. Mobile likely collapses navigation.

## Recommendations

- Original photography of our spa, not stock-looking AI interiors.
- Generous spacing, restrained color, real materials (stone, linen, plants) only if our photos support that.
- Avoid template clichés: purple gradients, fake gold script, generic “wellness blobs.”
- Keep booking out of the UI except maybe a later “Call to book” using owner-supplied phone.

## Unresolved questions

- Owner visual direction: warm spa, clinical-clean, or garden/nature?
- Photo availability before design starts.
`,
  );

  const navUnion = [...new Set(visited.flatMap((p) => p.navLabels))].slice(0, 50);
  const footerUnion = [...new Set(visited.flatMap((p) => p.footerLabels))].slice(0, 50);

  fs.writeFileSync(
    path.join(process.cwd(), "research", "component-inventory.md"),
    `# Component inventory (reference patterns)

These are **types of UI**, not components to clone pixel-for-pixel.

## Observed facts

### Global

- Site header with logo + navigation
- Footer with link groups and likely contact/legal links
- Primary nav labels observed (union, truncated): ${navUnion.join(" · ") || "(none)"}
- Footer labels observed (union, truncated): ${footerUnion.join(" · ") || "(none)"}

### Content blocks likely present (confirm in screenshots)

- Hero / page banner
- Service cards or list rows
- Image galleries or media strips
- Testimonial quotes or review modules
- Location cards or map embed
- Call-to-action buttons (including possible booking — do not implement for us)
- News/teaser lists if news URLs exist

## Interpretations

A componentized marketing site: header, footer, card grids, detail template.

## Recommendations for our design system (after owner approval)

Header, footer, page hero, service card, service detail layout, gallery grid, review list, contact block, primary/secondary buttons. No booking widget.

## Unresolved questions

- Whether we need a news module at all.
- Whether we have enough photos for a gallery grid.
`,
  );
}

test.describe.configure({ mode: "serial" });

test("research nhaspa.com.vn desktop and mobile", async ({ page }) => {
  fs.mkdirSync(SCREENSHOT_DIR, { recursive: true });

  await page.setViewportSize(DESKTOP);
  await gotoQuiet(page, `${ORIGIN}/`);
  const homeTitle = await page.title();
  expect(homeTitle.length).toBeGreaterThan(0);
  await recordPage(page, ["homepage desktop"]);
  await screenshot(page, "home", "desktop");

  const hrefs = await page.$$eval("a[href]", (as) => as.map((a) => a.getAttribute("href") || ""));
  const allLinks = uniqueSameOrigin(hrefs);

  const picks: { url: string; reason: string }[] = [];
  const wantedOrder = [
    "about",
    "services",
    "locations",
    "news",
    "reviews",
    "gallery",
    "contact",
  ];
  for (const kind of wantedOrder) {
    const match = allLinks.find((u) => classify(u) === kind);
    if (match) picks.push({ url: match, reason: kind });
  }

  const serviceLike = allLinks.filter((u) => classify(u) === "services" || /dich-vu|lieu-trinh|massage|cham-soc/.test(u.toLowerCase()));
  for (const u of serviceLike.slice(0, 6)) {
    if (!picks.some((p) => p.url === u)) picks.push({ url: u, reason: "service-or-catalog" });
  }

  if (picks.length < 8) {
    for (const u of allLinks) {
      if (picks.length >= 12) break;
      if (!picks.some((p) => p.url === u) && classify(u) !== "booking-observed-not-used") {
        picks.push({ url: u, reason: "additional-ia" });
      }
    }
  }

  for (const pick of picks.slice(0, 14)) {
    try {
      await gotoQuiet(page, pick.url);
      await recordPage(page, [pick.reason, "desktop"]);
      await screenshot(page, slugFromUrl(pick.url), "desktop");
    } catch (error) {
      visited.push({
        url: pick.url,
        title: "(failed to load)",
        h1: [],
        navLabels: [],
        footerLabels: [],
        headingOutline: [],
        notes: [`desktop navigation failed: ${String(error).slice(0, 200)}`],
      });
    }
  }

  await page.setViewportSize(MOBILE);
  await gotoQuiet(page, `${ORIGIN}/`);
  await recordPage(page, ["homepage mobile"]);
  await screenshot(page, "home", "mobile");

  const menuCandidates = page.locator(
    'button[aria-label*="menu" i], button[aria-label*="Menu" i], .menu-toggle, .navbar-toggle, .hamburger, button:has-text("Menu")',
  );
  const menuCount = await menuCandidates.count();
  if (menuCount > 0) {
    try {
      await menuCandidates.first().click({ timeout: 3000 });
      await pause();
      await screenshot(page, "home-nav-open", "mobile");
      await recordPage(page, ["mobile menu opened"]);
    } catch {
      visited.push({
        url: page.url(),
        title: await page.title(),
        h1: [],
        navLabels: [],
        footerLabels: [],
        headingOutline: [],
        notes: ["mobile menu candidate found but click did not succeed"],
      });
    }
  }

  const mobileFollow = picks.filter((p) =>
    ["about", "services", "contact", "locations"].includes(p.reason),
  );
  for (const pick of mobileFollow.slice(0, 4)) {
    try {
      await gotoQuiet(page, pick.url);
      await recordPage(page, [pick.reason, "mobile"]);
      await screenshot(page, `${slugFromUrl(pick.url)}`, "mobile");
    } catch (error) {
      visited.push({
        url: pick.url,
        title: "(failed to load)",
        h1: [],
        navLabels: [],
        footerLabels: [],
        headingOutline: [],
        notes: [`mobile navigation failed: ${String(error).slice(0, 200)}`],
      });
    }
  }

  writeResearchDocs();
  expect(visited.length).toBeGreaterThan(2);
  expect(fs.existsSync(path.join(process.cwd(), "research", "website-audit.md"))).toBe(true);
});
