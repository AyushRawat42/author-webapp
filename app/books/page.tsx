import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ShoppingCart } from 'lucide-react';
import BookCover from '@/components/BookCover';
import { PUBLISHED_BOOKS, UPCOMING_BOOKS } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Books & Publications',
  description:
    'Officially published treatises and forthcoming volumes by author and philosopher Anant Chaudhary.',
  alternates: {
    canonical: '/books',
  },
  openGraph: {
    title: 'Books & Publications | Anant Chaudhary',
    description:
      'Officially published treatises and forthcoming volumes by author and philosopher Anant Chaudhary.',
  },
};

export default function BooksPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#C0C0C0] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-24">
        {/* Page Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-[0.25em] text-[#B08D57] font-cinzel">
            Literary Bibliography
          </p>
          <h1 className="font-cinzel text-3xl sm:text-5xl font-bold tracking-wide text-[#C0C0C0]">
            Books & Publications
          </h1>
          <p className="font-poppins text-sm sm:text-base text-[#777777]">
            Philosophical treatises examining rational agency, solitary effort, and the pursuit of existential clarity.
          </p>
        </div>

        {/* Section A: Published Books */}
        <section aria-labelledby="published-books-heading" className="space-y-12">
          <div className="border-b border-[#777777]/25 pb-4">
            <h2
              id="published-books-heading"
              className="font-cinzel text-xl sm:text-2xl font-bold tracking-wider text-[#C0C0C0] uppercase"
            >
              A. Published Books
            </h2>
            <p className="text-xs text-[#777777] font-poppins mt-1">
              Officially published hardcover editions, translations, and independent bookstore distribution.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {PUBLISHED_BOOKS.map((book) => (
              <div
                key={book.id}
                className="bg-[#111111] border border-[#777777]/30 rounded-sm p-6 sm:p-8 flex flex-col sm:flex-row items-center sm:items-start gap-8 hover:border-[#B5121B]/60 transition-colors"
              >
                <div className="shrink-0">
                  <Link href={`/books/${book.slug}`}>
                    <BookCover book={book} size="md" />
                  </Link>
                </div>

                <div className="flex-1 space-y-4 text-center sm:text-left">
                  <div className="text-xs text-[#777777] font-poppins">
                    <span>Published: {book.publishedYear}</span>
                    <span className="mx-2 text-[#B08D57]">·</span>
                    <span>{book.publisher}</span>
                  </div>

                  <h3 className="font-cinzel text-2xl font-bold text-[#C0C0C0] hover:text-white transition-colors">
                    <Link href={`/books/${book.slug}`}>{book.title}</Link>
                  </h3>

                  {book.subtitle && (
                    <p className="font-cinzel text-xs text-[#B08D57] tracking-wider">
                      {book.subtitle}
                    </p>
                  )}

                  <p className="font-poppins text-xs sm:text-sm text-[#777777] leading-relaxed line-clamp-3">
                    {book.synopsis}
                  </p>

                  <div className="text-xs text-[#777777] font-mono space-y-1 pt-1">
                    <div>ISBN: {book.isbn}</div>
                    <div>Format: {book.format} ({book.pages} pages)</div>
                  </div>

                  {/* Actions & Purchase Links */}
                  <div className="pt-3 flex flex-wrap gap-3 justify-center sm:justify-start">
                    <Link
                      href={`/books/${book.slug}`}
                      className="px-4 py-2 bg-[#B5121B] hover:bg-[#DC2626] text-white text-xs font-semibold tracking-wider font-cinzel uppercase rounded-sm transition-colors inline-flex items-center gap-1.5"
                    >
                      <span>Book Details</span>
                      <ArrowRight size={13} />
                    </Link>

                    {book.purchaseLinks?.map((link) => (
                      <a
                        key={link.platform}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-2 bg-[#050505] border border-[#777777]/40 text-[#C0C0C0] hover:text-white text-xs font-medium font-cinzel uppercase rounded-sm transition-colors inline-flex items-center gap-1.5"
                      >
                        <ShoppingCart size={12} className="text-[#B08D57]" />
                        <span>{link.platform}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section B: Upcoming Books */}
        {/* Negative Constraint: Display upcoming books using ONLY their front cover images. Do NOT add descriptions, long introductions, or unnecessary details. */}
        <section aria-labelledby="upcoming-books-heading" className="space-y-8 pt-8">
          <div className="border-b border-[#777777]/25 pb-4">
            <h2
              id="upcoming-books-heading"
              className="font-cinzel text-xl sm:text-2xl font-bold tracking-wider text-[#C0C0C0] uppercase"
            >
              B. Upcoming Books
            </h2>
            <p className="text-xs text-[#777777] font-poppins mt-1">
              Forthcoming titles in preparation.
            </p>
          </div>

          {/* Clean and visually consistent presentation displaying ONLY front cover images */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-12 sm:gap-16 pt-4">
            {UPCOMING_BOOKS.map((book) => (
              <div key={book.id} className="flex flex-col items-center">
                <BookCover book={book} size="lg" />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
