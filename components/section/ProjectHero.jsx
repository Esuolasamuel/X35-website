import Image from "next/image";

// ✅ Static import
import highlightSvg from "@/assets/images/Fill-4.svg";

const ProjectHero = () => {
  return (
    <section className=" pt-24 pb-4 text-center bg-white">
          <h1    
            className="
              font-heading  drop-shadow-lg
              tracking-[-0.01em]
              leading-10 sm:leading-12.5 md:leading-15 lg:leading-[70.4px]
              text-4xl sm:text-5xl md:text-6xl lg:text-[72px]
              px-0 py-1
            "
            style={{ leadingTrim: 'cap-height' }}
          >
            The Work That{" "}
            <span className="relative inline-block">
              Defines
              <span
                className="
                  absolute -left-1 sm:-left-2 md:-left-3 lg:-left-4 -bottom-1 sm:-bottom-1.5 md:-bottom-2 lg:-bottom-2
                  h-12 w-28 sm:h-16 sm:w-40 md:h-20 md:w-48 lg:h-24 lg:w-60
                  bg-[url(@/assets/icons/Fill-4.svg)]
                  bg-cover bg-no-repeat
                  -z-10
                "
              />
            </span>
            Us
          </h1>

      <p className="mt-6 max-w-sm mx-auto font-body text-dark-500">
        A bold showcase of our projects transforming ideas into iconic spaces.
      </p>
    </section>
  );
};

export default ProjectHero;

          
