# Reference — nangsen.net / services

Visited: 2026-11-06.

URLs opened:

- `https://nangsen.net/vi/dich-vu` (services)
- `https://nangsen.net/vi/dich-vu/massage-tri-lieu-co-vai-gay` (one detail page, opened from a featured card)

Viewports:

- Desktop about 1440 wide (1440 × 900).
- Phone 390 × 844, captured 2026-11-06. The phone pass was completed.

A language welcome appeared on the detail URL and was dismissed with the skip control. No form was submitted and nothing was booked.

This note studies layout rhythm. It is not a source of Jade copy, prices, photos, or claims.

## Observed facts

### Wide viewport (confirmed 2026-11-06)

- A dark bar holds the wordmark in the center and short nav labels. “Dịch vụ” is one item. A booking control sits in the header. Jade’s MVP has no booking.
- `/vi/dich-vu` opens with a wide room photograph and the single word “Dịch vụ” centered on it.
- Under the photo, a centered title and a short paragraph sit on a warm paper ground. A small-caps line introduces a row of featured topics.
- Featured topics are photo cards: image on top, name, one short line, text link (“Xem chi tiết”). Wide screen shows three across; a fourth card wraps. Cards have a large corner radius (about 16px) and a light border. These cards are links. They do not show a price or a duration.
- Below that, two location chips sit on one row (Hà Nội / Hồ Chí Minh). Hà Nội reads as the selected chip. The chips were not activated. Jade has one address.
- The menu is not a tight grid. Each tier is a wide band: photograph on one side, name on the other, price in a large figure, duration under the price. The photograph swaps sides from row to row. A faint botanical line drawing sits in the empty part of the band. The band itself is not a link.
- Each band also lists a few inclusions (room type, what is included). Those lines belong to that business. Some later rows show a price and inclusions and omit the minute line. Some package rows add a short tier label beside the name.
- A second heading repeats the same band pattern for another group: centered heading, short centered intro, then the same alternating bands.
- A booking panel exists in the page and stays hidden until opened. It was not opened.
- The footer repeats many SEO links. Those are out of scope for Jade.

### Phone, 390 wide (2026-11-06)

- The header collapses to a MENU control, the wordmark, and the language control. The text nav and the header booking control are not in that bar. Round contact buttons stay fixed over the page.
- The hero photo becomes full width and shorter. The word “Dịch vụ” stays centered on it. The title and the intro stay centered and wrap.
- Featured cards become one column, almost the full width. Order stays photo, name, one short line, text link. Still no price on the card.
- The two location chips stay on one row. Under them, the group title and a short centered intro, then the first band.
- A menu band stacks in a column. The photograph is full width on top; the text sits under it. The side-swap is gone: both rows checked start with the photograph. The large corner radius stays.
- Name and price share one wrapping row. A short name keeps the price on the right, with the duration under the price. A longer name pushes the price and the duration onto the next line, on the left.
- Detail page `https://nangsen.net/vi/dich-vu/massage-tri-lieu-co-vai-gay`, phone order: the same short “Dịch vụ” hero, then the offering name centered, one short line, a starting-price label and a minute range on one line, then the offering photograph, then a long numbered step list, then related cards in one column, then a back link to the services list. There are no minute chips. A booking form is present as a hidden overlay and was not opened.

## Interpretations

- Attention on a wide screen comes from scale and alternation: one large photograph, then a quiet title, then cards, then a slow menu. The price is the loudest text in a row, so a guest can scan cost without opening a detail page.
- On a phone the same paper, serif name, and a photograph that fills the card do the work. The side-swap is a wide-screen rhythm only.
- Their detail page is an article (one range, then steps). The list is where each tier has its own row. Luxury here is paper color, serif names, generous padding, and a photograph large enough to feel like a room.
- Their gold type, lotus drawing, pill buttons, and about-16px corners are that brand. Jade already has Ivory, Forest, Sand, Bronze as a hairline, Cormorant, Manrope, a 2px photo radius, and a 4px card radius.

## Recommendations for Jade

These are ideas for BA and Designer. They are not approved design. Prices, minute marks, and names stay in `lib/menu.ts`. Map only onto `/services`, `/services/[category]`, and `/services/[category]/[slug]`.

- On a phone, stack each offering as the existing photo on top, then the name and the real price. Keep the side-swap for the wide screen only.
- When one group has several minute marks, give each mark its own price line so a long name does not push a figure out of sight. Their wrap is a warning for that case.
- Keep every band a link to the existing detail URL. Their bands are not links. Jade’s journey still opens the detail page after the scan.
- On `/services/[category]/[slug]`, keep Jade’s order: photograph with the ritual, the active price as a display figure, minute chips as they work today. Their phone puts the name and a single range above the photograph, then a long step article. Leave that article there.
- On `/services`, the three real categories can still lead as large photo doors, using photos and descriptions already on the site, then the real liệu trình in these bands. A category page uses the same band, larger than a small thumbnail.
- Keep Jade radius (2px photo, 4px card). Get the richer feel from space, type size, and photo width.
- Leave the home services band, and the header, on their own change requests.

## Do not copy

- Nàng Sen name, wordmark, sentences, prices, durations, room labels, inclusions, tier labels, step lists, photos, lotus or dragonfly drawings, gold-on-black header, booking, location filter, medical or treatment claims, SEO footer links.
- Do not add services Jade does not sell.
- Do not treat their “starting price plus a minute range” as a Jade price format. Jade prices and minute marks come from `lib/menu.ts`.

## Unresolved questions

- The city chips were seen and not clicked, so it is unknown whether they change which rows appear.
- Only one detail URL was opened. Other detail pages were not compared.
- Whether the owner wants the wide side-swap, or a single photo side on every row, is still a Designer choice. This note does not approve either.
