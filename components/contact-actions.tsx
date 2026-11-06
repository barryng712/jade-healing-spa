import { site } from "@/lib/site";

const base =
  "inline-flex min-h-11 items-center justify-center rounded px-[22px] text-sm font-medium no-underline";

export function ContactActions({
  tone = "paper",
  callLabel = "Gọi điện",
}: {
  tone?: "paper" | "hero";
  callLabel?: string;
}) {
  const ghost =
    tone === "hero"
      ? "border border-cream bg-transparent text-cream hover:bg-white/10"
      : "border border-wood bg-transparent text-ink hover:bg-wood/5";
  const primary =
    tone === "hero"
      ? "bg-cream text-ink hover:bg-white"
      : "bg-wood text-cream hover:bg-forest-deep";

  return (
    <div className="flex flex-wrap gap-2.5">
      <a className={`${base} ${primary}`} href={site.phoneTel}>
        {callLabel}
      </a>
      <a
        className={`${base} ${ghost}`}
        href={site.facebook}
        target="_blank"
        rel="noopener noreferrer"
      >
        Facebook
      </a>
    </div>
  );
}
