"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import arrowrigth from"@/assets/icons/arrow-right.svg";





export default function ProjectDemo({ projects }) {
  if (!projects || projects.length === 0) return null;

  return (
    <section className="bg-white p-3.5 sm:p-7.5 md:p-15 lg:p-30 xl:p-30 2xl:p-30">
      <div className="flex flex-col mx-auto">

        <h1 className="text-2xl md:text-3xl lg:text-[40px] text-center mb-14 font-bold text-dark-500 font-heading">
          Our Latest Projects
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-1 sm:gap-1 md:gap-3 lg:gap-6 mb-14">
          {projects.map((p) => (
            <Link
              key={p.slug}
              href={`/Projects/${p.slug}`}
              className="group block"
            >
              <div className="relative aspect-381/275 rounded-lg sm:rounded-lg md:rounded-xl lg:rounded-2xl overflow-hidden">
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

              <div className="mt-6">
                <h3 className="font-base font-body font-semibold text-dark-500">
                  {p.title}
                </h3>
                <p className="pt-2.5text-xs md:text-xs lg:text-xs font-body font-normal text-dark-500">
                  {p.type}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
        <Link
          href="/Projects"
          className="
            inline-flex items-center
            w-53 h-12.5
            gap-4
            pl-6 pr-2 pt-2 pb-2
            border border-dark-300
            rounded-[60px]
            text-dark-500
            font-body font-bold text-[15px]
            hover:bg-yellow-400 hover:border-yellow-400
            transition
          "
        >
          <span>View all Projects</span>  
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-yellow-400">
            <Image
              src={arrowrigth}
              width={16}
              height={16}
              alt="arrow right"
            />
          </span>
        </Link>
      </div>
      </div>
    </section>
  );
}
