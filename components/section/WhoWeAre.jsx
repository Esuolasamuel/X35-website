import Container from "./Container";
import WhatsAppWidget from "./WhatsAppWidget";

export default function WhoWeAre() {
    return (
        <section className="bg-white">
            <div className="p-6 sm:p-7.5 md:p-15 lg:p-25 mx-auto">
                <div className="w-full max-w-380 h-auto flex flex-col lg:flex-row items-center gap-5 sm:gap-5 md:gap-10 lg:gap-20 justify-center mx-auto">
                    <div className="w-113.25 lg:justify-centre text-dark-500">
                        <h2 className="text-4xl md:text-5xl font-bold text-center lg:text-start font-heading text-dark-500">Who we are</h2>
                    </div>
                    <div className="max-w-xl space-y-8 lg:space-y-10 text-base lg:text-lg text-dark-500 font-body font-normal leading-relaxed tracking-[-0.03em] text-start">
                        <p>X35 Projects Ltd is one of Africa&apos;s dynamic and rapidly growing design and build company committed to delivering innovative solutions tailored to meet the unique needs of our clients. We have a core team of 7 professionals, and network of +10 consultant partners</p>
                        <p>With a passion for creativity and a focus on excellence, we bring fresh perspectives to every project, ensuring exceptional results from concept to completion.</p>
                        <p>Spaces we&apos;ve provided to our clients have led to significant internal brand transformations as our design solutions instill a sense of identity and facilitate alignment with their organizational objectives.</p>
                    </div>
                </div>
            </div>
            <WhatsAppWidget />
        </section>
    );
}