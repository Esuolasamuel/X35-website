"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import ContactForm from "../forms/ContactForm";

export default function CTA({ title, text, paragraph, id, align = "center", width = "4xl" }) {
  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    if (isContactOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [isContactOpen]);

  const handleFormSuccess = () => {
    setIsContactOpen(false);
  };

  const alignmentMap = {
    left: "text-left items-start mx-0",
    center: "text-center items-center mx-auto",
    right: "text-right items-end mx-0 ml-auto",
  };

  const widthMap = {
    "xl": "max-w-[1200px]",
    "2xl": "max-w-[1400px]",
    "4xl": "max-w-[950px]", // Widened slightly to match the screenshot's line breaks
    "full": "max-w-full",
  };

  return (
    <>
      <section
        id={id}
        /* Adjusted height to match the '1440 x 567' aspect from screenshot */
        className="relative w-full overflow-hidden flex items-center justify-center py-20 lg:py-32 bg-[#D9D9E9]"
      >
        {/* Background Layer with Wavvy Pattern */}
        <div 
          className="absolute inset-0 z-0 opacity-40 mix-blend-overlay" 
          style={{ 
            backgroundImage: "url('/assets/images/image-9.svg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
          aria-hidden="true"
        />

        {/* Content Layer */}
        <div className={`relative z-10 px-6 flex flex-col transition-all duration-300
          ${alignmentMap[align] || alignmentMap.center} 
          ${widthMap[width] || widthMap['4xl']}`}
        >
          <h2 className={`font-heading font-bold text-[#1A1A1A] leading-[1.05] mb-10
            text-[2.25rem]
            sm:text-[3.5rem]
            lg:text-[4.8rem]`}
          >
            {title} 
            <span className="relative inline-block ml-3">
              x35ied?
              {/* Hand-drawn circle SVG */}
              <svg 
                className="absolute -top-[15%] -left-[10%] w-[125%] h-[140%] pointer-events-none" 
                viewBox="0 0 200 100" 
                preserveAspectRatio="none"
              >
                <path 
                  d="M10,50 C10,20 100,5 180,20 C200,45 150,90 80,90 C30,90 5,70 15,45 C25,20 90,15 170,25" 
                  stroke="#FFD700" 
                  strokeWidth="3" 
                  strokeLinecap="round" 
                  className="animate-draw"
                />
              </svg>
            </span>
          </h2>

          {paragraph && (
            <p className="font-body font-medium text-[#1A1A1A]/80 mb-10 max-w-2xl text-lg lg:text-xl leading-relaxed">
              {paragraph}
            </p>
          )}

          {text && (
            <button
              onClick={() => setIsContactOpen(true)}
              /* Pixel perfect button styling: Rounded-full, specific yellow, and dark text */
              className="bg-[#FFD700] hover:bg-[#F0C800] transition-all duration-200 px-12 py-4 rounded-full font-body font-bold text-[#1A1A1A] text-sm md:text-base shadow-md"
            >
              {text}
            </button>
          )}
        </div>
      </section>

      {/* Modal Container */}
      {isContactOpen && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="relative w-full max-w-md bg-white rounded-3xl p-8 shadow-2xl">
            <button
              onClick={() => setIsContactOpen(false)}
              className="absolute top-5 right-5 p-2 text-gray-400 hover:text-black hover:bg-gray-100 rounded-full transition-colors"
            >
              <X size={20} />
            </button>
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Contact Us</h2>
            <ContactForm onSuccess={handleFormSuccess} />
          </div>
        </div>
      )}

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes draw {
          from { stroke-dashoffset: 1000; }
          to { stroke-dashoffset: 0; }
        }
        .animate-draw {
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          animation: draw 2s ease-in-out forwards;
        }
      `}} />
    </>
  );
}