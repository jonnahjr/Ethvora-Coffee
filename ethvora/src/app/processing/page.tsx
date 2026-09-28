import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Processing | Ethvora Coffee — Natural, Washed & Anaerobic',
  description:
    'Learn about the coffee processing methods used at Ethvora Coffee — Natural, Washed, and Anaerobic — and how each method shapes the character of Ethiopian specialty Arabica.',
}

const methods = [
  {
    id: 'natural',
    name: 'Natural',
    tagline: 'Fruit-forward. Sweet. Expressive.',
    description: [
      'Natural processing is one of the oldest methods in Ethiopian coffee tradition. The coffee cherry is harvested and placed directly on raised drying beds with the fruit intact.',
      'Over several weeks, the cherry dries under the sun. During this process, the sugars and fruit compounds slowly penetrate the seed — the coffee bean — creating the characteristic sweetness and fruit-forward flavors associated with Ethiopian Natural coffees.',
      'This method demands careful management of drying conditions to avoid defects and ensure even drying. The result, when done well, is a coffee with remarkable sweetness, body, and expressive fruit character.',
    ],
    sensory: 'Coffees processed this way often express pronounced sweetness, rounded body, and fruit-forward character — notes like berry, stone fruit, and caramel are common in well-processed Ethiopian Naturals.',
    image: '/drying-beds.jpg',
    color: 'var(--earth)',
  },
  {
    id: 'washed',
    name: 'Washed',
    tagline: 'Clean. Bright. Origin-expressive.',
    description: [
      'Washed processing — also known as wet processing — removes the cherry fruit before the beans are dried. The cherries are depulped and then fermented in water tanks to remove the mucilage layer.',
      'After fermentation, the parchment coffee is washed clean with water and dried on raised beds. This process highlights the clean, inherent flavors of the bean itself, unmasked by fruit influence.',
      'Ethiopian Washed coffees are highly regarded for their clarity, brightness, and the way they express the distinctive terroir characteristics of their origin — citrus, floral notes, and clean sweetness.',
    ],
    sensory: 'Washed Ethiopian coffees tend to be brighter in acidity, lighter in body, and more aromatic — expressing the distinct characteristics of the origin with clarity. Citrus, floral, and sweet notes are characteristic.',
    image: '/green-beans.jpg',
    color: 'var(--highland-green)',
  },
  {
    id: 'anaerobic',
    name: 'Anaerobic',
    tagline: 'Complex. Experimental. Distinctive.',
    description: [
      'Anaerobic fermentation is a more recent innovation in specialty coffee processing. Whole coffee cherries or depulped coffee is placed in sealed tanks from which oxygen is evacuated.',
      'In this oxygen-free environment, fermentation proceeds differently than in traditional methods, often producing more distinctive and complex flavors. The process requires careful control of temperature, time, and CO₂ pressure.',
      'When applied to Ethiopian coffee, the result is a coffee that expresses unique complexity — building on the inherent character of Ethiopian Arabica with additional layers developed through the fermentation process.',
    ],
    sensory: 'Anaerobic-processed coffees tend to express more complex, layered flavor profiles. Availability of Anaerobic-process Ethiopian coffees from Ethvora is subject to seasonal production — contact our team for current lot information.',
    image: '/coffee-cherries.jpg',
    color: 'var(--espresso)',
  },
]

export default function ProcessingPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="page-hero"
        style={{
          background: 'var(--espresso)',
          paddingTop: '10rem',
          paddingBottom: '5rem',
          paddingLeft: '2rem',
          paddingRight: '2rem',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{ position: 'absolute', inset: 0, opacity: 0.07 }}>
          <Image src="/drying-beds.jpg" alt="" fill style={{ objectFit: 'cover', objectPosition: 'center 30%' }} />
        </div>
        <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
          <span className="eyebrow" style={{ display: 'block', color: 'var(--copper)', marginBottom: '1rem' }}>Processing</span>
          <h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              fontWeight: 400,
              color: 'var(--ivory)',
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
              marginBottom: '1.5rem',
            }}
          >
            Three Ways to Reveal<br />
            <em style={{ fontStyle: 'italic', color: 'rgba(245,240,232,0.6)' }}>Ethiopian Coffee&apos;s Character</em>
          </h1>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1.0625rem', lineHeight: 1.8, color: 'rgba(245,240,232,0.6)', maxWidth: '560px' }}>
            Processing is one of the most critical stages in specialty coffee production — transforming the harvested cherry into a coffee that reflects both its origin and its preparation with care and intention.
          </p>
        </div>
      </section>

      {/* Processing methods */}
      {methods.map((m, i) => (
        <section
          key={m.id}
          id={m.id}
          style={{
            background: i % 2 === 0 ? 'var(--cream)' : 'var(--ivory)',
            padding: '7rem 2rem',
          }}
        >
          <div
            style={{
              maxWidth: '1200px',
              margin: '0 auto',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))',
              gap: '4rem',
              alignItems: 'center',
            }}
          >
            {/* Image */}
            <div className="img-reveal" style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden', order: i % 2 === 1 ? 1 : 0 }}>
              <Image
                src={m.image}
                alt={`${m.name} processing — Ethiopian specialty coffee`}
                fill
                quality={85}
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Text */}
            <div style={{ order: i % 2 === 1 ? 0 : 1 }}>
              <div
                style={{
                  display: 'inline-block',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.55rem',
                  fontWeight: 600,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'var(--ivory)',
                  background: m.color,
                  padding: '0.375rem 0.875rem',
                  marginBottom: '1.25rem',
                }}
              >
                {m.name}
              </div>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 400, color: 'var(--espresso)', letterSpacing: '-0.02em', marginBottom: '0.5rem' }}>
                {m.name} Process
              </h2>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.875rem', color: 'var(--copper)', fontWeight: 500, marginBottom: '1.75rem' }}>
                {m.tagline}
              </p>
              {m.description.map((para, j) => (
                <p key={j} style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', lineHeight: 1.85, color: 'rgba(26,16,8,0.6)', marginBottom: '1rem' }}>
                  {para}
                </p>
              ))}
              <div style={{ marginTop: '1.75rem', padding: '1.25rem 1.5rem', background: 'rgba(26,16,8,0.04)', borderLeft: '2px solid var(--copper)' }}>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8375rem', lineHeight: 1.75, color: 'rgba(26,16,8,0.55)', fontStyle: 'italic' }}>
                  {m.sensory}
                </p>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section style={{ background: 'var(--espresso)', padding: '5rem 2rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.875rem, 3.5vw, 3rem)', fontWeight: 400, color: 'var(--ivory)', letterSpacing: '-0.02em', marginBottom: '1rem' }}>
            Looking for a specific process?
          </h2>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', color: 'rgba(245,240,232,0.5)', marginBottom: '2.5rem', lineHeight: 1.7 }}>
            Request samples of our Natural, Washed, or Anaerobic Ethiopian coffees. Contact the Ethvora team for current lot availability.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact#samples" className="btn-primary light">
              Request Samples
              <ArrowUpRight size={14} />
            </Link>
            <Link href="/our-coffee" className="btn-outline light">
              View Our Coffee
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
