"use client";

import { X } from "lucide-react";
import { useEffect } from "react";

export default function ContactModal({ isOpen, onClose }) {
  // Prevent body scroll when modal is active
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  // Measurement Guide Styles
  const fieldClasses = `
    peer w-full h-full px-[16px] py-[14px] 
    border border-[#BDBDBD] rounded-[6px] 
    bg-transparent text-base text-[#111827] 
    outline-none focus:ring-2 focus:ring-yellow-400/50 
    transition-all
  `;

  const labelClasses = `
    absolute left-[16px] text-sm text-[#64748B] 
    transition-all pointer-events-none
    peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 
    peer-focus:top-2 peer-focus:translate-y-0 peer-focus:text-xs
  `;

  return (
    // Modal Container (Backdrop) - Covers full viewport
    <div className="fixed inset-0 z-999 flex items-center justify-center bg-[#000000CC] backdrop-blur-[6px] px-4">
      {/* Click-away backdrop */}
      <div onClick={onClose} className="absolute inset-0" />

      {/* MODAL: Max-Width 563px, Min-Height 539px */}
      <div
        className="
          relative z-10 
          w-full max-w-140.75 min-h-134.75
          p-6 sm:p-8 
          rounded-[15px] bg-white
          shadow-[0px_16px_36px_0px_#1B21360D]
          flex flex-col gap-8
          overflow-y-auto max-h-[90vh]
        "
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-[#0F172A] hover:opacity-70 transition-opacity"
        >
          <X size={20} strokeWidth={2.5} />
        </button>

        {/* Text Container */}
        <div className="w-full max-w-111.75 min-h-9 flex items-center">
          <h2 className="text-xl sm:text-2xl font-bold text-[#111827] leading-tight">
            We’d love to hear from you!
          </h2>
        </div>

        {/* Form Content Wrapper */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-full max-w-124.75 flex flex-col gap-8"
        >
          {/* Label Container */}
          <div className="w-full flex flex-col gap-4">
            
            {/* Floating Input: Height 46.5px */}
            <div className="relative w-full h-[46.5px]">
              <input type="text" name="name" id="name" placeholder=" " className={fieldClasses} />
              <label htmlFor="name" className={labelClasses}>Full Name</label>
            </div>

            {/* Floating Input: Height 46.5px */}
            <div className="relative w-full h-[46.5px]">
              <input type="email" name="email" id="email" placeholder=" " className={fieldClasses} />
              <label htmlFor="email" className={labelClasses}>Email Address</label>
            </div>

            {/* Floating Textarea: Height 192px (Shrinks on very small height screens) */}
            <div className="relative w-full h-37.5 sm:h-48">
              <textarea 
                name="message" 
                id="message"
                placeholder=" " 
                className={`${fieldClasses} resize-none`} 
              />
              <label 
                htmlFor="message"
                className="absolute left-4 top-4 text-sm text-[#64748B] transition-all peer-focus:top-2 peer-focus:text-xs"
              >
                Message
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="
              w-full h-14.5 rounded-[60px] bg-[#FFD700]
              font-bold text-[#111827] hover:brightness-105
              transition-all active:scale-[0.98]
            "
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}