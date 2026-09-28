'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/our-coffee', label: 'Our Coffee' },
  { href: '/origins', label: 'Origins' },
  { href: '/cupping', label: 'Cupping' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className="nav-header fixed z-50 transition-all duration-700"
      style={{
        top: scrolled ? '1.5rem' : '2rem',
        left: '50%',
        transform: 'translateX(-50%)',
        width: 'calc(100% - 3rem)',
        maxWidth: '1200px',
        background: scrolled
          ? 'rgba(26,16,8,0.7)'
          : 'rgba(26,16,8,0.3)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '1px solid rgba(245,240,232,0.1)',
        borderRadius: '9999px',
        boxShadow: scrolled ? '0 10px 40px rgba(0, 0, 0, 0.2)' : 'none',
      }}
    >
      <div
        className="nav-inner"
        style={{
          padding: '0 2.5rem',
          height: '100px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Image src="/77.png" alt="77 Coffee" width={160} height={160} className="nav-logo-img" style={{ height: '72px', width: 'auto', objectFit: 'contain' }} priority />
        </Link>

        {/* Nav links — always visible */}
        <nav
          className="nav-links"
          style={{
            gap: '0.25rem',
            alignItems: 'center',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="link-underline"
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.6875rem',
                fontWeight: 500,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'rgba(245,240,232,0.8)',
                padding: '0.5rem 0.875rem',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Link
            href="/contact#samples"
            className="nav-cta"
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.6875rem',
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--espresso)',
              background: 'var(--ivory)',
              padding: '0.625rem 1.25rem',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.375rem',
              transition: 'all 0.3s',
              border: '1px solid var(--ivory)',
              borderRadius: '9999px',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement
              el.style.background = 'transparent'
              el.style.color = 'var(--ivory)'
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement
              el.style.background = 'var(--ivory)'
              el.style.color = 'var(--espresso)'
            }}
          >
            Request Samples
            <ArrowUpRight size={12} />
          </Link>
        </div>
      </div>

      <style>{navbarStyles}</style>
    </header>
  )
}

const navbarStyles = `
  /* ── Tablets & small laptops: logo + CTA on row 1, links wrap below ── */
  @media (max-width: 860px) {
    .nav-header {
      top: 1rem !important;
      width: calc(100% - 2rem) !important;
    }
    .nav-inner {
      height: auto !important;
      min-height: 76px;
      flex-wrap: wrap;
      padding: 0.75rem 1.25rem !important;
      row-gap: 0.4rem;
    }
    .nav-links {
      order: 3;
      width: 100%;
      justify-content: center;
      row-gap: 0.25rem;
    }
    .nav-cta {
      padding: 0.5rem 1rem !important;
    }
  }

  /* ── Large phones: tighter spacing, smaller logo ── */
  @media (max-width: 640px) {
    .nav-cta {
      display: none !important;
    }
    .nav-logo-img {
      height: 56px !important;
    }
    .nav-inner {
      min-height: 68px;
      padding: 0.6rem 1rem !important;
    }
  }

  /* ── Small phones: compact everything so all 5 links fit ── */
  @media (max-width: 480px) {
    .nav-header {
      width: calc(100% - 1.25rem) !important;
      top: 0.75rem !important;
    }
    .nav-logo-img {
      height: 48px !important;
    }
    .nav-inner {
      min-height: 60px;
      padding: 0.5rem 0.75rem !important;
      row-gap: 0.25rem;
    }
    .nav-links {
      gap: 0.125rem !important;
    }
    .nav-links a {
      font-size: 0.5625rem !important;
      padding: 0.35rem 0.5rem !important;
      letter-spacing: 0.07em !important;
    }
  }
`
