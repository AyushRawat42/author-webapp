'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, ShieldCheck, Search, Sparkles, Sliders } from 'lucide-react';

interface SEOReviewItem {
  page: string;
  url: string;
  title: string;
  description: string;
  primaryKeywords: string[];
  secondaryKeywords: string[];
  strategyNote: string;
  status: 'pending' | 'approved';
}

const INITIAL_SEO_DATA: SEOReviewItem[] = [
  {
    page: 'Home Page',
    url: '/',
    title: 'Anant Chaudhary — Author & Philosopher | Official Website',
    description:
      'The official website of author and philosopher Anant Chaudhary. Explore published works, philosophical reflections, forthcoming releases, and inquiries.',
    primaryKeywords: ['Anant Chaudhary', 'Author Anant Chaudhary', 'Contemporary Philosophy'],
    secondaryKeywords: ['Shadows of Reason', 'The Quiet Summit', 'Epistemic Sovereignty'],
    strategyNote: 'Establishes author authority, exact name targeting, and high-level philosophical themes in natural hero typography.',
    status: 'pending',
  },
  {
    page: 'About Page',
    url: '/about',
    title: 'About Anant Chaudhary — Biographical & Intellectual Profile',
    description:
      'Biographical background, core intellectual inquiries, and literary philosophy of author and thinker Anant Chaudhary.',
    primaryKeywords: ['About Anant Chaudhary', 'Anant Chaudhary Biography'],
    secondaryKeywords: ['Philosopher Profile', 'Literary Philosophy', 'Human Agency'],
    strategyNote: 'Concise biographical authority focusing on the single-hero and single-content section constraint without fluff.',
    status: 'pending',
  },
  {
    page: 'Books Page',
    url: '/books',
    title: 'Books & Publications by Anant Chaudhary | Official Library',
    description:
      'Explore officially published philosophical treatises and forthcoming editions by Anant Chaudhary, including Shadows of Reason and The Quiet Summit.',
    primaryKeywords: ['Anant Chaudhary Books', 'Shadows of Reason', 'The Quiet Summit'],
    secondaryKeywords: ['Philosophy Hardcover', 'Aegis Editions', 'Upcoming Books'],
    strategyNote: 'Optimized for book search queries, ISBN references, and acquisitions.',
    status: 'pending',
  },
  {
    page: 'Book: Shadows of Reason',
    url: '/books/shadows-of-reason',
    title: 'Shadows of Reason by Anant Chaudhary — Hardcover Treatise',
    description:
      'Shadows of Reason examines fractures in rationalism, human judgment, and existential clarity. Hardcover editions and independent bookstore availability.',
    primaryKeywords: ['Shadows of Reason book', 'Anant Chaudhary Shadows of Reason'],
    secondaryKeywords: ['Human Judgment Philosophy', 'Stoicism and Epistemology'],
    strategyNote: 'Includes full Schema.org Book structured markup, ISBN, publisher, and critical reviews.',
    status: 'pending',
  },
  {
    page: 'Book: The Quiet Summit',
    url: '/books/the-quiet-summit',
    title: 'The Quiet Summit by Anant Chaudhary — On Discipline & Will',
    description:
      'In The Quiet Summit, Anant Chaudhary articulates the solitary discipline of achievement and inner fortitude. Official hardcover edition.',
    primaryKeywords: ['The Quiet Summit book', 'Anant Chaudhary The Quiet Summit'],
    secondaryKeywords: ['Philosophy of Action', 'Discipline and Solitude'],
    strategyNote: 'Targets inquiries on stoic discipline and philosophy of action.',
    status: 'pending',
  },
  {
    page: 'Writings — Hub',
    url: '/writings',
    title: 'Writings & Dispatches — Articles & Philosophy | Anant Chaudhary',
    description:
      'Read the written archive of Anant Chaudhary, categorized into Articles (editorial blog) and Philosophy (principles of conduct).',
    primaryKeywords: ['Anant Chaudhary Writings', 'Philosophy Articles'],
    secondaryKeywords: ['Philosophical Thoughts', 'Editorial Essays'],
    strategyNote: 'Strictly presents two categories: Articles and Philosophy.',
    status: 'pending',
  },
  {
    page: 'Writings — Articles',
    url: '/writings/articles',
    title: 'Articles by Anant Chaudhary — Editorial Blog Archive',
    description:
      'Carefully drafted editorial essays on measured silence, deep work focus, craftsmanship, and modern culture by Anant Chaudhary.',
    primaryKeywords: ['Anant Chaudhary Articles', 'Silence and Discipline Essay'],
    secondaryKeywords: ['Modern Rationalism', 'Deep Work Philosophy'],
    strategyNote: 'Standard blog-style layout with publication dates and read times.',
    status: 'pending',
  },
  {
    page: 'Writings — Philosophy',
    url: '/writings/philosophy',
    title: 'Philosophical Thoughts & Reflections | Anant Chaudhary',
    description:
      'Original philosophical principles, aphorisms, and reflections exploring the link between philosophy and meaningful life achievements.',
    primaryKeywords: ['Anant Chaudhary Philosophy', 'Principles of Conduct'],
    secondaryKeywords: ['Meaningful Outcomes', 'Stoic Reflections', 'Sovereignty'],
    strategyNote: 'High readability typography with generous spacing between individual thoughts.',
    status: 'pending',
  },
  {
    page: 'Contact Page',
    url: '/contact',
    title: 'Contact Anant Chaudhary — Official Correspondence & Inquiries',
    description:
      'Direct correspondence portal for literary invitations, rights inquiries, and speaking engagements with author Anant Chaudhary.',
    primaryKeywords: ['Contact Anant Chaudhary', 'Anant Chaudhary Literary Agent'],
    secondaryKeywords: ['Speaking Inquiries', 'Official Correspondence'],
    strategyNote: 'Dedicated contact page with validated mandatory fields and spam defense.',
    status: 'pending',
  },
  {
    page: 'Ask Page',
    url: '/ask',
    title: 'Ask a Question — Philosophical Inquiries | Anant Chaudhary',
    description:
      'Submit questions regarding Anant Chaudhary’s books, philosophical principles, or ethical inquiries for personal editorial review.',
    primaryKeywords: ['Ask Anant Chaudhary', 'Philosophical Q&A'],
    secondaryKeywords: ['Book Inquiries', 'Stoic Dialogue'],
    strategyNote: 'Strict confidential submission queue, no automatic publishing.',
    status: 'pending',
  },
];

