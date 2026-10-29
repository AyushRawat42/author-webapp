import { MetadataRoute } from 'next';
import { PUBLISHED_BOOKS, ARTICLES, PHILOSOPHY_THOUGHTS } from '@/lib/data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.APP_URL || 'https://anantchaudhary.com';

  const staticRoutes = [
    '',
    '/about',
    '/books',
    '/writings',
    '/writings/articles',
    '/writings/philosophy',
    '/contact',
    '/ask',
    '/legal/privacy-policy',
    '/legal/copyright-policy',
    '/legal/terms-and-conditions',
    '/legal/disclaimer',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : route.startsWith('/legal') ? 0.5 : 0.8,
  }));

  const bookRoutes = PUBLISHED_BOOKS.map((book) => ({
    url: `${baseUrl}/books/${book.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  const articleRoutes = ARTICLES.map((art) => ({
    url: `${baseUrl}/writings/articles/${art.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const philosophyRoutes = PHILOSOPHY_THOUGHTS.map((phil) => ({
    url: `${baseUrl}/writings/philosophy/${phil.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...bookRoutes, ...articleRoutes, ...philosophyRoutes];
}
