import AnimatedSection from './AnimatedSection'
import { Pause, Eye, Lightbulb, Zap, MousePointerClick, Play } from 'lucide-react'

const phases = [
  { time: '0-2 ثانية', title: 'HOOK', desc: 'أوقف التمرير', icon: Pause },
  { time: '2-7 ثوانٍ', title: 'PROBLEM', desc: 'عرّف المشكلة', icon: Eye },
  { time: '7-25 ثانية', title: 'INSIGHT', desc: 'قدّم الحل', icon: Lightbulb },
  { time: '25-40 ثانية', title: 'SOLUTION', desc: 'اكشف المعلومة', icon: Zap },
  { time: 'نهاية', title: 'CTA', desc: 'حرّك العميل', icon: MousePointerClick },
]

const flowSteps = [
  { ar: 'أوقف', en: 'Stop' },
  { ar: 'شاهد', en: 'Watch' },
  { ar: 'افهم', en: 'Understand' },
  { ar: 'تذكّر', en: 'Remember' },
  { ar: 'تحرّك', en: 'Act' },
]

export default function VideoStrategy() {
  return (
    <section id="video" className="section-padding" style={{ backgroundColor: '#000000', position: 'relative' }}>
      <div className="section-container">
        <AnimatedSection delay={0}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2
              style={{
                fontSize: 'clamp(1.875rem, 4vw, 3rem)',
                fontWeight: 800,
                fontFamily: 'var(--font-display)',
                lineHeight: 1.2,
                color: '#FFFFFF',
                marginBottom: '0.5rem',
              }}
            >
              الفيديو القصير هو محرك الوصول
            </h2>
            <p
              style={{
                fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)',
                color: '#A0A0A0',
                fontWeight: 500,
              }}
            >
              Structure that maximizes retention and action
            </p>
          </div>
        </AnimatedSection>

        {/* Horizontal Timeline */}
        <AnimatedSection delay={0.15}>
          <div style={{ position: 'relative', marginBottom: '3rem', overflowX: 'auto', paddingBottom: '0.5rem' }}>
            {/* Connecting line */}
            <div style={{
              position: 'absolute', top: '44px', left: '5%', right: '5%',
              height: '2px', backgroundColor: 'rgba(255,255,255,0.08)', zIndex: 0,
            }} />
            <div style={{
              display: 'flex', gap: '0.5rem', justifyContent: 'space-between', position: 'relative', zIndex: 1, minWidth: '700px',
            }}>
              {phases.map((p, i) => (
                <AnimatedSection key={i} delay={0.2 + i * 0.1} direction="up" className="flex-1">
                  <div style={{
                    display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem', flex: 1,
                  }}>
                    {/* Dot */}
                    <div style={{
                      width: '14px', height: '14px', borderRadius: '50%',
                      backgroundColor: '#FFFFFF', border: '3px solid #000000',
                      boxShadow: '0 0 12px rgba(255,255,255,0.15)',
                      marginTop: '38px',
                    }} />
                    {/* Card */}
                    <div className="glass" style={{
                      borderRadius: '1rem', padding: '1rem', width: '100%',
                      textAlign: 'center', border: '1px solid rgba(255,255,255,0.08)',
                      background: 'rgba(20,20,20,0.7)',
                    }}>
                      <div style={{
                        width: '2.25rem', height: '2.25rem', borderRadius: '0.625rem',
                        backgroundColor: 'rgba(255,255,255,0.06)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        marginInline: 'auto', marginBottom: '0.625rem',
                      }}>
                        <p.icon style={{ width: '1.125rem', height: '1.125rem', color: '#FFFFFF' }} />
                      </div>
                      <div style={{
                        fontSize: '0.6rem', fontWeight: 700, fontFamily: 'monospace',
                        color: '#A0A0A0', marginBottom: '0.25rem', letterSpacing: '0.05em',
                      }}>{p.time}</div>
                      <div style={{
                        fontSize: '0.8rem', fontWeight: 700, color: '#FFFFFF',
                        fontFamily: 'var(--font-display)', marginBottom: '0.25rem',
                      }}>{p.title}</div>
                      <div style={{
                        fontSize: '0.75rem', color: '#A0A0A0', lineHeight: 1.4,
                      }}>{p.desc}</div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Example */}
        <AnimatedSection delay={0.4}>
          <div className="glass" style={{
            borderRadius: '1.25rem', padding: 'clamp(1.5rem, 3vw, 2rem)',
            border: '1px solid rgba(255,255,255,0.08)',
            background: 'rgba(20,20,20,0.7)',
          }}>
            <div style={{
              fontSize: '0.75rem', fontWeight: 600, color: '#A0A0A0',
              marginBottom: '1rem', fontFamily: 'monospace', letterSpacing: '0.05em',
            }}>EXAMPLE</div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
              <div style={{
                borderRadius: '0.875rem', padding: '1.25rem',
                backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)',
              }}>
                <div style={{ fontSize: '0.65rem', fontWeight: 700, color: '#A0A0A0', marginBottom: '0.5rem', fontFamily: 'monospace' }}>HOOK</div>
                <p style={{ fontSize: '0.95rem', color: '#FFFFFF', fontWeight: 600, lineHeight: 1.6, margin: 0 }}>
                  "اشتريت عقارًا وظهرت فيه مشكلة؟"
                </p>
              </div>
              <div style={{
                borderRadius: '0.875rem', padding: '1.25rem',
                backgroundColor: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)',
              }}>
                <div style={{ fontSize: '0.65rem', fontWeight: 700, color: '#999999', marginBottom: '0.5rem', fontFamily: 'monospace' }}>PROBLEM</div>
                <p style={{ fontSize: '0.95rem', color: '#FFFFFF', fontWeight: 600, lineHeight: 1.6, margin: 0 }}>
                  "لا تبدأ بهذه الخطوة."
                </p>
              </div>
            </div>

            {/* Flow */}
            <div style={{
              display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'center',
              padding: '1rem', borderRadius: '0.875rem',
              backgroundColor: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)',
            }}>
              {flowSteps.map((step, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <div style={{
                    display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.125rem',
                  }}>
                    <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#FFFFFF' }}>{step.ar}</span>
                    <span style={{ fontSize: '0.6rem', color: '#999999', fontFamily: 'monospace' }}>{step.en}</span>
                  </div>
                  {i < flowSteps.length - 1 && (
                    <Play style={{ width: '0.75rem', height: '0.75rem', color: 'rgba(255,255,255,0.35)', transform: 'scaleX(-1)' }} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
