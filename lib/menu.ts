/**
 * Owner menu, Canva “MEMU TỔNG JADE” (2026-11-02).
 * Vietnamese page only. Names, minutes, and prices are from that file.
 * Ritual steps: `lib/menu-rituals.ts` (key = tier `id`). Jade Emperor: no VN name on Canva VN page.
 */

import { ritualStepsForTier } from "@/lib/menu-rituals";

export type MenuTier = {
  id: string;
  minutes: number;
  name: string;
  priceVnd: number;
  /** Filled from `menu-rituals.ts` when building each tier. */
  steps: string[] | null;
};

export type ServiceCategorySlug = "massage" | "cham-soc-toc" | "combo";

export type ServiceCategory = {
  slug: ServiceCategorySlug;
  name: string;
  description: string;
};

export type MenuGroup = {
  slug: string;
  name: string;
  category: ServiceCategorySlug;
  /** One ritual per minute mark. A single tier is still a ritual, not a duration ladder. */
  tiers: MenuTier[];
};

/**
 * Owner asked for three entries under Dịch vụ (2026-11-03).
 * An thần & giấc ngủ sits under Massage, and Chăm sóc theo nhu cầu under Combo,
 * because those two were not named in that note. Confirm before treating it as final.
 */
export const serviceCategories: ServiceCategory[] = [
  {
    slug: "massage",
    name: "Massage",
    description:
      "Các nhóm massage trên menu. Mỗi mốc phút là một liệu trình riêng, với các bước riêng.",
  },
  {
    slug: "cham-soc-toc",
    name: "Chăm sóc tóc",
    description: "Gội dưỡng sinh. Mỗi mốc phút là một liệu trình riêng, với các bước riêng.",
  },
  {
    slug: "combo",
    name: "Combo",
    description:
      "Các gói trên menu. Mỗi gói là một liệu trình. Trang chi tiết giữ ảnh, và đổi bước khi có nhiều mốc phút.",
  },
];

function tier(id: string, minutes: number, name: string, priceVnd: number): MenuTier {
  return {
    id,
    minutes,
    name,
    priceVnd,
    steps: ritualStepsForTier(id),
  };
}

