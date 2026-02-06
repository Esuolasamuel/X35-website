"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import ContactForm from "../forms/ContactForm";

export default function CTA({ title, text, paragraph, id }) {
  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    if (isContactOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [isContactOpen]);

  return (
    <>
      <section
        id={id}
        className={`
          relative w-full flex items-center justify-center min-h-141.75 
          /* Layer 1: The Background Color */
          bg-[#D1D1E4] 
          /* Layer 2: The Pattern (Using Tailwind utility + URL) */
          bg-[url('/assets/images/image-9.svg')] bg-cover bg-center bg-no-repeat 
          /* Using mix-blend-multiply to let the color bleed through */
          bg-blend-multiply
        `}
      >
        {/* Content Wrapper - Ensuring z-index stacking */}
        <div className="relative z-20 px-6 py-12 flex flex-col items-center text-center max-w-300">
          <h2 
            className="font-fraunces font-black text-[#1A1A1A] leading-[1.05] tracking-[-0.03em]
            text-[2.8rem] sm:text-[3.8rem] md:text-[4.5rem] lg:text-[5.5rem] xl:text-[6rem]"
            style={{ fontFamily: 'var(--font-fraunces), serif' }}
          >
            Your vision deserves an<br />
            architect with purpose.<br />
            Have you been{" "}
            <span 
              className={`
                relative inline-block px-4 py-2
                /* Layer 3: The Yellow Circle Background Image */
                bg-[url('/assets/images/circle-sketch.svg')] 
                bg-size-[110%_120%] bg-position-[center_center] bg-no-repeat
              `}
            >
              x35ied?
            </span>
          </h2>

          {paragraph && (
            <p className="mt-8 font-sans font-medium text-[#1A1A1A]/70 max-w-2xl text-lg lg:text-xl">
              {paragraph}
            </p>
          )}

          <button
            onClick={() => setIsContactOpen(true)}
            className="mt-10 bg-[#FFD700] hover:bg-[#F5C200] transition-transform duration-300 px-10 py-4 rounded-full font-bold text-[#1A1A1A] text-[16px] shadow-sm active:scale-95 z-30"
          >
            {text || "Contact us"}
          </button>
        </div>

        {/* Layer 4: Optional Overlay to control pattern opacity exactly */}
        <div className="absolute inset-0 bg-[#D1D1E4]/40 z-10 pointer-events-none" />
      </section>

      {/* Modal */}
      {isContactOpen && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm transition-all">
          <div className="relative w-full max-w-md bg-white rounded-[2.5rem] p-10 shadow-2xl animate-in zoom-in duration-300">
            <button
              onClick={() => setIsContactOpen(false)}
              className="absolute top-8 right-8 p-2 text-gray-400 hover:text-black transition-colors"
            >
              <X size={24} />
            </button>
            <h2 className="text-3xl font-bold font-fraunces mb-6 text-gray-900">Contact Us</h2>
            <ContactForm onSuccess={() => setIsContactOpen(false)} />
          </div>
        </div>
      )}
    </>
  );
}