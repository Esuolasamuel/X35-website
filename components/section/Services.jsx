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
      const elapsed = getNow() - startTimeRef.current;
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
    <section id="services" className="bg-linear-to-br from-[#0b1020] to-[#05060d] text-white p-6 sm:p-7.5 md:p-15 lg:p-30">
      <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 2xl:gap-14 items-center">

        {/* LEFT */}
        <div className="max-w-2xl hidden lg:block">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl 2xl:text-5xl leading-15 font-bold font-heading text-dark mb-6 text-white">
            Our Services
          </h2>

          <p className="text-white/80 text-lg leading-7 mb-12">
            With solution-driven designs and precise execution, we help you
            transform your space into a high-performing asset you can truly enjoy.
          </p>

          <ul className="space-y-9">
            {items.map((it, i) => (
              <li key={it.title}>
                <button
                  onClick={() => handleSelect(i)}
                  aria-current={i === index}
                  className={`w-full text-left transition ${
                    i === index ? "text-white" : "text-white/80 cursor-pointer"
                  }`}
                >
                  <span className="text-lg font-medium">{it.title}</span>
                </button>

                {i === index && (
                  <div className="mt-2 h-0.5 w-full bg-white/15 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-white transition-[width] duration-75 ease-linear"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT */}
        <div className="relative rounded-sm md:rounded-md lg:rounded-lg  overflow-hidden aspect-615/594 hidden lg:block">
          <Image
            key={item.title}
            src={item.img}
            alt={item.title}
            fill
            priority
            className="
              object-cover rounded-md sm:rounded-sm md:rounded-md lg:rounded-lg  shadow-xl
              transition-opacity duration-700 ease-in-out
            "
            style={{ opacity: visible ? 1 : 0 }}
          />
        </div>
      </div>

      {/* MOBILE VIEW */}
      <div className="lg:hidden space-y-6">
        <div className="py-2">
          <h2 className="text-xl md:text-3xl lg:text-5xl xl:text-5xl 2xl:text-5xl leading-15 font-heading text-dark mb-1 text-white">
            Our Services
          </h2>

          <p className="text-white/80 text-sm md:text-base lg:text-lg leading-7 mb-6">
            With solution-driven designs and precise execution, we help you
            transform your space into a high-performing asset you can truly enjoy.
          </p>
        </div>
        {items.map((item) => (
          <div
            key={item.title}
            className="sm:rounded-sm md:rounded-md lg:rounded-lg overflow-hidden bg-white/5 border border-white/10"
          >
            <div className="relative aspect-4/3">
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-4">
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
