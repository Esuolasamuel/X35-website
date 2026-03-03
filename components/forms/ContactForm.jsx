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

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    // Use FormData for industry-standard form handling
    const form = e.target;
    const formData = new FormData(form);
    
    // Extract and sanitize form data
    const sanitize = (value) => {
      if (typeof value !== "string") return "";
      return value
        .trim()
        .replace(/[<>]/g, "") // Remove potential XSS characters;e
    };

    const data = {
      name: sanitize(formData.get("name")),
      email: sanitize(formData.get("email")),
      projectType: sanitize(formData.get("projectType")),
      budget: sanitize(formData.get("budget")),
      timeline: sanitize(formData.get("timeline")),
      description: sanitize(formData.get("description")),
    };

    // Basic validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.name || !data.email || !data.description || !emailRegex.test(data.email)) {
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      setLoading(false);
      if (result.success) {
        onSuccess?.();
      }
    } catch (error) {
      setLoading(false);
      console.error("Error submitting form:", error);
    }
  }

  /* ===============================
     Shared floating label styles
     =============================== */

  const inputBase =
    "peer w-full h-[46.5px] px-4 pt-4 border border-[#BDBDBD] rounded-[6px] bg-transparent text-[15px] font-medium text-[#0C0C1C] outline-none focus:ring-2 focus:ring-yellow-400/50";

  const textareaBase =
    "peer w-full h-[150px] resize-none px-4 pt-4 border border-[#BDBDBD] rounded-[6px] bg-transparent text-[15px] font-medium text-[#0C0C1C] outline-none focus:ring-2 focus:ring-yellow-400/50";

  const labelBase =
    "absolute left-3 px-1 bg-white text-[13px] text-[#0C0C1C] pointer-events-none transition-all \
     top-1/2 -translate-y-1/2 \
     peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:text-xs \
     peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:-translate-y-1/2 peer-[:not(:placeholder-shown)]:text-xs";

  const labelBasetxa =
    "absolute left-3 px-1 bg-white text-[13px] text-[#0C0C1C] pointer-events-none transition-all \
     top-1/8 -translate-y-1/2 \
     peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:text-xs \
     peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:-translate-y-1/2 peer-[:not(:placeholder-shown)]:text-xs";

  return (
    /* Blur backdrop */
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#000000CC] backdrop-blur-[6px] px-4">
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-133 rounded-[15px] bg-white p-10 shadow-[0px_16px_36px_0px_#1B21360D]">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-6 top-6 text-[#0C0C1C] hover:opacity-70"
        >
          <X size={20} />
        </button>

        {/* Header */}
        <div className="mb-10">
          <h2 className="text-[26px] font-bold leading-[35.2px] tracking-[-0.03em] text-[#0C0C1C]">
            Start Your Project
          </h2>
          <p className="mt-1 text-[15px] font-medium leading-6 text-[#0C0C1C]">
            Short application form
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            {/* Full name */}
            <div className="relative">
              <input 
                placeholder=" " 
                required 
                name="name"
                className={inputBase} 
              />
              <label className={labelBase}>Enter your full name</label>
            </div>

            {/* Email */}
            <div className="relative">
              <input 
                placeholder=" " 
                required 
                type="email"
                name="email"
                className={inputBase} 
              />
              <label className={labelBase}>Enter your email address</label>
            </div>

            {/* Project type dropdown */}
            <div ref={dropdownRef} className="relative">
              <input type="hidden" name="projectType" value={projectType} />
              <button
                type="button"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex h-[46.5px] w-full items-center justify-between rounded-md border border-[#BDBDBD] px-4 text-[15px] text-[#0C0C1C]"
              >
                {projectType || "Select your project type"}
                <ChevronDown size={18} />
              </button>

              {dropdownOpen && (
                <div className="absolute z-20 mt-1 w-full rounded-[10px] border border-[#1524430D] bg-white p-2 shadow-[0px_16px_32px_0px_#BDBDBD4D]">
                  {PROJECT_TYPES.map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => {
                        setProjectType(type);
                        setDropdownOpen(false);
                      }}
                      className="flex h-10.75 w-full items-center rounded-[5px] px-4 text-left text-[15px] hover:bg-[#F2F4F5]"
                    >
                      {type}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Budget */}
            <div className="relative">
              <input 
                placeholder=" " 
                required 
                name="budget"
                className={inputBase} 
              />
              <label className={labelBase}>
                <span className="mr-1">₦</span>Estimated budget range
              </label>
            </div>

            {/* Timeline */}
            <div className="relative">
              <input 
                placeholder=" " 
                required 
                name="timeline"
                className={inputBase} 
              />
              <label className={labelBase}>Enter your timeline</label>
            </div>

            {/* Description */}
            <div className="relative">
              <textarea 
                placeholder=" " 
                required 
                name="description"
                className={textareaBase} 
              />
              <label className={labelBasetxa}>Describe your project</label>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="flex h-14.5 w-full items-center justify-center rounded-[60px] bg-[#FFD700] font-bold text-[#0C0C1C] transition hover:brightness-105 active:scale-[0.98] disabled:opacity-50"
          >
            {loading ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}