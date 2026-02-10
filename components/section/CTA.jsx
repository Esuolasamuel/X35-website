"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import ContactForm from "../forms/ContactForm";

import bgPattern from "@/assets/icons/image-9.svg";
import handdrawn from "@/assets/icons/Fill-4.svg";

export default function CTA({
  title,
  text = "Contact us",
  paragraph,
  id,
  align = "center",
}) {
  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isContactOpen ? "hidden" : "unset";
  }, [isContactOpen]);

  const alignmentMap = {
    left: "items-start text-left",
    center: "items-center text-center",
    right: "items-end text-right",
  };

  return (
    <>
      {/* ================= SECTION ================= */}
      <section
        id={id}
        className="
          relative
          mx-auto
          max-w-360
          min-h-135.75
          bg-[#C9C9DC]
          overflow-hidden
          flex
          items-center
          justify-center
        "
      >
        {/* ================= BACKGROUND IMAGE ================= */}
        <div
          aria-hidden
          className="
            absolute
            w-434.75 h-434.75
            -top-67 -left-37.5
            opacity-50
            mix-blend-luminosity
            pointer-events-none
          "
          style={{
            backgroundImage: `url(${bgPattern.src})`,
            backgroundRepeat: "repeat",
            backgroundSize: "640px",
          }}
        />

        {/* ================= CONTENT ================= */}
        <div
          className={`
            relative z-10
            flex flex-col
            max-w-150
            gap-13
            ${alignmentMap[align]}
          `}
        >
          {/* ================= HEADLINE ================= */}
      <h2 className="font-heading font-bold text-[#1A1A1A] tracking-[-0.03em] leading-[1.05] text-xl sm:text-xl md:text-2xl lg:text-[48px] z-20">
        <span className="block">Your vision deserves an</span>
        <span className="block">architect with purpose.</span>

        <span className="block">
          Have you been{" "}
          <span className="relative inline-block ml-2">
            <span className="relative z-10">x35ied?</span>

            {/* Hand-drawn underline aligned with text */}
            <span
              aria-hidden
              className="
                absolute
                inset-x-0 -bottom-4 -left-10
                w-[242.93px]
                h-[97.33px]              /* approximate height for underline */
                bg-no-repeat
                bg-contain
                bg-center
                -rotate-[2.31deg]
                -z-10      /* subtle Figma rotation */
              "
              style={{
                backgroundImage: `url(${handdrawn.src})`,
              }}
            />
          </span>
        </span>
      </h2>



          {/* ================= PARAGRAPH ================= */}
          {paragraph && (
            <p className="text-xl leading-relaxed font-body text-[#1A1A1A]/80">
              {paragraph}
            </p>
          )}

          {/* ================= CTA BUTTON ================= */}
          <button
            onClick={() => setIsContactOpen(true)}
            className="
              inline-flex items-center justify-center
              w-33 h-11.5
              gap-2.5
              rounded-[60px]
              bg-[#FFD700]
              text-[#1A1A1A]
              font-bold text-base
              tracking-[0.02em]
              px-6 py-3.5
              shadow-lg
              transition
              hover:bg-[#F0C800]
            "
          >
            {text}
          </button>

        </div>
      </section>

      {/* ================= MODAL ================= */}
      {isContactOpen && (
        <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/60 backdrop-blur-sm">
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
