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
import adinoHero from "@/assets/images/adinoHero.png";
import adinoFull1 from "@/assets/images/adinoFullImage-1.png";
import adinoFull2 from "@/assets/images/adinoFullImage-2.png";
import adinoNarrative from "@/assets/images/adinoNarrative.png";
import adinoFeature from "@/assets/images/adinoFeature.png";
import adinoSplit1 from "@/assets/images/adinoImageSplit-1.png";
import adinoSplit2 from "@/assets/images/adinoImageSplit-2.png";
import projectChevron from "@/assets/images/chevron.png";
import projectRob from "@/assets/images/robsplace.jpg";
import projectAdino from "@/assets/images/adino.png";
import projectSunplant from "@/assets/images/sunplanetco.jpg";
import projectBrook from "@/assets/images/brook.jpg";
import projectOgaDentist from "@/assets/images/ogadentist.jpg";
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
    { imageSrc: adinoSplit1, alt: "kitchen area Interior 1" },
    { imageSrc: adinoSplit2, alt: "kitchen area Interior 2" },
 ]

  return (
    <>
      <Hero imageSrc={adinoHero} title="Adino Capital Ltd" height="h-[90vh]" />
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
        <FullImageSection imageSrc={adinoFull1} title="adino interior" />
        <Narrative
          backgroundColor="bg-indigo-700"
          TextColor="text-white"
          title="adino narrative image"
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
        <FullImageSection imageSrc={adinoFull2} title="adino interior" />
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
