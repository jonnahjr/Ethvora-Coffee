import type { MetadataRoute } from 'next'
import { coffees } from '@/data/coffees'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ethvoracoffee.com'
  const now = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/our-coffee`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/origins`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/processing`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/wholesale`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/cupping`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
  ]

  const coffeeRoutes: MetadataRoute.Sitemap = coffees.map((c) => ({
    url: `${baseUrl}/our-coffee/${c.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }))

  return [...staticRoutes, ...coffeeRoutes]
}
