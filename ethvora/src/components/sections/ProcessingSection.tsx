import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

const methods = [
  {
    id: 'natural',
    name: 'Natural',
    subtitle: 'Fruit-forward. Sweet. Expressive.',
    description:
      'Coffee cherries are dried whole with the fruit intact, allowing the beans to develop pronounced sweetness and fruit-forward character over several weeks on raised drying beds.',
    image: '/drying-beds.jpg',
  },
  {
    id: 'washed',
    name: 'Washed',
    subtitle: 'Clean. Bright. Origin-expressive.',
    description:
      'The coffee cherry pulp is removed before fermentation and drying, highlighting the clarity, acidity, and distinctive terroir characteristics of the origin.',
    image: '/green-beans.jpg',
  },
  {
    id: 'anaerobic',
    name: 'Anaerobic',
    subtitle: 'Complex. Experimental. Distinctive.',
    description:
      'A controlled oxygen-free fermentation process that creates distinctive and complex flavor expressions, extending the range of what Ethiopian specialty coffee can offer.',
    image: '/coffee-cherries.jpg',
  },
]

export default function ProcessingSection() {
  return (
    <section className="section-stone">
      {/* responsive fixes are in the <style> block below */}
      <div className="wrap" style={{ padding: '7rem 2rem' }}>
        {/* Heading */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span className="eyebrow" style={{ display: 'block', marginBottom: '0.75rem' }}>Processing</span>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.9rem, 3.5vw, 2.9rem)',
              fontWeight: 400,
              color: 'var(--espresso)',
              letterSpacing: '-0.02em',
              maxWidth: '640px',
              margin: '0 auto',
            }}
          >
            Three Ways to Reveal the Character of Ethiopian Coffee
          </h2>
        </div>

        {/* Rows */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {methods.map((m, i) => (
            <div
              key={m.id}
              id={`process-${m.id}`}
              className="card-light"
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                overflow: 'hidden',
              }}
            >
              {/* Image */}
              <div
                className="frame"
                style={{
                  position: 'relative',
                  minHeight: '320px',
                  borderRadius: '16px 0 0 16px',
                  order: i % 2 === 1 ? 1 : 0,
                }}
              >
                <Image
                  src={m.image}
                  alt={`${m.name} processing — Ethiopian specialty coffee`}
                  fill
                  quality={80}
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading="lazy"
                />
              </div>

              {/* Text */}
              <div
                style={{
                  padding: 'clamp(2rem, 4vw, 3.5rem)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  order: i % 2 === 1 ? 0 : 1,
                }}
              >
                <span className="chip-light" style={{ alignSelf: 'flex-start', marginBottom: '1.25rem' }}>
                  {`0${i + 1} · ${m.name}`}
                </span>
                <h3
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'clamp(1.5rem, 2.5vw, 2.25rem)',
                    fontWeight: 400,
                    color: 'var(--espresso)',
                    letterSpacing: '-0.02em',
                    marginBottom: '0.5rem',
                  }}
                >
                  {m.name}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.8125rem',
                    color: 'var(--copper)',
                    fontWeight: 600,
                    letterSpacing: '0.02em',
                    marginBottom: '1.25rem',
                  }}
                >
                  {m.subtitle}
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.9rem',
                    lineHeight: 1.8,
                    color: 'var(--ink-70)',
                    marginBottom: '1.75rem',
                    maxWidth: '440px',
                  }}
                >
                  {m.description}
                </p>
                <Link href="/processing" className="arrow-link">
                  Learn about {m.name}
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <Link href="/processing" className="btn-outline">
            Explore Our Processing Methods
            <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 800px) {
          [id^="process-"] {
            grid-template-columns: 1fr !important;
          }
          [id^="process-"] .frame {
            border-radius: 16px 16px 0 0 !important;
            min-height: 260px;
          }
        }
        @media (max-width: 480px) {
          [id^="process-"] .frame {
            min-height: 210px;
          }
        }
      `}</style>
    </section>
  )
}
