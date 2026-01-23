import Container from "./Container";


export default function WhoWeAre() {
    return (
        <section className=" bg-white">
            <Container>
                <div className="grid md:grid-cols-2 gap-12 items-start">
                    <div className="w-full h-full flex items-center">
                        <h2 className="text-3xl text-center font-heading">Who we are</h2>
                    </div>
                    <div className="space-y-4 text-slate-600 font-body font-normal leading-relaxed tracking-[-0.03em]">
                        <p>X35 Projects Ltd is one of Africa’s dynamic and rapidly growing design and build company committed to delivering innovative solutions tailored to meet the unique needs of our clients. We have a core team of 7 professionals, and network of +10 consultant partners</p>
                        <p>With a passion for creativity and a focus on excellence, we bring fresh perspectives to every project, ensuring exceptional results from concept to completion.</p>
                        <p>Spaces we&apos;ve provided to our clients have led to significant internal brand transformations as our design solutions instill a sense of identity and facilitate alignment with their organizational objectives.</p>
                    </div>
                </div>
            </Container>
        </section>
    );
}