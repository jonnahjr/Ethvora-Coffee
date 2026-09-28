import Image from 'next/image'

export default function HeritageSection() {
  return (
    <section className="section-stone">
      <div
        className="wrap"
        style={{
          padding: '7rem 2rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 'clamp(2.5rem, 5vw, 5rem)',
          alignItems: 'center',
        }}
      >
        {/* Text */}
        <div>
          <span className="eyebrow" style={{ display: 'block', marginBottom: '1rem' }}>Ethiopian Heritage</span>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.1rem, 3.5vw, 3.1rem)',
              fontWeight: 400,
              color: 'var(--espresso)',
              letterSpacing: '-0.02em',
              lineHeight: 1.15,
              marginBottom: '1.75rem',
            }}
          >
            Ethiopia is more than an origin.{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--coffee-brown)' }}>It is coffee&apos;s home.</em>
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.9375rem',
              lineHeight: 1.85,
              color: 'var(--ink-70)',
              marginBottom: '1.5rem',
              maxWidth: '480px',
            }}
          >
            Ethiopia&apos;s coffee landscapes are shaped by extraordinary biodiversity, generations of cultivation,
            diverse regional traditions, and a coffee culture deeply connected to everyday life.
          </p>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.9375rem',
              lineHeight: 1.85,
              color: 'var(--ink-50)',
              maxWidth: '480px',
              marginBottom: '2.5rem',
            }}
          >
            Ethvora Coffee brings that origin to international specialty markets while keeping the identity of each
            coffee at the center of the story.
          </p>

          {/* Location marker */}
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
            <span style={{ width: '2.5rem', height: '1px', background: 'var(--copper)', display: 'inline-block' }} />
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.6rem',
                fontWeight: 600,
                letterSpacing: '0.2em',
                color: 'var(--copper)',
                textTransform: 'uppercase',
              }}
            >
              Addis Ababa, Ethiopia
            </span>
          </div>
        </div>

        {/* Image mosaic */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '1rem',
          }}
        >
          {/* Main image — spans 2 cols */}
          <div className="frame" style={{ gridColumn: '1 / -1', position: 'relative', aspectRatio: '16/9' }}>
            <Image
              src="/hero-highland.jpg"
              alt="Ethiopian coffee highlands landscape"
              fill
              quality={80}
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 768px) 100vw, 50vw"
              loading="lazy"
            />
          </div>
          <div className="frame" style={{ position: 'relative', aspectRatio: '1' }}>
            <Image
              src="/coffee-cherries.jpg"
              alt="Ethiopian coffee cherries"
              fill
              quality={75}
              style={{ objectFit: 'cover' }}
              sizes="25vw"
              loading="lazy"
            />
          </div>
          <div className="frame" style={{ position: 'relative', aspectRatio: '1' }}>
            <Image
              src="/green-beans.jpg"
              alt="Green Ethiopian Arabica coffee beans"
              fill
              quality={75}
              style={{ objectFit: 'cover' }}
              sizes="25vw"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
