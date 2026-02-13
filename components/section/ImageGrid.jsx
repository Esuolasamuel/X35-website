import Image from "next/image";

export default function ImageGrid({ images, backgroundColor, reverse }) {
  const orderedImages = reverse ? [...images].reverse() : images;

  return (
    <section
      className={`w-full ${backgroundColor}
        px-6 md:px-30
        py-20`}
    >
      {/* GRID CONTAINER */}
      <div
        className="
          mx-auto
          max-w-311.5
          h-148.5
          grid grid-cols-1 md:grid-cols-2
          gap-4
        "
      >
        {orderedImages.map((img, index) => (
          <div
            key={index}
            className="
              relative
              w-full
              h-148.5
              overflow-hidden
              rounded-[15px]
            "
          >
            <Image       
              src={img.imageSrc}
              alt={img.alt}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
