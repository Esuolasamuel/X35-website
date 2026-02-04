"use client";

import { X } from "lucide-react";
import Image from "next/image";
import partypopper from "@/assets/icons/Party-Popper";

export default function ComingSoonModal({ isOpen, onClose, onNotify }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/20 backdrop-blur-sm px-4">
      <div
        className="
          relative w-full max-w-125 rounded-4xl bg-white p-10 md:p-14 shadow-xl
          animate-in fade-in zoom-in-95 duration-300
        "
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-8 top-8 text-[#0F172A] hover:opacity-70 transition-opacity"
        >
          <X size={24} strokeWidth={2.5} />
        </button>

        <div className="flex flex-col items-center text-center">
          {/* Party Popper Icon */}
          <div className="mb-6">
            <Image
              src={partypopper}
              alt="Party Popper"
              width={80}
              height={80}
              className="w-20 h-20 md:w-24 md:h-24"
            />
          </div>

          {/* Header */}
          <h2 className="text-[28px] md:text-[32px] leading-tight text-[#0F172A] font-black tracking-tight mb-4">
            Coming Soon
          </h2>
          
          {/* Subtext */}
          <p className="text-[#0F172A] text-lg md:text-xl leading-[1.6] max-w-95 mb-10 opacity-90">
            We’re crafting something exciting. Join our community to be first to know when it launches.
          </p>

          {/* Action Button */}
          <button
            onClick={onNotify}
            className="
              w-full rounded-full bg-[#FFD700] py-5
              text-lg font-bold text-[#0F172A]
              hover:brightness-95 transition-all active:scale-[0.98]
            "
          >
            Join now
          </button>
        </div>
      </div>
    </div>
  );
}