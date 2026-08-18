import AnimatedSection from './AnimatedSection'
import SectionHeader from './SectionHeader'
import { Rocket, Settings, TrendingUp, CheckCircle2, Clock } from 'lucide-react'

const phases = [
  { icon: Rocket, month: 'الشهر الأول', title: 'التأسيس والاختبار', tasks: ['تحسين بيئة الحسابات (Bio, Highlights)', 'يوم التصوير الأول (20 مقطع)', 'إطلاق حملات B2C و B2B المبدئية', 'اختبار 4 أنواع من الـ Hooks', 'ضبط الرد الآلي للواتساب'], kpi: 'تحديد CPL Baseline' },
  { icon: Settings, month: 'الشهر الثاني', title: 'التحسين والتوسع', tasks: ['التركيز على الركائز الأكثر نجاحاً', 'إطلاق حملات إعادة الاستهداف Retargeting', 'إيقاف الإعلانات الضعيفة', 'تجهيز Case Studies مكثفة', 'رفع معدل التحويل لاستشارات مدفوعة'], kpi: 'Consultation Rate > 25%' },
  { icon: TrendingUp, month: 'الشهر الثالث', title: 'التحويل والمضاعفة', tasks: ['التوسع في حملات B2B على LinkedIn', 'بناء شراكات مع منصات أعمال', 'مضاعفة الميزانية على الزوايا الأعلى', 'تثبيت عوائد عقود المحاماة السنوية', 'الوصول لـ ROAS يستهدف 5x'], kpi: 'ROAS > 5x' },
]

export default function Roadmap() {
  return (
    <section id="roadmap" className="section-padding" style={{ backgroundColor: '#0A0A0A', position: 'relative' }}>
      <div className="section-container">
        <SectionHeader badge="خطة التنفيذ" title="خطة 90 يوماً للتنفيذ" subtitle="من التأسيس والاختبار إلى التحويل المستدام ومضاعفة النتائج" dark />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {phases.map((phase, i) => (
            <AnimatedSection key={i} delay={i * 0.15}>
              <div className="glass-light" style={{ borderRadius: '1.5rem', padding: 'clamp(1.5rem, 3vw, 2rem)', transition: 'all 0.3s' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                  <div style={{ width: '2.75rem', height: '2.75rem', borderRadius: '0.75rem', backgroundColor: '#C4FA00', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <phase.icon style={{ width: '1.25rem', height: '1.25rem', color: '#000' }} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.75rem', color: '#C4FA00', fontWeight: 700 }}>{phase.month}</span>
                    <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#111111', fontFamily: 'var(--font-display)' }}>{phase.title}</h3>
                  </div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '0.625rem', marginBottom: '1.25rem' }}>
                  {phase.tasks.map((task, j) => (
                    <div key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                      <CheckCircle2 style={{ width: '1rem', height: '1rem', color: '#C4FA00', marginTop: '2px', flexShrink: 0 }} />
                      <span style={{ color: '#4B5563', fontSize: '0.875rem', lineHeight: 1.5 }}>{task}</span>
                    </div>
                  ))}
                </div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 0.75rem', backgroundColor: 'rgba(196,250,0,0.1)', borderRadius: '0.75rem' }}>
                  <Clock style={{ width: '1rem', height: '1rem', color: '#C4FA00' }} />
                  <span style={{ fontSize: '0.875rem', fontWeight: 600, color: '#111111' }}>{phase.kpi}</span>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
