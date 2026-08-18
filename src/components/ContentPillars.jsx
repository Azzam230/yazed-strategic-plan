import AnimatedSection from './AnimatedSection'
import SectionHeader from './SectionHeader'
import {
  HelpCircle,
  ShieldAlert,
  BookOpen,
  AlertTriangle,
  Briefcase,
  Newspaper,
} from 'lucide-react'

const pillars = [
  {
    icon: HelpCircle,
    code: 'P1',
    title: 'هل يحق لك؟',
    titleEn: 'Legal Entitlements',
    audience: 'B2C & B2B',
    goal: 'إثارة الفضول وتحديد أحقية المطالبة',
    example: 'هل يحق لك المطالبة بالتعويض بعد الإقالة؟',
    span: 'md:col-span-2 md:row-span-1',
  },
  {
    icon: ShieldAlert,
    code: 'P2',
    title: 'انتبه قبل أن...',
    titleEn: 'Risk Prevention',
    audience: 'B2C & B2B',
    goal: 'الوقاية من الأخطاء القانونية',
    example: 'انتبه قبل توقيع عقد شراء على الخارطة',
    span: 'md:col-span-1 md:row-span-2',
  },
  {
    icon: BookOpen,
    code: 'P3',
    title: 'قصص وقضايا',
    titleEn: 'Case Stories',
    audience: 'عام',
    goal: 'بناء المصداقية المباشرة',
    example: 'استرجاع مبلغ 2 مليون ريال في نزاع تجاري',
    span: 'md:col-span-1 md:row-span-1',
  },
  {
    icon: AlertTriangle,
    code: 'P4',
    title: 'ماذا تفعل إذا...؟',
    titleEn: 'Crisis Solutions',
    audience: 'B2C',
    goal: 'التعامل مع الأزمات القانونية',
    example: 'ماذا تفعل إذا رفض المشتري سداد الدفعة الأخيرة؟',
    span: 'md:col-span-1 md:row-span-1',
  },
  {
    icon: Briefcase,
    code: 'P5',
    title: 'قانون وإدارة الأعمال',
    titleEn: 'B2B Legal',
    audience: 'CEOs & HR',
    goal: 'جلب عقود المحاماة السنوية',
    example: 'ثغرات اللوائح الداخلية للشركات',
    span: 'md:col-span-2 md:row-span-1',
  },
  {
    icon: Newspaper,
    code: 'P6',
    title: 'تحديثات الأنظمة',
    titleEn: 'Legal News',
    audience: 'عام',
    goal: 'إظهار Thought Leadership',
    example: 'تعديلات نظام العمل الجديدة',
    span: 'md:col-span-1 md:row-span-1',
  },
]

export default function ContentPillars() {
  return (
    <section id="pillars" className="py-20 md:py-32 bg-surface-dark relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand/3 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="ركائز المحتوى"
          title="6 ركائز محتوى استراتيجية"
          subtitle="ضمان تغطية المزيج بين الانتشار العريض والتحويل المباشر"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {pillars.map((pillar, i) => (
            <AnimatedSection key={i} delay={i * 0.08} className={pillar.span}>
              <div className="glass-card rounded-3xl p-6 h-full group hover:border-brand/20 transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-brand/10 flex items-center justify-center group-hover:bg-brand/15 transition-colors">
                    <pillar.icon className="w-6 h-6 text-brand" />
                  </div>
                  <span className="text-xs font-mono text-brand/60 bg-brand/5 px-2 py-1 rounded-lg">
                    {pillar.code}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-1 font-[family-name:var(--font-family-display)]">
                  {pillar.title}
                </h3>
                <span className="text-sm text-brand font-medium">{pillar.titleEn}</span>
                <p className="text-text-secondary text-sm mt-3 mb-4 leading-relaxed">{pillar.goal}</p>
                <div className="bg-surface-dark-card rounded-xl p-3 border border-surface-dark-border">
                  <p className="text-xs text-text-muted leading-relaxed">{pillar.example}</p>
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-full bg-brand/10 text-brand text-xs font-semibold">{pillar.audience}</span>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
