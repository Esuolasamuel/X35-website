import AboutHero from "@/components/section/AboutHero";
import WhoWeAre from "@/components/section/WhoWeAre";
import ImageGrid from "@/components/section/ImageGrid";
import VisionMission from "@/components/section/VisionMission";
import Values from "@/components/section/Values";




export default function AboutPage() {
    return (
        <>
            <AboutHero />
            <WhoWeAre />
            <ImageGrid
             images = {[{ImageSrc: "/images/aboutImageSplit-1.png",
                aspect: "aspect-508/582"
             } , {ImageSrc: "/images/aboutImageSplit-2.png",
                aspect: "aspect-805/582"
             },
            ] }
             />
            <VisionMission />
            <ImageGrid
             images = {[{ImageSrc: "/images/aboutImageSplit-3.png",
                aspect: "aspect-805/582"
             } , {ImageSrc: "/images/aboutImageSplit-4.png",
                aspect: "aspect-508/582"
             }] }
             aspect=""/>
            <Values 
            values = {[
            { title: "Customer Satisfaction", desc: "We have honed the art of delighting customers at every turn.", img: "/images/profile.svg" },
            { title: "Integrity", desc: "We always do our best to be sincere, faithful and truthful in appearance, speech and actions.", img: "/images/integrity.svg" },
            { title: "Commitment", desc: "Whatsoever we find worth doing, we do with all our heart.", img: "/images/star.svg" },
            ]}
            />
        </>
    );
}