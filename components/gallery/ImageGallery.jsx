import Image from "next/image";

export default function ImageGallery({ 
  images = [], 
  backgroundColor = "bg-[#E5D1E0]",
  // ✅ New prop for dynamic aspect ratio
  aspectRatio = "615/594" 
}) {
  return (
    <section className={`w-full lg:min-h-screen flex items-center justify-center ${backgroundColor}`}>
      {/* Changed max-w-360 to max-w-[1440px] for standard scaling */}
      <div className="w-full max-w-360 p-6 md:p-12 lg:p-20 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-lg sm:rounded-lg md:rounded-xl lg:rounded-2xl group shadow-2xl ${
                image.colspan ? "md:col-span-2" : ""
              }`}
              /* ✅ Dynamically applying the aspect ratio prop */
              style={{ aspectRatio: aspectRatio.replace("/", " / ") }}
            >
              <Image
                src={image.imageSrc}
                alt={image.alt || `Gallery image ${index + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-1000 ease-in-out group-hover:scale-105"
                priority={index < 2}
              />
              
              {/* Subtle Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}