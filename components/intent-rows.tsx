import Link from "next/link";
import { ClockIcon } from "@/components/clock-icon";
import { PhotoFrame } from "@/components/photo-frame";
import type { IntentRow } from "@/lib/service-journeys";

export function IntentRows({ rows }: { rows: IntentRow[] }) {
  return (
    <ul className="mt-8 flex flex-col gap-4 md:mt-10">
      {rows.map((row, index) => {
        const photoRight = index % 2 === 1;
        return (
        <li key={row.id}>
          <Link
            href={row.href}
            className={`grid overflow-hidden rounded-2xl border border-line bg-paper no-underline ${
              photoRight
                ? "grid-cols-[minmax(0,1fr)_6.75rem] md:grid-cols-[minmax(0,1fr)_15rem]"
                : "grid-cols-[6.75rem_minmax(0,1fr)] md:grid-cols-[15rem_minmax(0,1fr)]"
            }`}
          >
            {row.photo ? (
              <PhotoFrame
                src={row.photo.src}
                alt={row.photo.alt}
                sizes="(min-width: 768px) 240px, 120px"
                flush
                className={`h-full min-h-[7.5rem] w-full md:min-h-[9.5rem] ${photoRight ? "order-2" : "order-1"}`}
              />
            ) : (
              <div className={`min-h-[7.5rem] bg-sand ${photoRight ? "order-2" : "order-1"}`} />
            )}
            <div
              className={`flex items-start justify-between gap-3 px-3 py-3 md:gap-6 md:px-5 md:py-4 ${
                photoRight ? "order-1" : "order-2"
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
