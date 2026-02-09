import Image from "next/image";
import whatsappIcon from "@/assets/icons/whatsapp.svg";

export default function WhatsAppWidget() {
  const phoneNumber = "+2348029420580";
  const message = "Hello! I'm interested in your services.";
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-20 h-20 bg-[#25D366] rounded-full shadow-lg hover:bg-[#20BD5A] hover:scale-110 transition-all duration-300 cursor-pointer group"
    >
      <Image
        src={whatsappIcon}
        alt="WhatsApp"
        width={60}
        height={60}
        className="w-15 h-15 text-white"
      />
    </a>
  );
}
