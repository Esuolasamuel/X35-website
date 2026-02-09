import Image from "next/image";

export default function ImageGallery({
  images = [],
  backgroundColor = "bg-[#E5D1E0]",
}) {
  return (
    <section
      className={`
        w-full flex justify-center
        ${backgroundColor}
        px-6 py-12
        lg:px-30 lg:py-30
      `}
    >
      {/* Section width */}
      <div className="w-full max-w-360">
        {/* Grid container */}
        <div
          className="
            mx-auto
            grid grid-cols-1 md:grid-cols-2
            gap-4
            max-w-302
          "
        >
          {images.map((image, index) => {
            const { imageSrc, alt, type } = image;

            // Determine row number (every 2 items = 1 row)
            const rowIndex = Math.floor(index / 2);

            // Reverse order on even rows (row 2, 4, etc.) — desktop only
            const shouldReverse = rowIndex % 2 === 1;

            return (
              <div
                key={index}
                className={`
                  relative overflow-hidden
                  rounded-[15px]
                  shadow-2xl
                  group
                  ${type === "small" ? "aspect-460/582" : "aspect-732/582"}
                  ${
                    shouldReverse
                      ? "md:order-2"
                      : "md:order-1"
                  }
                `}
              >
                <Image
                  src={imageSrc}
                  alt={alt || `Gallery image ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="
                    object-cover
                    transition-transform duration-1000 ease-in-out
                    group-hover:scale-105
                  "
                  priority={index < 2}
                />

                {/* Subtle hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 pointer-events-none" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
