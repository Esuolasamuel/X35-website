"use client";

import { X } from "lucide-react";
import { useEffect } from "react";

export default function NotifyModal({ open, onClose }) {
  // Lock scroll when modal is open
  useEffect(() => {
    if (typeof window !== "undefined") {
      document.body.style.overflow = open ? "hidden" : "auto";
    }
    return () => {
      if (typeof window !== "undefined") {
        document.body.style.overflow = "auto";
      }
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-999 flex items-center justify-center p-4">
      {/* Backdrop - Lighter gray as seen in the image background */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-[#E5E7EB]/80 backdrop-blur-[2px]"
      />

      {/* Modal Container */}
      <div className="relative z-10 w-full max-w-145 rounded-4xl bg-white px-8 py-12 md:px-16 md:py-16 shadow-xl animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close Button - Positioned exactly like the 'X' in the image */}
        <button
          onClick={onClose}
          className="absolute right-8 top-8 text-[#0F172A] hover:opacity-60 transition-opacity"
        >
          <X size={24} strokeWidth={2.5} />
        </button>

        {/* Header Section */}
        <div className="text-center mb-10">
          <h2 className="text-[32px] md:text-[42px] font-heading font-black text-[#111827] leading-tight tracking-tight mb-4">
            Be the First to Know
          </h2>
          <p className="text-[#111827] font-body text-lg md:text-xl leading-relaxed max-w-105 mx-auto opacity-90">
            Enter your email and we’ll let you know when our product launches.
          </p>
        </div>

        {/* Form Section */}
        <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
          <div className="relative">
            <input
              type="text"
              placeholder="Full name"
              className="w-full rounded-xl border border-gray-300 font-body bg-transparent px-6 py-5 text-xl text-[#111827] placeholder:text-[#111827] focus:outline-none focus:ring-2 focus:ring-yellow-400/50 transition-all"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-full bg-[#FFD700] py-6 text-xl font-body font-bold text-[#111827] transition-all hover:brightness-105 active:scale-[0.98]"
          >
            Notify me
          </button>
        </form>
      </div>
    </div>
  );
}