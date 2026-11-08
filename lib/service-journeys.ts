import {
  formatPrice,
  getMenuGroup,
  groupsInCategory,
  servicePath,
} from "@/lib/menu";
import { servicePhotos, type SpaPhoto } from "@/lib/photos";
import { groupSummary, intentSummary, tierSummary } from "@/lib/service-summaries";

export type MassageIntentId = "thu-gian" | "phuc-hoi" | "tri-lieu";

export type OfferCard = {
  id: string;
  href: string;
  title: string;
  /** Minute span from the menu. */
  kicker?: string;
  /** Exact price, or “Từ …” when the card covers more than one menu price. */
  priceLabel: string;
  /** Same sentence the detail page shows for this card’s service or group. */
  description: string;
  photo: SpaPhoto;
};

const massageIntentDefs: { id: MassageIntentId; name: string; minutes: number[]; photoSlug: string }[] = [
  { id: "thu-gian", name: "Thư giãn", minutes: [40, 60], photoSlug: "thu-gian-toan-than" },
  { id: "phuc-hoi", name: "Phục hồi", minutes: [90], photoSlug: "lung-eo" },
  { id: "tri-lieu", name: "Trị liệu", minutes: [120], photoSlug: "lung-hong-chan" },
];

export function massageIntents(): OfferCard[] {
  return massageIntentDefs.map((intent) => {
    const allowed = new Set(intent.minutes);
    const prices = groupsInCategory("massage").flatMap((group) =>
      group.tiers.filter((tier) => allowed.has(tier.minutes)).map((tier) => tier.priceVnd),
    );
    return {
      id: intent.id,
      href: intentPath(intent.id),
      title: intent.name,
      kicker: minuteLabel(intent.minutes),
      priceLabel: priceLabel(prices),
      description: intentSummary(intent.id),
      photo: servicePhotos[intent.photoSlug],
    };
  });
}

export function intentPath(id: MassageIntentId) {
  return `/services/massage/nhom/${id}`;
}

export function getMassageIntent(id: string) {
  return massageIntentDefs.find((intent) => intent.id === id);
}

export type IntentRow = {
  id: string;
  title: string;
  minutes: number;
  price: string;
  note: string;
  href: string;
  photo?: SpaPhoto;
};

export function rowsForMassageIntent(id: MassageIntentId): IntentRow[] {
  const intent = getMassageIntent(id);
  if (!intent) return [];
  const allowed = new Set(intent.minutes);
  return groupsInCategory("massage").flatMap((group) =>
    group.tiers
      .filter((tier) => allowed.has(tier.minutes))
      .map((tier) => ({
        id: tier.id,
        title: tier.name,
        minutes: tier.minutes,
        price: formatPrice(tier.priceVnd),
        note: tierSummary(tier.id),
        href: `${servicePath(group)}?phut=${tier.minutes}`,
        photo: servicePhotos[group.slug],
      })),
  );
}

export function goiOffers(): OfferCard[] {
  const group = getMenuGroup("goi-duong-sinh");
  if (!group) return [];
  const photo = servicePhotos[group.slug];
  return group.tiers.map((tier) => ({
    id: tier.id,
    href: `${servicePath(group)}?phut=${tier.minutes}`,
    title: tier.name,
    kicker: `${tier.minutes} phút`,
    priceLabel: formatPrice(tier.priceVnd),
    description: tierSummary(tier.id),
    photo,
  }));
}

export function comboOffers(): OfferCard[] {
  const packages = groupsInCategory("combo").map((group) => ({
    id: group.slug,
    href: servicePath(group),
    title: group.name,
    kicker: minuteLabel(group.tiers.map((tier) => tier.minutes)),
    priceLabel: priceLabel(group.tiers.map((tier) => tier.priceVnd)),
    description:
      group.tiers.length === 1 ? tierSummary(group.tiers[0].id) : groupSummary(group.slug),
    photo: servicePhotos[group.slug],
  }));
  const sleep = getMenuGroup("an-than-giac-ngu");
  const deep = sleep?.tiers.find((tier) => tier.minutes === 150);
  if (sleep && deep) {
    packages.push({
      id: deep.id,
      href: `${servicePath(sleep)}?phut=150`,
      title: deep.name,
      kicker: "150 phút",
      priceLabel: formatPrice(deep.priceVnd),
      description: tierSummary(deep.id),
      photo: servicePhotos[sleep.slug],
    });
  }
  return packages;
}

/** One verified menu price, or the lowest when a card groups several. */
export function priceLabel(prices: number[]) {
  if (prices.length === 0) return "Liên hệ tư vấn";
  const min = Math.min(...prices);
  const max = Math.max(...prices);
  if (min === max) return formatPrice(min);
  return `Từ ${formatPrice(min)}`;
}

export function minuteLabel(minutes: number[]) {
  const sorted = [...new Set(minutes)].sort((a, b) => a - b);
  if (sorted.length === 0) return "";
  if (sorted.length === 1) return `${sorted[0]} phút`;
  return `${sorted[0]}–${sorted[sorted.length - 1]} phút`;
}
