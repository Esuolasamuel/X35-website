import AboutHero from "@/components/section/AboutHero";
import WhoWeAre from "@/components/section/WhoWeAre";
import VisionMission from "@/components/section/VisionMission";
import Values from "@/components/section/Values";
import ImageGrid from "@/components/section/ImageGrid";

// Static imports for all images
import aboutImg1 from "@/assets/images/aboutImageSplit-1.png";
import aboutImg2 from "@/assets/images/aboutImageSplit-2.png";
import aboutImg3 from "@/assets/images/aboutImageSplit-3.png";
import aboutImg4 from "@/assets/images/aboutImageSplit-4.png";

import profileIcon from "@/assets/images/profile.svg";
import integrityIcon from "@/assets/images/integrity.svg";
import starIcon from "@/assets/images/star.svg";

export default function AboutPage() {
  return (
    <>
      <AboutHero />
        <WhoWeAre />
        {/* First Image Grid */}
        <ImageGrid
            images={[aboutImg1, aboutImg2]}
            orders={["md:order-1", "md:order-2"]} // Reverse order
            widths={["md:w-[506px]", "md:w-[805px]"]}
        />
        <VisionMission />
        {/* Second Image Grid */}
        <ImageGrid
          images={[aboutImg3, aboutImg4]}
          orders={["lg:order-2", "lg:order-1"]} // Reverse order
          widths={["lg:w-[506px]", "lg:w-[805px]"]}
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
