import CTA from "@/components/section/CTA";
import FullImageSection from "@/components/section/FullImageSection";
import Hero from "@/components/section/Hero";
import ListFeature from "@/components/section/ListFeature";
import Meta from "@/components/section/Meta";
import RelatedProjects from "@/components/section/RelatedProjects";



export default function OgaDentistPage() {

  return (
    <>
      <Hero
        ImageSrc="/images/ogadentistHero.jpg"
        title="Oga Dentist"
        height="h-[90vh]"
      />

      <Meta
        title={"Redefining Patient-Centered Dentistry with Oga Dentist"}
        description={[
            {
              paragraph:
                "Our collaboration with Oga Dentist, a fast-growing dental care company dedicated to modern, patient-centered healthcare delivery seems to be one of our most transformative projects at X35"
            },
            {
              paragraph:
                "We were commissioned directly by the CEO, who had a clear but ambitious vision:"
            },
            {
              paragraph:
                "To create a state-of-the-art dental office environment that not only supports professional excellence but also elevates patient comfort, trust, and experience."
            },
          ]}
        infoItem= {[
            { heading: "Category", value: "Interior Design / Consultancy" },
            { heading: "Floor Area", value: "220 m²" },
            { heading: "Floors", value: "3 Floors" },
            { heading: "Architectural Style", value: "Modern / Minimalism" },
            { heading: "Typology", value: "Healthcare" },
          ]}
          backgroundColor="bg-[#eaf1ff]"
        />
        <FullImageSection
          ImageSrc="/images/ogadentistFullImage-1.png"
          title="ogadentist interior"
        />
         <ListFeature
            ImageSrc="/images/ogadentistFeature-1.png"
            aspect=""
            description="From the very beginning, this project was rooted in close collaboration. The CEO and his leadership team were deeply involved, offering continuous feedback throughout the design and execution phases. Our goal was to translate their ideas into a built space that expresses:"
            summary=""
            title="Understanding the Vision"
            backgroundColor="bg-[#11111f]"
            lists={[
            { paragraph: "Patient confidence and comfort"},
            { paragraph: "Operational efficiency" },
            { paragraph: "A strong, consistent brand identity" },
            {
              paragraph:
                "A clean, modern, and future-ready healthcare environment"
            },
          ]}
          textColor="text-white/80"
          headerColor="text-white"
        />
        <FullImageSection
          ImageSrc="/images/ogadentistFullImage-2.png"
          title="ogadentist interior"
        />
         <ListFeature
            ImageSrc="/images/ogadentistFeature-2.jpg"
            description="The facility features a wide range of carefully curated spaces, each designed with intention and precision:"
            summary=""
            title="Scope of Spaces Designed"
            backgroundColor="[#d1ebe8]"
            lists={[
            { paragraph: "A welcoming reception that immediately sets the tone of professionalism"},
            { paragraph: "A comfortable waiting lounge with zoning that reduces patient anxiety" },
            { paragraph: "A bright, colourful children’s play area designed for safety and engagement" },
            {
              paragraph:
                "Functional meeting rooms and an open office for staff productivity"
            },
            {
              paragraph:
                "A stylish yet practical cafeteria for teams and visitors"
            },
            {
              paragraph:
                "Private consultation rooms built for ease of communication"
            },
            {
              paragraph:
                "Fully compliant treatment and operating rooms equipped for efficient workflow"
            },
            {
              paragraph:
                "A thoughtfully detailed CEO’s private office reflecting leadership and brand identity"
            },
            {
              paragraph:
                "Modern, hygienic restrooms designed for accessibility and durability"
            },
          ]}
          aspect="aspect-615/796"
        />
        <FullImageSection
          ImageSrc="/images/ogadentistFullImage-3.jpg"
          title="ogadentist interior"
        />
        <ListFeature
            ImageSrc="/images/ogadentistFeature-3.jpg"
            // aspect="aspect-615/796"
            description="At every step, our team at X35 focused on merging aesthetics with healthcare-grade functionality:"
            summary=""
            orderL="order-2"
            orderR="order-1"
            title="Design Approach"
            backgroundColor="#dfc0ab"
            lists={[
            { paragraph: "Calming colours and textures that promote trust and reduce patient stress"},
            { paragraph: "Cleanable, durable materials that meet strict hygiene requirements" },
            { paragraph: "Smart spatial planning to improve movement, safety, and workflow" },
            {
              paragraph:
                "Brand-aligned elements that reinforce Oga Dentist’s identity"
            },
            {
              paragraph:
                "Lighting strategies that create clarity, focus, and warmth"
            },
          ]}
        />
         <FullImageSection
          ImageSrc="/images/ogadentistFullImage-4.png"
          title="ogadentist interior"
        />
         <ListFeature
            ImageSrc="/images/ogadentistFeature-4.jpg"
            description="Throughout the project, we worked closely with the Oga Dentist team—reviewing concepts, refining details, and ensuring that every decision aligned with their expectations.
          
          This collaborative process allowed us to deliver a space that: "
            summary=""
            title="Execution Excellence"
            backgroundColor="bg-[#e3cede]"
            lists={[
            { paragraph: "Enhances patient experience"},
            { paragraph: "Boosts staff productivity and workflow" },
            { paragraph: "Reflects a high level of professional care" },
            {
              paragraph:
                "Prepares the clinic for future expansion and evolving standards"
            },
            {
              paragraph:
                "Lighting strategies that create clarity, focus, and warmth"
            },
          ]}
        />
        <CTA
        title="The Result"
        paragraph="The final outcome is a carefully executed environment that speaks the language of Professionalism, Cleanliness, Comfort, Innovation."
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
