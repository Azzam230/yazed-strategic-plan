import { useState } from 'react'
import AnimatedSection from './AnimatedSection'
import {
  HelpCircle, ShieldAlert, BookOpen, AlertTriangle,
  Briefcase, Newspaper, ArrowRight, Video, MessageSquare, Building2
} from 'lucide-react'

const pillars = [
  {
    number: '01',
    icon: HelpCircle,
    title: 'هل يحق لك؟',
    titleEn: 'Legal Awareness',
    audience: 'B2C',
    objective: 'Reach + Education',
    example: 'فصلوك من العمل؟ متى تقدر تطالب بحقوقك؟',
    extras: [
      'خصموا من راتبك بدون ما تعرف السبب.. هل يحق لهم؟',
      'اشتريت عقار وطلع فيه عيب.. وش تقدر تسوي؟',
      'شخص استلف منك مبلغ ورفض يرجعه.. وش خياراتك؟',
    ],
  },
  {
    number: '02',
    icon: ShieldAlert,
    title: 'انتبه قبل لا تخسر',
    titleEn: 'Risk Prevention',
    audience: 'B2C + B2B',
    objective: 'Saves + Shares + Trust',
    example: 'بتوقّع عقد؟ 3 أشياء لا تتجاهلها.',
    extras: [
      'داخل شراكة؟ لا توقع قبل ما تتفقون على هذي الأمور.',
      'بتشتري عقار؟ لا تدفع قبل ما تتأكد من هذي النقاط.',
      'قبل ما توقع مخالصة مع جهة عملك.. انتبه.',
    ],
  },
  {
    number: '03',
    icon: BookOpen,
    title: 'قضية من الواقع',
    titleEn: 'Case Studies',
    audience: 'عام',
    objective: 'Trust + Authority',
    example: 'عميل طالب بمستحقاته.. وش كانت النتيجة؟',
    extras: [
      'نزاع عقاري وصل للمحكمة.. كيف تعاملنا معه؟',
      'مطالبة مالية رفضها الطرف الآخر.. وش صار بعدها؟',
      'قضية عمالية بدأت بخلاف وانتهت بحل قانوني.',
    ],
  },
  {
    number: '04',
    icon: AlertTriangle,
    title: 'وش تسوي إذا...؟',
    titleEn: 'Crisis Solutions',
    audience: 'B2C',
    objective: 'Engagement + Leads',
    example: 'المؤجر رفض يرجع لك مبلغ التأمين.. وش تسوي؟',
    extras: [
      'فصلوك من العمل وما صرفوا مستحقاتك.. وش تسوي؟',
      'المشتري رفض يسدد باقي المبلغ.. وش تسوي؟',
      'عندك مشكلة عقارية ولا تعرف من وين تبدأ؟',
    ],
  },
  {
    number: '05',
    icon: Briefcase,
    title: 'قانون الأعمال ببساطة',
    titleEn: 'B2B Legal',
    audience: 'CEOs + HR + Business Owners',
    objective: 'Authority + B2B Leads',
    example: 'شريكك انسحب من الشركة.. وش يصير؟',
    extras: [
      '3 أخطاء في العقود التجارية ممكن تكلف شركتك.',
      'بتأسس شركة؟ وش لازم تتفق عليه مع شريكك من البداية؟',
      'موظف ترك الشركة وأخذ معه بيانات العملاء.. وش موقف الشركة؟',
    ],
  },
  {
    number: '06',
    icon: Newspaper,
    title: 'وش الجديد؟',
    titleEn: 'Legal Updates',
    audience: 'B2C + B2B',
    objective: 'Authority + Timely Reach',
    example: 'صدر قرار جديد.. وش يعني لك كصاحب عمل؟',
    extras: [
      'تعديل جديد على نظام العمل.. وش اللي تغير؟',
      'قرار جديد يهم ملاك العقارات.. وش معناه؟',
      'تحديث قانوني يهم أصحاب الشركات.. وش لازم تعرف؟',
    ],
  },
]

