import Image from 'next/image'
import Link from 'next/link'
import { ArrowUp } from 'lucide-react'

function InstagramIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer
      style={{
        background: 'var(--espresso)',
        color: 'var(--ivory)',
        borderTop: '2px solid var(--copper)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '3.5rem 2rem 0',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div
          className="footer-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1.6fr 1fr 1.1fr 1.3fr',
            gap: '3rem',
            padding: '0 0 3.5rem',
          }}
        >
          {/* Brand */}
          <div className="footer-brand-col">
            <Image
              src="/77.png"
              alt="77 Coffee"
              width={120}
              height={120}
              style={{
                height: '150px',
                width: 'auto',
                objectFit: 'contain',
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto',
                position: 'relative',
                left: '-20px',
                marginBottom: '1.25rem',
              }}
            />
            <p
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.05rem',
                fontStyle: 'italic',
                color: 'rgba(245,240,232,0.75)',
                marginBottom: '1rem',
              }}
            >
              Ethiopian Specialty Coffee —
              <br />
              From Origin to the World
            </p>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.8125rem',
                lineHeight: 1.75,
                color: 'rgba(245,240,232,0.45)',
                maxWidth: '270px',
                marginBottom: '1.75rem',
              }}
            >
              Sourced at origin, prepared with care, and delivered to roasters and specialty markets worldwide.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <a
                href="https://www.instagram.com/ethvora_coffee"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ethvora on Instagram"
                className="footer-social"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '2.25rem',
                  height: '2.25rem',
                  borderRadius: '9999px',
                  border: '1px solid rgba(245,240,232,0.15)',
                  color: 'rgba(245,240,232,0.65)',
                  textDecoration: 'none',
                }}
              >
                <InstagramIcon />
              </a>
              <span
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.75rem',
                  color: 'rgba(245,240,232,0.4)',
                  letterSpacing: '0.04em',
                }}
              >
                @ethvora_coffee
              </span>
            </div>
          </div>

          {/* Navigate */}
          <nav>
            <h3 className="eyebrow" style={{ color: 'rgba(245,240,232,0.35)', marginBottom: '1.25rem', fontSize: '0.625rem' }}>
              Navigate
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
              {[
                { href: '/our-coffee', label: 'Our Coffee' },
                { href: '/origins', label: 'Origins' },
                { href: '/processing', label: 'Processing' },
                { href: '/about', label: 'About' },
                { href: '/wholesale', label: 'Wholesale' },
                { href: '/cupping', label: 'Cupping' },
                { href: '/contact', label: 'Contact' },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="link-underline footer-link"
                    style={{
                      color: 'rgba(245,240,232,0.65)',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.8125rem',
                      textDecoration: 'none',
                    }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Origins */}
          <nav>
            <h3 className="eyebrow" style={{ color: 'rgba(245,240,232,0.35)', marginBottom: '1.25rem', fontSize: '0.625rem' }}>
              Origins
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { name: 'Guji', coords: "5°45'N · 38°30'E", href: '/origins#guji' },
                { name: 'Yirgacheffe', coords: "6°10'N · 38°12'E", href: '/origins#yirgacheffe' },
                { name: 'Sidama', coords: "6°45'N · 38°15'E", href: '/origins#sidama' },
              ].map((o) => (
                <li key={o.name}>
                  <Link
                    href={o.href}
                    className="link-underline footer-link"
                    style={{
                      color: 'rgba(245,240,232,0.75)',
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.05rem',
                      textDecoration: 'none',
                      display: 'inline-block',
                    }}
                  >
                    {o.name}
                  </Link>
                  <div
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.55rem',
                      letterSpacing: '0.14em',
                      color: 'rgba(184,115,51,0.65)',
                      marginTop: '0.2rem',
                    }}
                  >
                    {o.coords}
                  </div>
                </li>
              ))}
            </ul>
          </nav>

          {/* Origin Office */}
          <div>
            <h3 className="eyebrow" style={{ color: 'rgba(245,240,232,0.35)', marginBottom: '1.25rem', fontSize: '0.625rem' }}>
              Origin Office
            </h3>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.8125rem',
                lineHeight: 1.8,
                color: 'rgba(245,240,232,0.5)',
                marginBottom: '1.5rem',
              }}
            >
              Behind TK Building, near Wello Sefer Roundabout
              <br />
              Addis Ababa, Ethiopia
            </p>
            <div style={{ borderTop: '1px solid rgba(245,240,232,0.08)' }}>
              {[
                { label: 'Samples', value: 'Green & roasted' },
                { label: 'Export', value: 'Worldwide' },
                { label: 'Cupping', value: 'At origin, Addis Ababa' },
              ].map((row) => (
                <div
                  key={row.label}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    gap: '1rem',
                    padding: '0.65rem 0',
                    borderBottom: '1px solid rgba(245,240,232,0.08)',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.6rem',
                      fontWeight: 700,
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                      color: 'var(--copper)',
                    }}
                  >
                    {row.label}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.75rem',
                      color: 'rgba(245,240,232,0.55)',
                      textAlign: 'right',
                    }}
                  >
                    {row.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            flexWrap: 'wrap',
            padding: '1.5rem 0 2rem',
            borderTop: '1px solid rgba(245,240,232,0.08)',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.7rem',
              color: 'rgba(245,240,232,0.35)',
              letterSpacing: '0.04em',
            }}
          >
            © {new Date().getFullYear()} Ethvora Coffee. All rights reserved.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <Link
              href="/privacy-policy"
              className="footer-link"
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.7rem',
                color: 'rgba(245,240,232,0.35)',
                textDecoration: 'none',
                letterSpacing: '0.04em',
              }}
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="footer-link"
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.7rem',
                color: 'rgba(245,240,232,0.35)',
                textDecoration: 'none',
                letterSpacing: '0.04em',
              }}
            >
              Terms
            </Link>
          </div>
          <a
            href="#"
            aria-label="Back to top"
            className="footer-social"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '2.25rem',
              height: '2.25rem',
              borderRadius: '9999px',
              border: '1px solid rgba(245,240,232,0.15)',
              color: 'rgba(245,240,232,0.65)',
              textDecoration: 'none',
            }}
          >
            <ArrowUp size={15} />
          </a>
        </div>
      </div>
      <style>{footerStyles}</style>
    </footer>
  )
}

const responsiveStyles = `
  @media (max-width: 900px) {
    .footer-brand-col {
      display: flex !important;
      flex-direction: column !important;
      align-items: center !important;
      text-align: center !important;
      grid-column: 1 / -1 !important;
    }
    .footer-brand-col > div {
      justify-content: center;
    }
  }
  @media (max-width: 640px) {
    footer > div > div:first-child {
      padding: 3rem 1.25rem 0 !important;
    }
    footer {
      padding-bottom: 4.5rem !important;
    }
  }
`


const footerStyles = `
  ${responsiveStyles}
  
  .footer-link {
    transition: color 0.25s ease;
  }
  .footer-link:hover {
    color: var(--ivory) !important;
  }
  @media (max-width: 900px) {
    .footer-grid {
      grid-template-columns: 1fr 1fr !important;
      gap: 2.5rem 2rem !important;
    }
  }
  @media (max-width: 540px) {
    .footer-grid {
      grid-template-columns: 1fr !important;
    }
  }
`
