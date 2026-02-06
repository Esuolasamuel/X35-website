"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import ContactForm from "../forms/ContactForm";

export default function CTA({
  title,
  text,
  paragraph,
  id,
  align = "center",
  width = "4xl",
}) {
  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    if (isContactOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [isContactOpen]);

  const handleFormSuccess = () => {
    setIsContactOpen(false);
  };

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
        className="relative isolate w-full overflow-hidden bg-[#D9D9E9] py-24 lg:py-32"
      >
        {/* Background pattern */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-40 z-30 mix-blend-overlay"
          style={{
            backgroundImage: "url('/assets/images/image-9.svg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Content wrapper */}
        <div
          className={`
            relative z-10 mx-auto flex flex-col gap-10 px-6 transition-all duration-300
            ${alignmentMap[align] || alignmentMap.center}
            ${widthMap[width] || widthMap["4xl"]}
          `}
        >
          {/* ================= HEADLINE ================= */}
          <h2
            className="
              font-heading font-bold text-[#1A1A1A]
              leading-[1.05]
              tracking-[-0.02em] sm:tracking-[-0.025em] lg:tracking-[-0.03em]
              text-[2.25rem]
              sm:text-[3.5rem]
              lg:text-[4.8rem]
            "
          >
            {/* -------- Mobile -------- */}
            <span className="block sm:hidden">
              <span className="block">Your vision</span>
              <span className="block">deserves an</span>
              <span className="block">architect</span>
              <span className="block">with purpose.</span>

              <span className="relative isolate block mt-3">
                <span className="relative z-10 inline-block">
                  Have you been
                  <span className="relative inline-block ml-2">
                    <span className="relative z-10">x35ied?</span>

                    {/* SVG UNDERLAY */}
                    <svg
                      aria-hidden="true"
                      className="absolute inset-0 z-0 pointer-events-none"
                      viewBox="0 0 200 100"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M10,50 C10,20 100,5 180,20 C200,45 150,90 80,90 C30,90 5,70 15,45 C25,20 90,15 170,25"
                        stroke="#FFD700"
                        strokeWidth="3"
                        strokeLinecap="round"
                        fill="none"
                        className="animate-draw"
                      />
                    </svg>
                  </span>
                </span>
              </span>
            </span>

            {/* -------- Desktop -------- */}
            <span className="hidden sm:block">
              <span className="block">Your vision deserves an</span>
              <span className="block">architect with purpose.</span>

              <span className="relative isolate block mt-2">
                <span className="relative z-10 inline-block">
                  Have you been
                  <span className="relative inline-block ml-3">
                    <span className="relative z-10">x35ied?</span>

                    {/* SVG UNDERLAY */}
                    <svg
                      aria-hidden="true"
                      className="absolute inset-0 z-0 pointer-events-none"
                      viewBox="0 0 200 100"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M10,50 C10,20 100,5 180,20 C200,45 150,90 80,90 C30,90 5,70 15,45 C25,20 90,15 170,25"
                        stroke="#FFD700"
                        strokeWidth="3"
                        strokeLinecap="round"
                        fill="none"
                        className="animate-draw"
                      />
                    </svg>
                  </span>
                </span>
              </span>
            </span>
          </h2>

          {/* ================= PARAGRAPH ================= */}
          {paragraph && (
            <p className="max-w-2xl text-lg leading-relaxed tracking-[-0.01em] text-[#1A1A1A]/80 lg:text-xl">
              {paragraph}
            </p>
          )}

          {/* ================= CTA BUTTON ================= */}
          {text && (
            <button
              onClick={() => setIsContactOpen(true)}
              className="
                inline-flex w-fit items-center justify-center
                rounded-full bg-[#FFD700] px-12 py-4
                font-body text-sm font-bold tracking-[0.02em] text-[#1A1A1A]
                shadow-lg transition-all duration-200
                hover:bg-[#F0C800] hover:shadow-xl
                md:text-base
              "
            >
              {text}
            </button>
          )}
        </div>
      </section>

      {/* ================= MODAL ================= */}
      {isContactOpen && (
        <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
          <div className="relative w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl">
            <button
              onClick={() => setIsContactOpen(false)}
              className="absolute right-5 top-5 rounded-full p-2 text-gray-400 transition-colors hover:bg-gray-100 hover:text-black"
            >
              <X size={20} />
            </button>

            <h2 className="mb-6 text-2xl font-bold tracking-[-0.02em] text-gray-900">
              Contact Us
            </h2>

            <ContactForm onSuccess={handleFormSuccess} />
          </div>
        </div>
      )}

      {/* ================= ANIMATION ================= */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes draw {
              from { stroke-dashoffset: 1000; }
              to { stroke-dashoffset: 0; }
            }
            .animate-draw {
              stroke-dasharray: 1000;
              stroke-dashoffset: 1000;
              animation: draw 2s ease-in-out forwards;
            }
          `,
        }}
      />
    </>
  );
}
