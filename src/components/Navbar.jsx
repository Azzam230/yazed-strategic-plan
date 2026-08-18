import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Scale, Menu, X } from 'lucide-react'

const sections = [
  { id: 'strategy', num: '01', label: 'الاستراتيجية' },
  { id: 'problem', num: '02', label: 'المشكلة' },
  { id: 'data', num: '03', label: 'البيانات' },
  { id: 'audience', num: '04', label: 'الجمهور' },
  { id: 'content', num: '05', label: 'المحتوى' },
  { id: 'organic', num: '06', label: 'النمو' },
  { id: 'paid', num: '07', label: 'الإعلانات' },
  { id: 'kpi', num: '08', label: 'المؤشرات' },
  { id: 'roadmap', num: '09', label: 'خطة 90 يوم' },
  { id: 'next', num: '10', label: 'الخطوة التالية' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeIdx, setActiveIdx] = useState(0)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrollPct, setScrollPct] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)

      const docH = document.documentElement.scrollHeight - window.innerHeight
      setScrollPct(docH > 0 ? Math.min((window.scrollY / docH) * 100, 100) : 0)

      let closest = 0
      let minDist = Infinity
      sections.forEach((s, i) => {
        const el = document.getElementById(s.id)
        if (!el) return
        const rect = el.getBoundingClientRect()
        const dist = Math.abs(rect.top)
        if (dist < minDist) { minDist = dist; closest = i }
      })
      setActiveIdx(closest)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = useCallback((id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setMobileOpen(false)
    }
  }, [])

  return (
    <>
      {/* Progress bar at very top */}
      <div style={{
        position: 'fixed', top: 0, left: 0, right: 0, height: 2, zIndex: 100,
        backgroundColor: 'rgba(255,255,255,0.04)',
      }}>
        <motion.div
          style={{
            height: '100%', backgroundColor: '#C4FA00',
            width: `${scrollPct}%`, transformOrigin: 'right',
          }}
          transition={{ duration: 0.1 }}
        />
      </div>

      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'fixed', top: 2, left: 0, right: 0, zIndex: 50,
          backgroundColor: scrolled ? 'rgba(7,17,31,0.9)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
          transition: 'background-color 0.4s, backdrop-filter 0.4s, border-color 0.4s',
        }}
      >
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          maxWidth: '80rem', marginInline: 'auto', paddingInline: '1.5rem',
          height: '4.5rem',
        }}>
          {/* Logo — right side in RTL */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
            style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none', flexShrink: 0 }}
          >
            <div style={{
              width: '2.5rem', height: '2.5rem', borderRadius: '0.75rem',
              backgroundColor: '#C4FA00', display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <Scale style={{ width: '1.25rem', height: '1.25rem', color: '#07111F' }} />
            </div>
            <div>
              <div style={{
                fontSize: '1.05rem', fontWeight: 700,
                fontFamily: "'Noto Sans Arabic', system-ui, sans-serif",
                color: '#F5F7FA', lineHeight: 1.2,
              }}>
                يزيد اليوبي
              </div>
              <div style={{ fontSize: '0.65rem', color: '#64748B', letterSpacing: '0.02em' }}>
                الاستراتيجية الرقمية
              </div>
            </div>
          </a>

          {/* Nav links — center */}
          <div className="md-hide-mobile" style={{ gap: '0.125rem', alignItems: 'center', display: 'flex' }}>
            {sections.map((s, i) => {
              const isActive = i === activeIdx
              return (
                <button
                  key={s.id}
                  onClick={() => scrollTo(s.id)}
                  style={{
                    padding: '0.375rem 0.625rem', borderRadius: '0.5rem',
                    border: 'none', cursor: 'pointer', textDecoration: 'none',
                    backgroundColor: isActive ? 'rgba(196,250,0,0.1)' : 'transparent',
                    transition: 'all 0.25s ease',
                    display: 'flex', alignItems: 'baseline', gap: '0.3rem',
                  }}
                >
                  <span style={{
                    fontSize: '0.6rem', fontWeight: 700,
                    fontFamily: "'Noto Sans Arabic', monospace",
                    color: isActive ? '#C4FA00' : '#64748B',
                    transition: 'color 0.25s',
                  }}>
                    {s.num}
                  </span>
                  <span style={{
                    fontSize: '0.8rem', fontWeight: isActive ? 600 : 400,
                    fontFamily: "'Noto Sans Arabic', system-ui, sans-serif",
                    color: isActive ? '#F5F7FA' : '#94A3B8',
                    transition: 'color 0.25s',
                  }}>
                    {s.label}
                  </span>
                </button>
              )
            })}
          </div>

          {/* Progress counter — left side */}
          <div className="md-hide-mobile" style={{ alignItems: 'center', gap: '0.5rem', flexShrink: 0, display: 'flex' }}>
            <div style={{
              fontFamily: "'Noto Sans Arabic', monospace",
              fontSize: '0.8rem', fontWeight: 600,
              color: '#64748B', letterSpacing: '0.05em',
              paddingInline: '0.625rem', paddingBlock: '0.25rem',
              borderRadius: '0.375rem',
              backgroundColor: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.06)',
            }}>
              <span style={{ color: '#C4FA00' }}>{sections[activeIdx].num}</span>
              <span style={{ marginInline: '0.25rem', color: '#64748B' }}>/</span>
              <span>10</span>
            </div>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="show-mobile-only"
            style={{
              padding: '0.5rem', color: '#F5F7FA', background: 'none',
              border: 'none', cursor: 'pointer', display: 'none',
            }}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile slide-down panel */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              style={{
                backgroundColor: 'rgba(7,17,31,0.97)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                borderBottom: '1px solid rgba(255,255,255,0.06)',
                overflow: 'hidden',
              }}
            >
              <div style={{ padding: '1rem 1.25rem 1.5rem' }}>
                {sections.map((s, i) => {
                  const isActive = i === activeIdx
                  return (
                    <button
                      key={s.id}
                      onClick={() => scrollTo(s.id)}
                      style={{
                        display: 'flex', alignItems: 'center', gap: '0.75rem',
                        width: '100%', padding: '0.75rem 1rem',
                        borderRadius: '0.625rem', border: 'none', cursor: 'pointer',
                        backgroundColor: isActive ? 'rgba(196,250,0,0.08)' : 'transparent',
                        marginBottom: '0.125rem',
                        transition: 'background-color 0.2s',
                      }}
                    >
                      <span style={{
                        fontSize: '0.65rem', fontWeight: 700,
                        color: isActive ? '#C4FA00' : '#64748B',
                        minWidth: '1.5rem',
                      }}>
                        {s.num}
                      </span>
                      <span style={{
                        fontSize: '0.95rem', fontWeight: isActive ? 600 : 400,
                        fontFamily: "'Noto Sans Arabic', system-ui, sans-serif",
                        color: isActive ? '#F5F7FA' : '#94A3B8',
                      }}>
                        {s.label}
                      </span>
                    </button>
                  )
                })}

                {/* Mobile progress bar */}
                <div style={{
                  marginTop: '1rem', padding: '0.75rem 1rem',
                  borderRadius: '0.625rem',
                  backgroundColor: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  display: 'flex', alignItems: 'center', gap: '0.75rem',
                }}>
                  <div style={{
                    flex: 1, height: 3, borderRadius: 2,
                    backgroundColor: 'rgba(255,255,255,0.06)',
                    overflow: 'hidden',
                  }}>
                    <div style={{
                      height: '100%', borderRadius: 2,
                      backgroundColor: '#C4FA00',
                      width: `${((activeIdx + 1) / sections.length) * 100}%`,
                      transition: 'width 0.4s ease',
                    }} />
                  </div>
                  <span style={{
                    fontSize: '0.75rem', fontWeight: 600,
                    fontFamily: "'Noto Sans Arabic', monospace",
                    color: '#64748B', flexShrink: 0,
                  }}>
                    <span style={{ color: '#C4FA00' }}>{sections[activeIdx].num}</span>
                    {' / 10'}
                  </span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  )
}
