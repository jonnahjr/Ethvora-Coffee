import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Ethvora | Ethiopian Specialty Coffee Exporter',
  description:
    'Learn about Ethvora Coffee — an Ethiopian specialty coffee grower, producer, and exporter focused on connecting distinctive Ethiopian Arabica with global coffee markets.',
}

const timeline = [
  { step: 'Origin', desc: 'Sourcing from highland growing regions of Ethiopia including Guji, Yirgacheffe, and Sidama.' },
  { step: 'Selection', desc: 'Identifying lots that express the distinctive character of their growing area.' },
  { step: 'Processing', desc: 'Natural, Washed, and Anaerobic methods — each chosen to reveal the best character of the lot.' },
  { step: 'Quality', desc: 'Evaluation of cup character at origin before selection and export.' },
  { step: 'Export', desc: 'Connecting verified lots to international buyers through transparent, direct relationships.' },
  { step: 'Your Roastery', desc: 'Ethiopian specialty Arabica delivered to roasters, cafés, importers, and distributors worldwide.' },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="page-hero"
        style={{
          position: 'relative',
          paddingTop: '10rem',
          paddingBottom: '6rem',
          paddingLeft: '2rem',
          paddingRight: '2rem',
          overflow: 'hidden',
          background: 'var(--espresso)',
        }}
      >
        <div style={{ position: 'absolute', inset: 0 }}>
          <Image src="/guji-origin.jpg" alt="Ethiopian coffee highlands" fill quality={80} style={{ objectFit: 'cover', opacity: 0.18 }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(26,16,8,0.9), rgba(26,16,8,0.6))' }} />
        </div>
        <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
          <span className="eyebrow" style={{ display: 'block', color: 'var(--copper)', marginBottom: '1rem' }}>About Ethvora</span>
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
            Born in Ethiopia.<br />
            <em style={{ fontStyle: 'italic', color: 'rgba(245,240,232,0.65)' }}>Connected to the World.</em>
          </h1>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1.0625rem', lineHeight: 1.8, color: 'rgba(245,240,232,0.6)', maxWidth: '560px' }}>
            Ethvora Coffee is an Ethiopian specialty coffee grower, producer, and exporter focused on connecting distinctive Ethiopian Arabica with global coffee markets.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section style={{ background: 'var(--cream)', padding: '7rem 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))', gap: '5rem', alignItems: 'start' }}>
          {/* Left text */}
          <div>
            <span className="eyebrow" style={{ display: 'block', marginBottom: '0.75rem' }}>Our Story</span>
            <span className="rule" style={{ display: 'block', marginBottom: '2rem' }} />
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.875rem, 3vw, 2.75rem)', fontWeight: 400, color: 'var(--espresso)', letterSpacing: '-0.02em', lineHeight: 1.15, marginBottom: '2rem' }}>
              Where Ethiopia&apos;s land<br />becomes exceptional coffee.
            </h2>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9375rem', lineHeight: 1.9, color: 'rgba(26,16,8,0.6)', marginBottom: '1.5rem' }}>
              Ethvora Coffee operates at the intersection of Ethiopian coffee origin and global specialty markets. Our focus is sourcing single-origin Arabica from highland growing regions — Guji, Yirgacheffe, and Sidama — and connecting these coffees with buyers who value traceability, quality, and origin character.
            </p>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9375rem', lineHeight: 1.9, color: 'rgba(26,16,8,0.6)', marginBottom: '1.5rem' }}>
              We offer green coffee, samples, micro-lots, and wholesale supply for international markets including specialty roasters, importers, cafés, and distributors. Our coffees are available in Natural, Washed, and Anaerobic processing styles, selected to reflect the distinctive character of each lot.
            </p>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9375rem', lineHeight: 1.9, color: 'rgba(26,16,8,0.6)' }}>
              Based in Addis Ababa, Ethvora Coffee connects directly with international buyers and offers cupping experiences at origin for buyers, roasters, and coffee professionals visiting Ethiopia.
            </p>
          </div>

          {/* Right image */}
          <div>
            <div className="img-reveal" style={{ position: 'relative', aspectRatio: '3/4', overflow: 'hidden', marginBottom: '1.5rem' }}>
              <Image
                src="/drying-beds.jpg"
                alt="Ethvora Coffee — Ethiopian coffee processing"
                fill
                quality={85}
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div style={{ padding: '1.5rem', background: 'var(--espresso)' }}>
              <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--copper)', marginBottom: '0.375rem' }}>Based in</div>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: 'var(--ivory)' }}>Addis Ababa, Ethiopia</div>
              <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', color: 'rgba(245,240,232,0.4)', marginTop: '0.25rem' }}>Behind TK Building, near Wello Sefer Roundabout</div>
            </div>
          </div>
        </div>
      </section>

      {/* What we offer */}
      <section style={{ background: 'var(--ivory)', padding: '7rem 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="eyebrow" style={{ display: 'block', marginBottom: '0.75rem' }}>What We Offer</span>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 400, color: 'var(--espresso)', letterSpacing: '-0.02em' }}>
              Ethiopian Coffee for Global Markets
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(200px, 100%), 1fr))', gap: '1px', background: 'rgba(26,16,8,0.08)' }}>
            {[
              { title: 'Single-Origin', desc: 'Ethiopian Arabica from Guji, Yirgacheffe, and Sidama' },
              { title: 'Micro-Lots', desc: 'Traceable lots for buyers focused on cup character and story' },
              { title: 'Green Coffee', desc: 'Unroasted Ethiopian Arabica for specialty roasters' },
              { title: 'Samples', desc: 'Sample orders available for evaluation before purchase' },
              { title: 'Wholesale', desc: 'International wholesale supply for cafés, distributors, importers' },
              { title: 'Cupping', desc: 'Origin cupping experience in Addis Ababa' },
            ].map((o) => (
              <div key={o.title} style={{ background: 'var(--ivory)', padding: '2.5rem 2rem' }}>
                <div style={{ width: '2rem', height: '1px', background: 'var(--copper)', marginBottom: '1.25rem' }} />
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', fontWeight: 400, color: 'var(--espresso)', marginBottom: '0.625rem' }}>
                  {o.title}
                </h3>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.825rem', lineHeight: 1.65, color: 'rgba(26,16,8,0.55)' }}>
                  {o.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey timeline */}
      <section style={{ background: 'var(--espresso)', padding: '7rem 2rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
            <span className="eyebrow" style={{ display: 'block', marginBottom: '0.75rem', color: 'var(--copper)' }}>The Journey</span>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 400, color: 'var(--ivory)', letterSpacing: '-0.02em' }}>
              From Origin to Your Roastery
            </h2>
          </div>
          <div style={{ position: 'relative' }}>
            {/* Vertical line */}
            <div style={{ position: 'absolute', left: '1.5rem', top: '1.5rem', bottom: '1.5rem', width: '1px', background: 'linear-gradient(to bottom, var(--copper), rgba(184,115,51,0.1))', display: 'none' }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {timeline.map((t, i) => (
                <div
                  key={t.step}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '80px 1fr',
                    gap: '2rem',
                    padding: '2.5rem 0',
                    borderBottom: i < timeline.length - 1 ? '1px solid rgba(245,240,232,0.07)' : 'none',
                    alignItems: 'center',
                  }}
                >
                  <div style={{ textAlign: 'center' }}>
                    <div
                      style={{
                        width: '3rem',
                        height: '3rem',
                        borderRadius: '50%',
                        border: '1px solid rgba(184,115,51,0.4)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.6rem',
                        fontWeight: 700,
                        letterSpacing: '0.05em',
                        color: 'var(--copper)',
                        margin: '0 auto',
                        background: i === 0 ? 'rgba(184,115,51,0.12)' : 'transparent',
                      }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </div>
                  </div>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', fontWeight: 400, color: 'var(--ivory)', marginBottom: '0.375rem' }}>{t.step}</h3>
                    <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.875rem', lineHeight: 1.7, color: 'rgba(245,240,232,0.5)' }}>{t.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '4rem' }}>
            <Link href="/wholesale" className="btn-primary light">
              Wholesale & Export Information
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
