import AnimatedSection from './AnimatedSection'
import SectionHeader from './SectionHeader'
import { Clock, BarChart3, Zap, CheckCircle2 } from 'lucide-react'

const timeline = [
  { period: 'بعد 30 يوماً', icon: Clock, color: '#3B82F6', items: ['انتظام كامل في النشر (20+ مقطع عالي الجودة)', 'وصول أول رسائل واستفسارات عبر الواتساب', 'تحديد تكلفة دقيقة للعميل المحتمل (CPL Baseline)'] },
  { period: 'بعد 60 يوماً', icon: BarChart3, color: '#C4FA00', items: ['تضاعف معدل التحويل لاستشارات مدفوعة', 'أول عوائد ملموسة من عقود الشركات B2B', 'تجاوز المشاهدات حاجز 200,000 مشاهدة'] },
  { period: 'بعد 90 يوماً', icon: Zap, color: '#A855F7', items: ['ROAS يتجاوز 4x', 'ترسيخ الاسم كمرجع قانوني أول بجدة', 'قاعدة عملاء مستمرة عبر المحتوى العضوي'] },
  { period: 'بعد 6 أشهر', icon: CheckCircle2, color: '#C4FA00', items: ['علامة تجارية قانونية متكاملة بجدة', 'تدفق مستدام من القضايا الكبرى', 'عقود محاماة سنوية + خطة سداد ميسرة'] },
]

export default function SuccessTimeline() {
  return (
    <section className="section-padding" style={{ backgroundColor: '#000', position: 'relative' }}>
      <div className="section-container">
        <SectionHeader badge="ما الذي ينتظرنا" title="كيف تبدو النجاح" subtitle="المؤشرات المستهدافة عبر الفترات الزمنية المختلفة" />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1.25rem' }}>
          {timeline.map((t, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="glass-dark" style={{ borderRadius: '1.5rem', padding: '1.5rem', height: '100%', transition: 'all 0.3s' }}>
                <div style={{ width: '2.75rem', height: '2.75rem', borderRadius: '0.75rem', backgroundColor: `${t.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                  <t.icon style={{ width: '1.25rem', height: '1.25rem', color: t.color }} />
                </div>
                <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#FFF', marginBottom: '1rem', fontFamily: 'var(--font-display)' }}>{t.period}</h3>
                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {t.items.map((item, j) => (
                    <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                      <CheckCircle2 style={{ width: '1rem', height: '1rem', color: '#C4FA00', marginTop: '2px', flexShrink: 0 }} />
                      <span style={{ color: '#9CA3AF', fontSize: '0.875rem', lineHeight: 1.5 }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