export const menuGroups: MenuGroup[] = [
  {
    slug: "co-vai-gay",
    name: "Cổ vai gáy",
    category: "massage",
    tiers: [
      tier("co-40", 40, "Giải Tỏa Cơ Cổ Vai Gáy Nhanh", 410_000),
      tier("co-60", 60, "Đả Thông Cổ Vai Gáy Thư Giãn", 590_000),
      tier("co-90", 90, "Phục Hồi Cổ Vai Gáy Chuyên Sâu", 850_000),
      tier("co-120", 120, "Chăm Sóc Tái Tạo Cổ Vai Gáy Toàn Diện", 950_000),
    ],
  },
  {
    slug: "thu-gian-toan-than",
    name: "Thư giãn toàn thân",
    category: "massage",
    tiers: [
      tier("than-60", 60, "Đả Thông Kinh Lạc Toàn Thân", 590_000),
      tier("than-90", 90, "Chăm Sóc Khơi Thông Năng Lượng", 850_000),
      tier("than-120", 120, "Tái Tạo Năng Lượng Toàn Thân Chuyên Sâu", 950_000),
    ],
  },
  {
    slug: "lung-eo",
    name: "Chăm sóc lưng – eo",
    category: "massage",
    tiers: [
      tier("lung-60", 60, "Dưỡng Ấm Thận Khí & Thư Giãn Vùng Lưng", 590_000),
      tier("lung-90", 90, "Dưỡng Thận & Chăm Sóc Vùng Lưng Chuyên Sâu", 790_000),
    ],
  },
  {
    slug: "lung-hong-chan",
    name: "Chăm sóc lưng – hông – chân",
    category: "massage",
    tiers: [
      tier("hong-60", 60, "Giải Tỏa Căng Tức Thắt Lưng - Hông", 690_000),
      tier("hong-90", 90, "Đả Thông Căng Cơ Vùng Hông Chân Nâng Cao", 890_000),
      tier("hong-120", 120, "Phục Hồi Cột Sống - Hông Chân Toàn Diện", 1_090_000),
    ],
  },
  {
    slug: "an-than-giac-ngu",
    name: "An thần & giấc ngủ",
    category: "massage",
    tiers: [
      tier("ngu-60", 60, "Chăm Sóc Thư Giãn Dễ Ngủ", 590_000),
      tier("ngu-90", 90, "Chăm Sóc Tái Tạo Giấc Ngủ", 850_000),
      tier("ngu-120", 120, "Chăm Sóc Phục Hồi Giấc Ngủ Sâu", 950_000),
      tier("ngu-150", 150, "Đại Nghi Thức Ngủ Sâu Toàn Thân", 1_190_000),
    ],
  },
  {
    slug: "goi-duong-sinh",
    name: "Gội dưỡng sinh an thần",
    category: "cham-soc-toc",
    tiers: [
      tier("goi-60", 60, "Gội Dưỡng Sinh Tĩnh Tâm", 450_000),
      tier("goi-90", 90, "Gội Dưỡng Sinh An Yên Chuyên Sâu", 690_000),
      tier("goi-120", 120, "Nghi Thức Thảo Mộc Dưỡng Sinh Đầu", 790_000),
    ],
  },
  {
    slug: "thai-doc-am-tu-cung",
    name: "Nghi Thức Thải Độc Ấm Tử Cung",
    category: "combo",
    tiers: [tier("bo-tro-tu-cung", 60, "Nghi Thức Thải Độc Ấm Tử Cung", 590_000)],
  },
  {
    slug: "duong-sinh-nhuan-trang",
    name: "Dưỡng Sinh Nhuận Tràng Thải Độc Vùng Bụng",
    category: "combo",
    tiers: [tier("bo-tro-bung", 60, "Dưỡng Sinh Nhuận Tràng Thải Độc Vùng Bụng", 590_000)],
  },
  {
    slug: "nang-co-mat",
    name: "Đả Thông Kinh Lạc Nâng Cơ Mặt",
    category: "combo",
    tiers: [tier("bo-tro-mat", 60, "Đả Thông Kinh Lạc Nâng Cơ Mặt", 590_000)],
  },
  {
    slug: "jade-emperor",
    name: "Jade Emperor Therapy",
    category: "combo",
    tiers: [tier("bo-tro-jade", 150, "Jade Emperor Therapy", 1_190_000)],
  },
  {
    slug: "cham-soc-theo-nhu-cau",
    name: "Chăm sóc theo nhu cầu",
    category: "combo",
    tiers: [
      tier("nhu-cau-90", 90, "Gói Phục Hồi Cơ Khớp Theo Chuyên Môn", 890_000),
      tier("nhu-cau-120", 120, "Gói Phục Hồi Cơ Thể Chuyên Môn Cao Cấp", 1_090_000),
    ],
  },
];

export function getCategory(slug: string) {
  return serviceCategories.find((category) => category.slug === slug);
}

export function groupsInCategory(slug: string) {
  return menuGroups.filter((group) => group.category === slug);
}

export function getMenuGroup(slug: string) {
  return menuGroups.find((group) => group.slug === slug);
}

export function categoryPath(slug: string) {
  return `/services/${slug}`;
}

export function servicePath(group: MenuGroup) {
  return `/services/${group.category}/${group.slug}`;
}

export function minuteMarks(group: MenuGroup) {
  return group.tiers.map((item) => `${item.minutes} phút`).join(" · ");
}

export function formatPrice(priceVnd: number) {
  return `${new Intl.NumberFormat("vi-VN").format(priceVnd)} Vnđ`;
}
