import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

const stats = [
  { value: '1,700–2,200', unit: 'M', label: 'Growing Altitude' },
  { value: '100%', unit: '', label: 'Ethiopian Arabica' },
  { value: '3+', unit: '', label: 'Signature Origins' },
  { value: '3', unit: '', label: 'Processing Styles' },
]

export default function StatsSection() {
  return (
    <>
      {/* Light stats strip */}
      <section
        className="section-light"
        style={{ borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}
      >
        <div className="wrap" style={{ padding: '0 2rem' }}>
          <div
            className="stats-strip"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
            }}
          >
            {stats.map((s, i) => (
              <div
                key={s.label}
                className="stats-item"
                style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: '0.625rem',
                  padding: '1.1rem 1.5rem',
                  flex: '1 1 auto',
                  justifyContent: 'center',
                  borderLeft: i > 0 ? '1px solid var(--line-soft)' : 'none',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.375rem',
                    fontWeight: 400,
                    color: 'var(--espresso)',
                    lineHeight: 1,
                    letterSpacing: '-0.01em',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {s.value}
                  {s.unit && (
                    <span
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.625rem',
                        fontWeight: 700,
                        color: 'var(--copper)',
                        marginLeft: '0.2rem',
                        verticalAlign: 'super',
                      }}
                    >
                      {s.unit}
                    </span>
                  )}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.6rem',
                    fontWeight: 600,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: 'var(--ink-50)',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dark accent band */}
      <section style={{ background: 'var(--espresso)' }}>
        <div
          className="wrap"
          style={{
            padding: '2.75rem 2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.25rem 2.5rem',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic',
              fontSize: 'clamp(1.05rem, 1.8vw, 1.35rem)',
              color: 'rgba(245,240,232,0.7)',
              letterSpacing: '0.01em',
            }}
          >
            High altitude. Distinct terroir. Carefully selected lots.
          </p>
          <Link href="/our-coffee" className="btn-primary light" style={{ padding: '0.7rem 1.5rem', fontSize: '0.65rem' }}>
            View the Collection
            <ArrowUpRight size={13} />
          </Link>
        </div>
      </section>

      <style>{`
        @media (max-width: 720px) {
          .stats-strip {
            flex-direction: column;
            align-items: stretch;
          }
          .stats-item {
            border-left: none !important;
            border-top: 1px solid var(--line-soft);
            justify-content: space-between !important;
          }
          .stats-item:first-child {
            border-top: none;
          }
        }
      `}</style>
    </>
  )
}
