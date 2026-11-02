import type { ReactNode } from "react";
import { LivingPhoto } from "@/components/living-photo";
import { Reveal } from "@/components/reveal";

export function Scene({
  src,
  alt,
  children,
  priority = false,
  align = "end",
  className = "",
}: {
  src: string;
  alt: string;
  children: ReactNode;
  priority?: boolean;
  align?: "end" | "center";
  className?: string;
}) {
  const place =
    align === "center" ? "items-center text-center" : "items-end";

  return (
    <section
      className={`relative flex min-h-[100svh] overflow-hidden text-cream ${place} ${className}`}
    >
      <LivingPhoto src={src} alt={alt} priority={priority} sizes="100vw" />
      <div
        className="absolute inset-0 bg-gradient-to-t from-[#1c1915]/78 via-[#1c1915]/28 to-[#1c1915]/20"
        aria-hidden="true"
      />
      <div className="relative z-10 mx-auto w-full max-w-[1120px] px-5 py-16 md:px-10 md:py-20">
        {priority ? <div className="hero-copy">{children}</div> : <Reveal>{children}</Reveal>}
      </div>
    </section>
  );
}
