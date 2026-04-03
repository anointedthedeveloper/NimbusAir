import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/search", "/book", "/dashboard", "/admin", "/status"];

  return routes.map((route) => ({
    url: route === "" ? "/" : route,
    lastModified: new Date(),
  }));
}
