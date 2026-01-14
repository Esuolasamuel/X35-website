import RootLayout from "@/app/layout";
import ImageGallery from "@/components/gallery/ImageGallery";
import Feature from "@/components/section/Feature";
import FullImageSection from "@/components/section/FullImageSection";
import Hero from "@/components/section/Hero";
import Meta from "@/components/section/Meta";
import Narrative from "@/components/section/Narrative";
import RelatedProjects from "@/components/section/RelatedProjects";



export default function ChevronPage() {

  return (
    <>
      <Hero
        ImageSrc="/images/chevronHero.png"
        title="Chevron"
        height="h-[90vh]"
      />

      <Meta
        title={"Chevron Deep Waters Workspace Redesign"}
        description={[
            {
              paragraph:
                "X35 Projects was commissioned to transform the office interior into a contemporary, efficient, and performance-driven work environment. The objective was to rethink how the space functioned and elevate it into a more connected, productive, and visually polished workplace."
            },
            {
              paragraph:
                "The project featured a complete upgrade of the department’s open workstation area, where we introduced a refreshed spatial layout that improves movement, communication, and ergonomic comfort. Custom acoustic partitions, integrated cable-management systems, and contemporary workstation modules were designed to support daily operations while maintaining a clean, organized aesthetic."
            },
          ]}
        infoItem= {[
            { heading: "Category", value: "Interior Design / Consultancy" },
            { heading: "Floor Area", value: "145 m²" },
            { heading: "Floors", value: "2 Floors" },
            { heading: "Architectural Style", value: "Modern / Minimalism" },
            { heading: "Typology", value: "Commercial" },
          ]}
          backgroundColor="bg-[#DFC0AB]"
        />
        <FullImageSection
          ImageSrc="/images/chevronFullImage.png"
          title="chevron deep interior"
        />
        <Narrative
        BackgroundColor="bg-[#11111F]"
        TextColor="text-white"
        title="adino narrative image"
         description={[
            {
              paragraph:
                "A standout element of the redesign is the bespoke modern ceiling system, created with bold geometric forms and energy-efficient lighting. Concealed linear LED fixtures and coordinated MEP integration allowed us to achieve a polished, uncluttered look that enhances the overall ambience of the space."
            },
            {
              paragraph:
                "Flooring was upgraded using durable, commercial-grade materials, selected for their long-term performance and seamless compatibility with the department’s new design language. These materials contribute to a cohesive visual identity while withstanding the demands of a busy corporate environment."
            },
            {
              paragraph:
                "The project also included the creation of a new 11-man conference room, designed with advanced AV infrastructure, custom joinery, optimal sightlines, and a modern material palette."
            },
          ]}
        ImageSrc="/images/chevronNarrative.png"
        />
        <Feature
        ImageSrc="/images/chevronFeature.png"
        description={[
            {
              paragraph:
                "The result is a sophisticated meeting space that supports both high-level presentations and collaborative team sessions."
            }, 
            {
              paragraph:
                "Through this redevelopment, X35 Projects delivered a workspace that blends functionality, aesthetics, and technical precision—reflecting our commitment to quality, innovation, and client-focused design solutions."
            }, 
          ]}
        title="Delivering a Functional and Refined Collaborative Space"
        /> 
        <ImageGallery
          BackgroundColor="bg-[#EAF1FF]"
          images={[
            {
            ImageSrc: "/images/chevronImageSplit-1.png",
            alt: " kitchen area Interior 1",
            height: "594",
            width: "615"
          },
            {
            ImageSrc: "/images/chevronImageSplit-2.png",
            alt: " kitchen area Interior 2",
            height: "594",
            width: "615",
            colspan: "col-span-2"
          },
            {
            ImageSrc: "/images/chevronImageSplit-3.png",
            alt: " kitchen area Interior 2",
            height: "594",
            width: "615",
            colspan: "col-span-2"
          },
            {
            ImageSrc: "/images/chevronImageSplit-4.png",
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
      </>
  );
}
