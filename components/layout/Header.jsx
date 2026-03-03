"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

// import Modal from "@/components/ui/Modal";
import ContactModal from "../forms/ContactForm";
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
        className={`fixed top-0 left-1/2 -translate-x-1/2 z-50 w-full py-4 px-7.5 sm:px-15 md:px-20 lg:px-25 xl:px-30 transition-all duration-300 ${
          isTransparent ? "bg-transparent" : "bg-white shadow-[0px_16px_32px_0px_#BDBDBD40] border border-[#BDBDBD33]"
        }`}
      >
        <div className="flex items-center justify-between w-full mx-auto">
          <Link href="/">
            <Image src={Logo} alt="X35 Logo" width={60} height={60} className="w-10 h-10  sm:w-12 sm:h-12 md:w-13 md:h-13 lg:w-14 lg:h-14 xl:w-15 xl:h-15 xxl:w-16 xxl:h-16 xxxl:w-17 xxxl:h-17" />
          </Link>

          {/* Desktop Nav */}
          <nav
            className={`hidden lg:flex items-center gap-6 sm:gap-8 md:gap-9 lg:gap-10 text-xs sm:text-sm md:text-sm lg:text-sm font-semibold font-body cursor-pointer ${
              isTransparent ? "text-white" : "text-gray-900"
            }`}
          >
            <Link href="/">Home</Link>
            <Link href="/about">About Us</Link>
            <Link href="/Projects">Our Projects</Link>
            <Link href="/#services">Services</Link>
            <button onClick={() => setIsComingSoonOpen(true)}>Products</button>
          </nav>

          {/* CTA */}
          <button
            onClick={() => setIsContactOpen(true)}
            className="hidden lg:inline-flex bg-yellow-400 hover:bg-yellow-700 rounded-[60px] transition-colors px-4 sm:px-6 md:px-6 lg:px-9  py-2.5 sm:py-3 md:py-3.5 lg:py-5 font-body font-semibold text-xs sm:text-sm md:text-md lg:text-lg  text-dark-500 cursor-pointer"
          >
            Start your Project
          </button>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className={`lg:hidden  sm:p-1.5 md:p-2 ${
              isTransparent ? "text-white" : "text-gray-900"
            }`}
          >
            {menuOpen ? <X size={24} className="w-5 h-5 sm:w-7 sm:h-7 text-dark-500" /> : <Menu size={24} className="w-5 h-5 sm:w-7 sm:h-7" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 top-5 z-40 lg:hidden text-dark-500" onClick={() => setMenuOpen(false)}>
          <div className="fixed top-0 left-0 right-0 bg-white shadow-lg p-6 pt-20">
            <nav className="flex flex-col items-start font-body gap-6 text-xs sm:text-sm md:text-sm font-semibold text-dark-500">
              <Link href="/about" onClick={() => setMenuOpen(false)}>About Us</Link>
              <Link href="/Projects" onClick={() => setMenuOpen(false)}>Our Projects</Link>
              <Link href="/#services" onClick={() => setMenuOpen(false)}>Services</Link>
              <button className="text-start" onClick={() => { setIsComingSoonOpen(true); setMenuOpen(false); }}>Products</button>
              <button
                onClick={() => { setIsContactOpen(true); setMenuOpen(false); }}
                className="mt-4 rounded-full bg-yellow-400 hover:bg-yellow-700 px-4 sm:px-6 py-2 sm:py-3 font-body font-semibold text-xs sm:text-base text-dark-500 md:font-body md:font-semibold md:text-sm md:leading-none md:tracking-normal cursor-pointer"
              >
                Contact Us
              </button>
            </nav>
          </div>
        </div>
      )}

      {/* --- SUCCESS NOTIFICATION --- */}
    {showSuccess && (
      <div className="fixed top-4 left-1/2 -translate-x-1/2 z-100 w-full max-w-md px-4">
        <SuccessNotification
          isOpen={true}
          onClose={() => setShowSuccess(false)}
        />
      </div>
    )}

    {/* --- CONTACT FORM MODAL --- */}
    <ContactModal 
      isOpen={isContactOpen} 
      onClose={() => setIsContactOpen(false)} 
      onSuccess={handleFormSuccess} 
    />

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