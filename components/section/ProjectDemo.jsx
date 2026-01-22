"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import arrowrigth from"@/assets/icons/arrow-right.svg";





export default function ProjectDemo({ projects }) {
  if (!projects || projects.length === 0) return null;

  return (
    <section className="p-3.5 sm:p-7.5 md:p-15 lg:p-30 bg-white">
      <div className="max-w-5xl mx-auto">

        <h2 className="text-4xl text-center  text-dark-500 font-heading  mb-10">
          Our Latest Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p) => (
            <Link
              key={p.slug}
              href={`/Projects/${p.slug}`}
              className="group block"
            >
              <div className="relative h-48 md:h-64 rounded-xl overflow-hidden">
                <Image
                  src={p.img}
                  alt={p.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="
                    object-cover transition-transform duration-500
                    group-hover:scale-105  text-dark-500
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
              pl-6 pr-2 py-2
               text-dark-500
              font-body font-bold text-[15px]
               bg-[#FFD700] hover: bg-[#E2C007] transition
            "
          >
            View all Projects
            <span className="rounded-full p-2.5  bg-[#FFD700] hover: bg-[#E2C007] transition">
              <Image
                src= {arrowrigth}
                width={14}
                height={16}
                alt="arrow right hover: bg-[#FFD700] "
              />
            </span>
          </Link>
        </div>

      </div>
    </section>
  );
}
