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
    <section className="bg-white">
      <div
        className="
          max-w-360
          mx-auto
          p-3.5 sm:p-7.5 md:p-15 lg:p-30
          flex flex-col
         gap-3.5 sm:gap-3.5 md:gap-7 lg:gap-14
        "
      >
        {/* Heading */}
        <h2 className=" text-2xl md:text-4xl lg:text-[40px] leading-[1.1] font-heading font-bold text-dark-500 text-center">
          What Our Clients Say
        </h2>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3.5 sm:gap-3.5 md:gap-7 lg:gap-14">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="
                p-3 sm:p-4 md:p-6 lg:p-10
                rounded-2xl
                bg-white
                border border-[#0C0C1C0F]
               sm:shadow-lg lg:shadow-[0px_16px_32px_0px_#BDBDBD40]
                flex flex-col
                justify-between
              "
            >
              <p className="text-base leading-7 font-body font-medium text-dark-500">
                “{t.text}”
              </p>

              <div className="flex items-center gap-3 pt-6">
                <Image
                  src={t.img}
                  alt={t.author}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <span className="text-sm font-body font-medium text-dark-500">
                  {t.author}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
