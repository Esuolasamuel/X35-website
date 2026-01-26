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
  { 
    title: "Architecture", 
    desc: "Peaceful mountain view", 
    img: architectureImg,
    width: 615,
    height: 594
  },
  { 
    title: "Interior Design", 
    desc: "Green forest landscape", 
    img: interiorImg,
    width: 615,
    height: 594
  },
  { 
    title: "Renovation", 
    desc: "Sunny beach vibes", 
    img: renovationImg,
    width: 615,
    height: 594
  },
  { 
    title: "Construction", 
    desc: "Construction excellence", 
    img: constructionImg,
    width: 615,
    height: 594
  },
  { 
    title: "Project Management", 
    desc: "Efficient project delivery", 
    img: projectMgtImg,
    width: 615,
    height: 594
  },
  { 
    title: "Turnkey Project", 
    desc: "End-to-end solutions", 
    img: turnkeyImg,
    width: 615,
    height: 594
  },
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
    <section 
      id="services" 
      className="bg-linear-to-br from-[#0b1020] to-[#05060d] text-white"
      style={{
        height: '837px',
        gap: '120px',
        paddingTop: '120px',
        paddingBottom: '120px',
        margin: 'auto 0'
      }}
    >
      <div className="h-full mx-auto px-6 grid md:grid-cols-2 items-center gap-30">

        {/* LEFT TEXT CONTAINER */}
        <div 
          className="max-w-113.25 h-149.25 flex flex-col justify-between"
          style={{ gap: '64px' }}
        >
          <div>
            <h2 className="text-[56px] leading-16 font-heading font-bold text-white mb-8">
              Our Services
            </h2>

            <p className="text-white/80 text-lg leading-7">
              With solution-driven designs and precise execution, we help you
              transform your space into a high-performing asset you can truly enjoy.
            </p>
          </div>

          {/* SERVICES LIST */}
          <ul className="space-y-8">
            {items.map((it, i) => (
              <li key={it.title} className="relative">
                <button
                  onClick={() => handleSelect(i)}
                  aria-current={i === index}
                  className={`w-full text-left transition-all duration-300 ${
                    i === index 
                      ? "text-white font-semibold" 
                      : "text-white/60 cursor-pointer hover:text-white/80"
                  }`}
                >
                  <span className="text-[20px] leading-7 font-medium">
                    {it.title}
                  </span>
                </button>

                {/* PROGRESS BAR */}
                {i === index && (
                  <div className="mt-3 h-0.5 w-full bg-white/15 rounded-full overflow-hidden">
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

        {/* RIGHT IMAGE CONTAINER */}
        <div className="relative flex items-center justify-center">
          <div 
            className="relative"
            style={{
              borderRadius: '15px',
              overflow: 'hidden'
            }}
          >
            <Image
              key={item.title}
              src={item.img}
              alt={item.title}
              className={`
                object-cover
                transition-opacity duration-700 ease-in-out w-full
              `}
              style={{ 
                opacity: visible ? 1 : 0,
                borderRadius: '15px'
              }}
              priority
            />
          </div>
        </div>
      </div>

      {/* MOBILE VIEW */}
      <div className="md:hidden space-y-8 pt-12 px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-white/80 text-lg leading-relaxed max-w-2xl mx-auto">
            With solution-driven designs and precise execution, we help you
            transform your space into a high-performing asset you can truly enjoy.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl overflow-hidden bg-white/5 border border-white/10"
            >
              <div className="relative aspect-4/3">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-white/60 text-sm">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}