import ImageGallery from "@/components/ImageGallery";

export default function AboutGallerySection() {
  return (
    <ImageGallery
      images={[
        {
          src: "/images/gallery/office-1.jpg",
          alt: "Interior hallway",
          height: "h-[320px] md:h-[380px]",
          priority: true,
        },
        {
          src: "/images/gallery/office-2.jpg",
          alt: "Reception area",
          height: "h-[320px] md:h-[380px]",
        },
        {
          src: "/images/gallery/office-3.jpg",
          alt: "Workspace desks",
          height: "h-[260px] md:h-[300px]",
        },
        {
          src: "/images/gallery/office-4.jpg",
          alt: "Bathroom interior",
          height: "h-[260px] md:h-[300px]",
        },
      ]}
    />
  );
}
