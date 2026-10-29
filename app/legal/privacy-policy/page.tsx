import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, FileCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Official Privacy Policy page structure for Anant Chaudhary.',
  alternates: {
    canonical: '/legal/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-[80vh] bg-[#050505] text-[#C0C0C0] px-4 sm:px-6 md:px-12 py-10 md:py-20">
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
          <h1 className="font-cinzel text-3xl sm:text-4xl font-bold tracking-wide text-[#C0C0C0] leading-tight break-words">
            Privacy Policy
          </h1>
          <div className="flex items-center gap-4 text-xs font-poppins text-[#777777]">
            <span>Document Status: Pending Client Sign-Off</span>
            <span>·</span>
            <span>Jurisdiction: International Literary Standards</span>
          </div>
        </header>

        <div className="bg-[#111111] border border-[#777777]/30 rounded-sm p-8 sm:p-12 space-y-8">
          <div className="flex items-center gap-3 text-[#B08D57]">
            <FileCheck size={24} className="text-[#B5121B]" />
            <h2 className="font-cinzel text-lg font-bold text-[#C0C0C0]">
              Official Policy Specification
            </h2>
          </div>

          <div className="space-y-4 text-sm font-poppins text-[#777777] leading-relaxed">
            <p>
              This page has been structured and designed in accordance with the official author website specifications for Anant Chaudhary.
            </p>
            <p className="border-l-2 border-[#B5121B] pl-4 text-[#C0C0C0]">
              Per editorial instructions, generic placeholder legal content has been withheld. The complete data governance, reader subscriber privacy provisions, and correspondence protection clauses will be integrated upon formal client authorization.
            </p>
            <p>
              All visitor interactions on this site, including newsletter subscriptions and intellectual inquiries, are treated with strict confidentiality and will never be commercialized.
            </p>
          </div>

          <div className="pt-6 border-t border-[#777777]/20 flex items-center justify-between text-xs text-[#777777]">
            <span>Official Author Governance</span>
            <span className="font-mono">REF: PRIV-2026-V1</span>
          </div>
        </div>
      </div>
    </div>
  );
}
