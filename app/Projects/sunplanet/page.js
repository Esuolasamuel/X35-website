import Hero from "@/components/section/Hero";
import MiniHero from "@/components/section/miniHero";
import Meta from "@/components/section/Meta";
import FullImageSection from "@/components/section/FullImageSection";
import Feature from "@/components/section/Feature";
import ImageGallery from "@/components/gallery/ImageGallery";
import RelatedProjects from "@/components/section/RelatedProjects";

// Import local images from public
import heroImg from "@/assets/images/sunplanetHero.jpg";
import fullImg from "@/assets/images/sunplanetFullImage.jpg";
import featureImg from "@/assets/images/sunplanetFeature.jpg";
import gallery1 from "@/assets/images/sunplanetImageSplit-1.jpg";
import gallery2 from "@/assets/images/sunplanetImageSplit-2.jpg";
import gallery3 from "@/assets/images/sunplanetImageSplit-3.jpg";
import gallery4 from "@/assets/images/sunplanetImageSplit-4.jpg";
import miniHeroImg from "@/assets/images/sunplanetMiniHero.jpg"

import projectChevron from "@/assets/images/chevron.png";
import projectRob from "@/assets/images/robsplace.jpg";
import projectAdino from "@/assets/images/adino.png";
import projectSunplant from "@/assets/images/sunplanetco.jpg";
import projectBrooks from "@/assets/images/brooks.jpg";
import projectOgaDentist from "@/assets/images/ogadentist.jpg";

export default function SunplanetPage() {
  const projects = [
    { id: "chevron", title: "Chevron", image: projectChevron },
    { id: "rob", title: "Rob’s Place", image: projectRob },
    { id: "adino", title: "Adrino HQ", image: projectAdino },
    { id: "sunplant", title: "Sun Planet Co", image: projectSunplant },
    { id: "brooks", title: "The Brook Finance Ltd", image: projectBrooks },
    { id: "ogedentist", title: "Oga Dentist", image: projectOgaDentist },
  ];

  return (
    <>
      <Hero ImageSrc={heroImg} title="Sun Planet Co" height="h-[90vh]" />

      <Meta
        title="The Brief"
        description={[
          {
            paragraph:
              "X35 Projects was commissioned by Sun Planet Co to provide full architectural and interior design consultancy for a new residential development conceived under a joint-venture partnership between the company and its client. The mandate was to create a block of modern apartment units that achieved the right balance between high livability standards and a strong investment return for both partners.",
          },
          {
            paragraph:
              "Our team led the project from the conceptual stage, beginning with detailed feasibility studies, site assessment, and benchmarking of residential market expectations. The goal was to develop a design strategy that maximized land efficiency, optimized circulation, and delivered unit configurations that would remain attractive, functional, and financially viable over time.",
          },
          {
            paragraph:
              "We produced a complete architectural design package—including space planning, massing studies, façade concepts, and construction-ready drawings—supported by a cohesive interior design direction. The design focused on smart spatial layouts, durable material selections, and lifestyle-driven amenities tailored to appeal to diverse user groups while maintaining cost control for profitability.",
          },
        ]}
        infoItem={[
          { heading: "Category", value: "Architecture / Interior Design / Consultancy" },
          { heading: "Floor Area", value: "580 m²" },
          { heading: "Floors", value: "3 Floors" },
          { heading: "Architectural Style", value: "Modern / Minimalism" },
          { heading: "Typology", value: "Real Estate" },
        ]}
        backgroundColor="bg-[#DFC0AB]"
      />

      <FullImageSection ImageSrc={fullImg} title="sun planet interior" />

      <Feature
        ImageSrc={featureImg}
        backgroundColor="bg-[#11111F]"
        title="X35 Projects as Design and Technical Consultancy Partner"
        description={[
          {
            paragraph:
              "In this engagement, X35 Projects acted as the design and consultancy partner, providing technical oversight, design development, and client advisory throughout the pre-construction and design phases. The physical construction of the development was carried out by a separate contracting firm, while we ensured continuous design compliance and quality alignment with the project vision.",
          },
        ]}
      />

      <ImageGallery
        BackgroundColor="bg-[#EAF1FF]"
        images={[
          { ImageSrc: gallery1, alt: "Interior 1", height: "594", width: "615" },
          { ImageSrc: gallery2, alt: "Interior 2", height: "594", width: "615", colspan: "col-span-2" },
          { ImageSrc: gallery3, alt: "Interior 3", height: "594", width: "615", colspan: "col-span-2" },
          { ImageSrc: gallery4, alt: "Interior 4", height: "594", width: "615" },
        ]}
      />

      <MiniHero
        ImageSrc={miniHeroImg}
        title="A Refined and Strategic Residential Development"
        description="Overall, the collaboration with Sun Planet Co resulted in a residential development that is not only architecturally refined but also commercially strategic—delivering value, efficiency, and long-term ROI for both stakeholders."
      />

      <RelatedProjects projects={projects} />
    </>
  );
}
