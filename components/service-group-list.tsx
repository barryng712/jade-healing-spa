import Link from "next/link";
import { PhotoFrame } from "@/components/photo-frame";
import { formatPrice, minuteMarks, servicePath, type MenuGroup } from "@/lib/menu";
import type { SpaPhoto } from "@/lib/photos";

export function ServiceGroupList({
  groups,
  photos,
}: {
  groups: MenuGroup[];
  photos?: Record<string, SpaPhoto>;
}) {
  return (
    <ul className="border-t border-line">
      {groups.map((group) => {
        const only = group.tiers.length === 1 ? group.tiers[0] : null;
        const photo = photos?.[group.slug];
        return (
          <li key={group.slug} className="border-b border-line">
            <Link
              className={`grid items-center gap-x-4 gap-y-1 py-4 no-underline hover:text-wood ${
                photo
                  ? "grid-cols-[92px_1fr] md:grid-cols-[148px_1.2fr_1fr_auto] md:gap-6"
                  : "md:grid-cols-[1.3fr_1fr_auto] md:items-baseline md:gap-6"
              }`}
              href={servicePath(group)}
            >
              {photo ? (
                <PhotoFrame
                  src={photo.src}
                  alt=""
                  className="row-span-3 min-h-[92px] self-stretch rounded-lg md:row-span-1 md:min-h-[96px]"
                  sizes="148px"
                />
              ) : null}
              <span className="font-display text-[22px] font-[460] leading-snug">{group.name}</span>
              <span className="text-sm text-muted">
                {only ? `${only.minutes} phút · ${formatPrice(only.priceVnd)}` : minuteMarks(group)}
              </span>
              <span className="text-sm underline underline-offset-4">Xem chi tiết</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
