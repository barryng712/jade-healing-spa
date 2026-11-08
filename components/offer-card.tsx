"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { ClockIcon } from "@/components/clock-icon";
import { PhotoFrame } from "@/components/photo-frame";
import { Reveal } from "@/components/reveal";
import type { OfferCard as Offer } from "@/lib/service-journeys";

export function OfferCard({
  offer,
  reveal = false,
  homeBand = false,
}: {
  offer: Offer;
  reveal?: boolean;
  /** Home services band: Sage border, no ivory rim on texture. */
  homeBand?: boolean;
}) {
  const shellBorder = homeBand
    ? "offer-card-on-moss border border-sage/50"
    : "border border-line";
  const card = (
    <Link
      href={offer.href}
      className={`group flex h-full flex-col overflow-hidden rounded-t-[28px] rounded-b-[4px] ${shellBorder} text-ink no-underline md:rounded-t-[40px]`}
    >
      <PhotoFrame
        src={offer.photo.src}
        alt={offer.photo.alt}
        sizes="(min-width: 1024px) 30vw, 100vw"
        flush
        className="aspect-[3/2] w-full"
      />
      <div className="offer-card-body flex flex-1 flex-col px-4 pt-4 pb-4">
        <h3 className="line-clamp-2 font-display text-[22px] leading-7 font-medium">{offer.title}</h3>
        <p className="mt-2 line-clamp-4 text-[15px] leading-6">{offer.description}</p>
        <p className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-[15px] leading-6">
          <span className="font-medium">{offer.priceLabel}</span>
          {offer.kicker ? (
            <span className="inline-flex items-center gap-1.5">
              <ClockIcon className="size-4 shrink-0" />
              {offer.kicker}
            </span>
          ) : null}
        </p>
        <span className="mt-3 text-sm underline underline-offset-4">Xem chi tiết</span>
      </div>
    </Link>
  );

  const itemClass = homeBand
    ? "offer-card-lift offer-card-lift--moss min-w-0"
    : "offer-card-lift min-w-0";

  return (
    <li className={itemClass}>
      {reveal ? <Reveal className="h-full">{card}</Reveal> : card}
    </li>
  );
}

export function OfferGrid({
  offers,
  reveal = false,
  homeBand = false,
}: {
  offers: Offer[];
  reveal?: boolean;
  homeBand?: boolean;
}) {
  const scroller = useRef<HTMLUListElement>(null);
  const [page, setPage] = useState(0);

  function syncPage() {
    const node = scroller.current;
    if (!node || node.clientWidth === 0) return;
    const next = Math.round(node.scrollLeft / node.clientWidth);
    setPage(Math.min(Math.max(next, 0), offers.length - 1));
  }

  function goTo(index: number) {
    const node = scroller.current;
    if (!node) return;
    node.scrollTo({ left: index * node.clientWidth, behavior: "smooth" });
  }

  return (
    <div>
      <ul
        ref={scroller}
        onScroll={syncPage}
        className="offer-swipe mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {offers.map((offer) => (
          <OfferCard key={offer.id} offer={offer} reveal={reveal} homeBand={homeBand} />
        ))}
      </ul>
      {offers.length > 1 ? (
        <div className="mt-4 flex justify-center gap-2 md:hidden">
          {offers.map((offer, index) => (
            <button
              key={offer.id}
              type="button"
              className={`size-2 rounded-full ${index === page ? "bg-current" : "bg-current/35"}`}
              aria-label={`Trang ${index + 1}`}
              aria-current={index === page ? "true" : undefined}
              onClick={() => goTo(index)}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
