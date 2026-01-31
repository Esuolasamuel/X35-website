import Image from "next/image";
import React from "react";
import aboutHero from "@/assets/images/aboutHero.png"; // Adjust the path as needed

export default function AboutHero() {
  return (
    <div className="w-full p-3.5 sm:p-7.5 md:p-14 lg:p-14 mt-16 flex flex-col gap-6 sm:gap-8 bg-white">
        <h1 className="
          font-heading
          font-bold
          text-center
          text-4xl sm:text-5xl md:text-6xl lg:text-[64px]
          leading-tight sm:leading-16
          tracking-tight sm:tracking-[-0.03em]
          [leading-trim:cap-height]
          z-40
        ">
          Building trust, vision,<br />
          and lasting{" "}
          <span className="relative inline-block">
            value.
            <span
              className="
                absolute -right-1 sm:-right-2 md:-right-3 lg:-right-4 -top-1 sm:-top-1.5 md:-top-2 lg:-top-2
                h-26.5 w-66.29 sm:h-16 sm:w-40 md:h-20 md:w-48 lg:h-24 lg:w-60
                bg-[url(@/assets/icons/Fill-4.svg)]
                bg-cover bg-no-repeat
                z-30
              "
            />
          </span>
        </h1>
        
        <p className="
          font-body
          font-normal
          text-center
          text-base sm:text-lg md:text-[19px]
          leading-relaxed sm:leading-[28.5px]
          tracking-tight sm:tracking-[-0.03em]
          [leading-trim:cap-height]
        ">
          At X35 Projects, we bring ideas to life with<br />
          precision, purpose, and partnership.
        </p>


      <div className="aspect-1487/836 relative">
        <Image
          src={aboutHero}
          alt="X35 Projects - Building trust, vision, and lasting value"
          className="object-cover rounded-lg shadow-lg"
          fill
          priority
        />
      </div>
    </div>
  );
}