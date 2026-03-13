import Image from "next/image";

const Narrative = ({description, imageSrc, title, backgroundColor, textColor = " text-[#0C0C1C]/80",  // ✅ NEW PROP
  imagePosition = "center"}) => {
   // ✅ Position map
    const positionMap = {
        left: "object-left",
        center: "object-center",
        right: "object-right",
        top: "object-top",
        bottom: "object-bottom"
    };
  return (
    /* Added 'group' to trigger the hover state for the entire section */
    <section className={` ${backgroundColor} group transition-colors duration-500`}>
      <div className="p-7.5 mx-auto
                sm:p-7.5
                md:p-15 
                lg:p-30 
                max-w-360 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        
        {/* LEFT TEXT SECTION */}
        <div className="w-full lg:w-126" >
          <div className="font-body text-[#0C0C1C] font-normal text-[16px] items-center justify-center sm:text-[17px]">
            {description.map((desc, index) => (
              <p
                key={index}
                className={`text-[15px] md:text-[16px] lg:text-[17px] 
                            leading-[1.6] font-body ${textColor} 
                            mb-8 font-normal tracking-wide`}
              >
                {desc.paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE SECTION */}
        <div className="w-full lg:w-153.75">
          <div className="relative w-full aspect-615/594 rounded-lg sm:rounded-lg md:rounded-xl lg:rounded-2xl overflow-hidden bg-gray-800">
            {imageSrc && (
              <Image
                src={imageSrc}
                alt={title}
                fill
                sizes="(max-width: 576px) 100vw, (max-width: 768px) 100vw, (max-width: 992px) 100vw, (max-width: 1200px) 100vw, (max-width: 1400px) 100vw, 60vw"
                /* Added transition-transform and group-hover:scale-110 */
                className={`object-cover transition-transform  ${imagePosition} duration-700 ease-in-out group-hover:scale-110`}
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