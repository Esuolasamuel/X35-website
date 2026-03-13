import Image from "next/image";

// ✅ Static import works best when used via the .src property
import handdrawn from "@/assets/icons/Fill-4.svg";

const ProjectHero = () => {
  return (
    <section className="w-full pt-21 pb-3 md:pb-10 md:pt-31 lg:pt-42 lg:pb-20 px-6 sm:px-7.5 md:px-14 lg:px-14 text-center bg-white">
      <h1    
        className="
          font-heading drop-shadow-lg
          tracking-[-0.01em] font-bold
          leading-10 sm:leading-12.5 md:leading-15 lg:leading-[70.4px]
          text-4xl sm:text-5xl md:text-6xl lg:text-[72px]
          text-[#0C0C1C]
        "
      >
        The Work That<br/>{" "}
        <span className="relative inline-block">
          Defines
          <span
            aria-hidden
            className="
              absolute
              inset-x-0 -bottom-4 -left-9 lg:-bottom-3 lg:-left-5 
              lg:w-[290.50px]
              lg:h-[115.23px] 
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
        {" "}Us
      </h1>

      <p className="mt-6 max-w-sm mx-auto font-body text-[#0C0C1C]">
        A bold showcase of our projects transforming ideas into iconic spaces.
      </p>
    </section>
  );
};

export default ProjectHero;