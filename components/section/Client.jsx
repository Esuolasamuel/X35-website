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
        <section className=" bg-white px-3.5 sm:px-7.5 md:px-15 lg:x-30 pt-1.25 sm:pt-2.5 md:pt-5.5 lg:pt-10.5 ">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 md:gap-12 place-items-center mx-auto">
                {logos.map((logo, index) => (
                    <div key={index} className="flex items-center justify-center">
                        <Image
                            src={logo.src}
                            alt={logo.alt}
                            width={120}
                            height={48} 
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