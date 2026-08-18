import AnimatedSection from './AnimatedSection'
import SectionHeader from './SectionHeader'
import { Target, Users, Building2, ArrowLeft } from 'lucide-react'

export default function ExecutiveSummary() {
  return (
    <section id="summary" className="py-20 md:py-32 bg-surface-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="الملخص التنفيذي"
          title="التحول من النص القانوني إلى حلول حقيقية"
          subtitle="تحويل الخطاب القانوني التقليدي إلى خطاب موجه لنقاط الألم الحقيقية لدى العملاء"
        />

        <AnimatedSection>
          <div className="glass-card rounded-3xl p-6 md:p-10 mb-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-brand/10 flex items-center justify-center shrink-0">
                <Target className="w-6 h-6 text-brand" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-text-primary mb-2 font-[family-name:var(--font-family-display)]">العمود الفقري للاستراتيجية</h3>
                <p className="text-text-secondary leading-relaxed">
                  نموذج التحويل المتكامل الذي يربط بين الوصول العضوي والاستحواذ على العملاء المحتملين وتحقيق الإيرادات المباشرة
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-0">
              {['Reach', 'Trust', 'Leads', 'Consultations', 'Contracts', 'Revenue'].map((step, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className={`px-4 py-2.5 rounded-xl font-bold text-sm ${
                    i === 0 || i === 5
                      ? 'bg-brand text-surface-dark'
                      : 'bg-surface-dark-card border border-surface-dark-border text-text-primary'
                  }`}>
                    {step}
                  </div>
                  {i < 5 && (
                    <ArrowLeft className="w-4 h-4 text-brand/40 hidden md:block" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatedSection delay={0.1}>
            <div className="glass-card rounded-3xl p-6 md:p-8 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 rounded-xl bg-brand/10 flex items-center justify-center">
                  <Users className="w-5 h-5 text-brand" />
                </div>
                <div>
                  <span className="text-xs text-brand font-semibold">قطاع B2C</span>
                  <h4 className="text-lg font-bold text-text-primary font-[family-name:var(--font-family-display)]">الأفراد</h4>
                </div>
              </div>
              <ul className="space-y-3">
                {[
                  'القضايا العقارية والنزاعات المالية',
                  'التعويضات والقضايا العمالية',
                  'الأحوال الشخصية والتنفيذ',
                  'عرض دراسات الحالة + مرونة السداد',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand mt-2 shrink-0" />
                    <span className="text-text-secondary text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-2">
                {['Instagram', 'TikTok', 'X'].map((p) => (
                  <span key={p} className="px-3 py-1 rounded-full bg-surface-dark-card border border-surface-dark-border text-xs text-text-muted">{p}</span>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="glass-card rounded-3xl p-6 md:p-8 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 rounded-xl bg-brand/10 flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-brand" />
                </div>
                <div>
                  <span className="text-xs text-brand font-semibold">قطاع B2B</span>
                  <h4 className="text-lg font-bold text-text-primary font-[family-name:var(--font-family-display)]">الشركات والأعمال</h4>
                </div>
              </div>
              <ul className="space-y-3">
                {[
                  'حوكمة الشركات وصياغة العقود',
                  'النزاعات التجارية والشراكات',
                  'اللوائح الداخلية وحماية المنشآت',
                  'الوقاية من المخاطر + العمق التنفيذي',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand mt-2 shrink-0" />
                    <span className="text-text-secondary text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-2">
                {['LinkedIn', 'X'].map((p) => (
                  <span key={p} className="px-3 py-1 rounded-full bg-surface-dark-card border border-surface-dark-border text-xs text-text-muted">{p}</span>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
