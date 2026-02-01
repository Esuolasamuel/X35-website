import React from "react";

const Meta = ({
  title,
  description = [],
  infoItem = [],
  backgroundColor = "bg-gray-500",
}) => {
  return (
    <section
      className={`
        ${backgroundColor}
        min-h-fit
        lg:h-157
        flex
        items-center
        overflow-hidden
      `}
    >
      <div
        className="
        p-3.5 sm:p-7.5 md:p-15 lg:p-30
          mx-auto
          flex
          flex-col
          xl:flex-row
          gap-20
          items-start
          md:items-center
          md:mx-auto
          lg:justify-between
          lg:items-center
        "
      >
        {/* LEFT CONTENT */}
        <div className=" my-10 w-full lg:max-w-xl text-dark-500">
          <h2 className="
            font-heading     
            font-bold
            text-2xl
            md:text-3xl
            lg:text-5xl
            leading-tight
            mb-6
            lg:mb-10
            text-[#1A1A1A]
          "> 
            {title}
          </h2>

          <div className="text-[#333333]">
            {description.map((desc, index) => (
              <p
                key={index}
                className="
                  font-body   
                  font-normal
                  text-sm
                  md:text-base
                  lg:text-[17px]
                  leading-[1.7]
                  lg:leading-[1.8]
                  mb-6
                  last:mb-0
                "
              >
                {desc.paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* RIGHT META LIST */}
        <div className="w-full">
          <ul className=" border-t border-neutral-400/50 text-dark-500">
            {infoItem.map((info, index) => (
              <li
                key={index}
                className="
                  font-body   
                  font-semibold
                  flex
                  items-center
                  justify-between
                  py-4
                  md:py-5
                  lg:py-6
                  border-b
                  border-neutral-400/50
                "
              >
                <span className="
                  text-dark-500
                  font-semibold
                  font-body   
                  text-[14px]
                  md:text-[15px]
                  lg:text-[17px]
                ">
                  {info.heading}
                </span>

                <span className="
                  text-dark-500
                  font-semibold
                  font-body   
                  text-[14px]
                  md:text-[15px]
                  lg:text-[17px]
                  text-right
                ">
                  {info.value}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Meta;
