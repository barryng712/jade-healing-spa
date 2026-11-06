import { OfferGrid } from "@/components/offer-card";
import { comboOffers, goiOffers, massageIntents } from "@/lib/service-journeys";

const sections = [
  { id: "massage", title: "Massage", offers: massageIntents },
  { id: "goi", title: "Gội đầu dưỡng sinh", offers: goiOffers },
  { id: "combo", title: "Combo", offers: comboOffers },
] as const;

export function ServiceDirectory({ only }: { only?: (typeof sections)[number]["id"] }) {
  const visible = only ? sections.filter((section) => section.id === only) : sections;
  return (
    <div className="flex flex-col gap-12 md:gap-14">
      {visible.map((section) => (
        <section key={section.id} id={only ? undefined : section.id} className="scroll-mt-28">
          {only ? null : (
            <h2 className="text-center font-display text-[28px] leading-9 font-medium md:text-[36px] md:leading-[44px]">
              {section.title}
            </h2>
          )}
          <OfferGrid offers={section.offers()} />
        </section>
      ))}
    </div>
  );
}
