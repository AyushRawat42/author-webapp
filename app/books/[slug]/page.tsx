import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, BookCheck, Bookmark } from 'lucide-react';
import BookCover from '@/components/BookCover';
import { PUBLISHED_BOOKS } from '@/lib/data';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PUBLISHED_BOOKS.map((book) => ({
    slug: book.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const book = PUBLISHED_BOOKS.find((b) => b.slug === slug);
  if (!book) return { title: 'Book Not Found' };

  return {
    title: `${book.title} — Book Details`,
    description: book.synopsis?.slice(0, 155),
    alternates: {
      canonical: `/books/${book.slug}`,
    },
    openGraph: {
      title: `${book.title} | Anant Chaudhary`,
      description: book.synopsis?.slice(0, 155),
    },
  };
}

export default async function BookDetailPage({ params }: Props) {
  const { slug } = await params;
  const book = PUBLISHED_BOOKS.find((b) => b.slug === slug);

  if (!book) {
    notFound();
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Book',
    name: book.title,
    author: {
      '@type': 'Person',
      name: 'Anant Chaudhary',
    },
    isbn: book.isbn,
    numberOfPages: book.pages,
    bookFormat: 'Hardcover',
    inLanguage: 'en',
    publisher: {
      '@type': 'Organization',
      name: book.publisher,
    },
    description: book.synopsis,
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#C0C0C0] py-16 px-4 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-5xl mx-auto space-y-16">
        {/* Breadcrumb Navigation */}
        <Link
          href="/books"
          className="inline-flex items-center gap-2 text-xs font-cinzel uppercase tracking-widest text-[#777777] hover:text-[#DC2626] transition-colors"
        >
          <ArrowLeft size={14} />
          <span>Back to Library</span>
        </Link>

        {/* Book Primary Display */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          {/* Left Column: Cover */}
          <div className="md:col-span-5 flex justify-center md:justify-start">
            <BookCover book={book} size="lg" />
          </div>

          {/* Right Column: Book Specifications & Actions */}
          <div className="md:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-[0.25em] text-[#B08D57] font-cinzel block">
                Published Volume · {book.publishedYear}
              </span>
              <h1 className="font-cinzel text-3xl sm:text-4xl font-bold tracking-wide text-[#C0C0C0]">
                {book.title}
              </h1>
              {book.subtitle && (
                <p className="font-cinzel text-sm sm:text-base text-[#777777] tracking-wider">
                  {book.subtitle}
                </p>
              )}
            </div>

            {/* Metadata Table */}
            <div className="bg-[#111111] border border-[#777777]/30 rounded-sm p-5 space-y-2.5 text-xs font-poppins">
              <div className="flex justify-between py-1 border-b border-[#777777]/15">
                <span className="text-[#777777]">Author</span>
                <span className="text-[#C0C0C0] font-medium">Anant Chaudhary</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#777777]/15">
                <span className="text-[#777777]">Publisher</span>
                <span className="text-[#C0C0C0]">{book.publisher}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#777777]/15">
                <span className="text-[#777777]">ISBN-13</span>
                <span className="text-[#C0C0C0] font-mono">{book.isbn}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#777777]/15">
                <span className="text-[#777777]">Format</span>
                <span className="text-[#C0C0C0]">{book.format}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-[#777777]">Pages</span>
                <span className="text-[#C0C0C0] font-mono">{book.pages}</span>
              </div>
            </div>

            {/* Purchase Options */}
            <div className="space-y-3 pt-2">
              <h3 className="font-cinzel text-xs uppercase tracking-widest text-[#B08D57]">
                Acquisition Links
              </h3>
              <div className="flex flex-wrap gap-3">
                {book.purchaseLinks?.map((link) => (
                  <a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-[#B5121B] hover:bg-[#DC2626] text-white text-xs font-semibold tracking-wider font-cinzel uppercase rounded-sm transition-colors inline-flex items-center gap-2"
                  >
                    <span>Order via {link.platform}</span>
                    <ExternalLink size={12} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Philosophical Synopsis */}
        <div className="bg-[#111111] border border-[#777777]/30 rounded-sm p-8 sm:p-12 space-y-6">
          <h2 className="font-cinzel text-xl sm:text-2xl font-bold tracking-wide text-[#C0C0C0] pb-4 border-b border-[#777777]/25">
            Treatise Synopsis & Argument
          </h2>
          <div className="font-poppins text-sm sm:text-base text-[#C0C0C0]/90 leading-relaxed space-y-4">
            <p>{book.synopsis}</p>
          </div>

          {/* Key Themes */}
          {book.keyThemes && (
            <div className="pt-6 space-y-3">
              <h3 className="font-cinzel text-xs uppercase tracking-widest text-[#B08D57]">
                Key Theoretical Themes
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-[#777777]">
                {book.keyThemes.map((theme, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <Bookmark size={15} className="text-[#B5121B] shrink-0 mt-0.5" />
                    <span>{theme}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Table of Contents & Critical Acclaim */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {book.tableOfContents && (
            <div className="bg-[#111111] border border-[#777777]/30 rounded-sm p-8 space-y-4">
              <h3 className="font-cinzel text-lg font-bold text-[#C0C0C0] pb-3 border-b border-[#777777]/25">
                Structure & Chapters
              </h3>
              <ul className="space-y-3 text-sm font-poppins text-[#777777]">
                {book.tableOfContents.map((ch, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B5121B]" />
                    <span>{ch}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {book.praise && book.praise.length > 0 && (
            <div className="bg-[#111111] border border-[#777777]/30 rounded-sm p-8 space-y-6">
              <h3 className="font-cinzel text-lg font-bold text-[#C0C0C0] pb-3 border-b border-[#777777]/25">
                Critical Review Excerpts
              </h3>
              <div className="space-y-6">
                {book.praise.map((p, i) => (
                  <blockquote key={i} className="space-y-2 text-xs font-poppins">
                    <p className="text-[#C0C0C0] italic leading-relaxed">
                      “{p.quote}”
                    </p>
                    <cite className="block text-[#B08D57] not-italic font-semibold font-cinzel">
                      — {p.author}, {p.title}
                    </cite>
                  </blockquote>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
