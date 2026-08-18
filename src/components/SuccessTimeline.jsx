import AnimatedSection from './AnimatedSection'
import SectionHeader from './SectionHeader'
import { CheckCircle2, Clock, BarChart3, Zap } from 'lucide-react'

const timeline = [
  {
    period: 'بعد 30 يوماً',
    icon: Clock,
    color: 'bg-blue-500/10 text-blue-400',
    items: [
      'انتظام كامل في النشر (20+ مقطع عالي الجودة)',
      'وصول أول رسائل واستفسارات عبر الواتساب',
      'تحديد تكلفة دقيقة للعميل المحتمل (CPL Baseline)',
    ],
  },
  {
    period: 'بعد 60 يوماً',
    icon: BarChart3,
    color: 'bg-brand/10 text-brand',
    items: [
      'تضاعف معدل التحويل لاستشارات مدفوعة',
      'أول عوائد ملموسة من عقود الشركات B2B',
      'تجاوز المشاهدات حاجز 200,000 مشاهدة',
    ],
  },
  {
    period: 'بعد 90 يوماً',
    icon: Zap,
    color: 'bg-purple-500/10 text-purple-400',
    items: [
      'ROAS يتجاوز 4x',
      'ترسيخ الاسم كمرجع قانوني أول بجدة',
      'قاعدة عملاء مستمرة عبر المحتوى العضوي',
    ],
  },
  {
    period: 'بعد 6 أشهر',
    icon: CheckCircle2,
    color: 'bg-brand/10 text-brand',
    items: [
      'علامة تجارية قانونية متكاملة بجدة',
      'تدفق مستدام من القضايا الكبرى',
      'عقود محاماة سنوية + خطة سداد ميسرة',
    ],
  },
]

export default function SuccessTimeline() {
  return (
    <section className="py-20 md:py-32 bg-surface-dark-alt relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="ما الذي ينتظرنا"
          title="كيف تبدو النجاح"
          subtitle="المؤشرات المستهدافة عبر الفترات الزمنية المختلفة"
          light
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {timeline.map((t, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="glass-card-light rounded-3xl p-6 h-full hover:shadow-xl hover:shadow-brand/5 transition-all duration-300 hover:-translate-y-1">
                <div className={`w-11 h-11 rounded-xl ${t.color} flex items-center justify-center mb-4`}>
                  <t.icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-text-dark mb-4 font-[family-name:var(--font-family-display)]">{t.period}</h3>
                <ul className="space-y-3">
                  {t.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-brand mt-0.5 shrink-0" />
                      <span className="text-text-dark-secondary text-sm leading-relaxed">{item}</span>
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
