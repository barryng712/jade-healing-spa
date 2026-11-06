import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { PagePhotoBand } from "@/components/page-photo-band";
import { site } from "@/lib/site";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-cormorant",
});

const manrope = Manrope({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-manrope",
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
  themeColor: "#f8f6f0",
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
    <html lang="vi" className={`${cormorant.variable} ${manrope.variable}`}>
      <body className="font-sans antialiased">
        <a
          href="#noi-dung"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-paper focus:px-3 focus:py-2"
        >
          Đến nội dung
        </a>
        <Header />
        <main id="noi-dung" className="pt-[4.75rem]">
          <PagePhotoBand />
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
