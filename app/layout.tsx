import type { Metadata, Viewport } from "next";
import { Be_Vietnam_Pro, Fraunces } from "next/font/google";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { site } from "@/lib/site";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin", "vietnamese"],
  display: "swap",
  variable: "--font-fraunces",
});

const beVietnam = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-be-vietnam",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.plannedDomain),
  title: {
    default: site.name,
    template: `%s — ${site.name}`,
  },
  description: `${site.name} tại Cầu Giấy, Hà Nội. ${site.tagline}`,
  openGraph: {
    locale: "vi_VN",
    siteName: site.name,
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#f4f0e8",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  name: site.name,
  legalName: site.legalName,
  telephone: "+84357050796",
  email: site.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Số 2 ngách 66/18 Dịch Vọng Hậu",
    addressLocality: "Cầu Giấy",
    addressRegion: "Hà Nội",
    addressCountry: "VN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: site.latitude,
    longitude: site.longitude,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "09:00",
    closes: "21:00",
  },
  sameAs: [site.facebook],
  hasMap: site.mapUrl,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${fraunces.variable} ${beVietnam.variable}`}>
      <body className="font-sans antialiased">
        <a
          href="#noi-dung"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-paper focus:px-3 focus:py-2"
        >
          Đến nội dung
        </a>
        <Header />
        <main id="noi-dung" className="pt-[4.75rem]">
          {children}
        </main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
