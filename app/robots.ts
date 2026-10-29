import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.APP_URL || 'https://anantchaudhary.com';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
