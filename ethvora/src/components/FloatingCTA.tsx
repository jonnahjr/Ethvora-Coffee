'use client'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* Desktop floating button */}
      <Link
        href="/contact#samples"
        aria-label="Request coffee samples"
        className="floating-cta"
        style={{
          position: 'fixed',
          right: '1.75rem',
          bottom: '1.75rem',
          zIndex: 30,
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          background: 'var(--copper)',
          color: 'var(--ivory)',
          fontFamily: 'var(--font-sans)',
          fontSize: '0.6875rem',
          fontWeight: 600,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          padding: '0.875rem 1.5rem',
          textDecoration: 'none',
          border: '1px solid var(--copper)',
          boxShadow: '0 4px 24px rgba(184,115,51,0.35)',
          transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(8px)',
          pointerEvents: visible ? 'auto' : 'none',
        }}
      >
        Request Samples
        <ArrowUpRight size={13} />
      </Link>
    </>
  )
}
