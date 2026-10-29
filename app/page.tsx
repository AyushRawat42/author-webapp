import React from 'react';
import Link from 'next/link';
import { ArrowRight, BookOpen, Feather, MessageSquareQuote, Compass } from 'lucide-react';
import BookCover from '@/components/BookCover';
import EmailSubscription from '@/components/EmailSubscription';
import { PUBLISHED_BOOKS, ARTICLES, PHILOSOPHY_THOUGHTS } from '@/lib/data';

export default function HomePage() {
  const latestArticles = ARTICLES.slice(0, 2);
  const featuredPhilosophy = PHILOSOPHY_THOUGHTS.slice(0, 2);

  return (
    <div className="min-h-screen bg-[#050505] text-[#C0C0C0]">
      {/* 1.A Dedicated Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 border-b border-[#777777]/20 overflow-hidden">
        {/* Subtle architectural background visuals */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#111111] via-[#050505] to-[#050505] opacity-90" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#77777708_1px,transparent_1px),linear-gradient(to_bottom,#77777708_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        
        {/* Ambient crimson and antique gold glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#B5121B]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-1/4 w-72 h-72 bg-[#B08D57]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
          {/* Subtle Decorative Kicker */}
          <div className="inline-flex items-center gap-3 px-3 py-1 text-xs tracking-[0.25em] text-[#B08D57] uppercase font-cinzel font-medium">
            <span className="w-6 h-[1px] bg-[#B08D57]/50" />
            <span>The Official Literary & Philosophical Archive</span>
            <span className="w-6 h-[1px] bg-[#B08D57]/50" />
          </div>

          {/* Main Heading */}
          <h1 className="font-cinzel text-4xl sm:text-6xl lg:text-7xl font-bold tracking-[0.05em] text-[#C0C0C0] leading-[1.1] text-balance">
            ANANT CHAUDHARY
          </h1>

          {/* Tagline */}
          <p className="font-cinzel text-lg sm:text-xl lg:text-2xl text-[#C0C0C0]/90 tracking-wide font-normal max-w-3xl mx-auto text-balance">
            Words Forged in Deliberate Silence.
          </p>

          {/* Supporting Text */}
          <p className="font-poppins text-sm sm:text-base text-[#777777] max-w-2xl mx-auto leading-relaxed">
            Exploring the architecture of human judgment, the discipline of solitary achievement, and the reclamation of epistemic clarity amidst the noise of the modern world.
          </p>

          {/* CTA Buttons */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/books"
              className="px-7 py-3.5 bg-[#B5121B] hover:bg-[#DC2626] text-white text-xs sm:text-sm font-semibold tracking-wider font-cinzel uppercase rounded-sm transition-all duration-200 shadow-xl shadow-[#B5121B]/20 inline-flex items-center gap-2 group"
            >
              <span>Explore Published Books</span>
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/writings/philosophy"
              className="px-7 py-3.5 bg-[#111111] hover:bg-[#181818] border border-[#777777]/40 text-[#C0C0C0] hover:text-white text-xs sm:text-sm font-medium tracking-wider font-cinzel uppercase rounded-sm transition-all duration-200 inline-flex items-center gap-2"
            >
              <span>Read Philosophy</span>
            </Link>

            <Link
              href="/ask"
              className="px-7 py-3.5 bg-transparent hover:bg-white/5 border border-[#B08D57]/40 text-[#B08D57] hover:text-[#C0C0C0] text-xs sm:text-sm font-medium tracking-wider font-cinzel uppercase rounded-sm transition-all duration-200 inline-flex items-center gap-2"
            >
              <span>Submit a Question</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 1.B Remaining Homepage Sections (Clean, minimal, easy to navigate) */}

      {/* Section 1: Featured Publications */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-[#777777]/20">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#777777]/25 gap-4">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-[#B08D57] font-cinzel mb-2">
              Major Published Volumes
            </div>
            <h2 className="font-cinzel text-2xl sm:text-4xl font-bold tracking-wide text-[#C0C0C0]">
              The Treatises
            </h2>
          </div>
          <Link
            href="/books"
            className="text-xs tracking-wider uppercase font-cinzel text-[#C0C0C0] hover:text-[#DC2626] inline-flex items-center gap-2 transition-colors self-start md:self-auto"
          >
            <span>View Complete Library</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {PUBLISHED_BOOKS.map((book) => (
            <div
              key={book.id}
              className="bg-[#111111] border border-[#777777]/30 rounded-sm p-6 sm:p-8 flex flex-col sm:flex-row items-center sm:items-start gap-8 transition-colors hover:border-[#B5121B]/60"
            >
              <div className="shrink-0">
                <BookCover book={book} size="md" />
              </div>

              <div className="flex-1 space-y-4 text-center sm:text-left">
                <div className="text-xs text-[#777777] font-poppins">
                  <span>{book.publishedYear}</span>
                  <span className="mx-2 text-[#B08D57]">·</span>
                  <span>{book.format}</span>
                </div>

                <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#C0C0C0]">
                  {book.title}
                </h3>

                <p className="font-poppins text-xs sm:text-sm text-[#777777] leading-relaxed line-clamp-4">
                  {book.synopsis}
                </p>

                <div className="pt-2 flex flex-wrap gap-3 justify-center sm:justify-start">
                  <Link
                    href={`/books/${book.slug}`}
                    className="px-4 py-2 bg-[#B5121B] hover:bg-[#DC2626] text-white text-xs font-semibold tracking-wider font-cinzel uppercase rounded-sm transition-colors"
                  >
                    Examine Book
                  </Link>
                  <a
                    href={book.purchaseLinks?.[0]?.url || 'https://amazon.com'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-[#050505] border border-[#777777]/40 text-[#C0C0C0] hover:text-white text-xs font-medium font-cinzel uppercase rounded-sm transition-colors"
                  >
                    Acquire Hardcover
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 2: Core Philosophy Highlight */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-[#777777]/20">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#777777]/25 gap-4">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-[#B08D57] font-cinzel mb-2">
              Philosophical Inquiries
            </div>
            <h2 className="font-cinzel text-2xl sm:text-4xl font-bold tracking-wide text-[#C0C0C0]">
              Reflections on Conduct & Sovereignty
            </h2>
          </div>
          <Link
            href="/writings/philosophy"
            className="text-xs tracking-wider uppercase font-cinzel text-[#C0C0C0] hover:text-[#DC2626] inline-flex items-center gap-2 transition-colors self-start md:self-auto"
          >
            <span>All Philosophical Thoughts</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredPhilosophy.map((phil, idx) => (
            <div
              key={phil.id}
              className="bg-[#111111] border border-[#777777]/30 rounded-sm p-8 flex flex-col justify-between space-y-6 hover:border-[#B08D57]/50 transition-colors"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-[#777777]">
                  <span className="font-cinzel uppercase tracking-widest text-[#B08D57]">
                    Principle {idx + 1}
                  </span>
                  <span>{phil.publishedDate}</span>
                </div>

                <h3 className="font-cinzel text-lg sm:text-xl font-bold text-[#C0C0C0]">
                  {phil.title}
                </h3>

                <p className="font-poppins text-sm sm:text-base text-[#C0C0C0]/90 leading-relaxed italic border-l-2 border-[#B5121B] pl-4">
                  “{phil.shortThought}”
                </p>
              </div>

              <div className="pt-4 border-t border-[#777777]/20 flex items-center justify-between">
                <span className="text-xs text-[#777777]">
                  {phil.corePrinciple}
                </span>
                <Link
                  href={`/writings/philosophy/${phil.slug}`}
                  className="text-xs tracking-wider font-cinzel text-[#DC2626] hover:text-white uppercase inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>Read Reflection</span>
                  <ArrowRight size={12} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3: Recent Articles Preview */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-[#777777]/20">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#777777]/25 gap-4">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-[#B08D57] font-cinzel mb-2">
              Selected Writings
            </div>
            <h2 className="font-cinzel text-2xl sm:text-4xl font-bold tracking-wide text-[#C0C0C0]">
              Articles & Essays
            </h2>
          </div>
          <Link
            href="/writings/articles"
            className="text-xs tracking-wider uppercase font-cinzel text-[#C0C0C0] hover:text-[#DC2626] inline-flex items-center gap-2 transition-colors self-start md:self-auto"
          >
            <span>Read All Articles</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {latestArticles.map((art) => (
            <article
              key={art.id}
              className="bg-[#111111] border border-[#777777]/30 rounded-sm p-8 space-y-5 flex flex-col justify-between hover:border-[#777777] transition-colors"
            >
              <div className="space-y-3">
                <div className="text-xs text-[#777777] font-poppins">
                  <span>{art.publishedDate}</span>
                  <span className="mx-2 text-[#B08D57]">·</span>
                  <span>{art.readTime}</span>
                </div>

                <h3 className="font-cinzel text-xl font-bold text-[#C0C0C0] hover:text-white transition-colors">
                  <Link href={`/writings/articles/${art.slug}`}>{art.title}</Link>
                </h3>

                <p className="font-poppins text-sm text-[#777777] leading-relaxed">
                  {art.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-[#777777]/20">
                <Link
                  href={`/writings/articles/${art.slug}`}
                  className="text-xs tracking-wider uppercase font-cinzel text-[#DC2626] hover:text-white inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>Read Article</span>
                  <ArrowRight size={12} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Section 4: Critical Acclaim */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center space-y-10">
        <div className="inline-flex items-center justify-center gap-3 text-xs uppercase tracking-[0.25em] text-[#B08D57] font-cinzel">
          <MessageSquareQuote size={18} className="text-[#B5121B]" />
          <span>Critical Reception</span>
        </div>

        <blockquote className="space-y-6">
          <p className="font-cinzel text-lg sm:text-2xl text-[#C0C0C0] italic leading-relaxed max-w-3xl mx-auto">
            “Anant Chaudhary writes with the razor precision of a logician and the unyielding soul of an existentialist. His works demand that we confront the illusions of modern life and reconstruct our inner sovereignty.”
          </p>
          <footer className="text-xs font-poppins text-[#777777] space-y-1">
            <cite className="font-semibold text-[#C0C0C0] not-italic block">
              Julian Mercer
            </cite>
            <span>Senior Literary Critic, Continental Review</span>
          </footer>
        </blockquote>
      </section>

      {/* 1.C Email Subscription Section (Immediately above the footer) */}
      <EmailSubscription />
    </div>
  );
}
