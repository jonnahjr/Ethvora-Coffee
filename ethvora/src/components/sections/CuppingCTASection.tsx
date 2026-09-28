import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

export default function CuppingCTASection() {
  return (
    <section className="section-light">
      <div className="wrap" style={{ padding: '7rem 2rem' }}>
        <div
          className="cupping-split"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            border: '1px solid var(--line)',
            borderRadius: '24px',
            overflow: 'hidden',
            background: 'var(--paper)',
          }}
        >
          {/* Image side */}
          <div className="frame" style={{ position: 'relative', minHeight: '420px', borderRadius: 0 }}>
            <Image
              src="/drying-beds.jpg"
              alt="Coffee cupping experience at Ethvora"
              fill
              quality={80}
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 768px) 100vw, 50vw"
              loading="lazy"
            />
            <div style={{ position: 'absolute', inset: 0, background: 'rgba(26,16,8,0.35)' }} />

            {/* Location chip */}
            <div
              style={{
                position: 'absolute',
                top: '1.5rem',
                left: '1.5rem',
                background: 'rgba(253,252,250,0.92)',
                borderRadius: '9999px',
                padding: '0.5rem 1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
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
              <span
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.6rem',
                  fontWeight: 700,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'var(--espresso)',
                }}
              >
                Addis Ababa · Ethiopia
              </span>
            </div>
          </div>

          {/* Text side */}
          <div
            style={{
              padding: 'clamp(2.5rem, 4vw, 4rem)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <span className="eyebrow" style={{ display: 'block', marginBottom: '1rem' }}>
              Cupping &amp; Experience
            </span>
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                fontWeight: 400,
                color: 'var(--espresso)',
                letterSpacing: '-0.02em',
                lineHeight: 1.15,
                marginBottom: '1.25rem',
              }}
            >
              Taste Ethiopian Coffee<br />at Origin
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.9rem',
                lineHeight: 1.8,
                color: 'var(--ink-70)',
                marginBottom: '0.875rem',
              }}
            >
              Experience local cupping and coffee tasting in Addis Ababa and explore the character of Ethiopian
              specialty coffee with the Ethvora team.
            </p>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.75rem',
                color: 'var(--ink-40)',
                marginBottom: '2rem',
                letterSpacing: '0.02em',
              }}
            >
              Behind TK Building, near Wello Sefer Roundabout · Addis Ababa, Ethiopia
            </p>
            <div style={{ display: 'flex', gap: '0.875rem', flexWrap: 'wrap' }}>
              <Link href="/cupping" className="btn-primary">
                Book a Cupping
                <ArrowUpRight size={14} />
              </Link>
              <Link href="/contact" className="btn-outline">
                Talk to Our Team
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 800px) {
          .cupping-split {
            grid-template-columns: 1fr !important;
          }
          .cupping-split .frame {
            min-height: 300px;
          }
        }
      `}</style>
    </section>
  )
}
