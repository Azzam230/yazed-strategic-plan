import AnimatedSection from './AnimatedSection'
import SectionHeader from './SectionHeader'
import { Rocket, Settings, TrendingUp, CheckCircle2, Clock } from 'lucide-react'

const phases = [
  {
    icon: Rocket,
    month: 'الشهر الأول',
    title: 'التأسيس والاختبار',
    color: 'brand',
    tasks: [
      'تحسين بيئة الحسابات (Bio, Highlights)',
      'يوم التصوير الأول (20 مقطع)',
      'إطلاق حملات B2C و B2B المبدئية',
      'اختبار 4 أنواع من الـ Hooks',
      'ضبط الرد الآلي للواتساب',
    ],
    kpi: 'تحديد CPL Baseline',
  },
  {
    icon: Settings,
    month: 'الشهر الثاني',
    title: 'التحسين والتوسع',
    color: 'brand',
    tasks: [
      'التركيز على الركائز الأكثر نجاحاً',
      'إطلاق حملات إعادة الاستهداف Retargeting',
      'إيقاف الإعلانات الضعيفة',
      'تجهيز Case Studies مكثفة',
      'رفع معدل التحويل لاستشارات مدفوعة',
    ],
    kpi: 'Consultation Rate > 25%',
  },
  {
    icon: TrendingUp,
    month: 'الشهر الثالث',
    title: 'التحويل والمضاعفة',
    color: 'brand',
    tasks: [
      'التوسع في حملات B2B على LinkedIn',
      'بناء شراكات مع منصات أعمال',
      'مضاعفة الميزانية على الزوايا الأعلى',
      'تثبيت عوائد عقود المحاماة السنوية',
      'الوصول لـ ROAS يستهدف 5x',
    ],
    kpi: 'ROAS > 5x',
  },
]

export default function Roadmap() {
  return (
    <section id="roadmap" className="py-20 md:py-32 bg-surface-dark-alt relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="خطة التنفيذ"
          title="خطة 90 يوماً للتنفيذ"
          subtitle="من التأسيس والاختبار إلى التحويل المستدام ومضاعفة النتائج"
          light
        />

        <div className="relative">
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-brand via-brand to-brand/20" />

          <div className="space-y-8 md:space-y-0">
            {phases.map((phase, i) => (
              <AnimatedSection key={i} delay={i * 0.15}>
                <div className={`md:flex items-center gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} md:mb-12`}>
                  <div className={`md:w-[calc(50%-2rem)] ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="glass-card-light rounded-3xl p-6 md:p-8 hover:shadow-xl hover:shadow-brand/5 transition-all duration-300">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-11 h-11 rounded-xl bg-brand flex items-center justify-center">
                          <phase.icon className="w-5 h-5 text-surface-dark" />
                        </div>
                        <div>
                          <span className="text-xs text-brand font-bold">{phase.month}</span>
                          <h3 className="text-lg font-bold text-text-dark font-[family-name:var(--font-family-display)]">{phase.title}</h3>
                        </div>
                      </div>
                      <ul className="space-y-2.5 mb-4">
                        {phase.tasks.map((task, j) => (
                          <li key={j} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-brand mt-0.5 shrink-0" />
                            <span className="text-text-dark-secondary text-sm leading-relaxed">{task}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex items-center gap-2 px-3 py-2 bg-brand/10 rounded-xl">
                        <Clock className="w-4 h-4 text-brand" />
                        <span className="text-sm font-semibold text-text-dark">{phase.kpi}</span>
                      </div>
                    </div>
                  </div>

                  <div className="hidden md:flex relative z-10">
                    <div className="w-12 h-12 rounded-full bg-brand flex items-center justify-center text-surface-dark font-black text-lg">
                      {i + 1}
                    </div>
                  </div>

                  <div className="md:w-[calc(50%-2rem)]" />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
