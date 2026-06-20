export const metadata = {
  title: "Adino Capital Ltd – Office Interior Design",
  description:
    "X35 delivered a commercial office fit-out for Adino Capital Ltd in Lagos — transforming a 70m² workspace with reconfigured open-plan zones, ergonomic workstations, cable management, and a refreshed cafeteria.",
  alternates: { canonical: "/projects/adino" },
  openGraph: {
    title: "Adino Capital Office Fit-Out Lagos – X35 Projects",
    description:
      "Commercial office interior fit-out in Lagos by X35 — a performance-driven 70m² workspace redesign for Adino Capital Ltd.",
    url: "/projects/adino",
    type: "website",
  },
};

import Image from "next/image";
import Hero from "@/components/section/Hero";
import Meta from "@/components/section/Meta";
import FullImageSection from "@/components/section/FullImageSection";
import Narrative from "@/components/section/Narrative";
import Feature from "@/components/section/Feature";
import ImageGallery from "@/components/gallery/ImageGallery";
import RelatedProjects from "@/components/section/RelatedProjects";

// Import images from public folder (optional, safer)
import adinoHero from "@/assets/images/adino-capital-office-fitout-hero-lagos.png";
import adinoFull1 from "@/assets/images/adino-capital-open-plan-workspace-lagos-1.png";
import adinoFull2 from "@/assets/images/adino-capital-open-plan-workspace-lagos-2.png";
import adinoNarrative from "@/assets/images/adino-capital-suspended-ceiling-renovation-lagos.png";
import adinoFeature from "@/assets/images/adino-capital-cafeteria-interior-design-lagos.png";
import adinoSplit1 from "@/assets/images/adino-capital-break-area-interior-lagos-1.png";
import adinoSplit2 from "@/assets/images/adino-capital-break-area-interior-lagos-2.png";
import projectChevron from "@/assets/images/chevron-deep-waters-office-interior-lagos.png";
import projectRob from "@/assets/images/robs-place-minimalist-home-renovation-nigeria.jpg";
import projectAdino from "@/assets/images/adino-capital-office-interior-lagos.png";
import projectSunplant from "@/assets/images/sunplanet-co-residential-development-nigeria.jpg";
import projectBrook from "@/assets/images/brook-finance-corporate-headquarters-lagos.jpg";
import projectOgaDentist from "@/assets/images/oga-dentist-clinic-interior-design-lagos.jpg";
import ImageGrid from "@/components/section/ImageGrid";

export default function AdrinoPage() {
  const projects = [
    { id: "chevron", title: "Chevron", image: projectChevron },
    { id: "robs-place", title: "Rob’s Place", image: projectRob },
    { id: "adino", title: "Adrino HQ", image: projectAdino },
    { id: "sunplant", title: "Sun Planet Co", image: projectSunplant },
    { id: "brook", title: "The Brook Finance Ltd", image: projectBrook },
    { id: "ogedentist", title: "Oga Dentist", image: projectOgaDentist },
  ];

 const images = [
    { imageSrc: adinoSplit1, alt: "Adino Capital office kitchen and break area — commercial interior fit-out Lagos" },
    { imageSrc: adinoSplit2, alt: "Adino Capital staff cafeteria redesign — modern workplace amenity Lagos" },
 ]

  const base = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${base}/` },
      { "@type": "ListItem", position: 2, name: "Projects", item: `${base}/projects` },
      { "@type": "ListItem", position: 3, name: "Adino Capital Ltd", item: `${base}/projects/adino` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Hero imageSrc={adinoHero} title="Adino Capital Ltd" height="h-[90vh]" altText="Adino Capital Ltd office interior fit-out in Lagos — 70m² commercial workspace redesign by X35 Projects" />
        <Meta
          title="The Commissioning"
          description={[
            {
              paragraph:
                "X35 Projects was commissioned to transform the office interior into a contemporary, efficient, and performance-driven work environment. The objective was to rethink how the space functioned and elevate it into a more connected, productive, and visually polished workplace.",
            },
            {
              paragraph:
                "A major focus of the redesign was the department’s open office zone. We reconfigured the entire layout to enhance circulation, encourage team interaction, and improve overall ergonomic comfort. New workstation arrangements, integrated cable-management solutions, and streamlined modular furniture were introduced to support daily tasks while preserving a clean and orderly look.",
            },
          ]}
          infoItem={[
            { heading: "Category", value: "Interior Design / Consultancy" },
            { heading: "Floor Area", value: "70 m²" },
            { heading: "Floors", value: "1 Floors" },
            { heading: "Architectural Style", value: "Modern / Minimalism" },
            { heading: "Typology", value: "Commercial" },
          ]}
          backgroundColor="bg-[#E5F1E7]"
        />
        <FullImageSection imageSrc={adinoFull1} title="Adino Capital open-plan office interior — commercial workspace fit-out in Lagos by X35 Projects" />
        <Narrative
          backgroundColor="bg-indigo-700"
          TextColor="text-white"
          title="Adino Capital suspended grid ceiling and cafeteria renovation — office interior design in Lagos"
          description={[
            {
              paragraph:
                "The existing 60 x 60 cm suspended grid ceiling system was maintained with gypsum board finishes, as requested by the client. The flooring material and its colour were also retained to stay consistent with their design preferences.",
            },
            {
              paragraph:
                "The scope further extended to a full refresh of the cafeteria area, transforming it into a more inviting social hub that also functions effectively as a secondary workspace.",
            },
          ]}
          imageSrc={adinoNarrative}
          textColor = "text-white/80"
          headerColor = "text-white"
        />
        <FullImageSection imageSrc={adinoFull2} title="Adino Capital open-plan office interior — commercial workspace fit-out in Lagos by X35 Projects" />
        <Feature
          imageSrc={adinoFeature}
          title="Delivered a Balanced and Innovative Workspace"
          description={[
            {
              paragraph:
                "With this upgrade, X35 Projects delivered a workspace where practicality, visual harmony, and technical detail come together—reinforcing our commitment to thoughtful, innovative, and client-driven design delivery",
            },
          ]}
        />
        <ImageGrid
          backgroundColor="bg-[#E3CEDE]"
          images={images}
        />
        <RelatedProjects projects={projects} />
    </>
  );
}
