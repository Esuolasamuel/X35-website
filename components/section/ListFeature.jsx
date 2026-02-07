import Image from 'next/image';

const ListFeature = ({
  title, 
  textColor = "text-black/80", // Changed to white with opacity
  headerColor = "text-black",     // Changed to solid white
  imageSrc, 
  description, 
  summary, 
  backgroundColor = "bg-[#0B0B1A]", // Deep navy/black from Frame 110
  aspect = "aspect-[615/594]", 
  lists = [], 
  flex = "lg:flex-row", 
  orderL = "order-1", 
  orderR = "order-2"
}) => {
    return (
        <section className={`${backgroundColor} group transition-colors duration-500`}>
            <div className={`
                px-6 py-16 
                sm:px-10 sm:py-20 
                md:px-16 md:py-24 
                lg:px-24 lg:py-32 
                xl:px-40
                max-w-360 flex flex-col ${flex} items-center gap-12 lg:gap-20 mx-auto
            `}>
                
                {/* LEFT TEXT SECTION */}
                <div className={`w-full lg:w-1/2 ${orderL}`}>
                    <div className="max-w-lg">
                        <h3 className={`
                            font-heading font-bold 
                            text-2xl md:text-4xl lg:text-[40px] 
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
                                    font-normal tracking-wide
                                `}>
                                    {/* Pixel-perfect custom bullet point */}
                                    <span className="mr-3 mt-2.5 h-1 w-1 rounded-full bg-white/60 shrink-0" />
                                    {l.paragraph}
                                </li>
                            ))}
                        </ul>

                        {summary && (
                            <p className={`mt-10 text-[16px] lg:text-[17px] leading-[1.6] font-body ${textColor} font-normal italic opacity-90`}>
                                {summary}
                            </p>
                        )}
                    </div>
                </div>

                {/* RIGHT IMAGE SECTION */}
                <div className={`w-full lg:w-1/2 ${orderR}`}>
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
                                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                                priority
                            />
                        )}
                        {/* Interactive overlay */}
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-700 pointer-events-none" />
                    </div>
                </div>

            </div>
        </section>
    );
}

export default ListFeature;