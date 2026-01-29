import React from "react";
import Image from "next/image";

export default function ImageGrid({ 
  images = [], 
  backgroundColor = "bg-white",
  orders = ["lg:order-1", "lg:order-2"], // Array of order classes for each image
  widths = ["lg:w-[506px]", "lg:w-[805px]"] // Array of width classes for each image
}) {
  return (
    <section className={`w-full ${backgroundColor}`}>
      <div className="p-3.5 sm:p-7.5 md:p-14 lg:p-14">
        <div className={`
          grid
          grid-cols-1
          lg:grid-cols-[1fr_805px]
          gap-4
          h-30
          xs:h-[140px]
          sm:h-40
          md:h-50
          lg:h-60
          xl:h-70
          xxl:h-[320px]
          xxxl:h-[360px]
          overflow-hidden
          rounded-3xl
        `}>
          {images.map((image, index) => (
            <div
              key={index}
              className={`
                relative
                group
                bg-gray-100
                shadow-sm
                h-full
                ${widths[index] || ''}
                ${orders[index] || ''}
              `}
            >
              <Image
                src={image.src}
                alt={image.alt || "Gallery Image"}
                fill={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="
                  object-cover
                  transition-transform
                  duration-700
                  ease-in-out
                  group-hover:scale-110
                "
              />
              
              <div 
                className="
                  absolute 
                  inset-0 
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