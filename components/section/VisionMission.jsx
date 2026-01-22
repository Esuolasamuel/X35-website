import Container from "./Container";

export default function VisionMission() {
    return (
        <section className="p-3.5 sm:p-7.5 md:p-15 lg:p-30 bg-slate-900 text-white">
            <Container>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="p-6 md:p-12 lg:p-20 rounded-xl bg-slate-800">
                        <h3 className="font-heading  text-4xl leading-9">Our Vision</h3>
                        <p className="mt-4 text-slate-300 font-body    font-normal">To democratize architecture and interior within the design and build space for people worldwide.</p>
                    </div>
                    <div className="p-6 md:p-12 lg:p-20 rounded-xl bg-slate-800">
                        <h3 className="font-heading  text-4xl leading-9">Our Mission</h3>
                        <p className="mt-4 text-slate-300 font-body    font-normal">To mobilize and enable highly creative individuals to
                        design and build impactful solutions for businesses and residences worldwide.</p>
                    </div>
                </div>
            </Container>
        </section>
    );
}