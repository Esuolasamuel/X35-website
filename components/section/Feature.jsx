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
    <section className={`${backgroundColor}`}>
      <div
        className={`
          mx-auto max-w-360
          px-6 sm:px-10 lg:px-24
          py-16 sm:py-20 lg:py-28
          flex flex-col gap-12
          ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"}
          items-center
        `}
      >
        {/* TEXT */}
        <div className="w-full lg:w-1/2">
          <h3
            className={`
              font-heading font-bold
              text-2xl sm:text-3xl lg:text-[40px]
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
                  text-sm sm:text-base lg:text-[17px]
                  leading-[1.8]
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
        <div className="w-full lg:w-1/2">
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
