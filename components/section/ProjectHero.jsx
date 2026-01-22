import Image from "next/image";

// ✅ Static import
import highlightSvg from "@/assets/images/Fill-4.svg";

const ProjectHero = () => {
  return (
    <section className=" pt-24 pb-4 text-center bg-white">
      <h1 className="text-5xl md:text-6xl mx-auto max-w-xl font-heading text-dark-500 leading-tight">
        The Work That{" "}
        <span className="relative inline-block">
          Defines
          {/* Highlight SVG */}
          <span className="absolute -left-4 -bottom-2 -z-10">
            <Image
              src={highlightSvg}
              alt=""
              aria-hidden="true"
              className="w-56 h-24"
              priority
            />
          </span>
        </span>{" "}
        Us
      </h1>

      <p className="mt-6 max-w-sm mx-auto font-body text-dark-500">
        A bold showcase of our projects transforming ideas into iconic spaces.
      </p>
    </section>
  );
};

export default ProjectHero;
