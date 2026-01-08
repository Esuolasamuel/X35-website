"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

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

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="relative h-[50dvh] md:h-[75dvh] lg:h-dvh min-h-[600px] w-full overflow-hidden">
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
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />

      {/* Carousel Controls */}
      {images.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} className="text-white" />
          </button>
          <button
            onClick={nextSlide}
            className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight size={24} className="text-white" />
          </button>
        </>
      )}

      {/* --------------------------------
           HERO CONTENT (IMMEDIATE)
        -------------------------------- */}
      <div className="absolute z-20 bottom-[70px] md:bottom-[100px] lg:bottom-[130px] left-[15px] md:left-[60px] lg:left-30 w-[682px]">
        <div className="text-white text-left">
          <h1
            className="
              font-heading font-bold drop-shadow-lg
              tracking-[-0.01em]
              leading-[40px] sm:leading-[50px] md:leading-[60px] lg:leading-[70.4px]
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
                  bg-[url('/images/Fill-4.svg')]
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
