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
        className={`fixed top-0 left-1/2 -translate-x-1/2 z-50 w-full mx-auto h-18 p-4 xs:p-5 sm:p-6 md:p-7 lg:p-8 xl:p-9 xxl:p-10 xxxl:p-11 border border-[#BDBDBD33] transition-all duration-300 ${
          isTransparent ? "bg-transparent" : "bg-white shadow-[0px_16px_32px_0px_#BDBDBD40]"
        }`}
      >
        <div className="flex items-center justify-between w-full h-full">
          <Link href="/">
            <Image src={Logo} alt="X35 Logo" width={60} height={60} className="w-10 h-10 xs:w-11 xs:h-11 sm:w-12 sm:h-12 md:w-13 md:h-13 lg:w-14 lg:h-14 xl:w-15 xl:h-15 xxl:w-16 xxl:h-16 xxxl:w-17 xxxl:h-17" />
          </Link>

          {/* Desktop Nav */}
          <nav
            className={`hidden md:flex items-center gap-6 xs:gap-7 sm:gap-8 md:gap-9 lg:gap-10 xl:gap-11 xxl:gap-12 xxxl:gap-13 text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl xxl:text-3xl xxxl:text-4xl font-semibold font-body cursor-pointer ${
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
            className="hidden lg:inline-flex rounded-full bg-yellow-400 hover:bg-yellow-700 transition-colors px-4 xs:px-5 sm:px-6 md:px-7 lg:px-8 xl:px-9 xxl:px-10 xxxl:px-11 py-2 xs:py-2.5 sm:py-3 md:py-3.5 lg:py-4 xl:py-4.5 xxl:py-5 xxxl:py-5.5 font-body font-semibold text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl xxl:text-3xl xxxl:text-4xl text-dark-500"
          >
            Contact Us
          </button>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className={`md:hidden p-0.5 xs:p-1 sm:p-1.5 md:p-2 ${
              isTransparent ? "text-white" : "text-gray-900"
            }`}
          >
            {menuOpen ? <X size={24} className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7" /> : <Menu size={24} className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7" />}
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
              <button className="text-start" onClick={() => { setIsComingSoonOpen(true); setMenuOpen(false); }}>Products</button>
              <button
                onClick={() => { setIsContactOpen(true); setMenuOpen(false); }}
                className="mt-4 rounded-full bg-yellow-400 hover:bg-yellow-700 px-4 xs:px-5 sm:px-6 py-2 xs:py-2.5 sm:py-3 font-body font-semibold text-xs xs:text-sm sm:text-base text-dark-500 md:font-body md:font-semibold md:text-sm md:leading-none md:tracking-normal"
              >
                Contact Us
              </button>
            </nav>
          </div>
        </div>
      )}

      {/* --- SUCCESS NOTIFICATION (Top Center) --- */}
      {showSuccess && (
        <div className="fixed top-4 xs:top-5 sm:top-6 md:top-7 lg:top-8 xl:top-9 xxl:top-10 xxxl:top-11 left-1/2 -translate-x-1/2 z-100 w-full max-w-100 px-3 xs:px-4 sm:px-5 md:px-6 lg:px-7 xl:px-8 xxl:px-9 xxxl:px-10 animate-in fade-in slide-in-from-top-4 duration-500">
          <SuccessNotification
            isOpen={true}
            onClose={() => setShowSuccess(false)}
          />
        </div>
      )}

      {/* --- CONTACT FORM MODAL --- */}
      {isContactOpen && (
        <div className="fixed inset-0 z-90 flex items-center justify-center p-0 bg-black/60 backdrop-blur-sm">
          <div className="relative w-full max-w-sm xs:max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl xxl:max-w-4xl xxxl:max-w-5xl bg-white rounded-2xl p-0 md:p-6 lg:p-8 xl:p-9 xxl:p-10 xxxl:p-11 shadow-2xl">
            <button
              onClick={() => setIsContactOpen(false)}
              className="absolute top-3 xs:top-4 sm:top-5 md:top-6 lg:top-7 xl:top-8 xxl:top-9 xxxl:top-10 right-3 xs:right-4 sm:right-5 md:right-6 lg:right-7 xl:right-8 xxl:right-9 xxxl:right-10 text-dark-500 hover:text-dark-500"
            >
              <X size={20} className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
            </button>
            <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl xxl:text-7xl xxxl:text-8xl font-bold mb-4 xs:mb-5 sm:mb-6 md:mb-7 lg:mb-8 xl:mb-9 xxl:mb-10 xxxl:mb-11">Contact Us</h2>

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