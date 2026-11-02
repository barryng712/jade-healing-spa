import type { Metadata } from "next";
import Link from "next/link";
import { Scene } from "@/components/scene";
import { Wrap } from "@/components/wrap";
import { servicePhotos } from "@/lib/photos";
import { services } from "@/lib/services";
import { sampleNotice } from "@/lib/site";

export const metadata: Metadata = {
  title: "Dịch vụ",
  description:
    "Danh sách dịch vụ minh họa của Jade Healing Spa. Menu thật và giá sẽ được cập nhật sau. Chưa có giá.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-paper">
        <Wrap className="py-14 md:py-20">
          <p className="inline-block border border-wood px-2 py-1 text-xs uppercase tracking-[0.08em]">
            {sampleNotice}
          </p>
          <h1 className="mt-4 font-display text-[40px] font-[460] md:text-[56px]">Dịch vụ</h1>
          <p className="mt-3 max-w-[46ch] text-muted">
            Bốn mục dưới đây là mẫu để xem cách trình bày. Menu thật sẽ thay sau. Chưa có giá.
          </p>
        </Wrap>
      </section>
      {services.map((service) => {
        const photo = servicePhotos[service.slug];
        if (!photo) return null;
        return (
          <Scene key={service.slug} src={photo.src} alt={photo.alt}>
            <div className="max-w-[32rem]">
              <h2 className="font-display text-[36px] leading-tight font-[460] md:text-[52px]">
                {service.name}
              </h2>
              <p className="mt-4 text-lg text-cream/90">{service.description}</p>
              <Link
                className="mt-6 inline-flex min-h-11 items-center border border-cream px-4 text-sm no-underline hover:bg-white/10"
                href={`/services/${service.slug}`}
              >
                Xem chi tiết
              </Link>
            </div>
          </Scene>
        );
      })}
    </>
  );
}
