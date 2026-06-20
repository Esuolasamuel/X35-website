import { blogCards } from "@/data/blogcard";

export default function sitemap() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  const staticRoutes = [
    { url: base, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/about`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/projects`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/projects/adino`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/projects/chevron`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/projects/robs-place`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/projects/sunplanet`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/projects/thebrook`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/projects/ogadentist`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog`, changeFrequency: "weekly", priority: 0.8 },
  ].map((route) => ({ ...route, lastModified: new Date() }));

  const blogRoutes = blogCards.map((card) => ({
    url: `${base}/blogpost/${card.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...blogRoutes];
}
