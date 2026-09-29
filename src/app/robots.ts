import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://news.exsun.net/sitemap.xml',
    host: 'https://news.exsun.net',
  };
}
