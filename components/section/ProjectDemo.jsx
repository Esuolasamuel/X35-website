"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import arrowrigth from"@/assets/icons/arrow-right.svg";





export default function ProjectDemo({ projects }) {
  if (!projects || projects.length === 0) return null;

  return (
    <section className="bg-white p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 2xl:p-14 mx-auto max-w-7xl">
      <div className="flex flex-col gap-20">

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl 2xl:text-5xl text-center font-bold text-dark-500 font-heading">
          Our Latest Projects
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3 md:gap-4">
          {projects.map((p) => (
            <Link
              key={p.slug}
              href={`/Projects/${p.slug}`}
              className="group block"
            >
              <div className="relative h-48 sm:h-52 md:h-56 lg:h-60 xl:h-64 2xl:h-68 rounded-xl overflow-hidden">
                <Image
                  src={p.img}
                  alt={p.title}
                  fill
                  sizes="(max-width: 375px) 100vw, (max-width: 576px) 50vw, (max-width: 768px) 50vw, (max-width: 992px) 33vw, (max-width: 1200px) 33vw, (max-width: 1400px) 33vw, 33vw"
                  className="
                    object-center transition-transform duration-500
                    group-hover:scale-105  text-dark-500 w-full
                  "
                />
              </div>

              <h3 className="mt-4 font-body text-dark-500">
                {p.title}
              </h3>

              <p className="text-sm font-body text-dark-500">
                {p.type}
              </p>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-14 xl:mt-16 2xl:mt-18 text-center">
          <Link
            href="/Projects"
            className="
              inline-flex items-center gap-3
              border rounded-full
              pl-8 pr-4 py-4
               text-dark-500
              font-body font-bold text-lg
              hover:bg-yellow-400  transition
            "
          >
            View all Projects
            <span className="rounded-full p-2.5 bg-yellow-400 transition">
              <Image
                src= {arrowrigth}
                width={14}
                height={16}
                alt="arrow right hover"
              />
            </span>
          </Link>
        </div>

      </div>
    </section>
  );
}
