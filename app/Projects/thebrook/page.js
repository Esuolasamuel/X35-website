import Image from "next/image";
import Hero from "@/components/section/Hero";
import Meta from "@/components/section/Meta";
import FullImageSection from "@/components/section/FullImageSection";
import Narrative from "@/components/section/Narrative";
import Feature from "@/components/section/Feature";
import ImageGallery from "@/components/gallery/ImageGallery";
import RelatedProjects from "@/components/section/RelatedProjects";

// Import images from public folder (optional, safer)
import thebrookHero from "@/assets/images/brookHero.png";
import brookFull1 from "@/assets/images/bg-3.png";
import brookFull2 from "@/assets/images/brookFullImage-2.jpg";
// import brookNarrative from "@/assets/images/brookFeature-1.jpg";
import brookFeature1 from "@/assets/images/brookFeature-1.jpg";
import brookFeature2 from "@/assets/images/brookFeature-2.jpg";
import brookFeature3 from "@/assets/images/brookFeature-3.jpg";
import brookFeature4 from "@/assets/images/brookFeature-4.jpg";
import brookSplit1 from "@/assets/images/brookImageSplit-1.jpg";
import brookSplit2 from "@/assets/images/brookImageSplit-2.jpg";
import brookSplit3 from "@/assets/images/brookImageSplit-3.jpg";
import brookSplit4 from "@/assets/images/brookImageSplit-4.jpg";
import brookSplit5 from "@/assets/images/brookImageSplit-5.jpg";
import brookSplit6 from "@/assets/images/brookImageSplit-6.jpg";
import brookSplit7 from "@/assets/images/brookImageSplit-7.jpg";
import brookSplit8 from "@/assets/images/brookImageSplit-8.jpg";
import projectChevron from "@/assets/images/chevron.png";
import projectRob from "@/assets/images/robsplace.jpg";
import projectAdino from "@/assets/images/adino.png";
import projectSunplant from "@/assets/images/sunplanetco.jpg";
import projectbrook from "@/assets/images/brook.jpg";
import projectOgaDentist from "@/assets/images/ogadentist.jpg";

