import React from "react";
import Image from "next/image";

export default function ImageGrid({ images = [], backgroundColor, gridcol = "grid-col-[1fr_805px]"  }) {
  return (
    <section className={`w-full ${backgroundColor}`}>
      <div className="p-3.5 sm:p-7.5 md:p-15 lg:p-30">
         <div className={`grid grid-cols-1 ${gridcol} gap-6 overflow-hidden rounded-3xl`}>
        {images.map((i, index) => (
          <div
            key={index}
            /* Added 'group' and consistent transition properties */
            className={`
              relative rounded-xl
              group bg-gray-100 shadow-sm
            `}
          >
            <Image
              src={i.ImageSrc}
              alt={i.alt || "Gallery Image"}
              /* Added the scale transition */
              className="
                object-cover 
                transition-transform 
                duration-700 
                ease-in-out 
                group-hover:scale-110
                w-full
                h-full
              "
            />
            
            {/* Darkening overlay to match your other sections */}
            <div 
              className="
                absolute inset-0 
                bg-black/0 
                group-hover:bg-black/20 
                transition-colors 
                duration-500 
                pointer-events-none
              " 
            />
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}