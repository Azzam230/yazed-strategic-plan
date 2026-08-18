import { motion } from 'framer-motion'
import { ChevronDown, Eye, UserCheck, ArrowLeftRight } from 'lucide-react'

const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, delay, ease: 'easeOut' },
})

const metrics = [
  {
    en: 'ORGANIC',
    label: 'الوصول والوعي',
    sub: 'Reach & Awareness',
    icon: Eye,
  },
  {
    en: 'LEADS',
    label: 'عملاء مؤهلين',
    sub: 'Qualified Leads',
    icon: UserCheck,
  },
  {
    en: 'CONVERSION',
    label: 'استشارات → عملاء',
    sub: 'Consultations → Clients',
    icon: ArrowLeftRight,
  },
]

export default function Hero() {
  return (
    <section
      id="strategy"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'clip',
        background: 'radial-gradient(ellipse 70% 60% at 50% 45%, #141414 0%, #0A0A0A 40%, #000000 100%)',
      }}
    >
      <div style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        background: 'radial-gradient(circle at 50% 35%, rgba(255,255,255,0.02) 0%, transparent 60%)',
      }} />

      <div style={{
        position: 'relative',
        zIndex: 10,
        width: '100%',
        maxWidth: '72rem',
        marginInline: 'auto',
        paddingInline: '1.5rem',
        paddingTop: '8rem',
        paddingBottom: '5rem',
        textAlign: 'center',
      }}>
        <motion.h1 {...fadeUp(0.1)} style={{
          fontSize: 'clamp(2.25rem, 6.5vw, 4.5rem)',
          fontWeight: 800,
          fontFamily: "'Noto Sans Arabic', system-ui, sans-serif",
          lineHeight: 1.15,
          color: '#FFFFFF',
          marginBottom: '1.75rem',
          maxWidth: '56rem',
          marginInline: 'auto',
        }}>
          من حساب قانوني
          <br />
          إلى محرك مستمر للثقة والعملاء
        </motion.h1>

        <motion.p {...fadeUp(0.15)} style={{
          fontSize: 'clamp(0.95rem, 1.8vw, 1.2rem)',
          fontFamily: "'Noto Sans Arabic', system-ui, sans-serif",
          color: '#A0A0A0',
          maxWidth: '46rem',
          marginInline: 'auto',
          lineHeight: 1.7,
          marginBottom: '0.75rem',
        }}>
          استراتيجية النمو الرقمي لمكتب المحامي يزيد اليوبي للمحاماة والاستشارات القانونية
        </motion.p>

        <motion.p {...fadeUp(0.2)} style={{
          fontSize: '0.8rem',
          fontFamily: "'Noto Sans Arabic', system-ui, sans-serif",
          color: '#999999',
          letterSpacing: '0.04em',
          marginBottom: '3.5rem',
        }}>
          جدة — المملكة العربية السعودية
        </motion.p>

        <motion.div {...fadeUp(0.25)} style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1rem',
          maxWidth: '52rem',
          marginInline: 'auto',
          marginBottom: '2rem',
        }}>
          {metrics.map((m, i) => (
            <motion.div
              key={m.en}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.3 + i * 0.05, ease: 'easeOut' }}
              style={{
                padding: '1.25rem 1.5rem', borderRadius: '0.875rem',
                backgroundColor: 'rgba(20,20,20,0.6)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255,255,255,0.08)',
                display: 'flex', flexDirection: 'column', alignItems: 'flex-start',
                gap: '0.5rem', textAlign: 'start',
                transition: 'border-color 0.3s, background-color 0.3s',
                cursor: 'default',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'
                e.currentTarget.style.backgroundColor = 'rgba(20,20,20,0.8)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
                e.currentTarget.style.backgroundColor = 'rgba(20,20,20,0.6)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <div style={{
                  width: '2rem', height: '2rem', borderRadius: '0.5rem',
                  backgroundColor: 'rgba(255,255,255,0.06)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <m.icon style={{ width: '1rem', height: '1rem', color: '#FFFFFF' }} />
                </div>
                <span style={{
                  fontSize: '0.6rem', fontWeight: 700,
                  fontFamily: "monospace, 'Noto Sans Arabic'",
                  color: '#FFFFFF', letterSpacing: '0.12em',
                }}>
                  {m.en}
                </span>
              </div>
              <div style={{
                fontSize: '0.95rem', fontWeight: 600,
                fontFamily: "'Noto Sans Arabic', system-ui, sans-serif",
                color: '#FFFFFF',
              }}>
                {m.label}
              </div>
              <div style={{
                fontSize: '0.7rem', color: '#999999',
                fontFamily: "'Noto Sans Arabic', system-ui, sans-serif",
              }}>
                {m.sub}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.p {...fadeUp(0.5)} style={{
          fontSize: '0.75rem', fontWeight: 500,
          fontFamily: "'Noto Sans Arabic', system-ui, sans-serif",
          color: '#999999', letterSpacing: '0.06em',
          textTransform: 'uppercase',
          marginBottom: '2.5rem',
        }}>
          Organic Growth + Performance Marketing
        </motion.p>

        <motion.div {...fadeUp(0.55)}>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              const el = document.getElementById('problem')
              if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }}
            style={{
              padding: '0.875rem 2.25rem',
              backgroundColor: '#FFFFFF', color: '#000000',
              fontWeight: 700, fontSize: '0.95rem',
              fontFamily: "'Noto Sans Arabic', system-ui, sans-serif",
              borderRadius: '9999px', border: 'none', cursor: 'pointer',
              boxShadow: '0 8px 32px rgba(255,255,255,0.1)',
              transition: 'box-shadow 0.3s',
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            }}
            onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 12px 40px rgba(255,255,255,0.2)'}
            onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 8px 32px rgba(255,255,255,0.1)'}
          >
            استكشف الاستراتيجية
            <ChevronDown style={{ width: '1rem', height: '1rem', transform: 'rotate(90deg)' }} />
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          style={{ marginTop: '4rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown style={{ width: '1.25rem', height: '1.25rem', color: '#999999' }} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
