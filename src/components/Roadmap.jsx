import { useState } from 'react'
import AnimatedSection from './AnimatedSection'
import {
  FlaskConical, Settings, TrendingUp,
  CheckCircle2, ArrowRight, Target,
  BarChart3, Lightbulb, Scale
} from 'lucide-react'

const phases = [
  {
    id: '01',
    badge: 'TEST',
    month: 'الشهر الأول',
    title: 'التأسيس والاختبار',
    description: 'نبني الأساس، نختبر الرسائل والمحتوى والجمهور، ونحدد ما يستحق التوسع.',
    areas: [
      {
        title: 'Brand & Profiles',
        items: ['تحسين Bio و CTA', 'ترتيب Highlights', 'تثبيت أهم المنشورات', 'توحيد الهوية البصرية', 'تجهيز CTA واضح للاستشارة'],
      },
      {
        title: 'Content Testing',
        items: ['اختبار 4 أنواع Hooks', 'Case Studies', 'أسئلة قانونية شائعة', 'سيناريوهات "ماذا تفعل إذا؟"', 'محتوى B2B'],
      },
      {
        title: 'Paid Testing',
        items: ['إطلاق حملات B2C', 'إطلاق حملات B2B', 'اختبار عدة Creatives', 'اختبار عدة Audiences', 'اختبار رسائل إعلانية مختلفة'],
      },
      {
        title: 'Conversion Setup',
        items: ['تجهيز WhatsApp Flow', 'أسئلة التأهيل', 'Tracking', 'Lead Source Tracking', 'تحديد خط الأساس للأداء'],
      },
    ],
    decisions: {
      keep: 'المواضيع ذات Retention المرتفع',
      stop: 'الإعلانات ذات CPL المرتفع دون جودة Leads',
      scale: 'أفضل Hooks وأفضل الخدمات',
    },
  },
  {
    id: '02',
    badge: 'OPTIMIZE',
    month: 'الشهر الثاني',
    title: 'التحسين وبناء ما ينجح',
    description: 'نوقف ما لا работает، ونضاعف التركيز على المحتوى والحملات التي أثبتت قدرتها على جذب العملاء المحتملين.',
    areas: [
      {
        title: 'Content Optimization',
        items: ['مضاعفة إنتاج المواضيع الأعلى مشاهدة', 'تحسين Hooks', 'تحسين Retention', 'توسيع Case Studies الناجحة', 'إعادة تدوير أفضل المحتوى عبر المنصات'],
      },
      {
        title: 'Paid Optimization',
        items: ['إيقاف الإعلانات ضعيفة الأداء', 'زيادة الميزانية تدريجيًا للإعلانات الفائزة', 'اختبار Creatives جديدة', 'تحسين الاستهداف', 'تحسين مسارات التحويل'],
      },
      {
        title: 'Retargeting',
        items: ['استهداف مشاهدي الفيديو', 'استهداف المتفاعلين مع الحساب', 'استهداف زوار الموقع', 'استهداف من بدأ المحادثة ولم يكمل'],
      },
      {
        title: 'Conversion Optimization',
        items: ['تحليل جودة الـLeads', 'معرفة أكثر الخدمات طلبًا', 'تحسين أسئلة التأهيل', 'تحسين WhatsApp Flow', 'تحسين CTA'],
      },
    ],
    decisions: {
      keep: 'القنوات والمواضيع التي تحقق Leads بجودة عالية',
      stop: 'الحملات التي تستهلك ميزانية دون نتائج واضحة',
      scale: 'المحتوى والحملات الأعلى أداءً',
    },
  },
  {
    id: '03',
    badge: 'SCALE',
    month: 'الشهر الثالث',
    title: 'التوسع والتحويل',
    description: 'ننقل الميزانية والجهد إلى القنوات والمواضيع التي أثبتت أفضل أداء.',
    areas: [
      {
        title: 'Scale Winners',
        items: ['زيادة الاستثمار في أفضل الحملات', 'توسيع الجمهور تدريجيًا', 'إنتاج المزيد من الـWinning Creatives', 'التركيز على الخدمات الأعلى طلبًا'],
      },
      {
        title: 'B2B Growth',
        items: ['تكثيف LinkedIn Content', 'إطلاق حملات B2B محسنة', 'بناء محتوى Corporate Authority', 'استهداف أصحاب القرار'],
      },
      {
        title: 'Retention & Conversion',
        items: ['متابعة الـLeads', 'Retargeting', 'تحسين سرعة الرد', 'تحليل أسباب عدم التحويل', 'تحسين رحلة العميل'],
      },
      {
        title: 'Reporting & Planning',
        items: ['تحليل نتائج أول 90 يوم', 'مقارنة القنوات', 'مقارنة الخدمات', 'تحديد أفضل Content Pillars', 'تحديد الميزانية المقترحة للمرحلة التالية'],
      },
    ],
    decisions: {
      keep: 'القنوات والأدوات التي تحقق أفضل عائد',
      stop: 'أي محاولة جديدة غير مثبتة في هذا الوقت',
      scale: 'الحملات والمواضيع الفائزة بشكل مكثف',
    },
  },
]

