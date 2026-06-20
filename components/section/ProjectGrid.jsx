import Image from "next/image";
import Link from "next/link";

// ✅ Static image imports
import brookImg from "@/assets/images/brook-finance-corporate-headquarters-lagos.jpg";
import ogaDentistImg from "@/assets/images/oga-dentist-clinic-interior-design-lagos.jpg";
import robsPlaceImg from "@/assets/images/robs-place-minimalist-home-renovation-nigeria.jpg";
import chevronImg from "@/assets/images/chevron-deep-waters-office-interior-lagos.png";
import sunplanetImg from "@/assets/images/sunplanet-co-residential-development-nigeria.jpg";
import adinoImg from "@/assets/images/adino-capital-office-interior-lagos.png";

const projects = [
  {
    name: "The Brook Finance Ltd",
    type: "COMMERCIAL",
    img: brookImg,
    href: "/projects/thebrook",
    alt: "The Brook Finance corporate headquarters — 1,609m² turnkey office transformation in Lagos by X35 Projects",
  },
  {
    name: "Oga Dentist",
    type: "HEALTHCARE",
    img: ogaDentistImg,
    href: "/projects/ogadentist",
    alt: "Oga Dentist modern dental clinic interior design in Lagos — patient-centred healthcare environment by X35 Projects",
  },
  {
    name: "Rob’s Place",
    type: "RESIDENTIAL",
    img: robsPlaceImg,
    href: "/projects/robs-place",
    alt: "Rob’s Place minimalist residential renovation in Nigeria — 500m² modern family home redesign by X35 Projects",
  },
  {
    name: "Chevron",
    type: "COMMERCIAL",
    img: chevronImg,
    href: "/projects/chevron",
    alt: "Chevron Deep Waters Department office fit-out in Lagos — 145m² commercial workspace interior design by X35 Projects",
  },
  {
    name: "Sun Planet Co",
    type: "COMMERCIAL",
    img: sunplanetImg,
    href: "/projects/sunplanet",
    alt: "Sun Planet Co residential development in Nigeria — 580m² modern apartment architecture consultancy by X35 Projects",
  },
  {
    name: "Adino Capital",
    type: "COMMERCIAL",
    img: adinoImg,
    href: "/projects/adino",
    alt: "Adino Capital commercial office interior fit-out in Lagos — 70m² modern workspace transformation by X35 Projects",
  },
];

const ProjectGrid = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {projects.map((p) => (
          <div
            key={p.name}
            className="relative aspect-720/497 
            group
            bg-white
             overflow-hidden"
          >
            <Link href={p.href} className="block">
              <Image
                src={p.img}
                alt={p.alt || "Gallery Image"}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="
                  object-cover
                  transition-transform
                  duration-700
                  ease-in-out
                  group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />

              {/* Text */}
              <div className="absolute bottom-5 left-3 sm:bottom-10 sm:left-5 md:bottom-12 md:left-7 lg:bottom-15 lg:left-10 z-10">
                <h3 className=" text-lg sm:text-lg md:text-xl lg:text-2xl text-white font-heading font-bold">
                  {p.name}
                </h3>
                <p className=" text-xs md:text-sm uppercase font-normal font-body tracking-wide text-white/80">
                  {p.type}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectGrid;
