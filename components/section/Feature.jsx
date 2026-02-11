import Image from "next/image";

export default function Feature({
  title,
  description,
  imageSrc,
  backgroundColor = "bg-[#D9EFEA]", // light mint like screenshot
  textColor = "text-[#1A1A1A]/80",
  headerColor = "text-[#1A1A1A]",
  aspect = "aspect-[615/594]",
  reverse = false,
}) {
  return (
    <section className={`${backgroundColor}  px-6 sm:px-10 lg:px-24
          py-16 sm:py-20 lg:py-28`}>
      <div
        className={`
          max-w-360 mx-auto
          ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"}
          flex flex-col items-center justify-center gap-12 lg:gap-20
        `}
      >
        {/* TEXT */}
        <div className="w-full lg:w-133">
          <h3
            className={`
              font-heading font-bold
              text-2xl sm:text-3xl lg:text-[32px]
              leading-tight mb-6
              ${headerColor}
            `}
          >
            {title}
          </h3>

          <div className="space-y-6">
            {description.map((desc, index) => (
              <p
                key={index}
                className={`
                  font-body
                  font-normal
                  text-sm sm:text-base lg:text-[17px] 
                  tracking-wide
                  ${textColor}
                `}
              >
                {desc.paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* IMAGE */}
        <div className="w-full lg:w-153.75">
          <div
            className={`
              relative w-full
              ${aspect}
              rounded-2xl
              overflow-hidden
              bg-neutral-200
            `}
          >
            {imageSrc && (
              <Image
                src={imageSrc}
                alt={title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
