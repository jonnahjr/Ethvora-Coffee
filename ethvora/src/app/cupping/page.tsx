import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Cupping & Experience | Ethvora Coffee — Addis Ababa',
  description:
    'Experience coffee cupping and tasting at origin with Ethvora Coffee in Addis Ababa, Ethiopia. Book a cupping session for buyers, roasters, and coffee professionals.',
}

export default function CuppingPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="page-hero"
        style={{
          position: 'relative',
          height: '65vh',
          minHeight: '450px',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'flex-end',
        }}
      >
        <Image
          src="/hero-highland.jpg"
          alt="Cupping at origin — Ethvora Coffee, Addis Ababa"
          fill
          priority
          quality={90}
          style={{ objectFit: 'cover', objectPosition: 'center 40%' }}
          sizes="100vw"
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(26,16,8,0.9) 0%, rgba(26,16,8,0.25) 60%, transparent 100%)' }} />
        <div style={{ position: 'relative', zIndex: 2, padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
          <span className="eyebrow" style={{ display: 'block', color: 'var(--copper)', marginBottom: '1rem' }}>Cupping & Experience</span>
          <h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              fontWeight: 400,
              color: 'var(--ivory)',
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
              maxWidth: '700px',
            }}
          >
            Taste Ethiopian Coffee<br />
            <em style={{ fontStyle: 'italic', color: 'rgba(245,240,232,0.65)' }}>at Origin.</em>
          </h1>
        </div>
      </section>

      {/* Main content */}
      <section style={{ background: 'var(--cream)', padding: '7rem 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))', gap: '4rem', alignItems: 'start' }}>
          {/* Description */}
          <div>
            <span className="eyebrow" style={{ display: 'block', marginBottom: '0.75rem' }}>About the Experience</span>
            <span className="rule" style={{ display: 'block', marginBottom: '2rem' }} />
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.875rem, 3vw, 2.5rem)', fontWeight: 400, color: 'var(--espresso)', letterSpacing: '-0.02em', lineHeight: 1.15, marginBottom: '1.75rem' }}>
              Experience local cupping and coffee tasting in Addis Ababa.
            </h2>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9375rem', lineHeight: 1.9, color: 'rgba(26,16,8,0.6)', marginBottom: '1.5rem' }}>
              Ethvora Coffee offers cupping and coffee tasting sessions in Addis Ababa for buyers, roasters, importers, and coffee professionals visiting Ethiopia. Explore the character of Ethiopian specialty coffee — Natural, Washed, and Anaerobic lots — with the Ethvora team.
            </p>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9375rem', lineHeight: 1.9, color: 'rgba(26,16,8,0.6)', marginBottom: '2rem' }}>
              Cupping at origin is one of the most direct ways to understand the quality, character, and potential of Ethiopian specialty Arabica. Whether you are exploring specific lots, evaluating processing styles, or building a sourcing relationship, we welcome buyers to experience our coffees at source.
            </p>

            {/* What to expect */}
            <div style={{ background: 'var(--ivory)', padding: '2rem', marginBottom: '2rem' }}>
              <div className="eyebrow" style={{ display: 'block', marginBottom: '1rem', color: 'var(--copper)', fontSize: '0.55rem' }}>What to Expect</div>
              {[
                'Cupping of available Ethiopian specialty lots',
                'Origin discussion — regions, processing, growing areas',
                'Sample evaluation for buyers and roasters',
                'Introduction to Ethvora\'s current offering',
                'Guidance on wholesale, export, and sourcing',
              ].map((item) => (
                <div key={item} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                  <span style={{ color: 'var(--copper)', marginTop: '2px', flexShrink: 0 }}>→</span>
                  <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.875rem', color: 'rgba(26,16,8,0.65)', lineHeight: 1.6 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Location + booking */}
          <div>
            {/* Location card */}
            <div style={{ background: 'var(--espresso)', padding: '2.5rem', marginBottom: '1.5rem' }}>
              <div className="eyebrow" style={{ display: 'block', marginBottom: '1.5rem', color: 'var(--copper)' }}>Location</div>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--ivory)', marginBottom: '0.375rem' }}>Addis Ababa</div>
              <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.875rem', color: 'rgba(245,240,232,0.55)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                Behind TK Building<br />
                near Wello Sefer Roundabout<br />
                Addis Ababa, Ethiopia
              </div>
              <div style={{ width: '100%', height: '1px', background: 'rgba(245,240,232,0.08)', marginBottom: '1.5rem' }} />
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8rem', color: 'rgba(245,240,232,0.35)', lineHeight: 1.65, fontStyle: 'italic' }}>
                Exact location and directions confirmed upon booking. Contact us via Instagram to arrange your visit.
              </p>
            </div>

            {/* Cupping image */}
            <div className="img-reveal" style={{ position: 'relative', aspectRatio: '16/9', overflow: 'hidden', marginBottom: '1.5rem' }}>
              <Image
                src="/green-beans.jpg"
                alt="Ethiopian coffee evaluation at Ethvora"
                fill
                quality={80}
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* CTA */}
            <Link href="/contact" className="btn-copper" style={{ width: '100%', justifyContent: 'center', display: 'flex' }}>
              Book / Request a Cupping
              <ArrowUpRight size={14} />
            </Link>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', color: 'rgba(26,16,8,0.4)', marginTop: '0.875rem', textAlign: 'center' }}>
              Contact us via Instagram @ethvora_coffee or the contact form to request a cupping session.
            </p>
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section style={{ background: 'var(--coffee-brown)', padding: '4rem 2rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', fontWeight: 400, color: 'var(--ivory)', letterSpacing: '-0.02em', marginBottom: '1rem' }}>
            Plan your visit to Ethiopia?
          </h2>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', color: 'rgba(245,240,232,0.6)', marginBottom: '2rem', lineHeight: 1.7 }}>
            If you are visiting Addis Ababa and want to experience Ethiopian specialty coffee at origin, connect with the Ethvora team.
          </p>
          <Link href="/contact" className="btn-outline light">
            Get in Touch
            <ArrowUpRight size={14} />
          </Link>
        </div>
      </section>
    </>
  )
}
