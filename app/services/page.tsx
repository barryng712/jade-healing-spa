import type { Metadata } from "next";
import { MarkTitle } from "@/components/mark-title";
import { ServiceDirectory } from "@/components/service-directory";
import { Wrap } from "@/components/wrap";

export const metadata: Metadata = {
  title: "Dịch vụ",
};

export default function ServicesPage() {
  return (
    <article className="bg-paper py-12 text-ink md:py-7">
      <Wrap>
        <MarkTitle as="h1">Dịch vụ</MarkTitle>
        <div className="mt-10 md:mt-12">
          <ServiceDirectory />
        </div>
      </Wrap>
    </article>
  );
}
