"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import ContactForm from "../forms/ContactForm";

import bgPattern from "@/assets/icons/image-9.svg";
import handdrawn from "@/assets/icons/Fill-4.svg";



export default function CTA({
  lines = [],
  paragraph,
  button = "",
  id,
  align = "center",
  width = "4xl",
}) {
  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isContactOpen ? "hidden" : "unset";
  }, [isContactOpen]);

  const alignmentMap = {
    left: "items-start text-left",
    center: "items-center text-center",
    right: "items-end text-right ml-auto",
  };

  const widthMap = {
    xl: "max-w-[1200px]",
    "2xl": "max-w-[1400px]",
    "4xl": "max-w-[950px]",
    full: "max-w-full",
  };

  return (
    <>
      {/* ================= CTA SECTION ================= */}
      <section
        id={id}
        // className="relative overflow-hidden bg-[#D1D1E4] py-24 lg:py-32"
        style={{ backgroundImage: `url(${bgPattern.src})` }}
        className="relative py-16 bg-[#C9C9DC] bg-repeat"
      >
        {/* ================= BACKGROUND PATTERN ================= */}
        <div
          aria-hidden
          className="absolute inset-0 z-0 pointer-events-none opacity-35"
          style={{
            backgroundImage: `url(${bgPattern.src})`,
            backgroundRepeat: "repeat",
            backgroundSize: "640px",
          }}
        />

        {/* ================= CONTENT ================= */}
        <div
          className={`
            relative z-10 mx-auto flex flex-col gap-10 px-6
            ${alignmentMap[align]}
            ${widthMap[width]}
          `}
        >
          {/* ================= HEADLINE ================= */}
          <h2
            className="
              font-heading font-bold text-[#1A1A1A]
              leading-[1.05]
              tracking-[-0.03em]
              text-[2.25rem]
              sm:text-[3.5rem]
              lg:text-[4.8rem]
            "
          >
            {/* Mobile */}
            <span className="block sm:hidden">
              {lines.map((line, i) => {
                // Normal text line
                if (line.text) {
                  return (
                    <span key={i} className="block">
                      {line.text}
                    </span>
                  );
                }

                // Highlighted line
                return (
                  <span key={i} className="block mt-3">
                    {line.prefix}{" "}
                    <span className="relative inline-block ml-2">
                      <span className="relative z-10">{line.highlight}</span>
                      <span
                        aria-hidden
                        className="absolute inset-x-[-10%] bottom-[-5%] h-[120%] bg-no-repeat bg-contain bg-center"
                        style={{ backgroundImage: `url(${handdrawn.src})` }}
                      />
                    </span>
                  </span>
                );
              })}
            </span>


            {/* Desktop */}
            <span className="hidden sm:block">
              {lines.map((line, i) => {
                if (line.text) {
                  return (
                    <span key={i} className="block">
                      {line.text}
                    </span>
                  );
                }

                return (
                  <span key={i} className="block mt-2">
                    {line.prefix}{" "}
                    <span className="relative inline-block ml-3">
                      <span className="relative z-10">{line.highlight}</span>
                      <span
                        aria-hidden
                        className="absolute inset-x-[-12%] bottom-[-10%] h-[130%] bg-no-repeat bg-contain bg-center"
                        style={{ backgroundImage: `url(${handdrawn.src})` }}
                      />
                    </span>
                  </span>
                );
              })}
            </span>

          </h2>

          {/* ================= PARAGRAPH ================= */}
          {paragraph && (
            <p className="max-w-2xl text-lg leading-relaxed text-[#1A1A1A]/80 lg:text-xl">
              {paragraph}
            </p>
          )}

          {/* ================= CTA BUTTON ================= */}
          {button && <button
            onClick={() => setIsContactOpen(true)}
            className="
              inline-flex w-fit items-center justify-center
              rounded-full bg-[#FFD700] px-12 py-4
              text-sm font-bold tracking-[0.02em] text-[#1A1A1A]
              shadow-lg transition-all
              hover:bg-[#F0C800] hover:shadow-xl
              md:text-base
            "
          >
            {button}
          </button>}
        </div>
      </section>

      {/* ================= MODAL ================= */}
      {isContactOpen && (
        <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
          <div className="relative w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl">
            <button
              onClick={() => setIsContactOpen(false)}
              className="absolute right-5 top-5 rounded-full p-2 text-gray-400 hover:bg-gray-100 hover:text-black"
            >
              <X size={20} />
            </button>

            <h2 className="mb-6 text-2xl font-bold text-gray-900">
              Contact Us
            </h2>

            <ContactForm onSuccess={() => setIsContactOpen(false)} />
          </div>
        </div>
      )}
    </>
  );
}
