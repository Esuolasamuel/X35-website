export const metadata = {
  title: "Blog",
  description:
    "Architecture and interior design insights from X35's Lagos team — covering commercial office design, residential projects, and construction trends in Nigeria.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "X35 Blog – Architecture & Interior Design in Lagos, Nigeria",
    description:
      "Architecture and interior design insights from X35 — a Lagos firm sharing expertise in commercial fit-outs, residential design, and construction across Nigeria.",
    url: "/blog",
    type: "website",
  },
};

export default function BlogLayout({ children }) {
  return children;
}
