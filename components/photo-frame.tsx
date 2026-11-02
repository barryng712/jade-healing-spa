import Image from "next/image";
import { photoPendingLabel } from "@/lib/site";

export function PhotoFrame({
  src,
  alt = "",
  label = photoPendingLabel,
  className = "",
  priority = false,
  sizes = "(min-width: 768px) 50vw, 100vw",
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
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover"
      />
    </div>
  );
}
