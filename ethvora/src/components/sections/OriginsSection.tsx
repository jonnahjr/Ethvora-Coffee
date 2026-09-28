import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import Reveal, { RevealItem } from '@/components/Reveal'
import { origins } from '@/data/coffees'

export default function OriginsSection() {
  return (
    <section className="section-stone">
      <div className="wrap" style={{ padding: '7rem 2rem' }}>
        {/* Heading */}
        <Reveal>
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
            <span className="eyebrow" style={{ display: 'block', marginBottom: '0.875rem' }}>
              Ethiopian Origins
            </span>
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2rem, 4vw, 3.1rem)',
                fontWeight: 400,
                color: 'var(--espresso)',
                letterSpacing: '-0.02em',
              }}
            >
              Explore Our Origins
            </h2>
          </div>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.9rem',
              lineHeight: 1.7,
              color: 'var(--ink-50)',
              maxWidth: '320px',
            }}
          >
            Distinct regions. Distinct character. One extraordinary origin.
          </p>
        </div>
        </Reveal>

        {/* Origin cards */}
        <Reveal stagger staggerDelay={0.15}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.25rem',
          }}
        >
          {origins.map((origin) => (
            <RevealItem key={origin.id} as="div">
            <Link
              key={origin.id}
              href={`/origins#${origin.id}`}
              className="card-light frame"
              style={{
                position: 'relative',
                display: 'block',
                aspectRatio: '4/5',
                overflow: 'hidden',
                textDecoration: 'none',
              }}
            >
              <Image
                src={origin.image}
                alt={`${origin.name} coffee region, Ethiopia`}
                fill
                quality={80}
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, 33vw"
                loading="lazy"
              />

              {/* Legibility veil */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(26,16,8,0.78) 0%, rgba(26,16,8,0.12) 50%, transparent 100%)',
                }}
              />

              {/* Content */}
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '1.75rem' }}>
                <div
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.55rem',
                    fontWeight: 600,
                    letterSpacing: '0.18em',
                    color: 'var(--copper-soft)',
                    marginBottom: '0.5rem',
                  }}
                >
                  {origin.coordinates}
                </div>

                <h3
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'clamp(1.75rem, 2.5vw, 2.25rem)',
                    fontWeight: 400,
                    color: 'var(--ivory)',
                    letterSpacing: '-0.01em',
                    marginBottom: '0.5rem',
                  }}
                >
                  {origin.name}
                </h3>

                <p
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.8125rem',
                    lineHeight: 1.65,
                    color: 'rgba(245,240,232,0.75)',
                    marginBottom: '1.125rem',
                    maxWidth: '300px',
                  }}
                >
                  {origin.description.split('.')[0] + '.'}
                </p>

                {/* Flavor tags */}
                <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
                  {origin.flavorExamples.map((f) => (
                    <span
                      key={f}
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.6rem',
                        fontWeight: 600,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: 'var(--ivory)',
                        border: '1px solid rgba(245,240,232,0.3)',
                        borderRadius: '9999px',
                        padding: '0.25rem 0.7rem',
                      }}
                    >
                      {f}
                    </span>
                  ))}
                </div>

                <div className="arrow-link" style={{ color: 'var(--ivory)' }}>
                  Explore {origin.name}
                  <ArrowUpRight size={14} />
                </div>
              </div>
            </Link>
            </RevealItem>
          ))}
        </div>
        </Reveal>
      </div>
    </section>
  )
}
