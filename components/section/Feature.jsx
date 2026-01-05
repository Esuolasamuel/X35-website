import Image from "next/image";

const Feature = ({
  textColor = "text-black/80",
  headerColor = "text-black",
  title,
  ImageSrc,
  description,
  backgroundColor = "bg-[#e3f4ef]",
  aspect = "aspect-[615/550]",
  flex = "xl:flex-row",
  orderL = "order-1",
  orderR = "order-2",
}) => {
  return (
    /* Added 'group' here so the hover is triggered when the section is entered */
    <section className={`${backgroundColor} xl:p-32 lg:p-24 md:p-16 p-8 group`}>
      <div
        className={`
          mx-auto max-w-8xl
          flex flex-col ${flex}
          items-center gap-12 xl:gap-16
        `}
      >
        {/* LEFT TEXT SECTION */}
        <div className={`w-full xl:w-1/2 ${orderL}`}>
          <h3 className={`mb-4 text-3xl md:text-4xl font-heading font-bold ${headerColor}`}>
            {title}
          </h3>

          {description.map((desc, index) => (
            <p
              key={index}
              className={`mb-6 last:mb-0 text-[16px] font-body font-normal md:text-[17px] leading-relaxed ${textColor} tracking-wide`}
            >
              {desc.paragraph}
            </p>
          ))}
        </div>

        {/* RIGHT IMAGE SECTION */}
        <div className={`w-full xl:w-1/2 ${orderR}`}>
          <div
            className={`
              relative w-full
              ${aspect}
              max-w-153.75
              mx-auto
              overflow-hidden rounded-2xl bg-gray-800
            `}
          >
            {ImageSrc && (
              <Image
                src={ImageSrc}
                alt={title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 80vw, 615px"
                /* Added transition classes and group-hover scale */
                className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                priority
              />
            )}
            
            {/* Added a subtle overlay that darkens slightly on hover to match the ProjectGrid style */}
            <div className="absolute inset-0 bg-black/5 group-hover:bg-black/20 transition-colors duration-500 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;