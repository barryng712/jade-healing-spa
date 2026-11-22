import type { ReactNode } from "react";

const tags = {
  h1: "h1",
  h2: "h2",
} as const;

export function MarkTitle({
  as = "h2",
  children,
  tone = "paper",
  align = "start",
  flank = false,
  className = "",
}: {
  as?: "h1" | "h2";
  children: ReactNode;
  /** `moss` is for cream type on the dark services band and the visit strip. */
  tone?: "paper" | "moss";
  align?: "start" | "center";
  /** A rule on both sides: —— Title —— */
  flank?: boolean;
  className?: string;
}) {
  const Tag = tags[as];
  const ink = tone === "moss" ? "text-cream" : "text-brass";
  const rule = tone === "moss" ? "bg-cream/80" : "bg-brass";
  const place = align === "center" || flank ? "justify-center" : "";
  const line = (side: "start" | "end") => (
    <span key={side} className={`h-px w-8 shrink-0 ${rule}`} aria-hidden="true" />
  );

  return (
    <Tag
      className={`flex items-center gap-3 text-[13px] leading-5 font-medium tracking-[0.16em] uppercase ${ink} ${place} ${className}`}
    >
      {line("start")}
      {children}
      {flank ? line("end") : null}
    </Tag>
  );
}
