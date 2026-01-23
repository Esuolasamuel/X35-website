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
    type: "COMMERCIAL",
    img: brookImg,
    href: "/Projects/thebrook",
  },
  {
    name: "Oga Dentist",
    type: "HEALTHCARE",
    img: ogaDentistImg,
    href: "/Projects/ogadentist",
  },
  {
    name: "Rob’s Place",
    type: "RESIDENTIAL",
    img: robsPlaceImg,
    href: "/Projects/robs-place",
  },
  {
    name: "Chevron",
    type: "COMMERCIAL",
    img: chevronImg,
    href: "/Projects/chevron",
  },
  {
    name: "Sun Planet Co",
    type: "COMMERCIAL",
    img: sunplanetImg,
    href: "/Projects/sunplanet",
  },
  {
    name: "Adino Capital",
    type: "COMMERCIAL",
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
            className="relative aspect-[1.45] overflow-hidden group"
          >
            <Link href={p.href} className="block">
              <Image
                src={p.img}
                alt={p.name}
                className="object-cover transition-transform w-full h-full duration-700 ease-in-out group-hover:scale-110"
                priority={false}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />

              {/* Text */}
              <div className="absolute bottom-6 left-6  z-10">
                <h3 className="text-2xl text-white font-bold">
                  {p.name}
                </h3>
                <p className="text-sm uppercase font-body tracking-wide text-white/80">
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
