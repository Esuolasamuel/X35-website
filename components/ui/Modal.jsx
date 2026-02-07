"use client";

import { X } from "lucide-react";

export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
   <div className="fixed inset-0 z-90 flex items-center justify-center p-4 sm:p-5 md:p-6 lg:p-8 bg-black/60 backdrop-blur-sm">
           <div className="relative w-full max-w-125
          animate-in fade-in zoom-in-95 duration-300 bg-white rounded-lg sm:rounded-lg md:rounded-xl lg:rounded-2xl p-2 md:p-4 lg:p-8 shadow-2xl">
            <button 
              onClick={() => setIsContactOpen(false)}
              className="absolute top-4 right-4 text-dark-500"
            >
              <X size={24} />
            </button>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold font-heading mb-4  text-dark-500">Contact Us</h2>
            
            {/* Pass handleFormSuccess to the form */}
           {children}
          </div>
        </div>
  );
}
