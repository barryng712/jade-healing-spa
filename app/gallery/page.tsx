import type { Metadata } from "next";
import { LivingPhoto } from "@/components/living-photo";
import { Wrap } from "@/components/wrap";
import { galleryPhotos } from "@/lib/photos";

export const metadata: Metadata = {
  title: "Thư viện ảnh",
  description:
    "Không gian gỗ, cây và phòng trị liệu tại Jade Healing Spa, Cầu Giấy, Hà Nội.",
};

export default function GalleryPage() {
  return (
    <section className="pb-16">
      <Wrap>
        <h1 className="py-10 font-display text-[36px] font-[460] md:py-14 md:text-[48px]">
          Thư viện ảnh
        </h1>
      </Wrap>
      <ul>
        {galleryPhotos.map((photo, index) => (
          <li key={photo.src} className="relative h-[78svh] overflow-hidden md:h-[100svh]">
            <LivingPhoto
              src={photo.src}
              alt={photo.alt}
              priority={index === 0}
              sizes="100vw"
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
