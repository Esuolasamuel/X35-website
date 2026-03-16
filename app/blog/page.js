"use client";

import BlogHero from "@/components/section/BlogHero";
import Articles from "@/components/section/Articles";
import { blogCards } from "@/data/blogcard";

export default function BlogPage() {

  const heroBlog = blogCards[0];       // first article as hero
  const otherBlogs = blogCards.slice(1,4); // remaining articles

  return (
    <main className="flex-1 bg-white">

      {/* HERO ARTICLE */}
      <BlogHero blog={heroBlog} />

      {/* BLOG GRID */}
      <Articles blogs={otherBlogs} />

    </main>
  );
}