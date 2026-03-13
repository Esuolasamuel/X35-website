"use client";

import { X } from "lucide-react";

export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-999 flex items-center justify-center px-4">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-[#000000CC] backdrop-blur-[6px]"
      />

      {/* Modal */}
      <div
        className="
          relative z-10
          w-full max-w-140.75
          bg-white
          rounded-[15px]
          shadow-[0px_16px_36px_0px_#1B21360D]
          p-6 sm:p-8
          flex flex-col gap-6 sm:gap-8
        "
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 text-[#0C0C1C] hover:opacity-70"
        >
          <X size={20} strokeWidth={2.5} />
        </button>

        {/* Title */}
        <div className="max-w-111.75">
          <h2 className="text-xl sm:text-2xl font-heading font-bold text-[#0C0C1C] leading-tight">
            We’d love to hear from you!
          </h2>
        </div>

        {/* Content */}
        {children}
      </div>
    </div>
  );
}
