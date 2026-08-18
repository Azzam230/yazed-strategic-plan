import AnimatedSection from './AnimatedSection'
import SectionHeader from './SectionHeader'
import { MessageSquare, Shield, FileText, Clock, CheckCircle2 } from 'lucide-react'

export default function WhatsAppProtocol() {
  const questions = [
    { num: '1', text: 'هل الطلب مخصص لـ (فرد) أم (شركة/مؤسسة)؟' },
    { num: '2', text: 'ما نوع القضية أو الاستشارة؟ (عقارية / عمالية / مالية / أحوال شخصية / عقود)' },
    { num: '3', text: 'هل القضية قائمة بالمحكمة أم تحتاج استشارة ووقاية؟' },
    { num: '4', text: 'هل تتوفر لديك المستندات والوثائق الخاصة بالطلب؟' },
    { num: '5', text: 'درجة الاستعجال: (عاجل جداً / خلال الأسبوع / استفسار عام)' },
  ]

  return (
    <section className="py-20 md:py-32 bg-surface-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="بروتوكول الواتساب"
          title="نظام تأهيل العملاء"
          subtitle="رد آلي وتصنيف فوري لضمان جدية الاستفسارات"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <AnimatedSection>
            <div className="glass-card rounded-3xl p-6 md:p-8 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 rounded-xl bg-green-500/10 flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-green-400" />
                </div>
                <h3 className="text-lg font-bold text-text-primary font-[family-name:var(--font-family-display)]">
                  رسالة الترحيب والتأهيل
                </h3>
              </div>
              <div className="bg-surface-dark-card rounded-2xl p-5 border border-surface-dark-border">
                <p className="text-sm text-text-secondary leading-relaxed mb-4">
                  "أهلاً بك في مكتب المحامي يزيد اليوبي للمحاماة والاستشارات القانونية ⚖️
                  نسعد بخدمتك في مقرنا بجدة أو عن بُعد عبر كافة مناطق المملكة."
                </p>
                <p className="text-sm text-text-secondary leading-relaxed">
                  "مباشرةً ولتقديم الخدمة القانونية الأدق، نرجو تكرمك بالإجابة عن الأسئلة السريعة التالية:"
                </p>
              </div>
              <div className="mt-4 flex items-center gap-2 px-3 py-2 bg-brand/10 rounded-xl">
                <CheckCircle2 className="w-4 h-4 text-brand" />
                <span className="text-sm text-text-primary font-medium">سيرد عليك المستشار المختص فور استكمال البيانات</span>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <div className="glass-card rounded-3xl p-6 md:p-8 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 rounded-xl bg-brand/10 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-brand" />
                </div>
                <h3 className="text-lg font-bold text-text-primary font-[family-name:var(--font-family-display)]">
                  أسئلة التأهيل (5 أسئلة)
                </h3>
              </div>
              <div className="space-y-3">
                {questions.map((q) => (
                  <div key={q.num} className="flex items-start gap-3 p-3 rounded-xl bg-surface-dark-card border border-surface-dark-border">
                    <span className="w-7 h-7 rounded-lg bg-brand text-surface-dark flex items-center justify-center text-xs font-bold shrink-0">
                      {q.num}
                    </span>
                    <p className="text-sm text-text-secondary leading-relaxed">{q.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
