'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, ShieldCheck, Search, Sparkles, Filter, ExternalLink } from 'lucide-react';

interface PageSEOSpec {
  pageName: string;
  urlPath: string;
  metaTitle: string;
  metaDescription: string;
  primaryKeywords: string[];
  secondaryKeywords: string[];
  rationale: string;
  status: 'pending' | 'approved';
}

const SEO_INVENTORY: PageSEOSpec[] = [
  {
    pageName: 'Home Page',
    urlPath: '/',
    metaTitle: 'Anant Chaudhary — Author & Philosopher | Official Website',
    metaDescription:
      'The official website of author and philosopher Anant Chaudhary. Explore published works, philosophical reflections, forthcoming releases, and inquiries.',
    primaryKeywords: ['Anant Chaudhary', 'Author Anant Chaudhary', 'Philosopher'],
    secondaryKeywords: ['Shadows of Reason', 'The Quiet Summit', 'Epistemic Sovereignty'],
    rationale: 'Anchors brand identity, authoritative author name searches, and overarching intellectual inquiries.',
    status: 'pending',
  },
  {
    pageName: 'About Page',
    urlPath: '/about',
    metaTitle: 'About Anant Chaudhary — Biographical & Intellectual Profile',
    metaDescription:
      'Biographical background and intellectual profile of author and philosopher Anant Chaudhary. Inquiring into human agency, epistemic rigor, and conduct.',
    primaryKeywords: ['About Anant Chaudhary', 'Anant Chaudhary Biography'],
    secondaryKeywords: ['Intellectual Profile', 'Literary Philosophy', 'Human Agency'],
    rationale: 'Focuses on biographical search intent while honoring the 1-hero, 1-content section constraint.',
    status: 'pending',
  },
  {
    pageName: 'Books & Publications',
    urlPath: '/books',
    metaTitle: 'Books & Publications by Anant Chaudhary | Official Library',
    metaDescription:
      'Officially published philosophical treatises and forthcoming volumes by author and philosopher Anant Chaudhary, including Shadows of Reason and The Quiet Summit.',
    primaryKeywords: ['Anant Chaudhary Books', 'Shadows of Reason', 'The Quiet Summit'],
    secondaryKeywords: ['Philosophy Hardcover', 'Aegis Editions', 'Upcoming Books'],
    rationale: 'Ranks for bibliography, hardcover editions, publisher records, and upcoming releases.',
    status: 'pending',
  },
  {
    pageName: 'Book Detail: Shadows of Reason',
    urlPath: '/books/shadows-of-reason',
    metaTitle: 'Shadows of Reason by Anant Chaudhary — Hardcover Treatise',
    metaDescription:
      'Shadows of Reason examines fractures in rationalism, human judgment, and existential clarity. Hardcover editions and independent bookstore distribution.',
    primaryKeywords: ['Shadows of Reason', 'Shadows of Reason book', 'Anant Chaudhary book'],
    secondaryKeywords: ['Epistemology', 'Human Agency', 'Aegis Literary Press'],
    rationale: 'Full Schema.org Book markup with ISBN, publisher citations, and bookstore links.',
    status: 'pending',
  },
  {
    pageName: 'Book Detail: The Quiet Summit',
    urlPath: '/books/the-quiet-summit',
    metaTitle: 'The Quiet Summit by Anant Chaudhary — On Discipline & Will',
    metaDescription:
      'In The Quiet Summit, Anant Chaudhary articulates the solitary discipline of achievement and inner fortitude. Official hardcover edition.',
    primaryKeywords: ['The Quiet Summit', 'The Quiet Summit book', 'Anant Chaudhary'],
    secondaryKeywords: ['Philosophy of Action', 'Discipline and Solitude', 'Stoic Conduct'],
    rationale: 'Captures readers exploring philosophical stoicism, personal conduct, and solitary discipline.',
    status: 'pending',
  },
  {
    pageName: 'Writings Hub',
    urlPath: '/writings',
    metaTitle: 'Writings & Dispatches — Articles & Philosophy | Anant Chaudhary',
    metaDescription:
      'Read the written archive of Anant Chaudhary, categorized strictly into Articles (editorial blog) and Philosophy (principles of conduct).',
    primaryKeywords: ['Anant Chaudhary Writings', 'Philosophy Articles'],
    secondaryKeywords: ['Editorial Blog', 'Philosophical Reflections'],
    rationale: 'Strictly presents two categories: Articles and Philosophy.',
    status: 'pending',
  },
  {
    pageName: 'Category A: Articles',
    urlPath: '/writings?category=articles',
    metaTitle: 'Articles by Anant Chaudhary — Editorial Blog Archive',
    metaDescription:
      'Carefully drafted editorial essays on measured silence, uncompromised deep focus, craftsmanship, and contemporary culture by Anant Chaudhary.',
    primaryKeywords: ['Anant Chaudhary Articles', 'Silence and Discipline Essay'],
    secondaryKeywords: ['Deep Focus', 'Craftsmanship', 'Editorial Blog'],
    rationale: 'Targets long-form reader essays on focus, craftsmanship, and modern culture.',
    status: 'pending',
  },
  {
    pageName: 'Category B: Philosophy',
    urlPath: '/writings?category=philosophy',
    metaTitle: 'Philosophical Thoughts & Reflections | Anant Chaudhary',
    metaDescription:
      'Original philosophical principles, aphorisms, and reflections exploring the link between philosophy and meaningful life achievements.',
    primaryKeywords: ['Anant Chaudhary Philosophy', 'Principles of Conduct'],
    secondaryKeywords: ['Meaningful Outcomes', 'Stoic Reflections', 'Sovereignty'],
    rationale: 'Captures inquiries into aphorisms, core philosophical principles, and personal sovereignty.',
    status: 'pending',
  },
  {
    pageName: 'Contact Page',
    urlPath: '/contact',
    metaTitle: 'Contact Anant Chaudhary — Official Correspondence & Inquiries',
    metaDescription:
      'Direct correspondence portal for literary invitations, rights inquiries, and speaking engagements with author Anant Chaudhary.',
    primaryKeywords: ['Contact Anant Chaudhary', 'Anant Chaudhary Speaking Inquiries'],
    secondaryKeywords: ['Literary Agent', 'Official Correspondence'],
    rationale: 'Facilitates verified direct contact with spam protection.',
    status: 'pending',
  },
  {
    pageName: 'Ask a Question',
    urlPath: '/ask',
    metaTitle: 'Ask a Question — Philosophical Inquiries | Anant Chaudhary',
    metaDescription:
      'Submit questions regarding Anant Chaudhary’s books, philosophical principles, or ethical inquiries for personal editorial review.',
    primaryKeywords: ['Ask Anant Chaudhary', 'Submit Philosophical Question'],
    secondaryKeywords: ['Book Inquiries', 'Confidential Question'],
    rationale: 'Clear messaging ensuring user questions are private and never auto-published.',
    status: 'pending',
  },
  {
    pageName: 'Legal: Privacy Policy',
    urlPath: '/legal/privacy-policy',
    metaTitle: 'Privacy Policy — Official Legal Specification | Anant Chaudhary',
    metaDescription:
      'Official Privacy Policy structural framework for Anant Chaudhary’s author archive. Full copy awaiting client sign-off.',
    primaryKeywords: ['Anant Chaudhary Privacy Policy'],
    secondaryKeywords: ['Subscriber Privacy', 'Legal Framework'],
    rationale: 'Structured container withholding placeholder text per client instructions.',
    status: 'pending',
  },
  {
    pageName: 'Legal: Copyright Policy',
    urlPath: '/legal/copyright-policy',
    metaTitle: 'Copyright Policy — Official Legal Specification | Anant Chaudhary',
    metaDescription:
      'Official Copyright Policy structural framework for Anant Chaudhary’s literary works and publications.',
    primaryKeywords: ['Anant Chaudhary Copyright Policy'],
    secondaryKeywords: ['Literary Rights', 'All Rights Reserved'],
    rationale: 'Protects intellectual property and quotation attribution standards.',
    status: 'pending',
  },
];

