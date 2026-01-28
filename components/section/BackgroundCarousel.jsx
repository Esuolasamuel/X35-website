"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";


/* ---------------------------------------
   LCP-FIRST HERO
--------------------------------------- */

export default function BackgroundCarousel({ images = [ ], interval = 4000 }) {
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

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="relative min-h-80 sm:min-h-96 md:min-h-112 lg:min-h-128 xl:min-h-144 2xl:min-h-160 w-screen overflow-hidden" style={{ contain: "paint layout size" }}>
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
          sizes="80vw"
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
                w-screen h-full
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
      <div className="absolute inset-0 z-10 bg-linear-to-t from-black/30 via-black/10 to-transparent" />

      {/* Carousel Controls */}
      {images.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 z-30 "
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} className="text-white" />
          </button>
          <button
            onClick={nextSlide}
            className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 z-30 "
            aria-label="Next slide"
          >
            <ChevronRight size={24} className="text-white" />
          </button>
        </>
      )}

      {/* --------------------------------
           HERO CONTENT (IMMEDIATE)
        -------------------------------- */}
      <div className="absolute z-20 bottom-8 sm:bottom-12 md:bottom-16 lg:bottom-20 xl:bottom-24 2xl:bottom-28 left-3 sm:left-6 md:left-12 lg:left-16 xl:left-20 2xl:left-24 ">
        <div className="text-white text-left">
          <h1
            className="
              font-heading  drop-shadow-lg
              tracking-[-0.01em]
              leading-10 sm:leading-12.5 md:leading-15 lg:leading-[70.4px]
              text-4xl sm:text-5xl md:text-6xl lg:text-[72px]
              px-0 py-1
            "
            style={{ leadingTrim: 'cap-height' }}
          >
            We shape ideas <br />
            into quality{" "}
            <span className="relative inline-block">
              spaces
              <span
                className="
                  absolute -left-1 sm:-left-2 md:-left-3 lg:-left-4 -bottom-1 sm:-bottom-1.5 md:-bottom-2 lg:-bottom-2
                  h-12 w-28 sm:h-16 sm:w-40 md:h-20 md:w-48 lg:h-24 lg:w-60
                  bg-[url(@/assets/icons/Fill-4.svg)]
                  bg-cover bg-no-repeat
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


