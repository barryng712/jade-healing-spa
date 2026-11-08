import type { ReactNode } from "react";
import { HeroFilm } from "@/components/hero-film";
import { HeroStage } from "@/components/hero-stage";
import { LivingPhoto } from "@/components/living-photo";
import { Reveal } from "@/components/reveal";

export function Scene({
  src,
  alt,
  children,
  priority = false,
  align = "end",
  size = "full",
  className = "",
  videoSrc = "",
  scrollHref,
}: {
  src: string;
  alt: string;
  children: ReactNode;
  priority?: boolean;
  align?: "end" | "center";
  /** `home` is one full screen. `full` and `band` are shorter stages. */
  size?: "full" | "home" | "band";
  className?: string;
  /** Empty keeps the moving photo. A public path such as "/hero.mp4" plays on top. */
  videoSrc?: string;
  scrollHref?: string;
}) {
  if (size === "home") {
    return (
      <HeroStage src={src} alt={alt} videoSrc={videoSrc} scrollHref={scrollHref} className={className}>
        {children}
      </HeroStage>
    );
  }

  const place = align === "center" ? "items-center text-center" : "items-end";
  const height =
    size === "band"
      ? "min-h-[70svh] md:min-h-[76svh]"
      : "min-h-[100svh]";
  const veil =
    size === "band"
      ? "bg-gradient-to-t from-ink/80 via-ink/40 to-ink/55"
      : "bg-gradient-to-t from-ink/75 via-ink/25 to-ink/30";

  return (
    <section className={`relative flex overflow-hidden text-cream ${height} ${place} ${className}`}>
      <LivingPhoto src={src} alt={alt} priority={priority} sizes="100vw" />
      {videoSrc ? <HeroFilm src={videoSrc} poster={src} /> : null}
      <div className={`absolute inset-0 ${veil}`} aria-hidden="true" />
      <div className="relative z-10 mx-auto w-full max-w-[1120px] px-5 pt-24 pb-24 md:px-10 md:pt-28 md:pb-28">
        {priority ? <div className="hero-copy">{children}</div> : <Reveal>{children}</Reveal>}
      </div>
      {scrollHref ? (
        <a
          href={scrollHref}
          className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-[11px] tracking-[0.18em] text-cream uppercase no-underline"
        >
          Kéo xuống
          <span className="scroll-cue" aria-hidden="true" />
        </a>
      ) : null}
    </section>
  );
}
