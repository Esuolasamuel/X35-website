import Clients from "@/components/section/Client";
import CTA from "@/components/section/CTA";
import LandingHero from "@/components/section/LandingHero";
import ProjectDemo from "@/components/section/ProjectDemo";
import Services from "@/components/section/Services";
import Testimonials from "@/components/section/Testimonials";

// Import images statically from the assets folder
import brookImg from "@/assets/images/ourProject-1.jpg";
import robImg from "@/assets/images/ourProject-2.jpg";
import chevronImg from "@/assets/images/ourProject-3.png"

const x35Content = () => {
  // Define projects outside JSX
  const projects =
  [
    {
      title: "The Brook Finance",
      type: "COMMERCIAL",
      img: brookImg,
      slug: "thebrook",
    },
    {
      title: "Rob’s Place",
      type: "RESIDENTIAL",
      img: robImg,
      slug: "robs-place",
    },
    {
      title: "Chevron",
      type: "COMMERCIAL",
      img: chevronImg,
      slug: "chevron",
    },
  ]

  return (
    <>
    <LandingHero />
    <Clients />
    <ProjectDemo projects={projects} />
    <Services />
    <Testimonials />
    <CTA
    titleLines={[
      { text: "Your vision" },
      { text: "deserves an" },
      { text: "architect" },
      { text: "with purpose." },
      {
        prefix: "Have you been",
        highlight: "x35ied?",
      },
    ]}
    id="contact-section"
    />
    </>
  );
};

export default x35Content;
