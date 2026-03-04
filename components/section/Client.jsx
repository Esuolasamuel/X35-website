import Image from "next/image";

import brook from "@/assets/icons/thebrook.svg";
import chevron from "@/assets/icons/chevron.svg";
import oga from "@/assets/icons/ogadentist.svg";
import nolt from "@/assets/icons/nolt-1.svg";
import sun from "@/assets/icons/sun-planet-co.svg";
import randomsoft from "@/assets/icons/randomsoft.png";

const logos = [
    { src: brook, alt: "The Brook Finance", width:"110", height: "24"},
    { src: chevron, alt: "Chevron", width:"121", height: "48" },
    { src: oga, alt: "Oga Dentist", width:"110", height: "32.2" },
    { src: nolt, alt: "Nolt", width:"200", height: "26.92" },
    { src: sun, alt: "Sun Planet Co", width:"110", height: "38" },  
    { src: randomsoft, alt: "Randomsoft", width:"180", height: "38" }
];

export default function Clients() {
    return (
        <section className="bg-white px-5 sm:px-10 lg:px-20 py-5 md:py-8">
            <h3 className="font-bold font-mont text-xl text-center ">Trusted By</h3>
            <div className="
                /* Grid Logic: 
                   - 2 cols for 375px (default)
                   - 3 cols for sm/md
                   - 6 cols for lg 
                */
                grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 
                gap-4 sm:gap-6 md:gap-8 
                max-w-7xl mx-auto place-items-center py-5 md:py-8
            ">
                {logos.map((logo, index) => (
                    <div key={index} className="w-full flex justify-center items-center">
                        <Image
                            src={logo.src}
                            alt={logo.alt}
                            /* FIX: Use responsive width/height logic. 
                               The 'h-auto' ensures the aspect ratio of the SVG is maintained.
                            */
                            width={logo.width}
                            height={logo.height}
                            className="
                                w-25 sm:w-27.5 md:w-32.5 lg:w-35 
                                h-auto object-cover
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