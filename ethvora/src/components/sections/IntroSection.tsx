import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import Reveal from '@/components/Reveal'

const journey = ['Origin', 'People', 'Processing', 'Quality', 'Global Coffee']

const introStyles = `
  @media (max-width: 640px) {
    .intro-grid {
      padding: 5rem 1.25rem !important;
      grid-template-columns: 1fr !important;
    }
    .intro-copy {
      padding: 4rem 0 5rem !important;
    }
    /* Keep the floating chips inside the viewport */
    .intro-image-wrap {
      margin: 0 0.75rem;
    }
    .orbit-badge {
      top: -1.75rem !important;
      right: 0.25rem !important;
      width: 5.5rem !important;
      height: 5.5rem !important;
    }
  }
`

export default function IntroSection() {
  return (
    <>
      <style>{introStyles}</style>
      <section className="section-light">
      <div
        className="wrap intro-grid"
        style={{
          padding: '7rem 2rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))',
          gap: 'clamp(2.5rem, 5vw, 5rem)',
          alignItems: 'center',
        }}
      >
        {/* Image side */}
        <Reveal direction="right">
        <div className="intro-image-wrap" style={{ position: 'relative' }}>
          <div className="frame" style={{ position: 'relative', aspectRatio: '4/5' }}>
            <Image
              src="/drying-beds.jpg"
              alt="Ethiopian coffee farmers at drying beds"
              fill
              quality={85}
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 768px) 100vw, 50vw"
              loading="lazy"
            />
          </div>

          {/* Coordinates chip */}
          <div
            style={{
              position: 'absolute',
              left: '-0.75rem',
              bottom: '2rem',
              background: 'var(--paper)',
              border: '1px solid var(--line)',
              borderRadius: '9999px',
              padding: '0.5rem 1.125rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.625rem',
              boxShadow: '0 12px 24px -12px rgba(26,16,8,0.2)',
            }}
          >
            <span
              style={{
                width: '0.4rem',
                height: '0.4rem',
                borderRadius: '9999px',
                background: 'var(--copper)',
                display: 'inline-block',
              }}
            />
            <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.625rem', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--espresso)' }}>
              Origin · Ethiopia
            </span>
          </div>

          {/* Rotating badge */}
          <div className="orbit-badge" style={{ top: '-2.25rem', right: '-1rem' }}>
            <svg viewBox="0 0 100 100" aria-hidden="true">
              <defs>
                <path id="orbit-circle" d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" />
              </defs>
              <circle cx="50" cy="50" r="49" fill="var(--paper)" stroke="var(--line)" />
              <text>
                <textPath href="#orbit-circle">Ethiopian Specialty Coffee · Est. 2026 ·</textPath>
              </text>
            </svg>
          </div>
        </div>
        </Reveal>

        {/* Text side */}
        <Reveal direction="left" delay={0.15}>
        <div>
          <span className="eyebrow" style={{ display: 'block', marginBottom: '1rem' }}>
            Coffee, Rooted in Origin
          </span>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.1rem, 3.5vw, 3.1rem)',
              fontWeight: 400,
              lineHeight: 1.12,
              letterSpacing: '-0.02em',
              color: 'var(--espresso)',
              marginBottom: '1.75rem',
            }}
          >
            Where Ethiopia&apos;s land becomes{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--coffee-brown)' }}>exceptional coffee.</em>
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.9375rem',
              lineHeight: 1.85,
              color: 'var(--ink-70)',
              marginBottom: '2.25rem',
              maxWidth: '480px',
            }}
          >
            Ethvora Coffee works with Ethiopian coffee origins to bring distinctive specialty Arabica to buyers,
            roasters, cafés, and coffee professionals around the world. Our coffees reflect the altitude, climate,
            soil, varieties, and processing traditions that make Ethiopia one of the world&apos;s most remarkable
            coffee origins.
          </p>

          {/* Journey strip */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
              rowGap: '0.75rem',
              marginBottom: '2.5rem',
              borderTop: '1px solid var(--line)',
              borderBottom: '1px solid var(--line)',
              padding: '1.125rem 0',
            }}
          >
            {journey.map((step, i) => (
              <span key={step} style={{ display: 'flex', alignItems: 'center' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.625rem',
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: i === 0 ? 'var(--copper)' : 'var(--ink-50)',
                  }}
                >
                  {step}
                </span>
                {i < journey.length - 1 && (
                  <span
                    aria-hidden="true"
                    style={{
                      width: '2rem',
                      height: '1px',
                      background: 'var(--line)',
                      margin: '0 0.875rem',
                    }}
                  />
                )}
              </span>
            ))}
          </div>

          <Link href="/about" className="btn-primary">
            Discover Ethvora
            <ArrowUpRight size={14} />
          </Link>
        </div>
        </Reveal>
      </div>
    </section>
    </>
  )
}
