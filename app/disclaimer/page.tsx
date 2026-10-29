import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, AlertCircle, FileCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Disclaimer',
  description: 'Official Disclaimer page structure for Anant Chaudhary.',
  alternates: {
    canonical: '/disclaimer',
  },
};

export default function DisclaimerPage() {
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

        {/* Page Header */}
        <header className="space-y-4 pb-8 border-b border-[#777777]/25">
          <p className="text-xs uppercase tracking-[0.25em] text-[#B08D57] font-cinzel">
            Legal Document 4 of 4
          </p>
          <h1 className="font-cinzel text-3xl sm:text-4xl font-bold tracking-wide text-[#C0C0C0]">
            Disclaimer
          </h1>
          <div className="flex items-center gap-4 text-xs font-poppins text-[#777777]">
            <span>Document Status: Pending Client Sign-Off</span>
            <span>·</span>
            <span>Philosophical Commentary & Independent Views</span>
          </div>
        </header>

        {/* Prepared Structure */}
        <div className="bg-[#111111] border border-[#777777]/30 rounded-sm p-8 sm:p-12 space-y-8">
          <div className="flex items-center gap-3 text-[#B08D57]">
            <AlertCircle size={24} className="text-[#B5121B]" />
            <h2 className="font-cinzel text-lg font-bold text-[#C0C0C0]">
              Philosophical Commentary Disclaimer
            </h2>
          </div>

          <div className="space-y-4 text-sm font-poppins text-[#777777] leading-relaxed">
            <p>
              This structure has been created to house the legal disclosures regarding philosophical commentary, thought experiments, and reader correspondence.
            </p>
            <p className="border-l-2 border-[#B5121B] pl-4 text-[#C0C0C0]">
              In strict adherence to author requirements, no generic boilerplate legal text has been inserted. The finalized legal disclaimer articulating intellectual autonomy and individual moral agency will be published upon author submission.
            </p>
            <p>
              All writings and reflections published on this website represent philosophical inquiries and conceptual explorations intended for contemplative education and intellectual dialogue.
            </p>
          </div>

          <div className="pt-6 border-t border-[#777777]/20 flex items-center justify-between text-xs text-[#777777]">
            <span>Philosophical Discourse Protocol</span>
            <span className="font-mono">REF: DISC-2026-V1</span>
          </div>
        </div>
      </div>
    </div>
  );
}
