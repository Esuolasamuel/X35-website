import Image from "next/image";

// ✅ Static import works best when used via the .src property
import highlightSvg from "@/assets/images/Fill-4.svg";

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
            className="
              absolute -left-1 sm:-left-2 md:-left-3 lg:-left-4 -bottom-1 sm:-bottom-1.5 md:-bottom-2 lg:-bottom-2
              /* Using scale to ensure it fits the text responsivey */
              w-[110%] h-[120%]
              bg-contain bg-center bg-no-repeat
              -z-10
            "
            /* ✅ Fix: Use the .src from the import */
            style={{ backgroundImage: `url(${highlightSvg.src})` }}
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