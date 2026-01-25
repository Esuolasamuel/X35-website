export const metadata = {
  metadataBase: new URL(
    process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000"
  ),

  title: {
    default: "X35 – Architecture, Interior Design & Construction",
    template: "%s | X35",
  },

  description:
    "X35 is an architecture and construction company delivering modern design, interior solutions, and turnkey projects.",

  openGraph: {
    title: "X35 – Architecture, Interior Design & Construction",
    description:
      "Designing and building modern architectural and interior spaces.",
    url: "/",
    siteName: "X35",
    images: [
      {z
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "X35 Architecture Projects",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "X35 – Architecture & Construction",
    description:
      "Modern architecture, interior design, and construction services.",
    images: ["/og-image.png"],
  },

  alternates: {
    canonical: "/",
  },
};
