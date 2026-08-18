import AnimatedSection from './AnimatedSection'
import SectionHeader from './SectionHeader'
import { Camera, Tv, MessageCircle, Briefcase, ArrowUpRight } from 'lucide-react'

const platforms = [
  {
    icon: Camera,
    name: 'Instagram',
    color: 'from-pink-500 to-purple-600',
    strategy: [
      '3-4 Reels + 2 Carousel أسبوعياً + Stories يومية',
      'Pinned Posts: تعريفي + خدمات + تقسيط الأتعاب',
      'Highlights: نتائج وقضايا + خدماتنا + آراء العملاء',
    ],
    goal: 'Lead Generation + Brand Awareness',
  },
  {
    icon: Tv,
    name: 'TikTok',
    color: 'from-slate-900 to-slate-700',
    strategy: [
      'التركيز الكامل على أول 3 ثوانٍ (Hook)',
      'تحدث بتلقائية محترفة أمام الكاميرا',
      'سرد سيناريوهات "ماذا تفعل إذا..."',
      'الرد على أسئلة المتابعين بالفيديو',
    ],
    goal: 'High Retention + Viral Reach',
  },
  {
    icon: MessageCircle,
    name: 'X (تويتر)',
    color: 'from-sky-500 to-blue-600',
    strategy: [
      'تفاعل مع الأحداث القانونية والتحديثات الرسمية',
      'كتابة Threads متخصصة بالتفصيل',
      '10 أفكار سلاسل متنوعة',
    ],
    goal: 'Thought Leadership + Engagement',
  },
  {
    icon: Briefcase,
    name: 'LinkedIn',
    color: 'from-blue-600 to-blue-800',
    strategy: [
      'تحليلات المخاطر القانونية والقرارات الاستراتيجية',
      'الجمهور: CEOs, Founders, HR Directors',
      '10 أفكار منشورات B2B متخصصة',
    ],
    goal: 'B2B Leads + Enterprise Authority',
  },
]

export default function PlatformStrategy() {
  return (
    <section id="platforms" className="py-20 md:py-32 bg-surface-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="استراتيجيات المنصات"
          title="حضور رقمي متعدد المنصات"
          subtitle="استراتيجية متخصصة لكل منصة لضمان أعلى تأثير"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {platforms.map((p, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="glass-card rounded-3xl p-6 md:p-8 h-full group hover:border-brand/20 transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${p.color} flex items-center justify-center`}>
                      <p.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-text-primary font-[family-name:var(--font-family-display)]">{p.name}</h3>
                      <span className="text-xs text-brand font-medium">{p.goal}</span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-text-muted group-hover:text-brand transition-colors" />
                </div>
                <ul className="space-y-3">
                  {p.strategy.map((item, j) => (
                    <li key={j} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand mt-2 shrink-0" />
                      <span className="text-text-secondary text-sm leading-relaxed">{item}</span>
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
