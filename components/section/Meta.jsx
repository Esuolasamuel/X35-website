import React from "react";
import WhatsAppWidget from "./WhatsAppWidget";

const Meta = ({
  title,
  description = [],
  infoItem = [],
  // Updated to a specific hex for a clean mint/off-white background
  backgroundColor = "bg-[#F0FDF4]", 
}) => {
  return (
    <section
      className={`
        ${backgroundColor}
        w-full
        /* Responsive vertical padding for a breathable architectural feel */
        py-16 md:py-24 lg:py-32
        flex
        items-center
        overflow-hidden
      `}
    >
      <div
        className="
          /* Corrected max-width for standard desktop displays */
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
        {/* LEFT CONTENT: Title and Description paragraphs */}
        <div className="w-full lg:w-1/2">
          <h2 className="
            font-heading 
            font-extrabold
           text-xl md:text-4xl lg:text-[40px]
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
          <ul className="w-full">
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
                   /* FIX: Removes the top-border of the first item 
                      and the bottom-border of the last item */
                  first:border-t-0
                  last:border-b-0
                "
              >
                <span className="
                  text-[#1A1A1A]
                  font-body 
                  font-bold
                  text-[14px]
                  md:text-[16px]
                  uppercase
                  tracking-wider
                ">
                  {info.heading}
                </span>

                <span className="
                  text-[#1A1A1A]
                  font-body 
                  font-medium
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