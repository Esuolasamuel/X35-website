import Image from "next/image";
import aboutHero from "@/assets/images/x35-architecture-firm-about-hero-lagos.png";
import handdrawn from "@/assets/icons/Fill-4.svg";

export default function AboutHero() {
  return (
    <div className="w-full flex flex-col bg-white -z-20">
        <div className="z-30 pt-28 sm:pt-32 md:pt-36 lg:pt-42 pb-10 sm:pb-14 md:pb-16 lg:pb-20 max-w-208.5 mx-auto px-6 sm:px-8 md:px-12 text-center">
          <h1 className="
            font-heading
            font-bold
            text-center
            text-[#0C0C1C]
            text-4xl sm:text-5xl md:text-6xl lg:text-[64px]
            leading-tight sm:leading-16
            tracking-tight sm:tracking-[-0.03em]
            [leading-trim:cap-height]
            z-20 pb-2 sm:pb-3 md:pb-4 lg:pb-5
          ">
            Where vision meets <br />
            structure, and structure 
            protects{" "}
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
            max-w-143.5
            mx-auto
            text-base sm:text-lg md:text-[17px]
            leading-relaxed sm:leading-[28.5px]
            tracking-tight sm:tracking-[-0.03em]
            [leading-trim:cap-height] text-[#0C0C1C]
          ">
            At X35 Projects, we deliver fully managed design and build solutions for clients who expect clarity, control, and exceptional results.
          </p>
        </div>


      <div className="aspect-1440/750 min-h-56 sm:min-h-72 md:min-h-100 relative">
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