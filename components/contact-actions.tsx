import { site } from "@/lib/site";

const base =
  "inline-flex min-h-11 items-center justify-center px-4 text-sm no-underline";

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

  return (
    <div className="flex flex-wrap gap-2.5">
      <a className={`${base} bg-wood text-cream hover:bg-[#4a382b]`} href={site.phoneTel}>
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
