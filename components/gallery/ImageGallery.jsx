import Image from "next/image";
import clsx from "clsx";

export default function ImageGallery({
  images = [],
  backgroundColor = "bg-white",
}) {
  return (
    <section className={`w-full ${backgroundColor} px-4 md:px-12 lg:px-30 py-12`}>
    <div
  className="
    grid
    grid-cols-1
    md:grid-cols-3
    gap-6
    auto-rows-[582px]
  "
>
        {images.map((img, i) => {
          const isLarge = img.type === "large";

          return (
            <div
              key={i}
              className={clsx(
                "relative overflow-hidden rounded-lg sm:rounded-lg md:rounded-xl lg:rounded-2xl",
                isLarge ? "md:col-span-2" : "md:col-span-1"
              )}
            >
              <Image
                src={img.imageSrc}
                alt={img.alt ?? `Gallery image ${i + 1}`}
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover"
                priority={i === 0}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
