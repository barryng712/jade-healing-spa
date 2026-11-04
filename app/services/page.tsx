import type { Metadata } from "next";
import { ServiceCategoryCards } from "@/components/service-category-cards";
import { Wrap } from "@/components/wrap";

export const metadata: Metadata = {
  title: "Dịch vụ",
  description:
    "Massage, chăm sóc tóc và combo tại Jade Healing Spa. Mỗi mốc phút là một liệu trình riêng.",
};

export default function ServicesPage() {
  return (
    <section className="py-12 md:py-20">
      <Wrap>
        <ServiceCategoryCards titleAs="h1" />
      </Wrap>
    </section>
  );
}
