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
    <section className="bg-white xl:p-24 lg:p-24 md:p-16 p-4">
      <div className="mx-auto max-w-450">
        
        {/* HEADER: Responsive layout matching Frame 115 (1).jpg */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <h3 className="font-serif font-bold text-[32px] lg:text-[42px] leading-tight text-[#1A1A1A]">
            See more of our Projects
          </h3>
          
          <Link 
            href="/Projects" 
            className="px-8 py-3 border border-[#1A1A1A] rounded-full text-[15px] font-bold hover:bg-[#1A1A1A] hover:text-white transition-colors duration-300"
          >
            View all project
          </Link>
        </div>

        {/* PROJECT GRID: Responsive 1 column on mobile, 2 columns on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {relatedProjects.map((project) => (
            <Link
              key={project.id}
              href={`/Projects/${project.id}`}
              className="group relative block w-full aspect-592/350 rounded-3xl lg:rounded-4xl overflow-hidden bg-gray-100"
            >
              {/* Main Project Image */}
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 1024px) 100vw, 600px"
              />

              {/* Gradient Overlay for Text Readability: Matches the dark bottom in screenshot */}
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-90 transition-opacity group-hover:opacity-100" />

              {/* Text Information: Aligned bottom-left per Frame 115 (1).jpg */}
              <div className="absolute bottom-6 lg:bottom-10 left-6 lg:left-10 text-white">
                <h4 className="font-serif font-bold text-[24px] lg:text-[32px] mb-1">
                  {project.title}
                </h4>
                <p className="text-[14px] lg:text-[16px] font-light opacity-90">
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