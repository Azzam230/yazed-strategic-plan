import AnimatedSection from './AnimatedSection'
import SectionHeader from './SectionHeader'
import { Target, Users, Building2, ArrowLeft } from 'lucide-react'

export default function ExecutiveSummary() {
  return (
    <section id="summary" className="section-padding" style={{ backgroundColor: '#000', position: 'relative' }}>
      <div className="section-container">
        <SectionHeader
          badge="الملخص التنفيذي"
          title="التحول من النص القانوني إلى حلول حقيقية"
          subtitle="تحويل الخطاب القانوني التقليدي إلى خطاب موجه لنقاط الألم الحقيقية لدى العملاء"
        />

        <AnimatedSection>
          <div className="glass-dark" style={{ borderRadius: '1.5rem', padding: 'clamp(1.5rem, 3vw, 2.5rem)', marginBottom: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1.5rem' }}>
              <div style={{ width: '3rem', height: '3rem', borderRadius: '1rem', backgroundColor: 'rgba(196,250,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Target style={{ width: '1.5rem', height: '1.5rem', color: '#C4FA00' }} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#FFF', marginBottom: '0.5rem', fontFamily: 'var(--font-display)' }}>العمود الفقري للاستراتيجية</h3>
                <p style={{ color: '#9CA3AF', lineHeight: 1.7, fontSize: '0.95rem' }}>
                  نموذج التحويل المتكامل الذي يربط بين الوصول العضوي والاستحواذ على العملاء المحتملين وتحقيق الإيرادات المباشرة
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
              {['Reach', 'Trust', 'Leads', 'Consultations', 'Contracts', 'Revenue'].map((step, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <div style={{
                    padding: '0.625rem 1rem', borderRadius: '0.75rem', fontWeight: 700, fontSize: '0.875rem',
                    backgroundColor: (i === 0 || i === 5) ? '#C4FA00' : '#111111',
                    color: (i === 0 || i === 5) ? '#000' : '#FFF',
                    border: (i === 0 || i === 5) ? 'none' : '1px solid #1C1C1C',
                  }}>
                    {step}
                  </div>
                  {i < 5 && <ArrowLeft style={{ width: '1rem', height: '1rem', color: 'rgba(196,250,0,0.4)', display: 'none' }} className="md-block" />}
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
          <AnimatedSection delay={0.1}>
            <div className="glass-dark" style={{ borderRadius: '1.5rem', padding: 'clamp(1.5rem, 3vw, 2rem)', height: '100%' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                <div style={{ width: '2.75rem', height: '2.75rem', borderRadius: '0.75rem', backgroundColor: 'rgba(196,250,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Users style={{ width: '1.25rem', height: '1.25rem', color: '#C4FA00' }} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#C4FA00', fontWeight: 600 }}>قطاع B2C</div>
                  <div style={{ fontSize: '1.125rem', fontWeight: 700, color: '#FFF', fontFamily: 'var(--font-display)' }}>الأفراد</div>
                </div>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {['القضايا العقارية والنزاعات المالية', 'التعويضات والقضايا العمالية', 'الأحوال الشخصية والتنفيذ', 'عرض دراسات الحالة + مرونة السداد'].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#C4FA00', marginTop: '8px', flexShrink: 0 }} />
                    <span style={{ color: '#9CA3AF', fontSize: '0.875rem', lineHeight: 1.6 }}>{item}</span>
                  </li>
                ))}
              </ul>
              <div style={{ marginTop: '1.5rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {['Instagram', 'TikTok', 'X'].map((p) => (
                  <span key={p} style={{ padding: '0.25rem 0.75rem', borderRadius: '9999px', backgroundColor: '#111111', border: '1px solid #1C1C1C', fontSize: '0.75rem', color: '#6B7280' }}>{p}</span>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="glass-dark" style={{ borderRadius: '1.5rem', padding: 'clamp(1.5rem, 3vw, 2rem)', height: '100%' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                <div style={{ width: '2.75rem', height: '2.75rem', borderRadius: '0.75rem', backgroundColor: 'rgba(196,250,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Building2 style={{ width: '1.25rem', height: '1.25rem', color: '#C4FA00' }} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#C4FA00', fontWeight: 600 }}>قطاع B2B</div>
                  <div style={{ fontSize: '1.125rem', fontWeight: 700, color: '#FFF', fontFamily: 'var(--font-display)' }}>الشركات والأعمال</div>
                </div>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {['حوكمة الشركات وصياغة العقود', 'النزاعات التجارية والشراكات', 'اللوائح الداخلية وحماية المنشآت', 'الوقاية من المخاطر + العمق التنفيذي'].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#C4FA00', marginTop: '8px', flexShrink: 0 }} />
                    <span style={{ color: '#9CA3AF', fontSize: '0.875rem', lineHeight: 1.6 }}>{item}</span>
                  </li>
                ))}
              </ul>
              <div style={{ marginTop: '1.5rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {['LinkedIn', 'X'].map((p) => (
                  <span key={p} style={{ padding: '0.25rem 0.75rem', borderRadius: '9999px', backgroundColor: '#111111', border: '1px solid #1C1C1C', fontSize: '0.75rem', color: '#6B7280' }}>{p}</span>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
