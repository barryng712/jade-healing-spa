import Image from "next/image";
import Link from "next/link";
import { categoryPath, serviceCategories } from "@/lib/menu";
import { categoryPhotos } from "@/lib/photos";

export function ServiceCategoryCards({ titleAs = "h2" }: { titleAs?: "h1" | "h2" }) {
  const Title = titleAs;

  return (
    <div>
      <Title className="text-center font-display text-[32px] font-[460] md:text-[40px]">Dịch vụ</Title>
      <p className="mx-auto mt-3 max-w-[42ch] text-center text-muted">
        Ba lối vào. Chọn một nhóm để xem từng liệu trình.
      </p>
      <ul className="mt-10 grid gap-4 md:grid-cols-2">
        {serviceCategories.map((category) => {
          const photo = categoryPhotos[category.slug];
          return (
            <li key={category.slug}>
              <Link
                href={categoryPath(category.slug)}
                className="grid gap-3 rounded-2xl border border-[#e0d3c0] bg-[#f7f1e6] p-2.5 no-underline hover:border-wood sm:grid-cols-[140px_1fr] sm:items-center sm:p-3"
              >
                <span className="relative block h-[120px] overflow-hidden rounded-xl sm:h-[104px]">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="168px"
                    className="object-cover"
                  />
                </span>
                <span className="block min-w-0 py-1">
                  <span className="block font-display text-[22px] font-[460] leading-tight">
                    {category.name}
                  </span>
                  <span className="mt-2 block text-sm leading-relaxed text-muted">
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
