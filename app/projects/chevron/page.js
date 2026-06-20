export const metadata = {
  title: "Chevron Deep Waters – Office Interior Redesign",
  description:
    "X35 delivered a premium commercial office fit-out for Chevron's Deep Waters Department in Lagos — 145m² with custom acoustic partitions, bespoke geometric ceiling, upgraded flooring, and an 11-seat conference room.",
  alternates: { canonical: "/projects/chevron" },
  openGraph: {
    title: "Chevron Lagos Office Fit-Out – X35 Projects",
    description:
      "Commercial office interior fit-out in Lagos by X35 — acoustic design, bespoke ceilings, and space planning for Chevron's Deep Waters Department.",
    url: "/projects/chevron",
    type: "website",
  },
};

import Hero from "@/components/section/Hero";
import Meta from "@/components/section/Meta";
import FullImageSection from "@/components/section/FullImageSection";
import Narrative from "@/components/section/Narrative";
import Feature from "@/components/section/Feature";
import ImageGallery from "@/components/gallery/ImageGallery";
import RelatedProjects from "@/components/section/RelatedProjects";

// Import local images from public folder
import chevronHero from "@/assets/images/chevron-deep-waters-office-fitout-hero-lagos.png";
import chevronFull from "@/assets/images/chevron-deep-waters-open-workstation-redesign-lagos.png";
import chevronNarrative from "@/assets/images/chevron-deep-waters-geometric-ceiling-design-lagos.jpg";
import chevronFeature from "@/assets/images/chevron-deep-waters-conference-room-design-lagos.png";
import chevronSplit1 from "@/assets/images/chevron-deep-waters-office-gallery-1-lagos.jpg";
import chevronSplit2 from "@/assets/images/chevron-deep-waters-office-gallery-2-lagos.png";
import chevronSplit3 from "@/assets/images/chevron-deep-waters-office-gallery-3-lagos.png";
import chevronSplit4 from "@/assets/images/chevron-deep-waters-office-gallery-4-lagos.png";
import projectChevron from "@/assets/images/chevron-deep-waters-office-interior-lagos.png";
import projectRob from "@/assets/images/robs-place-minimalist-home-renovation-nigeria.jpg";
import projectAdino from "@/assets/images/adino-capital-office-interior-lagos.png";
import projectSunplant from "@/assets/images/sunplanet-co-residential-development-nigeria.jpg";
import projectbrook from "@/assets/images/brook-finance-corporate-headquarters-lagos.jpg";
import projectOgaDentist from "@/assets/images/oga-dentist-clinic-interior-design-lagos.jpg";

export default function ChevronPage() {

  const projects = [
    { id: "chevron", title: "Chevron", image: projectChevron },
    { id: "robs-place", title: "Rob’s Place", image: projectRob },
    { id: "adino", title: "Adrino HQ", image: projectAdino },
    { id: "sunplant", title: "Sun Planet Co", image: projectSunplant },
    { id: "brook", title: "The Brook Finance Ltd", image: projectbrook },
    { id: "ogedentist", title: "Oga Dentist", image: projectOgaDentist },
  ];

  const base = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${base}/` },
      { "@type": "ListItem", position: 2, name: "Projects", item: `${base}/projects` },
      { "@type": "ListItem", position: 3, name: "Chevron Deep Waters", item: `${base}/projects/chevron` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Hero imageSrc={chevronHero} title="Chevron" height="h-[90vh]" altText="Chevron Deep Waters Department office fit-out in Lagos — 145m² commercial interior design by X35 Projects" />
        <Meta
          title="Chevron Deep Waters Workspace Redesign"
          description={[
            { paragraph: "X35 Projects was engaged to redesign the interior space of the Deep Waters Department at Chevron’s Lagos office into a modern, high-performing workspace. Our goal was to reimagine the existing environment and deliver a more efficient, collaborative, and visually refined office experience." },
            { paragraph: "The project featured a complete upgrade of the department’s open workstation area, where we introduced a refreshed spatial layout that improves movement, communication, and ergonomic comfort. Custom acoustic partitions, integrated cable-management systems, and contemporary workstation modules were designed to support daily operations while maintaining a clean, organized aesthetic." },
          ]}
          infoItem={[
            { heading: "Category", value: "Interior Design / Consultancy" },
            { heading: "Floor Area", value: "145 m²" },
            { heading: "Floors", value: "2 Floors" },
            { heading: "Architectural Style", value: "Modern / Minimalism" },
            { heading: "Typology", value: "Commercial" },
          ]}
          backgroundColor="bg-[#DFC0AB]"
        />
        <FullImageSection imageSrc={chevronFull} title="Chevron Deep Waters open workstation area — commercial office fit-out in Lagos by X35 Projects" />
        <Narrative
          backgroundColor="bg-indigo-700"
          TextColor="text-white"
          title="Chevron Deep Waters bespoke geometric ceiling and commercial-grade flooring upgrade in Lagos"
          description={[
            { paragraph: "A standout element of the redesign is the bespoke modern ceiling system, created with bold geometric forms and energy-efficient lighting. Concealed linear LED fixtures and coordinated MEP integration allowed us to achieve a polished, uncluttered look that enhances the overall ambience of the space." },
            { paragraph: "Flooring was upgraded using durable, commercial-grade materials, selected for their long-term performance and seamless compatibility with the department’s new design language. These materials contribute to a cohesive visual identity while withstanding the demands of a busy corporate environment." },
            { paragraph: "The project also included the creation of a new 11-man conference room, designed with advanced AV infrastructure, custom joinery, optimal sightlines, and a modern material palette." },
          ]}
          imageSrc={chevronNarrative}
          imagePosition="object-[80%_50%]"
          textColor = "text-white/80"
          headerColor = "text-white"
        />
        <ImageGallery
          backgroundColor="bg-white"
          images={[
            { imageSrc: chevronSplit1, type: "small", alt: "Chevron Deep Waters office workstation detail — acoustic partitions and cable management Lagos" },
            { imageSrc: chevronSplit2, type: "large", alt: "Chevron Deep Waters contemporary office interior renovation by X35 Projects Lagos" },
            { imageSrc: chevronSplit3, type: "large", alt: "Chevron Deep Waters geometric ceiling and energy-efficient LED lighting design Lagos" },
            { imageSrc: chevronSplit4, type: "small", alt: "Chevron Deep Waters commercial flooring and material finishes — office fit-out Lagos" },
          ]}
        />
          <Feature
            imageSrc={chevronFeature}
            title="Delivering a Functional and Refined Collaborative Space"
            description={[
              { paragraph: "The result is a sophisticated meeting space that supports both high-level presentations and collaborative team sessions." },
              { paragraph: "Through this redevelopment, X35 Projects delivered a workspace that blends functionality, aesthetics, and technical precision—reflecting our commitment to quality, innovation, and client-focused design solutions." },
            ]}
            backgroundColor="bg-[#E3CEDE]"
          />
        <RelatedProjects projects={projects} />
    </>
  );
}
