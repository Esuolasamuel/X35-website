import Image from "next/image";
import Container from "./Container";
import aboutHero from "@/assets/images/aboutHero.png";  



export default function AboutHero() {
    return (
        <section className="pt-28">
            <Container>
                <div className="text-center w-165 h-65 mx-auto bg-white">
                    <h1    
                        className="
                        font-heading
                        font-extrabold
                        tracking-[-0.03em]
                        leading-3 sm:leading-6 md:leading-12 lg:leading-16
                        text-7xl sm:text-3xl md:text-4xl lg:text-5xl
                        px-0 mb-4
                        "
                        style={{ leadingTrim: 'cap-height' }}
                    >
                        Building trust, vision,<br />
                        and lasting{" "}
                        <span className="relative inline-block">
                        value.
                        <span
                            className="
                            absolute -rigth-1 sm:-rigth-2 md:-rigth-3 lg:-rigth-4 -top-1 sm:-top-1.5 md:-top-2 lg:-top-2
                            h-26.5 w-66.29 sm:h-16 sm:w-40 md:h-20 md:w-48 lg:h-24 lg:w-60
                            bg-[url(@/assets/icons/Fill-4.svg)]
                            bg-cover bg-no-repeat
                            -z-10
                            "
                        />
                        </span>
                    </h1>
                    <p className="mt-4 font-body text-[19px] h-10.5 w-114.5 text-dark-500">
                        At X35 Projects, we bring ideas to life with precision, purpose, and partnership.
                    </p>
                </div>
            </Container>
            <div className="relative mt-16 w-full aspect-[1.78] opacity-100">
                <Image src={aboutHero} alt="Hero" fill className="object-cover" priority />
            </div>
        </section>
    );
}
        