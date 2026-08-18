import AnimatedSection from './AnimatedSection'
import SectionHeader from './SectionHeader'
import { TrendingUp, Eye, Users, DollarSign, Target, Zap } from 'lucide-react'

const metrics = [
  { value: '150K+', label: 'مشاهدة شهرياً', sub: 'Organic Reach', icon: Eye, accent: false },
  { value: '5,000+', label: 'زيارة ملف شخصي', sub: 'Profile Visits', icon: Users, accent: false },
  { value: '1,200', label: 'متابع جديد شهرياً', sub: 'Qualified Followers', icon: TrendingUp, accent: true },
  { value: '25%+', label: 'معدل التحويل', sub: 'Lead to Consultation', icon: Target, accent: false },
  { value: '4x-6x', label: 'العائد الإعلاني', sub: 'ROAS Target', icon: DollarSign, accent: true },
  { value: '<65', label: 'ريال / عميل محتمل', sub: 'B2C CPL', icon: Zap, accent: false },
]

export default function MetricsGrid() {
  return (
    <section id="metrics" className="py-20 md:py-32 bg-surface-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="مؤشرات الأداء"
          title="الأرقام التي تتحدث"
          subtitle="الTargets الشهرية لمؤشرات الأداء الرئيسية"
        />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {metrics.map((m, i) => (
            <AnimatedSection key={i} delay={i * 0.08}>
              <div className={`rounded-3xl p-6 md:p-8 h-full transition-all duration-300 hover:-translate-y-1 ${
                m.accent
                  ? 'bg-brand text-surface-dark'
                  : 'glass-card'
              }`}>
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${
                  m.accent ? 'bg-surface-dark/10' : 'bg-brand/10'
                }`}>
                  <m.icon className={`w-5 h-5 ${m.accent ? 'text-surface-dark' : 'text-brand'}`} />
                </div>
                <div className={`text-3xl md:text-4xl font-black font-[family-name:var(--font-family-display)] mb-2 ${
                  m.accent ? 'text-surface-dark' : 'text-text-primary'
                }`}>
                  {m.value}
                </div>
                <div className={`text-sm font-semibold mb-1 ${
                  m.accent ? 'text-surface-dark/80' : 'text-text-primary'
                }`}>
                  {m.label}
                </div>
                <div className={`text-xs ${
                  m.accent ? 'text-surface-dark/50' : 'text-text-muted'
                }`}>
                  {m.sub}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
