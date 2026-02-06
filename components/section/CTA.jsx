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
    "4xl": "max-w-[800px]", 
    "full": "max-w-full",
  };

  return (
    <>
      <section
        id={id}
        className={`relative w-full overflow-hidden
          flex items-center justify-center
          min-h-100
          min-[576px]:min-h-112.5
          min-[768px]:min-h-125
          min-[992px]:min-h-141.75
          min-[1200px]:min-h-150`}
      >
        {/* Layer 1: Background Pattern (Bottom) */}
        <div 
          className="absolute inset-0 z-0 bg-[url('/assets/images/image-9.svg')] bg-center bg-cover" 
          aria-hidden="true"
        />
        
        {/* Layer 2: Background Color (Middle - Blend applied here) */}
        <div 
          className="absolute inset-0 z-10 bg-[#D1D1E4] mix-blend-multiply" 
          aria-hidden="true"
        />

        {/* Layer 3: Text & Hand-drawn circle (Top) */}
        <div className={`relative z-20 px-6 py-12 flex flex-col transition-all duration-300
          ${alignmentMap[align] || alignmentMap.center} 
          ${widthMap[width] || widthMap['4xl']}`}
        >
          <h2 className={`font-heading font-extrabold text-[#1A1A1A] leading-[1.1] mb-6
            text-[2.2rem]
            min-[375px]:text-[2.5rem]
            min-[576px]:text-[3rem]
            min-[768px]:text-[3.5rem]
            min-[992px]:text-[4rem]
            min-[1200px]:text-[4.5rem]
            min-[1400px]:text-[5rem]`}
          >
            {title} 
            <span className="relative inline-block ml-2 whitespace-nowrap">
              x35ied?
              <svg className="absolute -top-[10%] -left-[10%] w-[120%] h-[120%] pointer-events-none" viewBox="0 0 200 100" fill="none">
                <path 
                  d="M20,40 C20,10 180,5 190,40 C195,80 30,95 15,65 C10,45 60,25 150,30" 
                  stroke="#FFD700" 
                  strokeWidth="4" 
                  strokeLinecap="round" 
                  className="animate-draw"
                />
              </svg>
            </span>
          </h2>

          {paragraph && (
            <p className="font-body font-medium text-[#1A1A1A]/70 mb-8 max-w-2xl text-base sm:text-lg lg:text-xl">
              {paragraph}
            </p>
          )}

          {text && (
            <button
              onClick={() => setIsContactOpen(true)}
              className="bg-[#FFD700] hover:bg-[#f2cc00] hover:scale-105 active:scale-95 transition-all duration-200 px-10 py-4 rounded-full font-bold text-black text-sm uppercase tracking-wider shadow-lg shadow-yellow-500/10"
            >
              {text}
            </button>
          )}
        </div>
      </section>

      {isContactOpen && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity">
          <div className="relative w-full max-w-md bg-white rounded-3xl p-8 shadow-2xl animate-in fade-in zoom-in duration-300">
            <button
              onClick={() => setIsContactOpen(false)}
              className="absolute top-5 right-5 p-2 text-gray-400 hover:text-black hover:bg-gray-100 rounded-full transition-colors"
            >
              <X size={20} />
            </button>
            <h2 className="text-2xl font-bold font-body mb-6 text-gray-900">Contact Us</h2>
            <ContactForm onSuccess={handleFormSuccess} />
          </div>
        </div>
      )}

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes draw {
          from { stroke-dashoffset: 1000; stroke-dasharray: 0 1000; }
          to { stroke-dashoffset: 0; stroke-dasharray: 1000 1000; }
        }
        .animate-draw {
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          animation: draw 1.5s ease-out forwards;
        }
      `}} />
    </>
  );
}