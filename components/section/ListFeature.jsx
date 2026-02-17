import Image from 'next/image';

const ListFeature = ({
  title,
  textColor = "text-black/80",
  headerColor = "text-black",
  imageSrc,
  description,
  summaries = [],
  backgroundColor = "bg-[#0B0B1A]",
  aspect = "aspect-[615/594]",
  lists = [],
  flex = "lg:flex-row",
  orderL = "order-1",
  orderR = "order-2",

  // ✅ NEW PROP
  imagePosition = "center"
}) => {

    // ✅ Position map
    const positionMap = {
        left: "object-left",
        center: "object-center",
        right: "object-right",
        top: "object-top",
        bottom: "object-bottom"
    };

    return (
        <section className={`${backgroundColor} group transition-colors duration-500`}>
            <div className={`
                px-6 py-16 mx-auto
                sm:px-10 sm:py-20 
                md:px-16 md:py-24 
                lg:px-24 lg:py-32 
                xl:px-40
                max-w-360 flex flex-col lg:flex-row ${flex} items-center gap-12 lg:gap-20
            `}>
                
                {/* LEFT TEXT */}
                <div className={`w-full lg:w-133 ${orderL}`}>
                    <h3 className={`
                        font-heading font-bold 
                        text-2xl md:text-3xl lg:text-[40px] 
                        leading-[1.1] mb-6 ${headerColor}
                    `}>
                        {title}
                    </h3>
                    
                    <p className={`
                        text-[15px] md:text-[16px] lg:text-[17px] 
                        leading-[1.6] font-body ${textColor} 
                        mb-8 font-normal tracking-wide
                    `}>
                        {description}
                    </p>

                    <ul className='font-body font-normal space-y-4'>
                        {lists.map((l, index) => (
                            <li key={index} className={`
                                flex items-start text-[15px] md:text-[16px] 
                                leading-[1.6] font-body ${textColor} 
                                tracking-wide
                            `}>
                                <span className="mr-3 mt-2.5 h-1 w-1 rounded-full bg-white/60 shrink-0" />
                                {l.paragraph}
                            </li>
                        ))}
                    </ul>

                    <div className='mt-10'>
                        {summaries.map((summary, index) => (
                            <p
                                key={index}
                                className={`mt-1 text-[16px] lg:text-[17px] leading-[1.6] font-body ${textColor} italic opacity-90`}
                            >
                                {summary.text}
                            </p>
                        ))}
                    </div>
                </div>

                {/* RIGHT IMAGE */}
                <div className={`w-full lg:w-153.75 ${orderR}`}>
                    <div className={`
                        relative w-full ${aspect}
                        rounded-lg sm:rounded-lg md:rounded-xl lg:rounded-2xl
                        overflow-hidden bg-[#1A1A2E]
                        shadow-2xl ring-1 ring-white/10
                    `}>
                        {imageSrc && (
                            <Image
                                src={imageSrc}
                                alt={title}
                                fill
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className={`
                                    object-cover
                                    ${imagePosition}
                                    transition-transform duration-1000 ease-out
                                    group-hover:scale-105
                                `}
                                priority
                            />
                        )}

                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-700 pointer-events-none" />
                    </div>
                </div>

            </div>
        </section>
    );
}

export default ListFeature;
