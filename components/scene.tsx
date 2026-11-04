import type { ReactNode } from "react";
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
}: {
  src: string;
  alt: string;
  children: ReactNode;
  priority?: boolean;
  align?: "end" | "center";
  /** `full` fills the screen. `home` is shorter so the next band can show. */
  size?: "full" | "home" | "band";
  className?: string;
}) {
  const place = align === "center" ? "items-center text-center" : "items-end";
  const height =
    size === "band"
      ? "min-h-[70svh] md:min-h-[76svh]"
      : size === "home"
        ? "min-h-[62svh] md:min-h-[68svh]"
        : "min-h-[100svh]";
  const veil =
    size === "band"
      ? "bg-gradient-to-t from-[#1c1915]/82 via-[#1c1915]/40 to-[#1c1915]/55"
      : "bg-gradient-to-t from-[#1c1915]/78 via-[#1c1915]/28 to-[#1c1915]/20";

  return (
    <section className={`relative flex overflow-hidden text-cream ${height} ${place} ${className}`}>
      <LivingPhoto src={src} alt={alt} priority={priority} sizes="100vw" />
      <div className={`absolute inset-0 ${veil}`} aria-hidden="true" />
      <div className="relative z-10 mx-auto w-full max-w-[1120px] px-5 py-16 md:px-10 md:py-20">
        {priority ? <div className="hero-copy">{children}</div> : <Reveal>{children}</Reveal>}
      </div>
    </section>
  );
}
