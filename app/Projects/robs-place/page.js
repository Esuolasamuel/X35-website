import Hero from "@/components/section/Hero";
import Meta from "@/components/section/Meta";
import FullImageSection from "@/components/section/FullImageSection";
import Feature from "@/components/section/Feature";
import ListFeature from "@/components/section/ListFeature";
import RelatedProjects from "@/components/section/RelatedProjects";

// Import local images from public
import heroImg from "@/assets/images/robplaceHero.png";
import full1 from "@/assets/images/robplaceFullImage-1.png";
import full2 from "@/assets/images/robplaceFullImage-2.png";
import full3 from "@/assets/images/robplaceFullImage-3.png";
import full4 from "@/assets/images/robplaceFullImage-4.png";

import feature1 from "@/assets/images/robplaceFeature-1.png";
import feature2 from "@/assets/images/robplaceFeature-2.png";
import feature3 from "@/assets/images/robplaceFeature-3.png";
import feature4 from "@/assets/images/robplaceFeature-4.png";

import projectChevron from "@/assets/images/chevron.png";
import projectRob from "@/assets/images/robsplace.jpg";
import projectAdino from "@/assets/images/adino.png";
import projectSunplant from "@/assets/images/sunplanetco.jpg";
import projectBrooks from "@/assets/images/brooks.jpg";
import projectOgaDentist from "@/assets/images/ogadentist.jpg";

export default function RobPlacePage() {

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
      <Hero ImageSrc={heroImg} title="Rob’s Place" height="h-[90vh]" />

      <Meta
        title="Inception"
        description={[
          { paragraph: "X35 was commissioned by a private client to redesign and renovate his long-standing family home. The brief was clear: transform an outdated structure into a clean, minimalist modern home that reflects his lifestyle and creates a calm, functional environment for his family." },
          { paragraph: "Our team was responsible for the full design and build process — from conceptual planning to execution." },
        ]}
        infoItem={[
          { heading: "Category", value: "Design & Build / Remodeling / Turnkey" },
          { heading: "Floor Area", value: "500 m²" },
          { heading: "Floors", value: "2 Floors" },
          { heading: "Architectural Style", value: "Modern / Minimalism" },
          { heading: "Typology", value: "Residential" },
          { heading: "Sustainability Features", value: "Solar Design and Power Energy Solution" },
        ]}
        backgroundColor="bg-[#e5f1e7]"
      />

      <FullImageSection ImageSrc={full1} title="rob's place interior" />

      <Feature
        ImageSrc={feature1}
        title="Understanding the Client’s Fears and Challenges"
        description={[
          { paragraph: "During early consultations, it became clear that the client had deep concerns about renovation risks, particularly demolition. He feared that touching structural elements might weaken the building or cause collapse — a concern many homeowners share." },
          { paragraph: "Our role was not only technical but also reassurance-driven. Through structural assessments, transparent communication, and detailed planning, we helped the client understand exactly which elements were safe to modify and how the integrity of the building would be preserved." },
        ]}
        backgroundColor="bg-[#11111f]"
      />

      <FullImageSection ImageSrc={full2} title="rob place interior" />

      <ListFeature
        ImageSrc={feature2}
        title="The Transformation Strategy: Minimalist Modern Living"
        description="The design direction centered on simplicity, clean lines, improved lighting, and functional layouts. Key interventions included:"
        summary="Every design choice balanced aesthetics with practicality, ensuring the home felt both contemporary and comfortable."
        backgroundColor="bg-[#d1ebe8]"
        flex="flex-row-reverse"
        aspect="aspect-615/803"
        lists={[
          { paragraph: "Reconfiguring key spaces to enhance movement and flow." },
          { paragraph: "Introducing modern finishes and materials." },
          { paragraph: "Improving lighting design to brighten spaces." },
          { paragraph: "Upgrading flooring, ceilings, and wall treatments for a cohesive minimalist feel." },
        ]}
      />

      <FullImageSection ImageSrc={full3} title="rob place interior" />

      <ListFeature
        ImageSrc={feature3}
        title="Systematic Demolition and Execution"
        description="With a structural plan in place, demolition was executed safely and strategically:"
        summary="Every phase followed strict safety and engineering protocols. This process restored the client’s confidence, showing that renovation can be controlled, clean, and structurally safe."
        backgroundColor="bg-[#dfc0ab]"
        aspect="aspect-615/722"
        lists={[
          { paragraph: "Only non-structural partitions were removed" },
          { paragraph: "Reinforcement was applied where needed" },
        ]}
      />

      <FullImageSection ImageSrc={full4} title="rob place interior" />

      <Feature
        ImageSrc={feature4}
        title="Final Outcome: A Peaceful, Modern Family Home"
        description={[
          { paragraph: "During early consultations, it became clear that the client had deep concerns about renovation risks, particularly demolition. He feared that touching structural elements might weaken the building or cause collapse — a concern many homeowners share." },
          { paragraph: "Our role was not only technical but also reassurance-driven. Through structural assessments, transparent communication, and detailed planning, we helped the client understand exactly which elements were safe to modify and how the integrity of the building would be preserved." },
        ]}
        backgroundColor="bg-[#e3cede]"
        aspect="aspect-615/722"
      />

      <RelatedProjects projects={projects} />
    </>
  );
}
