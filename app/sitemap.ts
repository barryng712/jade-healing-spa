import type { MetadataRoute } from "next";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/about",
    "/services",
    "/gallery",
    "/reviews",
    "/contact",
    ...services.map((service) => `/services/${service.slug}`),
  ];

  return paths.map((path) => ({
    url: `${site.plannedDomain}${path}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
