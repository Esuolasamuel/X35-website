export const metadata = {
  title: "Construction Company in Lagos, Nigeria | X35 Projects",
  description:
    "X35 Projects is a Lagos construction company delivering commercial and residential builds across Nigeria — on schedule, on budget, and built to last.",
  alternates: { canonical: "/services/construction" },
  openGraph: {
    title: "Construction Company in Lagos, Nigeria | X35 Projects",
    description:
      "Commercial, residential, and healthcare construction in Lagos and across Nigeria. Fixed-price contracts, transparent BOQs, and professional site management.",
    url: "/services/construction",
    type: "website",
  },
};

import Hero from "@/components/section/Hero";
import Feature from "@/components/section/Feature";
import ListFeature from "@/components/section/ListFeature";
import Meta from "@/components/section/Meta";
import CTA from "@/components/section/CTA";

import heroImg from "@/assets/images/construction-services-x35-lagos-nigeria.png";
import featureImg from "@/assets/images/x35-architecture-services-lagos-nigeria.png";
import listImg from "@/assets/images/project-management-services-x35-lagos.png";
import feature2Img from "@/assets/images/turnkey-construction-consultant-x35-lagos.png";

export default function ConstructionPage() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  const pageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: "Construction Services",
        description:
          "Commercial, residential, and healthcare construction across Lagos and Nigeria — delivered on schedule, within budget, with professional site management throughout.",
        provider: {
          "@type": "Organization",
          name: "X35 Projects",
          url: base,
        },
        areaServed: { "@type": "Country", name: "Nigeria" },
        serviceType: "Construction",
        url: `${base}/services/construction`,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${base}/` },
          { "@type": "ListItem", position: 2, name: "Construction", item: `${base}/services/construction` },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "How much does construction cost per square metre in Lagos?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Construction costs in Lagos typically range from ₦150,000 to ₦450,000 per square metre depending on structural complexity, finish specification, and procurement conditions. X35 provides a detailed Bill of Quantities with all costs itemised before any contract is signed.",
            },
          },
          {
            "@type": "Question",
            name: "Does X35 offer fixed-price construction contracts?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. X35 Projects operates on fixed-scope, fixed-price contracts backed by a detailed Bill of Quantities. Variations are only priced against written client instructions — there are no hidden costs or assumptions built into loose contingencies.",
            },
          },
          {
            "@type": "Question",
            name: "What types of buildings does X35 construct?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "X35 builds commercial offices, residential homes, retail facilities, and healthcare buildings across Lagos and Nigeria. We handle structural works, building services (MEP), finishes, and external works under a single contract.",
            },
          },
          {
            "@type": "Question",
            name: "How is project management handled on X35 construction sites?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Every X35 construction project has a dedicated site manager present throughout execution. Clients receive weekly written progress reports and photo records. All subcontractors are managed under X35 supervision — the client deals with one point of contact throughout.",
            },
          },
          {
            "@type": "Question",
            name: "Do you assist with obtaining regulatory approvals in Lagos?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. X35 advises on and coordinates LASBCA approval processes and other relevant regulatory submissions required for construction projects in Lagos State. We include regulatory timelines in the overall project programme from the outset.",
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

      <Hero imageSrc={heroImg} title="Construction" altText="Construction services in Lagos, Nigeria — turnkey construction and project delivery by X35 Projects" />

      <Feature
        imageSrc={featureImg}
        title="Built Right. Built to Last."
        description={[
          {
            paragraph:
              "Construction in Nigeria demands more than technical competency. It demands the ability to procure the right materials at the right time, manage subcontractors across complex sites, navigate regulatory requirements, and deliver a finished building that matches the approved drawings — without the client needing to police every stage.",
          },
          {
            paragraph:
              "X35 Projects has built commercial facilities, residential homes, and specialist healthcare environments across Lagos. We operate on fixed-scope contracts with transparent BOQs, professional site management, and clear accountability from breaking ground to final handover.",
          },
        ]}
        backgroundColor="bg-white"
        reverse={true}
      />

      <ListFeature
        imageSrc={listImg}
        title="Full-Scope Build Capability"
        description="We take on construction projects at any stage — from concept design through planning approval and full site execution. Every discipline is managed in-house or through vetted specialist subcontractors under X35 supervision."
        lists={[
          {
            paragraph:
              "Structural works — Foundations, concrete frames, masonry, and structural steel for commercial and residential builds.",
          },
          {
            paragraph:
              "Building services — Electrical installation, plumbing and drainage, HVAC, and fire suppression systems coordinated from design stage.",
          },
          {
            paragraph:
              "Finishing & fit-out — Tiling, plastering, painting, joinery, and external works executed to the approved finish schedule without shortcuts.",
          },
          {
            paragraph:
              "Project management — A dedicated X35 site manager present throughout construction, with weekly progress reporting and photo records delivered to the client.",
          },
          {
            paragraph:
              "Procurement — Materials sourced through vetted suppliers with quality checks at point of delivery, protecting against unauthorised substitution.",
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
        title="Transparent Pricing. No Surprises."
        description={[
          {
            paragraph:
              "Construction budgets slip when scope is poorly defined at the outset. Before any work begins, X35 prepares a detailed Bill of Quantities — every line item priced, every assumption documented. Variations are only priced against written instructions, never assumed or absorbed into loose contingencies.",
          },
          {
            paragraph:
              "Our clients receive monthly cost reports, photographic progress records, and structured handover documentation — including as-built drawings, certificates of completion, and warranty schedules from every supplier and subcontractor involved.",
          },
        ]}
        backgroundColor="bg-[#D9EFEA]"
      />

      <Meta
        title="Construction Services in Lagos and Across Nigeria"
        description={[
          {
            paragraph:
              "Commercial, residential, and healthcare construction — delivered on schedule, within the approved budget, with the documentation and accountability that serious clients expect.",
          },
        ]}
        infoItem={[
          { heading: "Build Types", value: "Commercial, Residential, Healthcare" },
          { heading: "Contract Types", value: "Fixed-price, Design & Build, Construction Management" },
          { heading: "Regulatory", value: "LASBCA and relevant state authority compliance" },
          { heading: "Locations", value: "Lagos, Abuja, Port Harcourt, and across Nigeria" },
          { heading: "Project Duration", value: "3 months – 2 years depending on scope" },
        ]}
        backgroundColor="bg-[#F0FDF4]"
      />

      <CTA
        title="Start Your Build With a Team That Delivers."
        paragraph="Whether you have full drawings or just a brief, tell us about your project and we will outline the right path forward within 48 hours."
        button={true}
        align="center"
      />
    </>
  );
}
