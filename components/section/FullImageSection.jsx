import Image from 'next/image';

const FullImageSection = ({ imageSrc, title, backgrounColor ="bg-white" }) => {
  return (
    /* p-[120px] applies the padding on all sides as requested */
    <section className="p-6 sm:p-7.5 md:p-15 lg:p-30 bg-white flex justify-center items-center">
      
      {/* Container is fixed at 1200px width. 
          The aspect ratio ensures the height is exactly 796px.
          Rounded corners match the soft aesthetic of Frame 119.jpg.
      */}
      <div className={`relative w-full aspect-1200/600 overflow-hidden rounded-lg sm:rounded-lg md:rounded-xl lg:rounded-2xlg shadow-2xl ${backgrounColor}`}>
        <Image
          quality={100}
          src={imageSrc}
          alt={title}
          fill
          priority
          className="object-cover"
        />
      </div>
    </section>
  );
};

export default FullImageSection;