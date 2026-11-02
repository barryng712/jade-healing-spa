export type Service = {
  slug: string;
  name: string;
  description: string;
};

/** Labeled samples. Not the real menu. No durations or prices. */
export const services: Service[] = [
  {
    slug: "goi-dau-thu-gian",
    name: "Gội đầu thư giãn",
    description:
      "Gội và massage da đầu trong không gian yên. Thời lượng và giá sẽ cập nhật theo menu.",
  },
  {
    slug: "massage-body",
    name: "Massage body",
    description:
      "Massage toàn thân để thư giãn. Không mô tả công dụng y khoa.",
  },
  {
    slug: "cham-soc-da-mat",
    name: "Chăm sóc da mặt",
    description:
      "Làm sạch và dưỡng da nhẹ. Không hứa kết quả điều trị.",
  },
  {
    slug: "combo-nghi-ngan",
    name: "Combo nghỉ ngắn",
    description:
      "Một buổi kết hợp ngắn. Nội dung combo sẽ thay khi có menu.",
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getRelatedServices(slug: string) {
  return services.filter((service) => service.slug !== slug);
}
