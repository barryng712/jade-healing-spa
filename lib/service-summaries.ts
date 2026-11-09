/**
 * Guest-facing short lines. One map, keyed like the menu.
 * Facts only: tier names, minutes, and step titles in `lib/menu-rituals.ts`.
 * Do not add outcomes, ingredients, or credentials that the source does not name.
 */

export const tierSummaries: Record<string, string> = {
  "co-40":
    "Buổi ngắn cho cổ vai gáy: ngâm chân ấm, chăm sóc mặt trước và mặt sau, rồi thiết bị cho riêng vùng này.",
  "co-60":
    "Sau ngâm chân, buổi thêm phần đầu và đường dọc lưng, rồi day miết cổ vai gáy trước bước thiết bị.",
  "co-90":
    "Dài hơn mốc 60 phút ở cổ vai gáy: thêm đường kinh tay và ủ ấm thảo dược, rồi mới tới thiết bị.",
  "co-120":
    "Buổi dài nhất cho cổ vai gáy, có xông mắt, giãn cơ lưng, ủ thảo dược, đá nóng với bóng chườm, và thiết bị cuối.",
  "than-60":
    "Một vòng toàn thân: ngâm chân, rồi lưng, cổ vai gáy, chân, tay và đầu, khép lại bằng nghỉ và uống nước.",
  "than-90":
    "Toàn thân dài hơn, mở bằng ngâm chân thảo mộc, có đá nóng với túi chườm, và đi cả mặt trước lẫn mặt sau.",
  "than-120":
    "Cùng khung toàn thân của mốc 90 phút, nhưng quy trình thêm một lượt đá nóng và túi chườm thảo mộc.",
  "lung-60":
    "Tập trung lưng và eo: ngâm chân thảo mộc, day vùng này, ủ thảo dược ở chân, rồi thiết bị cho lưng eo.",
  "lung-90":
    "Lưng eo dài hơn mốc 60 phút, thêm đá nóng và ủ thảo dược kèm chân sau phần day lưng eo hông.",
  "hong-60":
    "Cho thắt lưng, hông và chân: day theo đường kinh chân, rồi thiết bị cho lưng eo và cho đôi chân.",
  "hong-90":
    "Thêm đá nóng và ủ thảo dược kèm đầu, cùng day miết lưng hông chân, trước hai bước thiết bị.",
  "hong-120":
    "Đá nóng đặt ở cả lưng và chân, ủ thảo dược với đầu, rồi thiết bị lưng eo và thiết bị chân.",
  "ngu-60":
    "Hướng về giấc ngủ trong buổi ngắn: mặt, đầu, tay, cổ vai gáy, ủ thảo dược, rồi thiết bị cho đầu và cổ.",
  "ngu-90":
    "Giữ các bước đầu cổ của mốc ngắn, thêm đá ngọc trên mặt và một đường từ lưng xuống chân.",
  "ngu-120":
    "Buổi ngủ dài thêm xông mắt, chăm sóc mặt trước cơ thể, rồi một đoạn năng lượng trước thiết bị cổ vai gáy.",
  "ngu-150":
    "Nghi thức ngủ dài nhất: thêm chườm ấm mắt, ủ thảo dược, và đường đả thông dọc thân trước thiết bị đầu cổ.",
  "goi-60":
    "Gội ngắn: ngâm chân thảo dược, đầu, lông vũ, mặt, vai ngực, cổ vai gáy, rồi gội, xông, khăn nóng và xả.",
  "goi-90":
    "Dài hơn gội 60 phút vì thêm đá ngọc trên mặt, và khách tự chọn thảo mộc nhà Jade trước lúc gội.",
  "goi-120":
    "Mở bằng cổ vai gáy và mặt sau, rồi tới đầu, lông vũ, mặt, vai ngực, gội, xông thảo dược và khăn nóng.",
  "bo-tro-tu-cung":
    "Nghi thức 60 phút ở bụng: ngâm chân thảo mộc, các điểm chạm bụng, thiết bị vùng bụng, rồi ủ thảo dược ấm.",
  "bo-tro-bung":
    "Cũng 60 phút ở bụng, slide có bước tên khơi dòng tiêu hóa giữa các điểm chạm, rồi thiết bị và ủ ấm.",
  "bo-tro-mat":
    "Buổi cho mặt: ngâm chân, điểm chạm trên da, đắp mặt nạ, rồi thanh ngọc lướt trên gương mặt.",
  // TODO(owner): Canva tiếng Việt không có bước cho tier này. Không suy diễn quy trình.
  "bo-tro-jade":
    "Liệu trình 150 phút trong nhóm combo. Danh sách bước chưa có trên menu tiếng Việt.",
  // TODO(owner): Slide ghi “phác đồ cá nhân của bác sĩ”. Dòng khách không nhắc chức danh cho đến khi chủ spa xác nhận.
  "nhu-cau-90":
    "Mở bằng thăm hỏi và ngâm chân thảo mộc, thống nhất vùng ưu tiên, rồi chăm sóc theo hướng đã chốt.",
  "nhu-cau-120":
    "Cùng cách mở đầu với mốc 90 phút, buổi dài hơn khép lại bằng dặn dò nghỉ ngơi sau khi chăm sóc.",
};

/** Browse cards that group several tiers. Not a single menu price. */
export const intentSummaries = {
  "thu-gian-toan-than": "Ba mốc toàn thân trên menu: 60, 90 và 120 phút.",
  "tri-lieu-chuyen-sau":
    "Ba vùng trên menu: cổ vai gáy, lưng – eo, và lưng – hông – chân. Mỗi thẻ mở trang của đúng vùng đó.",
  "an-than-giac-ngu": "Bốn mốc giấc ngủ trên menu: 60, 90, 120 và 150 phút.",
} as const;

/** Cards that open a group with more than one tier. */
export const groupSummaries: Record<string, string> = {
  "cham-soc-theo-nhu-cau":
    "Gói không gắn một vùng: thăm hỏi trước, rồi chăm sóc theo hướng đã chốt. Mốc dài hơn có thêm dặn dò cuối buổi.",
};

export function tierSummary(id: string) {
  return tierSummaries[id] ?? "";
}

export function intentSummary(id: keyof typeof intentSummaries) {
  return intentSummaries[id];
}

export function groupSummary(slug: string) {
  return groupSummaries[slug] ?? "";
}
