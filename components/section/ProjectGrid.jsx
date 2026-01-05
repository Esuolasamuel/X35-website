import Image from "next/image";
import Link from "next/link";

const projects = [
  { name: 'The Brook Finance Ltd', type: 'Commercial', img: "/images/brooks.jpg", href: '/Projects/thebrooks' },
  { name: 'Oga Dentist', type: 'Healthcare', img: "/images/ogadentist.jpg", href: '/Projects/ogadentist' },
  { name: "Rob’s Place", type: 'Residential', img: "/images/robsplace.jpg", href: '/Projects/robs-place' },
  { name: 'Chevron', type: 'Commercial', img: "/images/chevron.png", href: '/Projects/chevron' },
  { name: 'Sun Planet Co', type: 'Commercial', img: "/images/sunplanetco.jpg", href: '/Projects/sunplanet' },
  { name: 'Adino Capital', type: 'Commercial', img: "/images/adino.png", href: '/Projects/adino' },
];

const ProjectGrid = () => {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {projects.map((p) => (
          /* Added overflow-hidden here to contain the zoom effect */
          <div key={p.name} className="relative h-90 md:h-105 overflow-hidden group">
            <Link href={p.href}>
              <Image
                src={p.img}
                alt={p.name}
                fill
                className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
              />
              
              {/* Overlay with hover transition */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
              
              {/* Text Content */}
              <div className="absolute bottom-6 left-6 text-white z-10">
                <h3 className="text-2xl font-heading font-bold">{p.name}</h3>
                <p className="text-sm uppercase font-body font-normal tracking-wide opacity-80">{p.type}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectGrid;