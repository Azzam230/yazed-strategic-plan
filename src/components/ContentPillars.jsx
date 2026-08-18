import { useState } from 'react'
import AnimatedSection from './AnimatedSection'
import SectionHeader from './SectionHeader'
import { HelpCircle, ShieldAlert, BookOpen, AlertTriangle, Briefcase, Newspaper } from 'lucide-react'

const pillars = [
  {
    number: '01',
    icon: HelpCircle,
    title: 'هل يحق لك؟',
    titleEn: 'Legal Entitlements',
    audience: 'B2C & B2B',
    example: 'هل يحق لك المطالبة بالتعويض بعد الإقالة؟',
  },
  {
    number: '02',
    icon: ShieldAlert,
    title: 'انتبه قبل لا...',
    titleEn: 'Risk Prevention',
    audience: 'B2C & B2B',
    example: 'انتبه قبل توقيع عقد شراء على الخارطة',
  },
  {
    number: '03',
    icon: BookOpen,
    title: 'قضية في دقيقة',
    titleEn: 'Case Stories',
    audience: 'عام',
    example: 'استرجاع مبلغ 2 مليون ريال في نزاع تجاري',
  },
  {
    number: '04',
    icon: AlertTriangle,
    title: 'ماذا تفعل إذا...؟',
    titleEn: 'Crisis Solutions',
    audience: 'B2C',
    example: 'ماذا تفعل إذا رفض المشتري سداد الدفعة الأخيرة؟',
  },
  {
    number: '05',
    icon: Briefcase,
    title: 'قانون الأعمال ببساطة',
    titleEn: 'B2B Legal',
    audience: 'CEOs & HR',
    example: 'ثغرات اللوائح الداخلية للشركات',
  },
  {
    number: '06',
    icon: Newspaper,
    title: 'ماذا يعني هذا القرار؟',
    titleEn: 'Legal News',
    audience: 'عام',
    example: 'تعديلات نظام العمل الجديدة وتأثيرها على الشركات',
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
            ? '1px solid rgba(196,250,0,0.25)'
            : '1px solid rgba(255,255,255,0.06)',
          transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
          cursor: 'default',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            insetInlineStart: 0,
            width: '100%',
            height: '3px',
            background: hovered
              ? 'linear-gradient(90deg, transparent, #C4FA00, transparent)'
              : 'linear-gradient(90deg, transparent, rgba(196,250,0,0.3), transparent)',
            transition: 'all 0.35s',
          }}
        />

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
              backgroundColor: 'rgba(196,250,0,0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <pillar.icon
              style={{ width: '1.25rem', height: '1.25rem', color: '#C4FA00' }}
            />
          </div>
          <span
            style={{
              fontSize: '0.8rem',
              fontFamily: 'monospace',
              color: '#C4FA00',
              fontWeight: 700,
              letterSpacing: '0.05em',
            }}
          >
            {pillar.number}
          </span>
        </div>

        <h3
          style={{
            fontSize: '1.2rem',
            fontWeight: 700,
            color: '#F5F7FA',
            marginBottom: '0.25rem',
            fontFamily: 'var(--font-display)',
            lineHeight: 1.4,
          }}
        >
          {pillar.title}
        </h3>

        <span
          style={{
            fontSize: '0.8rem',
            color: '#C4FA00',
            fontWeight: 500,
            display: 'block',
            marginBottom: '0.75rem',
          }}
        >
          {pillar.titleEn}
        </span>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            marginBottom: '1rem',
          }}
        >
          <span
            style={{
              padding: '0.2rem 0.625rem',
              borderRadius: '9999px',
              backgroundColor: 'rgba(196,250,0,0.1)',
              color: '#C4FA00',
              fontSize: '0.7rem',
              fontWeight: 600,
            }}
          >
            {pillar.audience}
          </span>
        </div>

        <div
          style={{
            backgroundColor: 'rgba(7,17,31,0.6)',
            borderRadius: '10px',
            padding: '0.75rem',
            border: '1px solid rgba(255,255,255,0.04)',
          }}
        >
          <p
            style={{
              fontSize: '0.8rem',
              color: '#94A3B8',
              lineHeight: 1.6,
              margin: 0,
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
      className="slide"
      style={{
        backgroundColor: '#07111F',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '10%',
          insetInlineStart: '50%',
          transform: 'translateX(-50%)',
          width: '700px',
          height: '350px',
          borderRadius: '50%',
          background: 'rgba(196,250,0,0.03)',
          filter: 'blur(150px)',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <AnimatedSection delay={0}>
          <SectionHeader
            badge="05"
            title="استراتيجية المحتوى"
            subtitle="6 ركائز محتوى مصممة لتحقيق التفاعل والتحويل"
          />
        </AnimatedSection>

        <div
          className="pillars-grid"
          style={{
            display: 'grid',
            gap: '1.25rem',
          }}
        >
          {pillars.map((pillar, i) => (
            <PillarCard key={i} pillar={pillar} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        .pillars-grid {
          grid-template-columns: repeat(3, 1fr);
        }
        @media (max-width: 1024px) {
          .pillars-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 640px) {
          .pillars-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}
