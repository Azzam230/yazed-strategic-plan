import AnimatedSection from './AnimatedSection'
import SectionHeader from './SectionHeader'
import { BarChart3, Eye, MousePointer, DollarSign, TrendingUp } from 'lucide-react'

const kpiCategories = [
  {
    title: 'الأداء العضوي',
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
    <section className="py-20 md:py-32 bg-surface-dark-alt relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="لوحة القياس"
          title="مؤشرات الأداء الرئيسية"
          subtitle="KPIs واضحة وقابلة للقياس لضمان تتبع النجاح"
          light
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {kpiCategories.map((cat, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="glass-card-light rounded-3xl p-6 md:p-8 h-full hover:shadow-xl hover:shadow-brand/5 transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-11 h-11 rounded-xl bg-brand flex items-center justify-center">
                    <cat.icon className="w-5 h-5 text-surface-dark" />
                  </div>
                  <h3 className="text-lg font-bold text-text-dark font-[family-name:var(--font-family-display)]">{cat.title}</h3>
                </div>
                <div className="space-y-4">
                  {cat.kpis.map((kpi, j) => (
                    <div key={j} className="flex items-center justify-between py-3 border-b border-surface-dark-alt last:border-0">
                      <span className="text-sm text-text-dark-secondary">{kpi.metric}</span>
                      <span className="text-sm font-bold text-brand">{kpi.target}</span>
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
