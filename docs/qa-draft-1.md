# QA — draft 1 (site thông tin local)

> **Bản ghi 2026-11-06.** Sau bản này, owner đổi mục dịch vụ sang thẻ / danh sách phút / trang chi tiết một mốc, và trang chủ thành một màn hình ảnh. Các dòng Pass bên dưới mô tả bản cũ. Spec hiện tại: `docs/design-guidelines.md`, `docs/acceptance-criteria.md`.

**Ngày:** 2026-11-06  
**Nhánh:** `feat/informational-site`  
**Môi trường:** `npm run dev` → `http://localhost:3000`  
**Cách thử:** Playwright Chromium độc lập (1440×1000, 768×1000, 390×844) + xem trang trên trình duyệt. Không sửa code sản phẩm. Không deploy.

**Kết luận:** Bản draft đạt tiêu chí MVP thông tin. QA-1 đã đóng: owner xác nhận 2026-11-06 không dùng một ảnh với nút Tiếp/Trước; animation nhiều ảnh là bản đúng. Còn **2 lỗi thấp** (QA-2, QA-3). Chưa deploy.

---

## Kết quả theo acceptance criteria

Nguồn: `docs/acceptance-criteria.md`, `docs/confirmed-content.md`.

| ID | Kết quả | Ghi chú |
| --- | --- | --- |
| G1 | Pass | Logo có tên **Jade Healing Spa**. Nav: Trang chủ, Về spa, Dịch vụ, Thư viện ảnh, Đánh giá, Liên hệ. Hover Dịch vụ mở Massage, Chăm sóc tóc, Combo. |
| G2 | Pass | Footer: tên pháp lý, ngách 66/18, 0357050796, email, Facebook. |
| G3 | Pass | Header: Gọi `tel:+84357050796` và Facebook. Không có link Zalo giả. |
| G4 | Pass | Không booking, thanh toán, đăng nhập. |
| G5 | Pass | `/khong-co-trang-nay` → 404, một `h1` “Không tìm thấy trang”, link về trang chủ. |
| G6 | Pass | Không thấy nhaspa.com.vn hay jadespa.vn trên các trang đã mở. |
| G7 | Pass | Bước mẫu, đánh giá trống, Zalo, ảnh banner, câu chuyện Về spa đều có nhãn chờ nội dung. |
| G8–G13 | Pass | Skip link “Đến nội dung”, focus thấy được, Escape đóng menu mobile. Không tràn ngang ở 1440 / 768 / 390. Mỗi trang một `h1`, title riêng. Ảnh có `alt` (ảnh phụ trong list danh mục để `alt=""` vì tên nằm cạnh). |
| H1 | Pass | Hero có logo script và **Chăm sóc · An yên · Chữa lành**. Có câu “Đây không phải lời hứa chữa bệnh.” |
| H2 | Pass | Home chỉ ba thẻ: Massage, Chăm sóc tóc, Combo. |
| H3 | Pass | Không quote giả. Ảnh lấy từ `public/spa/`. Banner có dòng “Ảnh này để xem bố cục…”. |
| H4 | Pass | Không widget đặt lịch. |
| A1–A3 | Pass | `/about` có. Câu chuyện ghi “Câu chuyện sẽ được bổ sung.” Không claim phòng khám / giải thưởng. |
| V1 | Pass | Đủ nhóm menu Canva. Trang Cổ vai gáy: 10 dòng **Bước mẫu**, có câu “chưa phải nội dung liệu trình”. |
| V5 | Pass | `/services` là catalog ảnh + tên, không hiện phút/giá. Home vẫn ba thẻ. |
| V2–V4 | Pass | Chip 40 phút → “Giải Tỏa Cơ Cổ Vai Gáy Nhanh”, 410.000 Vnđ. Chip 90 phút → “Phục Hồi Cổ Vai Gáy Chuyên Sâu”, 850.000 Vnđ. Ảnh không đổi. |
| Y1–Y3 | Pass | Gallery dùng ảnh spa. `Unknown-9` không có trong `public/spa/`. |
| R1–R3 | Pass | “Chưa có đánh giá được phép đăng.” Link Maps đúng pin 21.03320, 105.78426. Không quote quán khác. |
| K1–K8 | Pass | Địa chỉ ngách, giờ 09:00–21:00, điện thoại, Facebook, đỗ xe, iframe pin. Zalo: “Liên kết Zalo sẽ được bổ sung.” |
| T1–T2 | Pass | `next build` chạy xong, TypeScript trong build đạt. 25 trang tĩnh/SSG. |
| T3 | **Fail** | ESLint 1 lỗi. Xem QA-3. |
| T4 | Ghi chú | Repo chưa có smoke test cho site local (spec Playwright hiện có mở nhaspa). QA chạy kiểm thử riêng, không tính là lỗi sản phẩm. |
| T5 | Pass | Không deploy, không merge `main`. |

