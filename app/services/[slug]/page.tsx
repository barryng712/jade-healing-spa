import type { Metadata } from "next";
import Link from "next/link";
import { LivingPhoto } from "@/components/living-photo";
import { notFound } from "next/navigation";
import { ContactActions } from "@/components/contact-actions";
import { Wrap } from "@/components/wrap";
import { servicePhotos } from "@/lib/photos";
import { getRelatedServices, getService, services } from "@/lib/services";
import { sampleNotice } from "@/lib/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Dịch vụ" };
  return {
    title: service.name,
    description: `${service.description} Dịch vụ minh họa, chưa có giá.`,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const related = getRelatedServices(service.slug);

  return (
    <article>
      <div className="relative -mt-[4.75rem] flex min-h-[78svh] items-end overflow-hidden text-cream">
        <LivingPhoto
          src={servicePhotos[service.slug]?.src ?? "/spa/lounge.jpg"}
          alt={servicePhotos[service.slug]?.alt ?? service.name}
          priority
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#1c1915]/75 via-[#1c1915]/25 to-[#1c1915]/15"
          aria-hidden="true"
        />
        <Wrap className="relative z-10 pb-12 pt-28">
          <nav aria-label="Đường dẫn" className="text-sm text-cream/85">
              <ol className="flex flex-wrap items-center gap-2">
                <li>
                  <Link className="underline underline-offset-4" href="/services">
                    Dịch vụ
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>{service.name}</li>
              </ol>
            </nav>
            <h1 className="mt-4 max-w-[16ch] font-display text-[40px] font-[460] md:text-[64px]">
              {service.name}
            </h1>
        </Wrap>
      </div>
      <Wrap>
        <div className="max-w-[40rem] py-12 md:py-16">
            <p className="inline-block border border-wood px-2 py-1 text-xs uppercase tracking-[0.08em]">
              {sampleNotice}
            </p>
            <p className="mt-6 max-w-[46ch] text-lg">{service.description}</p>
            <div className="mt-6">
              <ContactActions />
            </div>
        </div>

        <h2 className="mt-16 font-display text-[28px] font-[460] md:text-[32px]">
          Dịch vụ minh họa khác
        </h2>
        <ul className="mt-4 border-t border-line">
          {related.map((item) => (
            <li key={item.slug} className="border-b border-line py-4">
              <Link
                className="font-display text-xl no-underline hover:underline"
                href={`/services/${item.slug}`}
              >
                {item.name}
              </Link>
              <p className="mt-1 max-w-[52ch] text-sm">{item.description}</p>
            </li>
          ))}
        </ul>
      </Wrap>
    </article>
  );
}
