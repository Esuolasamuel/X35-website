import Image from 'next/image';

const ListFeature = ({
  title, 
  textColor = "text-black/80",
  headerColor = "text-black",
  ImageSrc, 
  description, 
  summary, 
  backgroundColor = "bg-[#e3f4ef]", 
  aspect="aspect-615/550", 
  lists=[], 
  flex="flex-row", 
  orderL, 
  orderR
}) => {
    return (
        /* Added 'group' to the section to trigger the image zoom */
        <section className={`${backgroundColor} xl:p-32 lg:p-24 md:p-16 p-4 group`}>
            <div className={`mx-auto max-w-500 flex flex-col lg:${flex} items-center gap-14 lg:gap-16`}>
                
                {/* LEFT TEXT SECTION */}
                <div className={`w-full lg:w-1/2 ${orderL}`}>
                    <div className="">
                        <h3 className={`font-heading font-bold text-4xl mb-4 ${headerColor}`}>{title}</h3>
                        <p className={`text-[16px] lg:text-[17px] leading-[1.8] font-body ${textColor} mb-4 last:mb-0 font-normal tracking-wide}`}>
                            {description}
                        </p>
                        <ul className='font-body-font-normal list-disc ml-5'>
                            {lists.map((l, index) => (
                                <li key={index} className={`text-[16px] lg:text-[17px] leading-[1.8] font-body ${textColor} mb-4 last:mb-0 font-normal tracking-wide}`}>
                                    {l.paragraph}
                                </li>
                            ))}
                        </ul>
                        {summary && (
                            <p className={`mt-8 text-[16px] lg:text-[17px] leading-[1.8] font-body ${textColor} mb-4 last:mb-0 font-normal tracking-wide}`}>
                                {summary}
                            </p>
                        )}
                    </div>
                </div>

                {/* RIGHT IMAGE SECTION */}
                <div className={`w-full lg:w-1/2 ${orderR}`}>
                    <div className={`relative w-full aspect-4/3 ${aspect} rounded-2xl overflow-hidden bg-gray-800 shadow-sm`}>
                        {ImageSrc && (
                            <Image
                                src={ImageSrc}
                                alt={title}
                                fill
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                /* Added transition and group-hover scale */
                                className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                                priority
                            />
                        )}
                        {/* Subtle darkening overlay on hover to maintain brand consistency */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 pointer-events-none" />
                    </div>
                </div>

            </div>
        </section>
    );
}

export default ListFeature;