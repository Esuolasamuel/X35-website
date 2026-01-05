import BackgroundCarousel from "./BackgroundCarousel"

export default function LandingHero() {
    return (
        <BackgroundCarousel
      interval={3000}
      images={[
        "/images/bg-1.jpg",
        "/images/bg-2.jpg",
        "/images/bg-3.png",
        "/images/bg-4.jpg",
        "/images/bg-5.jpg",
        "/images/bg-6.png",
        "/images/bg-7.png",
        "/images/bg-8.jpg",
        "/images/bg-9.jpg",
        "/images/bg-10.jpg",
        "/images/bg-11.png",
        "/images/bg-12.jpg",
      ]}
    />
    );
}