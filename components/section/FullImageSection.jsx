import Image from 'next/image';

const FullImageSection = ({ ImageSrc, title, backgrounColor ="bg-white" }) => {
  return (
    /* p-[120px] applies the padding on all sides as requested */
    <section className="bg-white xl:p-32 lg:24
        md:p-16
        p-8 flex justify-center items-center">
      
      {/* Container is fixed at 1200px width. 
          The aspect ratio ensures the height is exactly 796px.
          Rounded corners match the soft aesthetic of Frame 119.jpg.
      */}
      <div className={`relative w-full aspect-1200/796 overflow-hidden rounded-[40px] shadow-sm ${backgrounColor}`}>
        <Image
          quality={100}
          src={ImageSrc}
          alt={title}
          fill
          priority
          className="object-cover"
          sizes="1200px"
        />
      </div>
    </section>
  );
};

export default FullImageSection;