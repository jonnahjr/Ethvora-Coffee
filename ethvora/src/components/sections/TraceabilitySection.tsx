'use client'
import Reveal, { RevealItem } from '@/components/Reveal'

const steps = [
  { label: 'Farm', sub: 'Carefully selected growing areas' },
  { label: 'Region', sub: 'Guji · Yirgacheffe · Sidama' },
  { label: 'Lot', sub: 'Specific lots tracked from harvest' },
  { label: 'Process', sub: 'Natural · Washed · Altitude' },
  { label: 'Cup', sub: 'Character evaluated at origin' },
  { label: 'Market', sub: 'Delivered to specialty buyers worldwide' },
]

export default function TraceabilitySection() {
  return (
    <section style={{ background: 'var(--espresso)', position: 'relative', overflow: 'hidden' }}>
      {/* Subtle contour motif */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '-20%',
          right: '-10%',
          width: '480px',
          height: '380px',
          opacity: 0.05,
          pointerEvents: 'none',
        }}
      >
        <svg viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          {[250, 200, 150, 100, 65, 35].map((r, i) => (
            <ellipse key={i} cx="250" cy="200" rx={r * 2} ry={r * 1.2} stroke="#f5f0e8" strokeWidth="1" />
          ))}
        </svg>
      </div>

      <div className="wrap" style={{ padding: '6.5rem 2rem', position: 'relative', zIndex: 1 }}>
        {/* Heading */}
        <Reveal stagger staggerDelay={0.12} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem', alignItems: 'end', marginBottom: '3.25rem' }}>
          <div>
            <span className="eyebrow" style={{ display: 'block', marginBottom: '0.75rem', color: 'var(--copper)' }}>
              Traceability
            </span>
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2rem, 3.5vw, 2.9rem)',
                fontWeight: 400,
                color: 'var(--ivory)',
                letterSpacing: '-0.02em',
                lineHeight: 1.15,
              }}
            >
              Know Where Your<br />Coffee Comes From
            </h2>
          </div>
          <div>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.9375rem',
                lineHeight: 1.8,
                color: 'rgba(245,240,232,0.55)',
                marginBottom: '1.25rem',
              }}
            >
              We believe great coffee deserves a clear story—from where it grows to where it is enjoyed.
            </p>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.675rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                color: 'var(--copper)',
                textTransform: 'uppercase',
                borderLeft: '2px solid var(--copper)',
                paddingLeft: '0.75rem',
              }}
            >
              Traceability information available by lot
            </p>
          </div>
        </Reveal>

        {/* Steps grid */}
        <Reveal stagger staggerDelay={0.09}>
          <div
            className="trace-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(160px, 100%), 1fr))',
              borderTop: '1px solid rgba(245,240,232,0.1)',
              borderLeft: '1px solid rgba(245,240,232,0.1)',
            }}
          >
            {steps.map((step, i) => (
              <RevealItem key={step.label} className="trace-cell">
                <div
                  className="trace-cell-inner"
                  style={{
                    height: '100%',
                    borderRight: '1px solid rgba(245,240,232,0.1)',
                    borderBottom: '1px solid rgba(245,240,232,0.1)',
                    padding: '2.25rem 1.75rem',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  {/* Hover glow layer */}
                  <span className="trace-glow" aria-hidden="true" />

                  {/* Accent line */}
                  <span
                    className="trace-accent"
                    aria-hidden="true"
                    style={{
                      display: 'block',
                      width: '1.75rem',
                      height: '1px',
                      background: 'var(--copper)',
                      marginBottom: '1.25rem',
                      transformOrigin: 'left',
                    }}
                  />

                  <div
                    className="trace-label"
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.35rem',
                      fontWeight: 400,
                      color: 'var(--ivory)',
                      marginBottom: '0.4rem',
                      transition: 'color 0.35s ease',
                    }}
                  >
                    {step.label}
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.75rem',
                      lineHeight: 1.6,
                      color: 'rgba(245,240,232,0.45)',
                    }}
                  >
                    {step.sub}
                  </div>
                </div>
              </RevealItem>
            ))}
          </div>
        </Reveal>
      </div>

      <style>{`
        .trace-cell {
          background: rgba(245,240,232,0);
          transition: background 0.45s ease;
        }
        .trace-cell:hover {
          background: rgba(245,240,232,0.035);
        }
        .trace-accent {
          transition: width 0.5s cubic-bezier(0.22, 0.61, 0.36, 1);
        }
        .trace-cell:hover .trace-accent {
          width: 3.5rem;
        }
        .trace-cell:hover .trace-label {
          color: var(--copper) !important;
        }
        .trace-glow {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(220px circle at 50% 0%, rgba(184,115,51,0.08), transparent 70%);
          opacity: 0;
          transition: opacity 0.45s ease;
          pointer-events: none;
        }
        .trace-cell:hover .trace-glow {
          opacity: 1;
        }
        @media (max-width: 640px) {
          .trace-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 440px) {
          .trace-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
