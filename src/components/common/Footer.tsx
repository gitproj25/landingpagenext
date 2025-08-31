"use client";

import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaTwitter, FaYoutube, FaPaperPlane } from "react-icons/fa";

const Footer = () => {
  return (
<footer className="bg-gray-900 px-2 text-gray-400 py-6 sm:py-6 md:py-12   ">
  <div className="container mx-auto px-4 max-w-7xl">
    {/* Force 4 columns on all screen sizes */}
    <div className="grid grid-cols-4 gap-4">
      
      {/* Logo & Socials */}
      <div>
        <div className="flex items-center space-x-1 sm:space-x-2 mb-1 sm:mb-2">
          <Image
            src="/logo.svg"
            alt="Nexcent Logo"
            width={18}
            height={18}
            className="sm:w-8 sm:h-8"
          />
          <span className="text-xs sm:text-lg font-bold text-white">
            Nexcent
          </span>
        </div>

        <p className="text-xs">Copyright © 2020 Nexcent Ltd.</p>
        <p className="text-xs">All rights reserved</p>
        <div className="flex space-x-2 mt-2 text-lg">
          <a href="#"><FaInstagram className="hover:text-white" /></a>
          <a href="#"><FaTwitter className="hover:text-white" /></a>
          <a href="#"><FaYoutube className="hover:text-white" /></a>
        </div>
      </div>

      {/* Company Links */}
      <div>
        <h4 className="text-xs font-semibold text-white mb-2">Company</h4>
        <ul className="space-y-1 text-xs">
          <li><Link href="/about" className="hover:text-white">About us</Link></li>
          <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
          <li><Link href="/contact" className="hover:text-white">Contact us</Link></li>
          <li><Link href="/pricing" className="hover:text-white">Pricing</Link></li>
          <li><Link href="/testimonials" className="hover:text-white">Testimonials</Link></li>
        </ul>
      </div>

      {/* Support Links */}
      <div>
        <h4 className="text-xs font-semibold text-white mb-2">Support</h4>
        <ul className="space-y-1 text-xs">
          <li><Link href="/help" className="hover:text-white">Help center</Link></li>
          <li><Link href="/terms" className="hover:text-white">Terms of service</Link></li>
          <li><Link href="/legal" className="hover:text-white">Legal</Link></li>
          <li><Link href="/privacy" className="hover:text-white">Privacy policy</Link></li>
          <li><Link href="/status" className="hover:text-white">Status</Link></li>
        </ul>
      </div>

      {/* Stay Up to Date */}
      <div>
        <h4 className="text-xs font-semibold text-white mb-2 ">Stay up to date</h4>
        <form className="relative">
          <input
            type="email"
            placeholder="Your email"
            className="w-full bg-gray-800 text-white rounded-md py-2 px-3 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white text-xs"
          >
            <FaPaperPlane />
          </button>
        </form>
      </div>

    </div>
  </div>
</footer>






  );
};

export default Footer;
