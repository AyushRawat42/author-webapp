import type { Metadata } from 'next';
import { Cinzel, Poppins } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const cinzel = Cinzel({
  subsets: ['latin'],
  variable: '--font-cinzel',
  display: 'swap',
  weight: ['400', '600', '700', '900'],
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

const siteUrl = process.env.APP_URL || 'https://anantchaudhary.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Anant Chaudhary — Author & Philosopher',
    template: '%s | Anant Chaudhary',
  },
  description:
    'The official website of author and philosopher Anant Chaudhary. Explore published works, philosophical reflections, forthcoming releases, and inquiries.',
  keywords: [
    'Anant Chaudhary',
    'Author',
    'Philosopher',
    'Shadows of Reason',
    'The Quiet Summit',
    'Philosophy of Action',
    'Epistemic Clarity',
    'Stoicism',
    'Modern Philosophy',
  ],
  authors: [{ name: 'Anant Chaudhary', url: siteUrl }],
  creator: 'Anant Chaudhary',
  publisher: 'Anant Chaudhary',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Anant Chaudhary',
    title: 'Anant Chaudhary — Official Author Website',
    description:
      'Official website of author and philosopher Anant Chaudhary. Explore published books, upcoming releases, articles, and philosophical writings.',
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Anant Chaudhary — Author & Philosopher',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anant Chaudhary — Author & Philosopher',
    description:
      'Official website of author and philosopher Anant Chaudhary. Explore published books, articles, and philosophy.',
    creator: '@anantchaudhary',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': `${siteUrl}/#author`,
        name: 'Anant Chaudhary',
        jobTitle: 'Author & Philosopher',
        url: siteUrl,
        sameAs: [
          'https://instagram.com',
          'https://linkedin.com',
          'https://goodreads.com',
          'https://x.com',
        ],
        description:
          'Author and philosopher known for works on epistemic clarity, human agency, discipline, and existential philosophy.',
      },
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        url: siteUrl,
        name: 'Anant Chaudhary Official Website',
        publisher: {
          '@id': `${siteUrl}/#author`,
        },
      },
    ],
  };

  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${poppins.variable} w-full max-w-[100vw] overflow-x-hidden`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="w-full max-w-[100vw] overflow-x-hidden bg-[#050505] text-[#C0C0C0] font-poppins min-h-screen flex flex-col antialiased selection:bg-[#B5121B] selection:text-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
