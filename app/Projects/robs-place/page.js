import Feature from "@/components/section/Feature";
import FullImageSection from "@/components/section/FullImageSection";
import Hero from "@/components/section/Hero";
import ListFeature from "@/components/section/ListFeature";
import Meta from "@/components/section/Meta";
import RelatedProjects from "@/components/section/RelatedProjects";



export default function RobPlacePage() {

  return (
    <>
      <Hero
        ImageSrc="/images/robplaceHero.png"
        title="Rob’s Place"
        height="h-[90vh]"
      />
      <Meta
        title={"Inception"}
        description={[
          {
            paragraph:
              "X35 was commissioned by a private client to redesign and renovate his long-standing family home. The brief was clear: transform an outdated structure into a clean, minimalist modern home that reflects his lifestyle and creates a calm, functional environment for his family."
          },
          {
            paragraph:
              "Our team was responsible for the full design and build process — from conceptual planning to execution."
          },
        ]}
        infoItem= {[
            { heading: "Category", value: "Design & Build / Remodeling / Turnkey" },
            { heading: "Floor Area", value: "500 m²" },
            { heading: "Floors", value: "2 Floors" },
            { heading: "Architectural Style", value: "Modern / Minimalism" },
            { heading: "Typology", value: "Residential" },
            { heading: "Sustainability Features", value: "Solar Design and Power Energy Solution" },
        ]}
        backgroundColor="bg-[#e5f1e7]"
      />
        <FullImageSection
          ImageSrc="/images/robplaceFullImage-1.png"
          title="rob's place interior"
        />
      <Feature
        ImageSrc="/images/robplaceFeature-1.png"
        description={[
            {
              paragraph:
                "During early consultations, it became clear that the client had deep concerns about renovation risks, particularly demolition. He feared that touching structural elements might weaken the building or cause collapse — a concern many homeowners share."
            }, 
            {
              paragraph:
                "Our role was not only technical but also reassurance-driven. Through structural assessments, transparent communication, and detailed planning, we helped the client understand exactly which elements were safe to modify and how the integrity of the building would be preserved."
            }, 
          ]}
        title="Understanding the Client’s Fears and Challenges"
        backgroundColor="bg-[#11111f]"
        textColor="text-white/80"
        headerColor="text-white"
        /> 
        <FullImageSection
          ImageSrc="/images/robplaceFullImage-2.png"
          title="rob place interior"
        />
        <ListFeature
            ImageSrc="/images/robplaceFeature-2.png"
            description="The design direction centered on simplicity, clean lines, improved lighting, and functional layouts. Key interventions included:"
            summary="Every design choice balanced aesthetics with practicality, ensuring the home felt both contemporary and comfortable."
            title="The Transformation Strategy: Minimalist Modern Living"
            backgroundColor="bg-[#d1ebe8]"
            lists={[
            { paragraph: "Reconfiguring key spaces to enhance movement and flow."},
            { paragraph: "Introducing modern finishes and materials." },
            { paragraph: "Improving lighting design to brighten spaces." },
            {
              paragraph:
                "Upgrading flooring, ceilings, and wall treatments for a cohesive minimalist feel.",
            },
          ]}
          aspect="aspect-615/803"
          orderL="order-2"
          orderR="order-1"        />
        <FullImageSection
          ImageSrc="/images/robplaceFullImage-3.png"
          title="rob place interior"
        />
        <ListFeature
            ImageSrc="/images/robplaceFeature-3.png"
            description="With a structural plan in place, demolition was executed safely and strategically:"
            summary="Every phase followed strict safety and engineering protocols <Br/> This process restored the client’s confidence, showing that renovation can be controlled, clean, and structurally safe."
            title="Systematic Demolition and Execution"
            backgroundColor="bg-[#dfc0ab]"
            aspect="aspect-615/722"
            lists={[
            { paragraph: "Only non-structural partitions were removed"},
            { paragraph: "Reinforcement was applied where needed" },
          ]}
        />
        <FullImageSection
          ImageSrc="/images/robplaceFullImage-4.png"
          title="rob place interior"
        />
        <Feature
        ImageSrc="/images/robplaceFeature-4.png"
        description={[
            {
              paragraph:
                "During early consultations, it became clear that the client had deep concerns about renovation risks, particularly demolition. He feared that touching structural elements might weaken the building or cause collapse — a concern many homeowners share."
            }, 
            {
              paragraph:
                "Our role was not only technical but also reassurance-driven. Through structural assessments, transparent communication, and detailed planning, we helped the client understand exactly which elements were safe to modify and how the integrity of the building would be preserved."
            }, 
          ]}
          backgroundColor="bg-[#e3cede]"
          title="Final Outcome: A Peaceful, Modern Family Home"
          aspect="aspect-615/722"
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
          title: "RobPlace HQ",
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
