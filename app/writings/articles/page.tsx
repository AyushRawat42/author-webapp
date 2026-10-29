import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Calendar, Clock, Feather } from 'lucide-react';
import { ARTICLES } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Articles — Editorial Blog',
  description:
    'Editorial essays and articles by Anant Chaudhary examining intellectual discipline, silence, and work.',
  alternates: {
    canonical: '/writings/articles',
  },
  openGraph: {
    title: 'Articles | Anant Chaudhary',
    description:
      'Editorial essays and articles by Anant Chaudhary examining intellectual discipline, silence, and work.',
  },
};

export default function ArticlesPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#C0C0C0] px-4 sm:px-6 md:px-12 py-10 md:py-20">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-[0.25em] text-[#B08D57] font-cinzel">
            Category A · Editorial
          </p>
          <h1 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide text-[#C0C0C0] leading-tight break-words">
            Articles
          </h1>
          <p className="font-poppins text-sm sm:text-base text-[#777777]">
            Carefully drafted essays on discipline, agency, and contemporary culture.
          </p>
        </div>

        {/* Standard Blog-Style Editorial Layout */}
        <div className="space-y-10">
          {ARTICLES.map((article, idx) => (
            <article
              key={article.id}
              className="bg-[#111111] border border-[#777777]/30 rounded-sm overflow-hidden hover:border-[#777777] transition-colors flex flex-col md:flex-row items-stretch"
            >
              {/* Featured Visual Container */}
              <div className="md:w-5/12 bg-gradient-to-br from-[#1c1c1c] to-[#0a0a0a] p-5 sm:p-8 flex flex-col justify-between border-b md:border-b-0 md:border-r border-[#777777]/20 relative overflow-hidden group">
                {/* Subtle decorative geometric overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/5 via-transparent to-black/60 pointer-events-none" />
                
                <div className="flex items-center justify-between text-[11px] text-[#B08D57] font-cinzel tracking-wider">
                  <span>DISPATCH #{idx + 1}</span>
                  <span>{article.readTime}</span>
                </div>

                <div className="my-8 flex justify-center">
                  <div className="w-16 h-16 rounded-full border border-[#777777]/40 flex items-center justify-center text-[#C0C0C0] group-hover:scale-105 group-hover:border-[#B5121B] transition-all">
                    <Feather size={28} className="text-[#B5121B]" />
                  </div>
                </div>

                <div className="text-[10px] uppercase font-cinzel tracking-[0.2em] text-[#777777] text-center">
                  Anant Chaudhary Archive
                </div>
              </div>

              {/* Content Column */}
              <div className="md:w-7/12 p-5 sm:p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  {/* Publication date & metadata */}
                  <div className="flex items-center gap-2 text-xs text-[#777777] font-poppins">
                    <Calendar size={13} className="text-[#B08D57]" />
                    <time>{article.publishedDate}</time>
                    <span className="text-[#777777]/40">·</span>
                    <Clock size={13} className="text-[#777777]" />
                    <span>{article.readTime}</span>
                  </div>

                  {/* Article Title */}
                  <h2 className="font-cinzel text-xl sm:text-2xl font-bold text-[#C0C0C0] hover:text-white transition-colors break-words">
                    <Link href={`/writings/articles/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h2>

                  {/* Short Excerpt */}
                  <p className="font-poppins text-sm text-[#777777] leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>

                {/* Read More Link */}
                <div className="pt-4 border-t border-[#777777]/20 flex items-center justify-between">
                  <Link
                    href={`/writings/articles/${article.slug}`}
                    className="text-xs tracking-wider uppercase font-cinzel text-[#DC2626] hover:text-white inline-flex items-center gap-1.5 transition-colors font-semibold"
                  >
                    <span>Read More</span>
                    <ArrowRight size={13} />
                  </Link>
                  <span className="text-[11px] text-[#777777]">Full Essay</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
