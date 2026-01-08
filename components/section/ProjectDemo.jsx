import Image from "next/image";
import Arrow from '../../public/icons/arrow-right.svg';
import Link from "next/link";




export default function ProjectDemo({projects}) {
    return (
        <section className="xl:p-24 lg:p-24 md:p-16 py-4 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-4xl flex justify-center text-[#0c0c1c] font-bold font-heading leading-12 mb-10">Our Latest Projects</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {projects.map((p) => (
                        <Link href={`/Projects/${p.title.toLowerCase()}`} key={p.title} className="group block">
                            <div className="relative h-48 md:h-64 rounded-xl overflow-hidden">
                                <Image src={p.img} alt={p.title} fill className="object-cover group-hover:scale-105 transition" />
                            </div>
                            <h3 className="mt-4 font-body font-bold">{p.title}</h3>
                            <p className="text-sm font-body text-neutral-500">{p.type}</p>
                        </Link>
                    ))}
                </div>
                <div className="mt-12 text-center">
                    <button className="border pt-2 pb-2 pr-2 pl-6 rounded-full text-sm  mx-auto hover:bg-black/5 transition">
                        <Link href="/Projects" className="font-body font-bold flex items-center gap-3 text-[15] pr-0.5">View all Projects 
                            <span  className=" rounded-full p-2.5 bg-[#FFD700] hover:bg-[#E2C007]">
                                <Image
                                src={Arrow}
                                width={14}
                                height={16}
                                alt="arrow right"
                                className="color-gray-900"/>
                            </span>
                        </Link>
                    </button>
                </div>
            </div>
        </section>
    );
}