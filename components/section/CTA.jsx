"use client";

import { useState } from "react";
import ContactModal from "../forms/ContactForm";

import bgPattern from "@/assets/icons/image-9.svg";
import handdrawn from "@/assets/icons/Fill-4.svg";

export default function CTA({
  id,
  title,
  paragraph,
  text = "Start your Project",
  align = "center",
  button = false,
  headline = false,
  backgroundImage = false,
}) {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const alignmentMap = {
    left: "items-start text-left",
    center: "items-center text-center",
    right: "items-end text-right",
  };

  const handleFormSuccess = () => {
    setIsContactOpen(false);
  };

  /* ================= LAYOUT VARIANTS ================= */
  const sectionClasses = backgroundImage
    ? "min-h-[540px] px-6 md:px-12 lg:px-[120px] py-20 md:py-28 lg:py-36"
    : "min-h-[516px] px-6 md:px-12 py-16 sm:py-20 lg:py-28";

  return (
    <>
      <section
        id={id}
        className={`
          relative mx-auto
          bg-[#C9C9DC]
          overflow-hidden
          flex items-center justify-center
          ${sectionClasses}
        `}
      >
        {/* ================= BACKGROUND IMAGE ================= */}
        {backgroundImage && (
          <div
            aria-hidden
            className="
              absolute
              w-full
              left-0 right-0
              h-full
              opacity-90
              mix-blend-luminosity
              pointer-events-none
            "
            style={{
              backgroundImage: `url(${bgPattern.src})`,
              backgroundSize: "640px",
            }}
          />
        )}

        {/* ================= CONTENT ================= */}
        <div
          className={`
            relative z-10
            flex flex-col
            gap-6
            max-w-240
            ${alignmentMap[align]}
          `}
        >
          {/* ================= HEADLINE ================= */}
          {headline ? (
            <h2 className="font-heading font-bold text-[#0C0C1C] tracking-[-0.03em] leading-[1.05] text-3xl md:text-4xl lg:text-5xl pb-13">
              <span className="block">Your vision deserves an</span>
              <span className="block">architect with purpose.</span>

              <span className="block">
                Have you been{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">x35ied?</span>

                  <span
                    aria-hidden
                    className="
                      absolute
                      -bottom-4 -left-8
                      w-37.75 h-18
                      md:w-45.25 md:h-18.25
                      lg:w-60.75 lg:h-24.25
                      bg-no-repeat bg-contain bg-center
                      -rotate-[2.31deg]
                      -z-10
                    "
                    style={{ backgroundImage: `url(${handdrawn.src})` }}
                  />
                </span>
              </span>
            </h2>
          ) : (
            <h2 className="font-heading font-bold text-[#0C0C1C] tracking-[-0.03em] leading-[1.05] text-3xl md:text-4xl lg:text-5xl">
              {title}
            </h2>
          )}

          {/* ================= PARAGRAPH ================= */}
          {paragraph && (
            <p className="text-lg md:text-xl leading-relaxed font-body text-[#0C0C1C]/80 max-w-180">
              {paragraph}
            </p>
          )}

          {/* ================= CTA BUTTON ================= */}
          {button && (
          <button
            onClick={() => setIsContactOpen(true)}
            className="inline-flex bg-yellow-400 hover:bg-yellow-700 rounded-[60px] transition-colors px-6 py-3 md:px-8 md:py-4 lg:px-9 lg:py-5 font-body font-semibold text-sm md:text-base lg:text-lg text-[#0C0C1C] cursor-pointer"
          >
            Start your Project
          </button>
          )}
        </div>
      </section>

       {/* --- CONTACT FORM MODAL --- */}
          <ContactModal 
            isOpen={isContactOpen} 
            onClose={() => setIsContactOpen(false)} 
            onSuccess={handleFormSuccess} 
          />
    </>
  );
}
