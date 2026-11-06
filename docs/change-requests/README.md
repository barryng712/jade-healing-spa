# Change requests — BA → Designer → Dev → QA

Dùng khi **product owner** muốn đổi giao diện, tính năng, thêm trang, journey, copy, v.v. trên site hiện có.

Đây là **local, human-gated**. Mỗi giai dừng để owner duyệt trước khi role kế tiếp chạy. Không Cloud Agents / Automations trừ khi owner yêu cầu.

## Luồng

```text
Owner mô tả ý tưởng
    → BA đánh giá + plan (+ cập nhật docs nếu cần)
    → [Owner gate]
    → Designer phân tích design hiện tại + đề xuất
    → [Owner gate]
    → Developer triển khai trên site hiện có
    → [Owner gate]
    → QA review (Playwright + AC)
    → [Owner gate] → done / back to Dev
```

## Cách bắt đầu (owner)

1. Mở Agent chat (hoặc Agents Window).
2. Gọi skill: `/product-change`  
   hoặc paste:

   > Start a change request. Read `docs/change-requests/README.md` and `AGENTS.md`.

3. Trả lời câu hỏi BA cần (scope, trang, ràng buộc). Agent tạo file `docs/change-requests/CR-YYYYMMDD-slug.md` và cập nhật `INDEX.md`.
4. Duyệt từng stage trong file CR (`Owner gate`). Chỉ sau khi ghi `approved` mới mở chat / gọi agent role tiếp theo.

## Gọi từng role

| Stage | Prompt gợi ý | Subagent / skill |
| --- | --- | --- |
| Research | `Act as Website Researcher for …` | `.cursor/agents/website-researcher.md` · `/research-reference` |
| BA | `Act as BA for CR-…` hoặc `/ba-analyst` | `.cursor/agents/ba-analyst.md` · skill `/ba-evaluate` |
| Design | `Act as Designer for CR-…` | `.cursor/agents/designer.md` · `/design-analyze` |
| Dev | `Act as Developer for CR-…` | `.cursor/agents/developer.md` · `/implement-change` |
| QA | `Act as QA for CR-…` | `.cursor/agents/qa-reviewer.md` · `/qa-review-change` |

Sau mỗi lần owner duyệt: `/handoff-gate` để cập nhật stage trong CR + ghi chú trong `docs/STATUS.md`.

## Quy tắc cứng

- Không invent giá, địa chỉ, medical claims, review giả.
- MVP vẫn informational: không booking / payment / accounts.
- Design gốc: `docs/design-guidelines.md` + site Next.js — không clone nhaspa; không vẽ lại Figma trừ khi owner bảo.
- Menu thật: `lib/menu.ts`. Copy đã chốt: `docs/confirmed-content.md`.
- Gap → `NEEDS OWNER INPUT`.
- Branch: `feat/*` hoặc `design/*` / `test/*`. Không push/merge `main` không có approval.

## File

| Path | Mục đích |
| --- | --- |
| `_TEMPLATE.md` | Mẫu CR |
| `CR-*.md` | Một change request |
| `INDEX.md` | Danh sách CR đang mở / đóng |
| `../STATUS.md` | Phase MVP + dòng “Active change requests” |
