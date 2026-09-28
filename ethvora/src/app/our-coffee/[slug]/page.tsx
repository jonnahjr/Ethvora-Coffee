import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, ArrowLeft } from 'lucide-react'
import { coffees } from '@/data/coffees'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return coffees.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const coffee = coffees.find((c) => c.slug === slug)
  if (!coffee) return {}
  return {
    title: `${coffee.name} | Ethvora Coffee`,
    description: coffee.description,
  }
}

export default async function CoffeeDetailPage({ params }: Props) {
  const { slug } = await params
  const coffee = coffees.find((c) => c.slug === slug)
  if (!coffee) notFound()

  return (
    <>
      {/* Hero */}
      <section style={{ position: 'relative', height: '55vh', minHeight: '400px', overflow: 'hidden', display: 'flex', alignItems: 'flex-end' }}>
        <Image
          src={coffee.image}
          alt={coffee.name}
          fill
          priority
          quality={90}
          style={{ objectFit: 'cover' }}
          sizes="100vw"
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(26,16,8,0.9) 0%, rgba(26,16,8,0.3) 60%, transparent 100%)' }} />
        <div style={{ position: 'relative', zIndex: 2, padding: '3rem 2rem', maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
          <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--copper)', marginBottom: '0.625rem' }}>
            {coffee.region}, Ethiopia · {coffee.process}
          </div>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 400, color: 'var(--ivory)', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
            {coffee.name}
          </h1>
        </div>
      </section>

      {/* Content */}
      <section style={{ background: 'var(--cream)', padding: '5rem 2rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <Link href="/our-coffee" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--font-sans)', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--copper)', textDecoration: 'none', marginBottom: '3rem' }}>
            <ArrowLeft size={14} />
            All Coffees
          </Link>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))', gap: '4rem' }}>
            {/* Left — description + details */}
            <div>
              <span className="eyebrow" style={{ display: 'block', marginBottom: '0.75rem' }}>Cup Profile</span>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', fontWeight: 400, color: 'var(--espresso)', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
                {coffee.name}
              </h2>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9375rem', lineHeight: 1.85, color: 'rgba(26,16,8,0.65)', marginBottom: '2rem' }}>
                {coffee.description}
              </p>

              {/* Flavor notes */}
              {coffee.flavorNotes.length > 0 && (
                <div style={{ marginBottom: '2rem' }}>
                  <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(26,16,8,0.4)', marginBottom: '0.75rem' }}>Flavor Notes</div>
                  <div style={{ display: 'flex', gap: '0.625rem', flexWrap: 'wrap' }}>
                    {coffee.flavorNotes.map((n) => (
                      <span key={n} style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', color: 'var(--coffee-brown)', borderBottom: '1px solid var(--clay)', paddingBottom: '0.125rem' }}>
                        {n}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Character tags */}
              {coffee.character.length > 0 && (
                <div style={{ marginBottom: '2rem' }}>
                  <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(26,16,8,0.4)', marginBottom: '0.75rem' }}>Character</div>
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    {coffee.character.map((c) => (
                      <span key={c} style={{ fontFamily: 'var(--font-sans)', fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--highland-green)', border: '1px solid rgba(61,92,58,0.3)', padding: '0.25rem 0.75rem' }}>{c}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right — spec table + CTA */}
            <div>
              <div style={{ background: 'var(--espresso)', padding: '2.5rem', marginBottom: '1.5rem' }}>
                <div className="eyebrow" style={{ display: 'block', marginBottom: '1.5rem', color: 'var(--copper)' }}>Coffee Details</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                  {[
                    ['Origin', coffee.locality ?? coffee.region],
                    ['Process', coffee.process],
                    ['Altitude', coffee.altitudeRange],
                    ['Variety', coffee.variety ?? 'Available on request'],
                    ['Harvest', coffee.harvestYear ?? 'Available on request'],
                    ['Cup Score', coffee.cupScore ?? 'Available on request'],
                    ['Producer', coffee.producer ?? 'Available on request'],
                    ['Lot Info', coffee.lotInfo ?? 'Available on request'],
                    ['Availability', coffee.availability],
                  ].map(([label, value]) => (
                    <div key={label} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.875rem 0', borderBottom: '1px solid rgba(245,240,232,0.06)' }}>
                      <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(245,240,232,0.35)' }}>{label}</span>
                      <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8125rem', color: value === 'Available on request' ? 'rgba(245,240,232,0.25)' : 'var(--ivory)', fontStyle: value === 'Available on request' ? 'italic' : 'normal', textAlign: 'right' }}>{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Available formats */}
              <div style={{ background: 'rgba(26,16,8,0.04)', padding: '1.5rem', marginBottom: '1.5rem' }}>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(26,16,8,0.4)', marginBottom: '0.75rem' }}>Available Formats</div>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {coffee.formats.map((f) => (
                    <span key={f} style={{ fontFamily: 'var(--font-sans)', fontSize: '0.7rem', fontWeight: 500, color: 'var(--highland-green)', border: '1px solid rgba(61,92,58,0.3)', padding: '0.3rem 0.75rem' }}>{f}</span>
                  ))}
                </div>
              </div>

              <Link href="/contact#samples" className="btn-copper" style={{ width: '100%', justifyContent: 'center' }}>
                Request This Coffee
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
