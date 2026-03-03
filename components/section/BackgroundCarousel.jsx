"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import WhatsAppWidget from "./WhatsAppWidget";


/* ---------------------------------------
   LCP-FIRST HERO
 --------------------------------------- */

export default function BackgroundCarousel({ images = [ ], interval = 4000 }) {
  const [index, setIndex] = useState(0);
  const [ready, setReady] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  /* Start carousel AFTER LCP */
  useEffect(() => {
    const timeout = setTimeout(() => {
      setReady(true);
    }, 1200); // wait for first paint

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (!ready || images.length <= 1 || isPaused) return;

    timerRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(timerRef.current);
  }, [ready, interval, images.length, isPaused]);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section
      className="relative min-h-[50vh] sm:min-h-[55vh] md:min-h-[80vh] lg:min-h-[85vh] xl:min-h-210.5 2xl:min-h-210.5 w-screen overflow-hidden"
      style={{ contain: "paint layout size" }}
      onMouseDown={() => setIsPaused(true)}
      onMouseUp={() => setIsPaused(false)}
      onMouseLeave={() => setIsPaused(false)}
    >
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
            <ChevronLeft size={50} strokeWidth={1} className="text-white font-extralight cursor-pointer " />
          </button>
          <button
            onClick={nextSlide}
            className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 z-30 "
            aria-label="Next slide"
          >
            <ChevronRight size={50} strokeWidth={1} className="text-white font-extralight cursor-pointer" />
          </button>
        </>
      )}

      {/* --------------------------------
           HERO CONTENT (IMMEDIATE)
       -------------------------------- */}
      <div className="absolute max-w-216.25 min-h-[46.5] z-20 bottom-8 sm:bottom-16 md:bottom-20 lg:bottom-24  left-8 sm:left-16 md:left-24 lg:left-30 ">
        <div className="text-white text-left">
          <h1
            className="
              font-mont drop-shadow-lg
              tracking-[-0.01em]
              leading-10 sm:leading-12.5 md:leading-15 lg:leading-[70.4px]
              font-black
              text-4xl sm:text-5xl md:text-6xl lg:text-[72px]
              px-0 py-1
            "
            style={{ leadingTrim: 'cap-height' }}
          >
            We deliver structured, <br />
            <span className="relative inline-block text-yellow-400">
             high-quality projects <br />
            </span>
            without compromise
          </h1>
        </div>
      </div>
    </section>
  );
}
