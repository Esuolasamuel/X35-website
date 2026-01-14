import RootLayout from "@/app/layout";
import ImageGallery from "@/components/gallery/ImageGallery";
import Feature from "@/components/section/Feature";
import FullImageSection from "@/components/section/FullImageSection";
import HeroSection from "@/components/section/Hero";
import Meta from "@/components/section/Meta";
import RelatedProjects from "@/components/section/RelatedProjects";



export default function TheBrooksPage() {

  return (
    <>
      <HeroSection
        ImageSrc="/images/thebrooksHero.png"
        title="The Brooks Finances"
        height="h-[90vh]"
      />

      <Meta
        title={"Transforming a Financial Workplace into a Modern, Human-Centric Environment"}
        description={[
            {
              paragraph:
                "X35 Projects served as a strategic partner, guiding The Brook Finance team through their workspace upgrade — from a modest office to a dynamic new facility built for performance, comfort, and brand excellence."
            },
            {
              paragraph:
                "We had the task of repurposing a residential facility into a commercial, modern, high-performance workspace that balances elegance, efficiency, and human connection."
            },
            {
              paragraph:
                "As a turnkey design-and-build commission, this project allowed us to oversee every stage from architectural design and interior detailing to MEP integration, ELV solutions, external works, and landscape redevelopment delivering a seamless process from vision to completion."
            },
          ]}
        infoItem= {[
            { heading: "Category", value: "Design & Build / Remodeling / Turnkey" },
            { heading: "Floor Area", value: "1609.31 m²" },
            { heading: "Floors", value: "3 Floors" },
            { heading: "Architectural Style", value: "Modern / Minimalism" },
            { heading: "Typology", value: "Commercial" },
            { heading: "Sustainability Features", value: "Solar Design and Power Energy Solution" },
          ]}
          backgroundColor="bg-[#e5f1e7]"
        />
        <FullImageSection
          ImageSrc="/images/bg-3.png"
          title="chevron deep interior"
        />
        <Feature
        ImageSrc="/images/brooksFeature-1.jpg"
        description={[
            {
              paragraph:
                "Through strategic space planning, the design integrates reception area, open-plan workspaces, private offices, meeting rooms, conference room, board room, lounges and outdoor work spaces."
            }, 
            {
              paragraph:
                "A palette of neutral tones, warm HDF wall cladding, subtle green accents reflecting stability and growth, Wall texts boosting employee morale and productivity, paint patterns reinforcing brand identity while energy-efficient lighting enhances comfort. Durable, acoustically balanced materials and precise detailing ensures longevity and sophistication. "
            }, 
            {
              paragraph:
                "This project presented an opportunity to design and execute a unified workspace that seamlessly integrates the company’s subsidiaries — including its loan and finance division, asset management team, and stockbroking arm — within one cohesive environment. The design strategically balances private and shared facilities, enabling each unit to operate efficiently while fostering collaboration, transparency, and organizational synergy."
            }, 
            {
              paragraph:
                "The result is a functional, inspiring environment that maximizes space, supports productivity, enhances collaboration, fosters teamwork and embodies The Brook Finance’s professional identity."
            }, 
          ]}
          title="Unified Workspace Design Enhancing Collaboration, Productivity, and Brand Identity for The Brook Finance"
          aspect="aspect-615/910"
          height="910"
          backgroundColor="bg-[#11111f]"
        /> 
       <ImageGallery
                 BackgroundColor="bg-[#EAF1FF]"
                 images={[
                   {
                   ImageSrc: "/images/brooksImageSplit-1.jpg",
                   alt: " kitchen area Interior 1",
                  aspect:"aspect-460/582",
                 },
                   {
                   ImageSrc: "/images/brooksImageSplit-2.jpg",
                   alt: " kitchen area Interior 2",
                   aspect:"aspect-732/582",
                   colspan: "col-span-2"
                 },
                   {
                   ImageSrc: "/images/brooksImageSplit-3.jpg",
                   alt: " kitchen area Interior 2",
                    aspect:"aspect-732/582",
                   colspan: "col-span-2",
                 },
                   {
                   ImageSrc: "/images/brooksImageSplit-4.jpg",
                   alt: "kitchen area Interior 2",
                   aspect:"aspect-460/910",
                 },
               ]}/> 
         <Feature
        ImageSrc="/images/brooksFeature-2.jpg"
        description={[
            {
              paragraph:
                "The design embraces a palette of neutral tones, warm timber accents, and subtle green highlights, reflecting stability and growth values central to Brook Finance’s corporate identity. Natural light plays a vital role, complemented by energy-efficient linear lighting that defines work zones with precision."
            }, 
            {
              paragraph:
                "Materials were selected not only for aesthetics but also for durability and acoustic performance. Soft carpet tiles provide sound absorption within open work areas, while high-quality laminate finishes and glass partitions ensure transparency and modern sophistication. Every joinery detail was carefully executed to achieve a seamless, enduring finish."
            },  
          ]}
        title="Design Language and Material Strategy"
        aspect="aspect-615/594"
        backgroundColor="bg-[#d1ebe8]"
        /> 
         <ImageGallery
                   BackgroundColor="bg-[#EAF1FF]"
                   images={[
                     {
                     ImageSrc: "/images/brooksImageSplit-5.jpg",
                     alt: " kitchen area Interior 1",
                     aspect: "aspect-460/582",
                   },
                     {
                     ImageSrc: "/images/brooksImageSplit-6.jpg",
                     alt: " kitchen area Interior 2",
                     aspect: "aspect-722/582",
                     colspan: "col-span-2"
                   },
                     {
                     ImageSrc: "/images/brooksImageSplit-7.jpg",
                     alt: " kitchen area Interior 2",
                     aspect: "aspect-722/582",
                     colspan: "col-span-2"
                   },
                     {
                     ImageSrc: "/images/brooksImageSplit-8.jpg",
                     alt: " kitchen area Interior 2",
                      aspect: "aspect-460/582",
                   },
                 ]}/> 
         <Feature
        ImageSrc="/images/brooksFeature-3.jpg"
        description={[
            {
              paragraph:
                "Each spatial decision was made with the end-user in mind. The layout promotes both focused work and team collaboration, ensuring every employee feels connected yet undistracted. Integrated storage, ergonomic furniture, and flexible breakout zones contribute to a comfortable, efficient workflow."
            }, 
            {
              paragraph:
                "Smart space utilization allowed for the creation of multipurpose areas without expanding the original floor plate maximizing the client’s investment while minimizing disruption during renovation."
            },  
          ]}
        title="Functionality Meets Comfort"
        aspect="aspect-615/594" 
        orderL="order-2"
        orderR="order-1"
        backgroundColor="bg-[#dfc0ab]"
        /> 
          <FullImageSection
          ImageSrc="/images/brooksFullImage-2.jpg"
          title="adino interior"
        />
         <Feature
        ImageSrc="/images/brooksFeature-4.jpg"
        description={[
            {
              paragraph:
                "For X35 Projects, The Brook Finance Office exemplifies the firm’s ability to merge architectural precision with design empathy — transforming commercial interiors into inspiring business environments."
            }, 
            {
              paragraph:
                "Whether you’re a developer seeking reliable turnkey execution or a corporate tenant planning your next workspace transformation, X35 Projects brings vision, craftsmanship, and intelligent design to every project."
            },  
          ]}
        title="Delivering Confidence Through Design"
        aspect="aspect-615/594"
        backgroundColor="bg-[#e3cede]"
        /> 
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
