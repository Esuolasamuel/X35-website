import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/images/logo.svg";
import linkedin from "@/assets/icons/linkedin.svg";
import instagram from "@/assets/icons/instagram.svg";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    // Updated background to match the dark navy/black in the screenshot
    <footer className="bg-[#11111F] py-6 sm:py-7.5 md:py-15 lg:py-20 px-6 sm:px-7.5 md:px-15 lg:px-30">
      <div className="mx-auto">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8 pb-6 sm:pb-7.5 md:pb-15 lg:pb-20 border-b border-white/10">
          
          {/* Logo & Slogan Section */}
          <div className="flex flex-col items-start max-w-xs">
            <Link href="/">
              <Image
                src={Logo}
                alt="x35 Logo"
                width={64}
                height={64}
                className="w-16 h-16 mb-6"
              />
            </Link>
            <div className="text-white font-body flex-col lg:flex-row font-medium text-xs sm:text-xs md:text-base lg:text-lg tracking-tight">
              <span className="text-yellow-400">We</span> Design.{" "}
              <span className="text-yellow-400">We</span> Build.{" "}
              <span className="text-yellow-400">We</span> Deliver.
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-start font-body">
            <h4 className="text-white/50 text-sm sm:text-sm md:text-sm lg:text-base font-bold mb-8 tracking-wider">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="text-white text-xs sm:text-sm md:text-sm lg:text-sm hover:text-yellow-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="text-white text-xs sm:text-sm md:text-sm lg:text-sm hover:text-yellow-400 transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/projects" className="text-white text-xs sm:text-sm md:text-sm lg:text-sm hover:text-yellow-400 transition-colors">Our Projects</Link>
              </li>
              <li>
                <Link href="/#services" className="text-white text-xs sm:text-sm md:text-sm lg:text-sm hover:text-yellow-400 transition-colors">Our Services</Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="flex flex-col items-start font-body">
            <h4 className="text-white/50 text-sm font-bold mb-8 tracking-wider">Contact Us</h4>
            <div className="flex flex-col space-y-3 text-base">
              <a href="mailto:hello@x35projects.com" className="text-white hover:text-yellow-400 transition-colors">
                hello@x35projects.com
              </a>
              <a href="tel:+2348144694380" className="text-white hover:text-yellow-400 transition-colors">
                +234 814 469 4380
              </a>
            </div>
          </div>

          {/* Follow Us */}
          <div className="flex flex-col items-start font-body">
            <h4 className="text-white/50 text-sm font-bold mb-8 tracking-wider">Follow Us</h4>
            <div className="flex items-center gap-5 text-xs sm:text-sm md:text-sm lg:text-sm">
              <a href="https://www.linkedin.com/company/x35-projects-ltd" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                <Image src={linkedin} alt="linkedin" width={28} height={28} />
              </a>
              <a href="https://www.instagram.com/x35projects/" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity text-xs sm:text-sm md:text-sm lg:text-sm">
                <Image src={instagram} alt="instagram" width={28} height={28} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 sm:pt-7.5 md:pt-15 lg:pt-20 text-center">
          <p className="text-white/90 text-sm font-body tracking-wide">
            © {currentYear} X35 Projects. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}