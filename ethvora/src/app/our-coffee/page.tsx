import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { coffees } from '@/data/coffees'

export const metadata: Metadata = {
  title: 'Our Coffee | Ethvora Coffee — Ethiopian Specialty Arabica',
  description:
    'Explore Ethvora Coffee\'s selection of single-origin Ethiopian Arabica coffees from Guji, Yirgacheffe, and Sidama. Natural, Washed, and Anaerobic processing available for specialty buyers.',
}

export default function OurCoffeePage() {
  return (
    <>
      {/* Page hero */}
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
        <div style={{ position: 'absolute', inset: 0, opacity: 0.06 }}>
          <Image src="/coffee-cherries.jpg" alt="" fill style={{ objectFit: 'cover' }} />
        </div>
        <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
          <span className="eyebrow" style={{ display: 'block', color: 'var(--copper)', marginBottom: '1rem' }}>Selection</span>
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
            Our Coffee
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '1.0625rem',
              lineHeight: 1.8,
              color: 'rgba(245,240,232,0.6)',
              maxWidth: '560px',
            }}
          >
            Selected single-origin Ethiopian Arabica for specialty roasters, importers, cafés, and coffee professionals around the world.
          </p>
        </div>
      </section>

      {/* Coffee grid */}
      <section style={{ background: 'var(--cream)', padding: '6rem 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(min(320px, 100%), 1fr))',
              gap: '1px',
              background: 'rgba(26,16,8,0.08)',
            }}
          >
            {coffees.map((coffee) => (
              <div key={coffee.id} style={{ background: 'var(--cream)' }}>
                <div className="img-reveal" style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden' }}>
                  <Image
                    src={coffee.image}
                    alt={`${coffee.name}`}
                    fill
                    quality={85}
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '1rem',
                      left: '1rem',
                      background: 'var(--espresso)',
                      color: 'var(--copper)',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.55rem',
                      fontWeight: 600,
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      padding: '0.375rem 0.75rem',
                    }}
                  >
                    {coffee.process}
                  </div>
                </div>
                <div style={{ padding: '2rem', borderTop: '1px solid rgba(26,16,8,0.07)' }}>
                  <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--copper)', marginBottom: '0.5rem' }}>
                    {coffee.region}, Ethiopia
                  </div>
                  <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', fontWeight: 400, color: 'var(--espresso)', letterSpacing: '-0.01em', marginBottom: '1rem' }}>
                    {coffee.name}
                  </h2>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.875rem', lineHeight: 1.7, color: 'rgba(26,16,8,0.6)', marginBottom: '1.5rem' }}>
                    {coffee.description}
                  </p>

                  {/* Details */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '1rem', marginBottom: '1.5rem', paddingTop: '1.25rem', borderTop: '1px solid rgba(26,16,8,0.07)' }}>
                    {[
                      ['Process', coffee.process],
                      ['Altitude', coffee.altitudeRange],
                      ['Variety', coffee.variety ?? 'Available on request'],
                      ['Harvest', coffee.harvestYear ?? 'Available on request'],
                    ].map(([label, value]) => (
                      <div key={label}>
                        <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.55rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(26,16,8,0.35)', marginBottom: '0.25rem' }}>{label}</div>
                        <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8rem', color: value === 'Available on request' ? 'rgba(26,16,8,0.35)' : 'var(--espresso)', fontWeight: 500, fontStyle: value === 'Available on request' ? 'italic' : 'normal' }}>{value}</div>
                      </div>
                    ))}
                  </div>

                  {/* Flavor notes */}
                  {coffee.flavorNotes.length > 0 && (
                    <div style={{ display: 'flex', gap: '0.375rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                      {coffee.flavorNotes.map((n) => (
                        <span key={n} style={{ fontFamily: 'var(--font-sans)', fontSize: '0.7rem', fontWeight: 500, color: 'var(--coffee-brown)', border: '1px solid rgba(74,44,23,0.25)', padding: '0.2rem 0.625rem' }}>{n}</span>
                      ))}
                    </div>
                  )}

                  {/* Formats */}
                  <div style={{ marginBottom: '1.5rem' }}>
                    <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.55rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(26,16,8,0.35)', marginBottom: '0.5rem' }}>Available Formats</div>
                    <div style={{ display: 'flex', gap: '0.375rem', flexWrap: 'wrap' }}>
                      {coffee.formats.map((f) => (
                        <span key={f} style={{ fontFamily: 'var(--font-sans)', fontSize: '0.7rem', fontWeight: 500, color: 'var(--highland-green)', border: '1px solid rgba(61,92,58,0.3)', padding: '0.2rem 0.625rem' }}>{f}</span>
                      ))}
                    </div>
                  </div>

                  <Link href={`/our-coffee/${coffee.slug}`} className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                    {coffee.availability === 'On Request' ? 'Ask About Availability' : 'View Details'}
                    <ArrowUpRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Request section */}
          <div style={{ textAlign: 'center', marginTop: '4rem', padding: '3rem 2rem', background: 'var(--espresso)', border: '1px solid rgba(184,115,51,0.15)' }}>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.875rem', fontWeight: 400, color: 'var(--ivory)', marginBottom: '0.75rem' }}>
              Looking for a specific lot or quantity?
            </h3>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', color: 'rgba(245,240,232,0.55)', marginBottom: '2rem' }}>
              Contact the Ethvora team for current availability, pricing, and sample requests.
            </p>
            <Link href="/contact" className="btn-primary light">
              Contact the Ethvora Team
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
