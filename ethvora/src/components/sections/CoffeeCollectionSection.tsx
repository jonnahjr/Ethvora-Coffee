import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { coffees } from '@/data/coffees'

export default function CoffeeCollectionSection() {
  return (
    <>
    <section className="section-light">
      <div className="wrap" style={{ padding: '7rem 2rem' }}>
        {/* Heading */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            flexWrap: 'wrap',
            gap: '1.5rem',
            marginBottom: '3.5rem',
          }}
        >
          <div>
            <span className="eyebrow" style={{ display: 'block', marginBottom: '0.75rem' }}>Selection</span>
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                fontWeight: 400,
                color: 'var(--espresso)',
                letterSpacing: '-0.02em',
              }}
            >
              Our Coffee
            </h2>
          </div>
          <Link href="/our-coffee" className="arrow-link">
            View all coffees
            <ArrowUpRight size={14} />
          </Link>
        </div>

        {/* Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))',
            gap: '1.5rem',
          }}
        >
          {coffees.map((coffee) => (
            <article key={coffee.id} className="card-light" style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
              {/* Image */}
              <div className="frame" style={{ position: 'relative', aspectRatio: '4/3', borderRadius: '16px 16px 0 0' }}>
                <Image
                  src={coffee.image}
                  alt={`${coffee.name} — Ethiopian specialty coffee`}
                  fill
                  quality={80}
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  loading="lazy"
                />
                {/* Process badge */}
                <span
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    left: '1rem',
                    background: 'var(--paper)',
                    color: 'var(--espresso)',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.55rem',
                    fontWeight: 700,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    borderRadius: '9999px',
                    padding: '0.4rem 0.85rem',
                  }}
                >
                  {coffee.process}
                </span>
                {coffee.availability === 'On Request' && (
                  <span
                    style={{
                      position: 'absolute',
                      top: '1rem',
                      right: '1rem',
                      background: 'var(--espresso)',
                      color: 'var(--ivory)',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.55rem',
                      fontWeight: 600,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      borderRadius: '9999px',
                      padding: '0.4rem 0.85rem',
                    }}
                  >
                    On Request
                  </span>
                )}
              </div>

              {/* Body */}
              <div style={{ padding: '1.75rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.6rem',
                    fontWeight: 600,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: 'var(--copper)',
                    marginBottom: '0.5rem',
                  }}
                >
                  {coffee.locality || coffee.region}, Ethiopia
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.625rem',
                    fontWeight: 400,
                    color: 'var(--espresso)',
                    letterSpacing: '-0.01em',
                    marginBottom: '1.25rem',
                  }}
                >
                  {coffee.name}
                </h3>

                {/* Details */}
                <div
                  className="coffee-details"
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '1rem',
                    borderTop: '1px solid var(--line)',
                    borderBottom: '1px solid var(--line)',
                    padding: '1rem 0',
                    marginBottom: '1.25rem',
                  }}
                >
                  {[
                    { label: 'Process', value: coffee.process },
                    { label: 'Altitude', value: coffee.altitudeRange },
                  ].map((d) => (
                    <div key={d.label}>
                      <div
                        style={{
                          fontFamily: 'var(--font-sans)',
                          fontSize: '0.55rem',
                          fontWeight: 600,
                          letterSpacing: '0.14em',
                          textTransform: 'uppercase',
                          color: 'var(--ink-40)',
                          marginBottom: '0.3rem',
                        }}
                      >
                        {d.label}
                      </div>
                      <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8rem', fontWeight: 500, color: 'var(--espresso)' }}>
                        {d.value}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Flavor notes */}
                {coffee.flavorNotes.length > 0 && (
                  <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                    {coffee.flavorNotes.map((n) => (
                      <span key={n} className="chip-light">{n}</span>
                    ))}
                  </div>
                )}

                <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Link href={`/our-coffee/${coffee.slug}`} className="arrow-link">
                    {coffee.availability === 'On Request' ? 'Ask availability' : 'View coffee'}
                    <ArrowUpRight size={14} />
                  </Link>
                  <span
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.6rem',
                      fontWeight: 600,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: 'var(--ink-40)',
                    }}
                  >
                    {coffee.availability}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
    <style>{`
      @media (max-width: 640px) {
        .coffee-details {
          grid-template-columns: 1fr 1fr !important;
          gap: 0.75rem !important;
        }
      }
    `}</style>
    </>
  )
}
