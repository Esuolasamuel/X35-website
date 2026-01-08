import localFont from "next/font/local"
import "./globals.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { Toaster } from "sonner";
import Head from "./head";
import Image from "next/image";
import Link from "next/link";
import whatsapp from "../public/icons/whatsapp.svg";


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
  metadataBase: new URL("https://www.x35.com"), // 🔴 change to real domain

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
    url: "https://www.x35.com",
    siteName: "X35",
    images: [
      {
        url: "/images/logo.svg", // 1200x630
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
    images: ["/images/logo.svg"],
  },

  alternates: {
    canonical: "https://www.x35.com",
  },
};


export default function RootLayout({
  children
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${fraunces.variable} antialiased`}>
        <body>
         <Head/>
          <Header/>
          <main>{children}</main>
          {/* Toast container */}
         <Toaster
          position="top-center"
          richColors
          closeButton
        />

        {/* WhatsApp Widget */}
        <Link
          href="https://wa.me/2348029420580"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-4 right-4 z-50 bg-green-500 hover:bg-green-600 rounded-full p-3 shadow-lg transition-colors"
          aria-label="Contact us on WhatsApp"
        >
          <Image
            src={whatsapp}
            alt="WhatsApp"
            width={24}
            height={24}
            className="w-6 h-6"
          />
        </Link>

          <Footer/>
        </body>
    </html>
  );
}
