import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://techturi.org";
  const routes = [
    "",
    "/about",
    "/services",
    "/portfolio",
    "/book",
    "/contact",
    "/intake",
    "/learn",
    "/learn/roadmaps",
    "/learn/data-analytics",
    "/learn/business-analytics",
    "/learn/data-science",
    "/learn/networking",
    "/learn/cybersecurity",
    "/learn/ai-foundations",
    "/learn/generative-ai",
    "/learn/data-architecture",
  ];

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.startsWith("/learn") ? 0.8 : 0.7,
  }));
}
