"use client";

import { useState } from "react";

export default function CTA({title, text, paragraph, id}) {
    const [isContactOpen, setIsContactOpen] = useState(false);

    return (
        <section id={`${id ? id : ''}`} className="xl:p-24 lg:p-24 md:p-16 py-4 bg-[url(/images/image-9.svg)] bg-[#C9C9DC] z-auto">
            <div className="max-w-5xl mx-auto px-4 md:px-6 text-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-12 font-bold pt-6 sm:pt-8 md:pt-10 lg:pt-12 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 font-heading mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-14">
                    {title}
                </h2>
                {text && <button
                onClick={() => setIsContactOpen(true)}
                className="bg-yellow-400 px-6 sm:px-7 md:px-8 py-2 sm:py-3 rounded-full font-body font-medium">{text} </button>}
                    {paragraph && <p
                className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-[1.8] text-gray-400 mb-6 sm:mb-8 last:mb-0 font-body font-normal tracking-wide"
                >
                {paragraph}
              </p>}
            </div>
        </section>
    );
}