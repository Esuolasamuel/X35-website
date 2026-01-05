import Image from "next/image";

export default function Hero({
  ImageSrc="",
  title ="",
  height = "h-[75vh]",
}) {
  if (!ImageSrc || !title) return null;

  return (
    <section
      aria-label={title}
      className={`relative w-full ${height} overflow-hidden`}
    >
      {/* Background Image */}
      <Image
        src={ImageSrc}
        alt={title}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Overlay */}
      <div aria-hidden className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center px-6">
        <span className="relative inline-block">
          <h1 className="text-white  text-center font-heading font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          {title}
        </h1>
        </span>
        <span className="absolute left-0 -bottom-2 h-[98.6] bg-no-repeat w-full bg-[url(@/public/images/Fill-4.svg)] -z-10" />
      </div>
      
    </section>
  );
}
