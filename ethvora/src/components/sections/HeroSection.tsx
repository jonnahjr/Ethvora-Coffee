'use client'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowDownRight, ArrowUpRight } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100)
    const onScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const parallaxY = scrollY * 0.3

  return (
    <section
      ref={heroRef}
      style={{
        position: 'relative',
        height: '100svh',
        minHeight: '600px',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      aria-label="Hero — From Ethiopia's Highlands to the World's Finest Cups"
    >
      {/* Background image with parallax zoom */}
      <div
        style={{
          position: 'absolute',
          inset: '-10%',
          zIndex: 0,
          transform: `translateY(${parallaxY}px) scale(${loaded ? 1.05 : 1.12})`,
          transition: loaded ? 'transform 1.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)' : 'none',
        }}
      >
        <Image
          src="/hero-highland.jpg"
          alt="Ethiopian coffee highlands at golden hour"
          fill
          priority
          quality={90}
          style={{ objectFit: 'cover', objectPosition: 'center 40%' }}
          sizes="100vw"
        />
      </div>

      {/* Gradient overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          background: 'linear-gradient(to bottom, rgba(26,16,8,0.55) 0%, rgba(26,16,8,0.3) 40%, rgba(26,16,8,0.65) 100%)',
        }}
      />

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          padding: '0 1.5rem',
          maxWidth: '900px',
        }}
      >
        {/* Eyebrow */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.75rem',
            marginBottom: '1.75rem',
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(16px)',
            transition: 'all 1s ease 0.2s',
          }}
        >
          <span style={{ display: 'block', width: '2rem', height: '1px', background: 'var(--copper)' }} />
          <span className="eyebrow" style={{ color: 'var(--copper)' }}>Ethiopian Specialty Coffee</span>
          <span style={{ display: 'block', width: '2rem', height: '1px', background: 'var(--copper)' }} />
        </div>

        {/* Main headline */}
        <h1
          style={{
            fontFamily: 'var(--font-serif)',
            fontWeight: 400,
            fontSize: 'clamp(2.75rem, 7vw, 5.5rem)',
            lineHeight: 1.08,
            letterSpacing: '-0.02em',
            color: 'var(--ivory)',
            marginBottom: '1.5rem',
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(24px)',
            transition: 'all 1s ease 0.4s',
          }}
        >
          From Ethiopia&apos;s Highlands<br />
          <em style={{ fontStyle: 'italic', color: 'rgba(245,240,232,0.85)' }}>to the World&apos;s Finest Cups.</em>
        </h1>

        {/* Sub-copy */}
        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)',
            fontWeight: 300,
            lineHeight: 1.7,
            color: 'rgba(245,240,232,0.75)',
            maxWidth: '600px',
            margin: '0 auto 2.75rem',
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 1s ease 0.6s',
          }}
        >
          Single-origin Ethiopian Arabica, grown at high elevations, carefully processed at origin, and connected to specialty coffee markets around the world.
        </p>

        {/* CTA buttons */}
        <div
          style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 1s ease 0.8s',
          }}
        >
          <Link href="/our-coffee" className="btn-primary light">
            Explore Our Coffee
            <ArrowUpRight size={14} />
          </Link>
          <Link href="/contact#samples" className="btn-outline light">
            Request Samples
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: 'absolute',
          bottom: '2.5rem',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
          opacity: loaded ? 1 : 0,
          transition: 'opacity 1s ease 1.2s',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.55rem',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: 'rgba(245,240,232,0.45)',
          }}
        >
          Scroll to Discover
        </span>
        <div
          style={{
            width: '1px',
            height: '3rem',
            background: 'linear-gradient(to bottom, rgba(184,115,51,0.8), transparent)',
            animation: 'scrollPulse 2s ease-in-out infinite',
          }}
        />
      </div>

      <style>{`
        @keyframes scrollPulse {
          0%, 100% { opacity: 0.4; transform: scaleY(1); }
          50% { opacity: 1; transform: scaleY(1.2); }
        }
      `}</style>
    </section>
  )
}
