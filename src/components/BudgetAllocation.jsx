import AnimatedSection from './AnimatedSection'
import SectionHeader from './SectionHeader'
import { DollarSign, TrendingUp, Users, Megaphone, Target } from 'lucide-react'

const scenarios = [
  {
    label: 'السيناريو أ',
    amount: '5,000',
    currency: 'SAR/شهرياً',
    leads: '40-70',
    allocation: [
      { label: 'B2C Ads', pct: 60, amount: '3,000' },
      { label: 'B2B Ads', pct: 20, amount: '1,000' },
      { label: 'Retargeting', pct: 10, amount: '500' },
      { label: 'Creative Testing', pct: 10, amount: '500' },
    ],
  },
  {
    label: 'السيناريو ب',
    amount: '10,000',
    currency: 'SAR/شهرياً',
    leads: '90-150',
    allocation: [
      { label: 'B2C Ads', pct: 55, amount: '5,500' },
      { label: 'B2B Ads', pct: 25, amount: '2,500' },
      { label: 'Retargeting', pct: 10, amount: '1,000' },
      { label: 'Creative Testing', pct: 10, amount: '1,000' },
    ],
    featured: true,
  },
  {
    label: 'السيناريو ج',
    amount: '15,000',
    currency: 'SAR/شهرياً',
    leads: '160-250',
    allocation: [
      { label: 'B2C Ads', pct: 50, amount: '7,500' },
      { label: 'B2B Ads', pct: 30, amount: '4,500' },
      { label: 'Retargeting', pct: 10, amount: '1,500' },
      { label: 'Creative Testing', pct: 10, amount: '1,500' },
    ],
  },
]

const icons = [Megaphone, Target, Users, TrendingUp]

export default function BudgetAllocation() {
  return (
    <section id="budget" className="py-20 md:py-32 bg-surface-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="تخصيص الميزانيات"
          title="ثلاثة سيناريوهات للنمو"
          subtitle="تخصيص مرن للميزانيات مع مراجعة أسبوعية لإعادة التوزيع"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {scenarios.map((s, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className={`rounded-3xl p-6 md:p-8 h-full transition-all duration-300 hover:-translate-y-1 ${
                s.featured
                  ? 'bg-brand text-surface-dark'
                  : 'glass-card'
              }`}>
                <div className="mb-6">
                  <span className={`text-xs font-bold ${s.featured ? 'text-surface-dark/60' : 'text-text-muted'}`}>{s.label}</span>
                  <div className={`text-4xl font-black font-[family-name:var(--font-family-display)] mt-1 ${
                    s.featured ? 'text-surface-dark' : 'text-text-primary'
                  }`}>
                    {s.amount} <span className="text-lg">{s.currency}</span>
                  </div>
                  <div className={`flex items-center gap-2 mt-2 ${s.featured ? 'text-surface-dark/70' : 'text-text-secondary'}`}>
                    <Users className="w-4 h-4" />
                    <span className="text-sm font-medium">{s.leads} Lead/شهر</span>
                  </div>
                </div>

                <div className="space-y-3">
                  {s.allocation.map((a, j) => (
                    <div key={j}>
                      <div className="flex justify-between items-center mb-1">
                        <span className={`text-sm ${s.featured ? 'text-surface-dark/80' : 'text-text-secondary'}`}>{a.label}</span>
                        <span className={`text-sm font-bold ${s.featured ? 'text-surface-dark' : 'text-text-primary'}`}>{a.amount} SAR</span>
                      </div>
                      <div className={`h-2 rounded-full ${s.featured ? 'bg-surface-dark/10' : 'bg-surface-dark-card'}`}>
                        <div
                          className={`h-full rounded-full ${s.featured ? 'bg-surface-dark/40' : 'bg-brand/60'}`}
                          style={{ width: `${a.pct}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.3}>
          <div className="mt-8 glass-card rounded-2xl p-5 flex items-start gap-3">
            <DollarSign className="w-5 h-5 text-brand shrink-0 mt-0.5" />
            <p className="text-text-secondary text-sm leading-relaxed">
              <span className="text-brand font-semibold">قاعدة إعادة التوزيع:</span>{' '}
              مراجعة أداء الإعلانات أسبوعياً. إذا حققت حملات B2C العقارية تكلفة عميل أقل وجودة أعلى، يتم تحويل 20% من ميزانية الإعلانات الأقل أداءً فوراً.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
