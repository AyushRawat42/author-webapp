import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Compass, Sparkles } from 'lucide-react';
import { PHILOSOPHY_THOUGHTS } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Philosophy — Principles, Reflections & Conduct',
  description:
    'Original philosophical thoughts and reflections by Anant Chaudhary connecting philosophical principles with meaningful outcomes and achievements.',
  alternates: {
    canonical: '/writings/philosophy',
  },
  openGraph: {
    title: 'Philosophy | Anant Chaudhary',
    description:
      'Original philosophical thoughts and reflections by Anant Chaudhary connecting philosophical principles with meaningful outcomes and achievements.',
  },
};

export default function PhilosophyPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#C0C0C0] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-20">
        {/* Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-[0.25em] text-[#B08D57] font-cinzel">
            Category B · Philosophy
          </p>
          <h1 className="font-cinzel text-3xl sm:text-5xl font-bold tracking-wide text-[#C0C0C0]">
            Philosophical Thoughts & Reflections
          </h1>
          <p className="font-poppins text-sm sm:text-base text-[#777777] leading-relaxed">
            Original philosophical ideas and reflections exploring timeless principles and their immutable connection with meaningful outcomes, agency, and achievements in life.
          </p>
        </div>

        {/* Clean and Minimal Presentation with Proper Spacing Between Thoughts */}
        <div className="space-y-16">
          {PHILOSOPHY_THOUGHTS.map((item, index) => (
            <div
              key={item.id}
              className="bg-[#111111] border border-[#777777]/30 rounded-sm p-8 sm:p-12 space-y-6 hover:border-[#B08D57]/60 transition-colors relative"
            >
              {/* Top Meta Line: Clean, unboxed text */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-[#777777] font-poppins pb-4 border-b border-[#777777]/20">
                <span className="font-cinzel uppercase tracking-widest text-[#B08D57] font-semibold">
                  Reflection #{index + 1} · {item.corePrinciple}
                </span>
                <span>{item.publishedDate}</span>
              </div>

              {/* Title */}
              <h2 className="font-cinzel text-xl sm:text-2xl font-bold text-[#C0C0C0]">
                {item.title}
              </h2>

              {/* Individual Philosophical Thought */}
              <blockquote className="font-poppins text-base sm:text-lg text-[#C0C0C0]/90 leading-relaxed italic border-l-2 border-[#B5121B] pl-5 sm:pl-6 my-4">
                “{item.shortThought}”
              </blockquote>

              {/* Option to Open and Read Longer Content Separately Where Applicable */}
              {item.extendedReflection && item.extendedReflection.length > 0 && (
                <div className="pt-4 flex items-center justify-end">
                  <Link
                    href={`/writings/philosophy/${item.slug}`}
                    className="text-xs uppercase tracking-wider font-cinzel text-[#DC2626] hover:text-white inline-flex items-center gap-1.5 transition-colors font-semibold"
                  >
                    <span>Read Extended Treatise & Reflection</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
