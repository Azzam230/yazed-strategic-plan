import AnimatedSection from './AnimatedSection'
import SectionHeader from './SectionHeader'
import { Users, Play, Eye, MousePointerClick, UserPlus, Phone, ArrowDown } from 'lucide-react'

const audienceParts = [
  'شاهد الفيديو',
  'زار الحساب',
  'تفاعل',
  'دخل الموقع',
  'ضغط الإعلان',
]

const flowSteps = [
  { icon: Users, title: 'الجمهور البارد', en: 'Cold Audience', desc: 'لم يعرفك بعد', bg: 'rgba(255,255,255,0.03)' },
  { icon: Play, title: 'المحتوى', en: 'Content', desc: 'فيديو يحل مشكلة', bg: 'rgba(196,250,0,0.04)' },
  { icon: Eye, title: 'الجمهور المتفاعل', en: 'Engaged Audience', desc: 'شاهد وتفاعل', bg: 'rgba(196,250,0,0.06)' },
  { icon: MousePointerClick, title: 'إعادة الاستهداف', en: 'Retargeting', desc: 'إعلان مخصص له', bg: 'rgba(196,250,0,0.08)' },
  { icon: UserPlus, title: 'عميل محتمل', en: 'Lead', desc: 'تارك بيانات', bg: 'rgba(196,250,0,0.1)' },
  { icon: Phone, title: 'الاستشارة', en: 'Consultation', desc: 'اتصال مباشر', bg: 'rgba(196,250,0,0.14)' },
]

export default function Retargeting() {
  return (
    <section id="retargeting" className="section-padding" style={{ backgroundColor: '#07111F', position: 'relative' }}>
      <div className="section-container">
        <SectionHeader
          badge="إعادة الاستهداف"
          title="لا نترك الزائر يضيع."
          subtitle="إعادة الاستهداف تحول الاهتمام إلى اتصال"
        />

        {/* Audience description */}
        <AnimatedSection delay={0.1}>
          <div className="glass" style={{
            borderRadius: '1.25rem', padding: '1.5rem',
            border: '1px solid rgba(196,250,0,0.1)', marginBottom: '2.5rem',
            textAlign: 'center',
          }}>
            <div style={{
              fontSize: '0.7rem', fontWeight: 700, color: '#C4FA00',
              fontFamily: 'monospace', marginBottom: '0.75rem', letterSpacing: '0.05em',
            }}>TARGET AUDIENCE</div>
            <p style={{
              fontSize: '1rem', color: '#F5F7FA', fontWeight: 500, lineHeight: 1.8, margin: 0,
            }}>
              الجمهور الذي:{' '}
              {audienceParts.map((part, i) => (
                <span key={i}>
                  <span style={{ color: '#C4FA00', fontWeight: 600 }}>{part}</span>
                  {i < audienceParts.length - 1 && <span style={{ color: '#64748B' }}> • </span>}
                </span>
              ))}
            </p>
          </div>
        </AnimatedSection>

        {/* Vertical Flow */}
        <div style={{
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0',
          maxWidth: '420px', marginInline: 'auto',
        }}>
          {flowSteps.map((step, i) => (
            <AnimatedSection key={i} delay={0.15 + i * 0.1} direction="up">
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div className="glass" style={{
                  borderRadius: '1rem', padding: '1.25rem 1.5rem', width: '100%',
                  display: 'flex', alignItems: 'center', gap: '1rem',
                  backgroundColor: step.bg,
                  border: i === flowSteps.length - 1
                    ? '1px solid rgba(196,250,0,0.2)'
                    : '1px solid rgba(255,255,255,0.06)',
                  transition: 'all 0.3s',
                }}>
                  <div style={{
                    width: '2.75rem', height: '2.75rem', borderRadius: '0.75rem',
                    backgroundColor: i === flowSteps.length - 1 ? '#C4FA00' : 'rgba(196,250,0,0.1)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  }}>
                    <step.icon style={{
                      width: '1.25rem', height: '1.25rem',
                      color: i === flowSteps.length - 1 ? '#07111F' : '#C4FA00',
                    }} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', marginBottom: '0.125rem' }}>
                      <span style={{ fontSize: '0.95rem', fontWeight: 700, color: '#F5F7FA', fontFamily: 'var(--font-display)' }}>{step.title}</span>
                      <span style={{ fontSize: '0.6rem', color: '#64748B', fontFamily: 'monospace' }}>{step.en}</span>
                    </div>
                    <span style={{ fontSize: '0.75rem', color: '#94A3B8' }}>{step.desc}</span>
                  </div>
                </div>
                {i < flowSteps.length - 1 && (
                  <div style={{
                    display: 'flex', justifyContent: 'center', paddingBlock: '0.375rem',
                  }}>
                    <ArrowDown style={{ width: '1rem', height: '1rem', color: 'rgba(196,250,0,0.3)' }} />
                  </div>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
