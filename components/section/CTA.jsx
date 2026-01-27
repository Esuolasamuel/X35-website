"use client";

import { useState } from "react";
import ContactForm from "../forms/ContactForm";
import { X } from "lucide-react";

export default function CTA({title, text, paragraph, id}) {
    const [isContactOpen, setIsContactOpen] = useState(false);

    return (
        <>
            <section id={`${id ? id : ''}`} className="relative bg-[url(@/assets/images/image-9.png)] w-full min-h-135.75 z-20">
                <div className="absolute inset-0 bg-[#D1D1E4] z-10 opacity-50"></div>
                <div className="relative flex flex-col items-center justify-center z-30 h-full">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-12 pt-6 sm:pt-8 md:pt-10 lg:pt-12 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 font-heading font-bold  mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-14">
                        {title}
                    </h2>
                    {text && <button
                    onClick={() => setIsContactOpen(true)}
                    className="bg-yellow-500 hover:bg-yellow-700 px-6 sm:px-7 md:px-8 py-2 sm:py-3 rounded-full font-body cursor-pointer font-medium">{text} </button>}
                        {paragraph && <p
                   className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-[1.8]  text-dark-500 mb-6 sm:mb-8 last:mb-0 font-body text-dark font-normal tracking-wide"
                   >
                    {paragraph}
                  </p>}
                </div>
            </section>
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
        </>
    );
}
