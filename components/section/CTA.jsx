"use client";

import { useState } from "react";

export default function CTA({title, text, paragraph, id}) {
    const [isContactOpen, setIsContactOpen] = useState(false);

    return (
        <section id={`${id ? id : ''}`} className="relative bg-[url(@/assets/images/image-9.png)] w-full min-h-135.75 z-20">
            <div className="absolute inset-0 bg-[#C9C9DC] z-10 opacity-50"></div>
            <div className="relative md:px-6 text-center z-30 h-full">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-12 pt-6 sm:pt-8 md:pt-10 lg:pt-12 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 font-heading  mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-14">
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
    );
}
