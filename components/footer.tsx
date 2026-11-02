import Link from "next/link";
import { nav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto grid w-full max-w-[1120px] gap-8 px-5 py-8 text-sm md:px-10 md:py-10 lg:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-display text-lg">{site.name}</p>
          <p className="mt-2">{site.legalName}</p>
          <p className="mt-2 text-muted">{site.address}</p>
          <p className="mt-2">{site.hours}</p>
        </div>
        <div>
          <p>
            <a className="underline underline-offset-4" href={site.phoneTel}>
              {site.phoneDisplay}
            </a>
          </p>
          <p className="mt-2">
            <a className="underline underline-offset-4" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </p>
          <p className="mt-2">
            <a
              className="underline underline-offset-4"
              href={site.facebook}
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
          </p>
        </div>
        <nav aria-label="Chân trang">
          <ul className="grid gap-2">
            {nav.map((item) => (
              <li key={item.href}>
                <Link className="underline underline-offset-4" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="mx-auto w-full max-w-[1120px] px-5 pb-8 text-sm text-muted md:px-10">
        © {new Date().getFullYear()} {site.legalName}
      </div>
    </footer>
  );
}
