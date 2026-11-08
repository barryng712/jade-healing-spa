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
  mossTitles = false,
}: {
  only?: (typeof sections)[number]["id"];
  /** Home only: each title and each card rises once as it enters. */
  reveal?: boolean;
  /** Home services texture band — Sage card borders, Ivory fill. */
  homeBand?: boolean;
  /** Dark moss band — Ivory titles with cream underlines (not Sage line). */
  mossTitles?: boolean;
}) {
  const visible = only ? sections.filter((section) => section.id === only) : sections;
  return (
    <div className="flex flex-col gap-12 md:gap-14">
      {visible.map((section) => {
        const title = (
          <h2
            className={`text-center font-display text-[28px] leading-9 font-medium underline underline-offset-[10px] md:text-[36px] md:leading-[44px] md:underline-offset-[12px] ${
              mossTitles ? "decoration-cream/75" : "decoration-line"
            }`}
          >
            {section.title}
          </h2>
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
