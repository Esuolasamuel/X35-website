import Image from "next/image";

export default function ImageGallery({ images = [], backgroundColor = "bg-white"}) {
  return (
    <section className={`w-full ${backgroundColor} xl:p-32 lg:p-24 md:p-16 p-8`}>
      <div className="mx-auto max-w-8xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              /* Added 'group' for hover tracking and 'shadow-sm' for depth */
              className={`relative w-full h-100 md:h-145.5 overflow-hidden rounded-2xl group shadow-sm ${
                image.colspan ? "md:col-span-2" : ""
              }`}
            >
              <Image
                src={image.ImageSrc}
                alt={image.alt || `Gallery image ${index + 1}`}
                fill
                sizes={image.colspan ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
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