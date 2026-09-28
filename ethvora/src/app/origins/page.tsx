import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { origins } from '@/data/coffees'

export const metadata: Metadata = {
  title: 'Origins | Ethvora Coffee — Guji, Yirgacheffe & Sidama',
  description:
    'Explore the Ethiopian coffee origins sourced by Ethvora Coffee: Guji, Yirgacheffe, and Sidama. Distinct regions, distinct character, one extraordinary origin.',
}

export default function OriginsPage() {
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
        <div style={{ position: 'absolute', inset: 0, opacity: 0.08 }}>
          <Image src="/hero-highland.jpg" alt="" fill style={{ objectFit: 'cover' }} />
        </div>
        <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
          <span className="eyebrow" style={{ display: 'block', color: 'var(--copper)', marginBottom: '1rem' }}>Ethiopian Origins</span>
          <h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.5rem, 6vw, 5rem)',
              fontWeight: 400,
              color: 'var(--ivory)',
              letterSpacing: '-0.02em',
              lineHeight: 1.08,
              marginBottom: '1.5rem',
            }}
          >
            Distinct Regions.<br />
            <em style={{ fontStyle: 'italic', color: 'rgba(245,240,232,0.6)' }}>Distinct Character.</em>
          </h1>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1.0625rem', lineHeight: 1.8, color: 'rgba(245,240,232,0.6)', maxWidth: '560px' }}>
            Ethiopia's growing regions each carry their own identity — shaped by altitude, microclimate, soil, local variety, and processing tradition. Ethvora Coffee sources from three of Ethiopia's most celebrated origins.
          </p>
        </div>
      </section>

      {/* Origins detail sections */}
      {origins.map((origin, i) => (
        <section
          key={origin.id}
          id={origin.id}
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
              direction: i % 2 === 1 ? 'rtl' : 'ltr',
            }}
          >
            {/* Image */}
            <div className="img-reveal" style={{ position: 'relative', aspectRatio: '3/4', overflow: 'hidden', direction: 'ltr' }}>
              <Image
                src={origin.image}
                alt={`${origin.name} region, Ethiopia`}
                fill
                quality={85}
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Coordinates overlay */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '1.5rem',
                  left: '1.5rem',
                  background: 'rgba(26,16,8,0.82)',
                  backdropFilter: 'blur(8px)',
                  padding: '0.75rem 1.25rem',
                  color: 'var(--ivory)',
                }}
              >
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.6rem', letterSpacing: '0.12em', color: 'var(--copper)', marginBottom: '0.125rem' }}>COORDINATES</div>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', letterSpacing: '0.05em' }}>{origin.coordinates}</div>
              </div>
            </div>

            {/* Text */}
            <div style={{ direction: 'ltr' }}>
              <span className="eyebrow" style={{ display: 'block', marginBottom: '0.75rem' }}>Ethiopian Origin</span>
              <span className="rule" style={{ display: 'block', marginBottom: '2rem' }} />
              <h2
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                  fontWeight: 400,
                  color: 'var(--espresso)',
                  letterSpacing: '-0.02em',
                  marginBottom: '0.75rem',
                }}
              >
                {origin.name}
              </h2>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.875rem', color: 'var(--copper)', fontWeight: 500, marginBottom: '1.5rem' }}>
                {origin.headline}
              </p>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9375rem', lineHeight: 1.85, color: 'rgba(26,16,8,0.6)', marginBottom: '2rem', maxWidth: '480px' }}>
                {origin.description}
              </p>

              {/* Flavor examples */}
              <div style={{ marginBottom: '2rem' }}>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.55rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(26,16,8,0.4)', marginBottom: '0.75rem' }}>
                  Character Examples
                </div>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {origin.flavorExamples.map((f) => (
                    <span key={f} style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', fontWeight: 500, color: 'var(--copper)', border: '1px solid rgba(184,115,51,0.3)', padding: '0.3rem 0.75rem' }}>{f}</span>
                  ))}
                </div>
              </div>

              {/* Altitude */}
              <div style={{ marginBottom: '2.5rem', paddingLeft: '1rem', borderLeft: '2px solid var(--copper)' }}>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.6rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(26,16,8,0.4)', marginBottom: '0.25rem' }}>Altitude</div>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', color: 'var(--espresso)' }}>{origin.altitude}</div>
              </div>

              <Link href={`/our-coffee`} className="btn-primary">
                Explore Coffees from {origin.name}
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        </section>
      ))}

      {/* Bottom CTA */}
      <section style={{ background: 'var(--espresso)', padding: '5rem 2rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.875rem, 3.5vw, 3rem)', fontWeight: 400, color: 'var(--ivory)', letterSpacing: '-0.02em', marginBottom: '1rem' }}>
            Interested in sourcing from a specific origin?
          </h2>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', color: 'rgba(245,240,232,0.5)', marginBottom: '2.5rem', lineHeight: 1.7 }}>
            Contact the Ethvora team with your origin preference, volume requirements, and processing preferences. Traceability information available by lot.
          </p>
          <Link href="/contact" className="btn-primary light">
            Contact Us
            <ArrowUpRight size={14} />
          </Link>
        </div>
      </section>
    </>
  )
}
