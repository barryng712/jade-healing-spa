# UI/UX audit — Jade Healing Spa (local)

**Date:** 2026-11-08  
**Scope:** local site `http://127.0.0.1:3000` on branch with current UI. Informational MVP. **No code was changed for this audit.**  
**Method:** route inventory from `app/**/page.tsx`; Playwright Chromium at **1440×900**, **390×844**, **320×700** (first viewport of each route). Overflow, `h1`, booking-word scan, console. Screenshots in `/tmp/jade-ux-audit/` (not committed).  
**Not run this pass:** 1920, 1366, 1024, 768, 430, 375; keyboard-only pass; Lighthouse; real users. Persona notes below are **simulated from the product**, not interviews.

## Inventory

| Route | Role |
| --- | --- |
| `/` | Home |
| `/about` | About — story placeholder |
| `/services` | Service directory |
| `/services/massage`, `/cham-soc-toc`, `/combo` | Category |
| `/services/massage/nhom/{thu-gian,phuc-hoi,tri-lieu}` | Intent + prices |
| `/services/[category]/[slug]` | Detail + ritual (many slugs) |
| `/gallery`, `/reviews`, `/contact` | Trust / visit |
| 404 | `Không tìm thấy trang` (tested `/missing-page`) |
| `/design/background-lab` | Internal lab — not a customer page |

**Stack:** Next.js App Router, React, Tailwind v4 tokens in `app/globals.css`, Cormorant Garamond + Manrope.  
**Booking:** none. Confirmed by source (`AGENTS.md`, `docs/STATUS.md`) and by page text scan: **no “đặt lịch” / “booking”** on any tested route. Conversion path is **Gọi** (`tel:`) and **Facebook**.

**Playwright:** horizontal overflow **0** on every tested route at 1440, 390, and 320. HTTP 200 except 404. Console “errors” were **Next.js HMR WebSocket** failures in headless — not product JS.

---

## Scores (evidence-based, not a launch scorecard for a booking product)

| Lens | /100 | Why |
| --- | --- | --- |
| Overall UX | **62** | Clear nav and real interior photos; same placeholder line on every offer card; prices hidden until a second page; no booking. |
| Visual design | **74** | Forest / Ivory / Sage is calm and consistent enough for a wood-and-plant spa. Home moss vs Ivory services is an intentional split but reads as two products. |
| Luxury perception | **66** | Hero photo and type feel premium. “Đoạn mẫu” on every card and dashed “sẽ được bổ sung” on About/Reviews cancel the luxury. |
| Customer experience | **58** | A guest can call. They cannot see a price on the home/services card, cannot read a real blurb, and cannot book. |
| Mobile | **76** | 320 and 390 did not overflow. Header becomes Gọi + Menu. Cards stack. Detail title and price are readable. Not every breakpoint was shot. |
| Accessibility | **68** | Skip link, `min-h-11` nav/CTA, `:focus-visible` in CSS. Phone string has no grouping. Photo band is `aria-hidden` while showing the word “Dịch vụ” on detail. Not a full WCAG audit. |
| Booking conversion readiness | **34** | There is no booking funnel. Phone + Facebook only. Fine for MVP info; **not** ready if the goal is online booking. |
| Cross-page consistency | **63** | Tokens repeat. Home services band is moss; `/services` and groups are Ivory; detail body is Sand; detail photo band still says “Dịch vụ”. |

---

## Page matrix (tested)

| Page | Route | Visual | UX | Mobile | Conversion | Issues (this pass) | Read |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Home | `/` | 76 | 64 | 74 | 40 | Hero has no offer headline; cards share one fake blurb; no price | Atmosphere first, decision later |
| Services | `/services` | 72 | 60 | 74 | 38 | Same cards; moss removed so cards sit on Ivory without the home shadow language | Long scroll, low differentiation |
| Massage | `/services/massage` | 72 | 62 | 74 | 42 | Three intents, still no price on card | OK as a doorway |
| Hair | `/services/cham-soc-toc` | 70 | 60 | 74 | 40 | Minute kickers help; blurb still sample | |
| Combo | `/services/combo` | 70 | 58 | 72 | 38 | More cards, same sample line | Density |
| Intent | `.../nhom/thu-gian` | 74 | 70 | 76 | 55 | **Price and minutes are visible** | Best commercial page tested |
| Detail | `.../co-vai-gay` | 68 | 66 | 74 | 52 | Price visible; note still “Đoạn mẫu”; photo band title is “Dịch vụ” not the service | Trust mixed |
| About | `/about` | 64 | 48 | 72 | 30 | Dashed “Câu chuyện sẽ được bổ sung” | Not launch copy |
| Gallery | `/gallery` | 70 | 60 | 72 | 28 | Space proof, no offer | |
| Reviews | `/reviews` | 60 | 45 | 74 | 25 | Honest empty state; no social proof | Expected leave for persona B |
| Contact | `/contact` | 74 | 72 | 76 | 60 | Address, hours, phone, map | Strongest close without booking |
| 404 | `/missing-page` | 70 | 65 | 74 | — | Has `h1` | Pass smoke |

