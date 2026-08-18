import AnimatedSection from './AnimatedSection'
import { Rocket, Settings, TrendingUp, CheckCircle2, Clock } from 'lucide-react'

const phases = [
  {
    icon: Rocket,
    month: 'الشهر الأول',
    monthEn: 'Month 1',
    title: 'التأسيس والاختبار',
    tasks: ['تحسين بيئة الحسابات (Bio, Highlights)', 'يوم التصوير الأول (20 مقطع)', 'إطلاق حملات B2C و B2B المبدئية', 'اختبار 4 أنواع من الـ Hooks', 'ضبط الرد الآلي للواتساب'],
    kpi: 'تحديد CPL Baseline',
  },
  {
    icon: Settings,
    month: 'الشهر الثاني',
    monthEn: 'Month 2',
    title: 'التحسين والتوسع',
    tasks: ['التركيز على الركائز الأكثر نجاحاً', 'إطلاق حملات إعادة الاستهداف Retargeting', 'إيقاف الإعلانات الضعيفة', 'تجهيز Case Studies مكثفة', 'رفع معدل التحويل لاستشارات مدفوعة'],
    kpi: 'Consultation Rate > 25%',
  },
  {
    icon: TrendingUp,
    month: 'الشهر الثالث',
    monthEn: 'Month 3',
    title: 'التحويل والمضاعفة',
    tasks: ['التوسع في حملات B2B على LinkedIn', 'بناء شراكات مع منصات أعمال', 'مضاعفة الميزانية على الزوايا الأعلى', 'تثبيت عوائد عقود المحاماة السنوية', 'الوصول لـ ROAS يستهدف 5x'],
    kpi: 'ROAS > 5x',
  },
]

export default function Roadmap() {
  return (
    <section id="roadmap" className="section-padding" style={{ backgroundColor: '#07111F' }}>
      <div className="section-container">
        <AnimatedSection>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="accent-line" style={{ marginInline: 'auto', marginBottom: '1rem' }} />
            <h2 style={{
              fontSize: 'clamp(1.875rem, 4vw, 3rem)', fontWeight: 800,
              fontFamily: 'var(--font-display)', color: '#F5F7FA', lineHeight: 1.2, marginBottom: '0.75rem',
            }}>
              خطة 90 يوماً للتنفيذ
            </h2>
            <p style={{
              fontSize: 'clamp(0.95rem, 2vw, 1.1rem)', color: '#94A3B8',
              maxWidth: '48rem', marginInline: 'auto', lineHeight: 1.7,
            }}>
              من التأسيس والاختبار إلى التحويل المستدام ومضاعفة النتائج
            </p>
          </div>
        </AnimatedSection>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {phases.map((phase, i) => (
            <AnimatedSection key={i} delay={i * 0.15}>
              <div className="glass" style={{
                borderRadius: '1.5rem', padding: 'clamp(1.5rem, 3vw, 2rem)',
                transition: 'border-color 0.3s',
              }}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = 'rgba(196,250,0,0.2)'}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                  <div style={{
                    width: '2.75rem', height: '2.75rem', borderRadius: '0.75rem',
                    backgroundColor: 'rgba(196,250,0,0.1)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <phase.icon style={{ width: '1.25rem', height: '1.25rem', color: '#C4FA00' }} />
                  </div>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ fontSize: '0.75rem', color: '#C4FA00', fontWeight: 700 }}>{phase.month}</span>
                      <span style={{ fontSize: '0.65rem', color: '#64748B' }}>{phase.monthEn}</span>
                    </div>
                    <h3 style={{
                      fontSize: '1.125rem', fontWeight: 700,
                      fontFamily: 'var(--font-display)', color: '#F5F7FA',
                    }}>{phase.title}</h3>
                  </div>
                </div>
                <div style={{
                  display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
                  gap: '0.625rem', marginBottom: '1.25rem',
                }}>
                  {phase.tasks.map((task, j) => (
                    <div key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                      <CheckCircle2 style={{ width: '1rem', height: '1rem', color: '#C4FA00', marginTop: '2px', flexShrink: 0 }} />
                      <span style={{ color: '#94A3B8', fontSize: '0.875rem', lineHeight: 1.5 }}>{task}</span>
                    </div>
                  ))}
                </div>
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                  padding: '0.5rem 0.75rem', borderRadius: '0.75rem',
                  backgroundColor: 'rgba(196,250,0,0.08)',
                  border: '1px solid rgba(196,250,0,0.15)',
                }}>
                  <Clock style={{ width: '1rem', height: '1rem', color: '#C4FA00' }} />
                  <span style={{ fontSize: '0.875rem', fontWeight: 600, color: '#F5F7FA' }}>{phase.kpi}</span>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
