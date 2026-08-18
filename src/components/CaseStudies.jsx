import AnimatedSection from './AnimatedSection'
import {
  AlertCircle,
  Scale,
  Gavel,
  TrendingUp,
  BookOpen,
  Shield,
  Award,
  Users,
  ArrowLeftRight,
} from 'lucide-react'

const flowSteps = [
  {
    number: '01',
    icon: AlertCircle,
    title: 'المشكلة',
    titleEn: 'Problem',
    desc: 'تحديد المشكلة التي يواجهها العميل بوضوح',
  },
  {
    number: '02',
    icon: Scale,
    title: 'الIssue القانوني',
    titleEn: 'Legal Issue',
    desc: 'تحديد التحفظ أو التدخل القانوني المناسب',
  },
  {
    number: '03',
    icon: Gavel,
    title: 'الإجراء',
    titleEn: 'Action',
    desc: 'الخطوات القانونية التي اتخذتها للحل',
  },
  {
    number: '04',
    icon: TrendingUp,
    title: 'النتيجة',
    titleEn: 'Result',
    desc: 'النتيجة الإيجابية التي تم تحقيقها',
  },
  {
    number: '05',
    icon: BookOpen,
    title: 'الدرس',
    titleEn: 'Lesson',
    desc: 'الاستنتاج أو الارشاد الذي نشره',
  },
]

const valuePillars = [
  { icon: Shield, title: 'Trust', titleAr: 'الثقة' },
  { icon: Award, title: 'Authority', titleAr: 'السلطة' },
  { icon: Users, title: 'Social Proof', titleAr: 'البرهان الاجتماعي' },
  { icon: ArrowLeftRight, title: 'Conversion', titleAr: 'التحويل' },
]

