import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/images/logo.svg";
import linkedin from "@/assets/icons/linkedin.svg";
import instagram from "@/assets/icons/instagram.svg";


export default function Footer() {
    return (
        <>
            <footer className="bg-indigo-700 pt-8 px-15 sm:px-20 md:px-25 lg:px-30 xl:px-30 2xl:px-30 lg:pt-12 xl:pt-16 xxl:pt-20 xxxl:pt-24 border-t mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 xs:gap-4 sm:gap-4 md:gap-4 lg:gap-5 xl:gap-5 xxl:gap-6 xxxl:gap-6 border-b-[0.5px] border-white/40 pb-8 xs:pb-9 sm:pb-10 md:pb-11 lg:pb-12 xl:pb-13 xxl:pb-14 xxxl:pb-15 text-center mx-auto">
                    <div>
                        <div className="font-bold text-white mb-4 xs:mb-5 sm:mb-6 md:mb-7">
                            <Link href="/">
                                <Image
                                src={Logo}
                                alt="x35 Logo"
                                width={40}
                                height={40}g
                                className="w-10 h-10 xs:w-11 xs:h-11 sm:w-12 sm:h-12 md:w-13 md:h-13 lg:w-14 lg:h-14 xl:w-15 xl:h-15 xxl:w-16 xxl:h-16 xxxl:w-17 xxxl:h-17 mx-auto"
                                />
                            </Link>
                        </div>
                        <div className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-sm xl:text-sm xxl:text-sm xxxl:text-sm flex-col lg:flex-row font-body text-dark text-white font-medium">
                            <p className=" md:font-body md:font-medium md:text-sm md:leading-[31.2px] md:tracking-normal md:[leading-trim:CAP_HEIGHT]"><span className="text-yellow-400">We</span> Design.</p>
                            <p className=" md:font-body md:font-medium md:text-sm md:leading-[31.2px] md:tracking-normal md:[leading-trim:CAP_HEIGHT]"><span className="text-yellow-400">We</span> Build.</p>
                            <p className=" md:font-body md:font-medium md:text-sm md:leading-[31.2px] md:tracking-normal md:[leading-trim:CAP_HEIGHT]"><span className="text-yellow-400">We</span> Deliver.</p>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-white/60 text-xs xs:text-sm sm:text-sm md:text-sm lg:text-sm xl:text-sm xxl:text-sm xxxl:text-sm font-body text-dark font-semibold mb-4 xs:mb-5 sm:mb-6 md:mb-7">Quick Links</h4>
                        <ul className="space-y-4 xs:space-y-5 sm:space-y-6 text-white text-xs xs:text-sm sm:text-sm md:text-smg lg:text-sm xl:text-sm xxl:text-sm xxxl:text-sm">
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
                    <div>
                        <h4 className="text-white/60 text-xs xs:text-sm sm:text-sm md:text-smg lg:text-sm xl:text-sm xxl:text-sm xxxl:text-sm font-body text-dark font-semibold mb-4 xs:mb-5 sm:mb-6 md:mb-7">Contact Us</h4>
                        <a href="mailto:hello@xsprojects.com" className="text-xs xs:text-sm sm:text-base lg:text-xl xl:text-2xl xxl:text-3xl xxxl:text-4xl font-body text-white pb-4 xs:pb-5 sm:pb-6 block hover:text-yellow-700 transition-colors md:font-body md:font-medium md:text-sm md:leading-[31.2px] md:tracking-normal md:[leading-trim:CAP_HEIGHT]">
                            hello@xsprojects.com
                        </a>
                        <a href="tel:+2348144694380" className="text-xs xs:text-sm sm:text-base lg:text-xl xl:text-2xl xxl:text-3xl xxxl:text-4xl text-white font-body hover:text-yellow-700 transition-colors md:font-body md:font-medium md:text-sm md:leading-[31.2px] md:tracking-normal md:[leading-trim:CAP_HEIGHT]">
                            +234 814 469 4380
                        </a>
                    </div>
                    <div>
                        <h4 className="text-white/60 text-xs xs:text-sm sm:text-sm md:text-smg lg:text-sm xl:text-sm xxl:text-sm xxxl:text-sm font-body text-dark font-semibold mb-4 xs:mb-5 sm:mb-6 md:mb-7">Follow Us</h4>
                        <div className="text-xs xs:text-sm sm:text-sm md:text-smg lg:text-sm xl:text-sm xxl:text-sm xxxl:text-sm flex items-center gap-4 xs:gap-5 sm:gap-6 ">
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                                <Image
                                src={linkedin}
                                alt="linkedin logo"
                                width={32}
                                height={32}
                                className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8"
                                />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                                <Image
                                src={instagram}
                                alt="instagram logo"
                                width={32}
                                height={32}
                                className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8"
                                />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="text-center font-body bg-indigo-700 ">
                    <small className="text-white hover:text-yellow-700 transition-colors md:font-body md:font-medium md:text-sm md:leading-[31.2px] md:tracking-normal md:[leading-trim:CAP_HEIGHT] my-16 px-15 sm:px-20 md:px-25 lg:px-30">© 2025 XS Projects. All Rights Reserved.</small>
                </div>
            </footer>
        </>
    );
}