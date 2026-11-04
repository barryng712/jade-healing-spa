"use client";

import { useLayoutEffect, useRef, useState, type ReactNode } from "react";

/**
 * Wide screens: the photo fills the left side and ends with the steps.
 * If the steps are taller than one screen, the pair stays that tall and the
 * steps scroll inside it, so the page does not grow a blank well under the photo.
 */
export function ServiceDetailStage({
  photo,
  children,
}: {
  photo: ReactNode;
  children: ReactNode;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [locked, setLocked] = useState(false);

  useLayoutEffect(() => {
    const content = contentRef.current;
    if (!content) return;

    const measure = () => {
      const wide = window.matchMedia("(min-width: 1024px)").matches;
      if (!wide) {
        setLocked(false);
        return;
      }
      const budget = window.innerHeight - 9.5 * 16;
      setLocked(content.offsetHeight > budget + 4);
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(content);
    window.addEventListener("resize", measure);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  return (
    <div
      className={
        locked
          ? "mt-5 lg:grid lg:h-[calc(100svh-9.5rem)] lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-10"
          : "mt-5 lg:grid lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-stretch lg:gap-10"
      }
    >
      <div className="relative h-[240px] sm:h-[320px] lg:h-auto lg:min-h-[28rem]">{photo}</div>
      <div className={locked ? "mt-6 min-h-0 overflow-y-auto overscroll-contain lg:mt-0 lg:pr-1" : "mt-6 lg:mt-0"}>
        <div ref={contentRef}>{children}</div>
      </div>
    </div>
  );
}
