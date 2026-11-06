import type { Metadata } from "next";
import { ServiceDirectory } from "@/components/service-directory";
import { Wrap } from "@/components/wrap";

export const metadata: Metadata = {
  title: "Dịch vụ",
};

export default function ServicesPage() {
  return (
    <section className="py-12 md:py-20">
      <Wrap>
        <h1 className="font-display text-[32px] leading-10 font-medium md:text-[40px] md:leading-[48px]">
          Dịch vụ
        </h1>
        <div className="mt-10 md:mt-12">
          <ServiceDirectory />
        </div>
      </Wrap>
    </section>
  );
}
