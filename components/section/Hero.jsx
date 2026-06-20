import Image from "next/image";

export default function Hero({
  imageSrc = "",
  title = "",
  altText = "",
}) {
  const heroimageSrc = imageSrc || "/images/hero-placeholder.jpg";
  const heroTitle = title || "X35 Projects";
  const imageAlt = altText || heroTitle;

  return (
    <section
      aria-label={heroTitle}
      /* STYLING LOGIC:
         - aspect-[1440/668]: Maintains your specific design ratio.
         - min-h: Prevents the hero from becoming a tiny sliver on small screens.
         - 375px (default): starts at 300px height.
      */
      className="relative block w-full aspect-1440/668 min-h-75 sm:min-h-112.5 md:min-h-137.5 lg:min-h-167 overflow-hidden"
    >
      {/* Background Image */}
      <Image
        src={heroimageSrc}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover -z-20"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 -z-10" aria-hidden="true" />

      {/* Content Container */}
      <div className="flex h-full w-full items-center justify-center px-4 md:px-6">
        <div className="relative text-center max-w-[90%] md:max-w-4xl">
          <h1 className="relative z-10 text-white font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[64px] leading-tight">
            {heroTitle}
          </h1>
          
          {/* DECORATIVE SVG (Yellow Highlight):
              - h-[40px] for mobile (375px)
              - h-[98.6px] for desktop (lg)
          */}
          <span 
            className="absolute left-1/2 -translate-x-1/2 -bottom-2 md:-bottom-4 block w-full h-10 sm:h-15 md:h-21.25 lg:h-[98.6px] bg-no-repeat bg-contain bg-center -z-10"
            style={{ backgroundImage: "url('/images/Fill-4.svg')" }}
          />
        </div>
      </div>
    </section>
  );
}