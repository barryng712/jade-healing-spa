import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PhotoFrame } from "@/components/photo-frame";
import { ServiceDetailStage } from "@/components/service-detail-stage";
import { ServiceRitual } from "@/components/service-ritual";
import { Wrap } from "@/components/wrap";
import {
  categoryPath,
  getCategory,
  getMenuGroup,
  groupsInCategory,
  menuGroups,
  servicePath,
} from "@/lib/menu";
import { servicePhotos } from "@/lib/photos";

type Props = {
  params: Promise<{ category: string; slug: string }>;
  searchParams: Promise<{ phut?: string }>;
};

export function generateStaticParams() {
  return menuGroups.map((group) => ({ category: group.category, slug: group.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category, slug } = await params;
  const group = getMenuGroup(slug);
  if (!group || group.category !== category) return { title: "Dịch vụ" };
  return {
    title: group.name,
    description: `${group.name} tại Jade Healing Spa. Mỗi mốc phút có tên, giá và các bước riêng. Chi tiết các bước sẽ được bổ sung.`,
  };
}

export default async function ServiceDetailPage({ params, searchParams }: Props) {
  const { category, slug } = await params;
  const { phut } = await searchParams;
  const group = getMenuGroup(slug);
  const categoryInfo = getCategory(category);
  if (!group || !categoryInfo || group.category !== category) notFound();

  const minutes = Number(phut);
  const initialTierId = group.tiers.find((item) => item.minutes === minutes)?.id;
  const photo = servicePhotos[group.slug];
  const others = groupsInCategory(group.category).filter((item) => item.slug !== group.slug);

  return (
    <article className="pt-8 pb-14 md:pt-10 md:pb-16">
      <Wrap>
        <nav aria-label="Đường dẫn" className="text-sm text-muted">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link className="underline underline-offset-4" href="/services">
                Dịch vụ
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link className="underline underline-offset-4" href={categoryPath(categoryInfo.slug)}>
                {categoryInfo.name}
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>{group.name}</li>
          </ol>
        </nav>

        <ServiceDetailStage
          photo={
            <>
              <PhotoFrame
                src={photo?.src}
                alt={photo?.alt ?? "Không gian Jade Healing Spa"}
                priority
                className="h-full min-h-[240px] lg:absolute lg:inset-0 lg:min-h-0"
                sizes="(min-width: 1024px) 45vw, 100vw"
              />
              <p className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#1c1915]/80 to-transparent px-4 pt-10 pb-3 text-sm text-cream">
                Ảnh không gian spa, giữ nguyên khi đổi số phút.
              </p>
            </>
          }
        >
          <h1 className="font-display text-[32px] font-[460] leading-tight md:text-[40px]">{group.name}</h1>
          <ServiceRitual key={group.slug} group={group} initialTierId={initialTierId} />
        </ServiceDetailStage>

        {others.length > 0 ? (
          <>
            <h2 className="mt-12 font-display text-[28px] font-[460] md:text-[32px]">
              Trong {categoryInfo.name}
            </h2>
            <ul className="mt-4 border-t border-line">
              {others.map((item) => (
                <li key={item.slug} className="border-b border-line py-4">
                  <Link
                    className="font-display text-xl no-underline hover:underline"
                    href={servicePath(item)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </>
        ) : null}
      </Wrap>
    </article>
  );
}
