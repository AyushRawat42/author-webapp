import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Compass, Feather } from 'lucide-react';
import { PHILOSOPHY_POSTS } from '@/lib/data';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PHILOSOPHY_POSTS.map((phil) => ({
    slug: phil.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const thought = PHILOSOPHY_POSTS.find((p) => p.slug === slug);
  if (!thought) return { title: 'Reflection Not Found' };

  return {
    title: `${thought.title} — Philosophical Reflection`,
    description: thought.shortThought,
    alternates: {
      canonical: `/writings/philosophy/${thought.slug}`,
    },
    openGraph: {
      type: 'article',
      title: `${thought.title} | Anant Chaudhary`,
      description: thought.shortThought,
      publishedTime: thought.publishedDate,
      authors: ['Anant Chaudhary'],
    },
    twitter: {
      card: 'summary',
      title: `${thought.title} | Anant Chaudhary`,
      description: thought.shortThought,
    },
  };
}

export default async function PhilosophyDetailPage({ params }: Props) {
  const { slug } = await params;
  const thought = PHILOSOPHY_POSTS.find((p) => p.slug === slug);

  if (!thought) {
    notFound();
  }

  const siteUrl = process.env.APP_URL || 'https://anantchaudhary.com';
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: thought.title,
    description: thought.shortThought,
    author: {
      '@type': 'Person',
      name: 'Anant Chaudhary',
      url: siteUrl,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteUrl}/writings/philosophy/${thought.slug}`,
    },
  };

  return (
    <article className="min-h-screen bg-[#050505] text-[#C0C0C0] px-4 sm:px-6 md:px-12 py-10 md:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-3xl mx-auto space-y-14">
        {/* Navigation Breadcrumb */}
        <Link
          href="/writings?category=philosophy"
          className="inline-flex items-center gap-2 text-xs font-cinzel uppercase tracking-widest text-[#777777] hover:text-[#DC2626] transition-colors"
        >
          <ArrowLeft size={14} />
          <span>Back to Philosophy Archive</span>
        </Link>

        {/* Minimal Distraction-Free Header */}
        <header className="space-y-6 text-center">
          <div className="inline-flex items-center gap-2 text-xs text-[#B08D57] font-cinzel uppercase tracking-[0.25em]">
            <span>Category B · Principle of Conduct</span>
          </div>

          <h1 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide text-[#C0C0C0] leading-tight break-words text-balance">
            {thought.title}
          </h1>

          <div className="text-xs font-poppins text-[#777777] flex items-center justify-center gap-3">
            <span>Authored by Anant Chaudhary</span>
            <span className="text-[#B08D57]">·</span>
            <time>{thought.publishedDate}</time>
            <span className="text-[#B08D57]">·</span>
            <span>{thought.corePrinciple}</span>
          </div>

          {/* Subtle Antique Gold Decorative Divider Accent */}
          <div className="pt-4 flex items-center justify-center gap-3">
            <span className="w-16 h-[1px] bg-gradient-to-r from-transparent to-[#B08D57]" />
            <Compass size={16} className="text-[#B08D57]" />
            <span className="w-16 h-[1px] bg-gradient-to-l from-transparent to-[#B08D57]" />
          </div>
        </header>

        {/* Short Thought Highlight Box */}
        <div className="bg-[#111111] border border-[#777777]/30 rounded-sm p-8 sm:p-10 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#B08D57]/70 to-transparent" />
          <blockquote className="font-poppins text-lg sm:text-xl text-[#C0C0C0] italic leading-relaxed max-w-2xl mx-auto">
            “{thought.shortThought}”
          </blockquote>
        </div>

        {/* Extended Body Reflections - Distraction Free Reading */}
        {thought.extendedReflection && (
          <div className="space-y-8 font-poppins text-base sm:text-lg leading-relaxed text-[#C0C0C0]/90">
            {thought.extendedReflection.map((paragraph, idx) => (
              <p key={idx} className="leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        )}

        {/* Subtle Antique Gold Decorative Divider Accent */}
        <div className="py-6 flex items-center justify-center gap-3">
          <span className="w-24 h-[1px] bg-gradient-to-r from-transparent to-[#B08D57]/60" />
          <span className="w-2 h-2 rounded-full bg-[#B08D57]/80" />
          <span className="w-24 h-[1px] bg-gradient-to-l from-transparent to-[#B08D57]/60" />
        </div>

        {/* Footnote and Inquiry Action */}
        <div className="pt-4 border-t border-[#777777]/20 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-xs font-cinzel uppercase tracking-widest text-[#B08D57]">
            <Feather size={16} className="text-[#B5121B]" />
            <span>Reflections on Human Sovereignty</span>
          </div>

          <Link
            href="/ask"
            className="px-5 py-2.5 bg-[#111111] hover:bg-[#181818] border border-[#777777]/40 text-[#C0C0C0] hover:text-white text-xs font-cinzel uppercase tracking-wider rounded-sm transition-colors"
          >
            Submit an Inquiry on this Principle →
          </Link>
        </div>
      </div>
    </article>
  );
}
