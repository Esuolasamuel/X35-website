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
        <section className="px-3.5 sm:px-7.5 md:px-15 lg:px-30 pt-10.5 bg-white">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 md:gap-12 place-items-center">
                {logos.map((logo, index) => (
                    <div key={index} className="flex items-center justify-center">
                        <Image
                            src={logo.src}
                            alt={logo.alt}
                            width={180}
                            height={60}
                            /* grayscale makes logos uniform; 
                               hover:grayscale-0 and hover:scale-110 create the interaction 
                            */
                            className="
                                hover:scale-110 
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