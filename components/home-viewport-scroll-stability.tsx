"use client";

import { useEffect } from "react";

/**
 * Mobile/coarse only: freeze `--lock-vh` so hero/sheet heights do not track live `svh`
 * while the URL bar animates (Chrome scroll anchoring). Refreshed on load + orientation only.
 */
export function HomeViewportScrollStability() {
  useEffect(() => {
    const mobile =
      window.matchMedia("(max-width: 47.99rem)").matches ||
      window.matchMedia("(pointer: coarse)").matches;
    if (!mobile) return;

    const root = document.documentElement;
    root.classList.add("home-scroll-stable");

    const lock = () => {
      const h = window.visualViewport?.height ?? window.innerHeight;
      root.style.setProperty("--lock-vh", `${Math.round(h)}px`);
    };

    let ignoreResize = false;
    let scrollTimer = 0;

    const onScroll = () => {
      ignoreResize = true;
      window.clearTimeout(scrollTimer);
      scrollTimer = window.setTimeout(() => {
        ignoreResize = false;
      }, 350);
    };

    const lockAndSync = () => {
      lock();
      window.dispatchEvent(new Event("resize"));
    };

    const onVvResize = () => {
      if (ignoreResize) return;
      lockAndSync();
    };

    lockAndSync();
    requestAnimationFrame(lockAndSync);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("orientationchange", lockAndSync);
    window.visualViewport?.addEventListener("resize", onVvResize);

    return () => {
      root.classList.remove("home-scroll-stable");
      root.style.removeProperty("--lock-vh");
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("orientationchange", lockAndSync);
      window.visualViewport?.removeEventListener("resize", onVvResize);
      window.clearTimeout(scrollTimer);
    };
  }, []);

  return null;
}
