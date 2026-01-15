import Image from "next/image";
import Hero from "@/components/section/Hero";
import Meta from "@/components/section/Meta";
import FullImageSection from "@/components/section/FullImageSection";
import Narrative from "@/components/section/Narrative";
import Feature from "@/components/section/Feature";
import ImageGallery from "@/components/gallery/ImageGallery";
import RelatedProjects from "@/components/section/RelatedProjects";

// Import images from public folder (optional, safer)
import adinoHero from "@/public/images/adinoHero.png";
import adinoFull1 from "@/public/images/adinoFullImage-1.png";
import adinoFull2 from "@/public/images/adinoFullImage-2.png";
import adinoNarrative from "@/public/images/adinoNarrative.png";
import adinoFeature from "@/public/images/adinoFeature.png";
import adinoSplit1 from "@/public/images/adinoImageSplit-1.png";
import adinoSplit2 from "@/public/images/adinoImageSplit-2.png";
import projectChevron from "@/public/images/projects/Frame-1.png";
import projectRob from "@/public/images/projects/Frame-4.png";
import projectAdrino from "@/public/images/projects/Frame-3.png";
import projectSunplant from "@/public/images/projects/Frame-2.png";
import projectBrooks from "@/public/images/projects/Frame-5.png";
import projectOgaDentist from "@/public/images/projects/Frame-6.png";

export default function AdrinoPage() {
  const projects = [
    { id: "chevron", title: "Chevron", image: projectChevron },
    { id: "rob", title: "Rob’s Place", image: projectRob },
    { id: "adino", title: "Adrino HQ", image: projectAdrino },
    { id: "sunplant", title: "Sun Planet Co", image: projectSunplant },
    { id: "brooks", title: "The Brook Finance Ltd", image: projectBrooks },
    { id: "ogedentist", title: "Oga Dentist", image: projectOgaDentist },
  ];

  return (
    <>
      <Hero ImageSrc={adinoHero} title="Adino Capital Ltd" height="h-[90vh]" />

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
        backgroundColor="bg-[#DFC0AB]"
      />

      <FullImageSection ImageSrc={adinoFull1} title="adino interior" />
      <Narrative
        BackgroundColor="bg-[#11111F]"
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
        ImageSrc={adinoNarrative}
      />

      <FullImageSection ImageSrc={adinoFull2} title="adino interior" />
      <Feature
        ImageSrc={adinoFeature}
        title="Delivered a Balanced and Innovative Workspace"
        description={[
          {
            paragraph:
              "With this upgrade, X35 Projects delivered a workspace where practicality, visual harmony, and technical detail come together—reinforcing our commitment to thoughtful, innovative, and client-driven design delivery",
          },
        ]}
      />

      <ImageGallery
        BackgroundColor="bg-[#EAF1FF]"
        images={[
          { ImageSrc: adinoSplit1, alt: "kitchen area Interior 1", height: 594, width: 615 },
          { ImageSrc: adinoSplit2, alt: "kitchen area Interior 2", height: 594, width: 615 },
        ]}
      />

      <RelatedProjects projects={projects} />
    </>
  );
}
