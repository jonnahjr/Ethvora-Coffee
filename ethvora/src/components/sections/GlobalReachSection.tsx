'use client'
import { motion } from 'framer-motion'
import Reveal, { RevealItem } from '@/components/Reveal'

const route = [
  { label: 'Ethiopia', sub: 'Origin' },
  { label: 'Dubai', sub: 'UAE' },
  { label: 'Abu Dhabi', sub: 'UAE' },
  { label: 'Global Markets', sub: 'Worldwide' },
]

const pillars = [
  { title: 'Ethiopian Origin', desc: "Coffee sourced from Ethiopia's renowned growing regions." },
  { title: 'Specialty Focus', desc: 'Selected coffees for discerning specialty markets.' },
  { title: 'Origin Connection', desc: 'Connecting coffee buyers directly with Ethiopian origin.' },
  { title: 'Global Access', desc: 'Serving international buyers and coffee businesses worldwide.' },
]

export default function GlobalReachSection() {
  return (
    <section style={{ background: 'var(--espresso)', position: 'relative', overflow: 'hidden' }}>
      {/* Ambient copper glow */}
      <motion.div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '-30%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '900px',
          height: '600px',
          background: 'radial-gradient(ellipse at center, rgba(184,115,51,0.12) 0%, transparent 60%)',
          pointerEvents: 'none',
        }}
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="wrap" style={{ padding: '6.5rem 2rem', position: 'relative', zIndex: 1 }}>
        {/* Heading */}
        <Reveal>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="eyebrow" style={{ display: 'block', marginBottom: '0.75rem' }}>Global Reach</span>
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2rem, 3.5vw, 2.9rem)',
                fontWeight: 400,
                color: 'var(--ivory)',
                letterSpacing: '-0.02em',
                marginBottom: '1rem',
              }}
            >
              From Ethiopia to Global Coffee Markets
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.9375rem',
                color: 'rgba(245,240,232,0.55)',
                maxWidth: '560px',
                margin: '0 auto',
                lineHeight: 1.75,
              }}
            >
              Ethvora Coffee is focused on building connections between Ethiopian origin coffee and international
              specialty markets, including buyers and coffee businesses in the UAE and beyond.
            </p>
          </div>
        </Reveal>

        {/* Animated route */}
        <Reveal stagger staggerDelay={0.18}>
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: '2.5rem 0.5rem',
            }}
          >
            {route.map((item, i) => (
              <RevealItem key={item.label} as="div">
                <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                  {/* Stop */}
                  <div style={{ textAlign: 'center', width: '120px' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '0.875rem' }}>
                      <div style={{ position: 'relative', width: '12px', height: '12px' }}>
                        <span
                          style={{
                            position: 'absolute',
                            inset: 0,
                            borderRadius: '9999px',
                            background: i === 0 ? 'var(--copper)' : 'rgba(245,240,232,0.45)',
                          }}
                        />
                        {i === 0 && (
                          <>
                            <motion.span
                              style={{
                                position: 'absolute',
                                inset: 0,
                                borderRadius: '9999px',
                                border: '1px solid var(--copper)',
                              }}
                              animate={{ scale: [1, 2.6], opacity: [0.7, 0] }}
                              transition={{ duration: 2.2, repeat: Infinity, ease: 'easeOut' }}
                            />
                            <motion.span
                              style={{
                                position: 'absolute',
                                inset: 0,
                                borderRadius: '9999px',
                                border: '1px solid var(--copper)',
                              }}
                              animate={{ scale: [1, 2.6], opacity: [0.7, 0] }}
                              transition={{ duration: 2.2, repeat: Infinity, ease: 'easeOut', delay: 1.1 }}
                            />
                          </>
                        )}
                      </div>
                    </div>
                    <div
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '1.25rem',
                        color: 'var(--ivory)',
                        lineHeight: 1.2,
                      }}
                    >
                      {item.label}
                    </div>
                    <div
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.55rem',
                        fontWeight: 700,
                        letterSpacing: '0.18em',
                        textTransform: 'uppercase',
                        color: 'var(--copper)',
                        marginTop: '0.3rem',
                      }}
                    >
                      {item.sub}
                    </div>
                  </div>

                  {/* Connector */}
                  {i < route.length - 1 && (
                    <motion.span
                      aria-hidden="true"
                      style={{
                        display: 'block',
                        width: '56px',
                        height: '1px',
                        background: 'rgba(184,115,51,0.45)',
                        marginTop: '6px',
                        transformOrigin: 'left center',
                      }}
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.5 + i * 0.25, ease: 'easeOut' }}
                    />
                  )}
                </div>
              </RevealItem>
            ))}
          </div>
        </Reveal>
      </div>

      {/* Pillars on light ground */}
      <div style={{ background: 'var(--paper)', position: 'relative', zIndex: 1 }}>
        <div className="wrap" style={{ padding: '4.5rem 2rem 5.5rem' }}>
          <Reveal stagger staggerDelay={0.12}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                borderTop: '1px solid var(--line)',
                borderLeft: '1px solid var(--line)',
              }}
            >
              {pillars.map((p) => (
                <RevealItem key={p.title} as="div">
                  <div
                    className="pillar-cell"
                    style={{
                      borderRight: '1px solid var(--line)',
                      borderBottom: '1px solid var(--line)',
                      padding: '2.25rem 1.75rem',
                      height: '100%',
                    }}
                  >
                    <div style={{ width: '1.75rem', height: '1px', background: 'var(--copper)', marginBottom: '1.25rem' }} />
                    <h3
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '1.3rem',
                        fontWeight: 400,
                        color: 'var(--espresso)',
                        marginBottom: '0.6rem',
                      }}
                    >
                      {p.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.8125rem',
                        lineHeight: 1.7,
                        color: 'var(--ink-50)',
                      }}
                    >
                      {p.desc}
                    </p>
                  </div>
                </RevealItem>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
