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

/**
 * Optional home film. Leave empty to keep the moving photo (faster first paint).
 * To swap in a video, put an mp4 in `public/` and set this to "/hero.mp4".
 * It plays muted, with the photo as the first frame. No sound, no third-party host.
 */
export const heroVideoSrc = "";

export const aboutPhoto: SpaPhoto = {
  src: "/spa/reception.jpg",
  alt: "Quầy lễ tân Jade Healing Spa",
};

/** Logo printed on the full frame was cropped off. Herbs only. */
export const herbPhoto: SpaPhoto = {
  src: "/spa/herb-ground.jpg",
  alt: "Mâm thảo mộc khô tại Jade Healing Spa",
};

/** Opener for /services. A room, not a second copy of the home lounge. */
export const servicesOpener: SpaPhoto = {
  src: "/spa/treatment-room.jpg",
  alt: "Phòng giường trị liệu Jade Healing Spa",
};

/**
 * One real space per menu category. These are rooms and the herb tray,
 * not confirmed photos of a specific ritual.
 */
export const categoryPhotos = {
  massage: {
    src: "/spa/treatment-bed.jpg",
    alt: "Giường và khăn tại Jade Healing Spa",
  },
  "cham-soc-toc": herbPhoto,
  combo: {
    src: "/spa/soaking-hall.jpg",
    alt: "Khu bồn tắm Jade Healing Spa",
  },
} as const satisfies Record<string, SpaPhoto>;

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

/** Home “nhà” reel. Rooms already on the site, not a treatment photo. */
export const homeReelPhotos: SpaPhoto[] = [
  aboutPhoto,
  servicesOpener,
  categoryPhotos.combo,
  herbPhoto,
];

/** Temporary home banner. Owner will replace the picture. */
/** Decorative velvet moss grain (tiled, not full-bleed). Owner reference texture. */
export const homeServicesMossTexture = "/textures/home-services-moss.jpg" as const;

/** Beige stone panel behind offer-card copy (tiled). */
export const offerCardBeigeTexture = "/textures/offer-card-beige.jpg" as const;

export const homeNatureBanner: SpaPhoto = {
  src: "/spa/soaking-hall.jpg",
  alt: "Khu bồn tắm Jade Healing Spa",
};

const galleryBand: SpaPhoto = {
  src: "/spa/dried-flowers.jpg",
  alt: "Chi tiết hoa khô tại Jade Healing Spa",
};

const reviewsBand: SpaPhoto = {
  src: "/spa/flowers.jpg",
  alt: "Hoa và bàn gỗ tại Jade Healing Spa",
};

const aboutBand: SpaPhoto = {
  src: "/spa/logo-wall.jpg",
  alt: "Logo Jade Healing Spa trên tường",
};

/** Photo under the header. Home returns null because it already has a scene. */
export function bandPhoto(pathname: string): SpaPhoto | null {
  if (pathname === "/") return null;
  if (pathname === "/about") return aboutBand;
  if (pathname === "/gallery") return galleryBand;
  if (pathname === "/reviews") return reviewsBand;
  if (pathname === "/contact") return aboutPhoto;
  if (pathname === "/services") return servicesOpener;

  const detail = pathname.match(/^\/services\/[^/]+\/([^/]+)\/?$/);
  if (detail) {
    const slug = detail[1];
    if (slug && slug in servicePhotos) return servicePhotos[slug] ?? servicesOpener;
  }

  const category = pathname.match(/^\/services\/([^/]+)\/?$/);
  if (category) {
    const slug = category[1];
    if (slug === "massage" || slug === "cham-soc-toc" || slug === "combo") {
      return categoryPhotos[slug];
    }
  }

  return heroPhoto;
}

/** Space photos beside a menu group. Not a confirmed photo of that treatment. */
export const servicePhotos: Record<string, SpaPhoto> = {
  "goi-duong-sinh": {
    src: "/spa/treatment-bed.jpg",
    alt: "Giường và khăn tại Jade Healing Spa",
  },
  "an-than-giac-ngu": {
    src: "/spa/soaking-hall.jpg",
    alt: "Khu bồn tắm Jade Healing Spa",
  },
  "co-vai-gay": {
    src: "/spa/treatment-room.jpg",
    alt: "Phòng giường trị liệu Jade Healing Spa",
  },
  "thu-gian-toan-than": {
    src: "/spa/lounge.jpg",
    alt: "Ghế cong, trần gỗ và cây trong Jade Healing Spa",
  },
  "cham-soc-theo-nhu-cau": {
    src: "/spa/treatment-room.jpg",
    alt: "Phòng giường trị liệu Jade Healing Spa",
  },
  "lung-eo": {
    src: "/spa/treatment-bed.jpg",
    alt: "Giường và khăn tại Jade Healing Spa",
  },
  "lung-hong-chan": {
    src: "/spa/soaking-tubs.jpg",
    alt: "Bồn tắm và cây trong Jade Healing Spa",
  },
  "thai-doc-am-tu-cung": herbPhoto,
  "duong-sinh-nhuan-trang": {
    src: "/spa/soaking-hall.jpg",
    alt: "Khu bồn tắm Jade Healing Spa",
  },
  "nang-co-mat": {
    src: "/spa/treatment-room.jpg",
    alt: "Phòng giường trị liệu Jade Healing Spa",
  },
  "jade-emperor": {
    src: "/spa/lounge.jpg",
    alt: "Ghế cong, trần gỗ và cây trong Jade Healing Spa",
  },
};
