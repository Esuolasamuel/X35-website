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
                        font-bold
                        text-[64px]
                        leading-16
                        tracking-[-3%]
                        text-center
                        px-0 mb-4
                        "
                        style={{ leadingTrim: 'CAP_HEIGHT' }}
                    >
                        Building trust, vision,<br />
                        and lasting{" "}
                        <span className="relative inline-block">
                        value.
                        <span
                            className="
                            absolute -right-1 sm:-right-2 md:-right-3 lg:-right-4 -top-1 sm:-top-1.5 md:-top-2 lg:-top-2
                            h-26.5 w-66.29 sm:h-16 sm:w-40 md:h-20 md:w-48 lg:h-24 lg:w-60
                            bg-[url(@/assets/icons/Fill-4.svg)]
                            bg-cover bg-no-repeat
                            -z-10
                            "
                        />
                        </span>
                    </h1>
                    <p className="mt-4 font-body font-normal text-[19px] leading-[28.5px] tracking-[-3%] text-center h-10.5 w-114.5 text-dark-500" style={{ leadingTrim: 'CAP_HEIGHT' }}>
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