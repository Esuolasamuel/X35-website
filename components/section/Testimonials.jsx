import Image from "next/image";

import customer from "@/assets/images/Frame-54.png";

const testimonials = [
{
text: "A perfect blend of creativity and craftsmanship. The final result speaks for itself.",
author: "Chevron",
img: customer,
},
{
text: "Arc. Feyi and his team took my dream of a modern home and made it a reality. They transformed an old 2 bedroom block into a stunning 4-bedroom duplex with all rooms en-suite, on time and budget. The X35 team was professional, dependable, and truly collaborative.",
author: "Mr. Akinola Akinwole",
img: customer,
},
{
text: "Their attention to detail and ability to understand our needs made the entire process smooth and enjoyable.",
author: "The Brook Finance Ltd",
img: customer,
},
];


export default function Testimonials() {
    return (
        <section className=" p-7.5 sm:p-15 md:p-20 lg:p-25 xl:p-30 2xl:p-30 mx-auto bg-white">

                <h2 className=" text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[40px] font-heading font-bold text-dark-500 text-center mb-12">What Our Clients Say</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-7 xl:gap-8 2xl:gap-9">
                    {testimonials.map((t, i) => (
                        <div key={i} className="sm:p-4 md:p-8 xl:p-10 text-dark-500 rounded-xl md:bg-white md:shadow-[0px_16px_32px_0px_#BDBDBD40] border border-[#0C0C1C0F]">
                            <p className="text-base font-medium font-body mb-4">“{t.text}”</p>
                            <span className="text-sm flex justify-content font-medium font-body pt-4 ">
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
        </section>
    );
}