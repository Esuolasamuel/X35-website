export const metadata = {
  title: "About Us",
  description:
    "X35 Projects is a Lagos-based architecture, interior design, and construction firm driven by integrity and commitment — delivering transformative corporate offices, residential homes, and healthcare facilities across Nigeria.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About X35 – Architecture & Interior Design Firm in Lagos",
    description:
      "Learn about X35 Projects — a Lagos architecture and interior design company with a proven track record of commercial, residential, and healthcare projects across Nigeria.",
    url: "/about",
    type: "website",
  },
};

import AboutHero from "@/components/section/AboutHero";
import WhoWeAre from "@/components/section/WhoWeAre";
import VisionMission from "@/components/section/VisionMission";
import Values from "@/components/section/Values";

// Static imports for all images
import aboutImg2 from "@/assets/images/x35-executive-boardroom-interior-design-lagos.png";
import aboutImg1 from "@/assets/images/x35-modern-residential-building-entrance-lagos.png";
import aboutImg4 from "@/assets/images/x35-outdoor-terrace-pergola-design-lagos.png";
import aboutImg3 from "@/assets/images/x35-interior-hallway-artwork-display-lagos.png";

import profileIcon from "@/assets/images/profile.svg";
import integrityIcon from "@/assets/images/integrity.svg";
import starIcon from "@/assets/images/star.svg";
import ImageGrid from "@/components/section/ImageGrid";

export default function AboutPage() {
  return (
    <>
      <AboutHero />
        <WhoWeAre />
        {/* First Image Grid */}
        <ImageGrid
          images={[
            { imageSrc: aboutImg1, alt: "Architectural render of a modern residential building entrance with stone steps and tropical landscaping" },
            { imageSrc: aboutImg2, alt: "X35-designed executive boardroom with hardwood conference table and wood-panelled feature wall" },
          ]}
          backgroundColor='bg-white'
        />
        <VisionMission />
        {/* Second Image Grid */}
        <ImageGrid
          images={[
            { imageSrc: aboutImg3, alt: "Modern rooftop terrace with louvered pergola, outdoor dining area, and open-air views" },
            { imageSrc: aboutImg4, alt: "Curated interior hallway featuring framed abstract artworks mounted on brass pins" },
          ]}
          reverse="true"
          backgroundColor='bg-white'
        />
        {/* Values Section */}
        <Values
          values={[
            {
              title: "Customer Satisfaction",
              desc: "We have honed the art of delighting customers at every turn.",
              img: profileIcon,
            },
            {
              title: "Integrity",
              desc: "We always do our best to be sincere, faithful and truthful in appearance, speech and actions.",
              img: integrityIcon,
            },
            {
              title: "Commitment",
              desc: "Whatsoever we find worth doing, we do with all our heart.",
              img: starIcon,
            },
          ]}
        />
    </>
  );
}
