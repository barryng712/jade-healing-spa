import type { Metadata } from "next";
import { PhotoFrame } from "@/components/photo-frame";
import { Wrap } from "@/components/wrap";
import { galleryPhotos } from "@/lib/photos";

export const metadata: Metadata = {
  title: "Thư viện ảnh",
  description:
    "Không gian gỗ, cây và phòng trị liệu tại Jade Healing Spa, Cầu Giấy, Hà Nội.",
};

export default function GalleryPage() {
  return (
    <section className="py-12 md:py-7">
      <Wrap>
        <h1 className="font-display text-[34px] leading-[42px] font-medium md:text-[48px] md:leading-[56px]">
          Thư viện ảnh
        </h1>
        <p className="mt-3 max-w-[42ch] text-[15px] leading-6 md:text-base md:leading-[26px]">
          Không gian Jade Healing Spa tại Cầu Giấy.
        </p>
        <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {galleryPhotos.map((photo, index) => (
            <li key={photo.src} className={index === 0 ? "sm:col-span-2" : undefined}>
              <PhotoFrame
                src={photo.src}
                alt={photo.alt}
                priority={index === 0}
                className={index === 0 ? "min-h-[280px] md:min-h-[460px]" : "min-h-[240px] md:min-h-[360px]"}
                sizes={index === 0 ? "(min-width: 768px) 70vw, 100vw" : "(min-width: 640px) 40vw, 100vw"}
              />
            </li>
          ))}
        </ul>
      </Wrap>
    </section>
  );
}
