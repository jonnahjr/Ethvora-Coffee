// Ethvora Coffee — data layer
// Only verified/provided information is used.
// Fields marked null should be updated when confirmed.

export type ProcessingMethod = 'Natural' | 'Washed' | 'Anaerobic'

export interface Coffee {
  id: string
  slug: string
  name: string
  region: string
  locality: string | null
  process: ProcessingMethod
  altitudeRange: string
  flavorNotes: string[]
  character: string[]
  availability: 'Available' | 'Limited' | 'On Request'
  formats: string[]
  description: string
  image: string
  // The following are null until confirmed
  variety: string | null
  harvestYear: string | null
  cupScore: string | null
  producer: string | null
  lotInfo: string | null
}

export const coffees: Coffee[] = [
  {
    id: 'guji-natural',
    slug: 'guji-natural',
    name: 'Guji Natural',
    region: 'Guji',
    locality: 'Guji, Ethiopia',
    process: 'Natural',
    altitudeRange: 'High-elevation growing area',
    flavorNotes: ['Raspberry', 'Toffee', 'Caramel'],
    character: ['Sweet', 'Rounded', 'Fruity'],
    availability: 'Available',
    formats: ['Green Coffee', 'Sample', 'Wholesale'],
    description:
      'An expressive Natural-process coffee from the Guji highlands. Dried with the fruit intact, this lot develops pronounced sweetness and vibrant fruit character — toffee, raspberry, and a long caramel finish.',
    image: '/guji-origin.jpg',
    variety: null,
    harvestYear: null,
    cupScore: null,
    producer: null,
    lotInfo: null,
  },
  {
    id: 'yirgacheffe-washed',
    slug: 'yirgacheffe-washed',
    name: 'Yirgacheffe Washed',
    region: 'Yirgacheffe',
    locality: 'Yirgacheffe, Ethiopia',
    process: 'Washed',
    altitudeRange: 'High-elevation growing area',
    flavorNotes: ['Citrus', 'Floral', 'Sweet'],
    character: ['Bright', 'Elegant', 'Aromatic'],
    availability: 'Available',
    formats: ['Green Coffee', 'Sample', 'Wholesale'],
    description:
      'A classic Washed Yirgacheffe showcasing the region\'s signature clarity and delicate aromatic profile. Expect bright citrus brightness, floral notes, and a clean, sweet finish.',
    image: '/yirgacheffe-origin.jpg',
    variety: null,
    harvestYear: null,
    cupScore: null,
    producer: null,
    lotInfo: null,
  },
  {
    id: 'ethiopia-anaerobic',
    slug: 'ethiopia-anaerobic',
    name: 'Ethiopian Specialty — Anaerobic',
    region: 'Ethiopia',
    locality: null,
    process: 'Anaerobic',
    altitudeRange: 'High-elevation growing area',
    flavorNotes: [],
    character: ['Experimental', 'Complex', 'Expressive'],
    availability: 'On Request',
    formats: ['Green Coffee', 'Sample'],
    description:
      'A controlled fermentation process that creates distinctive and complex flavor expressions. Availability subject to seasonal lots — contact the Ethvora team for current offering details.',
    image: '/drying-beds.jpg',
    variety: null,
    harvestYear: null,
    cupScore: null,
    producer: null,
    lotInfo: null,
  },
]

export interface Origin {
  id: string
  name: string
  headline: string
  description: string
  flavorExamples: string[]
  altitude: string
  image: string
  coordinates: string
}

export const origins: Origin[] = [
  {
    id: 'guji',
    name: 'Guji',
    headline: 'Expressive sweetness. Vibrant fruit character.',
    description:
      'Known for expressive sweetness, rounded body, and vibrant fruit character. The Guji highlands produce some of Ethiopia\'s most distinctive Natural-process coffees.',
    flavorExamples: ['Toffee', 'Raspberry', 'Caramel'],
    altitude: 'Highland elevations',
    image: '/guji-origin.jpg',
    coordinates: '5°45\'N · 38°30\'E',
  },
  {
    id: 'yirgacheffe',
    name: 'Yirgacheffe',
    headline: 'Elegant citrus, delicate floral aromatics.',
    description:
      'Elegant Ethiopian coffee with bright citrus character, delicate sweetness, and floral aromatics. Yirgacheffe is one of Ethiopia\'s most celebrated coffee-growing regions.',
    flavorExamples: ['Citrus', 'Floral', 'Sweet'],
    altitude: 'Highland elevations',
    image: '/yirgacheffe-origin.jpg',
    coordinates: '6°10\'N · 38°12\'E',
  },
  {
    id: 'sidama',
    name: 'Sidama',
    headline: 'Complex. High-elevation. Distinctive terroir.',
    description:
      'Complex coffees shaped by high elevation, diverse microclimates, and distinctive Ethiopian terroir. The Sidama zone includes a range of growing localities each with their own character.',
    flavorExamples: ['Complex', 'Balanced', 'Terroir-driven'],
    altitude: 'Highland elevations',
    image: '/hero-highland.jpg',
    coordinates: '6°45\'N · 38°15\'E',
  },
]
