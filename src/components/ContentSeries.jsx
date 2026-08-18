import AnimatedSection from './AnimatedSection'
import SectionHeader from './SectionHeader'
import { Play, MessageCircle, Briefcase, HelpCircle, Scale, Clock } from 'lucide-react'

const series = [
  {
    icon: Play,
    title: 'انتبه قبل لا...',
    duration: '30-45 ثانية',
    format: 'Reel / TikTok',
    hook: 'Hook تحذيري مباشر',
    cta: 'استشرنا قبل التوقيع',
    examples: [
      'انتبه قبل لا توقع عقد شراكة مع صديقك',
      'انتبه قبل لا تسلم عربون بدون سند تنفيذي',
      'انتبه قبل لا تنهي خدمات موظف بالمادة 80',
    ],
  },
  {
    icon: HelpCircle,
    title: 'هل يحق لك؟',
    duration: '40 ثانية',
    format: 'Reel / Carousel',
    hook: 'Hook تساؤلي عن حق مالي',
    cta: 'تواصل لتقييم أحقية قضيتك',
    examples: [
      'هل يحق لك المطالبة بالتعويض عن الضرر المعنوي؟',
      'هل يحق للمؤجر زيادة الإيجار بدون شرط تعاقدي؟',
      'هل يحق للشريك الأقلية الاعتراض؟',
    ],
  },
  {
    icon: Scale,
    title: 'قضية في دقيقة',
    duration: '60 ثانية',
    format: 'Reel / Short',
    hook: 'Hook استعراض نزاع كبير',
    cta: 'احجز استشارتك الآن',
    examples: [
      'نزاع عقاري بـ 3 ملايين ريال',
      'مطالبة عمالية تعويضية كبرى',
      'إبطال شرط جزائي تعسفي',
    ],
  },
  {
    icon: MessageCircle,
    title: 'لو كنت مكانه...',
    duration: '45-60 ثانية',
    format: 'Reel / Video',
    hook: 'Hook سيناريو واقعي',
    cta: 'احصل على رأي قانوني',
    examples: [
      'اكتشفت عيباً هيكلياً بعد الشراء بـ 6 أشهر',
      'امتنع الشريك عن إعطائك الأرباح',
      'قدم العميل شيكاً بدون رصيد',
    ],
  },
  {
    icon: Briefcase,
    title: 'قانون الأعمال ببساطة',
    duration: '60 ثانية',
    format: 'Carousel / Post',
    hook: 'Hook عن المخاطر للأرباح',
    cta: 'اطلب جلسة تقييم مخاطر',
    examples: [
      'أهم 3 بنود في عقد عدم المنافسة',
      'كيف تحمي شركتك من خلافات الشركاء',
      'كيف تؤسس لائحة العمل الداخلية',
    ],
  },
  {
    icon: Clock,
    title: 'سؤال قانوني في 30 ثانية',
    duration: '20-30 ثانية',
    format: 'Quick Reel',
    hook: 'Hook سؤال مباشر وسريع',
    cta: 'اطرح سؤالك في التعليقات',
    examples: [
      'هل الشرط الجزائي مجاني؟',
      'كم المدة لرفع دعوى عمالية؟',
      'هل الواتساب إثبات رسمياً؟',
    ],
  },
]

export default function ContentSeries() {
  return (
    <section className="py-20 md:py-32 bg-surface-dark-alt relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="سلاسل المحتوى"
          title="6 سلاسل محتوى ثابتة"
          subtitle="محتوى مصمم لتحقيق التفاعل والتحويل"
          light
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {series.map((s, i) => (
            <AnimatedSection key={i} delay={i * 0.08}>
              <div className="glass-card-light rounded-3xl p-6 h-full hover:shadow-xl hover:shadow-brand/5 transition-all duration-300 hover:-translate-y-1 group">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-brand flex items-center justify-center group-hover:scale-110 transition-transform">
                    <s.icon className="w-5 h-5 text-surface-dark" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-text-dark-secondary bg-surface-dark-alt px-2 py-1 rounded-lg">{s.duration}</span>
                    <span className="text-xs text-brand font-semibold bg-brand/10 px-2 py-1 rounded-lg">{s.format}</span>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-text-dark mb-2 font-[family-name:var(--font-family-display)]">{s.title}</h3>
                <div className="space-y-2 mb-4">
                  <div className="text-xs">
                    <span className="text-text-dark-secondary font-medium">Hook: </span>
                    <span className="text-text-dark-secondary">{s.hook}</span>
                  </div>
                  <div className="text-xs">
                    <span className="text-brand font-medium">CTA: </span>
                    <span className="text-text-dark-secondary">{s.cta}</span>
                  </div>
                </div>
                <div className="space-y-2">
                  {s.examples.map((ex, j) => (
                    <div key={j} className="flex items-start gap-2 text-xs text-text-dark-secondary">
                      <span className="w-1 h-1 rounded-full bg-brand mt-1.5 shrink-0" />
                      <span className="leading-relaxed">{ex}</span>
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
