import BackgroundCarousel from "./BackgroundCarousel";

// Static imports for all carousel images
import bg1 from "@/public/images/bg-1.jpg";
import bg2 from "@/public/images/bg-2.jpg";
import bg3 from "@/public/images/bg-3.png";
import bg4 from "@/public/images/bg-4.jpg";
import bg5 from "@/public/images/bg-5.jpg";
import bg6 from "@/public/images/bg-6.png";
import bg7 from "@/public/images/bg-7.png";
import bg8 from "@/public/images/bg-8.jpg";
import bg9 from "@/public/images/bg-9.jpg";
import bg10 from "@/public/images/bg-10.jpg";
import bg11 from "@/public/images/bg-11.png";
import bg12 from "@/public/images/bg-12.jpg";

export default function LandingHero() {
  return (
    <BackgroundCarousel
      interval={3000}
      images={[
        bg1,
        bg2,
        bg3,
        bg4,
        bg5,
        bg6,
        bg7,
        bg8,
        bg9,
        bg10,
        bg11,
        bg12,
      ]}
    />
  );
}
