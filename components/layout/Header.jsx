"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";


// import Modal from "@/components/ui/Modal";
import ContactForm from "../forms/ContactForm";
import SuccessNotification from "../ui/SuccessNotification";
import ComingSoonModal from "../ui/ComingSoonModal";
import NotifyModal from "../ui/NotifyModal";
import Logo from "@/assets/images/logo.svg";


export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isComingSoonOpen, setIsComingSoonOpen] = useState(false);
  const [notifyModalOpen, setNotifyModalOpen] = useState(false);

  const [showSuccess, setShowSuccess] = useState(false);

  /* Scroll detection */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 222);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Logical checks for routing
  const isAboutPage = pathname === "/about";
  const isProjectsPage = pathname === "/Projects";

  // If it's about page, force white. Otherwise, toggle based on scroll.
  const isTransparent = isAboutPage ? false : (isProjectsPage ? scrolled : !scrolled);

  const handleFormSuccess = () => {
    // 1. Close the contact form modal immediately
    setIsContactOpen(false);
    // 2. Show the success notification at the top
    setShowSuccess(true);
    
    // 3. Automatically hide the notification after 5 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 5000);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-1/2 -translate-x-1/2 z-50 w-360 h-23 pt-4 pr-30 pb-4 pl-30 border transition-all duration-300 ${
          isTransparent ? "bg-transparent" : "bg-white border-[#BDBDBD33] shadow-[0px_16px_32px_0px_#BDBDBD40]"
        }`}
      >
        <div className=" flex items-center justify-between ">
          <Link href="/">
            <Image src={Logo} alt="X35 Logo" width={60} height={60} />
          </Link>

          {/* Desktop Nav */}
          <nav
            className={`hidden lg:flex items-center gap-12 text-base font-semibold font-body cursor-pointer    ${
              isTransparent ? "text-white" : "text-gray-900"
            }`}
          >
            <Link href="/about">About Us</Link>
            <Link href="/Projects">Our Projects</Link>
            <Link href="/#services">Services</Link>
            <button onClick={() => setIsComingSoonOpen(true)}>Products</button>
          </nav>

          {/* CTA */}
          <button
            onClick={() => setIsContactOpen(true)}
            className="hidden lg:inline-flex rounded-full bg-yellow-500 hover:bg-[#FFD700] transition-colors px-6 py-3.5 font-body font-semibold text-sm text-dark-500"
          >
            Contact Us
          </button>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className={`lg:hidden p-2 ${
              isTransparent ? "text-white" : "text-gray-900"
            }`}
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 top-5 z-40 lg:hidden" onClick={() => setMenuOpen(false)}>
          <div className="fixed top-0 left-0 right-0 bg-white shadow-lg p-6 pt-20">
            <nav className="flex flex-col items-center gap-6 text-lg font-semibold text-gray-900">
              <Link href="/about" onClick={() => setMenuOpen(false)}>About Us</Link>
              <Link href="/Projects" onClick={() => setMenuOpen(false)}>Our Projects</Link>
              <Link href="/#services" onClick={() => setMenuOpen(false)}>Services</Link>
              <button className="" onClick={() => { setIsComingSoonOpen(true); setMenuOpen(false); }}>Products</button>
              <button
                onClick={() => { setIsContactOpen(true); setMenuOpen(false); }}
                className="mt-4 rounded-full bg-[#FFD700] px-6 py-3 font-body font-semibold text-sm text-dark-500"
              >
                Contact Us
              </button>
            </nav>
          </div>
        </div>
      )}

      {/* --- SUCCESS NOTIFICATION (Top Center) --- */}
      {showSuccess && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-100 w-full max-w-100 px-4 animate-in fade-in slide-in-from-top-4 duration-500">
          <SuccessNotification 
            isOpen={true} 
            onClose={() => setShowSuccess(false)} 
          />
        </div>
      )}

      {/* --- CONTACT FORM MODAL --- */}
      {isContactOpen && (
        <div className="fixed inset-0 z-90 flex items-center justify-center p-0 bg-black/60 backdrop-blur-sm">
          <div className="relative w-full max-w-md bg-white rounded-2xl p-0 md:p-8 shadow-2xl">
            <button
              onClick={() => setIsContactOpen(false)}
              className="absolute top-4 right-4 text-dark-500 hover:text-dark-500"
            >
              <X size={24} />
            </button>
            <h2 className="text-2xl font-bold mb-6">Contact Us</h2>

            {/* Pass handleFormSuccess to the form */}
            <ContactForm onSuccess={handleFormSuccess} />
          </div>
        </div>
      )}

      {/* --- COMING SOON MODAL --- */}
      <ComingSoonModal
        isOpen={isComingSoonOpen}
        onClose={() => setIsComingSoonOpen(false)}
        onNotify={() => {
          setIsComingSoonOpen(false);
          setNotifyModalOpen(true);
        }}
      />

      {/* --- NOTIFY MODAL --- */}
      <NotifyModal open={notifyModalOpen} onClose={() => setNotifyModalOpen(false)} />
    </>
  );
}
