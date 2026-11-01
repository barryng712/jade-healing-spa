# Component inventory (reference patterns)

These are **types of UI** observed on nhaspa.com.vn. They are not components to clone. Our designer should invent original versions after BA approval.

## Observed facts

### Global chrome

| Pattern | Where seen | Our MVP? |
| --- | --- | --- |
| Header: left links, centered mark, right utilities | All pages | Yes, original |
| Language dropdown | Header | Only if owner supplies translations |
| Careers link | Header | No |
| Footer: mark, social icons, copyright, back to top | All pages | Yes, original |
| Floating chat button | Desktop + mobile | Owner decision (Zalo/Messenger later) |
| Seasonal promo chips | Several pages | No, unless owner asks |
| 404 with home link | `/co-so/`, `/dat-lich/` | Yes, simple original 404 |

### Navigation labels observed (union, for IA study only)

Cơ sở · Dịch vụ · Massage · Chăm sóc tóc · Chăm sóc da · Combo · Tin tức · Tuyển dụng · language names · social network names

Do not reuse these labels unless they also match our real services.

### Content blocks

| Pattern | Evidence | Our MVP? |
| --- | --- | --- |
| Full-bleed photo hero + overlay CTA | Home `01`, `30` | Hero yes; booking CTA no |
| Short brand statement band | Home | Yes |
| Icon row for categories | Home, Services | Yes if we have categories |
| Featured package / combo cards | Home, Services | Only if we sell packages |
| Editorial dark band with photos | Home | Optional |
| Photo mosaic / gallery strip | Home | Yes if photos exist |
| Google-style review cards | Home | Yes if owner supplies reviews |
| Press / logo strip | Home | Only with real, permitted mentions |
| Branch / location title cards | About `02` | Yes if we have a real address |
| Neighborhood / nearby list | About | Optional |
| FAQ accordion | About, Services, Detail | Optional, owner-written |
| Treatment list under category heading | Services `03` | Yes |
| Breadcrumb | Detail `34` | Yes |
| Rating row | Detail | Only with real ratings |
| Duration / price metadata row | Detail | `NEEDS OWNER INPUT` |
| Primary button | Hero, Detail | “Call / Directions”, not “Book online” |
| Alternating image + text | Detail | Yes |
| Numbered process | Detail | Yes if owner writes steps |
| Related-service photo row | Detail | Yes |
| News / article teasers | Home, News | Out of MVP unless requested |
| Contact form / map | Not visible on `/lien-he/` capture | We should still have a real contact block |

### Not observed as standalone pages

- Gallery index
- Reviews index
- Working booking page at `/dat-lich/`

## Interpretations

A componentized marketing site: one global shell, a few page templates (home, about, catalog, detail, article), and repeating bands (hero, cards, mosaic, FAQ, footer).

## Recommendations for our later design system

Minimum set:

- Header / footer
- Page hero
- Service card or list row
- Service detail layout
- Gallery grid
- Review list
- Location / contact block
- Primary and secondary buttons
- FAQ accordion (optional)

Explicitly **out of MVP**: booking widget, account menu, language switcher (unless owner commits to two languages), careers, news, chat unless owner provides the account.

## Unresolved questions

- Chat vendor (none / Zalo / Messenger)?
- Public prices?
- Enough photos for mosaic vs a simple gallery page?
