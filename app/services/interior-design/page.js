export const metadata = {
  title: "Interior Design Services in Lagos, Nigeria",
  description:
    "X35 Projects delivers bespoke interior design for homes, offices, and commercial spaces across Lagos and Nigeria — from concept development through full installation.",
  alternates: { canonical: "/services/interior-design" },
  openGraph: {
    title: "Interior Design Company in Lagos, Nigeria | X35 Projects",
    description:
      "High-end interior design services in Lagos — residential, commercial, and healthcare. Concept to installation, delivered with precision.",
    url: "/services/interior-design",
    type: "website",
  },
};

import Hero from "@/components/section/Hero";
import Feature from "@/components/section/Feature";
import ListFeature from "@/components/section/ListFeature";
import Meta from "@/components/section/Meta";
import CTA from "@/components/section/CTA";

import heroImg from "@/assets/images/interior-design-services-x35-lagos-nigeria.jpg";
import featureImg from "@/assets/images/sunplanet-co-residential-facade-design-nigeria.png";
import listImg from "@/assets/images/adino-capital-cafeteria-interior-design-lagos.png";
import feature2Img from "@/assets/images/robs-place-structural-renovation-consultation-nigeria.png";

export default function InteriorDesignPage() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  const pageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: "Interior Design Services",
        description:
          "Bespoke interior design for residential, commercial, and healthcare spaces across Lagos and Nigeria.",
        provider: {
          "@type": "Organization",
          name: "X35 Projects",
          url: base,
        },
        areaServed: { "@type": "Country", name: "Nigeria" },
        serviceType: "Interior Design",
        url: `${base}/services/interior-design`,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${base}/` },
          { "@type": "ListItem", position: 2, name: "Interior Design", item: `${base}/services/interior-design` },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "How much does interior design cost in Lagos?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Interior design costs in Lagos vary by project scope. A single-room residential project typically starts from ₦1.5 million, while full commercial fit-outs range from ₦5 million upward depending on floor area, specification level, and FF&E requirements. X35 provides a detailed quote after an initial brief.",
            },
          },
          {
            "@type": "Question",
            name: "How long does an interior design project take in Lagos?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Most interior design projects with X35 take between 4 and 16 weeks from approved concept to completed installation — depending on the size of the space, procurement lead times, and the client's brief. We provide a detailed programme at the start of every project.",
            },
          },
          {
            "@type": "Question",
            name: "Do you handle both residential and commercial interior design?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. X35 Projects delivers interior design for private residences, corporate offices, retail spaces, and healthcare facilities across Lagos and Nigeria. Each typology is approached with a distinct methodology suited to its specific users and requirements.",
            },
          },
          {
            "@type": "Question",
            name: "Does X35 manage the full installation or just provide the design?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We offer both. Clients can engage X35 for design-only consultancy or for full turnkey delivery — where we manage procurement, contractor coordination, and site supervision through to final installation and handover.",
            },
          },
          {
            "@type": "Question",
            name: "Do you work outside Lagos?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. X35 Projects has delivered interior design and construction projects in Lagos, Abuja, Port Harcourt, and other cities across Nigeria. We are open to projects nationwide.",
            },
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />

      <Hero imageSrc={heroImg} title="Interior Design" altText="Interior design services in Lagos, Nigeria — X35 Projects residential and commercial interiors" />

      <Feature
        imageSrc={featureImg}
        title="Spaces That Reflect How People Actually Live and Work"
        description={[
          {
            paragraph:
              "Interior design is more than selecting finishes and furniture. It is the discipline of understanding how people move through, use, and feel inside a space — and then engineering every element to serve that reality.",
          },
          {
            paragraph:
              "At X35, we approach every interior project with a dual mandate: make it beautiful, and make it work. Whether it is a high-traffic corporate headquarters, a private residence, or a specialist healthcare facility, our interiors are built around the specific needs of the people who inhabit them — not around trend cycles or generic templates.",
          },
        ]}
        backgroundColor="bg-white"
        reverse={true}
      />

      <ListFeature
        imageSrc={listImg}
        title="A Process Built for Clarity at Every Stage"
        description="Interior design projects fail most often due to poor communication and unclear scope. Our structured process eliminates both — giving clients full visibility from the first brief to the final installation."
        lists={[
          {
            paragraph:
              "Discovery & brief — A detailed needs assessment covering function, flow, brand identity, and lifestyle before a single concept is drawn.",
          },
          {
            paragraph:
              "Concept development — Spatial plans, mood boards, material palettes, and 3D renders to align vision before any commitment.",
          },
          {
            paragraph:
              "Technical specification — Working drawings, BOQs, and supplier schedules that contractors can build from without ambiguity.",
          },
          {
            paragraph:
              "Site management & installation — Our team oversees every phase of execution, ensuring the finished space matches the approved design exactly.",
          },
        ]}
        backgroundColor="bg-[#0B0B1A]"
        textColor="text-white/80"
        headerColor="text-white"
        flex="lg:flex-row"
        orderL="order-1"
        orderR="order-2"
      />

      <Feature
        imageSrc={feature2Img}
        title="From Private Residences to Corporate Headquarters"
        description={[
          {
            paragraph:
              "Our portfolio spans residential, commercial, and healthcare environments across Lagos. Each typology demands a distinct vocabulary — a family home requires warmth and flexibility, while a law firm's reception must communicate authority and trust within the first three seconds of arrival.",
          },
          {
            paragraph:
              "We are fluent in all of them. Reconfigured offices, curated living rooms, clinical waiting areas, executive boardrooms — the breadth of our experience gives every client the benefit of genuine cross-sector expertise applied to their specific brief.",
          },
        ]}
        backgroundColor="bg-[#D9EFEA]"
      />

      <Meta
        title="Why Clients Choose X35 for Interior Design"
        description={[
          {
            paragraph:
              "Our interiors are designed to perform — not just to photograph well. Every decision we make connects directly to how the space will be used, maintained, and experienced by the people inside it.",
          },
        ]}
        infoItem={[
          { heading: "Project Types", value: "Residential, Commercial, Healthcare" },
          { heading: "Typical Duration", value: "4 – 16 Weeks" },
          { heading: "Locations Served", value: "Lagos and across Nigeria" },
          { heading: "Specialisations", value: "Space planning, material specification, FF&E" },
          { heading: "Delivery", value: "Turnkey with full site management" },
        ]}
        backgroundColor="bg-[#F0FDF4]"
      />

      <CTA
        title="Ready to Transform Your Space?"
        paragraph="Tell us about your project and we will come back to you within 48 hours with a clear view of how X35 can help."
        button={true}
        align="center"
      />
    </>
  );
}
