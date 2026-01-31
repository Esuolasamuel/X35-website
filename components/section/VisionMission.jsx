import Container from "./Container";

export default function VisionMission() {
    return (
        <section className=" bg-white text-white">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-4 md:gap-4 lg:gap-6 xl:gap-6 2xl:gap-6">
                    <div className="p-4 sm:p-4 md:p-5 lg:p-6 xl:p-6 2xl:p-6  w-full rounded-xl bg-indigo-600">
                        <h3 className="font-heading text-2xl  sm:text-2xl md:text-3xl lg:text-4x xl:text-4x 2xl:text-4xl  leading-7  sm:leading-6 md:leading-7 lg:leading-8 xl:leading-8 2xl:leading-8  ">Our Vision</h3>
                        <p className="mt-2 sm:mt-4 md:mt-5 lg:mt-6 xl:mt-6 2xl:mt-6  text-sm sm:text-sm md:text-sm lg:text-base xl:text-base 2xl:text-base  text-white/80 font-body font-normal">To democratize architecture and interior within the design and build space for people worldwide.</p>
                    </div>
                    <div className="p-4 sm:p-4 md:p-5 lg:p-6 xl:p-6 2xl:p-6  w-full rounded-xl bg-indigo-600">
                        <h3 className="font-heading text-2xl  sm:text-2xl md:text-3xl lg:text-4x xl:text-4x 2xl:text-4xl  leading-7  sm:leading-6 md:leading-7 lg:leading-8 xl:leading-8 2xl:leading-8 ">Our Mission</h3>
                        <p className="mt-2 sm:mt-4 md:mt-5 lg:mt-6 xl:mt-6 2xl:mt-6  text-sm sm:text-sm md:text-sm lg:text-base xl:text-base 2xl:text-base  text-white/80 font-body font-normal">To mobilize and enable highly creative individuals to
                        design and build impactful solutions for businesses and residences worldwide.</p>
                    </div>
                </div>
            </Container>
        </section>
    );
}