import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/images/logo.svg";
import linkedin from "@/assets/icons/linkedin.svg";
import instagram from "@/assets/icons/instagram.svg";


export default function Footer() {
    return (
        <footer className="text-indigo-700 mx-auto max-w-7xl px-4 sm:px-8 md:px-16 lg:px-32">
            <div className="max-w-7xl mx-auto px-0 sm:px-6 grid md:grid-cols-4 gap-10 border-b-[0.5px] border-white/20 pb-12">
                <div>
                    <div className="font-bold text-white mb-7">
                        <Link href="/">
                            <Image
                            src={Logo}
                            alt="x35 Logo"
                            width={40}
                            height={40}
                            />
                        </Link>
                    </div>
                    <p className="text-sm font-body text-dark text-white font-medium">
                        <span className="text-yellow-400">We</span> Design.
                        <span className="text-yellow-400">We</span> Build. 
                        <span className="text-yellow-400">We</span> Deliver.</p>
                </div>
                <div>
                    <h4 className="text-white/60 text-sm font-body text-dark font-semibold mb-7">Quick Links</h4>
                    <ul className="space-y-6 text-white text-sm">
                        <li className=" text-yellow-400 hover:text-yellow-700 transition-colors cursor-pointer">
                            <Link href="/about">About Us</Link>
                        </li>
                        <li className="text-yellow-400 hover:text-yellow-700 transition-colors cursor-pointer">
                            <Link href="/Projects">Our Projects</Link>
                        </li>
                        <li className="text-yellow-400 hover:text-yellow-700 transition-colors cursor-pointer">
                            <Link href="/#services">Our Services</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-white/60 text-sm font-body text-dark font-semibold mb-7">Contact Us</h4>
                    <a href="mailto:hello@xsprojects.com" className="text-sm text-white pb-6 block hover:text-yellow-700 transition-colors">
                        hello@xsprojects.com
                    </a>
                    <a href="tel:+2348144694380" className="text-sm text-white hover:text-yellow-700 transition-colors">
                        +234 814 469 4380
                    </a>
                </div>
                <div>
                    <h4 className="text-white/60 text-sm font-body text-dark font-semibold mb-7">Follow Us</h4>
                    <div className="text-sm flex gap-6">
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                            <Image
                            src={linkedin}
                            alt="linkedin logo"
                            width={32}
                            height={32}
                            />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                            <Image
                            src={instagram}
                            alt="instagram logo"
                            width={32}
                            height={32}
                            />
                        </a>
                    </div>
                </div>
            </div>
            <div className="text-center text-xs text-white/40 py-auto px-auto ">
                © 2025 XS Projects. All Rights Reserved.
            </div>
        </footer>
    );
}