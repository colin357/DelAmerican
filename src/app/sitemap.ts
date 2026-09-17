import type { MetadataRoute } from "next";
import { posts, projects } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.delamerican.com";
  const pages = ["", "/our-company", "/portfolio", "/services", "/relationships", "/press", "/contact-us", "/privacy-policy"];
  return [
    ...pages.map((p) => ({ url: `${base}${p}` })),
    ...projects.map((p) => ({ url: `${base}/projects/${p.slug}` })),
    ...posts.map((p) => ({ url: `${base}/press/${p.slug}` })),
  ];
}
