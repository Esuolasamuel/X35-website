"use client";

import { X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function NotifyModal({ open, onClose }) {
  const [loading, setLoading] = useState(false);
  const inputRef = useRef(null);
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
            mx-auto text-[#0C0C1C]
          "
        >
          {/* TEXT */}
          <div
            className="
              flex flex-col text-center
              gap-4
              w-111.75 h-16.75
              mx-auto text-[#0C0C1C]
            "
          >
            <h2 className="text-[24px] font-heading font-black text-[#111827] leading-tight">
              Be the First to Know
            </h2>

            <p className="text-[#0C0C1C]/90 font-body text-base leading-relaxed">
              Enter your email and we’ll let you know when our product launches.
            </p>
          </div>

          {/* INPUT */}
          <input
            ref={inputRef}
            type="email"
            placeholder="Email Address"
            className="
              w-107 h-[46.5px]
              rounded-xl
              border border-gray-300
              px-4
              font-body text-base text-[#0C0C1C]
              placeholder:text-[#0C0C1C]/70
              focus:outline-none
              focus:ring-2 focus:ring-yellow-400/50
              transition-all
            "
          />
        </div>

        {/* BUTTON */}
        <button
          type="button"
          disabled={loading}
          onClick={async () => {
            if (!inputRef.current) return;
            
            const value = inputRef.current.value;
            const sanitize = (val) => {
              if (typeof val !== "string") return "";
              return val.trim().replace(/[<>]/g, "");
            };
            
            const email = sanitize(value);
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            
            if (!email || !emailRegex.test(email)) {
              return;
            }
            
            setLoading(true);
            
            try {
              const response = await fetch("/api/notify", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, name: "" }),
              });
              const result = await response.json();
              setLoading(false);
              if (result.success) {
                onClose();
              }
            } catch (error) {
              setLoading(false);
              console.error("Error submitting form:", error);
            }
          }}
          className="
            w-107 h-14.5
            mx-auto
            rounded-[60px]
            bg-[#FFD700]
            px-6 py-5
            font-body text-lg font-bold text-[#0C0C1C]
            hover:brightness-105
            transition-all
            active:scale-[0.98]
          "
        >
          {loading ? "Sending..." : "Notify me"}
        </button>
      </div>
    </div>
  );
}
