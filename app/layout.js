import localFont from "next/font/local"
import Script from "next/script"
import "./globals.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import WhatsAppWidget from "../components/section/WhatsAppWidget";
import { HeaderStyleProvider } from "@/components/context/HeaderStyleConntext";

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
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),

  title: {
    default: "X35 – Architecture, Interior Design & Construction",
    template: "%s | X35",
  },

  description:
    "X35 Projects is a Lagos-based architecture, interior design, and construction company — delivering commercial office fit-outs, residential renovations, and turnkey builds across Nigeria.",

  keywords: [
    "architecture firm Lagos",
    "interior design company Lagos",
    "commercial office fit-out Nigeria",
    "construction company Nigeria",
    "interior design Lagos Nigeria",
    "turnkey construction Nigeria",
    "residential renovation Lagos",
    "X35 Projects",
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
    title: "X35 – Architecture & Interior Design Company in Lagos, Nigeria",
    description:
      "Lagos-based architecture and interior design firm delivering commercial office fit-outs, residential builds, and turnkey construction projects across Nigeria.",
    url: "/",
    siteName: "X35",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "X35 Architecture & Construction Projects",
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


const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  name: "X35 Projects",
  description:
    "X35 is an architecture, interior design, and construction company delivering modern spaces and turnkey projects.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  logo: `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/x%2035.svg`,
  telephone: "+2348144694380",
  email: "hello@x35projects.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lagos",
    addressCountry: "NG",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  areaServed: {
    "@type": "Country",
    name: "Nigeria",
  },
  sameAs: [
    "https://www.instagram.com/x35projects/",
    "https://www.linkedin.com/company/x35-projects-ltd",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+2348144694380",
    email: "hello@x35projects.com",
    contactType: "customer service",
    availableLanguage: "English",
  },
};

export default function RootLayout({
  children
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${fraunces.variable} antialiased`}>
        <body>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
          />
          {process.env.NEXT_PUBLIC_GA_ID && (
            <>
              <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
                strategy="afterInteractive"
              />
              <Script id="google-analytics" strategy="afterInteractive">
                {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');`}
              </Script>
            </>
          )}
          <HeaderStyleProvider>
          <Header/>
          {children}
          <Footer/>
          <WhatsAppWidget/>
          </HeaderStyleProvider>
        </body>
    </html>
  );
}
