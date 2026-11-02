/**
 * Live copy. Source of truth: docs/confirmed-content.md.
 * Do not add prices, reviews, a Zalo URL, or an About story here.
 */

export const site = {
  name: "Jade Healing Spa",
  legalName: "CÔNG TY TNHH JADE NATURE CARE",
  tagline: "Chăm sóc · An yên · Chữa lành",
  address: "Số 2 ngách 66/18 Dịch Vọng Hậu, Cầu Giấy, Hà Nội",
  phoneDisplay: "0357050796",
  phoneTel: "tel:+84357050796",
  email: "jadehealingspa@gmail.com",
  hours: "09:00–21:00, thứ Hai–Chủ nhật",
  hoursShort: "09:00–21:00",
  parking: "Có chỗ đỗ xe",
  facebook: "https://www.facebook.com/jadehealingspa/",
  /** Owner has not supplied a Zalo URL. Do not invent zalo.me. */
  zaloUrl: null as string | null,
  mapUrl: "https://www.google.com/maps?q=21.03320,105.78426",
  mapEmbedUrl:
    "https://maps.google.com/maps?q=21.03320,105.78426&hl=vi&z=16&output=embed",
  latitude: 21.0332,
  longitude: 105.78426,
  plannedDomain: "https://jadehealingspa.com.vn",
} as const;

export const nav = [
  { href: "/", label: "Trang chủ" },
  { href: "/about", label: "Về spa" },
  { href: "/services", label: "Dịch vụ" },
  { href: "/gallery", label: "Thư viện ảnh" },
  { href: "/reviews", label: "Đánh giá" },
  { href: "/contact", label: "Liên hệ" },
] as const;

export const sampleNotice = "Dịch vụ minh họa — menu thật sẽ thay sau";

export const photoPendingLabel = "Ảnh sẽ được thay bằng ảnh spa";

export const galleryEmptyLabel =
  "Ảnh spa sẽ được thêm khi chủ spa gửi file";
