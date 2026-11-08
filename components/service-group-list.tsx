import Link from "next/link";
import { PhotoFrame } from "@/components/photo-frame";
import { formatPrice, getCategory, servicePath, type MenuGroup } from "@/lib/menu";
import type { SpaPhoto } from "@/lib/photos";

export function ServiceGroupList({
  groups,
  photos,
  showCategory = false,
  className = "",
}: {
  groups: MenuGroup[];
  photos?: Record<string, SpaPhoto>;
  showCategory?: boolean;
  className?: string;
}) {
  return (
    <ul className={`border-t border-bronze ${className}`}>
      {groups.map((group, index) => {
        const photo = photos?.[group.slug];
        const category = showCategory ? getCategory(group.category) : null;
        const flip = index % 2 === 1;
        return (
          <li key={group.slug} className="border-b border-bronze">
            <Link
              href={servicePath(group)}
              className="group grid min-w-0 py-8 no-underline lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center lg:gap-12 lg:py-10"
            >
              {photo ? (
                <PhotoFrame
                  src={photo.src}
                  alt={photo.alt}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className={`aspect-[4/3] w-full max-w-full ${flip ? "lg:order-2" : ""}`}
                />
              ) : null}
              <div className={`min-w-0 ${photo ? "mt-4 lg:mt-0" : ""} ${flip ? "lg:order-1" : ""}`}>
                {category ? (
                  <p className="mb-3 text-xs leading-4 font-medium tracking-[0.14em] uppercase">
                    {category.name}
                  </p>
                ) : null}
                <h2 className="font-display text-[28px] leading-9 font-medium lg:text-[36px] lg:leading-[44px]">
                  {group.name}
                </h2>
                <ul className="mt-4 flex flex-col gap-2">
                  {group.tiers.map((tier) => (
                    <li key={tier.id} className="flex items-baseline justify-between gap-4">
                      <span className="text-sm leading-5 font-medium">{tier.minutes} phút</span>
                      <span className="shrink-0 font-display text-[24px] leading-7 font-medium whitespace-nowrap lg:text-[28px] lg:leading-8">
                        {formatPrice(tier.priceVnd)}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
