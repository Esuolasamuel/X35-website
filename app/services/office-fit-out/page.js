export const metadata = {
  title: "Commercial Office Fit-Out in Lagos, Nigeria",
  description:
    "X35 Projects delivers complete office fit-outs in Lagos — from space planning and joinery to furniture procurement and final handover. Built for performance, designed to impress.",
  alternates: { canonical: "/services/office-fit-out" },
  openGraph: {
    title: "Office Fit-Out Company in Lagos, Nigeria | X35 Projects",
    description:
      "End-to-end commercial office fit-out in Lagos — space planning, joinery, MEP coordination, FF&E, and site management under one roof.",
    url: "/services/office-fit-out",
    type: "website",
  },
};

import Hero from "@/components/section/Hero";
import Feature from "@/components/section/Feature";
import ListFeature from "@/components/section/ListFeature";
import Meta from "@/components/section/Meta";
import CTA from "@/components/section/CTA";

import heroImg from "@/assets/images/adino-capital-office-fitout-hero-lagos.png";
import featureImg from "@/assets/images/chevron-deep-waters-geometric-ceiling-design-lagos.jpg";
import listImg from "@/assets/images/office-fitout-architect-blueprint-lagos-nigeria.png";
import feature2Img from "@/assets/images/chevron-deep-waters-conference-room-design-lagos.png";

export default function OfficeFitOutPage() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  const pageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: "Commercial Office Fit-Out",
        description:
          "End-to-end office fit-out services for corporate clients in Lagos and across Nigeria — space planning through furniture installation and handover.",
        provider: {
          "@type": "Organization",
          name: "X35 Projects",
          url: base,
        },
        areaServed: { "@type": "Country", name: "Nigeria" },
        serviceType: "Office Fit-Out",
        url: `${base}/services/office-fit-out`,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${base}/` },
          { "@type": "ListItem", position: 2, name: "Office Fit-Out", item: `${base}/services/office-fit-out` },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "How much does an office fit-out cost in Lagos?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Office fit-out costs in Lagos vary with floor area and specification. A basic commercial fit-out starts from ₦3 million for smaller spaces, while premium corporate headquarters fit-outs for 500m²+ can range from ₦30 million upward. X35 provides a full BOQ after an initial brief and site survey.",
            },
          },
          {
            "@type": "Question",
            name: "How long does a commercial office fit-out take in Lagos?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Most commercial office fit-outs with X35 take between 6 and 20 weeks from design sign-off to handover, depending on floor area, scope of MEP works, and joinery complexity. We provide a week-by-week programme before any work begins.",
            },
          },
          {
            "@type": "Question",
            name: "Can X35 fit out our office while we continue operating?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. X35 regularly works in live commercial environments — phasing works, scheduling noisy trades outside business hours, and sequencing moves to keep your team operational throughout the project. Phased delivery is built into the programme from the start.",
            },
          },
          {
            "@type": "Question",
            name: "What does a commercial office fit-out include?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "A complete office fit-out with X35 covers space planning, partitioning, custom joinery, MEP coordination (electrical, data, HVAC, plumbing), ceiling and flooring systems, furniture and FF&E procurement, branding integration, and full project management through to handover with as-built documentation.",
            },
          },
          {
            "@type": "Question",
            name: "Do you handle furniture procurement and installation?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. X35 manages full FF&E (furniture, fixtures, and equipment) procurement — sourcing ergonomic workstations, soft seating, lighting, and accessories as a coherent, specified system. All items are installed and commissioned before handover.",
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

      <Hero imageSrc={heroImg} title="Office Fit-Out" altText="Office fit-out services in Lagos, Nigeria — commercial workspace design and build by X35 Projects" />

      <Feature
        imageSrc={featureImg}
        title="The Office You Build Today Shapes the Business You Become Tomorrow"
        description={[
          {
            paragraph:
              "A poorly fitted office drains productivity, stresses teams, and silently communicates the wrong things to clients and talent alike. A well-fitted office does the opposite — it accelerates collaboration, projects confidence, and makes every working day more efficient.",
          },
          {
            paragraph:
              "X35 has delivered commercial office fit-outs for financial firms, energy companies, and professional service businesses across Lagos. We understand the constraints: tight timelines, live operations, phased moves, and the expectation that the finished product looks nothing like the empty shell it once was.",
          },
        ]}
        backgroundColor="bg-white"
        reverse={true}
      />

      <ListFeature
        imageSrc={listImg}
        title="Everything Under One Roof — Design Through Handover"
        description="Coordinating multiple contractors across a fit-out project is one of the most common causes of cost overrun and delay. X35 eliminates that risk by holding single-point accountability from the first drawing to the day we hand over the keys."
        lists={[
          {
            paragraph:
              "Space planning & layout — Optimising every square metre for headcount, circulation, collaboration zones, and adequate storage.",
          },
          {
            paragraph:
              "Joinery & built-ins — Custom-fabricated reception desks, boardroom cabinetry, partitioning walls, and storage systems built for commercial durability.",
          },
          {
            paragraph:
              "MEP coordination — Mechanical, electrical, and plumbing works coordinated into the design from day one — never retrofitted after the fact.",
          },
          {
            paragraph:
              "Furniture & FF&E — Ergonomic workstations, soft seating, lighting, and accessories sourced and specified as a coherent, functional system.",
          },
          {
            paragraph:
              "Site management — Dedicated X35 supervision throughout execution, with progress sign-off at every milestone and weekly client reporting.",
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
        title="Minimum Disruption. Maximum Outcome."
        description={[
          {
            paragraph:
              "Most of our commercial fit-out clients are operating businesses — they cannot afford to shut down while their office is being transformed. We work in phases, during off-hours, or on accelerated schedules to keep your operations running throughout the project.",
          },
          {
            paragraph:
              "Every X35 fit-out is delivered with a full set of as-built drawings, equipment manuals, and maintenance guidelines — so your facilities team has exactly what they need from the moment we hand over.",
          },
        ]}
        backgroundColor="bg-[#D9EFEA]"
      />

      <Meta
        title="Commercial Office Fit-Out in Lagos"
        description={[
          {
            paragraph:
              "We deliver complete office fit-outs — from spatial concept to furniture installation — with the speed and precision that commercial clients require. No surprises on cost. No delays from poor coordination.",
          },
        ]}
        infoItem={[
          { heading: "Typical Project Scale", value: "50 – 3,000 m²" },
          { heading: "Typical Duration", value: "6 – 20 Weeks" },
          { heading: "Project Types", value: "Corporate HQ, Satellite Offices, Co-working" },
          { heading: "Deliverables", value: "Design package, BOQ, site management, handover pack" },
          { heading: "Locations", value: "Victoria Island, Lekki, Ikoyi, Abuja, across Nigeria" },
        ]}
        backgroundColor="bg-[#F0FDF4]"
      />

      <CTA
        title="Let's Build an Office Worth Working In."
        paragraph="Share your brief and we will respond within 48 hours with a clear scope and an honest assessment of timeline and cost."
        button={true}
        align="center"
      />
    </>
  );
}
