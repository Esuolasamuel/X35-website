import Image from "next/image";
import React from "react";
import aboutHero from "@/assets/images/aboutHero.png"; // Adjust the path as needed

export default function AboutHero() {
  return (
    <div className="w-full flex flex-col bg-white -z-20">
        <div className="mb-2 mt-5 sm:mb-4 sm:mt-8.5 md:mt-17 md:mb-7.5 lg:mt-33.75 lg:mb-15 px-6 sm:px-7.5 md:px-15 lg:px-30">
          <h1 className="
            font-heading
            font-bold
            text-center
            text-dark-500
            text-4xl sm:text-5xl md:text-6xl lg:text-[64px]
            leading-tight sm:leading-16
            tracking-tight sm:tracking-[-0.03em]
            [leading-trim:cap-height]
            z-20 pb-4 sm:pb-6 md:pb-8 lg:pb-12
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
                  -z-10 
                "
              />
            </span>
          </h1>
          
          <p className="
            font-body
            font-normal
            text-center
            text-base sm:text-lg md:text-[17px]
            leading-relaxed sm:leading-[28.5px]
            tracking-tight sm:tracking-[-0.03em]
            [leading-trim:cap-height] text-dark-500
          ">
            At X35 Projects, we bring ideas to life with<br />
            precision, purpose, and partnership.
          </p>
        </div>


      <div className="aspect-1487/780 min-h-100 relative">
        <Image
          src={aboutHero}
          alt="X35 Projects - Building trust, vision, and lasting value"
          className="object-cover shadow-lg"
          fill
          priority
        />
      </div>
    </div>
  );
}