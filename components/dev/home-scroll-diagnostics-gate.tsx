"use client";

import { useEffect, useState, type ComponentType } from "react";

/** Client boundary: loads the dev probe chunk only in development. */
export function HomeScrollDiagnosticsGate() {
  const [Probe, setProbe] = useState<ComponentType | null>(null);

  useEffect(() => {
    if (process.env.NODE_ENV !== "development") return;
    void import("@/components/dev/home-scroll-diagnostics").then((mod) => {
      setProbe(() => mod.HomeScrollDiagnostics);
    });
  }, []);

  if (!Probe) return null;
  return <Probe />;
}
