import Container from "./Container";

export default function WhoWeAre() {
    return (
        <section className="bg-white">
            <Container>
                <div className="w-full max-w-360 h-auto flex flex-col lg:flex-row gap-10 lg:gap-20 mx-auto">
                    <div className="w-full lg:w-1/2 h-full flex items-center justify-center lg:justify-start">
                        <h2 className="text-4xl md:text-5xl font-bold text-center lg:text-left font-heading">Who we are</h2>
                    </div>
                    <div className="w-full lg:w-1/2 space-y-6 lg:space-y-8 text-base lg:text-lg text-dark-500 font-body font-normal leading-relaxed tracking-[-0.03em] text-start">
                        <p>X35 Projects Ltd is one of Africa&apos;s dynamic and rapidly growing design and build company committed to delivering innovative solutions tailored to meet the unique needs of our clients. We have a core team of 7 professionals, and network of +10 consultant partners</p>
                        <p>With a passion for creativity and a focus on excellence, we bring fresh perspectives to every project, ensuring exceptional results from concept to completion.</p>
                        <p>Spaces we&apos;ve provided to our clients have led to significant internal brand transformations as our design solutions instill a sense of identity and facilitate alignment with their organizational objectives.</p>
                    </div>
                </div>
            </Container>
        </section>
    );
}