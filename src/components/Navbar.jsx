import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Scale, Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'الملخص التنفيذي', href: '#summary' },
  { label: 'الهوية', href: '#branding' },
  { label: 'الركائز', href: '#pillars' },
  { label: 'المؤشرات', href: '#metrics' },
  { label: 'المنصات', href: '#platforms' },
  { label: 'خطة التنفيذ', href: '#roadmap' },
  { label: 'الميزانية', href: '#budget' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backgroundColor: scrolled ? 'rgba(0,0,0,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid #1C1C1C' : '1px solid transparent',
        transition: 'all 0.3s ease',
      }}
    >
      <div className="section-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '4.5rem' }}>
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
          <div style={{
            width: '2.5rem', height: '2.5rem', borderRadius: '0.75rem',
            backgroundColor: '#C4FA00', display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <Scale style={{ width: '1.25rem', height: '1.25rem', color: '#000' }} />
          </div>
          <div>
            <div style={{ fontSize: '1.1rem', fontWeight: 700, fontFamily: 'var(--font-display)', color: '#FFF' }}>
              يزيد اليوبي
            </div>
            <div style={{ fontSize: '0.7rem', color: '#6B7280' }}>
              المحاماة والاستشارات القانونية
            </div>
          </div>
        </a>

        <div className="md-flex-center" style={{ gap: '0.25rem', alignItems: 'center' }}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                padding: '0.5rem 0.75rem', fontSize: '0.875rem',
                color: '#9CA3AF', borderRadius: '0.5rem', textDecoration: 'none',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => { e.target.style.color = '#C4FA00'; e.target.style.backgroundColor = 'rgba(196,250,0,0.05)' }}
              onMouseLeave={(e) => { e.target.style.color = '#9CA3AF'; e.target.style.backgroundColor = 'transparent' }}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="md-flex-center" style={{ gap: '0.75rem' }}>
          <a
            href="#cta"
            style={{
              padding: '0.625rem 1.25rem', backgroundColor: '#C4FA00', color: '#000',
              fontWeight: 600, fontSize: '0.875rem', borderRadius: '9999px',
              textDecoration: 'none', transition: 'all 0.2s',
            }}
          >
            ابدأ الآن
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md-hidden"
          style={{ padding: '0.5rem', color: '#FFF', background: 'none', border: 'none', cursor: 'pointer' }}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              backgroundColor: 'rgba(0,0,0,0.95)',
              backdropFilter: 'blur(20px)',
              borderBottom: '1px solid #1C1C1C',
              overflow: 'hidden',
            }}
          >
            <div style={{ padding: '1rem' }}>
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  style={{
                    display: 'block', padding: '0.75rem 1rem', color: '#9CA3AF',
                    borderRadius: '0.75rem', textDecoration: 'none', fontSize: '1rem',
                  }}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#cta"
                onClick={() => setMobileOpen(false)}
                style={{
                  display: 'block', padding: '0.75rem 1rem', backgroundColor: '#C4FA00',
                  color: '#000', fontWeight: 600, borderRadius: '0.75rem', textAlign: 'center',
                  marginTop: '0.5rem', textDecoration: 'none',
                }}
              >
                ابدأ الآن
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
