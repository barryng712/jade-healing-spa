"use client";

import { usePathname } from "next/navigation";
import { LivingPhoto } from "@/components/living-photo";
import { bandPhoto } from "@/lib/photos";

/** Animated photo under the header on every page except home (home has its own scene). */
export function PagePhotoBand() {
  const pathname = usePathname();
  const photo = bandPhoto(pathname);
  if (!photo) return null;

  const parts = pathname.split("/").filter(Boolean);
  const serviceRoute = parts[0] === "services";
  const detailRoute = serviceRoute && parts.length === 3 && parts[1] !== "nhom";
  const frame = serviceRoute
    ? "h-[32svh] max-h-[240px] min-h-[180px] md:h-[48svh] md:max-h-[520px] md:min-h-[380px]"
    : "h-[56svh] min-h-[320px]";

  return (
    <div className={`relative -mt-[4.75rem] overflow-hidden ${frame}`} aria-hidden="true">
      <LivingPhoto src={photo.src} alt="" priority sizes="100vw" />
      <div
        className="absolute inset-0 bg-gradient-to-b from-ink/50 via-ink/20 to-transparent"
        aria-hidden="true"
      />
      {detailRoute ? (
        <p className="pointer-events-none absolute inset-0 flex items-center justify-center font-display text-[36px] leading-none font-medium text-cream md:text-[48px]">
          Dịch vụ
        </p>
      ) : null}
      <div
        className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-b from-transparent to-paper"
        aria-hidden="true"
      />
    </div>
  );
}
