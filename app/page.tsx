import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ContactActions } from "@/components/contact-actions";
import { LogoLockup } from "@/components/logo";
import { PhotoFrame } from "@/components/photo-frame";
import { PhotoReel } from "@/components/photo-reel";
import { Reveal } from "@/components/reveal";
import { Scene } from "@/components/scene";
import { ServiceCategoryCards } from "@/components/service-category-cards";
import { Wrap } from "@/components/wrap";
import { heroPhoto, homeGalleryPhotos, homeNatureBanner, homeReelPhotos } from "@/lib/photos";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: `${site.name} — ${site.tagline}`,
  },
  description: `${site.name} tại Cầu Giấy, Hà Nội. ${site.tagline} Gọi ${site.phoneDisplay}.`,
};

export default function HomePage() {
  return (
    <>
      <Scene src={heroPhoto.src} alt={heroPhoto.alt} priority size="home" className="-mt-[4.75rem]">
        <h1 aria-label={site.name}>
          <LogoLockup tone="cream" className="h-16 md:h-24" />
        </h1>
        <p className="mt-3 mb-5 max-w-[28ch] text-base md:text-lg">{site.tagline}</p>
        <div className="hero-focus">
          <ContactActions tone="hero" />
        </div>
      </Scene>

      <section className="overflow-hidden py-8 md:py-12">
        <Wrap>
          <Reveal>
            <div className="grid items-center gap-6 md:grid-cols-[0.9fr_1.1fr] md:gap-10">
              <div>
                <h2 className="max-w-[14ch] font-display text-[28px] leading-[1.15] font-[460] md:text-[36px]">
                  Một nhà cho thân, sự nghỉ, và nghi thức.
                </h2>
                <p className="mt-5 max-w-[36ch] text-muted">Một khoảng gỗ và cây giữa Cầu Giấy.</p>
                <p className="mt-3 max-w-[36ch] text-muted">
                  Không gian yên để nghỉ. Đây không phải lời hứa chữa bệnh.
                </p>
              </div>
              <div className="min-w-0">
                <PhotoReel photos={homeReelPhotos} />
              </div>
            </div>
          </Reveal>
        </Wrap>
      </section>

      <section className="bg-[#e9dcc8] py-8 md:py-12">
        <Wrap>
          <Reveal>
            <ServiceCategoryCards />
          </Reveal>
        </Wrap>
      </section>

      <section className="relative flex min-h-[32svh] items-center overflow-hidden text-cream md:min-h-[36svh]">
        <Image
          src={homeNatureBanner.src}
          alt={homeNatureBanner.alt}
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#1c1915]/45" aria-hidden="true" />
        <Wrap className="relative z-10 py-10 text-center md:py-12">
          <h2 className="mx-auto max-w-[16ch] font-display text-[28px] leading-[1.15] font-[460] md:text-[40px]">
            Từ gỗ, cây và nước.
          </h2>
          <p className="mx-auto mt-4 max-w-[36ch] text-sm text-cream/85">
            Ảnh này để xem bố cục, sẽ đổi khi có ảnh khác.
          </p>
        </Wrap>
      </section>

      <section className="py-8 md:py-12">
        <Wrap>
          <Reveal>
            <div className="mb-6 flex items-end justify-between gap-4">
              <h2 className="font-display text-[28px] font-[460] md:text-[34px]">Thư viện ảnh</h2>
              <Link className="text-sm underline underline-offset-4" href="/gallery">
                Xem tất cả
              </Link>
            </div>
            <div className="grid gap-3 md:grid-cols-3">
              {homeGalleryPhotos.map((photo) => (
                <Link key={photo.src} href="/gallery" className="block no-underline">
                  <PhotoFrame
                    src={photo.src}
                    alt={photo.alt}
                    className="min-h-[150px] md:min-h-[200px]"
                    sizes="(min-width: 768px) 33vw, 100vw"
                  />
                </Link>
              ))}
            </div>
          </Reveal>
        </Wrap>
      </section>

      <section className="bg-moss text-cream">
        <Wrap>
          <Reveal className="flex flex-col gap-4 py-8 md:flex-row md:items-end md:justify-between md:py-10">
            <div>
              <h2 className="font-display text-[28px] font-[460] md:text-[34px]">Ghé spa</h2>
              <p className="mt-3">
                {site.address}
                <br />
                {site.hoursShort} · {site.parking}
              </p>
            </div>
            <Link
              className="inline-flex min-h-11 items-center justify-center bg-wood px-4 text-sm text-cream no-underline hover:bg-[#4a382b]"
              href="/contact"
            >
              Liên hệ
            </Link>
          </Reveal>
        </Wrap>
      </section>
    </>
  );
}
