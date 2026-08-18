import AnimatedSection from './AnimatedSection'
import SectionHeader from './SectionHeader'
import { MessageSquare, Shield, CheckCircle2 } from 'lucide-react'

export default function WhatsAppProtocol() {
  const questions = [
    { num: '1', text: 'هل الطلب مخصص لـ (فرد) أم (شركة/مؤسسة)؟' },
    { num: '2', text: 'ما نوع القضية أو الاستشارة؟ (عقارية / عمالية / مالية / أحوال شخصية / عقود)' },
    { num: '3', text: 'هل القضية قائمة بالمحكمة أم تحتاج استشارة ووقاية؟' },
    { num: '4', text: 'هل تتوفر لديك المستندات والوثائق الخاصة بالطلب؟' },
    { num: '5', text: 'درجة الاستعجال: (عاجل جداً / خلال الأسبوع / استفسار عام)' },
  ]

  return (
    <section className="section-padding" style={{ backgroundColor: '#0A0A0A', position: 'relative' }}>
      <div className="section-container">
        <SectionHeader badge="بروتوكول الواتساب" title="نظام تأهيل العملاء" subtitle="رد آلي وتصنيف فوري لضمان جدية الاستفسارات" dark />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '2rem' }}>
          <AnimatedSection>
            <div className="glass-light" style={{ borderRadius: '1.5rem', padding: 'clamp(1.5rem, 3vw, 2rem)', height: '100%' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                <div style={{ width: '2.75rem', height: '2.75rem', borderRadius: '0.75rem', backgroundColor: 'rgba(34,197,94,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <MessageSquare style={{ width: '1.25rem', height: '1.25rem', color: '#22C55E' }} />
                </div>
                <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#111111', fontFamily: 'var(--font-display)' }}> رسالة الترحيب والتأهيل</h3>
              </div>
              <div style={{ backgroundColor: '#F5F5F7', borderRadius: '1rem', padding: '1.25rem' }}>
                <p style={{ fontSize: '0.875rem', color: '#4B5563', lineHeight: 1.7, marginBottom: '1rem' }}>
                  "أهلاً بك في مكتب المحامي يزيد اليوبي للمحاماة والاستشارات القانونية
                </p>
                <p style={{ fontSize: '0.875rem', color: '#4B5563', lineHeight: 1.7 }}>
                  "مباشرةً ولتقديم الخدمة القانونية الأدق، نرجو تكرمك بالإجابة عن الأسئلة السريعة التالية:"
                </p>
              </div>
              <div style={{ marginTop: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.625rem', backgroundColor: 'rgba(196,250,0,0.1)', borderRadius: '0.75rem' }}>
                <CheckCircle2 style={{ width: '1rem', height: '1rem', color: '#C4FA00' }} />
                <span style={{ fontSize: '0.875rem', color: '#111111', fontWeight: 500 }}>سيرد عليك المستشار المختص فور استكمال البيانات</span>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <div className="glass-light" style={{ borderRadius: '1.5rem', padding: 'clamp(1.5rem, 3vw, 2rem)', height: '100%' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                <div style={{ width: '2.75rem', height: '2.75rem', borderRadius: '0.75rem', backgroundColor: 'rgba(196,250,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Shield style={{ width: '1.25rem', height: '1.25rem', color: '#C4FA00' }} />
                </div>
                <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#111111', fontFamily: 'var(--font-display)' }}>أسئلة التأهيل (5 أسئلة)</h3>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {questions.map((q) => (
                  <div key={q.num} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', padding: '0.75rem', borderRadius: '0.75rem', backgroundColor: '#F5F5F7' }}>
                    <span style={{ width: '1.75rem', height: '1.75rem', borderRadius: '0.5rem', backgroundColor: '#C4FA00', color: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 700, flexShrink: 0 }}>{q.num}</span>
                    <p style={{ fontSize: '0.875rem', color: '#4B5563', lineHeight: 1.6 }}>{q.text}</p>
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
