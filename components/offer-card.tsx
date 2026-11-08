import Link from "next/link";
import { PhotoFrame } from "@/components/photo-frame";
import { Reveal } from "@/components/reveal";
import { sampleBlurb, type OfferCard as Offer } from "@/lib/service-journeys";

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
    ? "border border-sage/45 shadow-[0_10px_28px_rgba(38,59,50,0.07)] transition-colors hover:border-sage/65"
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
        {offer.kicker ? (
          <p className="text-xs leading-4 font-medium tracking-[0.14em] uppercase">{offer.kicker}</p>
        ) : null}
        <h3
          className={`line-clamp-2 min-h-14 font-display text-[22px] leading-7 font-medium group-hover:underline group-hover:underline-offset-4 ${
            offer.kicker ? "mt-2" : ""
          }`}
        >
          {offer.title}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm leading-5">{sampleBlurb}</p>
        <span className="mt-4 text-sm underline underline-offset-4">Xem chi tiết</span>
      </div>
    </Link>
  );

  return (
    <li className="min-w-0">
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
  return (
    <ul className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {offers.map((offer) => (
        <OfferCard key={offer.id} offer={offer} reveal={reveal} homeBand={homeBand} />
      ))}
    </ul>
  );
}