const contentMix = [
  { step: 'جذب الانتباه', icon: HelpCircle },
  { step: 'بناء الثقة', icon: BookOpen },
  { step: 'إثبات الخبرة', icon: Briefcase },
  { step: 'تحويل الاهتمام إلى استشارة', icon: AlertTriangle },
]

const distribution = [
  { label: 'Reach & Awareness', percent: 40, color: '#FFFFFF' },
  { label: 'Trust & Case Studies', percent: 25, color: 'rgba(255,255,255,0.7)' },
  { label: 'Education & Prevention', percent: 20, color: 'rgba(255,255,255,0.5)' },
  { label: 'Conversion / Service-led', percent: 15, color: 'rgba(255,255,255,0.35)' },
]

const platformMapping = [
  {
    platform: 'Instagram / TikTok',
    icon: Video,
    pillars: ['هل يحق لك؟', 'انتبه قبل لا تخسر', 'وش تسوي إذا؟', 'قضايا من الواقع'],
  },
  {
    platform: 'X',
    icon: MessageSquare,
    pillars: ['هل يحق لك؟', 'وش الجديد؟', 'Threads قانونية'],
  },
  {
    platform: 'LinkedIn',
    icon: Building2,
    pillars: ['قانون الأعمال ببساطة', 'Case Studies', 'Legal Updates'],
  },
]

function PillarCard({ pillar, index }) {
  const [hovered, setHovered] = useState(false)

  return (
    <AnimatedSection delay={index * 0.08}>
      <div
        className="glass"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          borderRadius: '16px',
          padding: '1.5rem',
          height: '100%',
          transition: 'all 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          border: hovered
            ? '1px solid rgba(255,255,255,0.15)'
            : '1px solid rgba(255,255,255,0.08)',
          transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
          cursor: 'default',
          position: 'relative',
          overflow: 'clip',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Top accent line */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            insetInlineStart: 0,
            width: '100%',
            height: '3px',
            background: hovered
              ? 'linear-gradient(90deg, transparent, #FFFFFF, transparent)'
              : 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
            transition: 'all 0.35s',
          }}
        />

        {/* Header: Icon + Number */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '1rem',
          }}
        >
          <div
            style={{
              width: '2.75rem',
              height: '2.75rem',
              borderRadius: '12px',
              backgroundColor: 'rgba(255,255,255,0.06)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <pillar.icon style={{ width: '1.25rem', height: '1.25rem', color: '#FFFFFF' }} />
          </div>
          <span
            style={{
              fontSize: '0.8rem',
              fontFamily: 'monospace',
              color: '#FFFFFF',
              fontWeight: 700,
              letterSpacing: '0.05em',
            }}
          >
            {pillar.number}
          </span>
        </div>

        {/* Title */}
        <h3
          style={{
            fontSize: '1.2rem',
            fontWeight: 700,
            color: '#FFFFFF',
            marginBottom: '0.25rem',
            lineHeight: 1.4,
          }}
        >
          {pillar.title}
        </h3>

        {/* English Label */}
        <span
          style={{
            fontSize: '0.75rem',
            color: '#999999',
            fontWeight: 500,
            display: 'block',
            marginBottom: '0.75rem',
          }}
        >
          {pillar.titleEn}
        </span>

        {/* Tags: Audience + Objective */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            marginBottom: '1rem',
            flexWrap: 'wrap',
          }}
        >
          <span
            style={{
              padding: '0.2rem 0.625rem',
              borderRadius: '9999px',
              backgroundColor: 'rgba(255,255,255,0.06)',
              color: '#FFFFFF',
              fontSize: '0.65rem',
              fontWeight: 600,
            }}
          >
            {pillar.audience}
          </span>
          <span
            style={{
              padding: '0.2rem 0.625rem',
              borderRadius: '9999px',
              backgroundColor: 'rgba(255,255,255,0.04)',
              color: '#999999',
              fontSize: '0.65rem',
              fontWeight: 500,
            }}
          >
            {pillar.objective}
          </span>
        </div>

        {/* Hook Example */}
        <div
          style={{
            backgroundColor: 'rgba(20,20,20,0.5)',
            borderRadius: '10px',
            padding: '0.75rem',
            border: '1px solid rgba(255,255,255,0.06)',
            marginTop: 'auto',
          }}
        >
          <p
            style={{
              fontSize: '0.85rem',
              color: '#FFFFFF',
              lineHeight: 1.6,
              margin: 0,
              fontWeight: 600,
            }}
          >
            {pillar.example}
          </p>
        </div>
      </div>
    </AnimatedSection>
  )
}

