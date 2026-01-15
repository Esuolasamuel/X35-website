"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import {arrow} from"@/public/icons/arrow-right.svg"





export default function ProjectDemo({ projects }) {
  if (!projects || projects.length === 0) return null;

  return (
    <section className="xl:p-24 lg:p-24 md:p-16 py-4 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl text-center text-[#0c0c1c] font-heading font-bold mb-10">
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
                    group-hover:scale-105
                  "
                />
              </div>

              <h3 className="mt-4 font-body font-bold">
                {p.title}
              </h3>

              <p className="text-sm font-body text-neutral-500">
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
              font-body font-bold text-[15px]
              hover:bg-black/5 transition
            "
          >
            View all Projects
            <span className="rounded-full p-2.5 bg-[#FFD700] hover:bg-[#E2C007] transition">
              <Image
                src= {arrow}
                width={14}
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
