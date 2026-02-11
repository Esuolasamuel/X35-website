import Image from "next/image";
import React from "react";


const ImageGrid = ({
  imageA,
  imageB,
  reverse = false,
}) => {
  return (
    <section className="w-full px-2 md:px-15 py-5 md:py-10 bg-white">
      <div
        className={`
          flex flex-col md:flex-row
          gap-4
          ${reverse ? "md:flex-row-reverse" : ""}
        `}
      >
        {/* Smaller Image */}
        <div className="w-full md:w-[38.6%] aspect-506/582 overflow-hidden rounded-lg sm:rounded-lg md:rounded-xl lg:rounded-2xl">
          <Image
            src={imageA}
            alt="Feature detail"
            loading="lazy"
            sizes="(min-width: 768px) 40vw, 100vw"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Larger Image */}
        <div className="w-full md:w-[61.4%] aspect-805/582 overflow-hidden rounded-lg sm:rounded-lg md:rounded-xl lg:rounded-2xl">
          <Image
            src={imageB}
            alt="Feature main"
            loading="lazy"
            sizes="(min-width: 768px) 60vw, 100vw"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default ImageGrid;
