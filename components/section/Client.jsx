import Image from "next/image";

import brook from "@/assets/icons/thebrook.svg";
import chevron from "@/assets/icons/chevron.svg";
import oga from "@/assets/icons/ogadentist.svg";
import nolt from "@/assets/icons/nolt-1.svg";
import sun from "@/assets/icons/sun-planet-co.svg";
import randomsoft from "@/assets/icons/randomsoft.svg";

const logos = [
    { src: brook, alt: "The Brook Finance" },
    { src: chevron, alt: "Chevron" },
    { src: oga, alt: "Oga Dentist" },
    { src: sun, alt: "Sun Planet Co" },  
    { src: nolt, alt: "Nolt" },
    { src: randomsoft, alt: "Randomsoft" }
];

export default function Clients() {
    return (
        <section className="bg-white px-5 sm:px-10 lg:px-20 py-5 md:py-10">
            <div className="
                /* Grid Logic: 
                   - 2 cols for 375px (default)
                   - 3 cols for sm/md
                   - 6 cols for lg 
                */
                grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 
                gap-4 sm:gap-6 md:gap-8 
                max-w-7xl mx-auto place-items-center
            ">
                {logos.map((logo, index) => (
                    <div key={index} className="w-full flex justify-center items-center">
                        <Image
                            src={logo.src}
                            alt={logo.alt}
                            /* FIX: Use responsive width/height logic. 
                               The 'h-auto' ensures the aspect ratio of the SVG is maintained.
                            */
                            width={140}
                            height={60}
                            className="
                                w-25 sm:w-27.5 md:w-32.5 lg:w-35 
                                h-auto object-contain
                                hover:scale-105 
                                transition-all duration-300 ease-in-out 
                                cursor-pointer
                            "
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}