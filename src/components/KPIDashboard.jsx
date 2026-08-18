import AnimatedSection from './AnimatedSection'
import { Eye, MousePointer, DollarSign } from 'lucide-react'

const kpiCategories = [
  {
    title: 'الأداء العضوي',
    titleEn: 'Organic',
    icon: Eye,
    kpis: [
      { metric: 'إجمالي الوصول', target: '+150,000 مشاهدة/شهر' },
      { metric: 'معدل احتفاظ الفيديو', target: '> 45% من المدة' },
      { metric: 'زيارات الملف الشخصي', target: '+5,000 زيارة/شهر' },
      { metric: 'نمو المتابعين', target: '+1,200 متابع/شهر' },
    ],
  },
  {
    title: 'الأداء الإعلاني',
    titleEn: 'Paid',
    icon: MousePointer,
    kpis: [
      { metric: 'تكلفة العميل B2C', target: '35-65 SAR' },
      { metric: 'تكلفة العميل B2B', target: '120-250 SAR' },
      { metric: 'نسبة العملاء المؤهلين', target: '> 60%' },
      { metric: 'معدل النقر CTR', target: '> 1.8%' },
    ],
  },
  {
    title: 'الأداء المالي',
    titleEn: 'Financial',
    icon: DollarSign,
    kpis: [
      { metric: 'التحويل لاستشارة', target: '> 25%' },
      { metric: 'تكلفة الاستحواذ CAC', target: '10-15% من العقد' },
      { metric: 'العائد الإعلاني ROAS', target: '> 4x إلى 6x' },
    ],
  },
]

export default function KPIDashboard() {
  return (
    <section id="kpi" className="section-padding" style={{ backgroundColor: '#000000' }}>
      <div className="section-container">
        <AnimatedSection>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="accent-line" style={{ marginInline: 'auto', marginBottom: '1rem' }} />
            <h2 style={{
              fontSize: 'clamp(1.875rem, 4vw, 3rem)', fontWeight: 800,
              color: '#FFFFFF', lineHeight: 1.2, marginBottom: '0.75rem',
            }}>
              مؤشرات الأداء الرئيسية
            </h2>
            <p style={{
              fontSize: 'clamp(0.95rem, 2vw, 1.1rem)', color: '#A0A0A0',
              maxWidth: '48rem', marginInline: 'auto', lineHeight: 1.7,
            }}>
              KPIs واضحة وقابلة للقياس لضمان تتبع النجاح
            </p>
          </div>
        </AnimatedSection>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.25rem' }}>
          {kpiCategories.map((cat, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="glass" style={{
                borderRadius: '1.5rem', padding: 'clamp(1.5rem, 3vw, 2rem)',
                height: '100%', transition: 'border-color 0.3s',
              }}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                  <div style={{
                    width: '2.75rem', height: '2.75rem', borderRadius: '0.75rem',
                    backgroundColor: 'rgba(255,255,255,0.06)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <cat.icon style={{ width: '1.25rem', height: '1.25rem', color: '#FFFFFF' }} />
                  </div>
                  <div>
                    <h3 style={{
                      fontSize: '1.125rem', fontWeight: 700,
                      color: '#FFFFFF',
                    }}>{cat.title}</h3>
                    <span style={{ fontSize: '0.7rem', color: '#666666', fontWeight: 500 }}>{cat.titleEn}</span>
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  {cat.kpis.map((kpi, j) => (
                    <div key={j} style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                      padding: '0.75rem 0',
                      borderBottom: j < cat.kpis.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none',
                    }}>
                      <span style={{ fontSize: '0.875rem', color: '#A0A0A0' }}>{kpi.metric}</span>
                      <span style={{ fontSize: '0.875rem', fontWeight: 700, color: '#FFFFFF' }}>{kpi.target}</span>
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
