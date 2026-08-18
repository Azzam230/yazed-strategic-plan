import AnimatedSection from './AnimatedSection'
import { Users, Play, Eye, MousePointerClick, UserPlus, Phone, ArrowDown } from 'lucide-react'

const audienceParts = [
  'شاهد الفيديو',
  'زار الحساب',
  'تفاعل',
  'دخل الموقع',
  'ضغط الإعلان',
]

const flowSteps = [
  { icon: Users, title: 'الجمهور البارد', en: 'Cold Audience', desc: 'لم يعرفك بعد' },
  { icon: Play, title: 'المحتوى', en: 'Content', desc: 'فيديو يحل مشكلة' },
  { icon: Eye, title: 'الجمهور المتفاعل', en: 'Engaged Audience', desc: 'شاهد وتفاعل' },
  { icon: MousePointerClick, title: 'إعادة الاستهداف', en: 'Retargeting', desc: 'إعلان مخصص له' },
  { icon: UserPlus, title: 'عميل محتمل', en: 'Lead', desc: 'تارك بيانات' },
  { icon: Phone, title: 'الاستشارة', en: 'Consultation', desc: 'اتصال مباشر' },
]

export default function Retargeting() {
  return (
    <section id="retargeting" className="section-padding" style={{ backgroundColor: '#000000', position: 'relative' }}>
      <div className="section-container">
        <AnimatedSection delay={0}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="accent-line" style={{ marginInline: 'auto', marginBottom: '1rem' }} />
            <h2 style={{
              fontSize: 'clamp(1.875rem, 4vw, 3rem)', fontWeight: 800,
              color: '#FFFFFF', lineHeight: 1.2, marginBottom: '0.75rem',
            }}>
              لا نترك الزائر يضيع.
            </h2>
            <p style={{
              fontSize: 'clamp(0.95rem, 2vw, 1.1rem)', color: '#A0A0A0',
              maxWidth: '48rem', marginInline: 'auto', lineHeight: 1.7,
            }}>
              إعادة الاستهداف تحول الاهتمام إلى اتصال
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="glass" style={{
            borderRadius: '1.25rem', padding: '1.5rem',
            border: '1px solid rgba(255,255,255,0.08)', marginBottom: '2.5rem',
            textAlign: 'center',
          }}>
            <div style={{
              fontSize: '0.7rem', fontWeight: 700, color: '#FFFFFF',
              fontFamily: 'monospace', marginBottom: '0.75rem', letterSpacing: '0.05em',
            }}>TARGET AUDIENCE</div>
            <p style={{
              fontSize: '1rem', color: '#FFFFFF', fontWeight: 500, lineHeight: 1.8, margin: 0,
            }}>
              الجمهور الذي:{' '}
              {audienceParts.map((part, i) => (
                <span key={i}>
                  <span style={{ color: '#FFFFFF', fontWeight: 600 }}>{part}</span>
                  {i < audienceParts.length - 1 && <span style={{ color: '#999999' }}> • </span>}
                </span>
              ))}
            </p>
          </div>
        </AnimatedSection>

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
                  border: i === flowSteps.length - 1
                    ? '1px solid rgba(255,255,255,0.15)'
                    : '1px solid rgba(255,255,255,0.08)',
                  transition: 'all 0.3s',
                }}>
                  <div style={{
                    width: '2.75rem', height: '2.75rem', borderRadius: '0.75rem',
                    backgroundColor: i === flowSteps.length - 1 ? '#FFFFFF' : 'rgba(255,255,255,0.06)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  }}>
                    <step.icon style={{
                      width: '1.25rem', height: '1.25rem',
                      color: i === flowSteps.length - 1 ? '#000000' : '#FFFFFF',
                    }} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', marginBottom: '0.125rem' }}>
                      <span style={{ fontSize: '0.95rem', fontWeight: 700, color: '#FFFFFF' }}>{step.title}</span>
                      <span style={{ fontSize: '0.6rem', color: '#999999', fontFamily: 'monospace' }}>{step.en}</span>
                    </div>
                    <span style={{ fontSize: '0.75rem', color: '#A0A0A0' }}>{step.desc}</span>
                  </div>
                </div>
                {i < flowSteps.length - 1 && (
                  <div style={{
                    display: 'flex', justifyContent: 'center', paddingBlock: '0.375rem',
                  }}>
                    <ArrowDown style={{ width: '1rem', height: '1rem', color: 'rgba(255,255,255,0.2)' }} />
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
