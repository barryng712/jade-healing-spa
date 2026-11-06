import Image from "next/image";
import Link from "next/link";
import { categoryPath, serviceCategories } from "@/lib/menu";
import { categoryPhotos } from "@/lib/photos";

export function ServiceCategoryCards({ titleAs = "h2" }: { titleAs?: "h1" | "h2" }) {
  const Title = titleAs;

  return (
    <div>
      <Title className="max-w-[18ch] font-display text-[28px] font-medium leading-9 md:text-[36px] md:leading-[44px]">
        Dịch vụ
      </Title>
      <p className="mt-3 max-w-[42ch] text-[15px] leading-6 text-ink lg:text-base lg:leading-[26px]">
        Ba lối vào. Chọn một nhóm để xem từng liệu trình.
      </p>
      <ul className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
        {serviceCategories.map((category) => {
          const photo = categoryPhotos[category.slug];
          return (
            <li key={category.slug} className="min-w-0">
              <Link
                href={categoryPath(category.slug)}
                className="group flex items-center gap-3 text-ink no-underline"
              >
                <span className="relative block size-24 shrink-0 overflow-hidden rounded-[2px] sm:size-28">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="112px"
                    className="object-cover"
                  />
                </span>
                <span className="block min-w-0">
                  <span className="block font-display text-[22px] font-medium leading-[30px] group-hover:text-wood lg:text-[24px] lg:leading-8">
                    {category.name}
                  </span>
                  <span className="mt-2 block text-[15px] leading-6 lg:mt-3 lg:text-base lg:leading-[26px]">
                    {category.description}
                  </span>
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
