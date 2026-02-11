import Image from "next/image";

// ✅ Static import works best when used via the .src property
import handdrawn from "@/assets/icons/Fill-4.svg";

const ProjectHero = () => {
  return (
    <section className="w-full mb-2 mt-5 sm:mb-4 sm:mt-8.5 md:mt-17 md:mb-7.5 lg:mt-33.75 lg:mb-15 px-6 sm:px-7.5 md:px-14 lg:px-14 text-center bg-white">
      <h1    
        className="
          font-heading drop-shadow-lg
          tracking-[-0.01em] font-bold
          leading-10 sm:leading-12.5 md:leading-15 lg:leading-[70.4px]
          text-4xl sm:text-5xl md:text-6xl lg:text-[72px]
          text-dark-500
        "
      >
        The Work That<br/>{" "}
        <span className="relative inline-block">
          Defines
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
        {" "}Us
      </h1>

      <p className="mt-6 pb-6 max-w-sm mx-auto font-body text-dark-500">
        A bold showcase of our projects transforming ideas into iconic spaces.
      </p>
    </section>
  );
};

export default ProjectHero;