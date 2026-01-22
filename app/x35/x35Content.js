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
      type: "COMMERCIAl",
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
      type: "COMMERCIAl",
      img: chevronImg,
      slug: "chevron",
    },
  ]

  return (
    <>
      <LandingHero />
      <div className="px-4 sm:px-8 md:px-16 lg:px-32">
        <Clients />
        <ProjectDemo projects={projects} />
        <Services />
        <Testimonials />
        <CTA
          title="Your vision deserves an architect with purpose. Have you been x35ied?"
          text="Contact us"
          paragraph=""
        />
      </div>
    </>
  );
};

export default x35Content;
