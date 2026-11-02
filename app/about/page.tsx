import type { Metadata } from "next";
import Link from "next/link";
import { LivingPhoto } from "@/components/living-photo";
import { Wrap } from "@/components/wrap";
import { aboutPhoto } from "@/lib/photos";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Về spa",
  description: `Về ${site.name}. ${site.tagline} Câu chuyện sẽ được bổ sung.`,
};

export default function AboutPage() {
  return (
    <section>
      <div className="relative h-[72svh] overflow-hidden">
        <LivingPhoto src={aboutPhoto.src} alt={aboutPhoto.alt} priority sizes="100vw" />
      </div>
      <Wrap>
        <div className="max-w-[40rem] py-12 md:py-16">
            <h1 className="font-display text-[32px] font-[460] md:text-[40px]">
              Về {site.name}
            </h1>
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
      </Wrap>
    </section>
  );
}
