import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ContactActions } from "@/components/contact-actions";
import { LogoLockup } from "@/components/logo";
import { MarkTitle } from "@/components/mark-title";
import { PhotoFrame } from "@/components/photo-frame";
import { PhotoReel } from "@/components/photo-reel";
import { Reveal } from "@/components/reveal";
import { SectionTexture } from "@/components/section-texture";
import { Scene } from "@/components/scene";
import { ServiceDirectory } from "@/components/service-directory";
import { ServicesMossBand } from "@/components/services-moss-band";
import { Wrap } from "@/components/wrap";
import {
  heroPhoto,
  heroVideoSrc,
  homeFacilityDoctor,
  homeFacilityFace,
  homeFacilityMachine,
  homeGalleryPhotos,
  homeNatureBanner,
  homeReelPhotos,
} from "@/lib/photos";
import { HomeScrollDiagnosticsGate } from "@/components/dev/home-scroll-diagnostics-gate";
import { HomeViewportScrollStability } from "@/components/home-viewport-scroll-stability";
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
      <HomeViewportScrollStability />
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
        className="home-sheet-overlap relative z-10 -mt-[24svh] max-md:-mt-[calc(var(--lock-vh,100svh)*0.24)] overflow-hidden rounded-t-[28px] bg-paper py-10 shadow-[0_-28px_60px_rgba(38,59,50,0.12)] md:rounded-t-[40px] md:py-14"
      >
        <SectionTexture src="/textures/linen-neutral.jpg" />
        <Wrap className="relative">
          <Reveal className="reveal-float">
            <div className="grid items-start gap-6 md:grid-cols-[0.9fr_1.1fr] md:gap-10">
              <div>
                <MarkTitle className="mb-4 justify-start">Về Jade</MarkTitle>
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

      <section
        id="co-so"
        aria-labelledby="co-so-heading"
        className="relative scroll-mt-24 bg-paper py-8 md:scroll-mt-28 md:py-10"
      >
        <SectionTexture src="/textures/linen-neutral.jpg" />
        <div className="relative mx-auto w-full max-w-[1180px] px-5 md:px-8">
          <div className="home-facilities flex flex-col md:flex-row-reverse md:items-start">
            <div className="md:min-w-0 md:flex-1">
              <p className="flex items-center gap-3 text-[13px] leading-5 font-medium tracking-[0.16em] text-brass uppercase">
                <span className="h-px w-8 bg-brass" aria-hidden="true" />
                Con người & phương pháp
              </p>
              <h2
                id="co-so-heading"
                className="mt-4 max-w-[12ch] font-display text-[32px] leading-[1.15] font-medium md:text-[42px]"
              >
                Thấu hiểu trước khi chạm.
              </h2>
              <p className="mt-4 max-w-[46ch] text-[15px] leading-6">
                Mỗi trải nghiệm tại Jade bắt đầu từ việc lắng nghe nhu cầu riêng của bạn — từ tư vấn
                sức khỏe cùng bác sĩ Y học cổ truyền, đến các liệu trình thư giãn kết hợp thao tác
                chăm sóc và thiết bị hỗ trợ phù hợp.
              </p>
              <ol className="mt-6 border-t border-line">
                {[
                  ["01", "Tư vấn sức khỏe", "Trao đổi và hiểu rõ mong muốn của từng khách hàng."],
                  ["02", "Kỹ thuật & thiết bị hỗ trợ", "Ứng dụng phù hợp với từng trải nghiệm chăm sóc."],
                  ["03", "Khoảng nghỉ cho riêng bạn", "Chú trọng sự thư thái và cảm nhận trong từng liệu trình."],
                ].map(([number, title, line]) => (
                  <li key={number} className="grid grid-cols-[2.25rem_minmax(0,1fr)] gap-x-3 border-b border-line py-3">
                    <span className="text-[12px] leading-5 font-medium tracking-[0.08em] text-brass">{number}</span>
                    <span>
                      <span className="block text-[15px] leading-5 font-medium">{title}</span>
                      <span className="mt-1 block text-[13px] leading-5">{line}</span>
                    </span>
                  </li>
                ))}
              </ol>
              <Link
                href="/services"
                className="mt-5 inline-flex items-center gap-2 border-b border-ink pb-1 text-sm font-medium no-underline"
              >
                Khám phá các dịch vụ
                <span aria-hidden="true">↗</span>
              </Link>
            </div>
            <div className="home-facilities-gallery flex max-md:w-full flex-col gap-2 md:gap-3">
              <Image
                src={homeFacilityDoctor.src}
                alt={homeFacilityDoctor.alt}
                width={homeFacilityDoctor.width}
                height={homeFacilityDoctor.height}
                sizes="(min-width: 768px) 55vw, 100vw"
                className="h-auto w-full object-contain"
              />
              <div className="grid grid-cols-[830fr_1024fr] items-start gap-2 md:gap-3">
                <Image
                  src={homeFacilityMachine.src}
                  alt={homeFacilityMachine.alt}
                  width={homeFacilityMachine.width}
                  height={homeFacilityMachine.height}
                  sizes="(min-width: 768px) 24vw, 45vw"
                  className="h-auto w-full"
                />
                <Image
                  src={homeFacilityFace.src}
                  alt={homeFacilityFace.alt}
                  width={homeFacilityFace.width}
                  height={homeFacilityFace.height}
                  sizes="(min-width: 768px) 30vw, 55vw"
                  className="h-auto w-full"
                />
              </div>
              <p className="mt-3 text-[13px] leading-5">Những khoảnh khắc thực tế tại Jade Healing Spa.</p>
            </div>
          </div>
        </div>
      </section>

      <ServicesMossBand className="py-12 md:py-7">
        <Wrap className="flex flex-col gap-8 md:gap-10">
          <Reveal>
            <MarkTitle as="h2" tone="moss">
              Dịch vụ
            </MarkTitle>
          </Reveal>
          <ServiceDirectory reveal homeBand />
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
            <div className="mb-6 flex items-center justify-between gap-4">
              <MarkTitle>Thư viện ảnh</MarkTitle>
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
              <MarkTitle tone="moss">Ghé spa</MarkTitle>
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
