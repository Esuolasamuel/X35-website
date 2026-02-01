import Image from "next/image";

export default function Hero({
  ImageSrc="",
  title ="",
  height = "h-full",
}) {
  if (!ImageSrc || !title) return null;

  return (
    <section
      aria-label={title}
      className={`relative w-full ${height} overflow-hidden`}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={ImageSrc}
          alt={title}
          fill
          priority
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
        />
      </div>

      {/* Overlay */}
      <div aria-hidden className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center px-4 md:px-6">
        <span className="relative inline-block">
          <h1 className="text-white  text-center font-heading  text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          {title}
        </h1>
        </span>
        <span className="absolute left-0 -bottom-2 h-[98.6] bg-no-repeat w-full bg-[url(/images/Fill-4.svg)] -z-10" />
      </div>
      
    </section>
  );
}
