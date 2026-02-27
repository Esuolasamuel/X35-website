"use client";

import { X, ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const PROJECT_TYPES = [
  "Architecture",
  "Construction",
  "Design & Build",
  "Interior Design",
  "Project Management",
  "Remodelling",
  "Renovation",
];

export default function ContactModal({ isOpen, onClose, onSuccess }) {
  const [loading, setLoading] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [projectType, setProjectType] = useState("");

  const dropdownRef = useRef(null);

  /* Lock body scroll */
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [isOpen]);

  /* Close dropdown on outside click */
  useEffect(() => {
    function handleClick(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  if (!isOpen) return null;

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      onSuccess?.();
    }, 1500);
  }

  /* Shared input styles */
  const inputBase =
    "peer w-full h-[46.5px] px-4 border border-[#BDBDBD] rounded-[6px] bg-transparent text-[15px] font-medium text-[#0C0C1C] outline-none focus:ring-2 focus:ring-yellow-400/50";

  const labelBase =
    "absolute left-4 text-[13px] pointer-events-none transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-focus:top-2 peer-focus:text-xs text-[#0C0C1C]";

  return (
    /* Blur container */
    <div className="fixed inset-0 z-999 flex items-center justify-center bg-[#000000CC] backdrop-blur-[6px] px-4">
      <div className="absolute inset-0" onClick={onClose} />

      {/* Form container */}
      <div className="relative z-10 w-full max-w-133 rounded-[15px] bg-white p-10 shadow-[0px_16px_36px_0px_#1B21360D]">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute right-6 top-6 text-[#0C0C1C] hover:opacity-70"
        >
          <X size={20} />
        </button>

        {/* Heading container */}
        <div className="mb-10 flex-col w-full max-w-113 items-center justify-between">
          <h2 className="text-[26px] font-bold leading-[35.2px] tracking-[-0.03em] text-[#0C0C1C]">
            Start Your Project
          </h2>
          <p className="text-[15px] font-medium leading-6 text-[#64748B]">
            Short application form
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-10">
          {/* Inputs container */}
          <div className="flex w-full max-w-113 flex-col gap-4">
            {/* Name */}
            <div className="relative">
              <input placeholder=" " required className={inputBase} />
              <label className={labelBase}>Enter your full name</label>
            </div>

            {/* Dropdown */}
            <div ref={dropdownRef} className="relative">
              <button
                type="button"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex h-[46.5px] w-full items-center justify-between rounded-md border border-[#BDBDBD] px-4 text-[13px] font-normal text-[#0C0C1C]"
              >
                {projectType || "Select your project type"}
                <ChevronDown size={18} />
              </button>

              {dropdownOpen && (
                <div className="absolute z-20 mt-1.25 h-87.75 w-full overflow-y-auto rounded-[10px] border border-[#1524430D] bg-white p-2.5 shadow-[0px_16px_32px_0px_#BDBDBD4D]">
                  {PROJECT_TYPES.map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => {
                        setProjectType(type);
                        setDropdownOpen(false);
                      }}
                      className="flex h-10.75 w-full items-center rounded-[5px] px-4 text-left text-[13px] font-normal hover:bg-[#F2F4F5]"
                    >
                      {type}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Budget */}
            <div className="relative">
              <input placeholder=" " required className={inputBase} />
              <label className={labelBase}>
                <span className="mr-1">₦</span>Estimated budget range
              </label>
            </div>

            {/* Timeline */}
            <div className="relative">
              <input placeholder=" " required className={inputBase} />
              <label className={labelBase}>Enter your timeline</label>
            </div>

            {/* Textarea */}
            <div className="relative">
              <textarea
                required
                placeholder=" "
                className="peer h-37.5 w-full resize-none rounded-md border border-[#BDBDBD] px-4 py-4 text-[15px] font-medium outline-none focus:ring-2 focus:ring-yellow-400/50"
              />
              <label className="absolute left-4 top-4 text-[13px] text-[#0C0C1C] transition-all peer-focus:top-2 peer-focus:text-xs">
                Describe your project
              </label>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="flex h-14.5 w-full max-w-113 items-center justify-center rounded-[60px] bg-[#FFD700] font-bold text-[#111827] transition hover:brightness-105 active:scale-[0.98] disabled:opacity-50"
          >
            {loading ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}