const kpiFramework = [
  {
    stage: 'Awareness',
    metrics: ['Reach', 'Views', 'Watch Time', 'Profile Visits'],
  },
  {
    stage: 'Leads',
    metrics: ['Leads', 'CPL', 'Qualified Lead Rate'],
  },
  {
    stage: 'Conversion',
    metrics: ['Consultation Rate', 'Lead-to-Client Rate', 'CAC'],
  },
  {
    stage: 'Business',
    metrics: ['Contracts', 'Revenue', 'ROAS'],
  },
]

const after90Days = [
  'الخدمات الأكثر طلبًا',
  'المواضيع التي تحقق أعلى Reach',
  'الـHooks التي تحقق أفضل Retention',
  'المنصات التي تحقق أفضل Leads',
  'الجمهور الأكثر جودة',
  'الحملات التي تستحق زيادة الميزانية',
  'تكلفة الحصول على عميل محتمل',
  'معدل تحويل الـLead إلى استشارة',
  'والخطوة التالية للنمو',
]

function ProgressIndicator() {
  return (
    <AnimatedSection delay={0}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0', marginBottom: '1rem' }}>
        {['01', '02', '03'].map((num, i) => (
          <div key={num} style={{ display: 'flex', alignItems: 'center', gap: '0' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.375rem' }}>
              <div
                style={{
                  width: '2.5rem',
                  height: '2.5rem',
                  borderRadius: '50%',
                  backgroundColor: '#FFFFFF',
                  color: '#000000',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.8rem',
                  fontWeight: 800,
                }}
              >
                {num}
              </div>
              <span style={{ fontSize: '0.65rem', fontWeight: 600, color: '#FFFFFF', letterSpacing: '0.05em' }}>
                {i === 0 ? 'TEST' : i === 1 ? 'OPTIMIZE' : 'SCALE'}
              </span>
            </div>
            {i < 2 && (
              <div
                style={{
                  width: '4rem',
                  height: '2px',
                  backgroundColor: 'rgba(255,255,255,0.15)',
                  marginInline: '0.5rem',
                  marginBottom: '1.25rem',
                }}
              />
            )}
          </div>
        ))}
      </div>
    </AnimatedSection>
  )
}

function MonthCard({ phase, index }) {
  const [hovered, setHovered] = useState(false)

  return (
    <AnimatedSection delay={0.1 + index * 0.15} direction="up">
      <div
        className="glass"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          borderRadius: '20px',
          padding: 'clamp(1.5rem, 3vw, 2rem)',
          border: hovered ? '1px solid rgba(255,255,255,0.15)' : '1px solid rgba(255,255,255,0.08)',
          transition: 'all 0.35s',
          transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        }}
      >
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span
              style={{
                fontSize: '0.65rem',
                fontWeight: 700,
                letterSpacing: '0.08em',
                color: '#000000',
                backgroundColor: '#FFFFFF',
                padding: '0.3rem 0.75rem',
                borderRadius: '6px',
              }}
            >
              {phase.badge}
            </span>
            <span style={{ fontSize: '0.8rem', color: '#999999' }}>{phase.month}</span>
          </div>
          <span style={{ fontSize: '2rem', fontWeight: 800, color: 'rgba(255,255,255,0.06)' }}>
            {phase.id}
          </span>
        </div>

        {/* Title & Description */}
        <h3
          style={{
            fontSize: 'clamp(1.25rem, 2.5vw, 1.5rem)',
            fontWeight: 800,
            color: '#FFFFFF',
            marginBottom: '0.5rem',
            lineHeight: 1.3,
          }}
        >
          {phase.title}
        </h3>
        <p style={{ fontSize: '0.85rem', color: '#999999', lineHeight: 1.7, marginBottom: '1.5rem' }}>
          {phase.description}
        </p>

        {/* 2×2 Grid of Areas */}
        <div
          className="areas-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '1rem',
            marginBottom: '1.5rem',
          }}
        >
          {phase.areas.map((area, i) => (
            <div
              key={i}
              style={{
                padding: '1rem',
                borderRadius: '12px',
                backgroundColor: 'rgba(20,20,20,0.7)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              <h4
                style={{
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  color: '#FFFFFF',
                  marginBottom: '0.75rem',
                  letterSpacing: '0.02em',
                }}
              >
                {area.title}
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
                {area.items.map((item, j) => (
                  <div key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                    <CheckCircle2
                      style={{
                        width: '0.8rem',
                        height: '0.8rem',
                        color: '#FFFFFF',
                        marginTop: '3px',
                        flexShrink: 0,
                        opacity: 0.5,
                      }}
                    />
                    <span style={{ fontSize: '0.75rem', color: '#A0A0A0', lineHeight: 1.5 }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* KEEP / STOP / SCALE */}
        <div
          style={{
            padding: '1rem',
            borderRadius: '12px',
            backgroundColor: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#999999', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>
            قرارات نهاية المرحلة
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {[
              { label: 'KEEP', value: phase.decisions.keep, color: '#FFFFFF' },
              { label: 'STOP', value: phase.decisions.stop, color: '#999999' },
              { label: 'SCALE', value: phase.decisions.scale, color: '#FFFFFF' },
            ].map((d) => (
              <div key={d.label} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.625rem' }}>
                <span
                  style={{
                    fontSize: '0.6rem',
                    fontWeight: 700,
                    letterSpacing: '0.05em',
                    color: '#000000',
                    backgroundColor: d.label === 'STOP' ? 'rgba(255,255,255,0.3)' : '#FFFFFF',
                    padding: '0.2rem 0.5rem',
                    borderRadius: '4px',
                    flexShrink: 0,
                    marginTop: '1px',
                  }}
                >
                  {d.label}
                </span>
                <span style={{ fontSize: '0.8rem', color: d.color, lineHeight: 1.5 }}>
                  {d.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}

export default function Roadmap() {
  return (
    <section id="roadmap" className="section-padding" style={{ backgroundColor: '#000000', position: 'relative', overflow: 'clip' }}>
      <div className="section-container">

        {/* Header */}
        <AnimatedSection delay={0}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <div className="accent-line" style={{ marginInline: 'auto', marginBottom: '1rem' }} />
            <h2
              style={{
                fontSize: 'clamp(1.875rem, 4vw, 3rem)',
                fontWeight: 800,
                color: '#FFFFFF',
                lineHeight: 1.2,
                marginBottom: '0.5rem',
              }}
            >
              خطة 90 يومًا للتنفيذ
            </h2>
            <p style={{ fontSize: 'clamp(0.95rem, 2vw, 1.1rem)', color: '#999999', marginBottom: '0.25rem' }}>
              من التأسيس والاختبار إلى التحسين والتوسع
            </p>
            <p style={{ fontSize: '0.85rem', color: '#999999', letterSpacing: '0.03em' }}>
              نختبر → نتعلم → نُحسّن → نُوسّع
            </p>
          </div>
        </AnimatedSection>

        {/* Progress Indicator */}
        <ProgressIndicator />

        {/* 3 Month Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginBottom: '3.5rem' }}>
          {phases.map((phase, i) => (
            <MonthCard key={phase.id} phase={phase} index={i} />
          ))}
        </div>

        {/* TEST → LEARN → OPTIMIZE → SCALE bar */}
        <AnimatedSection delay={0.2} direction="up">
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0',
              marginBottom: '3.5rem',
              flexWrap: 'wrap',
            }}
          >
            {['TEST', 'LEARN', 'OPTIMIZE', 'SCALE'].map((step, i, arr) => (
              <div key={step} style={{ display: 'flex', alignItems: 'center', gap: '0' }}>
                <span
                  style={{
                    padding: '0.6rem 1.25rem',
                    borderRadius: '10px',
                    backgroundColor: i === arr.length - 1 ? '#FFFFFF' : 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    color: i === arr.length - 1 ? '#000000' : '#FFFFFF',
                    letterSpacing: '0.03em',
                  }}
                >
                  {step}
                </span>
                {i < arr.length - 1 && (
                  <ArrowRight style={{ width: '1rem', height: '1rem', color: '#999999', marginInline: '0.375rem', flexShrink: 0 }} />
                )}
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* KPI Framework */}
        <AnimatedSection delay={0.25} direction="up">
          <div style={{ marginBottom: '3.5rem' }}>
            <h3
              style={{
                fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
                fontWeight: 800,
                color: '#FFFFFF',
                textAlign: 'center',
                marginBottom: '1.5rem',
              }}
            >
              كيف نقيس النجاح؟
            </h3>

            <div
              className="kpi-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '1rem',
              }}
            >
              {kpiFramework.map((kpi, i) => (
                <AnimatedSection key={i} delay={0.3 + i * 0.08} direction="up">
                  <div
                    className="glass"
                    style={{
                      borderRadius: '16px',
                      padding: '1.25rem',
                      border: '1px solid rgba(255,255,255,0.08)',
                      textAlign: 'center',
                    }}
                  >
                    <span
                      style={{
                        fontSize: '0.7rem',
                        fontWeight: 700,
                        letterSpacing: '0.05em',
                        color: '#FFFFFF',
                        backgroundColor: 'rgba(255,255,255,0.06)',
                        padding: '0.3rem 0.75rem',
                        borderRadius: '6px',
                        display: 'inline-block',
                        marginBottom: '1rem',
                      }}
                    >
                      {kpi.stage}
                    </span>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      {kpi.metrics.map((m, j) => (
                        <span key={j} style={{ fontSize: '0.8rem', color: '#A0A0A0' }}>
                          {m}
                        </span>
                      ))}
                    </div>
                    {i < kpiFramework.length - 1 && (
                      <div className="kpi-arrow" style={{ display: 'none' }}>
                        <ArrowRight style={{ width: '1rem', height: '1rem', color: '#999999' }} />
                      </div>
                    )}
                  </div>
                </AnimatedSection>
              ))}
            </div>

            <AnimatedSection delay={0.5} direction="fade">
              <p
                style={{
                  fontSize: '0.75rem',
                  color: '#999999',
                  textAlign: 'center',
                  marginTop: '1rem',
                  fontStyle: 'italic',
                }}
              >
                يتم تحديد الأهداف الرقمية بعد بناء خط الأساس من بيانات أول مرحلة، ثم تعديلها بناءً على الأداء الفعلي.
              </p>
            </AnimatedSection>
          </div>
        </AnimatedSection>

        {/* 90-Day Operating System */}
        <AnimatedSection delay={0.35} direction="up">
          <div
            style={{
              padding: '1.5rem',
              borderRadius: '16px',
              backgroundColor: 'rgba(20,20,20,0.7)',
              border: '1px solid rgba(255,255,255,0.08)',
              textAlign: 'center',
              marginBottom: '3.5rem',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.75rem',
                flexWrap: 'wrap',
                marginBottom: '1rem',
              }}
            >
              {['DATA', 'TEST', 'LEARN', 'OPTIMIZE', 'SCALE'].map((step, i, arr) => (
                <div key={step} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span
                    style={{
                      padding: '0.5rem 1rem',
                      borderRadius: '8px',
                      backgroundColor: i === arr.length - 1 ? '#FFFFFF' : 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      color: i === arr.length - 1 ? '#000000' : '#FFFFFF',
                      letterSpacing: '0.05em',
                    }}
                  >
                    {step}
                  </span>
                  {i < arr.length - 1 && (
                    <ArrowRight style={{ width: '0.875rem', height: '0.875rem', color: '#999999', flexShrink: 0 }} />
                  )}
                </div>
              ))}
            </div>
            <p style={{ fontSize: '0.85rem', color: '#A0A0A0', lineHeight: 1.7 }}>
              كل مرحلة تعتمد على نتائج المرحلة السابقة.
            </p>
          </div>
        </AnimatedSection>

        {/* After 90 Days */}
        <AnimatedSection delay={0.4} direction="up">
          <div style={{ marginBottom: '2rem' }}>
            <h3
              style={{
                fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
                fontWeight: 800,
                color: '#FFFFFF',
                textAlign: 'center',
                marginBottom: '1.5rem',
              }}
            >
              بعد 90 يومًا سنعرف:
            </h3>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '0.75rem',
                maxWidth: '700px',
                margin: '0 auto',
              }}
              className="know-grid"
            >
              {after90Days.map((item, i) => (
                <AnimatedSection key={i} delay={0.45 + i * 0.04} direction="right">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <CheckCircle2 style={{ width: '0.875rem', height: '0.875rem', color: '#FFFFFF', flexShrink: 0, opacity: 0.5 }} />
                    <span style={{ fontSize: '0.8rem', color: '#A0A0A0', lineHeight: 1.5 }}>
                      {item}
                    </span>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Final Message */}
        <AnimatedSection delay={0.5} direction="up">
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <h3
              style={{
                fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
                fontWeight: 800,
                color: '#FFFFFF',
                marginBottom: '0.5rem',
                lineHeight: 1.4,
              }}
            >
              القرار بعد 90 يومًا لا يُبنى على الانطباع.
            </h3>
            <h3
              style={{
                fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
                fontWeight: 800,
                color: '#FFFFFF',
                lineHeight: 1.4,
              }}
            >
              يُبنى على البيانات.
            </h3>
          </div>
        </AnimatedSection>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .areas-grid {
            grid-template-columns: 1fr !important;
          }
          .kpi-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .know-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 600px) {
          .kpi-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
