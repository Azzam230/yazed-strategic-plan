import { motion } from 'framer-motion'
import { ArrowDown, Scale, Shield, TrendingUp } from 'lucide-react'

export default function Hero() {
  return (
    <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', backgroundColor: '#000' }}>
      {/* Background effects */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <div className="animate-float" style={{ position: 'absolute', top: '25%', right: '25%', width: '500px', height: '500px', borderRadius: '50%', background: 'rgba(196,250,0,0.06)', filter: 'blur(120px)' }} />
        <div className="animate-float-delay" style={{ position: 'absolute', bottom: '25%', left: '25%', width: '400px', height: '400px', borderRadius: '50%', background: 'rgba(196,250,0,0.04)', filter: 'blur(100px)' }} />
        {/* Grid dots */}
        <div style={{ position: 'absolute', inset: 0, opacity: 0.03, backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(196,250,0,0.4) 1px, transparent 0)', backgroundSize: '48px 48px' }} />
      </div>

      <div style={{ position: 'relative', zIndex: 10, width: '100%', maxWidth: '80rem', marginInline: 'auto', paddingInline: '1rem', paddingTop: '6rem', paddingBottom: '4rem', textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            padding: '0.5rem 1rem', borderRadius: '9999px',
            backgroundColor: 'rgba(196,250,0,0.1)', border: '1px solid rgba(196,250,0,0.2)',
            marginBottom: '2rem',
          }}
        >
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#C4FA00', animation: 'pulse 2s infinite' }} />
          <span style={{ color: '#C4FA00', fontSize: '0.875rem', fontWeight: 600 }}>الخطة الاستراتيجية 2026/2027</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontSize: 'clamp(2.25rem, 7vw, 5rem)',
            fontWeight: 900,
            fontFamily: 'var(--font-display)',
            lineHeight: 1.1,
            marginBottom: '1.5rem',
            color: '#FFFFFF',
          }}
        >
          الخطة التسويقية
          <br />
          <span className="text-gradient">المتكاملة</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          style={{
            fontSize: 'clamp(1rem, 2vw, 1.25rem)',
            color: '#9CA3AF',
            maxWidth: '48rem',
            marginInline: 'auto',
            marginBottom: '3rem',
            lineHeight: 1.7,
          }}
        >
          خطة استراتيجية شاملة لمكتب المحامي يزيد اليوبي للمحاماة والاستشارات القانونية
          <br />
          لترسيخ المكانة كعلامة قانونية مرجعية وتحقيق نمو مستدام
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', marginBottom: '4rem' }}
        >
          <a
            href="#cta"
            style={{
              padding: '1rem 2rem', backgroundColor: '#C4FA00', color: '#000',
              fontWeight: 700, fontSize: '1.125rem', borderRadius: '9999px',
              textDecoration: 'none', transition: 'all 0.3s', boxShadow: '0 10px 30px rgba(196,250,0,0.25)',
            }}
          >
            ابدأ التنفيذ الآن
          </a>
          <a
            href="#summary"
            style={{
              padding: '1rem 2rem', border: '1px solid #1C1C1C', color: '#FFF',
              fontWeight: 600, fontSize: '1.125rem', borderRadius: '9999px',
              textDecoration: 'none', transition: 'all 0.3s',
            }}
          >
            استعرض الخطة
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', maxWidth: '40rem', marginInline: 'auto' }}
        >
          {[
            { icon: Scale, label: 'منطقة جدة والغرب', sub: 'الاستهداف الجغرافي' },
            { icon: Shield, label: 'B2C + B2B', sub: 'قطاعات مزدوجة' },
            { icon: TrendingUp, label: 'ROAS 5x+', sub: 'الهدف المالي' },
          ].map((item, i) => (
            <div key={i} className="glass-dark" style={{ borderRadius: '1rem', padding: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ width: '2.5rem', height: '2.5rem', borderRadius: '0.75rem', backgroundColor: 'rgba(196,250,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <item.icon style={{ width: '1.25rem', height: '1.25rem', color: '#C4FA00' }} />
              </div>
              <div style={{ textAlign: 'start' }}>
                <div style={{ fontSize: '0.875rem', fontWeight: 700, color: '#FFF' }}>{item.label}</div>
                <div style={{ fontSize: '0.75rem', color: '#6B7280' }}>{item.sub}</div>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          style={{ marginTop: '4rem' }}
        >
          <a href="#summary" style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', color: '#6B7280', textDecoration: 'none' }}>
            <span style={{ fontSize: '0.75rem', marginBottom: '0.5rem' }}>اكتشف المزيد</span>
            <ArrowDown style={{ width: '1.25rem', height: '1.25rem', animation: 'bounce 1s infinite' }} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
