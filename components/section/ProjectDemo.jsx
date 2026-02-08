"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import arrowrigth from"@/assets/icons/arrow-right.svg";





export default function ProjectDemo({ projects }) {
  if (!projects || projects.length === 0) return null;

  return (
    <section className="bg-white p-3.5 sm:p-7.5 md:p-15 lg:p-30 xl:p-30 2xl:p-30">
      <div className="flex flex-col gap-2.5 sm:gap-5 md:gap-10 Lg:gap-20 mx-auto">

        <h1 className="text-2xl md:text-4xl lg:text-[40px] text-center font-bold text-dark-500 font-heading">
          Our Latest Projects
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-1 sm:gap-3 md:gap-5">
          {projects.map((p) => (
            <Link
              key={p.slug}
              href={`/Projects/${p.slug}`}
              className="group block"
            >
              <div className="relative aspect-636/375 rounded-lg sm:rounded-lg md:rounded-xl lg:rounded-2xl shadow-2xl overflow-hidden">
                <Image
                  src={p.img}
                  alt={p.title}
                  fill
                  sizes="(max-width: 375px) 100vw, (max-width: 576px) 50vw, (max-width: 768px) 50vw, (max-width: 992px) 33vw, (max-width: 1200px) 33vw, (max-width: 1400px) 33vw, 33vw"
                  className="
                    object-cover transition-transform duration-500
                    group-hover:scale-105  text-dark-500 w-full
                  "
                />
              </div>

              <h3 className="mt-4 font-body font-bold text-dark-500">
                {p.title}
              </h3>

              <p className="text-sm md:text-base lg:text-[17px] font-body text-dark-500">
                {p.type}
              </p>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-2 sm:mt-3 md:mt-3 lg:mt-4 xl:mt-4 2xl:mt-4 text-center">
          <Link
            href="/Projects"
            className="
              inline-flex items-center gap-1.5 md:gap-2 lg:gap-3
              border hover:border-yellow-400 rounded-full
              pl-2 md:pl-3 lg:pl-4 pr-2 md:pr-3 lg:pr-4 py-1.5 md:py-2 lg:py-3
               text-dark-500
              font-body font-bold text-xs md:text-sm lg:text-base
              hover:bg-yellow-400  transition
            "
          >
            View all Projects
            <span className="rounded-full p-3 bg-yellow-400 transition">
              <Image
                src= {arrowrigth}
                width={16}
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
