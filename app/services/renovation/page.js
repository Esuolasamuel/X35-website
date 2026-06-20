export const metadata = {
  title: "Renovation Services in Lagos, Nigeria | X35 Projects",
  description:
    "X35 Projects handles full-scope renovations in Lagos — residential, commercial, and healthcare — breathing new life into existing spaces without disrupting your operations.",
  alternates: { canonical: "/services/renovation" },
  openGraph: {
    title: "Renovation Company in Lagos, Nigeria | X35 Projects",
    description:
      "Residential, commercial, and healthcare renovation in Lagos and Nigeria. From structural intervention to final finishes — delivered with precision and minimal disruption.",
    url: "/services/renovation",
    type: "website",
  },
};

import Hero from "@/components/section/Hero";
import Feature from "@/components/section/Feature";
import ListFeature from "@/components/section/ListFeature";
import Meta from "@/components/section/Meta";
import CTA from "@/components/section/CTA";

import heroImg from "@/assets/images/renovation-services-x35-lagos-nigeria.jpg";
import featureImg from "@/assets/images/robs-place-minimalist-interior-renovation-1-nigeria.png";
import listImg from "@/assets/images/brook-finance-open-plan-workspace-design-lagos.jpg";
import feature2Img from "@/assets/images/sunplanet-co-modern-apartment-interior-nigeria.jpg";

export default function RenovationPage() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  const pageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: "Renovation Services",
        description:
          "Full-scope renovation services for residential, commercial, and healthcare properties across Lagos and Nigeria — from structural intervention to interior redesign.",
        provider: {
          "@type": "Organization",
          name: "X35 Projects",
          url: base,
        },
        areaServed: { "@type": "Country", name: "Nigeria" },
        serviceType: "Renovation",
        url: `${base}/services/renovation`,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${base}/` },
          { "@type": "ListItem", position: 2, name: "Renovation", item: `${base}/services/renovation` },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "How much does a home renovation cost in Lagos?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Renovation costs in Lagos depend on the condition of the existing building, the scope of work, and finish specifications. Partial renovations start from ₦2 million, while full building overhauls can range from ₦15 million upward. X35 prepares a detailed Bill of Quantities before any work begins so clients know exact costs upfront.",
            },
          },
          {
            "@type": "Question",
            name: "How long does a renovation project take in Nigeria?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Renovation timelines with X35 range from 4 weeks for a single-room refurbishment to 24 weeks for a full multi-storey building overhaul. We provide a phased programme at project start and update it weekly throughout construction.",
            },
          },
          {
            "@type": "Question",
            name: "Can you renovate a building while it is still occupied?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. For commercial properties and operational businesses, X35 schedules works in phases — often during evenings or weekends — to keep your operations running throughout the renovation. We build a phased delivery plan into every occupied-building project.",
            },
          },
          {
            "@type": "Question",
            name: "Do you handle structural works as part of renovation?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. X35 handles full-scope renovation including structural interventions — wall removal, steel insertion, concrete repair, floor-plate reconfiguration, and waterproofing — alongside interior redesign and services upgrades.",
            },
          },
          {
            "@type": "Question",
            name: "What is included in a full renovation project with X35?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "A full renovation with X35 covers condition assessment, structural works, MEP (electrical, plumbing, HVAC) upgrades, interior redesign, finishes, joinery, and final snagging — all under one contract with single-point accountability.",
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

      <Hero imageSrc={heroImg} title="Renovation" altText="Renovation services in Lagos, Nigeria — residential and commercial building renovation by X35 Projects" />

      <Feature
        imageSrc={featureImg}
        title="The Best Building Is Often One That Already Exists"
        description={[
          {
            paragraph:
              "New construction is not always the answer. Many of Lagos's most valuable commercial and residential spaces have been shaped by decades of use — and with the right intervention, they can perform at a level no new build could match at equivalent cost.",
          },
          {
            paragraph:
              "X35 handles full-scope renovations: stripping back, restructuring, and rebuilding spaces to a new brief while protecting the elements worth keeping. We work in occupied buildings, phased environments, and sensitive structures where disruption management is as important as the quality of the finished product.",
          },
        ]}
        backgroundColor="bg-white"
        reverse={true}
      />

      <ListFeature
        imageSrc={listImg}
        title="Renovation That Goes Beyond a Coat of Paint"
        description="Cosmetic renovation only addresses symptoms. Our approach starts with diagnosing the real problems in a building — then fixing them properly so they don't resurface in two years."
        lists={[
          {
            paragraph:
              "Condition assessment — A thorough survey of the existing structure, services, and finishes before any design work begins.",
          },
          {
            paragraph:
              "Structural intervention — Removing walls, inserting steel, reconfiguring floor plates, and upgrading waterproofing where needed.",
          },
          {
            paragraph:
              "Services upgrade — Rewiring, re-plumbing, and upgrading HVAC systems to current standards — the work that is invisible but absolutely essential.",
          },
          {
            paragraph:
              "Interior redesign — Fresh spatial layout, new finishes, updated joinery, and furniture to match the building's new purpose and brief.",
          },
          {
            paragraph:
              "Phased delivery — For occupied commercial properties, we schedule works to minimise operational impact without unnecessarily extending timelines.",
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
        title="Residential, Commercial, and Healthcare Renovation"
        description={[
          {
            paragraph:
              "We have renovated private residences in Lekki and Ikoyi, transformed dated office blocks on Victoria Island, and upgraded healthcare clinics to meet modern clinical standards. Each project begins with a clear scope document and a phased execution plan agreed with the client before any work starts on site.",
          },
          {
            paragraph:
              "Renovation projects are inherently unpredictable — discoveries behind walls and under floors are inevitable. X35 builds contingency planning into every project from the start, so when the unexpected appears, it is managed within an agreed framework rather than escalated as a crisis that delays the programme and inflates the budget.",
          },
        ]}
        backgroundColor="bg-[#D9EFEA]"
      />

      <Meta
        title="Renovation Services in Lagos, Nigeria"
        description={[
          {
            paragraph:
              "From single-room upgrades to full building overhauls — X35 delivers renovations that are properly scoped, carefully executed, and worth the investment.",
          },
        ]}
        infoItem={[
          { heading: "Scope", value: "Partial renovation to full building overhaul" },
          { heading: "Property Types", value: "Residential, Commercial, Healthcare" },
          { heading: "Typical Duration", value: "4 – 24 Weeks" },
          { heading: "Locations", value: "Lagos and across Nigeria" },
          { heading: "Key Deliverable", value: "Scope document, phased schedule, final sign-off inspection" },
        ]}
        backgroundColor="bg-[#F0FDF4]"
      />

      <CTA
        title="Ready to Renovate? Let's Talk."
        paragraph="Describe your building and your goals — and we'll come back to you within 48 hours with a clear view of scope, timeline, and what the project will actually cost."
        button={true}
        align="center"
      />
    </>
  );
}
