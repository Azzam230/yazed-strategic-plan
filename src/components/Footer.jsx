import AnimatedSection from './AnimatedSection'
import { Scale, ArrowUp, Phone, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <section id="cta" className="section-padding" style={{ backgroundColor: '#000', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <div style={{ position: 'absolute', top: '25%', right: '25%', width: '500px', height: '500px', borderRadius: '50%', background: 'rgba(196,250,0,0.06)', filter: 'blur(120px)' }} />
        <div style={{ position: 'absolute', bottom: '25%', left: '25%', width: '400px', height: '400px', borderRadius: '50%', background: 'rgba(196,250,0,0.04)', filter: 'blur(100px)' }} />
      </div>

      <div className="section-container" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
        <AnimatedSection>
          <span style={{ display: 'inline-block', padding: '0.375rem 1rem', borderRadius: '9999px', backgroundColor: 'rgba(196,250,0,0.1)', border: '1px solid rgba(196,250,0,0.2)', color: '#C4FA00', fontSize: '0.875rem', fontWeight: 600, marginBottom: '1.5rem' }}>
            ابدأ التنفيذ
          </span>
          <h2 style={{ fontSize: 'clamp(1.875rem, 5vw, 3.75rem)', fontWeight: 900, fontFamily: 'var(--font-display)', color: '#FFF', marginBottom: '1.5rem', lineHeight: 1.2 }}>
            جاهز لتحقيق
            <br />
            <span className="text-gradient">النمو المستدام؟</span>
          </h2>
          <p style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', color: '#9CA3AF', maxWidth: '40rem', marginInline: 'auto', marginBottom: '2.5rem', lineHeight: 1.7 }}>
            الخطوة الأولى هي تفعيل الحسابات وبدء إنتاج المحتوى. الخطة جاهزة، المحتوى مصمم، والاستراتيجية محكمة.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', marginBottom: '4rem' }}>
            <a href="https://wa.me/966500000000" target="_blank" rel="noopener noreferrer" style={{ padding: '1rem 2rem', backgroundColor: '#C4FA00', color: '#000', fontWeight: 700, fontSize: '1.125rem', borderRadius: '9999px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', transition: 'all 0.3s', boxShadow: '0 10px 30px rgba(196,250,0,0.25)' }}>
              <Phone style={{ width: '1.25rem', height: '1.25rem' }} />
              تواصل عبر الواتساب
            </a>
            <a href="mailto:info@yazeedalyoubi.sa" style={{ padding: '1rem 2rem', border: '1px solid #1C1C1C', color: '#FFF', fontWeight: 600, fontSize: '1.125rem', borderRadius: '9999px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', transition: 'all 0.3s' }}>
              <Mail style={{ width: '1.25rem', height: '1.25rem' }} />
              info@yazeedalyoubi.sa
            </a>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="glass-dark" style={{ borderRadius: '1.5rem', padding: 'clamp(2rem, 4vw, 3rem)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{ width: '3rem', height: '3rem', borderRadius: '0.75rem', backgroundColor: 'rgba(196,250,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Scale style={{ width: '1.5rem', height: '1.5rem', color: '#C4FA00' }} />
                </div>
                <h4 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#FFF', fontFamily: 'var(--font-display)' }}>مكتب يزيد اليوبي</h4>
                <p style={{ fontSize: '0.875rem', color: '#6B7280' }}>للمحاماة والاستشارات القانونية</p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{ width: '3rem', height: '3rem', borderRadius: '0.75rem', backgroundColor: 'rgba(196,250,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <MapPin style={{ width: '1.5rem', height: '1.5rem', color: '#C4FA00' }} />
                </div>
                <p style={{ fontSize: '0.875rem', color: '#9CA3AF' }}>جدة، المملكة العربية السعودية</p>
                <p style={{ fontSize: '0.75rem', color: '#6B7280' }}>المنطقة الغربية</p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{ width: '3rem', height: '3rem', borderRadius: '0.75rem', backgroundColor: 'rgba(196,250,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Phone style={{ width: '1.5rem', height: '1.5rem', color: '#C4FA00' }} />
                </div>
                <p style={{ fontSize: '0.875rem', color: '#9CA3AF' }}>واتساب مباشر</p>
                <p style={{ fontSize: '0.75rem', color: '#6B7280' }}>خيارات سداد ميسرة</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <div style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid #1C1C1C', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
          <p style={{ fontSize: '0.875rem', color: '#6B7280' }}>
            &copy; 2026 مكتب المحامي يزيد اليوبي. جميع الحقوق محفوظة.
          </p>
          <p style={{ fontSize: '0.75rem', color: '#4B5563' }}>
            الخطة الاستراتيجية والتسويقية المتكاملة | الإصدار 1.0 التنفيذي
          </p>
        </div>
      </div>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        style={{
          position: 'fixed', bottom: '1.5rem', left: '1.5rem',
          width: '3rem', height: '3rem', borderRadius: '50%',
          backgroundColor: '#C4FA00', color: '#000',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          border: 'none', cursor: 'pointer', zIndex: 40,
          boxShadow: '0 4px 20px rgba(196,250,0,0.3)',
        }}
      >
        <ArrowUp style={{ width: '1.25rem', height: '1.25rem' }} />
      </button>
    </section>
  )
}
