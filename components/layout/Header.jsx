import Image from "next/image";

export default function Hero({
  imageSrc = "", 
  title = "",
}) {
  if (!imageSrc || !title) return null;

  return (
    <section
      aria-label={title}
      /* 1. aspect-[1440/668] sets the ratio.
         2. min-h-[400px] prevents it from being too short on small phones.
      */
      className="relative w-full aspect-1440/668 min-h-100 overflow-hidden flex items-center justify-center"
    >
      {/* Background Image */}
      <div className="absolute inset-0 -z-20">
        <Image
          src={imageSrc}
          alt={title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Overlay */}
      <div aria-hidden="true" className="absolute inset-0 bg-black/40 -z-10" />

      {/* Content */}
      <div className="relative z-10 px-4 text-center">
        <div className="relative inline-block">
          <h1 className="text-white font-heading font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            {title}
          </h1>
          
          {/* Decorative SVG - Adjusted for better scaling */}
          <span 
            className="absolute left-0 -bottom-2 h-5 md:h-7.5 w-full bg-no-repeat bg-contain bg-center -z-10"
            style={{ backgroundImage: "url('/images/Fill-4.svg')" }}
          />
        </div>
      </div>
    </section>
  );
}