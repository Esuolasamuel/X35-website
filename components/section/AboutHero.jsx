import Image from "next/image";
import Container from "./Container";
import aboutHero from "@/assets/images/aboutHero.png";  



export default function AboutHero() {
    return (
        <section className="pt-28">
            <Container>
                <div className="text-center max-w-3xl mx-auto bg-white">
                    <h1    
                        className="
                        font-heading  drop-shadow-lg
                        tracking-[-0.01em]
                        leading-10 sm:leading-12.5 md:leading-15 lg:leading-[70.4px]
                        text-4xl sm:text-5xl md:text-6xl lg:text-[72px]
                        px-0 py-1
                        "
                        style={{ leadingTrim: 'cap-height' }}
                    >
                        Building trust, vision,<br />
                        and lasting{" "}
                        <span className="relative inline-block">
                        value.
                        <span
                            className="
                            absolute -left-1 sm:-left-2 md:-left-3 lg:-left-4 -bottom-1 sm:-bottom-1.5 md:-bottom-2 lg:-bottom-2
                            h-12 w-28 sm:h-16 sm:w-40 md:h-20 md:w-48 lg:h-24 lg:w-60
                            bg-[url(@/assets/icons/Fill-4.svg)]
                            bg-cover bg-no-repeat
                            -z-10
                            "
                        />
                        </span>
                    </h1>
                    <p className="mt-4 font-body text-dark-500">
                        At X35 Projects, we bring ideas to life with precision, purpose, and partnership.
                    </p>
                </div>
            </Container>
            <div className="relative mt-16 sm:h-[12.5vh] md:h-[25vh] h-[50vh] w-full">
                <Image src={aboutHero} alt="Hero" fill className="object-cover" priority />
            </div>
        </section>
    );
}
        