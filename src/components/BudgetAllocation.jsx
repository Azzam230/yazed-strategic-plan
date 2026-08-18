import AnimatedSection from './AnimatedSection'
import SectionHeader from './SectionHeader'
import { DollarSign, Users } from 'lucide-react'

const scenarios = [
  { label: 'السيناريو أ', amount: '5,000', currency: 'SAR/شهرياً', leads: '40-70', allocation: [{ label: 'B2C Ads', pct: 60, amount: '3,000' }, { label: 'B2B Ads', pct: 20, amount: '1,000' }, { label: 'Retargeting', pct: 10, amount: '500' }, { label: 'Creative Testing', pct: 10, amount: '500' }], featured: false },
  { label: 'السيناريو ب', amount: '10,000', currency: 'SAR/شهرياً', leads: '90-150', allocation: [{ label: 'B2C Ads', pct: 55, amount: '5,500' }, { label: 'B2B Ads', pct: 25, amount: '2,500' }, { label: 'Retargeting', pct: 10, amount: '1,000' }, { label: 'Creative Testing', pct: 10, amount: '1,000' }], featured: true },
  { label: 'السيناريو ج', amount: '15,000', currency: 'SAR/شهرياً', leads: '160-250', allocation: [{ label: 'B2C Ads', pct: 50, amount: '7,500' }, { label: 'B2B Ads', pct: 30, amount: '4,500' }, { label: 'Retargeting', pct: 10, amount: '1,500' }, { label: 'Creative Testing', pct: 10, amount: '1,500' }], featured: false },
]

export default function BudgetAllocation() {
  return (
    <section id="budget" className="section-padding" style={{ backgroundColor: '#000', position: 'relative' }}>
      <div className="section-container">
        <SectionHeader badge="تخصيص الميزانيات" title="ثلاثة سيناريوهات للنمو" subtitle="تخصيص مرن للميزانيات مع مراجعة أسبوعية لإعادة التوزيع" />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.25rem' }}>
          {scenarios.map((s, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div style={{
                borderRadius: '1.5rem', padding: 'clamp(1.5rem, 3vw, 2rem)', height: '100%', transition: 'all 0.3s',
                backgroundColor: s.featured ? '#C4FA00' : 'rgba(255,255,255,0.04)',
                backdropFilter: 'blur(20px)',
                border: s.featured ? 'none' : '1px solid rgba(255,255,255,0.08)',
              }}>
                <div style={{ marginBottom: '1.5rem' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: s.featured ? 'rgba(0,0,0,0.5)' : '#6B7280' }}>{s.label}</span>
                  <div style={{ fontSize: '2rem', fontWeight: 900, fontFamily: 'var(--font-display)', marginTop: '0.25rem', color: s.featured ? '#000' : '#FFF' }}>
                    {s.amount} <span style={{ fontSize: '1rem' }}>{s.currency}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.5rem', color: s.featured ? 'rgba(0,0,0,0.6)' : '#9CA3AF' }}>
                    <Users style={{ width: '1rem', height: '1rem' }} />
                    <span style={{ fontSize: '0.875rem', fontWeight: 500 }}>{s.leads} Lead/شهر</span>
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {s.allocation.map((a, j) => (
                    <div key={j}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.25rem' }}>
                        <span style={{ fontSize: '0.875rem', color: s.featured ? 'rgba(0,0,0,0.7)' : '#9CA3AF' }}>{a.label}</span>
                        <span style={{ fontSize: '0.875rem', fontWeight: 700, color: s.featured ? '#000' : '#FFF' }}>{a.amount} SAR</span>
                      </div>
                      <div style={{ height: '0.5rem', borderRadius: '9999px', backgroundColor: s.featured ? 'rgba(0,0,0,0.1)' : '#111111' }}>
                        <div style={{ height: '100%', borderRadius: '9999px', backgroundColor: s.featured ? 'rgba(0,0,0,0.3)' : 'rgba(196,250,0,0.5)', width: `${a.pct}%`, transition: 'width 0.5s ease' }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.3}>
          <div style={{ marginTop: '2rem', display: 'flex', alignItems: 'flex-start', gap: '0.75rem', padding: '1.25rem', borderRadius: '1rem', backgroundColor: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
            <DollarSign style={{ width: '1.25rem', height: '1.25rem', color: '#C4FA00', flexShrink: 0, marginTop: '2px' }} />
            <p style={{ color: '#9CA3AF', fontSize: '0.875rem', lineHeight: 1.7 }}>
              <span style={{ color: '#C4FA00', fontWeight: 600 }}>قاعدة إعادة التوزيع:</span>{' '}
              مراجعة أداء الإعلانات أسبوعياً. إذا حققت حملات B2C العقارية تكلفة عميل أقل وجودة أعلى، يتم تحويل 20% من ميزانية الإعلانات الأقل أداءً فوراً.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
