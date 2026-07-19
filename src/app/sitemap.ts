import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://redshadowdesigns.com";

  const staticPages = [
    "",
    "/about-me",
    "/about-us",
    "/portfolio",
    "/service",
    "/service-2",
    "/contact-me",
    "/contact-us",
    "/career",
    "/pricing",
    "/faq",
    "/blog",
    "/shop",
  ];

  return staticPages.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));
}
