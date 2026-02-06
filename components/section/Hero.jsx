import Image from "next/image";

export default function Hero({
  imageSrc = "", // Ensure this matches the prop name you pass in
  title = "",
}) {
  // Debugging: check your console to see if the props are actually arriving
  if (!imageSrc || !title) {
    console.warn("Hero Component: Missing imageSrc or title");
    return null;
  }

  return (
    <section
      aria-label={title}
      /* FIX: 'block' ensures it takes up width. 
         FIX: 'aspect-[1440/668]' only works if width is 100%.
      */
      className="relative block w-full aspect-[1440/668] min-h-[300px] overflow-hidden"
    >
      {/* Background Image */}
      <Image
        src={imageSrc}
        alt={title}
        fill
        priority
        sizes="100vw"
        className="object-cover -z-20"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 -z-10" aria-hidden="true" />

      {/* Content Container */}
      <div className="flex h-full w-full items-center justify-center px-4 md:px-6">
        <div className="relative text-center">
          <h1 className="relative z-10 text-white font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            {title}
          </h1>
          
          {/* FIX: 'h-[98.6px]' needs units. 
             'bg-contain' ensures the SVG shows up without being cut off.
          */}
          <span 
            className="absolute left-1/2 -translate-x-1/2 -bottom-4 w-full h-[60px] md:h-[98px] bg-no-repeat bg-contain bg-center -z-10"
            style={{ backgroundImage: "url('/images/Fill-4.svg')" }}
          />
        </div>
      </div>
    </section>
  );
}