export default function SEOReviewConsolePage() {
  const [items, setItems] = useState<SEOReviewItem[]>(INITIAL_SEO_DATA);

  const toggleApproval = (index: number) => {
    setItems((prev) =>
      prev.map((item, i) =>
        i === index
          ? { ...item, status: item.status === 'pending' ? 'approved' : 'pending' }
          : item
      )
    );
  };

  const approveAll = () => {
    setItems((prev) => prev.map((item) => ({ ...item, status: 'approved' })));
  };

  const approvedCount = items.filter((i) => i.status === 'approved').length;

  return (
    <div className="min-h-screen bg-[#050505] text-[#C0C0C0] px-4 sm:px-6 md:px-12 py-10 md:py-20">
      <div className="max-w-6xl mx-auto space-y-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-cinzel uppercase tracking-widest text-[#777777] hover:text-[#DC2626] transition-colors"
        >
          <ArrowLeft size={14} />
          <span>Return to Official Site</span>
        </Link>

        {/* Console Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-[#777777]/25">
          <div className="space-y-1">
            <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#B08D57] font-cinzel">
              <Search size={14} className="text-[#B5121B]" />
              <span>Client Review & Approval Stage</span>
            </div>
            <h1 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#C0C0C0] leading-tight break-words">
              SEO Strategy, Meta Titles & Descriptions
            </h1>
            <p className="text-xs font-poppins text-[#777777]">
              As specified in the Project Requirements (Section 9 & 10): Review and authorize metadata prior to production indexing.
            </p>
          </div>

          <div className="flex flex-col items-start sm:flex-row sm:items-center gap-3 sm:gap-4">
            <span className="text-xs font-poppins text-[#777777]">
              Approved: <strong className="text-[#C0C0C0]">{approvedCount}</strong> / {items.length}
            </span>
            <button
              onClick={approveAll}
              className="w-full sm:w-auto px-5 py-2.5 bg-[#B5121B] hover:bg-[#DC2626] text-white text-xs font-cinzel uppercase tracking-wider rounded-sm transition-colors cursor-pointer"
            >
              Authorize All Metadata
            </button>
          </div>
        </div>

        {/* Strategic Keyword Strategy Explanation (PDF Item 10.4) */}
        <div className="bg-[#111111] border border-[#777777]/30 rounded-sm p-6 sm:p-8 space-y-4">
          <h2 className="font-cinzel text-lg font-bold text-[#C0C0C0] flex items-center gap-2">
            <Sparkles size={18} className="text-[#B08D57]" />
            <span>Keyword Strategy & Architectural Incorporation</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs font-poppins text-[#777777] leading-relaxed">
            <div className="space-y-2">
              <h3 className="font-semibold text-[#C0C0C0] font-cinzel uppercase">
                1. Author Identity & Authority
              </h3>
              <p>
                Primary keyword anchors <code>&quot;Anant Chaudhary&quot;</code> and <code>&quot;Author Anant Chaudhary&quot;</code> are naturally embedded into top level H1s, OpenGraph titles, and Schema.org Person metadata.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-[#C0C0C0] font-cinzel uppercase">
                2. Semantic Publications
              </h3>
              <p>
                Specific volume keywords (<code>&quot;Shadows of Reason&quot;</code>, <code>&quot;The Quiet Summit&quot;</code>) target book buyers and readers with ISBN tags, purchase distributor links, and editorial reviews.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-[#C0C0C0] font-cinzel uppercase">
                3. Anti-Stuffing Natural Flow
              </h3>
              <p>
                Strictly avoids repetitive keyword stuffing. Keywords are integrated grammatically into long-form reflections and article subheadings to maintain maximum reading quality.
              </p>
            </div>
          </div>
        </div>

        {/* Page-by-Page Review Cards */}
        <div className="space-y-6">
          {items.map((item, idx) => (
            <div
              key={item.url}
              className="bg-[#111111] border border-[#777777]/30 rounded-sm p-6 sm:p-8 space-y-5 hover:border-[#777777] transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[#777777]/20">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-mono text-xs text-[#B08D57]">
                    0{idx + 1}
                  </span>
                  <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#C0C0C0] break-words">
                    {item.page}
                  </h3>
                  <code className="text-xs text-[#777777] bg-[#050505] px-2 py-0.5 rounded-xs">
                    {item.url}
                  </code>
                </div>

                <button
                  onClick={() => toggleApproval(idx)}
                  className={`px-4 py-1.5 rounded-sm text-xs font-cinzel uppercase tracking-wider inline-flex items-center gap-1.5 transition-colors cursor-pointer ${
                    item.status === 'approved'
                      ? 'bg-[#B08D57]/20 text-[#B08D57] border border-[#B08D57]'
                      : 'bg-[#B5121B] hover:bg-[#DC2626] text-white'
                  }`}
                >
                  <CheckCircle2 size={13} />
                  <span>
                    {item.status === 'approved' ? 'Approved by Author' : 'Approve Meta'}
                  </span>
                </button>
              </div>

              {/* Proposed Meta Title */}
              <div className="space-y-1">
                <div className="flex flex-col sm:flex-row sm:justify-between gap-1 text-xs text-[#777777]">
                  <span className="font-cinzel uppercase tracking-wider">
                    Proposed Meta Title
                  </span>
                  <span className="font-mono">{item.title.length} characters (Optimal 30–60)</span>
                </div>
                <div className="bg-[#050505] p-3 rounded-sm border border-[#777777]/30 text-sm font-cinzel text-[#C0C0C0] font-semibold">
                  {item.title}
                </div>
              </div>

              {/* Proposed Meta Description */}
              <div className="space-y-1">
                <div className="flex flex-col sm:flex-row sm:justify-between gap-1 text-xs text-[#777777]">
                  <span className="font-cinzel uppercase tracking-wider">
                    Proposed Meta Description
                  </span>
                  <span className="font-mono">{item.description.length} characters (Optimal 120–160)</span>
                </div>
                <div className="bg-[#050505] p-3 rounded-sm border border-[#777777]/30 text-xs sm:text-sm font-poppins text-[#C0C0C0]/90 leading-relaxed">
                  {item.description}
                </div>
              </div>

              {/* Keywords and Strategy */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 text-xs font-poppins">
                <div>
                  <span className="text-[#777777] block mb-1">Target Keywords:</span>
                  <div className="flex flex-wrap gap-2">
                    {item.primaryKeywords.concat(item.secondaryKeywords).map((kw, k) => (
                      <span
                        key={k}
                        className="bg-[#050505] text-[#C0C0C0] border border-[#777777]/30 px-2 py-0.5 rounded-xs"
                      >
                        {kw}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <span className="text-[#777777] block mb-1">Strategy Implementation:</span>
                  <p className="text-[#777777] leading-relaxed">
                    {item.strategyNote}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
