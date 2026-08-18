import AnimatedSection from './AnimatedSection'
import SectionHeader from './SectionHeader'
import { Play, MessageCircle, Briefcase, HelpCircle, Scale, Clock } from 'lucide-react'

const series = [
  { icon: Play, title: 'انتبه قبل لا...', duration: '30-45 ثانية', format: 'Reel / TikTok', hook: 'Hook تحذيري مباشر', cta: 'استشرنا قبل التوقيع', examples: ['انتبه قبل لا توقع عقد شراكة مع صديقك', 'انتبه قبل لا تسلم عربون بدون سند تنفيذي', 'انتبه قبل لا تنهي خدمات موظف بالمادة 80'] },
  { icon: HelpCircle, title: 'هل يحق لك؟', duration: '40 ثانية', format: 'Reel / Carousel', hook: 'Hook تساؤلي عن حق مالي', cta: 'تواصل لتقييم أحقية قضيتك', examples: ['هل يحق لك المطالبة بالتعويض عن الضرر المعنوي؟', 'هل يحق للمؤجر زيادة الإيجار بدون شرط تعاقدي؟', 'هل يحق للشريك الأقلية الاعتراض؟'] },
  { icon: Scale, title: 'قضية في دقيقة', duration: '60 ثانية', format: 'Reel / Short', hook: 'Hook استعراض نزاع كبير', cta: 'احجز استشارتك الآن', examples: ['نزاع عقاري بـ 3 ملايين ريال', 'مطالبة عمالية تعويضية كبرى', 'إبطال شرط جزائي تعسفي'] },
  { icon: MessageCircle, title: 'لو كنت مكانه...', duration: '45-60 ثانية', format: 'Reel / Video', hook: 'Hook سيناريو واقعي', cta: 'احصل على رأي قانوني', examples: ['اكتشفت عيباً هيكلياً بعد الشراء بـ 6 أشهر', 'امتنع الشريك عن إعطائك الأرباح', 'قدم العميل شيكاً بدون رصيد'] },
  { icon: Briefcase, title: 'قانون الأعمال ببساطة', duration: '60 ثانية', format: 'Carousel / Post', hook: 'Hook عن المخاطر للأرباح', cta: 'اطلب جلسة تقييم مخاطر', examples: ['أهم 3 بنود في عقد عدم المنافسة', 'كيف تحمي شركتك من خلافات الشركاء', 'كيف تؤسس لائحة العمل الداخلية'] },
  { icon: Clock, title: 'سؤال قانوني في 30 ثانية', duration: '20-30 ثانية', format: 'Quick Reel', hook: 'Hook سؤال مباشر وسريع', cta: 'اطرح سؤالك في التعليقات', examples: ['هل الشرط الجزائي مجاني؟', 'كم المدة لرفع دعوى عمالية؟', 'هل الواتساب إثبات رسمياً؟'] },
]

export default function ContentSeries() {
  return (
    <section className="section-padding" style={{ backgroundColor: '#0A0A0A', position: 'relative' }}>
      <div className="section-container">
        <SectionHeader
          badge="سلاسل المحتوى"
          title="6 سلاسل محتوى ثابتة"
          subtitle="محتوى مصمم لتحقيق التفاعل والتحويل"
          dark
        />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.25rem' }}>
          {series.map((s, i) => (
            <AnimatedSection key={i} delay={i * 0.08}>
              <div className="glass-light" style={{ borderRadius: '1.5rem', padding: '1.5rem', height: '100%', transition: 'all 0.3s' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                  <div style={{ width: '2.75rem', height: '2.75rem', borderRadius: '0.75rem', backgroundColor: '#C4FA00', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <s.icon style={{ width: '1.25rem', height: '1.25rem', color: '#000' }} />
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ fontSize: '0.75rem', color: '#4B5563', backgroundColor: '#F5F5F7', padding: '0.25rem 0.5rem', borderRadius: '0.5rem' }}>{s.duration}</span>
                    <span style={{ fontSize: '0.75rem', color: '#C4FA00', fontWeight: 600, backgroundColor: 'rgba(196,250,0,0.1)', padding: '0.25rem 0.5rem', borderRadius: '0.5rem' }}>{s.format}</span>
                  </div>
                </div>
                <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#111111', marginBottom: '0.5rem', fontFamily: 'var(--font-display)' }}>{s.title}</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem', marginBottom: '1rem' }}>
                  <div style={{ fontSize: '0.75rem' }}>
                    <span style={{ color: '#4B5563', fontWeight: 500 }}>Hook: </span>
                    <span style={{ color: '#4B5563' }}>{s.hook}</span>
                  </div>
                  <div style={{ fontSize: '0.75rem' }}>
                    <span style={{ color: '#C4FA00', fontWeight: 600 }}>CTA: </span>
                    <span style={{ color: '#4B5563' }}>{s.cta}</span>
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {s.examples.map((ex, j) => (
                    <div key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.75rem', color: '#4B5563' }}>
                      <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#C4FA00', marginTop: '6px', flexShrink: 0 }} />
                      <span style={{ lineHeight: 1.5 }}>{ex}</span>
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
