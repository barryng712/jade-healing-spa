import { LivingPhoto } from "@/components/living-photo";
import { photoPendingLabel } from "@/lib/site";

export function PhotoFrame({
  src,
  alt = "",
  label = photoPendingLabel,
  className = "",
  priority = false,
  sizes = "(min-width: 768px) 40vw, 100vw",
  flush = false,
}: {
  src?: string;
  alt?: string;
  label?: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
  flush?: boolean;
}) {
  if (!src) {
    return (
      <div
        className={`flex items-end bg-frame p-2 text-[13px] leading-5 ${flush ? "" : "rounded-[2px]"} ${className}`}
      >
        {label}
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-frame ${flush ? "" : "rounded-[2px]"} ${className}`}>
      <LivingPhoto src={src} alt={alt} priority={priority} sizes={sizes} tone="soft" />
    </div>
  );
}
