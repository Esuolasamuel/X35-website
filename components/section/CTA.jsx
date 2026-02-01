"use client";

import { useState } from "react";
import ContactForm from "../forms/ContactForm";
import { X } from "lucide-react";

export default function CTA({title, text, paragraph, id, align="center", width=""}) {
    const [isContactOpen, setIsContactOpen] = useState(false);

    return (
        <>
            <section id={`${id ? id : ''}`} className="relative bg-[url(@/assets/images/image-9.png)] w-full min-h-85.75 sm:min-h-90 md:min-h-95 lg:min-h-100 xl:min-h-105 2xl:min-h-110 z-20 text-dark-500">
                <div className="absolute inset-0 bg-[#D1D1E4] z-10 opacity-90"></div>
                <div className={`relative flex flex-col items-center justify-center max-w-${width} z-30 h-full p-15 sm:p-20 md:p-25 lg:p-30 xl:p-30 2xl:p-30 text-${align} mx-auto`}>
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-5xl 2xl:text-6xl leading-tight sm:leading-snug md:leading-normal lg:leading-relaxed xl:leading-loose px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 font-heading font-bold mb-4 sm:mb-6 md:mb-8 lg:mb-10 xl:mb-12 2xl:mb-14">
                        {title}
                    </h2>
                    {text && <button
                    onClick={() => setIsContactOpen(true)}
                    className="bg-yellow-500 hover:bg-yellow-700 px-6 sm:px-7 md:px-8 py-2 sm:py-3 rounded-full font-body cursor-pointer font-medium text-dark-500">{text} </button>}
                        {paragraph && <p
                   className={`text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl leading-relaxed sm:leading-loose md:leading-relaxed lg:leading-loose xl:leading-relaxed 2xl:leading-loose text-dark-500 mb-4 sm:mb-6 md:mb-8 lg:mb-10 xl:mb-12 2xl:mb-14 last:mb-0 font-body text-dark font-normal tracking-wide`}
                   >
                    {paragraph}
                  </p>}
                </div>
            </section>
                  {/* --- CONTACT FORM MODAL --- */}
                  {isContactOpen && (
                    <div className="fixed inset-0 z-90 flex items-center justify-center p-0 bg-black/60 backdrop-blur-sm">
                      <div className="relative w-full max-w-md bg-white lg:rounded-2xl p-0 md:p-8 shadow-2xl ">
                        <button
                          onClick={() => setIsContactOpen(false)}
                          className="absolute top-4 right-4 text-dark-500 hover:text-dark-500"
                        >
                          <X size={24} />
                        </button>
                        <h2 className="text-2xl font-bold mb-6 text-dark-500">Contact Us</h2>
            
                        {/* Pass handleFormSuccess to the form */}
                        <ContactForm onSuccess={handleFormSuccess} />
                      </div>
                    </div>
                  )}
        </>
    );
}
