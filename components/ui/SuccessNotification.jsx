import { Check, X } from "lucide-react";

// components/ui/SuccessNotification.tsx
export default function SuccessNotification({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="relative bg-white rounded-[20px] p-6 shadow-xl border border-gray-100 flex flex-col items-center text-center">
      <button onClick={onClose} className="absolute top-3 right-3 text-gray-400">
        <X size={18} />
      </button>
      
      <div className="w-12 h-12 bg-[#00A859] rounded-full flex items-center justify-center mb-4">
        <Check size={24} className="text-white stroke-[3px]" />
      </div>

      <h3 className="font-bold text-lg mb-1">Thank you!</h3>
      <p className="text-sm text-gray-600 leading-tight">
        Your message has been received. Our team will review it and get back to you shortly.
      </p>
    </div>
  );
}