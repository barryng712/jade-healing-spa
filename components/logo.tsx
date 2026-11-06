import { site } from "@/lib/site";

/** Wordmark cut from the logo already printed on the spa photos. */
export function Logo({
  tone = "ink",
  className = "",
}: {
  tone?: "ink" | "cream";
  className?: string;
}) {
  const color = tone === "cream" ? "#F8F6F0" : "#263B32";

  return (
    <span
      aria-hidden="true"
      className={`inline-block ${className}`}
      style={{
        backgroundColor: color,
        aspectRatio: "487 / 184",
        WebkitMaskImage: "url(/spa/logo-mark.png)",
        maskImage: "url(/spa/logo-mark.png)",
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskSize: "contain",
        maskSize: "contain",
        WebkitMaskPosition: "center",
        maskPosition: "center",
      }}
    />
  );
}

export function LogoLockup({
  tone = "ink",
  className = "",
}: {
  tone?: "ink" | "cream";
  className?: string;
}) {
  return (
    <span className="inline-flex items-center" aria-label={site.name}>
      <Logo tone={tone} className={className} />
    </span>
  );
}
