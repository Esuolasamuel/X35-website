import Container from "./Container";

export default function VisionMission() {
    return (
        <section className=" bg-white text-white">
            <Container>
                <div className="grid md:grid-cols-2 gap-4 xs:gap-5 sm:gap-6 md:gap-7 lg:gap-8 xl:gap-9 xxl:gap-10 xxxl:gap-11">
                    <div className="p-4 xs:p-5 sm:p-6 md:p-7 lg:p-8 xl:p-9 xxl:p-10 xxxl:p-11 w-full h-60 xs:h-65 sm:h-70 md:h-75 lg:h-80 xl:h-85 xxl:h-90 xxxl:h-95 rounded-xl bg-indigo-600">
                        <h3 className="font-heading text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl xxl:text-8xl xxxl:text-9xl leading-7 xs:leading-8 sm:leading-9 md:leading-10 lg:leading-11 xl:leading-12 xxl:leading-13 xxxl:leading-14">Our Vision</h3>
                        <p className="mt-2 xs:mt-3 sm:mt-4 md:mt-5 lg:mt-6 xl:mt-7 xxl:mt-8 xxxl:mt-9 text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl xxl:text-4xl xxxl:text-5xl text-white/80 font-body font-normal">To democratize architecture and interior within the design and build space for people worldwide.</p>
                    </div>
                    <div className="p-4 xs:p-5 sm:p-6 md:p-7 lg:p-8 xl:p-9 xxl:p-10 xxxl:p-11 w-full h-60 xs:h-65 sm:h-70 md:h-75 lg:h-80 xl:h-85 xxl:h-90 xxxl:h-95 rounded-xl bg-indigo-600">
                        <h3 className="font-heading text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl xxl:text-8xl xxxl:text-9xl leading-7 xs:leading-8 sm:leading-9 md:leading-10 lg:leading-11 xl:leading-12 xxl:leading-13 xxxl:leading-14">Our Mission</h3>
                        <p className="mt-2 xs:mt-3 sm:mt-4 md:mt-5 lg:mt-6 xl:mt-7 xxl:mt-8 xxxl:mt-9 text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl xxl:text-4xl xxxl:text-5xl text-white/80 font-body font-normal">To mobilize and enable highly creative individuals to
                        design and build impactful solutions for businesses and residences worldwide.</p>
                    </div>
                </div>
            </Container>
        </section>
    );
}