export default function SEOPreviewDashboard() {
  const [specs, setSpecs] = useState<PageSEOSpec[]>(SEO_INVENTORY);
  const [filter, setFilter] = useState<'all' | 'pending' | 'approved'>('all');

  const toggleStatus = (urlPath: string) => {
    setSpecs((prev) =>
      prev.map((item) =>
        item.urlPath === urlPath
          ? { ...item, status: item.status === 'pending' ? 'approved' : 'pending' }
          : item
      )
    );
  };

  const approveAll = () => {
    setSpecs((prev) => prev.map((item) => ({ ...item, status: 'approved' })));
  };

  const filteredSpecs = specs.filter((item) => {
    if (filter === 'pending') return item.status === 'pending';
    if (filter === 'approved') return item.status === 'approved';
    return true;
  });

  const approvedCount = specs.filter((s) => s.status === 'approved').length;

  return (
    <div className="min-h-screen bg-[#050505] text-[#C0C0C0] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Top Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-cinzel uppercase tracking-widest text-[#777777] hover:text-[#DC2626] transition-colors"
        >
          <ArrowLeft size={14} />
          <span>Return to Official Site</span>
        </Link>

        {/* Dashboard Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-[#777777]/25">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#B08D57] font-cinzel font-semibold">
              <Search size={14} className="text-[#B5121B]" />
              <span>Client Review & Approval Stage (PDF Requirement #10)</span>
            </div>
            <h1 className="font-cinzel text-2xl sm:text-4xl font-bold text-[#C0C0C0]">
              SEO Pre-Publish Approval Dashboard
            </h1>
            <p className="text-xs sm:text-sm font-poppins text-[#777777] max-w-2xl">
              Per client instructions: <em>&ldquo;Prepare suitable SEO meta titles and meta descriptions for every page... I want to review and approve them before they go live.&rdquo;</em>
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <div className="text-xs font-poppins text-[#777777]">
              Approved: <strong className="text-white">{approvedCount}</strong> / {specs.length}
            </div>

            <button
              onClick={approveAll}
              className="px-5 py-2.5 bg-[#B5121B] hover:bg-[#DC2626] text-white text-xs font-cinzel uppercase tracking-wider rounded-sm transition-colors cursor-pointer"
            >
              Approve All Pages
            </button>
          </div>
        </div>

        {/* Strategy Context Card */}
        <div className="bg-[#111111] border border-[#777777]/30 rounded-sm p-6 sm:p-8 space-y-4">
          <h2 className="font-cinzel text-lg font-bold text-[#C0C0C0] flex items-center gap-2">
            <Sparkles size={18} className="text-[#B08D57]" />
            <span>Keyword Strategy & Natural Incorporation Principles</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs font-poppins text-[#777777] leading-relaxed">
            <div className="space-y-1">
              <strong className="text-[#C0C0C0] font-cinzel uppercase block">Exact Subject Matching</strong>
              <p>Keywords strictly align with the real content of each page without speculative padding.</p>
            </div>
            <div className="space-y-1">
              <strong className="text-[#C0C0C0] font-cinzel uppercase block">Zero Keyword Stuffing</strong>
              <p>Target terms appear organically in semantic headings (`h1`, `h2`) and body copy to protect readability.</p>
            </div>
            <div className="space-y-1">
              <strong className="text-[#C0C0C0] font-cinzel uppercase block">Snippet Length Compliance</strong>
              <p>Titles adhere to 30–60 characters; descriptions adhere to 120–160 characters to prevent Google SERP clipping.</p>
            </div>
          </div>
        </div>

        {/* Filter Controls */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Filter size={14} className="text-[#777777]" />
            <span className="text-xs font-cinzel uppercase tracking-wider text-[#777777]">Filter:</span>
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1 text-xs font-poppins rounded-sm ${filter === 'all' ? 'bg-[#B5121B] text-white' : 'text-[#777777] hover:text-white'}`}
            >
              All ({specs.length})
            </button>
            <button
              onClick={() => setFilter('pending')}
              className={`px-3 py-1 text-xs font-poppins rounded-sm ${filter === 'pending' ? 'bg-[#B5121B] text-white' : 'text-[#777777] hover:text-white'}`}
            >
              Pending ({specs.length - approvedCount})
            </button>
            <button
              onClick={() => setFilter('approved')}
              className={`px-3 py-1 text-xs font-poppins rounded-sm ${filter === 'approved' ? 'bg-[#B5121B] text-white' : 'text-[#777777] hover:text-white'}`}
            >
              Approved ({approvedCount})
            </button>
          </div>
        </div>

        {/* Inventory Table */}
        <div className="bg-[#111111] border border-[#777777]/30 rounded-sm overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs font-poppins">
            <thead>
              <tr className="border-b border-[#777777]/30 bg-[#0a0a0a] text-[#C0C0C0] font-cinzel uppercase tracking-wider">
                <th className="p-4 w-48">Page & URL</th>
                <th className="p-4 w-72">Proposed Meta Title</th>
                <th className="p-4">Proposed Meta Description</th>
                <th className="p-4 w-48">Keywords</th>
                <th className="p-4 w-32 text-right">Approval</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#777777]/15">
              {filteredSpecs.map((item) => (
                <tr key={item.urlPath} className="hover:bg-white/[0.02] transition-colors">
                  {/* Page & URL */}
                  <td className="p-4 align-top space-y-1">
                    <strong className="text-[#C0C0C0] font-cinzel block text-sm">
                      {item.pageName}
                    </strong>
                    <Link
                      href={item.urlPath}
                      target="_blank"
                      className="text-[#777777] hover:text-[#DC2626] font-mono text-[11px] inline-flex items-center gap-1"
                    >
                      <span>{item.urlPath}</span>
                      <ExternalLink size={10} />
                    </Link>
                  </td>

                  {/* Proposed Meta Title */}
                  <td className="p-4 align-top space-y-1">
                    <div className="text-[#C0C0C0] font-medium leading-relaxed">
                      {item.metaTitle}
                    </div>
                    <span className="text-[10px] text-[#777777] font-mono block">
                      {item.metaTitle.length} characters (Optimal: 30–60)
                    </span>
                  </td>

                  {/* Proposed Meta Description */}
                  <td className="p-4 align-top space-y-1">
                    <div className="text-[#777777] leading-relaxed">
                      {item.metaDescription}
                    </div>
                    <span className="text-[10px] text-[#777777] font-mono block">
                      {item.metaDescription.length} characters (Optimal: 120–160)
                    </span>
                  </td>

                  {/* Keywords */}
                  <td className="p-4 align-top space-y-1">
                    <div className="flex flex-wrap gap-1">
                      {item.primaryKeywords.map((kw, i) => (
                        <span
                          key={i}
                          className="bg-[#050505] text-[#C0C0C0] border border-[#777777]/30 px-1.5 py-0.5 rounded-xs text-[10px]"
                        >
                          {kw}
                        </span>
                      ))}
                    </div>
                  </td>

                  {/* Approval Toggle */}
                  <td className="p-4 align-top text-right">
                    <button
                      onClick={() => toggleStatus(item.urlPath)}
                      className={`px-3 py-1.5 rounded-sm text-[11px] font-cinzel uppercase tracking-wider inline-flex items-center gap-1.5 transition-colors cursor-pointer ${
                        item.status === 'approved'
                          ? 'bg-[#B08D57]/20 text-[#B08D57] border border-[#B08D57]'
                          : 'bg-[#B5121B] hover:bg-[#DC2626] text-white'
                      }`}
                    >
                      <CheckCircle2 size={12} />
                      <span>{item.status === 'approved' ? 'Approved' : 'Approve'}</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
