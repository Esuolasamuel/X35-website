import Image from "next/image";
import Container from "./Container";

export default function Values({ values }) {
  return (
    <section className="xl:p-24 lg:p-24 md:p-16 py-4 bg-white">
      <Container>
        <h2 className="text-center text-3xl font-heading font-bold mb-12">Our Values</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {values.map((v) => (
            /* Added 'group' class to the card container */
            <div
              key={v.title}
              className="group bg-yellow-400 font-body font-normal rounded-xl py-8 md:py-14 px-6 md:px-10 transition-all duration-500 hover:shadow-lg"
            >
              <div className="overflow-hidden w-fit mb-4">
                <Image
                  src={v.img}
                  alt={v.title}
                  width={40}
                  height={40}
                  /* Added transition and scale effect to the icon */
                  className="transition-transform duration-500 ease-in-out group-hover:scale-125"
                />
              </div>
              <h4 className="font-semibold font-heading text-xl leading-8 mb-2">{v.title}</h4>
              <p className="text-sm font-body font-normal">{v.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}