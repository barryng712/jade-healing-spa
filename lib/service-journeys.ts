import {
  formatPrice,
  getMenuGroup,
  groupsInCategory,
  servicePath,
} from "@/lib/menu";
import { servicePhotos, type SpaPhoto } from "@/lib/photos";
import { groupSummary, intentSummary, tierSummary } from "@/lib/service-summaries";

export type MassageIntentId = "thu-gian-toan-than" | "tri-lieu-chuyen-sau" | "an-than-giac-ngu";

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

const massageIntentDefs: { id: MassageIntentId; name: string; slugs: string[]; photoSlug: string }[] = [
  { id: "thu-gian-toan-than", name: "Thư giãn toàn thân", slugs: ["thu-gian-toan-than"], photoSlug: "thu-gian-toan-than" },
  {
    id: "tri-lieu-chuyen-sau",
    name: "Trị liệu chuyên sâu",
    slugs: ["co-vai-gay", "lung-eo", "lung-hong-chan"],
    photoSlug: "co-vai-gay",
  },
  { id: "an-than-giac-ngu", name: "An thần & giấc ngủ", slugs: ["an-than-giac-ngu"], photoSlug: "an-than-giac-ngu" },
];

function pricesAndMinutes(slugs: string[]) {
  const prices: number[] = [];
  const minutes: number[] = [];
  for (const slug of slugs) {
    const group = getMenuGroup(slug);
    if (!group) continue;
    for (const tier of group.tiers) {
      prices.push(tier.priceVnd);
      minutes.push(tier.minutes);
    }
  }
  return { prices, minutes };
}

export function massageIntents(): OfferCard[] {
  return massageIntentDefs.map((intent) => {
    const { prices, minutes } = pricesAndMinutes(intent.slugs);
    return {
      id: intent.id,
      href: intentPath(intent.id),
      title: intent.name,
      kicker: minuteLabel(minutes),
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
  /** Shown next to the clock. Exact mark, or “Từ …” when the row covers a group. */
  timeLabel: string;
  price: string;
  note: string;
  /** Missing means display only — the row is not a link. */
  href?: string;
  photo?: SpaPhoto;
};

function tierRows(slug: string): IntentRow[] {
  const group = getMenuGroup(slug);
  if (!group) return [];
  return group.tiers.map((tier) => ({
    id: tier.id,
    title: tier.name,
    timeLabel: `${tier.minutes} phút`,
    price: formatPrice(tier.priceVnd),
    note: tierSummary(tier.id),
    href: `${servicePath(group)}?phut=${tier.minutes}`,
    photo: servicePhotos[group.slug],
  }));
}

/** One card for a whole menu group. `linked` opens the group detail (all tiers). */
function groupRow(slug: string, linked: boolean): IntentRow | null {
  const group = getMenuGroup(slug);
  if (!group || group.tiers.length === 0) return null;
  const prices = group.tiers.map((tier) => tier.priceVnd);
  const minutes = group.tiers.map((tier) => tier.minutes);
  const minMinutes = Math.min(...minutes);
  return {
    id: group.slug,
    title: group.name,
    timeLabel: `Từ ${minMinutes} phút`,
    price: priceLabel(prices),
    note: groupSummary(group.slug),
    href: linked ? servicePath(group) : undefined,
    photo: servicePhotos[group.slug],
  };
}

export function rowsForMassageIntent(id: MassageIntentId): IntentRow[] {
  if (id === "thu-gian-toan-than") {
    const extra = groupRow("cham-soc-theo-nhu-cau", false);
    return [...tierRows("thu-gian-toan-than"), ...(extra ? [extra] : [])];
  }
  if (id === "tri-lieu-chuyen-sau") {
    return ["co-vai-gay", "lung-eo", "lung-hong-chan"]
      .map((slug) => groupRow(slug, true))
      .filter((row): row is IntentRow => row !== null);
  }
  if (id === "an-than-giac-ngu") return tierRows("an-than-giac-ngu");
  return [];
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
  const packages = groupsInCategory("combo")
    .filter((group) => group.slug !== "cham-soc-theo-nhu-cau" && group.slug !== "jade-emperor")
    .map((group) => ({
    id: group.slug,
    href: servicePath(group),
    title: group.name,
    kicker: minuteLabel(group.tiers.map((tier) => tier.minutes)),
    priceLabel: priceLabel(group.tiers.map((tier) => tier.priceVnd)),
    description:
      group.tiers.length === 1 ? tierSummary(group.tiers[0].id) : groupSummary(group.slug),
    photo: servicePhotos[group.slug],
  }));
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
