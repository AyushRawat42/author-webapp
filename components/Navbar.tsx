'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Books', href: '/books' },
  { label: 'Writings', href: '/writings' },
  { label: 'Contact', href: '/contact' },
  { label: 'Ask', href: '/ask' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#050505] border-b border-[#777777]/30 transition-colors">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 h-20 flex items-center justify-between gap-3 md:gap-8">
        {/* Brand Wordmark */}
        <Link
          href="/"
          className="font-cinzel text-base min-[375px]:text-lg sm:text-2xl font-bold tracking-[0.12em] sm:tracking-[0.2em] text-[#C0C0C0] hover:text-white transition-colors whitespace-nowrap shrink-0"
        >
          ANANT CHAUDHARY
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-3 lg:gap-8 text-sm font-medium font-poppins">
          {NAV_LINKS.map((link) => {
            const isActive =
              link.href === '/'
                ? pathname === '/'
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative py-1 tracking-wide transition-colors whitespace-nowrap shrink-0 ${
                  isActive
                    ? 'text-white font-semibold'
                    : 'text-[#C0C0C0]/80 hover:text-white'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#B5121B]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Action Button: Ask a Question CTA */}
        <div className="hidden md:flex items-center gap-4 shrink-0">
          <Link
            href="/ask"
            className="px-5 py-2.5 rounded-sm bg-[#B5121B] hover:bg-[#DC2626] text-white text-xs font-semibold tracking-wider font-cinzel uppercase transition-all duration-200 shadow-md shadow-[#B5121B]/20 whitespace-nowrap shrink-0"
          >
            Ask a Question
          </Link>
        </div>

        {/* Mobile Navigation Trigger */}
        <div className="flex md:hidden items-center">
          <button
            type="button"
            onClick={() => setMobileMenuOpen((isOpen) => !isOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            className="p-2.5 min-h-[44px] min-w-[44px] text-[#C0C0C0] hover:text-white cursor-pointer"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="w-full md:hidden bg-[#111111] border-b border-[#777777] px-4 sm:px-6 py-3.5 font-poppins"
        >
          <div className="flex flex-col">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="border-b border-[#777777]/20 py-3.5 text-lg text-[#C0C0C0] hover:text-[#DC2626] transition-colors last:border-b-0"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
