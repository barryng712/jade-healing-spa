import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  agentRules: false,
  async redirects() {
    const moved: Record<string, string> = {
      "goi-duong-sinh": "/services/cham-soc-toc/goi-duong-sinh",
      "an-than-giac-ngu": "/services/massage/an-than-giac-ngu",
      "co-vai-gay": "/services/massage/co-vai-gay",
      "thu-gian-toan-than": "/services/massage/thu-gian-toan-than",
      "lung-eo": "/services/massage/lung-eo",
      "lung-hong-chan": "/services/massage/lung-hong-chan",
      "cham-soc-theo-nhu-cau": "/services/combo/cham-soc-theo-nhu-cau",
      "dich-vu-bo-tro": "/services/combo",
    };
    const intentMoved: Record<string, string> = {
      "thu-gian": "/services/massage/nhom/thu-gian-toan-than",
      "phuc-hoi": "/services/massage/nhom/tri-lieu-chuyen-sau",
      "tri-lieu": "/services/massage/nhom/an-than-giac-ngu",
    };
    return [
      ...Object.entries(moved).map(([slug, destination]) => ({
        source: `/services/${slug}`,
        destination,
        permanent: false,
      })),
      ...Object.entries(intentMoved).map(([slug, destination]) => ({
        source: `/services/massage/nhom/${slug}`,
        destination,
        permanent: true,
      })),
    ];
  },
};

export default nextConfig;
