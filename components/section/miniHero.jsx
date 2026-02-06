import Image from 'next/image';

const MiniHero = ({ title, imageSrc, description }) => {
    return (
        /* Added 'group' to trigger the hover effect for the whole section */
        <section className="bg-[#E3CEDE] group">
            <div className="mx-auto p-6 sm:p-7.5 md:p-15 lg:p-30 flex flex-col text-center items-center justify-center gap-18">
                
                {/* TEXT SECTION */}
                <div className="max-w-3xl">
                    <div className="w-full">
                        <h3 className="font-heading font-bold text-dark-500 sm:text-xl md:text-2xl lg:text-4xl mb-4">{title}</h3>
                        <p className="md:text-sm lg:text-base leading-[1.8] mb-8 last:mb-0 font-body text-dark-500 font-normal tracking-wide">
                            {description}
                        </p>
                    </div>
                </div>

                {/* IMAGE SECTION */}
                <div className="w-full">
                    <div className="relative w-full aspect-1200/700 overflow-hidden rounded-sm md:rounded-md lg:rounded-lg shadow-2xl bg-gray-200">
                        <Image
                            src={imageSrc}
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