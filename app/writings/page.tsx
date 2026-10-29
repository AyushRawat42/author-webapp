import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, BookOpen, Feather, Calendar, Clock, Compass } from 'lucide-react';
import { ARTICLES, PHILOSOPHY_POSTS } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Writings — Articles & Philosophy',
  description:
    'The written archive of Anant Chaudhary, categorized strictly into Articles and Philosophy.',
  alternates: {
    canonical: '/writings',
  },
  openGraph: {
    title: 'Writings | Anant Chaudhary',
    description:
      'The written archive of Anant Chaudhary, categorized strictly into Articles and Philosophy.',
  },
};

interface Props {
  searchParams?: Promise<{ category?: string }>;
}

export default async function WritingsPage({ searchParams }: Props) {
  const resolvedParams = searchParams ? await searchParams : {};
  const currentCategory = resolvedParams.category?.toLowerCase();

  const showAll = !currentCategory || (currentCategory !== 'articles' && currentCategory !== 'philosophy');
  const showArticles = showAll || currentCategory === 'articles';
  const showPhilosophy = showAll || currentCategory === 'philosophy';

  return (
    <div className="min-h-screen bg-[#050505] text-[#C0C0C0] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-[0.25em] text-[#B08D57] font-cinzel">
            The Written Archive
          </p>
          <h1 className="font-cinzel text-3xl sm:text-5xl font-bold tracking-wide text-[#C0C0C0]">
            Writings & Dispatches
          </h1>
          <p className="font-poppins text-sm sm:text-base text-[#777777] leading-relaxed">
            Exploring human agency, intellectual discipline, and the principles connecting philosophical thought with meaningful achievements in life.
          </p>

          {/* Clean Segmented Tab Navigation for the Two Categories */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/writings"
              className={`px-5 py-2 text-xs font-cinzel uppercase tracking-wider rounded-sm transition-all duration-200 border cursor-pointer ${
                showAll
                  ? 'bg-[#B5121B] border-[#B5121B] text-white font-semibold shadow-md shadow-[#B5121B]/20'
                  : 'bg-[#111111] border-[#777777]/30 text-[#777777] hover:text-white hover:border-[#777777]'
              }`}
            >
              All Categories
            </Link>

            <Link
              href="/writings?category=articles"
              className={`px-5 py-2 text-xs font-cinzel uppercase tracking-wider rounded-sm transition-all duration-200 border cursor-pointer ${
                currentCategory === 'articles'
                  ? 'bg-[#B5121B] border-[#B5121B] text-white font-semibold shadow-md shadow-[#B5121B]/20'
                  : 'bg-[#111111] border-[#777777]/30 text-[#777777] hover:text-white hover:border-[#777777]'
              }`}
            >
              Articles ({ARTICLES.length})
            </Link>

            <Link
              href="/writings?category=philosophy"
              className={`px-5 py-2 text-xs font-cinzel uppercase tracking-wider rounded-sm transition-all duration-200 border cursor-pointer ${
                currentCategory === 'philosophy'
                  ? 'bg-[#B5121B] border-[#B5121B] text-white font-semibold shadow-md shadow-[#B5121B]/20'
                  : 'bg-[#111111] border-[#777777]/30 text-[#777777] hover:text-white hover:border-[#777777]'
              }`}
            >
              Philosophy ({PHILOSOPHY_POSTS.length})
            </Link>
          </div>
        </div>

        {/* CATEGORY A: ARTICLES */}
        {showArticles && (
          <section aria-labelledby="articles-heading" className="space-y-10">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-4 border-b border-[#777777]/25 gap-2">
              <div>
                <span className="text-xs uppercase tracking-[0.25em] text-[#B08D57] font-cinzel block">
                  Category A
                </span>
                <h2
                  id="articles-heading"
                  className="font-cinzel text-2xl sm:text-3xl font-bold tracking-wider text-[#C0C0C0] uppercase mt-1"
                >
                  Articles
                </h2>
              </div>
              <p className="text-xs text-[#777777] font-poppins">
                Standard editorial blog format covering deep focus, solitude, and craftsmanship.
              </p>
            </div>

            {/* Standard Modern Editorial Blog Layout */}
            <div className="space-y-8">
              {ARTICLES.map((article, idx) => (
                <article
                  key={article.id}
                  className="bg-[#111111] border border-[#777777]/30 rounded-sm overflow-hidden flex flex-col md:flex-row items-stretch hover:border-[#777777] transition-colors"
                >
                  {/* Featured Image / Visual container */}
                  <div className="md:w-5/12 bg-gradient-to-br from-[#181818] via-[#101010] to-[#070707] p-8 flex flex-col justify-between border-b md:border-b-0 md:border-r border-[#777777]/25 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/5 via-transparent to-black/60 pointer-events-none" />

                    <div className="flex items-center justify-between text-[11px] text-[#B08D57] font-cinzel tracking-wider relative z-10">
                      <span>DISPATCH 0{idx + 1}</span>
                      <span>{article.readTime}</span>
                    </div>

                    <div className="my-8 flex justify-center relative z-10">
                      <div className="w-16 h-16 rounded-full border border-[#777777]/40 flex items-center justify-center text-[#C0C0C0] group-hover:scale-105 group-hover:border-[#B5121B] transition-all bg-[#0a0a0a]">
                        <BookOpen size={26} className="text-[#B5121B]" />
                      </div>
                    </div>

                    <div className="text-[10px] uppercase font-cinzel tracking-[0.2em] text-[#777777] text-center relative z-10">
                      Editorial Series
                    </div>
                  </div>

                  {/* Editorial Text Content */}
                  <div className="md:w-7/12 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-xs text-[#777777] font-poppins">
                        <Calendar size={13} className="text-[#B08D57]" />
                        <time>{article.publishedDate}</time>
                        <span className="text-[#777777]/40">·</span>
                        <Clock size={13} className="text-[#777777]" />
                        <span>{article.readTime}</span>
                      </div>

                      <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#C0C0C0] hover:text-white transition-colors">
                        <Link href={`/writings/articles/${article.slug}`}>
                          {article.title}
                        </Link>
                      </h3>

                      <p className="font-poppins text-sm text-[#777777] leading-relaxed line-clamp-3">
                        {article.excerpt}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-[#777777]/20 flex items-center justify-between">
                      <Link
                        href={`/writings/articles/${article.slug}`}
                        className="text-xs tracking-wider uppercase font-cinzel text-[#B5121B] hover:text-[#DC2626] inline-flex items-center gap-1.5 transition-colors font-semibold"
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
          </section>
        )}

        {/* Separator if both categories are visible */}
        {showAll && (
          <div className="relative py-4">
            <div className="w-full h-[1px] bg-[#777777]/20" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 bg-[#050505] text-[#B08D57]">
              <Compass size={16} />
            </div>
          </div>
        )}

        {/* CATEGORY B: PHILOSOPHY */}
        {showPhilosophy && (
          <section aria-labelledby="philosophy-heading" className="space-y-12">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-4 border-b border-[#777777]/25 gap-2">
              <div>
                <span className="text-xs uppercase tracking-[0.25em] text-[#B08D57] font-cinzel block">
                  Category B
                </span>
                <h2
                  id="philosophy-heading"
                  className="font-cinzel text-2xl sm:text-3xl font-bold tracking-wider text-[#C0C0C0] uppercase mt-1"
                >
                  Philosophy
                </h2>
              </div>
              <p className="text-xs text-[#777777] font-poppins">
                Original philosophical ideas, reflections and thoughts on agency, discipline, and meaningful achievement.
              </p>
            </div>

            {/* Clean, minimal presentation with generous spacing between thoughts */}
            <div className="space-y-12">
              {PHILOSOPHY_POSTS.map((item, index) => (
                <div
                  key={item.id}
                  className="bg-[#111111] border border-[#777777]/30 rounded-sm p-8 sm:p-12 space-y-6 hover:border-[#B08D57]/60 transition-colors relative"
                >
                  {/* Clean unboxed metadata header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-[#777777] font-poppins pb-4 border-b border-[#777777]/20">
                    <span className="font-cinzel uppercase tracking-widest text-[#B08D57] font-semibold">
                      Principle #{index + 1} · {item.corePrinciple}
                    </span>
                    <span>{item.publishedDate}</span>
                  </div>

                  {/* Title */}
                  <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#C0C0C0]">
                    {item.title}
                  </h3>

                  {/* Short philosophical thought displayed directly */}
                  <blockquote className="font-poppins text-base sm:text-lg text-[#C0C0C0]/90 leading-relaxed italic border-l-2 border-[#B5121B] pl-5 sm:pl-6 my-4">
                    “{item.shortThought}”
                  </blockquote>

                  {/* Option to open and read longer philosophical content separately */}
                  {item.extendedReflection && item.extendedReflection.length > 0 && (
                    <div className="pt-4 flex items-center justify-end">
                      <Link
                        href={`/writings/philosophy/${item.slug}`}
                        className="text-xs uppercase tracking-wider font-cinzel text-[#B5121B] hover:text-[#DC2626] inline-flex items-center gap-1.5 transition-colors font-semibold"
                      >
                        <span>Open & Read Longer Reflection</span>
                        <ArrowRight size={13} />
                      </Link>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
