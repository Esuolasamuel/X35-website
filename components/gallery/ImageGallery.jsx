import Image from "next/image";

export default function ImageGallery({ images = [], backgroundColor = "bg-white"}) {
  return (
    <section className={`w-full ${backgroundColor}`}>
      <div className="p-3.5 sm:p-6 md:p-10 lg:p-20 xl:p-30 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              /* Added 'group' for hover tracking and 'shadow-sm' for depth */
              className={`relative w-full h-64 sm:h-80 md:h-100 lg:h-120 xl:h-145.5 overflow-hidden rounded-2xl group shadow-sm ${
                image.colspan ? "md:col-span-2" : ""
              }`}
            >
              <Image
                src={image.ImageSrc}
                alt={image.alt || `Gallery image ${index + 1}`}
                fill
                sizes={image.colspan ? "(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 66vw, (max-width: 1280px) 66vw, 66vw" : "(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 33vw, 33vw"}
                /* Added transition and group-hover scale */
                className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                priority={index === 0}
              />
              
              {/* Architectural Darkening Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}