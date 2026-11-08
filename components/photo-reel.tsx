import Image from "next/image";
import type { SpaPhoto } from "@/lib/photos";

export function PhotoReel({ photos }: { photos: SpaPhoto[] }) {
  const loop = [...photos, ...photos];

  return (
    <div className="min-w-0 overflow-hidden" role="region" aria-label="Không gian Jade Healing Spa">
      <ul className="photo-reel hidden w-max motion-reduce:hidden md:flex">
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
      <ul className="grid grid-cols-2 gap-3 md:hidden motion-reduce:grid motion-reduce:grid-cols-3">
        {photos.map((photo) => (
          <li key={photo.src} className="relative h-[200px] overflow-hidden rounded-[2px] sm:h-[220px]">
            <Image src={photo.src} alt={photo.alt} fill sizes="50vw" className="object-cover" />
          </li>
        ))}
      </ul>
    </div>
  );
}
