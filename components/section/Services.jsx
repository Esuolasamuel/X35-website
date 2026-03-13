"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState, useCallback } from "react";

/* ------------------------------------------------
   STATIC IMAGE IMPORTS
------------------------------------------------ */
import architectureImg from "@/assets/images/architecture.png";
import interiorImg from "@/assets/images/interior-design.jpg";
import renovationImg from "@/assets/images/renovation.jpg";
import constructionImg from "@/assets/images/construction.png";
import projectMgtImg from "@/assets/images/project-management.png";
import turnkeyImg from "@/assets/images/turnkey-project-consultant.png";

/* ------------------------------------------------
   SERVICES DATA
------------------------------------------------ */
const items = [
  { title: "Architecture", desc: "Peaceful mountain view", img: architectureImg },
  { title: "Interior Design", desc: "Green forest landscape", img: interiorImg },
  { title: "Renovation", desc: "Sunny beach vibes", img: renovationImg },
  { title: "Construction", desc: "Construction excellence", img: constructionImg },
  { title: "Project Management", desc: "Efficient project delivery", img: projectMgtImg },
  { title: "Turnkey Project", desc: "End-to-end solutions", img: turnkeyImg },
];

export default function Services() {
  const INTERVAL = 5000;
  const STEP_TIME = 50;

  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  const startTimeRef = useRef(null);

  /* ------------------------------------------------
     SAFE TIME ACCESSOR (NO IMPURE CALL DURING RENDER)
  ------------------------------------------------ */
  const getNow = () => Date.now();

  /* ------------------------------------------------
     FADE TRANSITION
  ------------------------------------------------ */
  const triggerFade = useCallback(() => {
    setVisible(false);
    requestAnimationFrame(() => setVisible(true));
  }, []);

  /* ------------------------------------------------
     INITIALIZE TIMER (SAFE)
  ------------------------------------------------ */
  useEffect(() => {
    startTimeRef.current = getNow();
  }, []);

  /* ------------------------------------------------
     TIME-BASED PROGRESS
  ------------------------------------------------ */
  useEffect(() => {
    if (startTimeRef.current == null) return;

    const timer = setInterval(() => {
      const current = startTimeRef.current;
      if (current == null) return;
      const elapsed = getNow() - current;
      const pct = Math.min((elapsed / INTERVAL) * 100, 100);

      setProgress(pct);

      if (pct >= 100) {
        startTimeRef.current = getNow();
        setIndex((i) => (i + 1) % items.length);
        triggerFade();
      }
    }, STEP_TIME);

    return () => clearInterval(timer);
  }, [INTERVAL, STEP_TIME, triggerFade]);

  /* ------------------------------------------------
     USER SELECT (DEFERRED TIME UPDATE)
  ------------------------------------------------ */
  function handleSelect(i) {
    queueMicrotask(() => {
      startTimeRef.current = getNow();
    });

    setIndex(i);
    setProgress(0);
    triggerFade();
  }

  const item = useMemo(() => items[index], [index]);

  return (
<section
  id="services"
  className="
    bg-linear-to-br from-[#0b1020] to-[#05060d]
    text-white
     p-3.5 sm:p-7.5 md:p-15 lg:p-30 
  "
>
  <div
    className="
      max-w-360
      mx-auto
      grid
      grid-cols-1 lg:grid-cols-2
      gap-1
      items-center
      px-6
    "
  >
        {/* LEFT */}
        <div
          className="
            hidden lg:flex
            flex-col
            w-113.25
          "
        >
          <h2 className="text-2xl md:text-4xl lg:text-[40px] leading-15 font-bold font-heading text-[#0C0C1C] mb-2 text-white">
            Our Services
          </h2>

          <p className="text-white/80 text-sm md:text-base lg:text-[17px] font-normal leading-7 mb-8 font-body">
            With solution-driven designs and precise execution,<br/> we help you
            transform your space into a high-performing asset you can truly enjoy.
          </p>

         <ul className="w-110 space-y-6 mt-8">
            {items.map((it, i) => (
              <li key={it.title} className="pb-0">
                <button
                  onClick={() => handleSelect(i)}
                  aria-current={i === index}
                  className={`w-full text-left transition ${
                    i === index ? "text-white" : "text-white/80 cursor-pointer"
                  }`}
                >
                  <span className="text-[17px] font-semibold font-body">
                    {it.title}
                  </span>
                </button>

                {/* Border + Progress Container */}
                <div className="relative mt-6 h-px w-full">
                  {/* Static border (always visible) */}
                  <div className="absolute inset-0 bg-white/30 rounded-full" />

                  {/* Progress bar (on top) */}
                  {i === index && (
                    <div
                      className="absolute inset-y-0 left-0 bg-white rounded-full transition-[width] duration-75 ease-linear"
                      style={{ width: `${progress}%` }}
                    />
                  )}
                </div>
              </li>
            ))}
          </ul>

        </div>

        {/* RIGHT */}
        <div
          className="
            relative
            hidden lg:block
            aspect-615/594
            rounded-[15px]
            overflow-hidden
          "
        >

          <Image
            key={item.title}
            src={item.img}
            alt={item.title}
            fill
            priority
            className="
              object-cover
              transition-opacity
              duration-700
              ease-in-out
            "
            style={{ opacity: visible ? 1 : 0 }}
          />

        </div>
      </div>

      {/* MOBILE VIEW */}
      <div className="lg:hidden space-y-6 p-3 sm:p-4 md:p-6 lg:p-10">
        <div className="p-2">
          <h2 className="text-2xl md:text-4xl lg:text-5xl leading-15 font-heading text-[#0C0C1C] mb-4 text-white">
            Our Services
          </h2>

          <p className="text-white/80 text-sm md:text-base lg:text-lg leading-7 mb-4">
            With solution-driven designs and precise execution, we help you
            transform your space into a high-performing asset you can truly enjoy.
          </p>
        </div>
        {items.map((item) => (
          <div key={item.title}>
            <div
              className="overflow-hidden rounded-lg sm:rounded-lg md:rounded-xl lg:rounded-2xl"
            >
              <div className="relative aspect-4/3">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
              <div className="py-4">
                <h3 className="text-lg font-semibold text-white">
                  {item.title}
                </h3>
              </div>
            </div>
        ))}
      </div>
    </section>
  );
}
