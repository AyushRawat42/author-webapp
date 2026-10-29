import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, Share2, Feather, BookOpen } from 'lucide-react';
import { ARTICLES } from '@/lib/data';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return ARTICLES.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = ARTICLES.find((a) => a.slug === slug);
  if (!article) return { title: 'Article Not Found' };

  return {
    title: `${article.title} — Article`,
    description: article.excerpt,
    alternates: {
      canonical: `/writings/articles/${article.slug}`,
    },
    openGraph: {
      type: 'article',
      publishedTime: article.publishedDate,
      authors: ['Anant Chaudhary'],
      title: `${article.title} | Anant Chaudhary`,
      description: article.excerpt,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${article.title} | Anant Chaudhary`,
      description: article.excerpt,
    },
  };
}

export default async function ArticleDetailPage({ params }: Props) {
  const { slug } = await params;
  const article = ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const siteUrl = process.env.APP_URL || 'https://anantchaudhary.com';
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    description: article.excerpt,
    author: {
      '@type': 'Person',
      name: 'Anant Chaudhary',
      url: siteUrl,
    },
    datePublished: article.publishedDate,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteUrl}/writings/articles/${article.slug}`,
    },
  };

  return (
    <article className="min-h-screen bg-[#050505] text-[#C0C0C0] py-16 px-4 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-3xl mx-auto space-y-12">
        {/* Navigation Breadcrumb */}
        <Link
          href="/writings?category=articles"
          className="inline-flex items-center gap-2 text-xs font-cinzel uppercase tracking-widest text-[#777777] hover:text-[#DC2626] transition-colors"
        >
          <ArrowLeft size={14} />
          <span>Back to Articles</span>
        </Link>

        {/* Article Editorial Header */}
        <header className="space-y-6 pb-8 border-b border-[#777777]/25">
          <div className="flex items-center gap-2 text-xs text-[#777777] font-poppins">
            <span className="text-[#B08D57] font-cinzel uppercase tracking-wider font-semibold">
              Category A · Article
            </span>
            <span>·</span>
            <Calendar size={13} className="text-[#777777]" />
            <time>{article.publishedDate}</time>
            <span>·</span>
            <Clock size={13} className="text-[#777777]" />
            <span>{article.readTime}</span>
          </div>

          {/* Semantic H1 */}
          <h1 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#C0C0C0] leading-[1.2]">
            {article.title}
          </h1>

          {/* Subheading / Lead Excerpt */}
          <p className="font-poppins text-base sm:text-lg text-[#777777] italic leading-relaxed">
            {article.excerpt}
          </p>

          {/* Author Badge */}
          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#111111] border border-[#777777]/40 flex items-center justify-center font-cinzel text-xs text-[#C0C0C0]">
                AC
              </div>
              <div className="text-xs font-poppins">
                <span className="text-[#C0C0C0] font-medium block">
                  Anant Chaudhary
                </span>
                <span className="text-[#777777]">Author & Philosopher</span>
              </div>
            </div>
          </div>
        </header>

        {/* Featured Editorial Visual Display */}
        <div
          role="img"
          aria-label={`Editorial banner for ${article.title}`}
          className="w-full h-64 sm:h-80 bg-gradient-to-br from-[#1c1c1c] via-[#101010] to-[#070707] border border-[#777777]/30 rounded-sm relative overflow-hidden flex flex-col justify-between p-8"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-white/5 via-transparent to-black/70 pointer-events-none" />
          <div className="flex justify-between items-center text-xs font-cinzel text-[#B08D57] relative z-10">
            <span>EDITORIAL DISPATCH</span>
            <span>ANANT CHAUDHARY ARCHIVE</span>
          </div>
          <div className="flex justify-center relative z-10">
            <div className="w-20 h-20 rounded-full border border-[#777777]/30 flex items-center justify-center bg-[#050505]/80">
              <BookOpen size={32} className="text-[#B5121B]" />
            </div>
          </div>
          <div className="text-center text-[11px] font-poppins text-[#777777] relative z-10">
            Published in Aegis Literary Quarterly
          </div>
        </div>

        {/* Semantic Section with H2 and H3 Hierarchy */}
        <section className="space-y-8 font-poppins text-base sm:text-lg leading-relaxed text-[#C0C0C0]/90">
          <h2 className="font-cinzel text-xl sm:text-2xl font-bold text-[#C0C0C0] pt-4 border-b border-[#777777]/20 pb-2">
            I. The Premise of Deliberate Action
          </h2>

          <div className="space-y-6">
            {article.content.slice(0, 2).map((paragraph, idx) => (
              <p key={idx} className="leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          <h3 className="font-cinzel text-lg sm:text-xl font-semibold text-[#B08D57] pt-4">
            II. Preserving Intellectual Autonomy
          </h3>

          <div className="space-y-6">
            {article.content.slice(2).map((paragraph, idx) => (
              <p key={idx + 2} className="leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        {/* End Mark & Author Signature */}
        <div className="pt-12 border-t border-[#777777]/20 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-xs font-cinzel uppercase tracking-widest text-[#B08D57]">
            <Feather size={16} className="text-[#B5121B]" />
            <span>Anant Chaudhary Archive</span>
          </div>

          <Link
            href="/ask"
            className="px-5 py-2.5 bg-[#111111] hover:bg-[#181818] border border-[#777777]/40 text-[#C0C0C0] hover:text-white text-xs font-cinzel uppercase tracking-wider rounded-sm transition-colors"
          >
            Submit an Inquiry on this Article →
          </Link>
        </div>
      </div>
    </article>
  );
}
