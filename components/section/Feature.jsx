// app/page.tsx OR components/CTA.tsx
"use client";

import { useState } from "react";

export default function CTASection() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <section
      className="
        relative flex min-h-140 w-full items-center justify-center
        overflow-hidden bg-[#D9D9E9]
        py-24 lg:py-32
      "
    >
      {/* ================= BACKGROUND PATTERN OVERLAY ================= */}
      <div
        aria-hidden
        className="absolute inset-0 z-10 opacity-40 pointer-events-none"
        style={{
          backgroundImage: "url('@/assets/images/image-9.svg')",
          backgroundRepeat: "repeat",
          backgroundSize: "600px",
        }}
      />

      {/* ================= CONTENT ================= */}
      <div className="relative z-20 mx-auto w-full max-w-237.5 px-6 text-center">
        <h1
          className="
            font-heading font-bold text-[#1A1A1A]
            leading-[1.05]
            tracking-[-0.02em] sm:tracking-[-0.025em] lg:tracking-[-0.03em]
            text-[2.25rem]
            sm:text-[3.5rem]
            lg:text-[4.75rem]
          "
        >
          {/* -------- Mobile -------- */}
          <span className="block sm:hidden">
            <span className="block">Your vision</span>
            <span className="block">deserves an</span>
            <span className="block">architect</span>
            <span className="block">with purpose.</span>

            <span className="relative block mt-3">
              Have you been{" "}
              <span className="relative inline-block ml-2">
                <span className="relative z-20">x35ied?</span>

                {/* Hand-drawn underline */}
                <span
                  aria-hidden
                  className="
                    absolute inset-x-[-12%] bottom-[-10%]
                    h-[130%] z-10
                    bg-no-repeat bg-contain bg-center
                  "
                  style={{
                    backgroundImage: "url('@/assets/icons/fill-4.svg')",
                  }}
                />
              </span>
            </span>
          </span>

          {/* -------- Desktop -------- */}
          <span className="hidden sm:block">
            <span className="block">Your vision deserves an</span>
            <span className="block">architect with purpose.</span>

            <span className="relative block mt-2">
              Have you been{" "}
              <span className="relative inline-block ml-3">
                <span className="relative z-20">x35ied?</span>

                {/* Hand-drawn underline */}
                <span
                  aria-hidden
                  className="
                    absolute inset-x-[-12%] bottom-[-12%]
                    h-[130%] z-10
                    bg-no-repeat bg-contain bg-center
                  "
                  style={{
                    backgroundImage: "url('@/assets/icons/fill-4.svg')",
                  }}
                />
              </span>
            </span>
          </span>
        </h1>

        {/* ================= CTA BUTTON ================= */}
        <button
          onClick={() => setIsContactOpen(true)}
          className="
            mt-8 inline-flex items-center justify-center
            rounded-full bg-[#FFD700]
            px-10 py-4
            font-body text-sm font-bold tracking-[0.02em]
            text-[#1A1A1A]
            shadow-md transition
            hover:bg-[#F0C800]
            focus:outline-none focus-visible:ring-2 focus-visible:ring-black/20
          "
        >
          Contact us
        </button>
      </div>

      {/* ================= OPTIONAL MODAL PLACEHOLDER ================= */}
      {isContactOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="rounded-2xl bg-white p-8 shadow-xl">
            <p className="text-lg font-semibold">Contact form goes here</p>
            <button
              onClick={() => setIsContactOpen(false)}
              className="mt-4 text-sm underline"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
