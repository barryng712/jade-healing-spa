import Link from "next/link";
import { ClockIcon } from "@/components/clock-icon";
import { PhotoFrame } from "@/components/photo-frame";
import type { IntentRow } from "@/lib/service-journeys";

export function IntentRows({ rows, homeBand = false }: { rows: IntentRow[]; homeBand?: boolean }) {
  const rowBorder = homeBand
    ? "border border-sage/45 shadow-[0_10px_28px_rgba(38,59,50,0.07)] transition-colors hover:border-sage/65"
    : "border border-line";
  return (
    <ul className="mt-8 flex flex-col gap-4 md:mt-10">
      {rows.map((row, index) => {
        const photoRight = index % 2 === 1;
        return (
        <li key={row.id}>
          <Link
            href={row.href}
            className={`flex flex-col overflow-hidden rounded-t-[28px] rounded-b-[4px] ${rowBorder} text-ink no-underline md:grid md:rounded-2xl ${
              photoRight
                ? "md:grid-cols-[minmax(0,1fr)_15rem]"
                : "md:grid-cols-[15rem_minmax(0,1fr)]"
            }`}
          >
            {row.photo ? (
              <PhotoFrame
                src={row.photo.src}
                alt={row.photo.alt}
                sizes="(min-width: 768px) 240px, 100vw"
                flush
                className={`aspect-[3/2] w-full md:aspect-auto md:h-full md:min-h-[9.5rem] ${
                  photoRight ? "md:order-2" : "md:order-1"
                }`}
              />
            ) : (
              <div
                className={`aspect-[3/2] bg-sand md:aspect-auto md:h-full md:min-h-[9.5rem] ${
                  photoRight ? "md:order-2" : "md:order-1"
                }`}
              />
            )}
            <div
              className={`offer-card-body flex items-start justify-between gap-3 px-4 py-4 md:gap-6 md:px-5 md:py-4 ${
                photoRight ? "md:order-1" : "md:order-2"
              }`}
            >
              <div className="min-w-0">
                <h2 className="font-display text-[20px] leading-7 font-medium md:text-[24px] md:leading-8">
                  {row.title}
                </h2>
                <p className="mt-2 text-sm leading-5">{row.note}</p>
              </div>
              <div className="shrink-0 text-right">
                <p className="font-display text-[18px] leading-7 font-medium whitespace-nowrap md:text-[22px] md:leading-8">
                  {row.price}
                </p>
                <p className="mt-1 flex items-center justify-end gap-1.5 text-sm leading-5 whitespace-nowrap">
                  <ClockIcon className="size-4 shrink-0" />
                  <span>{row.minutes} phút</span>
                </p>
              </div>
            </div>
          </Link>
        </li>
        );
      })}
    </ul>
  );
}
