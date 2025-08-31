'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Service', href: '/service' },
  { name: 'Feature', href: '/feature' },
  { name: 'Product', href: '/product' },
  { name: 'Testimonial', href: '/testimonial' },
  { name: 'FAQ', href: '/faq' },
];

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
   
      <header className="fixed top-0 left-0 w-full bg-white z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-xl font-bold text-gray-800">
          <img src="/logo.svg" alt="Logo" className="h-6 w-6" />
          Nexcent
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 text-gray-700">
          {navLinks.map(({ name, href }) => (
            <Link
              key={name}
              href={href}
              className={`transition hover:text-green-600 ${
                pathname === href ? 'text-green-600 font-semibold' : ''
              }`}
            >
              {name}
            </Link>
          ))}
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/login" className="text-green-600 hover:underline text-sm">
            Login
          </Link>
          <Link
            href="/signup"
            className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700"
          >
            Sign up
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-50 border-t px-4 pb-4 space-y-3 animate-slide-down">
          {navLinks.map(({ name, href }) => (
            <Link
              key={name}
              href={href}
              className={`block text-gray-700 transition hover:text-green-600 ${
                pathname === href ? 'text-green-600 font-semibold' : ''
              }`}
              onClick={toggleMenu}
            >
              {name}
            </Link>
          ))}
          <div className="flex gap-4 mt-4">
            <Link href="/login" className="text-green-600 text-sm" onClick={toggleMenu}>
              Login
            </Link>
            <Link
              href="/signup"
              className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700"
              onClick={toggleMenu}
            >
              Sign up
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
