"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import arrowrigth from"@/assets/icons/arrow-right.svg";





export default function ProjectDemo({ projects }) {
  if (!projects || projects.length === 0) return null;

  return (
    <section className="bg-white p-3.5 sm:p-7.5 md:p-15 lg:p-30 mx-auto">
      <div className="flex flex-col gap-14">

        <h1 className="text-5xl text-center font-bold text-dark-500 font-heading">
          Our Latest Projects
        </h1>

        <div className="grid md:grid-cols-3 gap-4">
          {projects.map((p) => (
            <Link
              key={p.slug}
              href={`/Projects/${p.slug}`}
              className="group block"
            >
              <div className="relative h-48 md:h-69 rounded-xl overflow-hidden">
                <Image
                  src={p.img}
                  alt={p.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
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
        <div className="mt-12 text-center">
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
