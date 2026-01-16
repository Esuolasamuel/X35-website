import localFont from "next/font/local"
import "./globals.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const montserrat = localFont({
  src: [
    {
      path: "./fonts/Montserrat.ttf",
      weight: "100 900",
      style: "normal",
    },
  ],
  variable: "--font-montserrat",
  display: "swap"
})

const fraunces = localFont({
  src: [
    {
      path: "./fonts/Fraunces.ttf",
      weight: "100 900",
      style: "normal",
    },
  ],
  variable: "--font-fraunces",
  display: "swap"
})


export const metadata = {
  metadataBase: new URL("https://www.x35projects.com"),

  title: {
    default: "X35 – Architecture, Interior Design & Construction",
    template: "%s | X35",
  },

  description:
    "X35 is an architecture and construction company delivering modern design, interior solutions, and turnkey projects.",

  keywords: [
    "architecture company",
    "interior design",
    "construction company",
    "turnkey projects",
    "modern architecture",
    "X35",
  ],

  authors: [{ name: "X35" }],
  creator: "X35",
  publisher: "X35",

  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "android-chrome-192x192", url: "/android-chrome-192x192.png" },
      { rel: "android-chrome-512x512", url: "/android-chrome-512x512.png" },
    ],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  openGraph: {
    title: "X35 – Architecture, Interior Design & Construction",
    description:
      "Designing and building modern architectural and interior spaces.",
    url: "https://www.x35projects.com",
    siteName: "X35",
    images: [
      {
        url: "/favicon-16x16.png", // 1200x630
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
    images: ["/favicon-16x16.png"],
  },

  alternates: {
    canonical: "https://www.x35projects.com",
  },
};


export default function RootLayout({
  children
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${fraunces.variable} antialiased`}>
        <body>
          <Header/>
          {children}
          <Footer/>
        </body>
    </html>
  );
}
