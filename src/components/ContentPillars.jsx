import AnimatedSection from './AnimatedSection'
import SectionHeader from './SectionHeader'
import { HelpCircle, ShieldAlert, BookOpen, AlertTriangle, Briefcase, Newspaper } from 'lucide-react'

const pillars = [
  { icon: HelpCircle, code: 'P1', title: 'هل يحق لك؟', titleEn: 'Legal Entitlements', audience: 'B2C & B2B', goal: 'إثارة الفضول وتحديد أحقية المطالبة', example: 'هل يحق لك المطالبة بالتعويض بعد الإقالة؟', colSpan: 1 },
  { icon: ShieldAlert, code: 'P2', title: 'انتبه قبل أن...', titleEn: 'Risk Prevention', audience: 'B2C & B2B', goal: 'الوقاية من الأخطاء القانونية', example: 'انتبه قبل توقيع عقد شراء على الخارطة', colSpan: 1 },
  { icon: BookOpen, code: 'P3', title: 'قصص وقضايا', titleEn: 'Case Stories', audience: 'عام', goal: 'بناء المصداقية المباشرة', example: 'استرجاع مبلغ 2 مليون ريال في نزاع تجاري', colSpan: 1 },
  { icon: AlertTriangle, code: 'P4', title: 'ماذا تفعل إذا...؟', titleEn: 'Crisis Solutions', audience: 'B2C', goal: 'التعامل مع الأزمات القانونية', example: 'ماذا تفعل إذا رفض المشتري سداد الدفعة الأخيرة؟', colSpan: 1 },
  { icon: Briefcase, code: 'P5', title: 'قانون وإدارة الأعمال', titleEn: 'B2B Legal', audience: 'CEOs & HR', goal: 'جلب عقود المحاماة السنوية', example: 'ثغرات اللوائح الداخلية للشركات', colSpan: 1 },
  { icon: Newspaper, code: 'P6', title: 'تحديثات الأنظمة', titleEn: 'Legal News', audience: 'عام', goal: 'إظهار Thought Leadership', example: 'تعديلات نظام العمل الجديدة', colSpan: 1 },
]

export default function ContentPillars() {
  return (
    <section id="pillars" className="section-padding" style={{ backgroundColor: '#000', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '800px', height: '400px', borderRadius: '50%', background: 'rgba(196,250,0,0.03)', filter: 'blur(150px)', pointerEvents: 'none' }} />

      <div className="section-container" style={{ position: 'relative', zIndex: 10 }}>
        <SectionHeader
          badge="ركائز المحتوى"
          title="6 ركائز محتوى استراتيجية"
          subtitle="ضمان تغطية المزيج بين الانتشار العريض والتحويل المباشر"
        />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.25rem' }}>
          {pillars.map((pillar, i) => (
            <AnimatedSection key={i} delay={i * 0.08}>
              <div className="glass-dark" style={{ borderRadius: '1.5rem', padding: '1.5rem', height: '100%', transition: 'all 0.3s', border: '1px solid rgba(255,255,255,0.08)' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '1rem' }}>
                  <div style={{ width: '3rem', height: '3rem', borderRadius: '1rem', backgroundColor: 'rgba(196,250,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <pillar.icon style={{ width: '1.5rem', height: '1.5rem', color: '#C4FA00' }} />
                  </div>
                  <span style={{ fontSize: '0.75rem', fontFamily: 'monospace', color: 'rgba(196,250,0,0.6)', backgroundColor: 'rgba(196,250,0,0.05)', padding: '0.25rem 0.5rem', borderRadius: '0.5rem' }}>
                    {pillar.code}
                  </span>
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#FFF', marginBottom: '0.25rem', fontFamily: 'var(--font-display)' }}>{pillar.title}</h3>
                <span style={{ fontSize: '0.875rem', color: '#C4FA00', fontWeight: 500 }}>{pillar.titleEn}</span>
                <p style={{ color: '#9CA3AF', fontSize: '0.875rem', marginTop: '0.75rem', marginBottom: '1rem', lineHeight: 1.6 }}>{pillar.goal}</p>
                <div style={{ backgroundColor: '#111111', borderRadius: '0.75rem', padding: '0.75rem', border: '1px solid #1C1C1C' }}>
                  <p style={{ fontSize: '0.75rem', color: '#6B7280', lineHeight: 1.6 }}>{pillar.example}</p>
                </div>
                <div style={{ marginTop: '1rem' }}>
                  <span style={{ padding: '0.25rem 0.625rem', borderRadius: '9999px', backgroundColor: 'rgba(196,250,0,0.1)', color: '#C4FA00', fontSize: '0.75rem', fontWeight: 600 }}>{pillar.audience}</span>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
