import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ContactActions } from "@/components/contact-actions";
import { LogoLockup } from "@/components/logo";
import { PhotoFrame } from "@/components/photo-frame";
import { PhotoReel } from "@/components/photo-reel";
import { Reveal } from "@/components/reveal";
import { SectionTexture } from "@/components/section-texture";
import { Scene } from "@/components/scene";
import { ServiceDirectory } from "@/components/service-directory";
import { ServicesMossBand } from "@/components/services-moss-band";
import { Wrap } from "@/components/wrap";
import { heroPhoto, heroVideoSrc, homeGalleryPhotos, homeNatureBanner, homeReelPhotos } from "@/lib/photos";
import { HomeScrollDiagnosticsGate } from "@/components/dev/home-scroll-diagnostics-gate";
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
      <Scene
        src={heroPhoto.src}
        alt={heroPhoto.alt}
        videoSrc={heroVideoSrc}
        priority
        size="home"
        scrollHref="#tiep-theo"
        className="-mt-[4.75rem]"
      >
        <LogoLockup tone="cream" className="h-14 md:h-20" />
        <h1 className="mx-auto mt-4 max-w-[16ch] font-display text-[28px] leading-9 font-medium text-cream md:mx-0 md:text-[36px] md:leading-[44px]">
          Một nhà cho thân, sự nghỉ, và nghi thức.
        </h1>
        <p className="mx-auto mt-3 mb-5 max-w-[28ch] font-display text-[18px] leading-7 italic md:mx-0 md:text-[22px] md:leading-8">
          {site.tagline}
        </p>
        <div className="hero-focus flex justify-center md:justify-start">
          <ContactActions tone="hero" />
        </div>
      </Scene>

      <section
        id="tiep-theo"
        className="relative z-10 -mt-[24svh] overflow-hidden rounded-t-[28px] bg-paper py-10 shadow-[0_-28px_60px_rgba(38,59,50,0.12)] md:rounded-t-[40px] md:py-14"
      >
        <SectionTexture src="/textures/linen-neutral.jpg" />
        <Wrap className="relative">
          <Reveal className="reveal-float">
            <div className="grid items-center gap-6 md:grid-cols-[0.9fr_1.1fr] md:gap-10">
              <div>
                <p className="max-w-[36ch] text-[15px] leading-6 md:text-base md:leading-[26px]">
                  Một khoảng gỗ và cây giữa Cầu Giấy.
                </p>
                <p className="mt-3 max-w-[36ch]">
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

      <ServicesMossBand className="py-12 md:py-7">
        <Wrap className="flex flex-col gap-8 md:gap-10">
          <Reveal>
            <div>
              <h2 className="font-display text-[28px] leading-9 font-medium md:text-[36px] md:leading-[44px]">
                Dịch vụ
              </h2>
              <hr className="mt-6 border-0 border-t border-cream/40" aria-hidden="true" />
            </div>
          </Reveal>
          <ServiceDirectory reveal homeBand mossTitles />
        </Wrap>
      </ServicesMossBand>

      <section className="relative flex min-h-[32svh] items-center overflow-hidden text-cream md:min-h-[36svh]">
        <Image
          src={homeNatureBanner.src}
          alt={homeNatureBanner.alt}
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-ink/45" aria-hidden="true" />
        <Wrap className="relative z-10 py-10 text-center md:py-12">
          <h2 className="mx-auto max-w-[16ch] font-display text-[28px] leading-9 font-medium md:text-[36px] md:leading-[44px]">
            Từ gỗ, cây và nước.
          </h2>
        </Wrap>
      </section>

      <section className="relative overflow-hidden bg-paper py-8 md:py-12">
        <SectionTexture src="/textures/linen-neutral.jpg" />
        <Wrap className="relative">
          <Reveal>
            <div className="mb-6 flex items-end justify-between gap-4">
              <h2 className="font-display text-[28px] leading-9 font-medium md:text-[36px] md:leading-[44px]">
                Thư viện ảnh
              </h2>
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

      <section className="relative overflow-hidden bg-ink text-cream">
        <SectionTexture src="/textures/olive-weave.jpg" blend="mix-blend-soft-light opacity-90" />
        <Wrap className="relative">
          <Reveal className="flex flex-col gap-4 py-8 md:flex-row md:items-end md:justify-between md:py-10">
            <div>
              <h2 className="font-display text-[28px] leading-9 font-medium md:text-[36px] md:leading-[44px]">
                Ghé spa
              </h2>
              <p className="mt-3">
                {site.address}
                <br />
                {site.hoursShort} · {site.parking}
              </p>
            </div>
            <Link
              className="inline-flex min-h-11 items-center justify-center rounded bg-cream px-4 text-sm font-medium text-ink no-underline hover:bg-white"
              href="/contact"
            >
              Liên hệ
            </Link>
          </Reveal>
        </Wrap>
      </section>
      {process.env.NODE_ENV === "development" ? <HomeScrollDiagnosticsGate /> : null}
    </>
  );
}
