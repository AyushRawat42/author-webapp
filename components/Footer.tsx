'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUp, Instagram, Linkedin, Twitter, BookOpen } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="w-full bg-[#050505] border-t border-[#777777]/30 text-[#C0C0C0] font-poppins pt-16 pb-12">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        {/* Main Footer: Strictly THREE main sections in ONE HORIZONTAL ROW on desktop with equal-width columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left pb-14 border-b border-[#777777]/20">
          {/* Column A (EXPLORE) */}
          <div className="space-y-4">
            <h4 className="font-cinzel text-sm uppercase tracking-[0.2em] text-[#C0C0C0] font-bold pb-2 border-b border-[#777777]/30 inline-block">
              A. Explore
            </h4>
            <ul className="space-y-3 pt-2 text-sm text-[#777777]">
              <li>
                <Link
                  href="/books"
                  className="hover:text-white hover:text-[#DC2626] transition-colors"
                >
                  Books
                </Link>
              </li>
              <li>
                <Link
                  href="/writings?category=articles"
                  className="hover:text-white hover:text-[#DC2626] transition-colors"
                >
                  Articles
                </Link>
              </li>
              <li>
                <Link
                  href="/writings?category=philosophy"
                  className="hover:text-white hover:text-[#DC2626] transition-colors"
                >
                  Philosophy
                </Link>
              </li>
              <li>
                <Link
                  href="/ask"
                  className="hover:text-white hover:text-[#DC2626] transition-colors"
                >
                  Ask
                </Link>
              </li>
            </ul>
          </div>

          {/* Column B (CONNECT) */}
          <div className="space-y-4">
            <h4 className="font-cinzel text-sm uppercase tracking-[0.2em] text-[#C0C0C0] font-bold pb-2 border-b border-[#777777]/30 inline-block">
              B. Connect
            </h4>
            <ul className="space-y-3 pt-2 text-sm text-[#777777]">
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center md:justify-start gap-2.5 hover:text-[#DC2626] transition-colors"
                >
                  <Instagram size={16} className="text-[#B08D57]" />
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center md:justify-start gap-2.5 hover:text-[#DC2626] transition-colors"
                >
                  <Linkedin size={16} className="text-[#B08D57]" />
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center md:justify-start gap-2.5 hover:text-[#DC2626] transition-colors"
                >
                  <Twitter size={16} className="text-[#B08D57]" />
                  <span>X (Twitter)</span>
                </a>
              </li>
              <li>
                <a
                  href="https://goodreads.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center md:justify-start gap-2.5 hover:text-[#DC2626] transition-colors"
                >
                  <BookOpen size={16} className="text-[#B08D57]" />
                  <span>Goodreads</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column C (LEGAL) */}
          <div className="space-y-4">
            <h4 className="font-cinzel text-sm uppercase tracking-[0.2em] text-[#C0C0C0] font-bold pb-2 border-b border-[#777777]/30 inline-block">
              C. Legal
            </h4>
            <ul className="space-y-3 pt-2 text-sm text-[#777777]">
              <li>
                <Link
                  href="/legal/privacy-policy"
                  className="hover:text-white hover:text-[#DC2626] transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/legal/copyright-policy"
                  className="hover:text-white hover:text-[#DC2626] transition-colors"
                >
                  Copyright Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/legal/terms-and-conditions"
                  className="hover:text-white hover:text-[#DC2626] transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/legal/disclaimer"
                  className="hover:text-white hover:text-[#DC2626] transition-colors"
                >
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-6 flex flex-col-reverse sm:flex-row items-center justify-between gap-4 text-xs text-[#777777] border-t border-[#777777]/20">
          <p>© 2026 Anant Chaudhary. All Rights Reserved.</p>
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-center">
            <Link
              href="/admin/submissions"
              className="hover:text-[#C0C0C0] transition-colors text-[11px] underline underline-offset-4 decoration-[#777777]/40"
            >
              Submission & Review Desk
            </Link>
            <Link
              href="/seo-preview"
              className="hover:text-[#B08D57] transition-colors text-[11px] underline underline-offset-4 decoration-[#777777]/40"
            >
              SEO & Metadata Approval
            </Link>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-[#C0C0C0] hover:text-[#DC2626] transition-colors cursor-pointer"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp size={14} className="text-[#B5121B]" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
