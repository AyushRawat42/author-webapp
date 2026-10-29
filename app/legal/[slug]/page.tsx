import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Shield, FileCheck, Scale, Copyright, AlertCircle } from 'lucide-react';

interface LegalDocConfig {
  title: string;
  slug: string;
  code: string;
  category: string;
  description: string;
}

const LEGAL_DOCS: Record<string, LegalDocConfig> = {
  'privacy-policy': {
    title: 'Privacy Policy',
    slug: 'privacy-policy',
    code: 'LEGAL-PRIV-2026',
    category: 'Data Protection & Subscriber Confidentiality',
    description: 'Framework governing subscriber and reader correspondence data protection.',
  },
  'copyright-policy': {
    title: 'Copyright Policy',
    slug: 'copyright-policy',
    code: 'LEGAL-CPRT-2026',
    category: 'Intellectual Property & Literary Rights',
    description: 'Provisions regarding quotation, translation rights, and book copyrights.',
  },
  'terms-and-conditions': {
    title: 'Terms & Conditions',
    slug: 'terms-and-conditions',
    code: 'LEGAL-TRMS-2026',
    category: 'Digital Archive Engagement & Usage',
    description: 'Terms governing visitor access, reader inquiries, and site interaction.',
  },
  'disclaimer': {
    title: 'Disclaimer',
    slug: 'disclaimer',
    code: 'LEGAL-DISC-2026',
    category: 'Philosophical Discourse & Independent Views',
    description: 'Author disclosures regarding philosophical commentary and personal opinion.',
  },
};

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(LEGAL_DOCS).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const doc = LEGAL_DOCS[slug];
  if (!doc) return { title: 'Legal Page Not Found' };

  return {
    title: `${doc.title} — Official Legal Specification`,
    description: doc.description,
    alternates: {
      canonical: `/legal/${doc.slug}`,
    },
    robots: {
      index: false, // Don't index until approved copy is deployed
      follow: true,
    },
  };
}

export default async function DynamicLegalPage({ params }: Props) {
  const { slug } = await params;
  const doc = LEGAL_DOCS[slug];

  if (!doc) {
    notFound();
  }

  return (
    <div className="min-h-[85vh] bg-[#050505] text-[#C0C0C0] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-12">
        {/* Breadcrumb Navigation */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-cinzel uppercase tracking-widest text-[#777777] hover:text-[#DC2626] transition-colors"
        >
          <ArrowLeft size={14} />
          <span>Return to Official Site</span>
        </Link>

        {/* Page Header */}
        <header className="space-y-4 pb-8 border-b border-[#777777]/25">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#B08D57] font-cinzel font-semibold">
            <span>Official Legal Governance</span>
            <span>·</span>
            <span>{doc.category}</span>
          </div>

          <h1 className="font-cinzel text-3xl sm:text-5xl font-bold tracking-wide text-[#C0C0C0]">
            {doc.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs font-poppins text-[#777777]">
            <span>Document Reference: <code className="text-[#C0C0C0]">{doc.code}</code></span>
            <span>·</span>
            <span>Status: Awaiting Approved Copy</span>
          </div>
        </header>

        {/* Clean Structured Container indicating [Awaiting Approved Legal Copy for {Page Title}] per client instructions */}
        <div className="bg-[#111111] border border-[#777777]/30 rounded-sm p-8 sm:p-12 space-y-8">
          <div className="flex items-center gap-3 pb-4 border-b border-[#777777]/20">
            {slug === 'privacy-policy' && <Shield size={24} className="text-[#B5121B]" />}
            {slug === 'copyright-policy' && <Copyright size={24} className="text-[#B5121B]" />}
            {slug === 'terms-and-conditions' && <Scale size={24} className="text-[#B5121B]" />}
            {slug === 'disclaimer' && <AlertCircle size={24} className="text-[#B5121B]" />}

            <h2 className="font-cinzel text-lg sm:text-xl font-bold text-[#C0C0C0]">
              [Awaiting Approved Legal Copy for {doc.title}]
            </h2>
          </div>

          <div className="space-y-5 text-sm font-poppins text-[#777777] leading-relaxed">
            <p>
              This official document framework has been structured in compliance with the author website requirements for <strong>Anant Chaudhary</strong>.
            </p>

            <div className="bg-[#050505] border border-[#777777]/30 rounded-sm p-6 space-y-3">
              <span className="font-cinzel text-xs uppercase tracking-wider text-[#B08D57] block font-semibold">
                Client Directive Notice
              </span>
              <p className="text-xs sm:text-sm text-[#C0C0C0]/90 leading-relaxed italic border-l-2 border-[#B5121B] pl-4">
                &ldquo;Prepare the page structure and design, but do not publish generic or placeholder legal content without my approval. Complete legal information will be provided separately.&rdquo;
              </p>
            </div>

            <p>
              Upon receipt of final legal copy authorized by Anant Chaudhary and publishing legal counsel, the verified clauses for <strong>{doc.title}</strong> will be formally published to this URL.
            </p>
          </div>

          <div className="pt-6 border-t border-[#777777]/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#777777]">
            <span>© 2026 Anant Chaudhary. All Rights Reserved.</span>
            <span className="font-mono">{doc.code}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
