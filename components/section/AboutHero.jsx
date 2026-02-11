import Image from "next/image";
import React from "react";
import aboutHero from "@/assets/images/aboutHero.png"; // Adjust the path as needed
import handdrawn from "@/assets/icons/Fill-4.svg";

export default function AboutHero() {
  return (
    <div className="w-full flex flex-col bg-white -z-20">
        <div className="z-30 pt-42 pb-20">
          <h1 className="
            font-heading
            font-bold
            text-center
            text-dark-500
            text-4xl sm:text-5xl md:text-6xl lg:text-[64px]
            leading-tight sm:leading-16
            tracking-tight sm:tracking-[-0.03em]
            [leading-trim:cap-height]
            z-20 pb-2 sm:pb-3 md:pb-4 lg:pb-5
          ">
            Building trust, vision,<br />
            and lasting{" "}
            <span className="relative inline-block">
              value.
               <span
                  aria-hidden
                  className="
                    absolute
                    inset-x-0 -bottom-4 -left-9 lg:-bottom-8 lg:-left-22
                    lg:w-[269.50px]
                    lg:h-[108.23px] 
                    md:w-[181.43px]
                    md:h-[72.83px]
                    w-[151.43px]
                    h-[72.83px]
                    bg-no-repeat
                    bg-contain
                    bg-center
                    -rotate-[2.31deg]
                    -z-10      /* subtle Figma rotation */
                  "
                  style={{
                    backgroundImage: `url(${handdrawn.src})`,
                  }}
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


      <div className="aspect-1440/750 min-h-100 relative px-6 sm:px-7.5 md:px-15 lg:px-30">
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