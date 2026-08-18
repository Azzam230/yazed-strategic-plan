import AnimatedSection from './AnimatedSection'
import SectionHeader from './SectionHeader'
import { Eye, MousePointer, DollarSign } from 'lucide-react'

const kpiCategories = [
  { title: 'الأداء العضوي', icon: Eye, kpis: [{ metric: 'إجمالي الوصول', target: '+150,000 مشاهدة/شهر' }, { metric: 'معدل احتفاظ الفيديو', target: '> 45% من المدة' }, { metric: 'زيارات الملف الشخصي', target: '+5,000 زيارة/شهر' }, { metric: 'نمو المتابعين', target: '+1,200 متابع/شهر' }] },
  { title: 'الأداء الإعلاني', icon: MousePointer, kpis: [{ metric: 'تكلفة العميل B2C', target: '35-65 SAR' }, { metric: 'تكلفة العميل B2B', target: '120-250 SAR' }, { metric: 'نسبة العملاء المؤهلين', target: '> 60%' }, { metric: 'معدل النقر CTR', target: '> 1.8%' }] },
  { title: 'الأداء المالي', icon: DollarSign, kpis: [{ metric: 'التحويل لاستشارة', target: '> 25%' }, { metric: 'تكلفة الاستحواذ CAC', target: '10-15% من العقد' }, { metric: 'العائد الإعلاني ROAS', target: '> 4x إلى 6x' }] },
]

export default function KPIDashboard() {
  return (
    <section className="section-padding" style={{ backgroundColor: '#0A0A0A', position: 'relative' }}>
      <div className="section-container">
        <SectionHeader badge="لوحة القياس" title="مؤشرات الأداء الرئيسية" subtitle="KPIs واضحة وقابلة للقياس لضمان تتبع النجاح" dark />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.25rem' }}>
          {kpiCategories.map((cat, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="glass-light" style={{ borderRadius: '1.5rem', padding: 'clamp(1.5rem, 3vw, 2rem)', height: '100%', transition: 'all 0.3s' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                  <div style={{ width: '2.75rem', height: '2.75rem', borderRadius: '0.75rem', backgroundColor: '#C4FA00', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <cat.icon style={{ width: '1.25rem', height: '1.25rem', color: '#000' }} />
                  </div>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#111111', fontFamily: 'var(--font-display)' }}>{cat.title}</h3>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  {cat.kpis.map((kpi, j) => (
                    <div key={j} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.75rem 0', borderBottom: j < cat.kpis.length - 1 ? '1px solid #F5F5F7' : 'none' }}>
                      <span style={{ fontSize: '0.875rem', color: '#4B5563' }}>{kpi.metric}</span>
                      <span style={{ fontSize: '0.875rem', fontWeight: 700, color: '#C4FA00' }}>{kpi.target}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
