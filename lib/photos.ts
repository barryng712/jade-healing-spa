export type SpaPhoto = {
  src: string;
  alt: string;
};

/**
 * Chosen from assets/spa/. Phone/address footers were cropped because they
 * printed 0917 110 066, not the confirmed hotline. Unknown-9.jpg is unused:
 * it advertises an unconfirmed menu, a duration, and promotional lines.
 */

export const heroPhoto: SpaPhoto = {
  src: "/spa/lounge.jpg",
  alt: "Ghế cong, trần gỗ và cây trong Jade Healing Spa",
};

export const aboutPhoto: SpaPhoto = {
  src: "/spa/reception.jpg",
  alt: "Quầy lễ tân Jade Healing Spa",
};

export const galleryPhotos: SpaPhoto[] = [
  heroPhoto,
  aboutPhoto,
  {
    src: "/spa/treatment-room.jpg",
    alt: "Phòng giường trị liệu Jade Healing Spa",
  },
  {
    src: "/spa/treatment-bed.jpg",
    alt: "Giường và khăn tại Jade Healing Spa",
  },
  {
    src: "/spa/soaking-hall.jpg",
    alt: "Khu bồn tắm Jade Healing Spa",
  },
  {
    src: "/spa/soaking-tubs.jpg",
    alt: "Bồn tắm và cây trong Jade Healing Spa",
  },
  {
    src: "/spa/flowers.jpg",
    alt: "Hoa và bàn gỗ tại Jade Healing Spa",
  },
  {
    src: "/spa/dried-flowers.jpg",
    alt: "Chi tiết hoa khô tại Jade Healing Spa",
  },
  {
    src: "/spa/logo-wall.jpg",
    alt: "Logo Jade Healing Spa trên tường",
  },
];

export const homeGalleryPhotos = galleryPhotos.slice(1, 4);

export const servicePhotos: Record<string, SpaPhoto> = {
  "goi-dau-thu-gian": {
    src: "/spa/treatment-bed.jpg",
    alt: "Giường và khăn tại Jade Healing Spa",
  },
  "massage-body": {
    src: "/spa/treatment-room.jpg",
    alt: "Phòng giường trị liệu Jade Healing Spa",
  },
  "cham-soc-da-mat": {
    src: "/spa/flowers.jpg",
    alt: "Hoa và bàn gỗ tại Jade Healing Spa",
  },
  "combo-nghi-ngan": {
    src: "/spa/soaking-tubs.jpg",
    alt: "Bồn tắm và cây trong Jade Healing Spa",
  },
};
