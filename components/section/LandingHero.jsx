import BackgroundCarousel from "./BackgroundCarousel";

// Static imports for all carousel images
import bg1 from "@/assets/images/x35-architecture-portfolio-hero-1.jpg";
import bg2 from "@/assets/images/x35-architecture-portfolio-hero-2.jpg";
import bg3 from "@/assets/images/brook-finance-office-interior-full-view-lagos.png";
import bg4 from "@/assets/images/x35-architecture-portfolio-hero-4.jpg";
import bg5 from "@/assets/images/x35-architecture-portfolio-hero-5.jpg";
import bg6 from "@/assets/images/x35-architecture-portfolio-hero-6.png";
import bg7 from "@/assets/images/x35-architecture-portfolio-hero-7.png";
import bg8 from "@/assets/images/x35-architecture-portfolio-hero-8.jpg";
import bg9 from "@/assets/images/x35-architecture-portfolio-hero-9.jpg";
import bg10 from "@/assets/images/x35-architecture-portfolio-hero-10.png";
import bg11 from "@/assets/images/x35-architecture-portfolio-hero-11.jpg";
import bg12 from "@/assets/images/x35-architecture-portfolio-hero-12.jpg";

export default function LandingHero() {
  return (
    <BackgroundCarousel
      interval={4000}
      images={[
        { src: bg1, alt: "X35 Projects architecture and interior design portfolio — Lagos, Nigeria" },
        { src: bg2, alt: "Contemporary residential interior design by X35 Projects in Lagos, Nigeria" },
        { src: bg3, alt: "Brook Finance corporate office interior — 1,609m² turnkey office transformation in Lagos by X35 Projects" },
        { src: bg4, alt: "High-quality architectural design and construction project by X35 Projects in Lagos" },
        { src: bg5, alt: "Interior design and space planning by X35 Projects — residential and commercial spaces in Lagos" },
        { src: bg6, alt: "Luxury commercial interior design by X35 Projects — office and corporate spaces in Lagos, Nigeria" },
        { src: bg7, alt: "Modern architecture and construction project by X35 Projects in Lagos, Nigeria" },
        { src: bg8, alt: "Residential renovation and interior design by X35 Projects in Lagos, Nigeria" },
        { src: bg9, alt: "Commercial architecture and turnkey construction by X35 Projects in Lagos, Nigeria" },
        { src: bg10, alt: "Architecture consultancy and project management services by X35 Projects in Lagos" },
        { src: bg11, alt: "Contemporary office fit-out and commercial interior design by X35 Projects in Lagos, Nigeria" },
        { src: bg12, alt: "High-quality building design and construction by X35 Projects — architecture firm in Lagos, Nigeria" },
      ]}
    />
  );
}
