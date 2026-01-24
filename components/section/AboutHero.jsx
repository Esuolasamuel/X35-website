import React from "react";

export default function TextContainer() {
  return (
    <div className="w-full sm:w-153.75 h-auto sm:h-45.75 flex flex-col gap-4 sm:gap-8 mx-auto">
      <h1 className="
        font-heading 
        font-bold 
        text-center
        text-4xl sm:text-5xl md:text-6xl lg:text-[64px]
        leading-tight sm:leading-16
        tracking-tight sm:tracking-[-0.03em]
        [leading-trim:cap-height]
      ">
        Building trust, vision,<br />
        and lasting{" "}
        <span className="relative inline-block">
          value.
          <span
            className="
              absolute -right-1 sm:-right-2 md:-right-3 lg:-right-4 -top-1 sm:-top-1.5 md:-top-2 lg:-top-2
              h-26.5 w-66.29 sm:h-16 sm:w-40 md:h-20 md:w-48 lg:h-24 lg:w-60
              bg-[url(@/assets/icons/Fill-4.svg)]
              bg-cover bg-no-repeat
              -z-10
            "
          />
        </span>
      </h1>
      
      <p className="
        font-body 
        font-normal 
        text-center
        text-base sm:text-lg md:text-[19px]
        leading-relaxed sm:leading-[28.5px]
        tracking-tight sm:tracking-[-0.03em]
        [leading-trim:cap-height]
      ">
        At X35 Projects, we bring ideas to life with<br />
        precision, purpose, and partnership.
      </p>
    </div>
  );
}