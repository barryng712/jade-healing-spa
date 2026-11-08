"use client";

import { useEffect } from "react";

type Metrics = {
  scrollY: number;
  scrollHeight: number;
  innerHeight: number;
  vvh: number;
  vvo: number;
  t: number;
};

/**
 * Dev-only probe for Chrome scroll-jump / svh anchoring (homepage).
 * Mounts only when NODE_ENV === "development". Logs to the console — not for production.
 */
export function HomeScrollDiagnostics() {
  useEffect(() => {
    if (process.env.NODE_ENV !== "development") return;

    let touchActive = false;
    let touchMoves = 0;
    let lastTouchY = 0;
    let lastLayoutShiftAt = 0;

    let prev: Metrics = {
      scrollY: window.scrollY,
      scrollHeight: document.documentElement.scrollHeight,
      innerHeight: window.innerHeight,
      vvh: window.visualViewport?.height ?? 0,
      vvo: window.visualViewport?.offsetTop ?? 0,
      t: performance.now(),
    };

    let layoutObserver: PerformanceObserver | undefined;
    try {
      layoutObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          const shift = entry as PerformanceEntry & { value?: number; hadRecentInput?: boolean };
          if (shift.hadRecentInput) continue;
          lastLayoutShiftAt = performance.now();
          console.log("[scroll-probe] layout-shift", {
            value: shift.value,
            startTime: entry.startTime,
          });
        }
      });
      layoutObserver.observe({ type: "layout-shift", buffered: true });
    } catch {
      /* layout-shift not supported */
    }

    const readMetrics = (): Metrics => {
      const vvp = window.visualViewport;
      return {
        scrollY: window.scrollY,
        scrollHeight: document.documentElement.scrollHeight,
        innerHeight: window.innerHeight,
        vvh: vvp?.height ?? 0,
        vvo: vvp?.offsetTop ?? 0,
        t: performance.now(),
      };
    };

    const onScroll = () => {
      const cur = readMetrics();
      const dY = cur.scrollY - prev.scrollY;
      const dScrollHeight = cur.scrollHeight - prev.scrollHeight;
      const dInnerHeight = cur.innerHeight - prev.innerHeight;
      const dVvh = cur.vvh - prev.vvh;
      const dVvo = cur.vvo - prev.vvo;
      const dt = cur.t - prev.t;

      const layoutContext =
        dScrollHeight !== 0 ||
        Math.abs(dVvh) > 1 ||
        Math.abs(dInnerHeight) > 1 ||
        cur.t - lastLayoutShiftAt < 150;

      const suspectedJump =
        Math.abs(dY) > 12 &&
        dt > 0 &&
        dt < 180 &&
        layoutContext &&
        !touchActive;

      if (suspectedJump) {
        console.warn("[scroll-probe] suspected layout/anchoring jump", {
          dY,
          dt,
          dScrollHeight,
          dInnerHeight,
          dVvh,
          dVvo,
          touchActive,
          touchMovesSinceStart: touchMoves,
          msSinceLayoutShift: cur.t - lastLayoutShiftAt,
          cur,
          prev,
        });
      }

      if (layoutContext && (Math.abs(dY) > 1 || dScrollHeight !== 0)) {
        console.debug("[scroll-probe] metrics", {
          dY,
          dScrollHeight,
          dVvh,
          dVvo,
          touchActive,
          scrollY: cur.scrollY,
        });
      }

      prev = cur;
    };

    const onTouchStart = (e: TouchEvent) => {
      touchActive = true;
      touchMoves = 0;
      lastTouchY = e.touches[0]?.clientY ?? 0;
      console.log("[scroll-probe] touchstart", {
        clientY: lastTouchY,
        metrics: readMetrics(),
      });
    };

    const onTouchMove = (e: TouchEvent) => {
      touchMoves += 1;
      const y = e.touches[0]?.clientY ?? 0;
      const touchDy = y - lastTouchY;
      lastTouchY = y;
      if (touchMoves % 8 === 0) {
        console.debug("[scroll-probe] touchmove sample", {
          touchDy,
          scrollY: window.scrollY,
          touchMoves,
        });
      }
    };

    const onTouchEnd = () => {
      touchActive = false;
      console.log("[scroll-probe] touchend", {
        touchMoves,
        metrics: readMetrics(),
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });
    window.addEventListener("touchcancel", onTouchEnd, { passive: true });

    console.info(
      "[scroll-probe] active — suspected jumps require layout/viewport change, not finger velocity alone",
    );

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("touchcancel", onTouchEnd);
      layoutObserver?.disconnect();
    };
  }, []);

  return null;
}
