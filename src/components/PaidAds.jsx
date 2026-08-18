import AnimatedSection from './AnimatedSection'
import {
  Check, Megaphone, Phone, Target, CalendarCheck, FileSignature,
  Camera, Briefcase, ArrowRight, MessageSquare
} from 'lucide-react'

const organicItems = [
  { icon: Megaphone, label: 'الوعي', en: 'Awareness' },
  { icon: Check, label: 'السلطة', en: 'Authority' },
  { icon: Check, label: 'الثقة', en: 'Trust' },
  { icon: Check, label: 'المجتمع', en: 'Community' },
]

const paidItems = [
  { icon: Check, label: 'العملاء المحتملون', en: 'Leads' },
  { icon: Phone, label: 'الواتساب', en: 'WhatsApp' },
  { icon: Target, label: 'إعادة الاستهداف', en: 'Retargeting' },
  { icon: CalendarCheck, label: 'الاستشارات', en: 'Consultations' },
  { icon: FileSignature, label: 'التحويل', en: 'Conversion' },
]

const b2cSteps = [
  'Instagram / TikTok', 'إعلان فيديو', 'Landing / WhatsApp',
  'التأهيل', 'الاستشارة', 'العقد',
]

const b2bSteps = [
  'LinkedIn / X', 'مشكلة تجارية', 'Lead',
  'التأهيل', 'الاستشارة', 'عميل مؤسسي',
]

