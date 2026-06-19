"use client";

import { useRef } from "react";
import { X } from "lucide-react";
import Image from "next/image";
import partypopper from "@/assets/icons/Party-Popper.svg";
import { useFocusTrap } from "@/hooks/useFocusTrap";

export default function ComingSoonModal({ isOpen, onClose, onNotify }) {
  const modalRef = useRef(null);
  useFocusTrap(modalRef, isOpen);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/20 backdrop-blur-sm px-4">
      {/* MODAL CARD */}
      <div
        ref={modalRef}
        className="
          relative
          w-full max-w-102 h-auto
          rounded-[20px]
          bg-white
          p-6 sm:p-8
          shadow-xl
          animate-in fade-in zoom-in-95 duration-300
        "
      >
        {/* CLOSE ICON */}
        <button
          onClick={onClose}
          aria-label="Close"
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
            w-full
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
              w-full
            "
          >
            <h2 className="text-[18px] leading-tight font-bold font-body text-[#0F172A]">
              Coming Soon
            </h2>

            <p className="text-sm leading-[1.6] font-body text-[#0F172A]/90">
              We're crafting something exciting. Join our community to be first
              to know when it launches.
            </p>
          </div>

          {/* CTA BUTTON */}
          <button
            onClick={onNotify}
            className="
              w-full h-14.5
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
