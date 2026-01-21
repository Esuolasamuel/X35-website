"use client";

import { X } from "lucide-react";


export default function ComingSoonModal({
  isOpen,
  onClose,
  onNotify,
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-90 flex  text-dark-500items-center justify-center bg-dark-500/60 backdrop-blur-sm px-4">
      <div
        className="
          relative w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl
          animate-in slide-in-from-right-6 fade-in duration-300
        "
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4  text-dark-500hover: text-dark-500/80"
        >
          <X size={22} />
        </button>

        <div className="text-center space-y-4">
          <div className="text-5xl">🎉</div>
          <h2 className="text-2xl  text-dark-500font-bold">Coming Soon</h2>
          <p className=" text-dark-500">
            We’re crafting something exciting. Be the first to know when it launches.
          </p>

          <button
            onClick={onNotify}
            className="
              mt-6 w-full rounded-full bg-yellow-400 py-4
              font-semibold  text-dark-500
              hover:bg-yellow-700 transition
            "
          >
            Notify me
          </button>
        </div>
      </div>
    </div>
  );
}
