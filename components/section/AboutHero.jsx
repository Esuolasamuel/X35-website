import Image from "next/image";
import Container from "./Container";
import aboutHero from "@/assets/images/aboutHero.png"; 
// ✅ Static import
import highlightSvg from "@/assets/images/Fill-4.svg"; 



export default function AboutHero() {
    return (
        <section className="pt-28">
            <Container>
                <div className="text-center max-w-3xl mx-auto bg-white">
                    <h1 className="text-5xl md:text-6xl mx-auto max-w-xl font-heading text-dark-500 leading-tight">
                           Building trust, vision,<br /> and lasting{" "}
                            <span className="relative inline-block">
                              value.
                              {/* Highlight SVG */}
                              <span className="absolute -left-4 -bottom-2 -z-10">
                                <Image
                                  src={highlightSvg}
                                  alt=""
                                  aria-hidden="true"
                                  className="w-56 h-24"
                                  priority
                                />
                              </span>
                            </span>{" "}
                          </h1>
                    <p className="mt-4 font-body text-dark-500">
                        At X35 Projects, we bring ideas to life with precision, purpose, and partnership.
                    </p>
                </div>
            </Container>
            <div className="relative mt-16 sm:h-12.5vh md:h-25vh h-50vh w-full">
                <Image src={aboutHero} alt="Hero" fill className="object-cover" priority />
            </div>
        </section>
    );
}