Dynamic details and the other two intents were **not** each screenshotted. Code path is the same component (`ServiceRitual`, `IntentRows`).

---

## Findings that match the requested table

| Issue | Impact | Priority | Effort |
| --- | --- | --- | --- |
| Không có luồng đặt lịch — chỉ Gọi / Facebook (`ContactActions`, header). Scan Playwright: `book=false` mọi route. | Rất cao nếu mục tiêu là booking; đúng scope MVP thông tin | P0 nếu launch thương mại có booking; **P2** nếu giữ MVP “chỉ gọi” | High (booking là phase sau, không vá UI) |
| Hero không có headline dịch vụ / giá. Above-the-fold (1440 và 390): logo, tagline, Gọi điện, Facebook. `h1` nằm section nhà, dưới fold. | Cao — 3–5 giây đầu là không khí, không phải lựa chọn | P1 | Medium |
| Mọi offer card dùng một `sampleBlurb` (“Đoạn mẫu…”). Playwright: card link text lặp cùng câu trên `/` và `/services`. | Cao — không phân biệt dịch vụ, giảm tin cậy | P1 | Low (copy) / Medium (nếu viết blurb thật từng thẻ) |
| Giá không có trên card Home và `/services`. Giá xuất hiện ở intent row và detail (vd. Cổ vai gáy **410.000 Vnđ · 40 phút** trên 390). | Cao với khách so sánh giá | P1 | Medium |
| About và Reviews là khung nét đứt “sẽ được bổ sung” / “Chưa có đánh giá”. | Cao với persona cần uy tín | P1 | Low để giấu nav; Medium để có nội dung thật (không bịa review) |
| Photo band chi tiết ghi chữ **“Dịch vụ”** (`PagePhotoBand`) trong khi tên liệu trình nằm bên dưới; band `aria-hidden`. | Trung bình — hai tiêu đề, một cái sai vai | P2 | Low |
| Home band rêu vs `/services` nền ivory — cùng component card, khác nền (cố ý gần đây). | Trung bình — thương hiệu không một nhịp | P2 | Medium |
| SĐT header `0357050796` không ngắt số. | Trung bình — khó đọc / nhớ | P2 | Low |
| Mobile spacing không vỡ (overflow 0 ở 320/390) nhưng card ~cao vì ảnh 3/2 + 2 dòng mẫu. | Trung bình | P2 | Low |
| Type scale Cormorant/Manrope ổn; kickers uppercase trên card và label contact không cùng tracking mọi nơi. | Trung bình | P2 | Medium |

---

## Personas (simulated, not research)

| Persona | What the site actually allows | Barrier |
| --- | --- | --- |
| A 25–30, relaxation | Hero photo works. Cards do not say how treatments differ. | Identical blurbs |
| B 35–45, price + credibility | Price only after intent or detail. Reviews empty. About empty. | Leaves to call or competitor |
| C 45–60 | Phone in header is findable. Detail shows price. | Sample note under the real title |
| D international | Vietnamese only. No EN route. | Cannot complete the goal |
| E first visit | Real room photos help. Placeholders and no booking hurt. | Trust gap before call |

Booking steps 2–8 in the prompt **do not exist**. Not tested with fake form data because there is no form.

---

## Verdict

1. Premium **look** in the hero and type: **partly yes**. Premium **product story**: **no**, while sample copy is on the cards.  
2. Trust: photos and legal contact yes; empty About/Reviews and “Đoạn mẫu” no.  
3. Hierarchy: hero is visual, not informational. Prices are one or two clicks down.  
4. Services look attractive as photos; they do not explain themselves.  
5. Prices are understandable **on intent rows and detail**, not on the directory.  
6. Booking is **not** intuitive because it is **absent**. Call is obvious.  
7. Mobile at 390/320 is a real layout (menu, stacked cards), not a broken desktop squeeze. Untested widths remain.  
8. Five weaknesses: no booking, shared fake blurb, price off the card, empty trust pages, detail band titled “Dịch vụ”.  
9. Five moves: real one-line blurbs, price or “từ” on cards, hide or fill About/Reviews, fix detail band label, keep call CTA (add booking only when phase 2 is approved).  
10. **Do not approve a commercial launch that promises online booking or finished brand story.** Approve a **soft informational preview** only after sample lines are not what a paying guest reads.

## Roadmap (no implementation in this audit)

| Stage | Work | Effort |
| --- | --- | --- |
| 1 | Remove or replace guest-facing “Đoạn mẫu” / dashed story if those pages stay in nav | Low–Medium |
| 2 | Price cue on cards; one visual system for services (home vs index); detail band label | Medium |
| 3 | Booking only with an approved phase — out of current MVP | High |
