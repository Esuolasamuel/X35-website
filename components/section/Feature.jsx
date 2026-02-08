import Image from 'next/image';

const Feature = ({
  title, 
  textColor = "text-black/80", // Changed to white with opacity
  headerColor = "text-black",     // Changed to solid white
  imageSrc, 
  description, 
  backgroundColor = "bg-[#0B0B1A]", // Deep navy/black from Frame 110
  aspect = "aspect-[615/594]", 
  flex = "lg:flex-row", 
  orderL = "order-1", 
  orderR = "order-2"
}) => {
    return (
        <section className={`${backgroundColor} group transition-colors duration-500`}>
            <div className={`
                px-6 sm:px-7.5 md:px-15 lg:px-30
                max-w-360 flex flex-col ${flex} items-center mx-auto
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
                        
                        {/* LEFT TEXT SECTION */}
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

export default Feature;