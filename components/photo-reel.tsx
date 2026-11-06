import Image from "next/image";
import type { SpaPhoto } from "@/lib/photos";

export function PhotoReel({ photos }: { photos: SpaPhoto[] }) {
  const loop = [...photos, ...photos];

  return (
    <div className="min-w-0 overflow-hidden" role="region" aria-label="Không gian Jade Healing Spa">
      <ul className="photo-reel flex w-max motion-reduce:hidden">
        {loop.map((photo, index) => {
          const copy = index >= photos.length;
          return (
            <li key={`${photo.src}-${index}`} className="pr-3" aria-hidden={copy}>
              <div className="relative h-[200px] w-[150px] overflow-hidden rounded-[2px] sm:h-[240px] sm:w-[176px] md:h-[280px] md:w-[200px]">
                <Image
                  src={photo.src}
                  alt={copy ? "" : photo.alt}
                  fill
                  sizes="300px"
                  className="object-cover"
                />
              </div>
            </li>
          );
        })}
      </ul>
      <ul className="hidden gap-3 motion-reduce:grid motion-reduce:grid-cols-3">
        {photos.slice(0, 3).map((photo) => (
          <li key={photo.src} className="relative h-[220px] overflow-hidden rounded-[2px]">
            <Image src={photo.src} alt={photo.alt} fill sizes="33vw" className="object-cover" />
          </li>
        ))}
      </ul>
    </div>
  );
}
