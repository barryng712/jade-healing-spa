"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { comboOffers, goiOffers, massageIntents } from "@/lib/service-journeys";
import { LogoLockup } from "@/components/logo";
import { nav, site } from "@/lib/site";

function sceneAtTop(pathname: string) {
  return pathname.length > 0;
}

function isCurrent(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

const linkClass =
  "inline-flex min-h-11 items-center text-sm font-medium no-underline hover:text-wood";

export function Header() {
  const pathname = usePathname();
  const [openPath, setOpenPath] = useState<string | null>(null);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<number | null>(null);
  const open = openPath === pathname;
  const scene = sceneAtTop(pathname);
  const overlay = scene && !scrolled && !open && !servicesOpen;

  function openServices() {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    setServicesOpen(true);
  }

  function scheduleCloseServices() {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => {
      if (servicesRef.current?.contains(document.activeElement)) return;
      setServicesOpen(false);
    }, 160);
  }

  useEffect(() => {
    setServicesOpen(false);
    setOpenPath(null);
  }, [pathname]);

  useEffect(() => {
    if (!open && !servicesOpen) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpenPath(null);
        setServicesOpen(false);
      }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, servicesOpen]);

  useEffect(() => {
    const onScroll = () => {
      const threshold = pathname === "/" ? 0.86 : 0.34;
      setScrolled(window.scrollY > window.innerHeight * threshold);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-30 transition-colors duration-300 ${
        overlay
          ? "header-overlay bg-ink/30 text-cream backdrop-blur-[2px]"
          : "border-b border-line bg-paper/95 text-ink backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex w-full max-w-[1120px] items-center justify-between gap-4 px-5 py-3 md:px-10">
        <Link href="/" className="inline-flex items-center no-underline" aria-label={site.name}>
          <LogoLockup tone={overlay ? "cream" : "ink"} className="h-8 md:h-9" />
        </Link>

        <nav className="hidden items-center gap-x-5 lg:flex" aria-label="Chính">
          {nav.map((item) =>
            item.href === "/services" ? (
              <div
                key={item.href}
                ref={servicesRef}
                className="relative"
                onMouseEnter={openServices}
                onMouseLeave={scheduleCloseServices}
                onBlur={(event) => {
                  if (!event.currentTarget.contains(event.relatedTarget)) scheduleCloseServices();
                }}
              >
                <Link
                  href={item.href}
                  className={linkClass}
                  aria-current={isCurrent(pathname, item.href) ? "page" : undefined}
                  aria-expanded={servicesOpen}
                  aria-haspopup="true"
                  onFocus={openServices}
                >
                  {item.label}
                </Link>
                {servicesOpen ? (
                  <div
                    className="fixed inset-x-0 top-[4.5rem] z-40 px-5 md:px-10"
                    onMouseEnter={openServices}
                  >
                    <div className="mx-auto grid w-full max-w-[1120px] grid-cols-3 gap-6 rounded border border-line bg-paper p-6 text-ink">
                      <div>
                        <Link
                          className="font-display text-[22px] leading-[30px] font-medium no-underline hover:text-wood"
                          href="/services#massage"
                        >
                          Massage
                        </Link>
                        <ul className="mt-3 space-y-2">
                          {massageIntents().map((offer) => (
                            <li key={offer.id}>
                              <Link className="text-sm no-underline hover:text-wood" href={offer.href}>
                                {offer.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <Link
                          className="font-display text-[22px] leading-[30px] font-medium no-underline hover:text-wood"
                          href="/services#goi"
                        >
                          Gội đầu dưỡng sinh
                        </Link>
                        <ul className="mt-3 space-y-2">
                          {goiOffers().map((offer) => (
                            <li key={offer.id}>
                              <Link className="text-sm no-underline hover:text-wood" href={offer.href}>
                                {offer.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <Link
                          className="font-display text-[22px] leading-[30px] font-medium no-underline hover:text-wood"
                          href="/services#combo"
                        >
                          Combo
                        </Link>
                        <ul className="mt-3 space-y-2">
                          {comboOffers().map((offer) => (
                            <li key={offer.id}>
                              <Link className="text-sm no-underline hover:text-wood" href={offer.href}>
                                {offer.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={linkClass}
                aria-current={isCurrent(pathname, item.href) ? "page" : undefined}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="flex items-center gap-2">
          <a
            className="inline-flex min-h-11 items-center rounded bg-wood px-4 text-sm font-medium text-cream no-underline hover:bg-forest-deep"
            href={site.phoneTel}
          >
            <span className="lg:hidden">Gọi</span>
            <span className="hidden lg:inline">Gọi {site.phoneDisplay}</span>
          </a>
          <a
            className={`hidden min-h-11 items-center rounded border px-4 text-sm font-medium no-underline lg:inline-flex ${
              overlay
                ? "border-cream text-cream hover:bg-white/10"
                : "border-wood hover:bg-wood/5"
            }`}
            href={site.facebook}
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <button
            type="button"
            className={`inline-flex min-h-11 items-center rounded border px-3 text-sm font-medium lg:hidden ${
              overlay ? "border-cream" : "border-wood"
            }`}
            aria-expanded={open}
            aria-controls="site-menu"
            onClick={() => setOpenPath(open ? null : pathname)}
          >
            {open ? "Đóng" : "Menu"}
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id="site-menu"
          aria-label="Di động"
          className="border-t border-line bg-paper text-ink lg:hidden"
        >
          <div className="mx-auto flex w-full max-w-[1120px] flex-col px-5 py-2 md:px-10">
            {nav.map((item) =>
              item.href === "/services" ? (
                <div key={item.href} className="border-b border-line py-3">
                  <Link className="text-base leading-6 font-medium no-underline" href="/services">
                    Dịch vụ
                  </Link>
                  <ul className="mt-2 space-y-2 pl-3">
                    <li>
                      <Link className="text-sm font-medium no-underline" href="/services#massage">
                        Massage
                      </Link>
                      <ul className="mt-1 space-y-1 pl-3">
                        {massageIntents().map((offer) => (
                          <li key={offer.id}>
                            <Link className="text-sm no-underline" href={offer.href}>
                              {offer.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                    <li>
                      <Link className="text-sm font-medium no-underline" href="/services#goi">
                        Gội đầu dưỡng sinh
                      </Link>
                    </li>
                    <li>
                      <Link className="text-sm font-medium no-underline" href="/services#combo">
                        Combo
                      </Link>
                    </li>
                  </ul>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="border-b border-line py-3 text-base leading-6 font-medium no-underline"
                  aria-current={isCurrent(pathname, item.href) ? "page" : undefined}
                >
                  {item.label}
                </Link>
              ),
            )}
            <a
              className="mt-4 inline-flex min-h-12 items-center justify-center rounded bg-wood px-4 text-[15px] font-medium text-cream no-underline hover:bg-forest-deep"
              href={site.phoneTel}
            >
              Gọi {site.phoneDisplay}
            </a>
            <a
              className="mt-2 mb-4 inline-flex min-h-12 items-center justify-center rounded border border-wood px-4 text-[15px] font-medium no-underline"
              href={site.facebook}
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
