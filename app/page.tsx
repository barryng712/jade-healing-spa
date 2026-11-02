import type { Metadata } from "next";
import Link from "next/link";
import { ContactActions } from "@/components/contact-actions";
import { LivingPhoto } from "@/components/living-photo";
import { Reveal } from "@/components/reveal";
import { Scene } from "@/components/scene";
import {
  galleryPhotos,
  heroPhoto,
  servicePhotos,
} from "@/lib/photos";
import { services } from "@/lib/services";
import { sampleNotice, site } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: `${site.name} — ${site.tagline}`,
  },
  description: `${site.name} tại Cầu Giấy, Hà Nội. ${site.tagline} Gọi ${site.phoneDisplay}.`,
};

const statementPhoto = galleryPhotos[1];
const galleryPair = [galleryPhotos[4], galleryPhotos[7]];
const visitPhoto = galleryPhotos[8];

export default function HomePage() {
  return (
    <>
      <Scene
        src={heroPhoto.src}
        alt={heroPhoto.alt}
        priority
        className="-mt-[4.75rem]"
      >
        <h1 className="max-w-[12ch] font-display text-[44px] leading-[1.05] font-[460] md:text-[72px]">
          {site.name}
        </h1>
        <p className="mt-3 mb-7 max-w-[28ch] text-lg md:text-[22px]">{site.tagline}</p>
        <div className="hero-focus">
          <ContactActions tone="hero" />
        </div>
      </Scene>

      <Scene src={statementPhoto.src} alt={statementPhoto.alt}>
        <h2 className="max-w-[16ch] font-display text-[36px] leading-tight font-[460] md:text-[56px]">
          Một khoảng gỗ và cây giữa Cầu Giấy.
        </h2>
        <p className="mt-4 max-w-[36ch] text-lg text-cream/90">
          Không gian yên để nghỉ. Đây không phải lời hứa chữa bệnh.
        </p>
      </Scene>

      <section className="bg-paper px-5 py-14 text-center text-ink md:py-20">
        <p className="mx-auto inline-block border border-wood px-2 py-1 text-xs uppercase tracking-[0.08em]">
          {sampleNotice}
        </p>
        <h2 className="mt-4 font-display text-[36px] font-[460] md:text-[48px]">Dịch vụ</h2>
      </section>

      {services.map((service, index) => {
        const photo = servicePhotos[service.slug];
        if (!photo) return null;
        const toRight = index % 2 === 1;
        return (
          <Scene key={service.slug} src={photo.src} alt={photo.alt}>
            <div className={toRight ? "md:ml-auto md:max-w-[28rem] md:text-right" : "max-w-[28rem]"}>
              <p className="text-xs uppercase tracking-[0.16em] text-cream/80">
                0{index + 1}
              </p>
              <h2 className="mt-3 font-display text-[36px] leading-tight font-[460] md:text-[52px]">
                {service.name}
              </h2>
              <p className="mt-4 text-base text-cream/90 md:text-lg">{service.description}</p>
              <Link
                className="mt-6 inline-flex min-h-11 items-center border border-cream px-4 text-sm text-cream no-underline hover:bg-white/10"
                href={`/services/${service.slug}`}
              >
                Xem chi tiết
              </Link>
            </div>
          </Scene>
        );
      })}

      <section className="grid md:grid-cols-2">
        {galleryPair.map((photo) => (
          <Link
            key={photo.src}
            href="/gallery"
            className="group relative block min-h-[78svh] overflow-hidden text-cream no-underline md:min-h-[100svh]"
          >
            <LivingPhoto
              src={photo.src}
              alt={photo.alt}
              sizes="(min-width: 768px) 50vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1c1915]/70 to-transparent" />
            <Reveal className="absolute bottom-8 left-6 z-10 md:bottom-12 md:left-10">
              <span className="font-display text-3xl md:text-4xl">Thư viện ảnh</span>
            </Reveal>
          </Link>
        ))}
      </section>

      <Scene src={visitPhoto.src} alt={visitPhoto.alt} align="center">
        <h2 className="font-display text-[40px] font-[460] md:text-[56px]">Ghé spa</h2>
        <p className="mx-auto mt-4 max-w-[36ch] text-lg">
          {site.address}
          <br />
          {site.hoursShort} · {site.parking}
        </p>
        <Link
          className="mt-7 inline-flex min-h-11 items-center justify-center bg-wood px-5 text-sm text-cream no-underline hover:bg-[#4a382b]"
          href="/contact"
        >
          Liên hệ
        </Link>
      </Scene>
    </>
  );
}
