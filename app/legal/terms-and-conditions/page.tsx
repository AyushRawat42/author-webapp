import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Scale } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'Official Terms & Conditions page structure for Anant Chaudhary.',
  alternates: {
    canonical: '/legal/terms-and-conditions',
  },
};

export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-[80vh] bg-[#050505] text-[#C0C0C0] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-cinzel uppercase tracking-widest text-[#777777] hover:text-[#DC2626] transition-colors"
        >
          <ArrowLeft size={14} />
          <span>Return to Official Site</span>
        </Link>

        <header className="space-y-4 pb-8 border-b border-[#777777]/25">
          <p className="text-xs uppercase tracking-[0.25em] text-[#B08D57] font-cinzel">
            Legal Specification
          </p>
          <h1 className="font-cinzel text-3xl sm:text-4xl font-bold tracking-wide text-[#C0C0C0]">
            Terms & Conditions
          </h1>
          <div className="flex items-center gap-4 text-xs font-poppins text-[#777777]">
            <span>Document Status: Pending Client Sign-Off</span>
            <span>·</span>
            <span>Site Usage & Correspondence Agreement</span>
          </div>
        </header>

        <div className="bg-[#111111] border border-[#777777]/30 rounded-sm p-8 sm:p-12 space-y-8">
          <div className="flex items-center gap-3 text-[#B08D57]">
            <Scale size={24} className="text-[#B5121B]" />
            <h2 className="font-cinzel text-lg font-bold text-[#C0C0C0]">
              Terms of Engagement & Access
            </h2>
          </div>

          <div className="space-y-4 text-sm font-poppins text-[#777777] leading-relaxed">
            <p>
              This page has been structured and designed to host the terms governing visitor access, reader submissions via the Ask page, and newsletter distribution for the official website of Anant Chaudhary.
            </p>
            <p className="border-l-2 border-[#B5121B] pl-4 text-[#C0C0C0]">
              In accordance with author guidelines, no generic or placeholder boilerplate has been generated. The finalized terms defining intellectual property protections, outbound acquisition links, and inquiry protocols will be installed upon review.
            </p>
            <p>
              By accessing this digital archive, visitors agree to engage in respectful inquiry and adhere to standard international copyright conventions.
            </p>
          </div>

          <div className="pt-6 border-t border-[#777777]/20 flex items-center justify-between text-xs text-[#777777]">
            <span>Author Terms Protocol</span>
            <span className="font-mono">REF: TRMS-2026-V1</span>
          </div>
        </div>
      </div>
    </div>
  );
}
