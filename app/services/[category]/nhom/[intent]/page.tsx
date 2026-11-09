import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { IntentRows } from "@/components/intent-rows";
import { Wrap } from "@/components/wrap";
import {
  getMassageIntent,
  rowsForMassageIntent,
  type MassageIntentId,
} from "@/lib/service-journeys";

type Props = {
  params: Promise<{ category: string; intent: string }>;
};

const intents: MassageIntentId[] = ["thu-gian-toan-than", "tri-lieu-chuyen-sau", "an-than-giac-ngu"];

export function generateStaticParams() {
  return intents.map((intent) => ({ category: "massage", intent }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { intent: id } = await params;
  const intent = getMassageIntent(id);
  if (!intent) return { title: "Dịch vụ" };
  return { title: intent.name };
}

export default async function MassageIntentPage({ params }: Props) {
  const { category, intent: id } = await params;
  const intent = getMassageIntent(id);
  if (category !== "massage" || !intent) notFound();
  const rows = rowsForMassageIntent(intent.id);

  return (
    <article className="bg-paper py-12 text-ink md:py-7">
      <Wrap>
        <nav aria-label="Đường dẫn" className="text-center text-sm text-muted">
          <ol className="flex flex-wrap items-center justify-center gap-2">
            <li>
              <Link className="underline underline-offset-4" href="/services">
                Dịch vụ
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link className="underline underline-offset-4" href="/services/massage">
                Massage
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>{intent.name}</li>
          </ol>
        </nav>
        <h1 className="mt-6 text-center font-display text-[32px] leading-10 font-medium md:text-[44px] md:leading-[52px]">
          {intent.name}
        </h1>
        <IntentRows rows={rows} />
      </Wrap>
    </article>
  );
}
