export const metadata = {
  title: "Oga Dentist – Healthcare Interior Design",
  description:
    "X35 delivered a 220m² dental clinic interior design in Lagos for Oga Dentist — healthcare-grade treatment rooms, patient reception, waiting lounges, and staff offices with full brand integration.",
  alternates: { canonical: "/projects/ogadentist" },
  openGraph: {
    title: "Oga Dentist Clinic Interior Design Lagos – X35 Projects",
    description:
      "Healthcare interior design in Lagos by X35 — a modern, patient-centred dental clinic for Oga Dentist with brand-led design across 220m².",
    url: "/projects/ogadentist",
    type: "website",
  },
};

import Hero from "@/components/section/Hero";
import Meta from "@/components/section/Meta";
import FullImageSection from "@/components/section/FullImageSection";
import ListFeature from "@/components/section/ListFeature";
import CTA from "@/components/section/CTA";
import RelatedProjects from "@/components/section/RelatedProjects";

// Import images
import heroImg from "@/assets/images/ogadentistHero.jpg";
import full1 from "@/assets/images/ogadentistFullImage-1.png";
import full2 from "@/assets/images/ogadentistFullImage-2.png";
import full3 from "@/assets/images/ogadentistFullImage-3.jpg";
import full4 from "@/assets/images/ogadentistFullImage-4.png";

import feature1 from "@/assets/images/ogadentistFeature-1.png";
import feature2 from "@/assets/images/ogadentistFeature-2.jpg";
import feature3 from "@/assets/images/ogadentistFeature-3.jpg";
import feature4 from "@/assets/images/ogadentistFeature-4.jpg";

import projectChevron from "@/assets/images/chevron.png";
import projectRob from "@/assets/images/robsplace.jpg";
import projectAdino from "@/assets/images/adino.png";
import projectSunplant from "@/assets/images/sunplanetco.jpg";
import projectbrook from "@/assets/images/brook.jpg";
import projectOgaDentist from "@/assets/images/ogadentist.jpg";

export default function OgaDentistPage() {

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
      { "@type": "ListItem", position: 3, name: "Oga Dentist", item: `${base}/projects/ogadentist` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Hero imageSrc={heroImg} title="Oga Dentist" height="h-[90vh]" />
        <Meta
          title="Redefining Patient-Centered Dentistry with Oga Dentist"
          description={[
            { paragraph: "Our collaboration with Oga Dentist, a fast-growing dental care company dedicated to modern, patient-centered healthcare delivery seems to be one of our most transformative projects at X35" },
            { paragraph: "We were commissioned directly by the CEO, who had a clear but ambitious vision:" },
            { paragraph: "To create a state-of-the-art dental office environment that not only supports professional excellence but also elevates patient comfort, trust, and experience." },
          ]}
          infoItem={[
            { heading: "Category", value: "Interior Design / Consultancy" },
            { heading: "Floor Area", value: "220 m²" },
            { heading: "Floors", value: "3 Floors" },
            { heading: "Architectural Style", value: "Modern / Minimalism" },
            { heading: "Typology", value: "Healthcare" },
          ]}
          backgroundColor="bg-[#EAF1FF]"
        />
        <FullImageSection imageSrc={full1} title="ogadentist interior" />
        <ListFeature
          imageSrc={feature1}
          title="Understanding the Vision"
          description="From the very beginning, this project was rooted in close collaboration. The CEO and his leadership team were deeply involved, offering continuous feedback throughout the design and execution phases. Our goal was to translate their ideas into a built space that expresses:"
          backgroundColor="bg-indigo-700"
          lists={[
            { paragraph: "Patient confidence and comfort" },
            { paragraph: "Operational efficiency" },
            { paragraph: "A strong, consistent brand identity" },
            { paragraph: "A clean, modern, and future-ready healthcare environment" },
          ]}
          textColor = "text-white/80"
          headerColor = "text-white"
        />
        <FullImageSection imageSrc={full2} title="ogadentist interior" />
        <ListFeature
          imageSrc={feature2}
          title="Scope of Spaces Designed"
          description="The facility features a wide range of carefully curated spaces, each designed with intention and precision:"
          backgroundColor="bg-[#d1ebe8]"
          aspect="aspect-[615/796]"
          imagePosition= "object-[70%_50%]"
          lists={[
            { paragraph: "A welcoming reception that immediately sets the tone of professionalism" },
            { paragraph: "A comfortable waiting lounge with zoning that reduces patient anxiety" },
            { paragraph: "A bright, colourful children’s play area designed for safety and engagement" },
            { paragraph: "Functional meeting rooms and an open office for staff productivity" },
            { paragraph: "A stylish yet practical cafeteria for teams and visitors" },
            { paragraph: "Private consultation rooms built for ease of communication" },
            { paragraph: "Fully compliant treatment and operating rooms equipped for efficient workflow" },
            { paragraph: "A thoughtfully detailed CEO’s private office reflecting leadership and brand identity" },
            { paragraph: "Modern, hygienic restrooms designed for accessibility and durability" },
          ]}
        />
        <FullImageSection imageSrc={full3} title="ogadentist interior" />
        <ListFeature
          imageSrc={feature3}
          title="Design Approach"
          description="At every step, our team at X35 focused on merging aesthetics with healthcare-grade functionality:"
          backgroundColor="bg-[#dfc0ab]"
          orderL = "order-2"
          orderR = "order-1"
          lists={[
            { paragraph: "Calming colours and textures that promote trust and reduce patient stress" },
            { paragraph: "Cleanable, durable materials that meet strict hygiene requirements" },
            { paragraph: "Smart spatial planning to improve movement, safety, and workflow" },
            { paragraph: "Brand-aligned elements that reinforce Oga Dentist’s identity" },
            { paragraph: "Lighting strategies that create clarity, focus, and warmth" },
          ]}
        />
        <FullImageSection imageSrc={full4} title="ogadentist interior" />
        <ListFeature
          imageSrc={feature4}
          title="Execution Excellence"
          description="Throughout the project, we worked closely with the Oga Dentist team—reviewing concepts, refining details, and ensuring that every decision aligned with their expectations."
          backgroundColor="bg-[#e3cede]"
          imagePosition="object-[20%_50%]"
          lists={[
            { paragraph: "Enhances patient experience" },
            { paragraph: "Boosts staff productivity and workflow" },
            { paragraph: "Reflects a high level of professional care" },
            { paragraph: "Prepares the clinic for future expansion and evolving standards" },
            { paragraph: "Lighting strategies that create clarity, focus, and warmth" },
          ]}
        />
        <CTA
          width="133"
          title="The Result"
          backgroundImage="backgroundImage"
          button={false}
          align="left"
          paragraph="The final outcome is a carefully executed environment that speaks the language of Professionalism, Cleanliness, Comfort, Innovation."
        />
        <RelatedProjects projects={projects} />
    </>
  );
}
