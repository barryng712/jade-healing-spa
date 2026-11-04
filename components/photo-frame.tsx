import { LivingPhoto } from "@/components/living-photo";
import { photoPendingLabel } from "@/lib/site";

export function PhotoFrame({
  src,
  alt = "",
  label = photoPendingLabel,
  className = "",
  priority = false,
  sizes = "(min-width: 768px) 40vw, 100vw",
}: {
  src?: string;
  alt?: string;
  label?: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  if (!src) {
    return (
      <div
        className={`flex items-end bg-frame p-2 text-[11px] uppercase tracking-[0.06em] text-muted ${className}`}
      >
        {label}
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-frame ${className}`}>
      <LivingPhoto src={src} alt={alt} priority={priority} sizes={sizes} tone="soft" />
    </div>
  );
}
