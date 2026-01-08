import Image from 'next/image';

const MiniHero = ({ title, ImageSrc, description }) => {
    return (
        /* Added 'group' to trigger the hover effect for the whole section */
        <section className="xl:p-32 lg:p-24 md:p-16 p-0 bg-[#E3CEDE] group">
            <div className="mx-auto max-w-500 flex flex-col text-center items-center justify-center gap-18">
                
                {/* TEXT SECTION */}
                <div className="max-w-3xl">
                    <div className="w-full">
                        <h3 className="font-heading font-bold text-4xl mb-4">{title}</h3>
                        <p className="text-[16px] lg:text-2xl leading-[1.8] text-gray-500 mb-8 last:mb-0 font-body font-normal tracking-wide">
                            {description}
                        </p>
                    </div>
                </div>

                {/* IMAGE SECTION */}
                <div className="w-full">
                    <div className="relative w-full aspect-1200/700 overflow-hidden rounded-[40px] shadow-sm bg-gray-200">
                        <Image
                            src={ImageSrc}
                            alt={title}
                            fill
                            priority
                            /* Added transition and scale classes */
                            className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                            sizes="(max-width: 1280px) 100vw, 1200px"
                        />
                        
                        {/* Subtle darkening overlay to match the brand's premium feel */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-700 pointer-events-none" />
                    </div>
                </div>

            </div>
        </section>
    );
}

export default MiniHero;