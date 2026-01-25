"use client";

import { useState } from "react";
import Image from "next/image";
import x35CTA from "@/assets/images/image-9.png";

export default function CTA({ title, text, paragraph, id }) {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <section
      id={`${id ? id : ""}`}
      className="relative w-full max-w-360 h-auto min-h-135.75 mx-auto overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={x35CTA}
          alt="X35 Projects CTA Background"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-[#C9C9DC]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full min-h-135.75 flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 text-center">
        {/* Main Heading */}
        <h2 className="font-heading font-bold text-white text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-[1.1] tracking-tight mb-4 sm:mb-6 max-w-4xl">
          {title || "Your vision deserves an architect with purpose."}
        </h2>

        {/* Subheading */}
        <p className="font-body text-white/90 text-lg sm:text-xl md:text-2xl lg:text-[28px] leading-relaxed tracking-tight mb-8 sm:mb-10 md:mb-12 max-w-3xl">
          {paragraph || "Have you been x35ied?"}
        </p>

        {/* Contact Button */}
        {text && (
          <button
            onClick={() => setIsContactOpen(true)}
            className="bg-[#F68D2B] hover:bg-[#E57D1B] text-white font-body font-semibold text-base sm:text-lg md:text-xl px-8 sm:px-10 md:px-12 py-3 sm:py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg shadow-md"
          >
            {text || "Contact us"}
          </button>
        )}

        {/* Optional decorative element */}
        <div className="mt-12 sm:mt-16 flex items-center justify-center space-x-4">
          <div className="w-2 h-2 bg-white/50 rounded-full"></div>
          <div className="w-2 h-2 bg-white/70 rounded-full"></div>
          <div className="w-2 h-2 bg-white rounded-full"></div>
          <div className="w-2 h-2 bg-white/70 rounded-full"></div>
          <div className="w-2 h-2 bg-white/50 rounded-full"></div>
        </div>
      </div>

      {/* Modal/Contact Form (optional) */}
      {isContactOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
            <p className="mb-4">Contact form would go here...</p>
            <button
              onClick={() => setIsContactOpen(false)}
              className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}