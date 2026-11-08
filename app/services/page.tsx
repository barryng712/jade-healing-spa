import type { Metadata } from "next";
import { ServiceDirectory } from "@/components/service-directory";
import { ServicesMossBand } from "@/components/services-moss-band";
import { Wrap } from "@/components/wrap";

export const metadata: Metadata = {
  title: "Dịch vụ",
};

export default function ServicesPage() {
  return (
    <ServicesMossBand className="py-12 md:py-20">
      <Wrap className="[&_section_h2]:decoration-cream/75">
        <h1 className="font-display text-[32px] leading-10 font-medium md:text-[40px] md:leading-[48px]">
          Dịch vụ
        </h1>
        <hr className="mt-6 border-0 border-t border-cream/40" aria-hidden="true" />
        <div className="mt-10 md:mt-12">
          <ServiceDirectory homeBand mossTitles />
        </div>
      </Wrap>
    </ServicesMossBand>
  );
}
