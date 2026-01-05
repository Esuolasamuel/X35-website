"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";

/* ---------------------------------------
   LCP-FIRST HERO
--------------------------------------- */

export default function HeroLCP({ images = [ ], interval = 4000 }) {
  const [index, setIndex] = useState(0);
  const [ready, setReady] = useState(false);
  const timerRef = useRef(null);

  /* Start carousel AFTER LCP */
  useEffect(() => {
    const timeout = setTimeout(() => {
      setReady(true);
    }, 1200); // wait for first paint

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (!ready || images.length <= 1) return;

    timerRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(timerRef.current);
  }, [ready, interval, images.length]);

  return (
    <section className="relative h-dvh min-h-[600px] w-full overflow-hidden">
      {/* --------------------------------
         LCP IMAGE (STATIC, EAGER)
      -------------------------------- */}
      <div className="absolute inset-0 z-0">
        <Image
          src={images[0]}
          alt="Hero background"
          fill
          priority
          loading="eager"
          sizes="100vw"
          className="object-cover brightness-90 contrast-105"
        />
      </div>

      {/* --------------------------------
         NON-LCP IMAGES (LAZY)
      -------------------------------- */}
      {ready &&
        images.slice(1).map((img, i) => {
          const slideIndex = i + 1;

          return (
            <div
              key={slideIndex}
              className={`
                absolute inset-0 z-0
                transition-opacity duration-700 ease-in-out
                ${index === slideIndex ? "opacity-100" : "opacity-0"}
              `}
            >
              <Image
                src={img}
                alt=""
                fill
                loading="lazy"
                sizes="100vw"
                className="object-cover brightness-90 contrast-105"
              />
            </div>
          );
        })}

      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-black/30" />

      {/* --------------------------------
         HERO CONTENT (IMMEDIATE)
      -------------------------------- */}
      <div className="relative z-20 flex h-full items-end">
        <div className="max-w-7xl px-6 pb-16 sm:px-10 sm:pb-20 lg:px-24 lg:pb-28 text-white">
          <h1
            className="
              font-heading font-bold
              tracking-[-0.01em]
              leading-[70.4px]
              text-[72px]
              max-w-4xl
              xl:pl-48
              lg:pl-32
              md:pl-16
              pl-8
            "
          >
            We shape ideas <br />
            into quality{" "}
            <span className="relative inline-block">
              spaces
              <span
                className="
                  absolute -left-4 -bottom-2
                  h-24 w-56
                  bg-[url('/images/Fill-4.svg')]
                  bg-contain bg-no-repeat
                  -z-10
                "
              />
            </span>
            .
          </h1>
        </div>
      </div>
    </section>
  );
}
