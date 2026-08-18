import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Scale, Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'المملخص التنفيذي', href: '#summary' },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-surface-dark/80 backdrop-blur-xl border-b border-surface-dark-border'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-brand flex items-center justify-center">
              <Scale className="w-5 h-5 text-surface-dark" />
            </div>
            <div>
              <span className="text-lg font-bold font-[family-name:var(--font-family-display)] text-text-primary">
                يزيد اليوبي
              </span>
              <span className="hidden sm:block text-xs text-text-muted">
                المحاماة والاستشارات القانونية
              </span>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm text-text-secondary hover:text-brand transition-colors rounded-lg hover:bg-brand/5"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="#cta"
              className="px-5 py-2.5 bg-brand text-surface-dark font-semibold text-sm rounded-full hover:bg-brand-light transition-all hover:shadow-lg hover:shadow-brand/20"
            >
              ابدأ الآن
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-text-primary"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-surface-dark/95 backdrop-blur-xl border-b border-surface-dark-border overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 text-text-secondary hover:text-brand hover:bg-brand/5 rounded-xl transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#cta"
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 bg-brand text-surface-dark font-semibold rounded-xl text-center mt-2"
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
