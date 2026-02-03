"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppWidget() {
  const phoneNumber = "+2348144694380";
  const message = "Hello! I'm interested in your services.";
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-lg hover:bg-[#20BD5A] hover:scale-110 transition-all duration-300 cursor-pointer group"
    >
      <MessageCircle className="w-7 h-7 text-white group-hover:animate-pulse" />
    </a>
  );
}