export default function PaidAds() {
  return (
    <section id="paid" className="section-padding" style={{ backgroundColor: '#000000', position: 'relative' }}>
      <div className="section-container">
        <AnimatedSection>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span style={{
              display: 'inline-block', padding: '0.375rem 1rem', borderRadius: '9999px',
              fontSize: '0.875rem', fontWeight: 600, marginBottom: '1rem',
              backgroundColor: 'rgba(255,255,255,0.06)', color: '#FFFFFF',
              border: '1px solid rgba(255,255,255,0.08)',
            }}>08</span>
            <h2 style={{
              fontSize: 'clamp(1.875rem, 4vw, 3rem)', fontWeight: 800,
              fontFamily: 'var(--font-display)', lineHeight: 1.2, color: '#A0A0A0', marginBottom: '0.5rem',
            }}>
              النمو العضوي يبني الثقة.
            </h2>
            <h2 style={{
              fontSize: 'clamp(1.875rem, 4vw, 3rem)', fontWeight: 800,
              fontFamily: 'var(--font-display)', lineHeight: 1.2, color: '#FFFFFF',
            }}>
              الإعلانات تلتقط الطلب.
            </h2>
          </div>
        </AnimatedSection>

        {/* Organic vs Paid columns */}
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: '1.5rem',
          alignItems: 'stretch', marginBottom: '3rem',
        }}>
          {/* Organic (right in RTL) */}
          <AnimatedSection delay={0.1} direction="right">
            <div className="glass" style={{
              borderRadius: '1.25rem', padding: '1.75rem', height: '100%',
              border: '1px solid rgba(255,255,255,0.08)',
              background: 'rgba(20,20,20,0.7)',
            }}>
              <div style={{
                fontSize: '0.7rem', fontWeight: 700, color: '#A0A0A0',
                fontFamily: 'monospace', marginBottom: '0.25rem', letterSpacing: '0.08em',
              }}>ORGANIC</div>
              <h3 style={{
                fontSize: '1.25rem', fontWeight: 700, color: '#FFFFFF',
                fontFamily: 'var(--font-display)', marginBottom: '1.25rem',
              }}>العضوي</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {organicItems.map((item, i) => (
                  <div key={i} style={{
                    display: 'flex', alignItems: 'center', gap: '0.75rem',
                    padding: '0.75rem 1rem', borderRadius: '0.75rem',
                    backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)',
                  }}>
                    <div style={{
                      width: '2rem', height: '2rem', borderRadius: '0.5rem',
                      backgroundColor: 'rgba(255,255,255,0.06)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                    }}>
                      <item.icon style={{ width: '1rem', height: '1rem', color: '#FFFFFF' }} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.875rem', fontWeight: 600, color: '#FFFFFF' }}>{item.label}</div>
                      <div style={{ fontSize: '0.65rem', color: '#666666', fontFamily: 'monospace' }}>{item.en}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Center GROWTH */}
          <AnimatedSection delay={0.25} direction="fade">
            <div style={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              paddingInline: '1rem',
            }}>
              <div style={{
                writingMode: 'vertical-rl', textOrientation: 'mixed',
                fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900,
                fontFamily: 'monospace', color: '#FFFFFF', letterSpacing: '0.15em',
                opacity: 0.15, lineHeight: 1,
              }}>GROWTH</div>
              <div style={{
                width: '2px', flex: 1, minHeight: '60px',
                background: 'linear-gradient(to bottom, rgba(255,255,255,0.15), transparent)',
                marginBlock: '1rem',
              }} />
            </div>
          </AnimatedSection>

          {/* Paid (left in RTL) */}
          <AnimatedSection delay={0.1} direction="left">
            <div className="glass" style={{
              borderRadius: '1.25rem', padding: '1.75rem', height: '100%',
              border: '1px solid rgba(255,255,255,0.08)',
              background: 'rgba(20,20,20,0.7)',
            }}>
              <div style={{
                fontSize: '0.7rem', fontWeight: 700, color: '#666666',
                fontFamily: 'monospace', marginBottom: '0.25rem', letterSpacing: '0.08em',
              }}>PAID</div>
              <h3 style={{
                fontSize: '1.25rem', fontWeight: 700, color: '#FFFFFF',
                fontFamily: 'var(--font-display)', marginBottom: '1.25rem',
              }}>الممول</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {paidItems.map((item, i) => (
                  <div key={i} style={{
                    display: 'flex', alignItems: 'center', gap: '0.75rem',
                    padding: '0.75rem 1rem', borderRadius: '0.75rem',
                    backgroundColor: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)',
                  }}>
                    <div style={{
                      width: '2rem', height: '2rem', borderRadius: '0.5rem',
                      backgroundColor: 'rgba(255,255,255,0.05)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                    }}>
                      <item.icon style={{ width: '1rem', height: '1rem', color: '#A0A0A0' }} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.875rem', fontWeight: 600, color: '#FFFFFF' }}>{item.label}</div>
                      <div style={{ fontSize: '0.65rem', color: '#666666', fontFamily: 'monospace' }}>{item.en}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* B2C Funnel */}
        <AnimatedSection delay={0.3}>
          <div className="glass" style={{
            borderRadius: '1.25rem', padding: 'clamp(1.5rem, 3vw, 2rem)',
            border: '1px solid rgba(255,255,255,0.08)', marginBottom: '1.25rem',
            background: 'rgba(20,20,20,0.7)',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', marginBottom: '1.25rem' }}>
              <div style={{
                padding: '0.25rem 0.75rem', borderRadius: '9999px',
                backgroundColor: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)',
                fontSize: '0.7rem', fontWeight: 700, color: '#FFFFFF', fontFamily: 'monospace',
              }}>B2C</div>
              <span style={{ fontSize: '1rem', fontWeight: 700, color: '#FFFFFF', fontFamily: 'var(--font-display)' }}>قمع تحويل B2C</span>
            </div>

            {/* Steps flow */}
            <div style={{
              display: 'flex', alignItems: 'center', gap: '0.375rem', flexWrap: 'wrap', marginBottom: '1.25rem',
            }}>
              {b2cSteps.map((step, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                  <span style={{
                    padding: '0.375rem 0.75rem', borderRadius: '0.5rem',
                    backgroundColor: i === b2cSteps.length - 1 ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.03)',
                    border: i === b2cSteps.length - 1 ? '1px solid rgba(255,255,255,0.15)' : '1px solid rgba(255,255,255,0.06)',
                    fontSize: '0.75rem', fontWeight: 600,
                    color: i === b2cSteps.length - 1 ? '#FFFFFF' : '#A0A0A0',
                  }}>{step}</span>
                  {i < b2cSteps.length - 1 && (
                    <ArrowRight style={{ width: '0.75rem', height: '0.75rem', color: '#666666' }} />
                  )}
                </div>
              ))}
            </div>

            {/* Example ad */}
            <div style={{
              borderRadius: '0.875rem', padding: '1.25rem',
              backgroundColor: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)',
            }}>
              <div style={{ fontSize: '0.65rem', fontWeight: 700, color: '#666666', marginBottom: '0.75rem', fontFamily: 'monospace' }}>EXAMPLE AD</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <div>
                  <span style={{ fontSize: '0.7rem', fontWeight: 700, color: '#A0A0A0' }}>Hook: </span>
                  <span style={{ fontSize: '0.85rem', color: '#FFFFFF', fontWeight: 600 }}>"عندك نزاع عقاري؟"</span>
                </div>
                <div>
                  <span style={{ fontSize: '0.7rem', fontWeight: 700, color: '#666666' }}>Body: </span>
                  <span style={{ fontSize: '0.85rem', color: '#A0A0A0' }}>"قبل اتخاذ أي خطوة، افهم موقفك النظامي."</span>
                </div>
                <div style={{
                  display: 'inline-flex', alignSelf: 'flex-start',
                  padding: '0.375rem 1rem', borderRadius: '9999px',
                  backgroundColor: '#FFFFFF', color: '#000000',
                  fontSize: '0.75rem', fontWeight: 700, marginTop: '0.25rem',
                }}>طلب استشارة</div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* B2B Funnel */}
        <AnimatedSection delay={0.4}>
          <div className="glass" style={{
            borderRadius: '1.25rem', padding: 'clamp(1.5rem, 3vw, 2rem)',
            border: '1px solid rgba(255,255,255,0.08)',
            background: 'rgba(20,20,20,0.7)',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', marginBottom: '1.25rem' }}>
              <div style={{
                padding: '0.25rem 0.75rem', borderRadius: '9999px',
                backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)',
                fontSize: '0.7rem', fontWeight: 700, color: '#A0A0A0', fontFamily: 'monospace',
              }}>B2B</div>
              <span style={{ fontSize: '1rem', fontWeight: 700, color: '#FFFFFF', fontFamily: 'var(--font-display)' }}>قمع تحويل B2B</span>
            </div>

            {/* Steps flow */}
            <div style={{
              display: 'flex', alignItems: 'center', gap: '0.375rem', flexWrap: 'wrap', marginBottom: '1.25rem',
            }}>
              {b2bSteps.map((step, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                  <span style={{
                    padding: '0.375rem 0.75rem', borderRadius: '0.5rem',
                    backgroundColor: i === b2bSteps.length - 1 ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.03)',
                    border: i === b2bSteps.length - 1 ? '1px solid rgba(255,255,255,0.15)' : '1px solid rgba(255,255,255,0.06)',
                    fontSize: '0.75rem', fontWeight: 600,
                    color: i === b2bSteps.length - 1 ? '#FFFFFF' : '#A0A0A0',
                  }}>{step}</span>
                  {i < b2bSteps.length - 1 && (
                    <ArrowRight style={{ width: '0.75rem', height: '0.75rem', color: '#666666' }} />
                  )}
                </div>
              ))}
            </div>

            {/* Example */}
            <div style={{
              borderRadius: '0.875rem', padding: '1.25rem',
              backgroundColor: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)',
            }}>
              <div style={{ fontSize: '0.65rem', fontWeight: 700, color: '#666666', marginBottom: '0.75rem', fontFamily: 'monospace' }}>EXAMPLE AD</div>
              <p style={{ fontSize: '0.9rem', color: '#FFFFFF', fontWeight: 500, lineHeight: 1.7, margin: '0 0 0.75rem 0' }}>
                "3 أخطاء في عقود الشركات قد تتحول إلى مشكلة مكلفة."
              </p>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                padding: '0.375rem 1rem', borderRadius: '9999px',
                backgroundColor: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)',
                color: '#FFFFFF', fontSize: '0.75rem', fontWeight: 600,
              }}>
                <MessageSquare style={{ width: '0.875rem', height: '0.875rem' }} />
                تواصل مع المكتب
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
