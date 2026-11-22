import { MarkTitle } from "@/components/mark-title";
import { OfferGrid } from "@/components/offer-card";
import { Reveal } from "@/components/reveal";
import { comboOffers, goiOffers, massageIntents } from "@/lib/service-journeys";

const sections = [
  { id: "massage", title: "Massage", offers: massageIntents },
  { id: "goi", title: "Gội đầu dưỡng sinh", offers: goiOffers },
  { id: "combo", title: "Combo", offers: comboOffers },
] as const;

export function ServiceDirectory({
  only,
  reveal = false,
  homeBand = false,
}: {
  only?: (typeof sections)[number]["id"];
  /** Home only: each title and each card rises once as it enters. */
  reveal?: boolean;
  /** Home services texture band — Sage card borders, Ivory fill. */
  homeBand?: boolean;
}) {
  const visible = only ? sections.filter((section) => section.id === only) : sections;
  return (
    <div className="flex flex-col gap-12 md:gap-14">
      {visible.map((section) => {
        const title = (
          <MarkTitle tone={homeBand ? "moss" : "paper"} flank>
            {section.title}
          </MarkTitle>
        );
        return (
          <section key={section.id} id={only ? undefined : section.id} className="scroll-mt-28">
            {only ? null : reveal ? <Reveal>{title}</Reveal> : title}
            <OfferGrid offers={section.offers()} reveal={reveal} homeBand={homeBand} />
          </section>
        );
      })}
    </div>
  );
}
