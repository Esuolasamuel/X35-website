import Image from "next/image";

const Narrative = ({description, ImageSrc, title, backgroundColor, textColor = " text-dark-500/80"}) => {
  return (
    /* Added 'group' to trigger the hover state for the entire section */
    <section className={` ${backgroundColor} group`}>
      <div className="p-3.5 sm:p-6 md:p-10 lg:p-15 xl:p-20 2xl:p-30 max-w-500 flex flex-col lg:flex-row items-center gap-8 sm:gap-12 md:gap-14 lg:gap-16 mx-auto">
        
        {/* LEFT TEXT SECTION */}
        <div className="w-full lg:w-5/12">
          <div className="font-body text-dark-500 font-normal text-[16px] sm:text-[17px]">
            {description.map((desc, index) => (
              <p
                key={index}
                className={`text-sm md:text-base lg:text-[17px] leading-[1.8] ${textColor} mb-6 sm:mb-8 last:mb-0 font-normal tracking-wide`}
              >
                {desc.paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE SECTION */}
        <div className="w-full lg:w-7/12">
          <div className="relative w-full aspect-615/594 sm:aspect-615/594 md:aspect-615/594 lg:aspect-615/594 sm:rounded-lg md:rounded-xl lg:rounded-2xl overflow-hidden bg-gray-800">
            {ImageSrc && (
              <Image
                src={ImageSrc}
                alt={title}
                fill
                sizes="(max-width: 576px) 100vw, (max-width: 768px) 100vw, (max-width: 992px) 100vw, (max-width: 1200px) 100vw, (max-width: 1400px) 100vw, 60vw"
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