import Image from "next/image";

const logos = [
    { src: "/icons/thebrook.svg", alt: "The Brook Finance" },
    { src: "/icons/chevron.svg", alt: "Chevron" },
    { src: "/icons/ogadentist.svg", alt: "Oga Dentist" },
    { src: "/icons/sun-planet-co.svg", alt: "Sun Planet Co" },  
    { src: "/icons/nolt-1.svg", alt: "Nolt" },
    { src: "/icons/solakat.svg", alt: "Solakat" }
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