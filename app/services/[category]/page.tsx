import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ServiceGroupList } from "@/components/service-group-list";
import { Wrap } from "@/components/wrap";
import { getCategory, groupsInCategory, serviceCategories } from "@/lib/menu";
import { servicePhotos } from "@/lib/photos";

type Props = {
  params: Promise<{ category: string }>;
};

export function generateStaticParams() {
  return serviceCategories.map((category) => ({ category: category.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category: slug } = await params;
  const category = getCategory(slug);
  if (!category) return { title: "Dịch vụ" };
  return {
    title: category.name,
    description: category.description,
  };
}

export default async function ServiceCategoryPage({ params }: Props) {
  const { category: slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();
  const groups = groupsInCategory(category.slug);

  return (
    <section className="py-12 md:py-20">
      <Wrap>
        <nav aria-label="Đường dẫn" className="text-sm text-muted">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link className="underline underline-offset-4" href="/services">
                Dịch vụ
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>{category.name}</li>
          </ol>
        </nav>
        <h1 className="mt-4 font-display text-[32px] font-[460] md:text-[40px]">{category.name}</h1>
        <p className="mt-3 max-w-[48ch] text-muted">{category.description}</p>
        <div className="mt-8">
          <ServiceGroupList groups={groups} photos={servicePhotos} />
        </div>
      </Wrap>
    </section>
  );
}
