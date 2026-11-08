"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type ReactNode } from "react";
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
  const heroImg = useRef<HTMLImageElement | null>(null);
  const [photoReady, setPhotoReady] = useState(false);

  useEffect(() => {
    if (heroImg.current?.complete) setPhotoReady(true);
  }, []);

  useEffect(() => {
    const node = frame.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const sticky = node.parentElement;
    const section = sticky?.parentElement;

    let target = 0;
    let current = 0;
    let frameId = 0;
    let running = false;
    let scrollCap = 0;

    /** Measured on mount/resize only — avoids layout reads during scroll (see scroll-jump audit). */
    const measureCap = () => {
      if (section && sticky) {
        scrollCap = Math.max(0, section.offsetHeight - sticky.offsetHeight);
        return;
      }
      const h = window.visualViewport?.height ?? window.innerHeight;
      scrollCap = Math.round(h * 0.24);
    };

    const step = () => {
      current += (target - current) * 0.14;
      const y = Math.max(0, current) * 0.32;
      node.style.transform = `translate3d(0, ${y.toFixed(2)}px, 0)`;
      if (Math.abs(target - current) > 0.4) frameId = requestAnimationFrame(step);
      else running = false;
    };

    const onScroll = () => {
      target = Math.min(window.scrollY, scrollCap);
      if (!running) {
        running = true;
        frameId = requestAnimationFrame(step);
      }
    };

    const onResize = () => {
      measureCap();
      target = Math.min(window.scrollY, scrollCap);
    };

    measureCap();
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    window.visualViewport?.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      window.visualViewport?.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <section className={`relative h-[124svh] text-cream ${className}`}>
      <div className="sticky top-0 h-svh overflow-hidden bg-forest-deep">
        <div ref={frame} className="absolute inset-[-14%_0]">
          <Image
            src={src}
            alt={alt}
            fill
            priority
            fetchPriority="high"
            sizes="100vw"
            className={`hero-drift object-cover object-[center_40%] transition-opacity duration-500 ${
              photoReady ? "opacity-100" : "opacity-0"
            }`}
            onLoadingComplete={() => setPhotoReady(true)}
            ref={heroImg}
          />
          {videoSrc ? <HeroFilm src={videoSrc} poster={src} /> : null}
        </div>
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/50 via-ink/15 to-ink/25"
          aria-hidden="true"
        />
        <div className="absolute inset-x-0 bottom-[calc(24svh+1rem)] z-10 mx-auto w-full max-w-[1120px] px-5 md:bottom-[18%] md:px-10">
          <div className="hero-copy relative mx-auto max-w-[36rem] text-center md:mx-0 md:text-left">
            <div
              className={`hero-scrim transition-opacity duration-500 ${photoReady ? "opacity-100" : "opacity-0"}`}
              aria-hidden="true"
            />
            {children}
            {scrollHref ? (
              <a
                href={scrollHref}
                className="mt-5 hidden items-center gap-3 text-[11px] tracking-[0.18em] text-cream uppercase no-underline md:inline-flex"
              >
                Kéo xuống
                <span className="scroll-cue" aria-hidden="true" />
              </a>
            ) : null}
          </div>
        </div>
        {scrollHref ? (
          <a
            href={scrollHref}
            className="absolute bottom-[calc(24svh-2.75rem)] left-1/2 z-10 inline-flex -translate-x-1/2 items-center gap-3 text-[11px] tracking-[0.18em] text-cream uppercase no-underline md:hidden"
          >
            Kéo xuống
            <span className="scroll-cue" aria-hidden="true" />
          </a>
        ) : null}
      </div>
    </section>
  );
}
