"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

/* ... DEFAULT_ITEMS definition remains the same ... */

export default function Services({ items }) { // Remove the default here to handle it below
  const INTERVAL = 4000;
  const STEP_TIME = 50;

  // 1. Define safeItems first using a fallback
  const safeItems = items?.length ? items : DEFAULT_ITEMS;

  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);
  const startTimeRef = useRef(Date.now());

  useEffect(() => {
    if (!safeItems.length) return;

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTimeRef.current;
      const pct = Math.min((elapsed / INTERVAL) * 100, 100);

      setProgress(pct);

      if (pct >= 100) {
        startTimeRef.current = Date.now();
        setIndex((i) => (i + 1) % safeItems.length);
        triggerFade();
      }
    }, STEP_TIME);

    return () => clearInterval(timer);
  }, [INTERVAL, STEP_TIME, safeItems.length]);

  function triggerFade() {
    setVisible(false);
    requestAnimationFrame(() => setVisible(true));
  }

  function handleSelect(i) {
    startTimeRef.current = Date.now();
    setIndex(i);
    setProgress(0);
    triggerFade();
  }

  const item = useMemo(() => {
    return safeItems[index] ?? safeItems[0];
  }, [index, safeItems]);

  return (
    <section
      id="services"
      className="bg-linear-to-br from-[#0b1020] to-[#05060d] text-white p-8 md:p-16 lg:p-24 xl:p-32"
    >
      <div className="mx-auto max-w-7xl grid gap-y-12 md:grid-cols-2 items-center px-6">
        {/* ---------------- LEFT ---------------- */}
        <div className="max-w-md">
          <h2 className="mb-6 text-4xl md:text-5xl font-heading font-bold">
            Our Services
          </h2>

          <p className="mb-12 text-lg leading-7 text-white/80">
            With solution-driven designs and precise execution, we help you
            transform your space into a high-performing asset you can truly enjoy.
          </p>

          <ul className="space-y-9">
            {safeItems.map((it, i) => (
              <li key={it.title}>
                <button
                  onClick={() => handleSelect(i)}
                  aria-current={i === index}
                  className={`w-full text-left transition ${
                    i === index ? "text-white" : "text-white/60 hover:text-white/90"
                  }`}
                >
                  <span className="text-[17px] font-medium tracking-[-0.02em]">
                    {it.title}
                  </span>
                </button>

                {i === index && (
                  <div className="mt-2 h-px w-full bg-white/10 overflow-hidden">
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

        {/* ---------------- RIGHT ---------------- */}
        <div className="flex justify-center md:justify-end">
          <div
            className="
              relative
              w-full max-w-[615px]
              h-[400px] md:h-[594px]
              overflow-hidden
              rounded-2xl
              group
            "
          >
            <Image
              key={item.img}
              src={item.img}
              alt={item.title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 615px"
              className={`
                object-cover
                rounded-2xl
                shadow-xl
                transition-all
                duration-700
                ease-in-out
                group-hover:scale-110
              `}
              style={{ opacity: visible ? 1 : 0 }}
            />
            {/* Architectural Dark Overlay */}
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-500 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}