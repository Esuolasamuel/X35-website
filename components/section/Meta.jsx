import React from "react";
import WhatsAppWidget from "./WhatsAppWidget";

const Meta = ({
  title,
  description = [],
  infoItem = [],
  // Updated default to the exact mint green from the screenshot
  backgroundColor = "", 
}) => {
  return (
    <section
      className={`
        ${backgroundColor}
        w-full
        /* Responsive vertical padding to match screenshot's breathable design */
        py-16 md:py-24 lg:py-32
        flex
        items-center
        overflow-hidden
      `}
    >
      <div
        className="
          max-w-360
          mx-auto
          px-6 sm:px-10 md:px-16 lg:px-24
          flex
          flex-col
          lg:flex-row
          gap-12 lg:gap-24
          items-start
        "
      >
        {/* LEFT CONTENT: Text and Paragraphs */}
        <div className="w-full lg:w-1/2">
          <h2 className="
            font-heading 
            font-extrabold
            text-[28px]
            md:text-[36px]
            lg:text-[44px]
            leading-[1.1]
            tracking-tight
            mb-8
            text-[#1A1A1A]
          "> 
            {title}
          </h2>

          <div className="space-y-6">
            {description.map((desc, index) => (
              <p
                key={index}
                className="
                  font-body 
                  font-normal
                  text-[15px]
                  md:text-[16px]
                  leading-[1.7]
                  text-[#333333]
                  opacity-90
                "
              >
                {desc.paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* RIGHT CONTENT: Metadata List */}
        <div className="w-full lg:w-1/2 lg:pt-4">
          <ul className="border-t border-black/10">
            {infoItem.map((info, index) => (
              <li
                key={index}
                className="
                  flex
                  items-center
                  justify-between
                  py-5
                  md:py-6
                  border-b
                  border-black/10
                "
              >
                <span className="
                  text-[#1A1A1A]
                  font-body 
                  font-semibold
                  text-[14px]
                  md:text-[16px]
                ">
                  {info.heading}
                </span>

                <span className="
                  text-[#1A1A1A]
                  font-body 
                  font-bold
                  text-[14px]
                  md:text-[16px]
                  text-right
                ">
                  {info.value}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      {/* Floating Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        <WhatsAppWidget />
      </div>
    </section>
  );
};

export default Meta;