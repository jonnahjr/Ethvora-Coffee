'use client'
import { useState } from 'react'
import Image from 'next/image'
import { ArrowUpRight, Mail, MapPin, Clock, Send } from 'lucide-react'
import InstagramIcon from '@/components/icons/InstagramIcon'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    country: '',
    email: '',
    phone: '',
    buyerType: '',
    coffeeInterest: '',
    preferredOrigin: '',
    message: '',
    inquiryType: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission would be wired to a backend or form service
    setSubmitted(true)
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '0.875rem 1rem',
    background: 'rgba(245,240,232,0.05)',
    border: '1px solid rgba(245,240,232,0.12)',
    color: 'var(--ivory)',
    fontFamily: 'var(--font-sans)',
    fontSize: '0.875rem',
    outline: 'none',
    transition: 'border-color 0.2s',
    appearance: 'none',
  }

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontFamily: 'var(--font-sans)',
    fontSize: '0.6rem',
    fontWeight: 600,
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    color: 'rgba(245,240,232,0.4)',
    marginBottom: '0.5rem',
  }

  const sectionHeadingStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    margin: '0 0 1.25rem',
  }

  const eyebrowSmall: React.CSSProperties = {
    fontFamily: 'var(--font-sans)',
    fontSize: '0.6rem',
    fontWeight: 600,
    letterSpacing: '0.18em',
    textTransform: 'uppercase',
    color: 'var(--copper)',
    whiteSpace: 'nowrap',
  }

  const ruleStyle: React.CSSProperties = {
    flex: 1,
    height: '1px',
    background: 'rgba(245,240,232,0.08)',
  }

  return (
    <>
      <style>{contactStyles}</style>

      {/* ── Hero ── */}
      <section
        className="page-hero"
        style={{
          background: 'var(--espresso)',
          paddingTop: '10rem',
          paddingBottom: '4.5rem',
          paddingLeft: '2rem',
          paddingRight: '2rem',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{ position: 'absolute', inset: 0, opacity: 0.06 }}>
          <Image src="/drying-beds.jpg" alt="" fill style={{ objectFit: 'cover' }} />
        </div>
        <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative' }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '2.5rem', flexWrap: 'wrap' }}>
            <div style={{ maxWidth: '600px' }}>
              <span className="eyebrow" style={{ display: 'block', color: 'var(--copper)', marginBottom: '1rem' }}>Contact</span>
              <h1
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                  fontWeight: 400,
                  color: 'var(--ivory)',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.08,
                  marginBottom: '1.25rem',
                }}
              >
                Let&apos;s Talk Coffee
              </h1>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1.0625rem', lineHeight: 1.8, color: 'rgba(245,240,232,0.6)' }}>
                Whether you&apos;re looking for a specific origin, requesting samples, or exploring a long-term supply partnership, connect with the Ethvora Coffee team.
              </p>
            </div>

            {/* Quick contact chips */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem', minWidth: '260px' }}>
              <a
                href="mailto:info@ethvoracoffee.com"
                className="contact-chip"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '0.875rem 1.25rem',
                  border: '1px solid rgba(245,240,232,0.12)',
                  background: 'rgba(245,240,232,0.04)',
                  color: 'var(--ivory)',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.8125rem',
                  textDecoration: 'none',
                }}
              >
                <Mail size={15} style={{ color: 'var(--copper)', flexShrink: 0 }} />
                info@ethvoracoffee.com
              </a>
              <a
                href="https://www.instagram.com/ethvora_coffee"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-chip"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '0.875rem 1.25rem',
                  border: '1px solid rgba(245,240,232,0.12)',
                  background: 'rgba(245,240,232,0.04)',
                  color: 'var(--ivory)',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.8125rem',
                  textDecoration: 'none',
                }}
              >
                <InstagramIcon size={15} />
                @ethvora_coffee
                <ArrowUpRight size={12} style={{ color: 'var(--copper)', marginLeft: 'auto' }} />
              </a>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '0.875rem 1.25rem',
                  border: '1px solid rgba(245,240,232,0.12)',
                  background: 'rgba(245,240,232,0.04)',
                  color: 'rgba(245,240,232,0.65)',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.8125rem',
                }}
              >
                <MapPin size={15} style={{ color: 'var(--copper)', flexShrink: 0 }} />
                Addis Ababa, Ethiopia
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Main content: sidebar + form ── */}
      <section style={{ background: 'var(--espresso)', padding: '0 2rem 6rem' }}>
        <div className="contact-card" style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'minmax(280px, 0.9fr) 1.6fr', border: '1px solid rgba(245,240,232,0.08)' }}>
          {/* Sidebar */}
          <div
            style={{
              padding: '3.5rem 2.5rem',
              borderRight: '1px solid rgba(245,240,232,0.08)',
              background: 'rgba(245,240,232,0.02)',
            }}
          >
            {/* Direct contact */}
            <div style={{ marginBottom: '2.75rem' }}>
              <div style={sectionHeadingStyle}>
                <span style={eyebrowSmall}>Direct</span>
                <span style={ruleStyle} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
                <a
                  href="mailto:info@ethvoracoffee.com"
                  style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', textDecoration: 'none' }}
                >
                  <Mail size={15} style={{ color: 'var(--copper)', flexShrink: 0, marginTop: '0.2rem' }} />
                  <span>
                    <span style={{ display: 'block', fontFamily: 'var(--font-sans)', fontSize: '0.6rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(245,240,232,0.35)', marginBottom: '0.2rem' }}>Email</span>
                    <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.875rem', color: 'rgba(245,240,232,0.8)' }}>info@ethvoracoffee.com</span>
                  </span>
                </a>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <MapPin size={15} style={{ color: 'var(--copper)', flexShrink: 0, marginTop: '0.2rem' }} />
                  <span>
                    <span style={{ display: 'block', fontFamily: 'var(--font-sans)', fontSize: '0.6rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(245,240,232,0.35)', marginBottom: '0.2rem' }}>Origin Office</span>
                    <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8125rem', color: 'rgba(245,240,232,0.6)', lineHeight: 1.65 }}>
                      Behind TK Building, near Wello Sefer Roundabout<br />
                      Addis Ababa, Ethiopia
                    </span>
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <Clock size={15} style={{ color: 'var(--copper)', flexShrink: 0, marginTop: '0.2rem' }} />
                  <span>
                    <span style={{ display: 'block', fontFamily: 'var(--font-sans)', fontSize: '0.6rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(245,240,232,0.35)', marginBottom: '0.2rem' }}>Working Hours</span>
                    <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8125rem', color: 'rgba(245,240,232,0.6)', lineHeight: 1.65 }}>
                      Monday – Saturday<br />
                      8:30 – 17:30 (EAT)
                    </span>
                  </span>
                </div>
              </div>
            </div>

            {/* Inquiry types */}
            <div style={{ marginBottom: '2.75rem' }}>
              <div style={sectionHeadingStyle}>
                <span style={eyebrowSmall}>Inquiries</span>
                <span style={ruleStyle} />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem 1rem' }}>
                {['Wholesale', 'Samples', 'Export', 'Partnerships', 'Cupping', 'General'].map((type) => (
                  <div key={type} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--copper)', flexShrink: 0 }} />
                    <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8125rem', color: 'rgba(245,240,232,0.55)' }}>{type}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Response promise */}
            <div
              style={{
                border: '1px solid rgba(184,115,51,0.25)',
                background: 'rgba(184,115,51,0.06)',
                padding: '1.25rem 1.5rem',
              }}
            >
              <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.6rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--copper)', marginBottom: '0.5rem' }}>Response Time</div>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8125rem', lineHeight: 1.7, color: 'rgba(245,240,232,0.6)', margin: 0 }}>
                Every inquiry is answered within one business day by our export team in Addis Ababa.
              </p>
            </div>
          </div>

          {/* Form */}
          <div style={{ padding: '3.5rem 2.75rem' }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '4rem 2rem' }}>
                <div style={{ width: '3rem', height: '3rem', borderRadius: '50%', border: '1px solid var(--copper)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', color: 'var(--copper)' }}>
                  <Send size={18} />
                </div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', fontWeight: 400, color: 'var(--ivory)', marginBottom: '0.75rem' }}>Message Received</h3>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.875rem', color: 'rgba(245,240,232,0.5)', lineHeight: 1.7, maxWidth: '420px', margin: '0 auto' }}>
                  Thank you for reaching out to Ethvora Coffee. Our team will be in touch within one business day. In the meantime, follow our journey on Instagram.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} id="samples">
                {/* Section 1 — Your details */}
                <div style={sectionHeadingStyle}>
                  <span style={eyebrowSmall}>Your Details</span>
                  <span style={ruleStyle} />
                </div>
                <div className="form-row" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '1rem', marginBottom: '1rem' }}>
                  <div>
                    <label htmlFor="fullName" style={labelStyle}>Full Name *</label>
                    <input id="fullName" name="fullName" type="text" required className="contact-input" value={formData.fullName} onChange={handleChange} style={inputStyle} placeholder="Your name" />
                  </div>
                  <div>
                    <label htmlFor="company" style={labelStyle}>Company</label>
                    <input id="company" name="company" type="text" className="contact-input" value={formData.company} onChange={handleChange} style={inputStyle} placeholder="Company / Roastery" />
                  </div>
                </div>
                <div className="form-row" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '1rem', marginBottom: '1rem' }}>
                  <div>
                    <label htmlFor="email" style={labelStyle}>Email *</label>
                    <input id="email" name="email" type="email" required className="contact-input" value={formData.email} onChange={handleChange} style={inputStyle} placeholder="email@company.com" />
                  </div>
                  <div>
                    <label htmlFor="country" style={labelStyle}>Country</label>
                    <input id="country" name="country" type="text" className="contact-input" value={formData.country} onChange={handleChange} style={inputStyle} placeholder="Country" />
                  </div>
                </div>
                <div style={{ marginBottom: '2.25rem' }}>
                  <label htmlFor="phone" style={labelStyle}>WhatsApp / Phone</label>
                  <input id="phone" name="phone" type="tel" className="contact-input" value={formData.phone} onChange={handleChange} style={inputStyle} placeholder="+1 234 567 8900" />
                </div>

                {/* Section 2 — Business details */}
                <div style={sectionHeadingStyle}>
                  <span style={eyebrowSmall}>Business Details</span>
                  <span style={ruleStyle} />
                </div>
                <div className="form-row" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '1rem', marginBottom: '1rem' }}>
                  <div>
                    <label htmlFor="buyerType" style={labelStyle}>Buyer Type</label>
                    <select id="buyerType" name="buyerType" className="contact-input contact-select" value={formData.buyerType} onChange={handleChange} style={inputStyle}>
                      <option value="">Select type</option>
                      <option>Roaster</option>
                      <option>Importer</option>
                      <option>Café</option>
                      <option>Distributor</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="inquiryType" style={labelStyle}>Inquiry Type</label>
                    <select id="inquiryType" name="inquiryType" className="contact-input contact-select" value={formData.inquiryType} onChange={handleChange} style={inputStyle}>
                      <option value="">Select inquiry</option>
                      <option>Wholesale</option>
                      <option>Samples</option>
                      <option>Export</option>
                      <option>Partnerships</option>
                      <option>Cupping</option>
                      <option>General Inquiry</option>
                    </select>
                  </div>
                </div>
                <div className="form-row" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '1rem', marginBottom: '2.25rem' }}>
                  <div>
                    <label htmlFor="coffeeInterest" style={labelStyle}>Coffee Interest</label>
                    <select id="coffeeInterest" name="coffeeInterest" className="contact-input contact-select" value={formData.coffeeInterest} onChange={handleChange} style={inputStyle}>
                      <option value="">Select interest</option>
                      <option>Green Coffee</option>
                      <option>Roasted Coffee</option>
                      <option>Micro-lots</option>
                      <option>Mixed Containers</option>
                      <option>Not Sure</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="preferredOrigin" style={labelStyle}>Preferred Origin</label>
                    <select id="preferredOrigin" name="preferredOrigin" className="contact-input contact-select" value={formData.preferredOrigin} onChange={handleChange} style={inputStyle}>
                      <option value="">Select origin</option>
                      <option>Guji</option>
                      <option>Yirgacheffe</option>
                      <option>Sidama</option>
                      <option>Open to suggestion</option>
                    </select>
                  </div>
                </div>

                {/* Section 3 — Message */}
                <div style={sectionHeadingStyle}>
                  <span style={eyebrowSmall}>Your Message</span>
                  <span style={ruleStyle} />
                </div>
                <div style={{ marginBottom: '2rem' }}>
                  <label htmlFor="message" style={labelStyle}>Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="contact-input"
                    value={formData.message}
                    onChange={handleChange}
                    style={{ ...inputStyle, resize: 'vertical', minHeight: '130px' }}
                    placeholder="Tell us about your coffee program, volume requirements, or anything else..."
                  />
                </div>

                <button type="submit" className="btn-copper" style={{ width: '100%', justifyContent: 'center', display: 'flex', border: 'none', cursor: 'pointer' }}>
                  Request Samples / Send Inquiry
                  <ArrowUpRight size={14} />
                </button>

                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.7rem', color: 'rgba(245,240,232,0.3)', marginTop: '1rem', textAlign: 'center', lineHeight: 1.6 }}>
                  Your information is used only to respond to your inquiry. We do not sell or share your data.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ── What happens next ── */}
      <section style={{ background: 'var(--cream)', padding: '5rem 2rem' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="eyebrow" style={{ display: 'block', color: 'var(--copper)', marginBottom: '0.875rem' }}>What Happens Next</span>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', fontWeight: 400, color: 'var(--espresso)', letterSpacing: '-0.01em', margin: 0 }}>
              From Inquiry to Shipment
            </h2>
          </div>
          <div className="steps-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2.5rem' }}>              {[
                { title: 'We Respond', desc: 'Our export team replies within one business day to understand your requirements.' },
                { title: 'Samples & Offer', desc: 'You receive an offer sheet with availability, pricing, and courier samples on request.' },
                { title: 'Contract & Shipment', desc: 'Once terms are agreed, we handle export documentation and ship worldwide.' },
              ].map((item) => (
                <div key={item.title} style={{ borderTop: '1px solid rgba(26,16,8,0.12)', paddingTop: '1.5rem' }}>
                  <div style={{ width: '2rem', height: '1px', background: 'var(--copper)', marginBottom: '1rem' }} />
                  <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', fontWeight: 600, color: 'var(--espresso)', marginBottom: '0.625rem', margin: '0 0 0.625rem' }}>{item.title}</h3>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8125rem', lineHeight: 1.7, color: 'rgba(26,16,8,0.55)', margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Instagram CTA ── */}
      <section style={{ background: 'var(--ivory)', padding: '3.5rem 2rem', textAlign: 'center', borderTop: '1px solid rgba(26,16,8,0.06)' }}>
        <a
          href="https://www.instagram.com/ethvora_coffee"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.75rem',
            fontFamily: 'var(--font-sans)',
            fontSize: '0.875rem',
            fontWeight: 500,
            color: 'var(--espresso)',
            textDecoration: 'none',
            borderBottom: '1px solid rgba(26,16,8,0.15)',
            paddingBottom: '0.25rem',
          }}
        >
          <InstagramIcon size={18} />
          Follow @ethvora_coffee on Instagram
          <ArrowUpRight size={14} />
        </a>
      </section>
    </>
  )
}

const contactStyles = `
  .contact-input:focus {
    border-color: var(--copper) !important;
    background: rgba(245,240,232,0.07) !important;
  }
  .contact-input::placeholder {
    color: rgba(245,240,232,0.25);
  }
  .contact-select {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23b87333' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 1rem center;
    padding-right: 2.5rem !important;
    cursor: pointer;
  }
  .contact-chip {
    transition: border-color 0.2s ease, background 0.2s ease;
  }
  .contact-chip:hover {
    border-color: rgba(184,115,51,0.5) !important;
    background: rgba(184,115,51,0.08) !important;
  }
  @media (max-width: 900px) {
    .contact-card {
      grid-template-columns: 1fr !important;
    }
    .contact-card > div:first-child {
      border-right: none !important;
      border-bottom: 1px solid rgba(245,240,232,0.08);
    }
  }
  @media (max-width: 640px) {
    .form-row {
      grid-template-columns: 1fr !important;
    }
    .steps-grid {
      grid-template-columns: 1fr !important;
      gap: 2rem !important;
    }
  }
`