export default function CaseStudies() {
  return (
    <section
      className="section-padding"
      style={{
        backgroundColor: '#000000',
        position: 'relative',
        overflow: 'clip',
      }}
    >
      <div
        style={{
          position: 'absolute',
          bottom: '10%',
          left: '30%',
          width: '500px',
          height: '400px',
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.01)',
          filter: 'blur(150px)',
          pointerEvents: 'none',
        }}
      />

      <div className="section-container" style={{ position: 'relative', zIndex: 10 }}>
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
              دراسات الحالة
            </h2>
            <p
              style={{
                fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)',
                color: '#A0A0A0',
                fontWeight: 500,
              }}
            >
              كيف نحول النتائج إلى ثقة وعملاء
            </p>
          </div>
        </AnimatedSection>

        {/* Flow */}
        <div
          id="case-studies-flow"
          style={{
            display: 'flex',
            alignItems: 'stretch',
            gap: '0',
            marginBottom: '3rem',
            position: 'relative',
            overflowX: 'auto',
            paddingBlock: '0.5rem',
          }}
        >
          {flowSteps.map((step, i) => (
            <AnimatedSection key={i} delay={0.1 + i * 0.08} direction="up">
              <div
                style={{
                  flex: 1,
                  minWidth: '160px',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                }}
              >
                {/* Connector line */}
                {i < flowSteps.length - 1 && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '2rem',
                      right: '-1rem',
                      width: '2rem',
                      height: '2px',
                      background:
                        'linear-gradient(90deg, rgba(255,255,255,0.15), rgba(255,255,255,0.05))',
                    }}
                  />
                )}

                <div
                  className="glass"
                  style={{
                    padding: '1.25rem 1rem',
                    borderRadius: '14px',
                    border: '1px solid rgba(255,255,255,0.08)',
                    background: 'rgba(20,20,20,0.7)',
                    width: '100%',
                    transition: 'all 0.3s',
                    cursor: 'default',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'
                    e.currentTarget.style.transform = 'translateY(-2px)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
                    e.currentTarget.style.transform = 'translateY(0)'
                  }}
                >
                  <span
                    style={{
                      fontSize: '0.7rem',
                      fontFamily: 'monospace',
                      color: 'rgba(255,255,255,0.25)',
                      display: 'block',
                      marginBottom: '0.5rem',
                    }}
                  >
                    {step.number}
                  </span>
                  <div
                    style={{
                      width: '2.5rem',
                      height: '2.5rem',
                      borderRadius: '10px',
                      backgroundColor: 'rgba(255,255,255,0.06)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginInline: 'auto',
                      marginBottom: '0.75rem',
                    }}
                  >
                    <step.icon
                      style={{
                        width: '1.15rem',
                        height: '1.15rem',
                        color: '#FFFFFF',
                      }}
                    />
                  </div>
                  <h4
                    style={{
                      fontSize: '0.95rem',
                      fontWeight: 700,
                      color: '#FFFFFF',
                      marginBottom: '0.15rem',
                      fontFamily: 'var(--font-display)',
                    }}
                  >
                    {step.title}
                  </h4>
                  <span
                    style={{
                      fontSize: '0.65rem',
                      color: '#A0A0A0',
                      fontWeight: 500,
                      display: 'block',
                      marginBottom: '0.5rem',
                    }}
                  >
                    {step.titleEn}
                  </span>
                  <p
                    style={{
                      fontSize: '0.75rem',
                      color: '#999999',
                      lineHeight: 1.5,
                      margin: 0,
                    }}
                  >
                    {step.desc}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Value Pillars */}
        <AnimatedSection delay={0.5}>
          <div
            className="value-pillars-grid"
            style={{
              display: 'grid',
              gap: '1rem',
              marginBottom: '2.5rem',
            }}
          >
            {valuePillars.map((vp, i) => (
              <div
                key={i}
                className="glass"
                style={{
                  padding: '1.25rem 1rem',
                  borderRadius: '14px',
                  border: '1px solid rgba(255,255,255,0.08)',
                  background: 'rgba(20,20,20,0.7)',
                  textAlign: 'center',
                  transition: 'all 0.3s',
                  cursor: 'default',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
                }}
              >
                <div
                  style={{
                    width: '2.25rem',
                    height: '2.25rem',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(255,255,255,0.06)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginInline: 'auto',
                    marginBottom: '0.625rem',
                  }}
                >
                  <vp.icon
                    style={{ width: '1.1rem', height: '1.1rem', color: '#FFFFFF' }}
                  />
                </div>
                <span
                  style={{
                    fontSize: '0.9rem',
                    fontWeight: 700,
                    color: '#FFFFFF',
                    display: 'block',
                    fontFamily: 'var(--font-display)',
                  }}
                >
                  {vp.titleAr}
                </span>
                <span
                  style={{ fontSize: '0.7rem', color: '#999999', fontWeight: 500 }}
                >
                  {vp.title}
                </span>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Compliance Note */}
        <AnimatedSection delay={0.6}>
          <div
            style={{
              textAlign: 'center',
              maxWidth: '56rem',
              marginInline: 'auto',
            }}
          >
            <p
              style={{
                fontSize: '0.75rem',
                color: '#999999',
                lineHeight: 1.7,
                padding: '1rem 1.5rem',
                borderRadius: '10px',
                backgroundColor: 'rgba(20,20,20,0.5)',
                border: '1px solid rgba(255,255,255,0.05)',
              }}
            >
              تُنشر الحالات وفق الضوابط المهنية، مع حماية سرية وخصوصية العملاء والحصول على الموافقات اللازمة عند الحاجة.
            </p>
          </div>
        </AnimatedSection>
      </div>

      <style>{`
        .value-pillars-grid {
          grid-template-columns: repeat(4, 1fr);
        }
        @media (max-width: 768px) {
          #case-studies-flow {
            flex-direction: column !important;
            align-items: stretch !important;
            gap: 1rem !important;
          }
          #case-studies-flow > div {
            min-width: 100% !important;
          }
          #case-studies-flow > div > div > div {
            flex-direction: row !important;
            text-align: end !important;
          }
          .value-pillars-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 480px) {
          .value-pillars-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}
