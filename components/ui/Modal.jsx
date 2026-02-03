"use client";

import { X } from "lucide-react";

export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
   <div className="fixed inset-0 z-90 flex items-center justify-center p-0 bg-black/60 backdrop-blur-sm">
           <div className="relative w-full max-w-md bg-white sm:rounded-lg md:rounded-xl lg:rounded-2xl p-0 md:p-8 shadow-2xl">
            <button 
              onClick={() => setIsContactOpen(false)}
              className="absolute top-4 right-4  text-dark-500hover: text-dark-500"
            >
              <X size={24} />
            </button>
            <h2 className="text-2xl font-bold mb-6  text-dark-500">Contact Us</h2>
            
            {/* Pass handleFormSuccess to the form */}
           {children}
          </div>
        </div>
  );
}
