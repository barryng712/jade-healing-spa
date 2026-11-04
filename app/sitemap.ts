import type { MetadataRoute } from "next";
import { menuGroups, serviceCategories } from "@/lib/menu";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/about",
    "/services",
    "/gallery",
    "/reviews",
    "/contact",
    ...serviceCategories.map((category) => `/services/${category.slug}`),
    ...menuGroups.map((group) => `/services/${group.category}/${group.slug}`),
  ];

  return paths.map((path) => ({
    url: `${site.plannedDomain}${path}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
