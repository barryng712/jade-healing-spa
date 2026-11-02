"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export function LivingPhoto({
  src,
  alt,
  priority = false,
  sizes = "100vw",
}: {
  src: string;
  alt: string;
  priority?: boolean;
  sizes?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [live, setLive] = useState(false);
  const [playing, setPlaying] = useState(false);
  const variant = src.length % 2 === 0 ? "film-a" : "film-b";
  const duration = 12 + (src.length % 3) * 2;

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;
        if (entry.isIntersecting) setLive(true);
        setPlaying(entry.isIntersecting);
      },
      { rootMargin: "12% 0px", threshold: 0.2 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden">
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        style={live ? { animationDuration: `${duration}s` } : undefined}
        className={`object-cover photo-film ${variant} ${live ? "is-live" : ""} ${playing ? "is-on" : ""}`}
      />
    </div>
  );
}
