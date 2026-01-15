import Image from "next/image";
import Logo from "@/assets/images/logo.svg";
import linkedin from "@/assets/images/linkedin.svg";
import instagram from "@/assets/images/instagram.svg";


export default function Footer() {
    return (
        <footer className="bg-[#11111f] text-white/70 py-4 md:py-20 px-4 md:px-30">
            <div className="max-w-7xl mx-auto px-0 sm:px-6 grid md:grid-cols-4 gap-10 border-b-[0.5px] border-white/20 pb-12">
                <div>
                    <div className="font-bold text-white mb-7">
                        <Image
                        src={Logo}
                        alt="x35 Logo"
                        width={40}
                        height={40}
                        />
                    </div>
                    <p className="text-sm font-body font-medium">
                        <span className="text-[#FFD700]">We</span> Design.
                        <span className="text-[#FFD700]">We</span> Build. 
                        <span className="text-[#FFD700]">We</span> Deliver.</p>
                </div>
                <div className="hover:cursor-pointer">
                    <h4 className="text-white/60 text-sm font-body font-semibold mb-7 cursor-pointer">Quick Links</h4>
                    <ul className="space-y-6 text-white text-sm">
                        <li>About Us</li>
                        <li>Our Projects</li>
                        <li>Our Services</li>
                    </ul>
                </div>
                <div className="hover:cursor-pointer">
                    <h4 className="text-white/60 text-sm font-body font-semibold mb-7 ">Contact Us</h4>
                    <p className="text-sm  text-white  pb-6">hello@xsprojects.com</p>
                    <p className="text-sm  text-white ">+234 814 469 4380</p>
                </div>
                <div>
                    <h4 className="text-white/60 text-sm font-body font-semibold mb-7 hover:cursor-pointer">Follow Us</h4>
                    <p className="text-sm flex gap-6 hover:cursor-pointer ">
                        <Image
                        src={linkedin}
                        alt="linkedin logo"
                        width={32}
                        height={32}
                        />
                        <Image
                        src={instagram}
                        alt="instagram logo"
                        width={32}
                        height={32}
                        />
                    </p>
                </div>
            </div>
            <div className="text-center text-xs text-white/40 py-4 md:py-14 px-4 md:px-16">
                © 2025 XS Projects. All Rights Reserved.
            </div>
        </footer>
    );
}