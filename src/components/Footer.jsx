import AnimatedSection from './AnimatedSection'
import { Scale, ArrowUp, Phone, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer
      style={{
        position: 'relative',
        backgroundColor: '#000000',
        borderTop: '1px solid rgba(255,255,255,0.08)',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background:
            'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.2) 50%, transparent 100%)',
        }}
      />

      <div
        style={{
          maxWidth: '80rem',
          marginInline: 'auto',
          paddingInline: '1.5rem',
          paddingBlock: '4rem 2rem',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '3rem',
            marginBottom: '3rem',
            direction: 'rtl',
          }}
        >
          <AnimatedSection direction="right">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div
                  style={{
                    width: '2.5rem',
                    height: '2.5rem',
                    borderRadius: '0.75rem',
                    backgroundColor: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Scale style={{ width: '1.25rem', height: '1.25rem', color: '#000000' }} />
                </div>
                <div>
                  <h4
                    style={{
                      fontSize: '1.05rem',
                      fontWeight: 700,
                      color: '#FFFFFF',
                      lineHeight: 1.2,
                    }}
                  >
                    مكتب المحامي يزيد اليوبي
                  </h4>
                </div>
              </div>
              <p style={{ fontSize: '0.875rem', color: '#666666', lineHeight: 1.6 }}>
                للمحاماة والاستشارات القانونية
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <h4
                style={{
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  color: '#A0A0A0',
                  letterSpacing: '0.04em',
                  marginBottom: '0.25rem',
                }}
              >
                تابعنا
              </h4>
              {[
                { label: 'Instagram', href: 'https://instagram.com/' },
                { label: 'TikTok', href: 'https://tiktok.com/@' },
                { label: 'X (Twitter)', href: 'https://x.com/' },
                { label: 'LinkedIn', href: 'https://linkedin.com/in/' },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: '0.875rem',
                    color: '#A0A0A0',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#FFFFFF'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#A0A0A0'
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <h4
                style={{
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  color: '#A0A0A0',
                  letterSpacing: '0.04em',
                  marginBottom: '0.25rem',
                }}
              >
                تواصل
              </h4>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#A0A0A0', fontSize: '0.875rem' }}>
                <MapPin style={{ width: '0.875rem', height: '0.875rem', color: '#666666', flexShrink: 0 }} />
                جدة — المملكة العربية السعودية
              </div>
              <a
                href="https://wa.me/966500000000"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: '#A0A0A0',
                  fontSize: '0.875rem',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#FFFFFF'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#A0A0A0'
                }}
              >
                <Phone style={{ width: '0.875rem', height: '0.875rem', flexShrink: 0 }} />
                واتساب مباشر
              </a>
              <a
                href="mailto:info@yazeedalyoubi.sa"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: '#A0A0A0',
                  fontSize: '0.875rem',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#FFFFFF'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#A0A0A0'
                }}
              >
                <Mail style={{ width: '0.875rem', height: '0.875rem', flexShrink: 0 }} />
                info@yazeedalyoubi.sa
              </a>
            </div>
          </AnimatedSection>
        </div>

        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,0.08)',
            paddingTop: '1.5rem',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '0.5rem',
          }}
        >
          <p style={{ fontSize: '0.8rem', color: '#666666', textAlign: 'center' }}>
            © 2026 مكتب المحامي يزيد اليوبي — جميع الحقوق محفوظة
          </p>
        </div>
      </div>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        style={{
          position: 'fixed',
          bottom: '1.5rem',
          left: '1.5rem',
          width: '3rem',
          height: '3rem',
          borderRadius: '50%',
          backgroundColor: '#FFFFFF',
          color: '#000000',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: 'none',
          cursor: 'pointer',
          zIndex: 40,
          boxShadow: '0 4px 20px rgba(255,255,255,0.15)',
          transition: 'box-shadow 0.3s',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = '0 6px 28px rgba(255,255,255,0.3)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = '0 4px 20px rgba(255,255,255,0.15)'
        }}
      >
        <ArrowUp style={{ width: '1.25rem', height: '1.25rem' }} />
      </button>
    </footer>
  )
}
