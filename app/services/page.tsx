import type { Metadata } from "next";
import { ServiceDirectory } from "@/components/service-directory";
import { Wrap } from "@/components/wrap";

export const metadata: Metadata = {
  title: "Dịch vụ",
};

export default function ServicesPage() {
  return (
    <article className="bg-paper py-12 text-ink md:py-7">
      <Wrap>
        <h1 className="font-display text-[32px] leading-10 font-medium md:text-[40px] md:leading-[48px]">
          Dịch vụ
        </h1>
        <hr className="mt-6 border-0 border-t border-line" aria-hidden="true" />
        <div className="mt-10 md:mt-12">
          <ServiceDirectory />
        </div>
      </Wrap>
    </article>
  );
}
