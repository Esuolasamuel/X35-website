import Hero from "@/components/section/Hero";
import Meta from "@/components/section/Meta";
import FullImageSection from "@/components/section/FullImageSection";
import ListFeature from "@/components/section/ListFeature";
import CTA from "@/components/section/CTA";
import RelatedProjects from "@/components/section/RelatedProjects";

// Import images
import heroImg from "@/public/images/ogadentistHero.jpg";
import full1 from "@/public/images/ogadentistFullImage-1.png";
import full2 from "@/public/images/ogadentistFullImage-2.png";
import full3 from "@/public/images/ogadentistFullImage-3.jpg";
import full4 from "@/public/images/ogadentistFullImage-4.png";

import feature1 from "@/public/images/ogadentistFeature-1.png";
import feature2 from "@/public/images/ogadentistFeature-2.jpg";
import feature3 from "@/public/images/ogadentistFeature-3.jpg";
import feature4 from "@/public/images/ogadentistFeature-4.jpg";

import proj1 from "@/public/images/projects/Frame-1.png";
import proj2 from "@/public/images/projects/Frame-4.png";
import proj3 from "@/public/images/projects/Frame-3.png";
import proj4 from "@/public/images/projects/Frame-2.png";
import proj5 from "@/public/images/projects/Frame-5.png";
import proj6 from "@/public/images/projects/Frame-6.png";

export default function OgaDentistPage() {

  const projects = [
    { id: "chevron", title: "Chevron", image: proj1 },
    { id: "rob", title: "Rob’s Place", image: proj2 },
    { id: "adino", title: "Adrino HQ", image: proj3 },
    { id: "sunplant", title: "Sun Planet Co", image: proj4 },
    { id: "brooks", title: "The Brook Finance Ltd", image: proj5 },
    { id: "ogedentist", title: "Oga Dentist", image: proj6 },
  ];

  return (
    <>
      <Hero ImageSrc={heroImg} title="Oga Dentist" height="h-[90vh]" />

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
        backgroundColor="bg-[#eaf1ff]"
      />

      <FullImageSection ImageSrc={full1} title="ogadentist interior" />

      <ListFeature
        ImageSrc={feature1}
        title="Understanding the Vision"
        description="From the very beginning, this project was rooted in close collaboration..."
        backgroundColor="bg-[#11111f]"
        lists={[
          { paragraph: "Patient confidence and comfort" },
          { paragraph: "Operational efficiency" },
          { paragraph: "A strong, consistent brand identity" },
          { paragraph: "A clean, modern, and future-ready healthcare environment" },
        ]}
      />

      <FullImageSection ImageSrc={full2} title="ogadentist interior" />

      <ListFeature
        ImageSrc={feature2}
        title="Scope of Spaces Designed"
        description="The facility features a wide range of carefully curated spaces, each designed with intention and precision:"
        backgroundColor="bg-[#d1ebe8]"
        aspect="aspect-615/796"
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

      <FullImageSection ImageSrc={full3} title="ogadentist interior" />

      <ListFeature
        ImageSrc={feature3}
        title="Design Approach"
        description="At every step, our team at X35 focused on merging aesthetics with healthcare-grade functionality:"
        backgroundColor="bg-[#dfc0ab]"
        lists={[
          { paragraph: "Calming colours and textures that promote trust and reduce patient stress" },
          { paragraph: "Cleanable, durable materials that meet strict hygiene requirements" },
          { paragraph: "Smart spatial planning to improve movement, safety, and workflow" },
          { paragraph: "Brand-aligned elements that reinforce Oga Dentist’s identity" },
          { paragraph: "Lighting strategies that create clarity, focus, and warmth" },
        ]}
      />

      <FullImageSection ImageSrc={full4} title="ogadentist interior" />

      <ListFeature
        ImageSrc={feature4}
        title="Execution Excellence"
        description="Throughout the project, we worked closely with the Oga Dentist team—reviewing concepts, refining details, and ensuring that every decision aligned with their expectations."
        backgroundColor="bg-[#e3cede]"
        lists={[
          { paragraph: "Enhances patient experience" },
          { paragraph: "Boosts staff productivity and workflow" },
          { paragraph: "Reflects a high level of professional care" },
          { paragraph: "Prepares the clinic for future expansion and evolving standards" },
          { paragraph: "Lighting strategies that create clarity, focus, and warmth" },
        ]}
      />

      <CTA
        title="The Result"
        paragraph="The final outcome is a carefully executed environment that speaks the language of Professionalism, Cleanliness, Comfort, Innovation."
      />

      <RelatedProjects projects={projects} />
    </>
  );
}
