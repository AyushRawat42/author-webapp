import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Biographical background and intellectual profile of author and philosopher Anant Chaudhary.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About | Anant Chaudhary',
    description:
      'Biographical background and intellectual profile of author and philosopher Anant Chaudhary.',
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-[80vh] bg-[#050505] text-[#C0C0C0]">
      {/* 1. One Hero Section */}
      <section className="relative px-4 sm:px-6 md:px-12 py-10 md:py-20 border-b border-[#777777]/20 bg-[#050505] overflow-hidden">
        {/* Subtle decorative highlight */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-[1px] bg-gradient-to-r from-transparent via-[#B08D57]/60 to-transparent" />

        <div className="max-w-4xl mx-auto text-center space-y-4">
          <p className="text-xs uppercase tracking-[0.25em] text-[#B08D57] font-cinzel">
            Biographical Profile
          </p>
          <h1 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide text-[#C0C0C0] leading-tight break-words">
            About Anant Chaudhary
          </h1>
          <p className="font-poppins text-sm sm:text-base text-[#777777] max-w-xl mx-auto">
            Author and philosophical thinker exploring human agency, epistemic rigor, and deliberate conduct.
          </p>
        </div>
      </section>

      {/* 2. One Content Section Below the Hero */}
      <section className="px-4 sm:px-6 md:px-12 py-10 md:py-20 max-w-3xl mx-auto">
        <div className="bg-[#111111] border border-[#777777]/30 rounded-sm p-8 sm:p-12 space-y-6 text-[#C0C0C0] font-poppins text-base sm:text-lg leading-relaxed">
          <p>
            Anant Chaudhary is an author and philosopher whose work focuses on the principles of epistemological clarity, internal sovereignty, and the conditions under which human beings achieve meaningful outcomes.
          </p>
          <p>
            Operating outside traditional academic insularity, his inquiries bridge classical stoic ethics, existential inquiry, and the psychological realities of modern discipline. Through published volumes such as <em>Shadows of Reason</em> and <em>The Quiet Summit</em>, Chaudhary examines how conscious individuals construct immutable convictions while navigating an increasingly reactive and fractured culture.
          </p>
          <p>
            His writing emphasizes the virtue of measured silence, the dignity of unseen preparation, and the enduring relationship between rigorous intellectual conduct and sovereign achievement.
          </p>
        </div>
      </section>
    </div>
  );
}
