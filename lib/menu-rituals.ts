/**
 * Quy trình theo mốc phút — một `tier.id` = một mảng bước.
 *
 * Nguồn: Canva “Jade menu chi tiết - A4”
 * https://www.canva.com/design/DAHZKgx97e0/9xzUApR_eGlEbCF8x_JsvQ/view
 * (đọc 2026-11-08). Giá và phút trên site vẫn lấy từ `lib/menu.ts`.
 * Số thứ tự do UI thêm. Chữ giữ nguyên bản Canva, kể cả lỗi chính tả trên slide.
 */

export function ritualSteps(...lines: string[]): string[] {
  return lines;
}

export const ritualStepsByTierId: Record<string, string[]> = {
  "co-40": ritualSteps(
    "Ngâm Chân Thư Thái: Ngâm chân trong làn nước ấm dịu nhẹ, giúp cơ thể dần thả lỏng, khơi mở cảm giác thư thái và sẵn sàng đón nhận hành trình chăm sóc.",
    "Nâng Niu Mặt Trước Cơ Thể: Những chuyển động mềm mại lan tỏa trên mặt trước cơ thể, nhẹ nhàng xoa dịu cảm giác căng mỏi và đưa cơ thể về trạng thái thư thái.",
    "Nâng Niu Mặt Sau Cơ Thể: Chăm sóc nhẹ nhàng toàn bộ mặt sau cơ thể, giúp cơ thể được thả lỏng, cân bằng và tận hưởng cảm giác dễ chịu sâu hơn.",
    "Công Nghệ Chăm Sóc Cổ - Vai - Gáy: Ứng dụng thiết bị công nghệ hiện đại hỗ trợ chăm sóc chuyên sâu vùng cổ, vai và gáy, mang đến cảm giác nhẹ nhõm, thư thái và cân bằng.",
  ),
  "co-60": ritualSteps(
    "Ngâm Chân Thư Thái: Ngâm chân trong làn nước ấm dịu nhẹ, giúp cơ thể dần thả lỏng, khơi mở cảm giác thư thái và sẵn sàng đón nhận hành trình chăm sóc.",
    "Thư Gian Vùng Đầu: Những chuyển động nhịp nhàng ôm trọn vùng đầu, nhẹ nhàng xoa dịu cảm giác nhức mỏi, đưa tâm trí vào trạng thái thả lỏng và thư thái.",
    "Khơi Thông Năng Lượng Toàn Thân: Những chuyển động men theo từ lòng bàn chân, lan tỏa lên vùng hông, lưng và dần lên cổ tạo lên dòng chuyển động xuyên suốt, giúp cơ thể thư giãn và nhẹ nhõm hơn.",
    "Khai Mở Vùng Cổ Vai Gáy: Tập trung vào vùng cổ vai gáy với các thao tác day, miết chuyên sâu, kết hợp đẩy dọc đường kinh vùng lưng, giúp đả thông và làm dịu cảm giác căng cứng, mang lại sự thư thái và dễ chịu.",
    "Công Nghệ Chăm Sóc Cổ - Vai - Gáy: Ứng dụng thiết bị công nghệ hiện đại hỗ trợ chăm sóc chuyên sâu vùng cổ, vai và gáy, mang đến cảm giác nhẹ nhõm, thư thái và cân bằng.",
  ),
  "co-90": ritualSteps(
    "Ngâm Chân Thư Thái: Ngâm chân trong làn nước ấm dịu nhẹ, giúp cơ thể dần thả lỏng, khơi mở cảm giác thư thái và sẵn sàng đón nhận hành trình chăm sóc.",
    "Thư Gian Vùng Đầu: Những chuyển động nhịp nhàng ôm trọn vùng đầu, nhẹ nhàng xoa dịu cảm giác nhức mỏi, đưa tâm trí vào trạng thái thả lỏng và thư thái.",
    "Khai Mở Đường Kinh Tay: Các động tác vuốt, miết và day dọc theo đường kinh tay xuống lòng bàn tay giúp đôi bàn tay thả lỏng và lưu thông.",
    "Khơi Thông Năng Lượng Toàn Thân: Những chuyển động men theo từ lòng bàn chân, lan tỏa lên vùng hông, lưng và dần lên cổ tạo lên dòng chuyển động xuyên suốt, giúp cơ thể thư giãn và nhẹ nhõm hơn.",
    "Khai Mở Vùng Cổ Vai Gáy & Gỉai Phóng Cơ Lưng: Tập trung vào vùng cổ vai gáy với các thao tác day, miết chuyên sâu, kết hợp đẩy dọc đường kinh vùng lưng, giúp đả thông và làm dịu cảm giác căng cứng, mang lại sự thư thái và dễ chịu.",
    "Ủ Ấm Thảo Dược: Hương thảo dược hòa quyện cùng hơi ấm dịu dàng giúp cở thể thư thái và tận hưởng trọn vẹn cảm giác chăm sóc.",
    "Công Nghệ Chăm Sóc Cổ - Vai - Gáy: Ứng dụng thiết bị công nghệ hiện đại hỗ trợ chăm sóc chuyên sâu vùng cổ, vai và gáy, mang đến cảm giác nhẹ nhõm, thư thái và cân bằng.",
  ),
  "co-120": ritualSteps(
    "Ngâm chân thư thái",
    "Nâng Niu Mặt Trước Cơ Thể: Những chuyển động êm dịu nâng niu mặt trước cơ thể, nhẹ nhàng đưa cơ thể vào trạng thái thả lỏng và thư thái.",
    "Xông Mắt & Thư Thái Vùng Đầu: Làn hơi ấm dịu nhẹ bao quanh vùng mắt, kết hợp chăm sóc vùng đầu, giúp đôi mắt được nghỉ ngơi và tâm trí trở nên nhẹ nhàng.",
    "Khai Mở Đường Kinh Tay: Các động tác vuốt, miết và day dọc theo đường kinh tay xuống lòng bàn tay giúp đôi bàn tay thả lỏng và lưu thông.",
    "Khơi Thông Năng Lượng Toàn Thân: Những chuyển động men theo từ lòng bàn chân, lan tỏa lên vùng hông, lưng và dần lên cổ tạo lên dòng chuyển động xuyên suốt, giúp cơ thể thư giãn và nhẹ nhõm hơn.",
    "Khai Mở Vùng Cổ - Vai - Gáy: Tập trung chăm sóc vùng cổ, vai và gáy với những chuyển động chậm rãi, êm dịu, giúp xoa dịu cảm giác nặng mỏi và mang lại sự nhẹ nhõm cho cơ thể.",
    "Thư Giãn Và Giãn Cơ: Kết hợp các chuyển động nhịp nhàng, linh hoạt, thả lỏng vùng cơ và lướt xuống dọc vùng lưng, giúp cơ thể thưi thái và nhẹ nhõm hơn.",
    "Ủ Thảo Dược Ấm: Hương thảo dược hòa quyện cùng hơi ấm dịu dàng, giúp cơ thể thư thái và tận hưởng trọn vẹn cảm giác chăm sóc.",
    "Đá Nóng & Bóng Chườm Thảo Dược: Sự kết hợp giữa hơi ấm từ đá nóng và bóng chườm, nhẹ nhàng lan tỏa cảm giác ấm áp, dễ chịu đến vùng cơ thể được chăm sóc.",
    "Công Nghệ Chăm Sóc Cổ - Vai - Gáy: Ứng dụng thiết bị công nghệ hiện đại, hỗ trợ chăm sóc chuyên sâu vùng cổ, vai và gáy, mang lại cảm giác nhẹ nhàng, thư thái và cân bằng.",
  ),

  "than-60": ritualSteps(
    "Ngâm Chân Thư Thái: Ngâm chân trong làn nước ấm dịu nhẹ, giúp cơ thể dần thả lỏng, xoa dịu cảm giác mệt mỏi và mở đầu hành trình chăm sóc trong sự an nhiên.",
    "Chăm Sóc Chuyên Sâu Toàn Thân: Đánh Thức Năng Lượng Toàn Thân — Những chuyển động nhịp nhàng khơi mở cảm giác thư thái, giúp cơ thể dần thả lỏng và tìm lại sự cân bằng. Thư Giãn Vùng Lưng & Cổ - Vai - Gáy — Tập trung chăm sóc những vùng thường xuyên chịu áp lực, giúp xoa dịu cảm giác căng mỏi và mang lại sự nhẹ nhõm. Thả Lỏng & Nâng Niu Đôi Chân — Chăm sóc nhẹ nhàng đôi chân, giúp giải tỏa cảm giác nặng nề và mang đến sự thư thái, dễ chịu. Chăm Sóc Đôi Tay & Thư Thái Vùng Đầu — Những chuyển động êm dịu nâng niu đôi tay và vùng đầu, giúp tâm trí nhẹ nhàng, cơ thể thư thái hơn.",
    "Hướng Dẫn Bổ Sung Nước & Nghỉ Ngơi: Thưởng thức nước uống phù hợp, dành ít phút nghỉ ngơi để cơ thể thư thái và khép lại hành trình chăm sóc một cách trọn vẹn.",
  ),
  "than-90": ritualSteps(
    "Ngâm Chân Thảo Mộc: Làm ấm đôi chân, khơi mở cảm giác thư thái và an nhiên.",
    "Chăm Sóc Chuyên Sâu Toàn Thân: Khai Mở Năng Lượng Toàn Thân — Đánh thức cảm nhận, đưa cơ thể về trạng thái thư thái. Giải Tỏa Tích Tụ Vùng Lưng & Mông — Xoa dịu căng mỏi, khơi mở sự nhẹ nhõm. Khơi Thông Cổ - Vai - Gáy — Giải tỏa cảm giác nặng mỏi, mang lại sự dễ chịu. Nghi Thức Nhiệt Ấm Thảo Mộc — Kết hợp đá nóng và túi chườm thảo mộc. Đánh Thức Sức Sống Đôi Chân — Chăm sóc mặt sau đôi chân kết hợp đá nóng. Tái Tạo Cảm Nhận Đôi Chân — Nâng niu đôi chân trong tư thế nằm ngửa. Nâng Niu Đôi Tay — Chăm sóc nhẹ nhàng, khơi mở cảm giác thư thái. Hoàn Thiện Cổ - Vai - Gáy — Tiếp nối chăm sóc trong tư thế nằm ngửa. Tĩnh Dưỡng Mặt & Đầu — Đánh thức giác quan, giúp tâm trí lắng dịu. Khăn Ấm & Tĩnh Lặng — Khép lại hành trình trong sự an nhiên, thư thái.",
    "Hướng Dẫn Chăm Sóc Sau Buổi: Bổ sung nước, nghỉ ngơi và duy trì thói quen chăm sóc cơ thể phù hợp.",
  ),
  "than-120": ritualSteps(
    "Ngâm Chân Thảo Mộc: Làm ấm đôi chân, khơi mở cảm giác thư thái và an nhiên.",
    "Chăm Sóc Chuyên Sâu Toàn Thân: Khai Mở Dòng Chảy Năng Lượng Toàn Thân — Đánh thức cảm nhận, khơi mở sự thư thái. Giải Tỏa Tích Tụ Vùng Lưng & Mông — Xoa dịu căng mỏi, mang lại cảm giác nhẹ nhõm. Khơi Thông Vùng Cổ - Vai - Gáy — Giúp cơ thể thả lỏng và dễ chịu. Nghi Thức Nhiệt Ấm Thảo Mộc — Kết hợp đá nóng và túi chườm thảo mộc. Đánh Thức Sức Sống Đôi Chân — Chăm sóc mặt sau đôi chân kết hợp đá nóng. Khơi Mở Nhiệt Ấm — Kết hợp đá nóng và túi chườm thảo mộc. Tái Tạo Cảm Nhận Đôi Chân — Chăm sóc đôi chân trong tư thế nằm ngửa. Nâng Niu Đôi Tay — Chăm sóc nhẹ nhàng, khơi mở cảm giác thư thái. Hoàn Thiện Chăm Sóc Cổ - Vai - Gáy — Tiếp nối chăm sóc trong tư thế nằm ngửa. Tĩnh Dưỡng Mặt & Đầu — Đánh thức giác quan, giúp tâm trí lắng dịu. Khăn Ấm & Tĩnh Lặng — Khép lại hành trình trong sự an nhiên, thư thái.",
    "Hướng Dẫn Chăm Sóc Sau Buổi: Bổ sung nước, nghỉ ngơi và duy trì thói quen chăm sóc cơ thể phù hợp.",
  ),

  "lung-60": ritualSteps(
    "Ngâm Chân Thảo Mộc: Làm ấm đôi chân, khơi mở cảm giác thư thái trước khi bắt đầu hành trình chăm sóc.",
    "Khơi Thông Năng Lượng & Chăm Sóc Lưng - Eo: Khơi Mở Năng Lượng Toàn Thân — Đánh thức cảm nhận, đưa cơ thể vào trạng thái thư thái. Day Ấn Chuyên Sâu Vùng Lưng - Eo — Tập trung chăm sóc vùng lưng và eo, giúp xoa dịu cảm giác căng mỏi.",
    "Ủ Thảo Dược & Thư Giãn Đôi Chân: Hơi ấm thảo dược dịu nhẹ kết hợp chăm sóc đôi chân, mang đến cảm giác dễ chịu và thư thái.",
    "Công Nghệ Chăm Sóc Vùng Lưng - Eo: Ứng dụng thiết bị công nghệ hiện đại hỗ trợ chăm sóc chuyên sâu vùng lưng và eo, hoàn thiện hành trình trong cảm giác nhẹ nhàng, thư thái.",
  ),
  "lung-90": ritualSteps(
    "Ngâm Chân Thảo Mộc: Làm ấm đôi chân, khơi mở cảm giác thư thái trước hành trình chăm sóc.",
    "Khơi Thông & Cân Bằng Vùng Lưng - Eo: Khai Mở Năng Lượng Toàn Thân — Đánh thức cảm nhận, đưa cơ thể vào trạng thái thả lỏng. Đánh Thức Điểm Chạm Vùng Lưng - Eo - Hông — Những chuyển động tinh tế khơi mở cảm giác thư thái. Thư Giãn Chuyên Sâu Vùng Lưng - Eo — Tập trung chăm sóc, xoa dịu cảm giác căng mỏi.",
    "Dẫn Nhiệt Đá Nóng: Hơi ấm từ đá nóng lan tỏa dịu dàng, mang đến cảm giác dễ chịu và thư thái.",
    "Ủ Thảo Dược & Thư Giãn Chuyên Sâu Đôi Chân: Kết hợp hơi ấm thảo dược và chăm sóc chuyên sâu đôi chân, giúp cơ thể thả lỏng và tận hưởng cảm giác nhẹ nhàng.",
    "Công Nghệ Chăm Sóc Vùng Lưng - Eo: Ứng dụng thiết bị công nghệ hiện đại hỗ trợ chăm sóc vùng lưng - eo, hoàn thiện hành trình trong cảm giác thư thái và cân bằng.",
  ),

  "hong-60": ritualSteps(
    "Ngâm Chân Thảo Mộc: Làm ấm đôi chân, khơi mở cảm giác thư thái trước hành trình chăm sóc.",
    "Khơi Thông & Thư Giãn Lưng - Eo: Khai Mở Năng Lượng Toàn Thân — Đánh thức cảm nhận, đưa cơ thể vào trạng thái thả lỏng. Day Ấn Điểm Chạm Vùng Lưng - Eo - Hông — Kết hợp những chuyển động nhịp nhàng, giúp xoa dịu cảm giác căng mỏi. Day Ấn Theo Đường Kinh Đôi Chân — Chăm sóc nhẹ nhàng theo các đường kinh, mang lại cảm giác thư thái và dễ chịu.",
    "Công Nghệ Chăm Sóc Vùng Lưng - Eo: Ứng dụng thiết bị công nghệ hiện đại hỗ trợ chăm sóc chuyên sâu vùng lưng và eo.",
    "Công Nghệ Chăm Sóc Đôi Chân: Hỗ trợ chăm sóc chuyên sâu hai chân, mang lại cảm giác nhẹ nhàng, thư thái và dễ chịu.",
  ),
  "hong-90": ritualSteps(
    "Ngâm Chân Thảo Mộc: Làm ấm đôi chân, khơi mở cảm giác thư thái, nhẹ nhàng bước vào hành trình chăm sóc.",
    "Khơi Thông Chuyên Sâu Vùng Lưng - Eo - Chân: Day Ấn Chuyên Sâu Vùng Lưng - Hông — Tập trung vào những điểm căng mỏi, giúp vùng lưng và hông dần thả lỏng. Miết Đả Thông Vùng Lưng - Hông — Kết hợp các thủ pháp miết nhịp nhàng, hỗ trợ khơi thông và mang lại cảm giác dễ chịu. Đánh Thức & Khơi Thông Đôi Chân — Chăm sóc theo từng vùng từ chân đến bàn chân, mang lại cảm giác nhẹ nhàng, thư thái.",
    "Đá Nóng Thư Giãn: Hơi ấm từ đá nóng lan tỏa dịu dàng, giúp cơ thể thả lỏng và xoa dịu cảm giác căng mỏi.",
    "Ủ Thảo Dược Ấm Kết Hợp Khơi Thông Vùng Đầu: Hương thảo dược dịu nhẹ kết hợp chăm sóc vùng đầu, mang đến cảm giác thư thái và an nhiên.",
    "Công Nghệ Chăm Sóc Vùng Lưng - Eo: Ứng dụng thiết bị công nghệ hiện đại, hỗ trợ chăm sóc chuyên sâu vùng lưng và eo.",
    "Công Nghệ Chăm Sóc Đôi Chân: Chăm sóc chuyên sâu vùng chân bằng thiết bị công nghệ hiện đại, mang lại cảm giác nhẹ nhàng và thư thái.",
  ),
  "hong-120": ritualSteps(
    "Ngâm Chân Thảo Mộc: Làm ấm đôi chân, nhẹ nhàng khơi mở cảm giác thư thái trước hành trình chăm sóc.",
    "Khơi Thông Chuyên Sâu Lưng - Eo - Chân: Khai Mở Năng Lượng Toàn Thân — Đánh thức cảm nhận cơ thể, đưa toàn thân dần bước vào trạng thái thả lỏng. Khơi Thông Chuyên Sâu Vùng Lưng – Hông — Kết hợp các thủ pháp chuyên sâu, chăm sóc vùng lưng và hông, giúp xoa dịu cảm giác căng mỏi. Đánh Thức Cảm Nhận Đôi Chân — Tập trung chăm sóc vùng chân, hỗ trợ giải tỏa cảm giác nặng nề, ứ trệ và mang lại sự nhẹ nhàng.",
    "Đá Nóng Thư Giãn Lưng & Chân: Kết hợp hơi ấm từ đá nóng tại vùng lưng và chân, giúp cơ thể thả lỏng và tận hưởng cảm giác thư thái.",
    "Ủ Thảo Dược Ấm Kết Hợp Khơi Thông Vùng Đầu: Hương thảo dược dịu nhẹ kết hợp chăm sóc vùng đầu, giúp tâm trí lắng dịu và cơ thể thêm thư thái.",
    "Công Nghệ Chăm Sóc Vùng Lưng - Eo: Ứng dụng thiết bị công nghệ hiện đại, hỗ trợ chăm sóc chuyên sâu vùng lưng và eo.",
    "Công Nghệ Chăm Sóc Đôi Chân: Ứng dụng thiết bị công nghệ hiện đại trong chăm sóc đôi chân, mang lại cảm giác nhẹ nhàng và dễ chịu.",
  ),

  "ngu-60": ritualSteps(
    "Ngâm Chân Thư Thái: Ngâm chân trong làn nước ấm, nhẹ nhàng làm dịu cơ thể và tạo cảm giác thư thái trước khi bắt đầu hành trình chăm sóc.",
    "Thư Giãn Mặt - Đầu - Tay: Những chuyển động êm dịu nâng niu vùng mặt, đầu và đôi tay, giúp cơ thể dần thả lỏng và tâm trí trở nên nhẹ nhàng.",
    "Khơi Thông Vùng Đầu - Cổ - Vai - Gáy: Tập trung chăm sóc vùng đầu kết hợp cổ, vai và gáy, giúp xoa dịu cảm giác nặng mỏi và mang lại sự nhẹ nhõm, thư thái.",
    "Ủ Thảo Dược: Hơi ấm cùng hương thảo dược dịu nhẹ bao phủ, tạo cảm giác dễ chịu và thư thái sâu.",
    "Công Nghệ Chăm Sóc Vùng Đầu - Cổ - Vai - Gáy: Ứng dụng công nghệ hiện đại hỗ trợ chăm sóc chuyên sâu, mang đến cảm giác thư thái và nhẹ nhàng cho vùng đầu, cổ, vai và gáy.",
  ),
  "ngu-90": ritualSteps(
    "Ngâm Chân Thư Thái: Ngâm chân trong làn nước ấm, nhẹ nhàng làm dịu cơ thể và tạo cảm giác thư thái trước khi bắt đầu hành trình chăm sóc.",
    "Thư Giãn Mặt - Đầu - Tay: Những chuyển động êm dịu nâng niu vùng mặt, đầu và đôi tay, giúp cơ thể dần thả lỏng và tâm trí trở nên nhẹ nhàng.",
    "Chăm sóc Ngọc Diện Thanh: Nâng niu đường nét, đánh thức vẻ thanh tú, để gương mặt bừng lên nét rạng rỡ và an nhiên.",
    "Khơi Thông Năng Lượng: Tập trung chăm sóc vùng đầu kết hợp cổ, vai và gáy, giúp xoa dịu cảm giác nặng mỏi và mang lại sự nhẹ nhõm, thư thái. Sau đó đả thông dòng năng lượng dọc theo cơ thể dọc thoe lưng đến đôi chân giúp giải tỏa cảm giác nặng nề và mang lại cảm giác nhẹ nhõm thư thái.",
    "Ủ Thảo Dược: Hơi ấm cùng hương thảo dược dịu nhẹ bao phủ, tạo cảm giác dễ chịu và thư thái sâu.",
    "Công Nghệ Chăm Sóc Vùng Đầu - Cổ - Vai - Gáy: Ứng dụng công nghệ hiện đại hỗ trợ chăm sóc chuyên sâu, mang đến cảm giác thư thái và nhẹ nhàng cho vùng đầu, cổ, vai và gáy.",
  ),
  "ngu-120": ritualSteps(
    "Ngâm Chân Thư Thái: Ngâm chân trong làn nước ấm dịu nhẹ, giúp cơ thể dần thả lỏng, mở đầu hành trình chăm sóc trong trạng thái an nhiên và dễ chịu.",
    "Đánh Thức Giác Quan - Mặt - Đầu - Tay: Những chuyển động êm dịu nâng niu vùng mặt, đầu và đôi tay, nhẹ nhàng đánh thức cảm nhận của cơ thể và đưa tâm trí về trạng thái thư thái.",
    "Xông Mắt & Khơi Thông Vùng Đầu - Tay: Làn hơi ấm dịu nhẹ nâng niu vùng mắt, kết hợp những chuyển động tinh tế tại vùng đầu và tay, giúp xoa dịu cảm giác căng mỏi và mang lại sự nhẹ nhàng.",
    "Nâng Niu Mặt Trước Cơ Thể: Những chuyển động chậm rãi và mềm mại lan tỏa trên mặt trước cơ thể, giúp cơ thể dần thả lỏng và cảm nhận sự thư thái sâu hơn.",
    "Khơi Thông Cổ - Vai - Gáy: Tập trung chăm sóc vùng cổ, vai và gáy bằng những chuyển động nhịp nhàng, giúp xoa dịu cảm giác nặng mỏi và mang lại sự nhẹ nhõm, thông thoáng.",
    "Ủ Thảo Dược & Thư Thái Vùng Đầu: Hương thảo dược hòa quyện cùng hơi ấm dịu dàng, kết hợp chăm sóc vùng đầu, tạo nên khoảng lặng êm ái và cảm giác thư thái sâu.",
    "Đánh Thức Năng Lượng: Những chuyển động sâu và nhịp nhàng tác động lên các vùng cơ thể thường tích tụ căng thẳng, giúp cơ thể dần thả lỏng và tìm lại sự cân bằng tự nhiên.",
    "Công Nghệ Chăm Sóc Cổ - Vai - Gáy: Ứng dụng công nghệ hiện đại hỗ trợ chăm sóc chuyên sâu vùng cổ, vai và gáy, hoàn thiện hành trình bằng cảm giác nhẹ nhàng, thư thái và cân bằng.",
  ),
  "ngu-150": ritualSteps(
    "Ngâm Chân Thư Thái: Ngâm chân trong làn nước ấm, nhẹ nhàng làm dịu cơ thể và tạo cảm giác thư thái trước khi bắt đầu hành trình chăm sóc.",
    "Thư Giãn Mặt - Đầu - Tay: Những chuyển động êm dịu nâng niu vùng mặt, đầu và đôi tay, giúp cơ thể dần thả lỏng và tâm trí trở nên nhẹ nhàng.",
    "Chăm sóc Ngọc Diện Thanh: Nâng niu đường nét, đánh thức vẻ thanh tú, để gương mặt bừng lên nét rạng rỡ và an nhiên.",
    "Chườm Âm Vùng Mắt: Làn hơi ấm nhẹ nhàng nâng niu vùng mắt, xoa dịu cảm giác mỏi mệt và mang lại vẻ thư thái, tươi sáng cho đôi mắt.",
    "Đánh Thức Năng Lượng: Đánh thức năng lượng cơ thể bằng những chuyển động sâu và nhịp nhàng vào những nơi dễ tích tụ căng thẳng, giúp cơ thể dần thả lỏng và trở về trạng thái thư thái.",
    "Đả Thông Và Cân Bằng: Khơi thông dòng năng lượng bằng các chuyển động liền mạch theo toàn thân, taoh cảm giác dòng năng lượng được đả thông, kiến cơ thể trở nên nhẹ nhàng, thư giãn và thông thoáng.",
    "Ủ Thảo Dược: Hơi ấm cùng hương thảo dược dịu nhẹ bao phủ, tạo cảm giác dễ chịu và thư thái sâu.",
    "Công Nghệ Chăm Sóc Vùng Đầu - Cổ - Vai - Gáy: Ứng dụng công nghệ hiện đại hỗ trợ chăm sóc chuyên sâu, mang đến cảm giác thư thái và nhẹ nhàng cho vùng đầu, cổ, vai và gáy.",
  ),

  "goi-60": ritualSteps(
    "Ngâm Chân Thảo Dược: Đánh thức sự thư thái, làm ấm đôi chân với hương thảo dược dịu nhẹ.",
    "Thư Giãn Vùng Đầu: Đả thông vùng đầu bằng day ấn các điểm tắc nghẽn làm giảm căng thẳng kết hợp xoa dịu vùng đầu, mang đến cảm giác thư thái và nhẹ nhàng.",
    "Đánh Thức Cảm Giác Với Lông Vũ & Xúc Tu: Những chuyển động mềm mại, tinh tế xoáy sâu vào những điểm gờ làm bản thân cảm thấy dễ chịu, được chưa lành sau những ngày mệt mỏi.",
    "Chăm Sóc & Thư Giãn Vùng Mặt: Nâng vùng cơ chảy xệ đem lại cảm giác tươi mới, thanh thoát cho khuôn mặt.",
    "Chăm Sóc Vùng Vai- Ngực: Vuốt miết dọc theo chiều cơ đang bị căng bó của cơ nâng vai và nhẹ nhàng chăm sóc, giúp cơ thể cảm nhận sự dễ chịu và thả lỏng. Khơi gợi cảm giác muốn chìm vào giấc ngủ sâu.",
    "Thư Giãn Vùng Cổ - Vai - Gáy: Xoa dịu những vùng thường xuyên chịu áp lực, đả thông các đường kinh đang bị bế tắc, trải các vùng đang bị bó cứng giúp lưu thông khí huyết đem lại cảm giác nhẹ nhàng cho cơ thể.",
    "Gội Đầu Thư Giãn: Làm sạch mái tóc bằng gãi sục kết hợp gãi con kiến kết hợp những chuyển động êm dịu, giúp tâm trí được thả lỏng.",
    "Xông Thảo Dược: Đắm mình trong làn hơi ấm và hương dược liệu, tận hưởng khoảnh khắc thư thái như trong vườn thảo dược.",
    "Thư Giãn Khăn Nóng: Hơi ấm dịu dàng lan tỏa, giãn các mao mạch mang đến cảm giác mềm mại, dễ chịu và thư thái.",
    "Xả Tóc & Hoàn Thiện: Khép lại hành trình chăm sóc bằng bước xả tóc nhẹ nhàng, để bạn rời đi với cảm giác sạch thoáng và thư thái.",
  ),
  "goi-90": ritualSteps(
    "Ngâm Chân Thảo Dược: Đánh thức sự thư thái, làm ấm đôi chân với hương thảo dược dịu nhẹ.",
    "Thư Giãn Vùng Đầu: Đả thông vùng đầu bằng day ấn các điểm tắc nghẽn làm giảm căng thẳng kết hợp xoa dịu vùng đầu, mang đến cảm giác thư thái và nhẹ nhàng.",
    "Đánh Thức Cảm Giác Với Lông Vũ & Xúc Tu: Những chuyển động mềm mại, tinh tế xoáy sâu vào những điểm gờ làm bản thân cảm thấy dễ chịu, được chưa lành sau những ngày mệt mỏi.",
    "Chăm Sóc & Thư Giãn Vùng Mặt: Nâng vùng cơ chảy xệ đem lại cảm giác tươi mới, thanh thoát cho khuôn mặt.",
    "Chăm sóc Ngọc Diện Thanh: Uyển chuyển nhẹ nhàng của đá ngọc trên da giúp thư giãn cơ mặt, liệu trình mang đến cảm giác mát dịu, giải tỏa căng thẳng và nâng niu làn da sau những ngày dài mệt mỏi.",
    "Chăm Sóc Vùng Vai- Ngực: Vuốt miết dọc theo chiều cơ đang bị căng bó của cơ nâng vai và nhẹ nhàng chăm sóc, giúp cơ thể cảm nhận sự dễ chịu và thả lỏng. Khơi gợi cảm giác muốn chìm vào giấc ngủ sâu.",
    "Thư Giãn Cổ - Vai - Gáy: Xoa dịu những vùng thường xuyên chịu áp lực, đả thông các đường kinh đang bị bế tắc, trải các vùng đang bị bó cứng giúp lưu thông khí huyết đem lại cảm giác nhẹ nhàng cho cơ thể.",
    "Gội Đầu Thảo Mộc Thư Giãn: Mỗi khách hàng sẽ được tự tay lựa thảo mộc nhà Jade: Bồ kết, hương nhu, vỏ bưởi, hoa nhài, hà thủ ô, cỏ mần trầu... tự kết hợp làm kích mọc tóc, giảm rụng hay có mùi hương nhẹ thảo mộc. Làm sạch mái tóc bằng gãi sục kết hợp gãi con kiến kết hợp những chuyển động êm ái để tâm trí được nghỉ ngơi.",
    "Xông Thảo Mộc: Đắm mình trong làn hơi ấm và hương dược liệu, tận hưởng khoảnh khắc thư thái như trong vườn thảo dược.",
    "Khăn Nóng Thư Giãn: Hơi ấm dịu dàng lan tỏa, giãn các mao mạch mang đến cảm giác mềm mại, dễ chịu và thư thái.",
    "Xả Tóc & Hoàn Thiện: Nhẹ nhàng làm sạch và hoàn thiện mái tóc, khép lại hành trình chăm sóc trong cảm giác sạch thoáng và an nhiên.",
  ),
  "goi-120": ritualSteps(
    "Ngâm chân thảo dược: Đánh thức sự thư giãn và làm ấm đôi chân với hương thảo dược dịu nhẹ.",
    "Khơi mở vùng cổ vai gáy: Day miết chuyên sâu kết hợp đẩy dọc đường kinh, giúp đả thông và làm dịu cảm giác căng cứng.",
    "Nâng niu mặt sau: Xoa dịu những vùng thường xuyên chịu áp lực, đả thông các đường kinh đang bị bế tắc, trải các vùng đang bị bó cứng giúp lưu thông khí huyết đem lại cảm giác nhẹ nhàng cho cơ thể.",
    "Thư giãn vùng đầu: Đả thông vùng đầu bằng day ấn các điểm tắc nghẽn làm giảm căng thẳng kết hợp xoa dịu vùng đầu, mang đến cảm giác thư thái và nhẹ nhàng.",
    "Đánh thức cảm giác với lông vũ và xúc tu: Những chuyển động mềm mại, tinh tế xoáy sâu vào những điểm gờ làm bản thân cảm thấy dễ chịu, được chưa lành sau những ngày mệt mỏi.",
    "Chăm sóc và thư giãn vùng mặt: Nâng vùng cơ chảy xệ đem lại cảm giác tươi mới, thanh thoát cho khuôn mặt.",
    "Chăm sóc Ngọc Điện Thanh: Uyển chuyển nhẹ nhàng của đá ngọc trên da giúp thư giãn cơ mặt, liệu trình mang đến cảm giác mát dịu, giải tỏa căng thẳng và nâng niu làn da sau những ngày dài mệt mỏi.",
    "Chăm sóc vùng vai ngực: Vuốt miết dọc theo chiều cơ đang bị căng bó của cơ nâng vai và nhẹ nhàng chăm sóc, giúp cơ thể cảm nhận sự dễ chịu và thả lỏng. Khơi gợi cảm giác muốn chìm vào giấc ngủ sâu.",
    "Điểm nhẹ vùng cổ vai gáy: Trải các vùng cơ nâng vai, trả lại cảm giác nhẹ nhàng nhất cho trụ đỡ phần trên cơ thể.",
    "Gội đầu thư giãn: Làm sạch mái tóc bằng gãi sục kết hợp gãi con kiến kết hợp những chuyển động êm dịu, giúp tâm trí được thả lỏng.",
    "Xông thảo dược: Đắm mình trong làn hơi ấm và hương dược liệu, tận hưởng khoảnh khắc thư thái như trong vườn thảo dược.",
    "Thư giãn khăn nóng: Hơi ấm dịu dàng lan tỏa, giãn các mao mạch mang đến cảm giác mềm mại, dễ chịu và thư thái.",
    "Xả tóc và hoàn thiện: Khép lại hành trình bằng bước xả tóc nhẹ nhàng, giúp bạn rời đi với cảm giác sạch thoáng và thư thái.",
  ),

  "bo-tro-tu-cung": ritualSteps(
    "Ngâm Chân Thảo Mộc: Làm ấm đôi chân, khơi mở cảm giác thư thái trước hành trình chăm sóc.",
    "Ôm Ấm & Thư Giãn Vùng Bụng: Khơi Mở Điểm Chạm Vùng Bụng — Những điểm chạm nhẹ nhàng giúp cơ thể dần thả lỏng, nâng niu cảm nhận vùng bụng. Khơi Mở Cảm Giác Thư Thái Vùng Bụng — Kết hợp các chuyển động nhịp nhàng, mang đến cảm giác êm dịu và dễ chịu.",
    "Công Nghệ Chăm Sóc Vùng Bụng: Ứng dụng thiết bị công nghệ hiện đại, hỗ trợ chăm sóc vùng bụng trong không gian thư giãn.",
    "Ủ Thảo Dược Ấm: Hơi ấm thảo dược dịu nhẹ bao phủ vùng chăm sóc, mang lại cảm giác ấm áp, thư thái và dễ chịu.",
  ),
  "bo-tro-bung": ritualSteps(
    "Ngâm Chân Thảo Mộc: Làm ấm đôi chân, khơi mở cảm giác thư thái trước hành trình chăm sóc.",
    "Khơi Mở & Chăm Chút Vùng Bụng: Đánh Thức Cảm Nhận Vùng Bụng — Nâng niu vùng bụng bằng những điểm chạm tinh tế, giúp cơ thể dần thả lỏng. Khơi Dòng Tiêu Hóa, Gợi Cảm Giác Nhẹ Nhàng — Kết hợp các chuyển động nhịp nhàng, mang đến cảm giác êm dịu và dễ chịu.",
    "Công Nghệ Chăm Sóc Vùng Bụng: Ứng dụng thiết bị công nghệ hiện đại, hỗ trợ chăm sóc vùng bụng trong không gian thư thái.",
    "Ủ Thảo Dược Ấm: Hơi ấm thảo dược dịu dàng bao phủ vùng chăm sóc, mang lại cảm giác ấm áp và thư thái.",
  ),
  "bo-tro-mat": ritualSteps(
    "Ngâm Chân Thảo Mộc: Làm ấm đôi chân, khơi mở cảm giác thư thái, nhẹ nhàng bắt đầu hành trình chăm sóc.",
    "Thanh Lọc & Khai Nhan Ngọc Diện: Ngọc Thủ Khai Nhan — Nâng niu làn da bằng những điểm chạm tinh tế, khơi mở vẻ thanh tú tự nhiên. Đánh Thức Nét Đẹp An Yên — Chăm chút từng đường nét trên gương mặt, tôn lên vẻ rạng rỡ, dịu dàng và đầy sức sống.",
    "Đắp Mặt Nạ Dưỡng Nhan: Nuôi dưỡng làn da, mang đến cảm giác mềm mại, ẩm mượt và tươi tắn.",
    "Thư Giãn & Nâng Cơ Bằng Thanh Ngọc: Thanh ngọc nhẹ nhàng lướt trên gương mặt, nâng niu đường nét thanh tú, giúp diện mạo thêm tươi tắn và hài hòa.",
  ),

  "nhu-cau-90": ritualSteps(
    "Thăm Hỏi & Lắng Nghe Nhu Cầu: Tìm hiểu tình trạng cơ thể, xác định vùng cần ưu tiên theo phác đồ cá nhân của bác sĩ.",
    "Ngâm Chân Thảo Mộc: Làm ấm đôi chân, khơi mở cảm giác thư thái trước khi bắt đầu chăm sóc.",
    "Đánh Giá & Định Hướng Chuyên Môn: Đánh giá tình trạng thực tế, xây dựng hướng chăm sóc phù hợp với từng cá nhân.",
    "Chăm Sóc Theo Liệu Trình Chuyên Biệt: Thực hiện quy trình chăm sóc được thiết kế riêng, đáp ứng nhu cầu và định hướng chuyên môn đã thống nhất.",
  ),
  "nhu-cau-120": ritualSteps(
    "Thăm Hỏi & Lắng Nghe Nhu Cầu: Tìm hiểu tình trạng cơ thể và vùng cần ưu tiên theo phác đồ cá nhân của bác sĩ.",
    "Ngâm Chân Thảo Mộc: Làm ấm đôi chân, khơi mở cảm giác thư thái trước khi bắt đầu chăm sóc.",
    "Đánh Giá & Định Hướng Chuyên Môn: Đánh giá tình trạng thực tế và xác định hướng chăm sóc phù hợp với từng cá nhân.",
    "Chăm Sóc Theo Liệu Trình Chuyên Biệt: Thực hiện quy trình chăm sóc được thiết kế phù hợp với nhu cầu và định hướng chuyên môn.",
    "Dặn Dò & Theo Dõi Sau Buổi: Hướng dẫn chăm sóc tại nhà, nghỉ ngơi phù hợp và theo dõi phản hồi của cơ thể sau buổi chăm sóc.",
  ),
};

export function ritualStepsForTier(tierId: string): string[] | null {
  const steps = ritualStepsByTierId[tierId];
  if (!steps?.length) return null;
  return steps;
}
