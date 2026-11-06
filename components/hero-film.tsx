"use client";

import { useEffect, useRef, useState } from "react";

/** Muted film over the poster. Loads after the photo so the first paint stays the image. */
export function HeroFilm({ src, poster }: { src: string; poster: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const start = () => {
      video.preload = "auto";
      video.load();
      video.play().catch(() => setReady(false));
    };

    if (document.readyState === "complete") start();
    else window.addEventListener("load", start, { once: true });
    return () => window.removeEventListener("load", start);
  }, []);

  return (
    <video
      ref={ref}
      className={`absolute inset-0 h-full w-full object-cover object-[center_40%] transition-opacity duration-700 ${ready ? "opacity-100" : "opacity-0"}`}
      muted
      loop
      playsInline
      poster={poster}
      preload="none"
      aria-hidden="true"
      onPlaying={() => setReady(true)}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
