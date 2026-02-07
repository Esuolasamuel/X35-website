import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/images/logo.svg";
import linkedin from "@/assets/icons/linkedin.svg";
import instagram from "@/assets/icons/instagram.svg";

export default function Footer() {
  return (
    // Updated background to match the dark navy/black in the screenshot
    <footer className="bg-[#0B0B15] p-6 sm:p-7.5 md:p-15 lg:p-30">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8 pb-6 sm:pb-7.5 md:pb-15 lg:pb-30 border-b border-white/10">
          
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
            <div className="text-white font-body flex-col lg:flex-row font-medium text-lg tracking-tight">
              <span className="text-yellow-400">We</span> Design.{" "}
              <span className="text-yellow-400">We</span> Build.{" "}
              <span className="text-yellow-400">We</span> Deliver.
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-start font-body">
            <h4 className="text-white/50 text-sm font-bold mb-8 tracking-wider">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/about" className="text-white hover:text-yellow-400 transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/Projects" className="text-white hover:text-yellow-400 transition-colors">Our Projects</Link>
              </li>
              <li>
                <Link href="/#services" className="text-white hover:text-yellow-400 transition-colors">Our Services</Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="flex flex-col items-start font-body">
            <h4 className="text-white/50 text-sm font-bold mb-8 tracking-wider">Contact Us</h4>
            <div className="flex flex-col space-y-3 text-sm">
              <a href="mailto:hello@x35projects.com" className="text-white hover:text-yellow-400 transition-colors">
                hello@x35projects.com
              </a>
              <a href="tel:+2348144694380" className="text-white hover:text-yellow-400 transition-colors">
                +234 802 942 0580
              </a>
            </div>
          </div>

          {/* Follow Us */}
          <div className="flex flex-col items-start font-body">
            <h4 className="text-white/50 text-sm font-bold mb-8 tracking-wider">Follow Us</h4>
            <div className="flex items-center gap-5">
              <a href="https://www.linkedin.com/company/x35-projects-ltd" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                <Image src={linkedin} alt="linkedin" width={28} height={28} />
              </a>
              <a href="https://www.instagram.com/x35projects/" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                <Image src={instagram} alt="instagram" width={28} height={28} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 sm:pt-7.5 md:pt-15 lg:pt-30 text-center">
          <p className="text-white/90 text-sm font-body tracking-wide">
            © 2025 X35 Projects. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}