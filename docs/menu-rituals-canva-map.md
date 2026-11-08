# Canva → `menu-rituals.ts`

**Nguồn chủ spa:** file Canva **MEMU TỔNG JADE** (trang **chi tiết** từng mốc phút — không phải trang bảng giá hai cột).

| Trên site | Trong Canva (thường gặp) |
| --- | --- |
| Tên tier, phút, giá | Đã vào `lib/menu.ts` |
| Danh sách **Quy trình** | Mỗi slide/trang **một mốc phút** → một mảng trong `lib/menu-rituals.ts` |

Viewer (tham chiếu): `https://www.canva.com/design/DAHZKgx97e0/.../view`  
Script `scripts/scrape-canva-rituals.mjs` **không đọc được chữ** từ viewer (file `research/canva-menu-chi-tiet-raw.json` toàn rỗng). Điền quy trình bằng **copy từ Canva** hoặc **export PDF/PNG** vào `research/` rồi nhờ agent bóc tách.

---

## Bảng `tier.id` (key trong `menu-rituals.ts`)

Mỗi dòng = một URL kiểu `/services/.../slug?phut=`.

| Nhóm (slug) | Phút | `tier.id` |
| --- | --- | --- |
| `co-vai-gay` | 40 / 60 / 90 / 120 | `co-40`, `co-60`, `co-90`, `co-120` |
| `thu-gian-toan-than` | 60 / 90 / 120 | `than-60`, `than-90`, `than-120` |
| `lung-eo` | 60 / 90 | `lung-60`, `lung-90` |
| `lung-hong-chan` | 60 / 90 / 120 | `hong-60`, `hong-90`, `hong-120` |
| `an-than-giac-ngu` | 60 / 90 / 120 / 150 | `ngu-60`, `ngu-90`, `ngu-120`, `ngu-150` |
| `goi-duong-sinh` | 60 / 90 / 120 | `goi-60`, `goi-90`, `goi-120` |
| `thai-doc-am-tu-cung` | 60 | `bo-tro-tu-cung` |
| `duong-sinh-nhuan-trang` | 60 | `bo-tro-bung` |
| `nang-co-mat` | 60 | `bo-tro-mat` |
| `jade-emperor` | 150 | `bo-tro-jade` |
| `cham-soc-theo-nhu-cau` | 90 / 120 | `nhu-cau-90`, `nhu-cau-120` |

---

## Đã điền (2026-11-08)

`lib/menu-rituals.ts` lấy bước từ file Canva **Jade menu chi tiết - A4** (24 trang). Link view không có nút tải PDF khi chưa đăng nhập Canva; chữ được đọc trực tiếp từ từng trang của cùng file đó.

Chưa gắn vì không có trang khớp menu:

- `bo-tro-jade` (Jade Emperor Therapy, 150 phút) — không có trong 24 trang.
- Trang lẻ không khớp giá/phút trên `menu.ts`, nên không đưa lên site: Gội “Thảo mộc” 30 phút / 300.000; “Chăm sóc thư giãn dễ ngủ” 30 phút / 450.000; “Liệu pháp hoàng ngọc cao cấp” 150 phút / 1.290.000.
- `goi-120` dùng bản trang có tiêu đề kèm **120 phút / 790.000**. Cùng file còn một dàn bước khác (mở đầu bằng ngâm bồn) cho đúng tên này.

## Cách điền (một mốc phút)

1. Mở slide Canva đúng **tên tier + phút** (ví dụ *Phục Hồi Cổ Vai Gáy Chuyên Sâu · 90 phút*).
2. Copy từng bước quy trình (không copy giá).
3. Trong `lib/menu-rituals.ts`:

```ts
"co-90": ritualSteps(
  "Dòng bước 1 từ Canva",
  "Dòng bước 2",
  // …
),
```

4. Kiểm tra: `/services/massage/co-vai-gay?phut=90` — hết **Bước mẫu** khi mảng có nội dung.

**Lưu ý:** Cùng nhóm (ví dụ Cổ vai gáy) có **4 mốc phút = 4 mảng khác nhau**; không dùng một block chung cho cả nhóm.
