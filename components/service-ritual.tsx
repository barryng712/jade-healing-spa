import type { ReactNode } from "react";
import { ClockIcon } from "@/components/clock-icon";
import { ContactActions } from "@/components/contact-actions";
import { StepList } from "@/components/step-list";
import { formatPrice, type MenuGroup } from "@/lib/menu";
import { tierSummary } from "@/lib/service-summaries";

export function ServiceRitual({
  group,
  tierId,
  photo,
  onMossBand = false,
}: {
  group: MenuGroup;
  tierId?: string;
  photo?: ReactNode;
  /** Jade band background — cream type and hero contact buttons. */
  onMossBand?: boolean;
}) {
  const tier = group.tiers.find((item) => item.id === tierId) ?? group.tiers[0];
  const steps = tier.steps?.length ? tier.steps : null;

  return (
    <div>
      <h1 className="mt-4 text-center font-display text-[32px] leading-10 font-medium md:text-[44px] md:leading-[52px]">
        {tier.name}
      </h1>
      {tierSummary(tier.id) ? (
        <p className="mx-auto mt-3 max-w-[40rem] text-center text-[15px] leading-6 md:text-base md:leading-7">
          {tierSummary(tier.id)}
        </p>
      ) : null}
      <p className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-[15px] leading-6">
        <span className="font-medium">{formatPrice(tier.priceVnd)}</span>
        <span className="inline-flex items-center gap-1.5">
          <ClockIcon className="size-4" />
          {tier.minutes} phút
        </span>
      </p>

      {photo ? <div className="mt-6 overflow-hidden rounded-[6px]">{photo}</div> : null}

      {steps ? (
        <div className="mt-10 text-left">
          <h2 className="font-display text-[28px] leading-9 font-medium md:text-[32px] md:leading-10">Quy trình</h2>
          <div className="mt-5">
            <StepList steps={steps} plain />
          </div>
        </div>
      ) : null}

      <div className="mt-8 flex justify-center">
        <ContactActions tone={onMossBand ? "hero" : "paper"} />
      </div>
    </div>
  );
}
