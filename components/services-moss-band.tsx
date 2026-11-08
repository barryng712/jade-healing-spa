import type { ReactNode } from "react";

/** Same jade + velvet grain as the home “Dịch vụ” band (`bg-jade-band` + `.home-services-moss-grain`). */
export function ServicesMossBand({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative overflow-hidden bg-jade-band text-cream ${className}`}>
      <div className="home-services-moss-grain pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
