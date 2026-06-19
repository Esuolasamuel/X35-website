"use client";

import { useRef, useState, useEffect } from "react";
import { X } from "lucide-react";
import { useFocusTrap } from "@/hooks/useFocusTrap";

export default function NotifyModal({ open, onClose }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const inputRef = useRef(null);
  const modalRef = useRef(null);

  useFocusTrap(modalRef, open);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  if (!open) return null;

  async function handleSubmit() {
    if (!inputRef.current) return;

    const value = inputRef.current.value;
    const sanitize = (val) => {
      if (typeof val !== "string") return "";
      return val.trim().replace(/[<>]/g, "");
    };

    const email = sanitize(value);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email || !emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/notify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name: "" }),
      });
      const result = await response.json();
      setLoading(false);
      if (!response.ok || !result.success) {
        setError("Something went wrong. Please try again.");
        return;
      }
      onClose();
    } catch {
      setLoading(false);
      setError("Something went wrong. Please try again.");
    }
  }

  return (
    <div className="fixed inset-0 z-999 flex items-center justify-center px-4">
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
        ref={modalRef}
        className="
          relative z-10
          w-full max-w-123 h-auto
          rounded-[15px]
          bg-white
          p-6 sm:p-8
          flex flex-col
          gap-6 sm:gap-8
          shadow-xl
          animate-in fade-in zoom-in-95 duration-200
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

        {/* TEXT + INPUT CONTAINER */}
        <div className="flex flex-col gap-6 sm:gap-8 w-full text-[#0C0C1C]">
          {/* TEXT */}
          <div className="flex flex-col text-center gap-4 w-full text-[#0C0C1C]">
            <h2 className="text-xl sm:text-[24px] font-heading font-black text-[#111827] leading-tight">
              Be the First to Know
            </h2>

            <p className="text-[#0C0C1C]/90 font-body text-sm sm:text-base leading-relaxed">
              Enter your email and we&apos;ll let you know when our product launches.
            </p>
          </div>

          {/* INPUT */}
          <div className="flex flex-col gap-1">
            <label htmlFor="notify-email" className="sr-only">
              Email Address
            </label>
            <input
              id="notify-email"
              ref={inputRef}
              type="email"
              placeholder="Email Address"
              className="
                w-full h-[46.5px]
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
            {error && (
              <p role="alert" className="text-sm text-red-600 font-body">
                {error}
              </p>
            )}
          </div>
        </div>

        {/* BUTTON */}
        <button
          type="button"
          disabled={loading}
          onClick={handleSubmit}
          className="
            w-full h-14.5
            rounded-[60px]
            bg-[#FFD700]
            px-6 py-5
            font-body text-lg font-bold text-[#0C0C1C]
            hover:brightness-105
            transition-all
            active:scale-[0.98]
            disabled:opacity-50
          "
        >
          {loading ? "Sending..." : "Notify me"}
        </button>
      </div>
    </div>
  );
}
