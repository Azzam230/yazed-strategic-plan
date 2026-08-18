import AnimatedSection from './AnimatedSection'
import SectionHeader from './SectionHeader'
import { DollarSign, TrendingUp } from 'lucide-react'

const scenarios = [
  {
    total: '5,000', currency: 'SAR/شهر', featured: false,
    items: [
      { label: 'B2C', amount: '3,000', pct: 60 },
      { label: 'B2B', amount: '1,500', pct: 30 },
      { label: 'إعادة الاستهداف', amount: '500', pct: 10 },
    ],
  },
  {
    total: '10,000', currency: 'SAR/شهر', featured: true,
    items: [
      { label: 'B2C', amount: '4,000', pct: 40 },
      { label: 'B2B', amount: '2,000', pct: 20 },
      { label: 'إعادة الاستهداف', amount: '1,000', pct: 10 },
      { label: 'الاختبار والتوسيع', amount: '3,000', pct: 30 },
    ],
  },
  {
    total: '15,000', currency: 'SAR/شهر', featured: false,
    items: [
      { label: 'B2C', amount: '6,000', pct: 40 },
      { label: 'B2B', amount: '3,000', pct: 20 },
      { label: 'إعادة الاستهداف', amount: '1,500', pct: 10 },
      { label: 'الاختبار والتوسيع', amount: '4,500', pct: 30 },
    ],
  },
]

export default function Budget() {
  return (
    <section id="kpi" className="section-padding" style={{ backgroundColor: '#07111F', position: 'relative' }}>
      <div className="section-container">
        <SectionHeader
          badge="الميزانيات"
          title="تخصيص الميزانيات"
          subtitle="التوزيع الأولي — خاضع للتحسين بناءً على الأداء الفعلي"
        />

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '1.25rem', marginBottom: '2rem',
        }}>
          {scenarios.map((s, i) => (
            <AnimatedSection key={i} delay={i * 0.12}>
              <div style={{
                borderRadius: '1.5rem', padding: 'clamp(1.5rem, 3vw, 2rem)', height: '100%',
                transition: 'all 0.3s',
                backgroundColor: s.featured ? '#C4FA00' : 'rgba(255,255,255,0.04)',
                backdropFilter: 'blur(20px)',
                border: s.featured ? 'none' : '1px solid rgba(255,255,255,0.06)',
              }}>
                {s.featured && (
                  <div style={{
                    display: 'inline-flex', alignItems: 'center', gap: '0.375rem',
                    padding: '0.25rem 0.625rem', borderRadius: '9999px',
                    backgroundColor: 'rgba(0,0,0,0.1)', marginBottom: '0.75rem',
                    fontSize: '0.65rem', fontWeight: 700, color: 'rgba(0,0,0,0.5)',
                  }}>
                    <TrendingUp style={{ width: '0.75rem', height: '0.75rem' }} />
                    موصى به
                  </div>
                )}

                <div style={{
                  fontSize: '2.25rem', fontWeight: 900,
                  fontFamily: 'var(--font-display)', lineHeight: 1.1,
                  color: s.featured ? '#07111F' : '#F5F7FA',
                  marginBottom: '0.25rem',
                }}>
                  {s.total}
                </div>
                <div style={{
                  fontSize: '0.875rem', fontWeight: 500,
                  color: s.featured ? 'rgba(0,0,0,0.5)' : '#64748B',
                  marginBottom: '1.5rem',
                }}>{s.currency}</div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                  {s.items.map((item, j) => (
                    <div key={j}>
                      <div style={{
                        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                        marginBottom: '0.375rem',
                      }}>
                        <span style={{
                          fontSize: '0.85rem', fontWeight: 500,
                          color: s.featured ? 'rgba(0,0,0,0.7)' : '#94A3B8',
                        }}>{item.label}</span>
                        <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.375rem' }}>
                          <span style={{
                            fontSize: '0.85rem', fontWeight: 700,
                            color: s.featured ? '#07111F' : '#F5F7FA',
                          }}>{item.amount}</span>
                          <span style={{
                            fontSize: '0.65rem', fontWeight: 600,
                            color: s.featured ? 'rgba(0,0,0,0.4)' : '#64748B',
                          }}>{item.pct}%</span>
                        </div>
                      </div>
                      <div style={{
                        height: '0.5rem', borderRadius: '9999px',
                        backgroundColor: s.featured ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.06)',
                      }}>
                        <div style={{
                          height: '100%', borderRadius: '9999px',
                          backgroundColor: s.featured ? 'rgba(0,0,0,0.25)' : 'rgba(196,250,0,0.5)',
                          width: `${item.pct}%`, transition: 'width 0.6s ease',
                        }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Note */}
        <AnimatedSection delay={0.4}>
          <div style={{
            display: 'flex', alignItems: 'flex-start', gap: '0.75rem',
            padding: '1.25rem', borderRadius: '1rem',
            backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)',
          }}>
            <DollarSign style={{
              width: '1.25rem', height: '1.25rem', color: '#C4FA00',
              flexShrink: 0, marginTop: '2px',
            }} />
            <p style={{ color: '#94A3B8', fontSize: '0.875rem', lineHeight: 1.7, margin: 0 }}>
              <span style={{ color: '#C4FA00', fontWeight: 600 }}>ملاحظة: </span>
              التوزيع الأولي خاضع للتحسين بناءً على الأداء الفعلي
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
