import Image from "next/image";

import brook from "@/assets/icons/thebrook.svg";
import chevron from "@/assets/icons/chevron.svg";
import oga from "@/assets/icons/ogadentist.svg";
import sun from "@/assets/icons/sun-planet-co.svg";
import nolt from "@/assets/icons/nolt-1.svg";
import solakat from "@/assets/icons/solakat.svg";

const logos = [
    { src: brook, alt: "The Brook Finance" },
    { src: chevron, alt: "Chevron" },
    { src: oga, alt: "Oga Dentist" },
    { src: sun, alt: "Sun Planet Co" },  
    { src: nolt, alt: "Nolt" },
    { src: solakat, alt: "Solakat" }
];

export default function Clients() {
    return (
        <section className="py-0 md:py-12 border-b bg-white">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 md:gap-12 place-items-center">
                {logos.map((logo, index) => (
                    <div key={index} className="flex items-center justify-center">
                        <Image
                            src={logo.src}
                            alt={logo.alt}
                            width={120}
                            height={40}
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