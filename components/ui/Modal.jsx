"use client";

import { X } from "lucide-react";

export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
   <div className="fixed inset-0 z-[90] flex items-center justify-center p-0 bg-black/60 backdrop-blur-sm">
           <div className="relative w-full max-w-md bg-white rounded-2xl p-0 md:p-8 shadow-2xl">
            <button 
              onClick={() => setIsContactOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X size={24} />
            </button>
            <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
            
            {/* Pass handleFormSuccess to the form */}
           {children}
          </div>
        </div>
  );
}
