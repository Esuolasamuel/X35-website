import Image from "next/image";


/* ================= INITIALS ================= */
function getInitials(name = "") {
  return name
    .trim()
    .split(" ")
    .slice(0, 2)
    .map((word) => word[0]?.toUpperCase())
    .join("");
}


/* ================= COLOR HASH ================= */
function stringToColor(str = "") {
  let hash = 0;

  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }

  const h = hash % 360;
  return `hsl(${h}, 60%, 55%)`;
}


/* ================= CONTRAST COLOR ================= */
function getContrastColor(hsl) {
  const lightness = Number(hsl.split(",")[2].replace("%)", ""));
  return lightness > 60 ? "#111827" : "#FFFFFF";
}


const testimonials = [
  {
    text: "If there was something more than a 5 star rating, then I would have given it. Words will fail me to describe the high professionalism, hard work, resilience, doggedness, ATTENTION TO DETAILS, accountability, faithfulness etc that X35 Project Ltd put into the renovation and remodeling of our office. Their services were excellent and top notch and I can recommend them to the Presidency without batting an eyelid. In our world that is full of corruption, faithful men can still be found. Keep up the good work X35 Project Ltd!!!!! You guys are the real deal!!!!",
    author: "Randomsoft Technologies Ltd",
    img: null,
  },
  {
    text: "You brought our plain ideas to life with remarkable creativity and excellence. Your patience, professionalism, and ease of working with us made the entire process smooth and reassuring from start to finish.\n\nWhat stood out most was their willingness to go the extra mile to ensure every detail reflected our vision perfectly. Truly you combined skill, passion, and quality service.\n\nExcellence and Originality!!!",
    author: "Mr Michael Adebiran",
    img: null,
  },
  {
    text: "A wonderful architectural design was delivered for one of our projects.. the project becomes one of our best!",
    author: "Sun Planet Co (Real Estate)",
    img: null,
  },
   {
    text: "Their attention to detail and ability to understand our needs made the entire process smooth and enjoyable.",
    author: "The Brook Finance Ltd",
    img: null,
  },
  {
    text: "Arc. Feyi and his team took my dream of a modern home and made it a reality. They transformed an old 2 bedroom block into a stunning 4-bedroom duplex with all rooms en-suite, on time and budget. The X35 team was professional, dependable, and truly collaborative.",
    author: "Mr. Akinola Akinwole",
    img: null,
  }
];

export default function Testimonials() {
  return (
    <section className="bg-white">
      <div
        className="
          max-w-360
          mx-auto
          p-3.5 sm:p-7.5 md:p-15 lg:p-30
          flex flex-col
         gap-3.5 sm:gap-3.5 md:gap-7 lg:gap-14
        "
      >
        {/* Heading */}
        <h2 className=" text-2xl md:text-4xl lg:text-[40px] leading-[1.1] font-heading font-bold text-[#0C0C1C] pb-14 text-center">
          What Our Clients Say
        </h2>

        {/* Testimonials Grid — 6-col base so last 2 of 5 can be centered */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-3.5 sm:gap-3.5 md:gap-5 lg:gap-6">
          {testimonials.map((t, i) => {
            const initials = getInitials(t.author);
            const bg = stringToColor(t.author);
            const textColor = getContrastColor(bg);

            const colClass =
              i === 3
                ? "lg:col-start-2 lg:col-span-2"
                : i === 4
                ? "lg:col-start-4 lg:col-span-2"
                : "lg:col-span-2";

            return (
              <div
                key={i}
                className={`
                  ${colClass}
                  p-3 sm:p-4 md:p-6 lg:p-10
                  rounded-2xl
                  bg-white
                  border border-[#0C0C1C0F]
                 sm:shadow-lg lg:shadow-[0px_16px_32px_0px_#BDBDBD40]
                  flex flex-col
                  justify-between
                `}
              >
                <p className="text-base leading-7 font-body font-medium text-[#0C0C1C]">
                  “{t.text}”
                </p>

                <div className="flex items-center gap-3 pt-6">
                  {t.img ? (
                    <Image
                      src={t.img}
                      alt={t.author}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                  ) : (
                    <div
                      className="
                        w-10 h-10
                        rounded-full
                        flex items-center justify-center
                        font-bold text-sm
                        font-heading
                      "
                      style={{
                        backgroundColor: bg,
                        color: textColor,
                      }}
                    >
                      {initials}
                    </div>
                  )}

                  <span className="text-sm font-body font-medium text-[#0C0C1C]">
                    {t.author}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
