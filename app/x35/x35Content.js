import Clients from "@/components/section/Client"
import CTA from "@/components/section/CTA"
import LandingHero from "@/components/section/LandingHero"
import ProjectDemo from "@/components/section/ProjectDemo"
import Services from "@/components/section/Services"
import Testimonials from "@/components/section/Testimonials"


const x35Content = () => {
  return (
        <>
          <LandingHero />
          <Clients />
          <ProjectDemo
          const projects ={[
            { title: "The Brook Finance", type: "Commercial", img: "/images/ourProject-1.jpg" },
            { title: "Rob's Place", type: "Residential", img: "/images/ourProject-2.jpg" },
            { title: "Chevron", type: "Commercial", img: "/images/ourProject-3.png"},
            ]} />
          <Services />
          <Testimonials />
          <CTA
          title="Your vision deserves an architect with purpose. Have you been x35ied?"
          text="Contact us"
          paragraph=""
           />
        </>
  )
}

export default x35Content