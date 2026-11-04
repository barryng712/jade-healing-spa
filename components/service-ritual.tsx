"use client";

import { useState } from "react";
import { ContactActions } from "@/components/contact-actions";
import { StepList } from "@/components/step-list";
import { formatPrice, type MenuGroup } from "@/lib/menu";

export function ServiceRitual({
  group,
  initialTierId,
}: {
  group: MenuGroup;
  initialTierId?: string;
}) {
  const initial =
    group.tiers.find((item) => item.id === initialTierId)?.id ?? group.tiers[0].id;
  const [tierId, setTierId] = useState(initial);
  const tier = group.tiers.find((item) => item.id === tierId) ?? group.tiers[0];
  const realSteps = tier.steps && tier.steps.length > 0 ? tier.steps : null;
  const steps =
    realSteps ??
    Array.from({ length: 10 }, (_, index) => {
      return `Bước mẫu ${index + 1}. Dòng thử bố cục cho ${tier.minutes} phút, chưa phải nội dung liệu trình.`;
    });

  return (
    <div>
      <fieldset>
        <legend className="text-xs uppercase tracking-[0.08em]">
          {group.tiers.length > 1 ? "Chọn số phút" : "Thời lượng"}
        </legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {group.tiers.map((item) => {
            const selected = item.id === tier.id;
            return (
              <label
                key={item.id}
                className={`relative inline-flex min-h-11 cursor-pointer items-center px-3 text-sm ${
                  selected ? "bg-wood text-cream" : "border border-line text-ink"
                }`}
              >
                <input
                  className="absolute inset-0 cursor-pointer opacity-0"
                  type="radio"
                  name={`${group.slug}-phut`}
                  value={item.id}
                  checked={selected}
                  onChange={() => setTierId(item.id)}
                />
                <span>{item.minutes} phút</span>
              </label>
            );
          })}
        </div>
      </fieldset>

      <div className="mt-6" aria-live="polite">
        <p className="text-xs uppercase tracking-[0.08em] text-muted">Liệu trình</p>
        <h2 className="mt-2 font-display text-[26px] font-[460] leading-snug md:text-[32px]">
          {tier.name}
        </h2>
        <p className="mt-2 text-muted">
          {tier.minutes} phút · {formatPrice(tier.priceVnd)}
        </p>
        <div className="mt-5">
          <ContactActions />
        </div>
        <h3 className="mt-8 text-xs uppercase tracking-[0.08em]">Các bước</h3>
        {realSteps ? null : (
          <p className="mt-2 text-sm text-muted">
            Mười dòng dưới đây chỉ để xem bố cục. Các bước thật sẽ được thay vào sau.
          </p>
        )}
        <div className="mt-3">
          <StepList steps={steps} />
        </div>
      </div>
    </div>
  );
}
