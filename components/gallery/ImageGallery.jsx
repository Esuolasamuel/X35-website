import Image from "next/image";

export default function ImageGallery({
  images = [],
  backgroundColor = "bg-[#E5D1E0]",
}) {
  return (
    <section
      className={`w-full lg:min-h-screen flex items-center justify-center ${backgroundColor}`}
    >
      <div className="w-full max-w-360 p-6 md:p-12 lg:p-20 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
          {images.map((image, index) => {
            const {
              imageSrc,
              alt,
              aspect = "aspect-[615/594]",
              colspan,
            } = image;

            return (
              <div
                key={index}
                className={`
                  relative overflow-hidden
                  rounded-sm md:rounded-md lg:rounded-lg
                  shadow-2xl group
                  ${aspect}
                  ${colspan ? `md:${colspan}` : ""}
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

                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 pointer-events-none" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
