import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/images/logo.svg";
import linkedin from "@/assets/icons/linkedin.svg";
import instagram from "@/assets/icons/instagram.svg";


export default function Footer() {
    return (
        <footer className="bg-indigo-700 pt-8 px-8 sm:px-16 md:px-20 lg:px-30 xl:px-30 2xl:px-30 md:pt-16 lg:pt-20 border-t mx-auto">
            <div className="flex flex-col lg:flex-row items-start justify-evenly gap-8 md:gap-12 lg:gap-16 border-b-[0.5px] border-white/40 pb-8 md:pb-10 lg:pb-12 text-center mx-auto">
                <div className="flex flex-col items-center lg:items-start">
                    <Link href="/">
                        <Image
                            src={Logo}
                            alt="x35 Logo"
                            width={56}
                            height={56}
                            className="w-14 h-14 md:w-16 md:h-16 mx-auto lg:mx-0"
                        />
                    </Link>
                    <p className="mt-4 text-sm md:text-base text-white font-body font-medium">
                        <span className="text-yellow-400">We</span> Design.{" "}
                        <span className="text-yellow-400">We</span> Build.{" "}
                        <span className="text-yellow-400">We</span> Deliver.
                    </p>
                </div>
                <div className="flex flex-col items-center lg:items-start">
                    <h4 className="text-white/60 text-sm md:text-base font-body font-semibold mb-4">Quick Links</h4>
                    <ul className="space-y-3 text-white text-sm md:text-base">
                        <li className="font-body text-yellow-400 hover:text-yellow-700 transition-colors cursor-pointer">
                            <Link href="/about">About Us</Link>
                        </li>
                        <li className="font-body text-yellow-400 hover:text-yellow-700 transition-colors cursor-pointer">
                            <Link href="/Projects">Our Projects</Link>
                        </li>
                        <li className="font-body text-yellow-400 hover:text-yellow-700 transition-colors cursor-pointer">
                            <Link href="/#services">Our Services</Link>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col items-center lg:items-start">
                    <h4 className="text-white/60 text-sm md:text-base font-body font-semibold mb-4">Contact Us</h4>
                    <a href="mailto:hello@xsprojects.com" className="text-white text-sm md:text-base font-body hover:text-yellow-700 transition-colors">
                        hello@xsprojects.com
                    </a>
                    <a href="tel:+2348144694380" className="text-white text-sm md:text-base font-body mt-3 hover:text-yellow-700 transition-colors">
                        +234 814 469 4380
                    </a>
                </div>
                <div className="flex flex-col items-center lg:items-start">
                    <h4 className="text-white/60 text-sm md:text-base font-body font-semibold mb-4">Follow Us</h4>
                    <div className="flex gap-4">
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                            <Image
                                src={linkedin}
                                alt="linkedin logo"
                                width={24}
                                height={24}
                                className="w-6 h-6"
                            />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                            <Image
                                src={instagram}
                                alt="instagram logo"
                                width={24}
                                height={24}
                                className="w-6 h-6"
                            />
                        </a>
                    </div>
                </div>
            </div>
            <div className="text-center py-6 md:py-8">
                <p className="text-white text-xs md:text-sm font-body">© 2025 XS Projects. All Rights Reserved.</p>
            </div>
        </footer>
    );
}