import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Wholesale & Export | Ethvora Coffee — Ethiopian Coffee for Global Buyers',
  description:
    'Source specialty Ethiopian Arabica for your roastery, café, import business, or coffee program. Ethvora Coffee offers wholesale, micro-lots, green coffee, and samples for international buyers.',
}

const buyerTypes = [
  { title: 'Specialty Roasters', desc: 'Single-origin Ethiopian Arabica for roasters seeking expressive, traceable lots.' },
  { title: 'Coffee Importers', desc: 'Green coffee, micro-lots, and wholesale supply for import and distribution.' },
  { title: 'Cafés & Coffee Bars', desc: 'Origin-focused Ethiopian coffee for specialty cafés and coffee programs.' },
  { title: 'Distributors', desc: 'Wholesale Ethiopian coffee for regional and international distribution networks.' },
  { title: 'Specialty Coffee Professionals', desc: 'Q-graders, consultants, and buyers seeking quality Ethiopian specialty lots.' },
  { title: 'Wholesale Partners', desc: 'Long-term supply relationships with transparent origin and lot information.' },
]

const offerings = [
  'Single-origin Ethiopian Arabica',
  'Micro-lots (traceable by lot)',
  'Green coffee',
  'Sample orders for evaluation',
  'Wholesale supply',
  'International export',
  'Natural, Washed & Anaerobic process',
  'Guji, Yirgacheffe & Sidama origins',
  'Roasted coffee (where available — ask our team)',
  'Mixed containers (ask our team)',
]

export default function WholesalePage() {
  return (
    <>
      {/* Hero */}
      <section
        className="page-hero"
        style={{
          position: 'relative',
          height: '60vh',
          minHeight: '420px',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'flex-end',
        }}
      >
        <Image
          src="/hero-highland.jpg"
          alt="Ethiopian coffee for global buyers — Ethvora Coffee"
          fill
          priority
          quality={90}
          style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
          sizes="100vw"
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(26,16,8,0.92) 0%, rgba(26,16,8,0.3) 60%, transparent 100%)' }} />
        <div style={{ position: 'relative', zIndex: 2, padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
          <span className="eyebrow" style={{ display: 'block', color: 'var(--copper)', marginBottom: '1rem' }}>Wholesale & Export</span>
          <h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              fontWeight: 400,
              color: 'var(--ivory)',
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
              maxWidth: '800px',
              marginBottom: '1.25rem',
            }}
          >
            Ethiopian Coffee for<br />
            <em style={{ fontStyle: 'italic', color: 'rgba(245,240,232,0.65)' }}>Global Buyers</em>
          </h1>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1.0625rem', lineHeight: 1.75, color: 'rgba(245,240,232,0.65)', maxWidth: '560px', marginBottom: '2.5rem' }}>
            Source specialty Ethiopian Arabica for your roastery, café, distribution business, or coffee program.
          </p>
          <Link href="/contact#wholesale" className="btn-primary light">
            Request Wholesale Information
            <ArrowUpRight size={14} />
          </Link>
        </div>
      </section>

      {/* Who we serve */}
      <section style={{ background: 'var(--cream)', padding: '7rem 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="eyebrow" style={{ display: 'block', marginBottom: '0.75rem' }}>Who We Serve</span>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 400, color: 'var(--espresso)', letterSpacing: '-0.02em' }}>
              Built for Coffee Professionals
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))', gap: '1px', background: 'rgba(26,16,8,0.08)' }}>
            {buyerTypes.map((b) => (
              <div key={b.title} style={{ background: 'var(--cream)', padding: '2.5rem 2rem' }}>
                <div style={{ width: '2rem', height: '1px', background: 'var(--copper)', marginBottom: '1.25rem' }} />
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', fontWeight: 400, color: 'var(--espresso)', marginBottom: '0.625rem' }}>{b.title}</h3>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8375rem', lineHeight: 1.7, color: 'rgba(26,16,8,0.55)' }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we offer */}
      <section style={{ background: 'var(--espresso)', padding: '7rem 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))', gap: '4rem', alignItems: 'center' }}>
          <div>
            <span className="eyebrow" style={{ display: 'block', marginBottom: '0.75rem', color: 'var(--copper)' }}>What We Offer</span>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 400, color: 'var(--ivory)', letterSpacing: '-0.02em', marginBottom: '2.5rem' }}>
              Ethiopian Specialty Coffee for Your Program
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {offerings.map((o, i) => (
                <div
                  key={o}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1rem',
                    padding: '1rem 0',
                    borderBottom: i < offerings.length - 1 ? '1px solid rgba(245,240,232,0.07)' : 'none',
                  }}
                >
                  <span style={{ color: 'var(--copper)', fontFamily: 'var(--font-sans)', fontSize: '0.75rem', marginTop: '1px', flexShrink: 0 }}>→</span>
                  <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.875rem', color: 'rgba(245,240,232,0.6)', lineHeight: 1.5 }}>{o}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="img-reveal" style={{ position: 'relative', aspectRatio: '4/5', overflow: 'hidden' }}>
            <Image
              src="/green-beans.jpg"
              alt="Ethiopian green coffee beans for wholesale"
              fill
              quality={85}
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Global reach strip */}
      <section style={{ background: 'var(--ivory)', padding: '5rem 2rem' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <span className="eyebrow" style={{ display: 'block', marginBottom: '0.75rem' }}>Global Reach</span>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.875rem, 3.5vw, 3rem)', fontWeight: 400, color: 'var(--espresso)', letterSpacing: '-0.02em', marginBottom: '1.5rem' }}>
            From Ethiopia to Global Coffee Markets
          </h2>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9375rem', lineHeight: 1.8, color: 'rgba(26,16,8,0.55)', maxWidth: '600px', margin: '0 auto 3rem' }}>
            Ethvora Coffee is focused on building connections between Ethiopian origin coffee and international specialty markets, including buyers and coffee businesses in the UAE and beyond. Contact our team for export and logistics information specific to your destination.
          </p>
          <Link href="/contact#wholesale" className="btn-primary">
            Request Wholesale Information
            <ArrowUpRight size={14} />
          </Link>
        </div>
      </section>
    </>
  )
}
