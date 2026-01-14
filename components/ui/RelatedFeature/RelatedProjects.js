// components/projects/RelatedProjects.tsx

import Image from 'next/image';
import Link from 'next/link';
import { selectRelatedProjects } from './Selector';

export default function RelatedProjects({
  currentProjectId,
  category,
  limit = 2,
  title = 'See more of our Projects',
}) {
  const projects = selectRelatedProjects({
    exclude: currentProjectId ? [currentProjectId] : [],
    category,
    limit,
  });

  if (!projects.length) return null;

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <h2 className="font-serif text-2xl">{title}</h2>

          <Link
            href="/projects"
            className="rounded-full border border-neutral-900 px-5 py-2 text-sm hover:bg-neutral-900 hover:text-white transition"
          >
            View all project
          </Link>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={project.href}
              className="group relative h-65 overflow-hidden rounded-2xl"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/30" />

              <div className="absolute bottom-6 left-6 text-white">
                <p className="font-serif text-lg">{project.title}</p>
                <span className="text-sm opacity-80">
                  {project.category}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
