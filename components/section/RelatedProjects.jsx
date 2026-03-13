import Image from "next/image";
import Link from "next/link";

const RelatedProjects = ({ projects = [], currentProjectId, limit = 2 }) => {
  // Filter and limit projects based on the provided data
  const relatedProjects = projects
    .filter((project) => project.id !== currentProjectId)
    .slice(0, limit);

  if (!relatedProjects.length) return null;

  return (
    /* py-[120px] matches your previous structural requirements for consistent spacing */
    <section className="bg-white">
      <div className="p-6 sm:p-6 md:p-10 lg:p-15 xl:p-20 2xl:p-30 mx-auto">

        {/* HEADER: Responsive layout matching Frame 115 (1).jpg */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 sm:mb-5 md:mb-10 gap-6">
          <h3 className="font-heading font-bold text-2xl md:text-3xl lg:text-[32px] text-[#0C0C1C] leading-tight">
            See more of our Projects
          </h3>

          <Link
            href="/Projects"
            className=" w-32.5 px-2 sm:px-4 py-1.5 border rounded-[30px] border-[#1A1A1A] hover:border-yellow-400 text-[6.5px] sm:text-[13px] font-semibold text-[#0C0C1C] hover:bg-yellow-400 hover:text-[#0C0C1C] transition-colors duration-300 "
          >
            View all project
          </Link>
        </div>

        {/* PROJECT GRID: Responsive 1 column on mobile, 2 columns on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-4">
          {relatedProjects.map((project) => (
            <Link
              key={project.id}
              href={`/Projects/${project.id}`}
              className="group relative block w-full aspect-592/300 rounded-lg sm:rounded-lg md:rounded-xl lg:rounded-2xl overflow-hidden bg-gray-100"
            >
              {/* Main Project Image */}
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 576px) 100vw, (max-width: 768px) 100vw, (max-width: 992px) 100vw, (max-width: 1200px) 100vw, (max-width: 1400px) 100vw, 600px"
              />

              {/* Gradient Overlay for Text Readability: Matches the dark bottom in screenshot */}
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-90 transition-opacity group-hover:opacity-100" />

              {/* Text Information: Aligned bottom-left per Frame 115 (1).jpg */}
              <div className="absolute bottom-4 sm:bottom-6 lg:bottom-10 left-4 sm:left-6 lg:left-10 text-white">
                <h4 className="font-heading font-bold text-base sm:text-lg lg:text-[28px] xl:text-[32px] mb-3">
                  {project.title}
                </h4>
                <p className="text-[12px] sm:text-[14px] lg:text-[16px] font-light opacity-90">
                  {project.category || "Commercial"}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedProjects;