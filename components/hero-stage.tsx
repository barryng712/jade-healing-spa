"use client";

import Image from "next/image";
import { useEffect, useRef, type ReactNode } from "react";
import { HeroFilm } from "@/components/hero-film";

export function HeroStage({
  src,
  alt,
  children,
  videoSrc = "",
  scrollHref,
  className = "",
}: {
  src: string;
  alt: string;
  children: ReactNode;
  videoSrc?: string;
  scrollHref?: string;
  className?: string;
}) {
  const frame = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = frame.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let target = 0;
    let current = 0;
    let frameId = 0;
    let running = false;

    const step = () => {
      current += (target - current) * 0.14;
      const y = Math.max(0, current) * 0.32;
      node.style.transform = `translate3d(0, ${y.toFixed(2)}px, 0)`;
      if (Math.abs(target - current) > 0.4) frameId = requestAnimationFrame(step);
      else running = false;
    };

    const onScroll = () => {
      target = Math.min(window.scrollY, window.innerHeight);
      if (!running) {
        running = true;
        frameId = requestAnimationFrame(step);
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <section className={`relative h-[124svh] text-cream ${className}`}>
      <div className="sticky top-0 h-svh overflow-hidden">
        <div ref={frame} className="absolute inset-[-14%_0]">
          <Image
            src={src}
            alt={alt}
            fill
            priority
            sizes="100vw"
            className="hero-drift object-cover object-[center_40%]"
          />
          {videoSrc ? <HeroFilm src={videoSrc} poster={src} /> : null}
        </div>
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/50 via-ink/15 to-ink/25"
          aria-hidden="true"
        />
        <div className="absolute inset-x-0 bottom-[22%] z-10 mx-auto w-full max-w-[1120px] px-5 md:bottom-[18%] md:px-10">
          <div className="hero-copy relative max-w-[36rem]">
            <div className="hero-scrim" aria-hidden="true" />
            {children}
            {scrollHref ? (
              <a
                href={scrollHref}
                className="mt-5 inline-flex items-center gap-3 text-[11px] tracking-[0.18em] text-cream uppercase no-underline"
              >
                Kéo xuống
                <span className="scroll-cue" aria-hidden="true" />
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
