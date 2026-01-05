import Image from "next/image";
import Container from "./Container";



export default function AboutHero() {
    return (
        <section className="pt-28">
            <Container>
                <div className="text-center max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-heading font-bold text-slate-900">
                    Building trust, vision,<br /> and lasting value.
                    </h1>
                    <p className="mt-4 font-body text-slate-600">
                    At X35 Projects, we bring ideas to life with precision, purpose, and partnership.
                    </p>
                </div>
            </Container>
            <div className="relative mt-16 h-[60vh]">
                <Image src="/images/aboutHero.png" alt="Hero" fill className="object-cover" priority />
            </div>
        </section>
    );
}