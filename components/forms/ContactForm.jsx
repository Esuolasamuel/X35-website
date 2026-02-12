"use client";

import { X } from "lucide-react";
import { useEffect, useState } from "react";

export default function ContactModal({ isOpen, onClose, onSuccess }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.body.style.overflow = isOpen ? "hidden" : "auto";
    }
    return () => {
      if (typeof document !== "undefined") document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Logic for form submission
    setTimeout(() => {
      setLoading(false);
      if (onSuccess) onSuccess();
    }, 1500);
  };

  // Reusable styles based on your measurement guide
  const fieldClasses = `
    peer w-full h-full 
    px-[16px] py-[14px] 
    border-[1px] border-[#BDBDBD] 
    rounded-[6px] bg-transparent 
    text-base text-[#111827] 
    outline-none focus:ring-2 focus:ring-yellow-400/50 
    transition-all flex justify-between
  `;

  const labelClasses = `
    absolute left-[16px] text-sm text-[#64748B] 
    transition-all pointer-events-none
    peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 
    peer-focus:top-2 peer-focus:translate-y-0 peer-focus:text-xs
  `;

  return (
    // BLUR CONTAINER: Backdrop with blur(6px)
    <div className="fixed inset-0 z-999 flex items-center justify-center bg-[#000000CC] backdrop-blur-[6px] px-4">
      <div onClick={onClose} className="absolute inset-0" />

      {/* CONTACT FORM CONTAINER: 563px x 539px */}
      <div
        className="
          relative z-10 
          w-full max-w-140.75 min-h-134.75
          p-8 rounded-[15px] bg-white
          shadow-[0px_16px_36px_0px_#1B21360D]
          flex flex-col gap-8
          overflow-y-auto max-h-[95vh]
        "
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-[#0F172A] hover:opacity-70 transition-opacity"
        >
          <X size={20} strokeWidth={2.5} />
        </button>

        {/* TEXT CONTAINER (Header): 447px x 36px */}
        <div className="w-full max-w-111.75 h-9 flex items-center">
          <h2 className="text-xl sm:text-2xl mx-auto font-bold text-[#111827] leading-tight">
            We’d love to hear from you!
          </h2>
        </div>

        {/* FORM / TEXT CONTAINER: 499px x 385px */}
        <form 
          onSubmit={handleSubmit} 
          className="w-full max-w-124.75 h-auto sm:h-96.25 flex flex-col gap-8"
        >
          {/* INPUT AND TEXTAREA CONTAINER: 499px x 317px */}
          <div className="w-full max-w-124.75 h-auto sm:h-79.25 flex flex-col gap-5">
            
            {/* INPUT: 499px x 46.5px */}
            <div className="relative w-full h-[46.5px]">
              <input type="text" name="name" id="name" placeholder=" " required className={fieldClasses} />
              <label htmlFor="name" className={labelClasses}>Full Name</label>
            </div>

            {/* INPUT: 499px x 46.5px */}
            <div className="relative w-full h-[46.5px]">
              <input type="email" name="email" id="email" placeholder=" " required className={fieldClasses} />
              <label htmlFor="email" className={labelClasses}>Email Address</label>
            </div>

            {/* TEXTAREA: 499px x 192px */}
            <div className="relative w-full h-48">
              <textarea 
                name="message" 
                id="message" 
                placeholder=" " 
                required 
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

          {/* BUTTON: 499px x 58px */}
          <button
            type="submit"
            disabled={loading}
            className="
              w-full max-w-124.75 h-14.5 
              rounded-[60px] bg-[#FFD700] 
              pt-5 pr-6 pb-5 pl-6
              flex items-center justify-center gap-2.5
              font-bold text-[#111827] 
              hover:brightness-105 transition-all 
              active:scale-[0.98] disabled:opacity-50
            "
          >
            {loading ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}