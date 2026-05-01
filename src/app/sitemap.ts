import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/site';

export const dynamic = 'force-static';

const LAST_MODIFIED = new Date('2026-05-01');

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;

  return [
    {
      url: `${base}/`,
      lastModified: LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 1.0
    },
    {
      url: `${base}/#about`,
      lastModified: LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.9
    },
    {
      url: `${base}/#timeline`,
      lastModified: LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.8
    },
    {
      url: `${base}/#gallery`,
      lastModified: LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.8
    },
    {
      url: `${base}/#tributes`,
      lastModified: LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.7
    },
    {
      url: `${base}/#family`,
      lastModified: LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.7
    },
    {
      url: `${base}/#events`,
      lastModified: LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.6
    }
  ];
}
