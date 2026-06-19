import Image from "next/image";
import Container from "./Container";

export default function Values({ values }) {
  return (
    <section className="bg-white">
      <Container>
        <h2 className="text-2xl md:text-3xl lg:text-[48px] font-bold font-heading text-center text-[#0C0C1C] mb-4 lg:mb-14">Our Values</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {values?.map((v) => (
            /* Added 'group' class to the card container */
            <div
              key={v.title}
              className="group bg-yellow-600 font-body font-normal text-[#0C0C1C] rounded-lg sm:rounded-lg md:rounded-xl lg:rounded-2xl py-6.5 md:py-12 px-6 md:px-10 transition-all duration-500 hover:shadow-lg"
            >
              <div className="w-full mb-4">
                <Image
                  src={v.img}
                  alt={v.title}
                  width={40}
                  height={40}
                  /* Added transition and scale effect to the icon */
                  className="transition-transform duration-500 ease-in-out group-hover:scale-125"
                />
              </div>
              <h4 className="font-bold font-heading text-[#0C0C1C] text-base md:text-lg lg:text-xl leading-8 mb-4">{v.title}</h4>
              <p className="text-sm md:text-base lg:text-base font-body mb-0 leading-6 text-[#0C0C1C] font-normal">{v.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section> 
  );
}