"use client";

import { X } from "lucide-react";
import { useEffect } from "react";

export default function NotifyModal({ open, onClose }) {
  // Lock scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
      />

      {/* Modal */}
      <div className="relative z-10 w-[92%] max-w-md rounded-2xl bg-white px-6 py-7 shadow-2xl">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-black"
        >
          <X size={20} />
        </button>

        {/* Content */}
        <h2 className="text-center text-2xl font-bold text-[#0C0C1C] mb-2">
          Be the First to Know
        </h2>
        <p className="text-center text-sm text-gray-600 mb-6">
          Enter your email and we’ll let you know when our product launches.
        </p>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full name"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />

          <input
            type="email"
            placeholder="Email address"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />

          <button
            type="submit"
            className="w-full rounded-full bg-yellow-400 py-3 font-semibold text-[#0C0C1C] transition hover:bg-yellow-500"
          >
            Notify Me
          </button>
        </form>
      </div>
    </div>
  );
}