export default function ContentPillars() {
  return (
    <section
      id="content"
      className="section-padding"
      style={{
        backgroundColor: '#000000',
        position: 'relative',
        overflow: 'clip',
      }}
    >
      {/* Background glow */}
      <div
        style={{
          position: 'absolute',
          top: '10%',
          insetInlineStart: '50%',
          transform: 'translateX(-50%)',
          width: '700px',
          height: '350px',
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.015)',
          filter: 'blur(150px)',
          pointerEvents: 'none',
        }}
      />

      <div className="section-container" style={{ position: 'relative', zIndex: 10 }}>
        {/* Header */}
        <AnimatedSection delay={0}>
          <div>
            <div
              style={{
                fontSize: '4rem',
                fontWeight: 800,
                color: '#FFFFFF',
                lineHeight: 1,
                marginBottom: 8,
              }}
            >
              04
            </div>
            <h2
              style={{
                fontSize: '2.5rem',
                fontWeight: 700,
                color: '#FFFFFF',
                marginBottom: 8,
              }}
            >
              استراتيجية المحتوى
            </h2>
            <p
              style={{
                fontSize: '1.1rem',
                color: '#A0A0A0',
                maxWidth: 600,
                lineHeight: 1.8,
                marginBottom: 48,
              }}
            >
              6 ركائز محتوى مصممة لبناء الثقة، زيادة الوصول، وتحويل الاهتمام إلى استشارات.
            </p>
          </div>
        </AnimatedSection>

        {/* 6 Pillar Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem', marginBottom: '3rem' }}>
          {pillars.map((pillar, i) => (
            <PillarCard key={i} pillar={pillar} index={i} />
          ))}
        </div>

        {/* Content Mix */}
        <AnimatedSection delay={0.2} direction="up">
          <div
            style={{
              padding: '1.5rem',
              borderRadius: '16px',
              backgroundColor: 'rgba(20,20,20,0.7)',
              border: '1px solid rgba(255,255,255,0.08)',
              marginBottom: '2rem',
            }}
          >
            <h3
              style={{
                fontSize: '1rem',
                fontWeight: 700,
                color: '#FFFFFF',
                marginBottom: '1rem',
                textAlign: 'center',
              }}
            >
              كيف نستخدم هذه الركائز؟
            </h3>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0',
                flexWrap: 'wrap',
              }}
            >
              {contentMix.map((item, i) => {
                const Icon = item.icon
                return (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0' }}>
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '0.75rem 1.25rem',
                      }}
                    >
                      <div
                        style={{
                          width: '2.5rem',
                          height: '2.5rem',
                          borderRadius: '10px',
                          backgroundColor: i === contentMix.length - 1 ? '#FFFFFF' : 'rgba(255,255,255,0.06)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <Icon
                          style={{
                            width: '1rem',
                            height: '1rem',
                            color: i === contentMix.length - 1 ? '#000000' : '#FFFFFF',
                          }}
                        />
                      </div>
                      <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#FFFFFF', textAlign: 'center' }}>
                        {item.step}
                      </span>
                    </div>
                    {i < contentMix.length - 1 && (
                      <ArrowRight style={{ width: '1rem', height: '1rem', color: '#999999', flexShrink: 0 }} />
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </AnimatedSection>

        {/* Distribution Chart */}
        <AnimatedSection delay={0.25} direction="up">
          <div
            style={{
              padding: '1.5rem',
              borderRadius: '16px',
              backgroundColor: 'rgba(20,20,20,0.7)',
              border: '1px solid rgba(255,255,255,0.08)',
              marginBottom: '2rem',
            }}
          >
            <h3
              style={{
                fontSize: '1rem',
                fontWeight: 700,
                color: '#FFFFFF',
                marginBottom: '1rem',
                textAlign: 'center',
              }}
            >
              توزيع المحتوى
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', maxWidth: '500px', margin: '0 auto' }}>
              {distribution.map((d, i) => (
                <div key={i}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.375rem' }}>
                    <span style={{ fontSize: '0.8rem', color: '#A0A0A0' }}>{d.label}</span>
                    <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#FFFFFF' }}>{d.percent}%</span>
                  </div>
                  <div style={{ width: '100%', height: '6px', backgroundColor: 'rgba(255,255,255,0.06)', borderRadius: '3px', overflow: 'hidden' }}>
                    <div style={{ width: `${d.percent}%`, height: '100%', backgroundColor: d.color, borderRadius: '3px' }} />
                  </div>
                </div>
              ))}
            </div>

            <p style={{ fontSize: '0.7rem', color: '#999999', textAlign: 'center', marginTop: '0.75rem', fontStyle: 'italic' }}>
              توزيع مبدئي قابل للتعديل بناءً على الأداء.
            </p>
          </div>
        </AnimatedSection>

        {/* Platform Mapping */}
        <AnimatedSection delay={0.3} direction="up">
          <div
            className="platform-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1rem',
              marginBottom: '2rem',
            }}
          >
            {platformMapping.map((p, i) => {
              const Icon = p.icon
              return (
                <div
                  key={i}
                  className="glass"
                  style={{
                    borderRadius: '14px',
                    padding: '1.25rem',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                    <Icon style={{ width: '1rem', height: '1rem', color: '#FFFFFF' }} />
                    <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#FFFFFF' }}>
                      {p.platform}
                    </span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
                    {p.pillars.map((pill, j) => (
                      <span key={j} style={{ fontSize: '0.75rem', color: '#A0A0A0' }}>
                        {pill}
                      </span>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </AnimatedSection>

        {/* CTA Strategy */}
        <AnimatedSection delay={0.35} direction="up">
          <div
            style={{
              padding: '1.5rem',
              borderRadius: '16px',
              backgroundColor: 'rgba(20,20,20,0.7)',
              border: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            <h3
              style={{
                fontSize: '1rem',
                fontWeight: 700,
                color: '#FFFFFF',
                marginBottom: '1rem',
                textAlign: 'center',
              }}
            >
              CTA حسب نوع المحتوى
            </h3>
            <div
              className="cta-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '0.75rem',
              }}
            >
              {[
                { type: 'Awareness', cta: 'احفظ المعلومة.' },
                { type: 'Engagement', cta: 'هل مرّ عليك هذا الموقف؟' },
                { type: 'Trust', cta: 'شاهد كيف تعاملنا مع الحالة.' },
                { type: 'Conversion', cta: 'إذا كانت حالتك مشابهة، احجز استشارة.' },
                { type: 'B2B', cta: 'إذا كانت شركتك تواجه موقفًا مشابهًا، تواصل مع المكتب.' },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    padding: '0.75rem',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}
                >
                  <span style={{ fontSize: '0.65rem', fontWeight: 700, color: '#999999', letterSpacing: '0.05em', display: 'block', marginBottom: '0.375rem' }}>
                    {item.type}
                  </span>
                  <span style={{ fontSize: '0.8rem', color: '#FFFFFF', lineHeight: 1.5 }}>
                    {item.cta}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .platform-grid {
            grid-template-columns: 1fr !important;
          }
          .cta-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
