import type { Metadata } from "next";
import Link from "next/link";
import { PhotoFrame } from "@/components/photo-frame";
import { Wrap } from "@/components/wrap";
import { aboutPhoto } from "@/lib/photos";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Về spa",
  description: `Về ${site.name}. ${site.tagline} Câu chuyện sẽ được bổ sung.`,
};

export default function AboutPage() {
  return (
    <section className="py-12 md:py-20">
      <Wrap>
        <div className="grid items-start gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          <PhotoFrame
            src={aboutPhoto.src}
            alt={aboutPhoto.alt}
            priority
            className="min-h-[280px] md:min-h-[460px]"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
          <div>
            <h1 className="font-display text-[32px] font-[460] md:text-[40px]">Về {site.name}</h1>
            <p className="mt-3">{site.tagline}</p>
            <p className="mt-6 max-w-[46ch] border border-dashed border-wood p-7">
              Câu chuyện sẽ được bổ sung.
            </p>
            <p className="mt-6 max-w-[46ch]">Một khoảng gỗ và cây giữa Cầu Giấy.</p>
            <p className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
              <Link className="underline underline-offset-4" href="/services">
                Xem dịch vụ
              </Link>
              <Link className="underline underline-offset-4" href="/contact">
                Liên hệ
              </Link>
            </p>
          </div>
        </div>
      </Wrap>
    </section>
  );
}
