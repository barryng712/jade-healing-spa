import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PhotoFrame } from "@/components/photo-frame";
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
    description: `${group.name} tại Jade Healing Spa. Tên, phút và giá theo menu.`,
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
    <article className="bg-sand py-8 text-ink md:py-10 md:pb-16">
      <Wrap>
        <div className="mx-auto max-w-[760px]">
        <nav aria-label="Đường dẫn" className="text-center text-sm text-muted">
          <ol className="flex flex-wrap items-center justify-center gap-2">
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

        <ServiceRitual
          group={group}
          tierId={initialTierId}
          photo={
            <PhotoFrame
              src={photo?.src}
              alt={photo?.alt ?? "Không gian Jade Healing Spa"}
              priority
              flush
              className="aspect-[16/10] w-full"
              sizes="(min-width: 768px) 70vw, 100vw"
            />
          }
        />

        {others.length > 0 ? (
          <div className="mt-12">
            <h2 className="font-display text-[26px] leading-8 font-medium md:text-[28px] md:leading-9">
              Dịch vụ liên quan
            </h2>
            <ul className="mt-4 grid gap-3">
              {others.map((item) => (
                <li key={item.slug}>
                  <Link
                    className="flex items-center justify-between gap-4 rounded border border-line bg-paper px-4 py-3 no-underline hover:bg-paper/80"
                    href={servicePath(item)}
                  >
                    <span className="font-display text-[20px] leading-7 font-medium">{item.name}</span>
                    <span className="shrink-0 text-sm underline underline-offset-4">Xem chi tiết</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
        </div>
      </Wrap>
    </article>
  );
}
