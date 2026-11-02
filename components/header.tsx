"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/site";

function isCurrent(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

const linkClass =
  "inline-flex min-h-11 items-center text-sm no-underline hover:text-wood";

export function Header() {
  const pathname = usePathname();
  const [openPath, setOpenPath] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const open = openPath === pathname;
  const overlay = pathname === "/" && !scrolled && !open;

  useEffect(() => {
    if (!open) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpenPath(null);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.72);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-30 transition-colors duration-300 ${
        overlay
          ? "header-overlay bg-[#1c1915]/30 text-cream backdrop-blur-[2px]"
          : "border-b border-line bg-paper/95 text-ink backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex w-full max-w-[1120px] items-center justify-between gap-4 px-5 py-3 md:px-10">
        <Link href="/" className="font-display text-lg tracking-wide no-underline">
          {site.name}
        </Link>

        <nav className="hidden items-center gap-x-5 lg:flex" aria-label="Chính">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={linkClass}
              aria-current={isCurrent(pathname, item.href) ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            className="inline-flex min-h-11 items-center bg-wood px-4 text-sm text-cream no-underline hover:bg-[#4a382b]"
            href={site.phoneTel}
          >
            <span className="lg:hidden">Gọi</span>
            <span className="hidden lg:inline">Gọi {site.phoneDisplay}</span>
          </a>
          <a
            className={`hidden min-h-11 items-center border px-4 text-sm no-underline lg:inline-flex ${
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
            className={`inline-flex min-h-11 items-center border px-3 text-sm lg:hidden ${
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
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="border-b border-line py-3 text-base no-underline"
                aria-current={isCurrent(pathname, item.href) ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
            <a
              className="mt-4 inline-flex min-h-12 items-center justify-center bg-wood px-4 text-base text-cream no-underline"
              href={site.phoneTel}
            >
              Gọi {site.phoneDisplay}
            </a>
            <a
              className="mt-2 mb-4 inline-flex min-h-12 items-center justify-center border border-wood px-4 text-base no-underline"
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
