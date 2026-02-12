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
    <div className="fixed inset-0 z-999 flex items-center justify-center">
      {/* BLUR BACKDROP */}
      <div
        onClick={onClose}
        className="
          absolute inset-0
          bg-[#000000CC]
          backdrop-blur-[6px]
        "
      />

      {/* MODAL */}
      <div
        className="
          relative z-10
          w-123 h-[299.5px]
          rounded-[15px]
          bg-white
          p-8
          flex flex-col
          gap-8
          shadow-xl
          animate-in fade-in zoom-in-95 duration-200
        "
      >
        {/* CLOSE ICON */}
        <button
          onClick={onClose}
          className="
            absolute top-6 right-6
            text-[#0F172A]
            hover:opacity-70
            transition-opacity
          "
        >
          <X size={20} strokeWidth={2.5} />
        </button>

        {/* TEXT + INPUT CONTAINER */}
        <div
          className="
            flex flex-col
            gap-8
            w-107 h-[145.5px]
            mx-auto
          "
        >
          {/* TEXT */}
          <div
            className="
              flex flex-col text-center
              gap-4
              w-111.75 h-16.75
              mx-auto
            "
          >
            <h2 className="text-[24px] font-heading font-black text-[#111827] leading-tight">
              Be the First to Know
            </h2>

            <p className="text-[#111827]/90 font-body text-base leading-relaxed">
              Enter your full name to get notified
            </p>
          </div>

          {/* INPUT */}
          <input
            type="text"
            placeholder="Full name"
            className="
              w-107 h-[46.5px]
              rounded-xl
              border border-gray-300
              px-4
              font-body text-base text-[#111827]
              placeholder:text-[#111827]/70
              focus:outline-none
              focus:ring-2 focus:ring-yellow-400/50
              transition-all
            "
          />
        </div>

        {/* BUTTON */}
        <button
          type="button"
          className="
            w-107 h-14.5
            mx-auto
            rounded-[60px]
            bg-[#FFD700]
            px-6 py-5
            font-body text-lg font-bold text-[#111827]
            hover:brightness-105
            transition-all
            active:scale-[0.98]
          "
        >
          Notify me
        </button>
      </div>
    </div>
  );
}
