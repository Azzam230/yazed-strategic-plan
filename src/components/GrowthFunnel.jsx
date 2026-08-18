import AnimatedSection from './AnimatedSection'
import SectionHeader from './SectionHeader'
import { Megaphone, UserCheck, RotateCcw, MessageSquare, ClipboardCheck, Calendar, FileSignature } from 'lucide-react'

const funnelSteps = [
  { icon: Megaphone, step: '01', title: 'المحتوى العضوي / الإعلان', desc: 'يشاهد العميل فيديو Reel أو إعلان عن مشكلة يواجهها', bg: 'rgba(196,250,0,0.08)' },
  { icon: UserCheck, step: '02', title: 'زيارة الملف / الموقع', desc: 'يزور الحساب أو الموقع ويرى النتائج والهوية الاحترافية', bg: 'rgba(196,250,0,0.06)' },
  { icon: RotateCcw, step: '03', title: 'إعادة الاستهداف', desc: 'إعلان إعادة استهداف يحتوي على Case Study', bg: 'rgba(196,250,0,0.06)' },
  { icon: MessageSquare, step: '04', title: 'الاتصال عبر الواتساب', desc: 'ينقر على رابط الواتساب لبدء الاستفسار', bg: 'rgba(196,250,0,0.08)' },
  { icon: ClipboardCheck, step: '05', title: 'تأهيل العميل', desc: 'أسئلة التأهيل الآلية لتصنيف جديته', bg: 'rgba(196,250,0,0.06)' },
  { icon: Calendar, step: '06', title: 'حجز الاستشارة', desc: 'تحديد موعد استشارة حضورية أو عن بُعد', bg: 'rgba(196,250,0,0.06)' },
  { icon: FileSignature, step: '07', title: 'العقد والوفاء', desc: 'تقديم العرض القانوني وتفعيل خيارات السداد', bg: 'rgba(196,250,0,0.12)' },
]

export default function GrowthFunnel() {
  return (
    <section className="section-padding" style={{ backgroundColor: '#000', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '600px', height: '600px', borderRadius: '50%', background: 'rgba(196,250,0,0.03)', filter: 'blur(150px)', pointerEvents: 'none' }} />

      <div className="section-container" style={{ position: 'relative', zIndex: 10 }}>
        <SectionHeader badge="قمع التحويل" title="مسار التحويل الشامل" subtitle="من أول مشاهدة إلى توقيع العقد - مسار محدد ومحكم" />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '1rem' }}>
          {funnelSteps.map((step, i) => (
            <AnimatedSection key={i} delay={i * 0.08}>
              <div style={{ borderRadius: '1rem', padding: '1.25rem', height: '100%', transition: 'all 0.3s', backgroundColor: step.bg, border: '1px solid rgba(196,250,0,0.1)' }}>
                <div style={{ fontSize: '0.75rem', fontFamily: 'monospace', color: 'rgba(196,250,0,0.4)', marginBottom: '0.75rem' }}>{step.step}</div>
                <div style={{ width: '2.5rem', height: '2.5rem', borderRadius: '0.75rem', backgroundColor: 'rgba(196,250,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.75rem' }}>
                  <step.icon style={{ width: '1.25rem', height: '1.25rem', color: '#C4FA00' }} />
                </div>
                <h4 style={{ fontSize: '0.875rem', fontWeight: 700, color: '#FFF', marginBottom: '0.5rem', fontFamily: 'var(--font-display)', lineHeight: 1.4 }}>{step.title}</h4>
                <p style={{ fontSize: '0.75rem', color: '#6B7280', lineHeight: 1.5 }}>{step.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
