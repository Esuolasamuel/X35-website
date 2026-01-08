import Image from "next/image";

const testimonials = [
{
text: "A perfect blend of creativity and craftsmanship. The final result speaks for itself.",
author: "The Brooke Finance Ltd",
img: "/images/an-architect-working-on-blueprints-in-a-modern-off-2025-03-18-17-40-24-utc-1.png"
},
{
text: "They brought our ideas to life with elegance and precision an outstanding team.",
author: "Mr Rob",
img: "/images/an-architect-working-on-blueprints-in-a-modern-off-2025-03-18-17-40-24-utc-1.png"
},
{
text: "Their attention to detail and ability to understand our needs made the entire process smooth and enjoyable.",
author: "Chevron",
img: "/images/an-architect-working-on-blueprints-in-a-modern-off-2025-03-18-17-40-24-utc-1.png"
},
];


export default function Testimonials() {
    return (
        <section className="xl:p-24 lg:p-24 md:p-16 py-4 bg-white">
            <div className="max-w-7xl mx-auto px-0 sm:px-6">
                <h2 className="text-3xl font-heading font-bold text-center mb-12">What Our Clients Say</h2>
                <div className="grid md:grid-cols-3 gap-5">
                    {testimonials.map((t, i) => (
                        <div key={i} className="p-0 md:p-9 rounded-xl bg-white shadow-[0px_16px_32px_0px_#BDBDBD40] border border-[#0C0C1C0F]">
                            <p className="text-base font-medium font-body mb-4">“{t.text}”</p>
                            <span className="text-sm flex items-center justify-content font-medium font-body pt-4 text-neutral-500">
                               <div className="pr-3">
                                    <Image
                                    src={t.img}
                                    alt={t.author}
                                    width={40}
                                    height={40}
                                    className="rounded-full"
                                    />  
                               </div>
                                {t.author}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}