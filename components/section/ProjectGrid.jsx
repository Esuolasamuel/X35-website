import Image from "next/image";
import Link from "next/link";

// ✅ Static image imports
import brookImg from "@/assets/images/brook.jpg";
import ogaDentistImg from "@/assets/images/ogadentist.jpg";
import robsPlaceImg from "@/assets/images/robsplace.jpg";
import chevronImg from "@/assets/images/chevron.png";
import sunplanetImg from "@/assets/images/sunplanetco.jpg";
import adinoImg from "@/assets/images/adino.png";

const projects = [
  {
    name: "The Brook Finance Ltd",
    type: "Commercial",
    img: brookImg,
    href: "/Projects/thebrook",
  },
  {
    name: "Oga Dentist",
    type: "Healthcare",
    img: ogaDentistImg,
    href: "/Projects/ogadentist",
  },
  {
    name: "Rob’s Place",
    type: "Residential",
    img: robsPlaceImg,
    href: "/Projects/robs-place",
  },
  {
    name: "Chevron",
    type: "Commercial",
    img: chevronImg,
    href: "/Projects/chevron",
  },
  {
    name: "Sun Planet Co",
    type: "Commercial",
    img: sunplanetImg,
    href: "/Projects/sunplanet",
  },
  {
    name: "Adino Capital",
    type: "Commercial",
    img: adinoImg,
    href: "/Projects/adino",
  },
];

const ProjectGrid = () => {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {projects.map((p) => (
          <div
            key={p.name}
            className="relative h-90 md:h-105 overflow-hidden group"
          >
            <Link href={p.href} className="block h-full w-full">
              <Image
                src={p.img}
                alt={p.name}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                priority={false}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />

              {/* Text */}
              <div className="absolute bottom-6 left-6 text-white z-10">
                <h3 className="text-2xl font-heading font-bold">
                  {p.name}
                </h3>
                <p className="text-sm uppercase font-body tracking-wide opacity-80">
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
