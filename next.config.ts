import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  async rewrites() {
    // The site pages are organized under `app/dark`, but the public navigation
    // deliberately uses clean URLs such as `/portfolio` and `/contact-us`.
    // Keep those URLs working without exposing the implementation folder name.
    const staticPages = [
      "about-me",
      "about-us",
      "agency-shop",
      "blog",
      "blog-details",
      "blog-grid-with-sidebar",
      "blog-list",
      "blog-standard",
      "branding-studio",
      "career",
      "career-details",
      "cart",
      "checkout",
      "contact-me",
      "contact-us",
      "creative-agency",
      "digital-studio",
      "faq",
      "forgot",
      "job-application-form",
      "login",
      "modern-agency",
      "motion-graphic",
      "personal-portfolio",
      "portfolio",
      "portfolio-2",
      "portfolio-3",
      "portfolio-4",
      "portfolio-col-3",
      "portfolio-col-4",
      "portfolio-details",
      "portfolio-details-gallery",
      "pricing",
      "profile",
      "register",
      "service",
      "service-2",
      "service-details",
      "shop",
      "shop-details",
      "team",
      "team-details",
      "wishlist",
    ];

    const detailPages = [
      "blog-details",
      "career-details",
      "portfolio-details",
      "service-details",
      "shop-details",
      "team-details",
    ];

    return [
      ...staticPages.map((page) => ({
        source: `/${page}`,
        destination: `/dark/${page}`,
      })),
      ...detailPages.map((page) => ({
        source: `/${page}/:id`,
        destination: `/dark/${page}/:id`,
      })),
    ];
  },
};

export default nextConfig;
