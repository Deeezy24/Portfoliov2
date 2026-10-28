import type { MetadataRoute } from "next";
import { links, projectsData } from "@/lib/data";
import { projectSlug } from "@/lib/utils";

const base = "https://portfolio-glorioso.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...links.map((link) => ({ url: `${base}${link.hash === "/" ? "" : link.hash}` })),
    ...projectsData.map((p) => ({ url: `${base}/${projectSlug(p.title)}` })),
  ];
}