export default function thebrookPage() {
  const projects = [
    { id: "chevron", title: "Chevron", image: projectChevron },
    { id: "rob", title: "Rob's Place", image: projectRob },
    { id: "adino", title: "Adrino HQ", image: projectAdino },
    { id: "sunplant", title: "Sun Planet Co", image: projectSunplant },
    { id: "brook", title: "The Brook Finance Ltd", image: projectbrook },
    { id: "ogedentist", title: "Oga Dentist", image: projectOgaDentist },
  ];

  return (
    <>
      <Hero ImageSrc={thebrookHero} title="The brook Finances" height="h-[90vh]" />

      <Meta
        title="Transforming a Financial Workplace into a Modern, Human-Centric Environment"
        description={[
          {
            paragraph:
              "X35 Projects served as a strategic partner, guiding The Brook Finance team through their workspace upgrade — from a modest office to a dynamic new facility built for performance, comfort, and brand excellence.",
          },
          {
            paragraph:
              "We had the task of repurposing a residential facility into a commercial, modern, high-performance workspace that balances elegance, efficiency, and human connection.",
          },
          {
            paragraph:
              "As a turnkey design-and-build commission, this project allowed us to oversee every stage from architectural design and interior detailing to MEP integration, ELV solutions, external works, and landscape redevelopment delivering a seamless process from vision to completion.",
          },
        ]}
        infoItem={[
          { heading: "Category", value: "Design & Build / Remodeling / Turnkey" },
          { heading: "Floor Area", value: "1609.31 m²" },
          { heading: "Floors", value: "3 Floors" },
          { heading: "Architectural Style", value: "Modern / Minimalism" },
          { heading: "Typology", value: "Commercial" },
          { heading: "Sustainability Features", value: "Solar Design and Power Energy Solution" },
        ]}
        backgroundColor="bg-[#e5f1e7]"
      />
      
      <FullImageSection ImageSrc={brookFull1} title="brook interior" />

      <Feature
        ImageSrc={brookFeature1}
        description={[
          {
            paragraph:
            "Through strategic space planning, the design integrates reception area, open-plan workspaces, private offices, meeting rooms, conference room, board room, lounges and outdoor work spaces.",
          },
          {
            paragraph:
            "A palette of neutral tones, warm HDF wall cladding, subtle green accents reflecting stability and growth, Wall texts boosting employee morale and productivity, paint patterns reinforcing brand identity while energy-efficient lighting enhances comfort. Durable, acoustically balanced materials and precise detailing ensures longevity and sophistication.",
          },
          {
            paragraph:
            "This project presented an opportunity to design and execute a unified workspace that seamlessly integrates the company's subsidiaries — including its loan and finance division, asset management team, and stockbroking arm — within one cohesive environment. The design strategically balances private and shared facilities, enabling each unit to operate efficiently while fostering collaboration, transparency, and organizational synergy.",
          },
          {
            paragraph:
            "The result is a functional, inspiring environment that maximizes space, supports productivity, enhances collaboration, fosters teamwork and embodies The Brook Finance's professional identity.",
          },
        ]}
        title="Unified Workspace Design Enhancing Collaboration, Productivity, and Brand Identity for The Brook Finance"
        aspect="aspect-615/910"
        height="910"
        backgroundColor="bg-[#11111f]"
        textColor = "text-white/80"
        headerColor = "text-white"
      />


      <ImageGallery
        BackgroundColor="bg-[#EAF1FF]"
        images={[
          { ImageSrc: brookSplit1, alt: "Interior 1", aspect: "aspect-460/582" },
          { ImageSrc: brookSplit2, alt: "Interior 2", aspect: "aspect-732/582", colspan: "col-span-2" },
          { ImageSrc: brookSplit3, alt: "Interior 3", aspect: "aspect-732/582", colspan: "col-span-2" },
          { ImageSrc: brookSplit4, alt: "Interior 4", aspect: "aspect-460/910" },
        ]}
      />

      <Feature
        ImageSrc={brookFeature2}
        title="Design Language and Material Strategy"
        description={[
          {
            paragraph:
              "The design embraces a palette of neutral tones, warm timber accents, and subtle green highlights, reflecting stability and growth values central to Brook Finance's corporate identity. Natural light plays a vital role, complemented by energy-efficient linear lighting that defines work zones with precision.",
          },
          {
            paragraph:
              "Materials were selected not only for aesthetics but also for durability and acoustic performance. Soft carpet tiles provide sound absorption within open work areas, while high-quality laminate finishes and glass partitions ensure transparency and modern sophistication. Every joinery detail was carefully executed to achieve a seamless, enduring finish.",
          },
        ]}
      />

      <ImageGallery
        BackgroundColor="bg-[#EAF1FF]"
        images={[
          { ImageSrc: brookSplit5, alt: "Interior 5", aspect: "aspect-460/582" },
          { ImageSrc: brookSplit6, alt: "Interior 6", aspect: "aspect-722/582", colspan: "col-span-2" },
          { ImageSrc: brookSplit7, alt: "Interior 7", aspect: "aspect-722/582", colspan: "col-span-2" },
          { ImageSrc: brookSplit8, alt: "Interior 8", aspect: "aspect-460/582" },
        ]}
      />

      <Feature
        ImageSrc={brookFeature3}
        description={[
          {
            paragraph:
              "Each spatial decision was made with the end-user in mind. The layout promotes both focused work and team collaboration, ensuring every employee feels connected yet undistracted. Integrated storage, ergonomic furniture, and flexible breakout zones contribute to a comfortable, efficient workflow.",
          },
          {
            paragraph:
              "Smart space utilization allowed for the creation of multipurpose areas without expanding the original floor plate maximizing the client’s investment while minimizing disruption during renovation.",
          },
        ]}
        title="Functionality Meets Comfort"
        aspect="aspect-615/594"
        orderL="order-2"
        orderR="order-1"
        backgroundColor="bg-[#dfc0ab]"
      />

      <FullImageSection ImageSrc={brookFull2} title="brook full view" />

      <Feature
        ImageSrc={brookFeature4}
        description={[
          {
            paragraph:
              "For X35 Projects, The Brook Finance Office exemplifies the firm’s ability to merge architectural precision with design empathy — transforming commercial interiors into inspiring business environments.",
          },
          {
            paragraph:
              "Whether you’re a developer seeking reliable turnkey execution or a corporate tenant planning your next workspace transformation, X35 Projects brings vision, craftsmanship, and intelligent design to every project.",
          },
        ]}
      />

      <RelatedProjects projects={projects} />
    </>
  );
}