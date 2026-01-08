import Feature from "@/components/section/Feature";
import FullImageSection from "@/components/section/FullImageSection";
import Hero from "@/components/section/Hero";
import ImageGrid from "@/components/section/ImageGrid";
import Meta from "@/components/section/Meta";
import Narrative from "@/components/section/Narrative";
import RelatedProjects from "@/components/section/RelatedProjects";



export default function AdrinoPage() {
  return (
    <div className="px-0 sm:px-6 md:px-8 lg:px-16 xl:px-32">
      <Hero
        ImageSrc="/images/adinoHero.png"
        title="Adino Capital Ltd"
        height="h-[90vh]"
      />

      <Meta
        title={"The Commissioning"}
        description={[
            {
              paragraph:
                "X35 Projects was commissioned to transform the office interior into a contemporary, efficient, and performance-driven work environment. The objective was to rethink how the space functioned and elevate it into a more connected, productive, and visually polished workplace."
            },
            {
              paragraph:
                "A major focus of the redesign was the department’s open office zone. We reconfigured the entire layout to enhance circulation, encourage team interaction, and improve overall ergonomic comfort. New workstation arrangements, integrated cable-management solutions, and streamlined modular furniture were introduced to support daily tasks while preserving a clean and orderly look."
            },
          ]}
        infoItem= {[
            { heading: "Category", value: "Interior Design / Consultancy" },
            { heading: "Floor Area", value: "70 m²" },
            { heading: "Floors", value: "1 Floors" },
            { heading: "Architectural Style", value: "Modern / Minimalism" },
            { heading: "Typology", value: "Commercial" },
          ]}
          backgroundColor="bg-[#DFC0AB]"
        />
        <FullImageSection
          ImageSrc="/images/adinoFullImage-1.png"
          title="adino interior"
        />
        <Narrative
        backgroundColor="bg-[#11111f]"
        textColor="text-white"
        title="adino narrative image"
         description={[
            {
              paragraph:
                "The existing 60 x 60 cm suspended grid ceiling system was maintained with gypsum board finishes, as requested by the client. The flooring material and its colour were also retained to stay consistent with their design preferences."
            },
            {
              paragraph:
                "The scope further extended to a full refresh of the cafeteria area, transforming it into a more inviting social hub that also functions effectively as a secondary workspace."
            },
          ]}
        ImageSrc="/images/adinoNarrative.png"
        />
        <FullImageSection
          ImageSrc="/images/adinoFullImage-2.png"
          title="adino interior"
        />
        <Feature
        ImageSrc="/images/adinoFeature.png"
        title="Delivered a Balanced and Innovative Workspace"
        description={[
            {
              paragraph:
                "With this upgrade, X35 Projects delivered a workspace where practicality, visual harmony, and technical detail come together—reinforcing our commitment to thoughtful, innovative, and client-driven design delivery"
            }, 
          ]}
        /> 
        <ImageGrid
          backgroundColor="bg-[#e3cede]"
          images={[
            {
            ImageSrc: "/images/adinoImageSplit-1.png",
            alt: " kitchen area Interior 1",
            height: "594",
            width: "615"
          },
            {
            ImageSrc: "/images/adinoImageSplit-2.png",
            alt: " kitchen area Interior 2",
            height: "594",
            width: "615",
          },
        ]}/> 
      <RelatedProjects
      const projects = {[
        {
          id: "chevron",
          title: "Chevron",
          image: "/images/projects/Frame-1.png",
        },
        {
          id: "rob",
          title: "Rob’s Place",
          image: "/images/projects/Frame-4.png",
        },
        {
          id: "adino",
          title: "Adrino HQ",
          image: "/images/projects/Frame-3.png",
        },
        {
          id: "sunplant",
          title: "Sun Planet Co",
          image: "/images/projects/Frame-2.png",
        },
        {
          id: "brooks",
          title: "The Brook Finance Ltd",
          image: "/images/projects/Frame-5.png",
        },
        {
          id: "ogedentist",
          title: "Oga Dentist",
          image: "/images/projects/Frame-6.png",
        },
      ]}/>
    </div>
  );
}
