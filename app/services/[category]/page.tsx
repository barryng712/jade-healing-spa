import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ServiceDirectory } from "@/components/service-directory";
import { Wrap } from "@/components/wrap";
import { getCategory, serviceCategories } from "@/lib/menu";

type Props = {
  params: Promise<{ category: string }>;
};

const sectionId = {
  massage: "massage",
  "cham-soc-toc": "goi",
  combo: "combo",
} as const;

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
  if (!category || !(slug in sectionId)) notFound();
  const only = sectionId[slug as keyof typeof sectionId];

  return (
    <article className="bg-paper py-12 text-ink md:py-7">
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
        <h1 className="mt-4 font-display text-[34px] leading-[42px] font-medium md:text-[48px] md:leading-[56px]">
          {category.name}
        </h1>
        <p className="mt-3 max-w-[42ch] text-[15px] leading-6 md:text-base md:leading-[26px]">
          {category.description}
        </p>
        <div className="mt-8 md:mt-10">
          <ServiceDirectory only={only} />
        </div>
      </Wrap>
    </article>
  );
}
