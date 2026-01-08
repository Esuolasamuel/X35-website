import Image from "next/image";

const Narrative = ({description, ImageSrc, title, backgroundColor, textColor = "text-black/80"}) => {
  return (
    /* Added 'group' to trigger the hover state for the entire section */
    <section className={`${backgroundColor} xl:p-32 lg:p-24 md:p-16 p-4 group`}>
      <div className="mx-auto max-w-500 flex flex-col lg:flex-row items-center gap-14 lg:gap-16">
        
        {/* LEFT TEXT SECTION */}
        <div className="w-full lg:w-5/12">
          <div className="font-body font-normal text-[17px]">
            {description.map((desc, index) => (
              <p
                key={index}
                className={`text-[16px] lg:text-[17px] leading-[1.8] ${textColor} mb-8 last:mb-0 font-normal tracking-wide`}
              >
                {desc.paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE SECTION */}
        <div className="w-full lg:w-7/12">
          <div className="relative w-full aspect-4/3 lg:aspect-615/550 rounded-2xl overflow-hidden bg-gray-800">
            {ImageSrc && (
              <Image
                src={ImageSrc}
                alt={title}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                /* Added transition-transform and group-hover:scale-110 */
                className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                priority
              />
            )}
            {/* Added a subtle overlay that darkens slightly on hover to maintain design consistency */}
            <div className="absolute inset-0 bg-black/5 group-hover:bg-black/20 transition-colors duration-500 pointer-events-none" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Narrative;