"use client";

import { X } from "lucide-react";
import Image from "next/image";
import partypopper from "@/assets/icons/Party-Popper.svg";

export default function ComingSoonModal({ isOpen, onClose, onNotify }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/20 backdrop-blur-sm">
      {/* MODAL CARD */}
      <div
        className="
          relative
          w-102 h-85.5
          rounded-[20px]
          bg-white
          p-8
          shadow-xl
          animate-in fade-in zoom-in-95 duration-300
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

        {/* CONTENT WRAPPER */}
        <div
          className="
            flex flex-col items-center
            gap-6
            w-86
            mx-auto
          "
        >
          {/* ICON */}
          <Image
            src={partypopper}
            alt="Party Popper"
            width={64}
            height={64}
            className="w-16 h-16"
          />

          {/* TEXT CONTAINER */}
          <div
            className="
              flex flex-col items-center text-center
              gap-4
              w-86 h-22
            "
          >
            <h2 className="text-[18px] leading-tight font-bold font-body text-[#0F172A]">
              Coming Soon
            </h2>

            <p className="text-sm leading-[1.6] font-body text-[#0F172A]/90">
              We’re crafting something exciting. Join our community to be first
              to know when it launches.
            </p>
          </div>

          {/* CTA BUTTON */}
          <button
            onClick={onNotify}
            className="
              w-86 h-14.5
              rounded-[60px]
              bg-[#FFD700]
              px-6 py-5
              text-lg font-bold font-body text-[#0F172A]
              hover:brightness-95
              transition-all
              active:scale-[0.98]
            "
          >
            Join now
          </button>
        </div>
      </div>
    </div>
  );
}
