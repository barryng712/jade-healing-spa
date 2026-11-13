# Service summary review — 2026-11-08

Short lines live only in `lib/service-summaries.ts`. Names, minutes, and prices stay in `lib/menu.ts`. Steps stay in `lib/menu-rituals.ts`.

Guest lines use step titles already on the Canva slides. They do not add a result, a herb list, or a credential.

## Needs owner confirmation

| Key | Why |
| --- | --- |
| `bo-tro-jade` | Vietnamese Canva page has no steps. The line only says it is a 150-minute combo and that the step list is not on the Vietnamese menu. |
| `nhu-cau-90`, `nhu-cau-120` | The slide says “phác đồ cá nhân của bác sĩ”. The guest line does not repeat that title until the owner confirms it. |
| `bo-tro-bung` | The line names the slide step “khơi dòng tiêu hóa”. It does not claim a digestion result. Confirm the wording is acceptable. |
| `goi-90` | The line says the guest chooses Jade herbs before the wash, which is written on the 90-minute slide. Confirm that choice is still offered. |

## How a card and a detail page match

- A card that is one tier uses that tier’s sentence. The detail page repeats it, then shows price, minutes, and the step list.
- Massage cards are Thư giãn toàn thân, Trị liệu chuyên sâu, and An thần & giấc ngủ (2026-11-09). Intent sentences live in `intentSummaries`. Each tier row and each detail page uses the tier sentence.
- “Chăm sóc theo nhu cầu” is a non-link row on Thư giãn toàn thân, not a Combo card. Each detail page uses its own tier sentence.