Redirect cũ đã thử: `/services/co-vai-gay` → `/services/massage/co-vai-gay`; `/services/dich-vu-bo-tro` → `/services/combo`.

---

## Lỗi

### QA-1 — Đóng. Không phải lỗi

Owner xác nhận 2026-11-06: không dùng một khối ảnh với nút Tiếp/Trước. Bản đang chạy — chữ phía trên, nhiều ảnh trượt — là bản đúng, trên cả desktop và mobile. Khớp `docs/design-guidelines.md` (house band: photos drift, no next/previous control). Tiêu chí M1 cũ trong CR bị thay bởi quyết định này.

### QA-2 — Thấp. Bốn URL combo cũ trả 404

Các slug sau không redirect:

- `/services/thai-doc-am-tu-cung`
- `/services/duong-sinh-nhuan-trang`
- `/services/nang-co-mat`
- `/services/jade-emperor`

URL đúng là `/services/combo/...`. Site chưa public nên chưa ảnh hưởng khách. Nên redirect cho đồng bộ với các slug massage đã chuyển.

### QA-3 — Thấp. ESLint

`components/header.tsx` dòng 53: `react-hooks/set-state-in-effect` (`setServicesOpen` / `setOpenPath` trong effect theo `pathname`). `next build` vẫn thành công. Menu vẫn đóng khi đổi trang lúc QA bấm.

---

## Không tính là lỗi

- Bước liệu trình, tên tiếng Việt của Jade Emperor Therapy, URL Zalo, Google review, câu chuyện Về spa, logo vector, hosting: vẫn là chỗ trống đã gắn nhãn. Không bịa trên trang.
- Nút “N” góc dưới trái chỉ có khi `npm run dev`. Không có trên bản build.
- Bản đồ nhúng hiện tên quán lân cận của Google. Trang Đánh giá không lấy review của họ.
- `npx tsc --noEmit` trước build báo file cũ `.next/types` trỏ tới `app/services/[slug]` đã xóa. `next build` typecheck sau đó thì đạt.

---

## Hai change request đang mở

Dev gate trên file CR vẫn là `pending`. Owner yêu cầu QA bản draft, nên QA xem luôn phần đã có trên site. Chưa đóng CR.

| CR | QA |
| --- | --- |
| `CR-20261106-home-services-band` | Pass theo quyết định sau của owner: ba thẻ một hàng ở desktop, ảnh vuông bên trái, không nền kem, cát sáng, chữ đọc được. Không phải layout “ảnh trên / thẻ kem” của bản design trước đó. |
| `CR-20261106-services-heroes-about` | Pass. `/services` đủ nhóm có ảnh. Các trang con có dải ảnh đầu. Home hero giữ logo + tagline. M1 đóng: animation nhiều ảnh, không nút Tiếp/Trước. |

---

## Owner gate

Chọn một:

1. **Duyệt QA draft 1** và để QA-2, QA-3 sang sau. Chưa deploy.
2. **Trả Dev** sửa QA-2 (redirect bốn URL combo) và/hoặc QA-3 (ESLint header). QA thử lại sau khi Dev báo đã sửa.

Không merge `main`. Không deploy.
