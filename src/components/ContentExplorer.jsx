import { useState } from 'react'
import AnimatedSection from './AnimatedSection'
import { Lightbulb, ExternalLink } from 'lucide-react'

const tabs = [
  { id: 'all', label: 'الكل' },
  { id: 'entitlement', label: 'هل يحق لك؟' },
  { id: 'risk', label: 'انتبه قبل لا...' },
  { id: 'case', label: 'قضية في دقيقة' },
  { id: 'crisis', label: 'ماذا تفعل إذا...؟' },
  { id: 'b2b', label: 'قانون الأعمال ببساطة' },
  { id: 'news', label: 'ماذا يعني هذا القرار؟' },
]

const ideas = [
  {
    id: 1,
    pillar: 'هل يحق لك؟',
    pillarId: 'entitlement',
    title: 'هل يحق لك تجاوز بوابيع الإجارة؟',
    platform: 'Instagram Reel',
    platformColor: '#E1306C',
    description: 'شرح لحقوق المستأجر والمالك عند حدوث خلاف حول بنود الإجارة',
    tags: ['تعليمي', 'تحفيزي'],
  },
  {
    id: 2,
    pillar: 'انتبه قبل لا...',
    pillarId: 'risk',
    title: '3 بنود يجب فحصها قبل توقيع عقد العمل',
    platform: 'LinkedIn Post',
    platformColor: '#0A66C2',
    description: 'aremphasizes على أهمية قراءة العقد قبل التوقيع لحماية حقوقك',
    tags: ['توعوي', 'تعليمي'],
  },
  {
    id: 3,
    pillar: 'قضية في دقيقة',
    pillarId: 'case',
    title: 'قضية أمانة: شركاء تجاريون واختلاف في التقسيم',
    platform: 'TikTok',
    platformColor: '#FF004F',
    description: 'قصة واقعية عن نزاع بين شركاء تجاريين وكيف تم حله بالقانون',
    tags: ['ترفيهي', 'قانوني'],
  },
  {
    id: 4,
    pillar: 'ماذا تفعل إذا...؟',
    pillarId: 'crisis',
    title: 'ماذا تفعل إذا تم حذفك من واتساب العمل فجأة؟',
    platform: 'Instagram Carousel',
    platformColor: '#E1306C',
    description: 'خطوات عملية للتعامل مع فقدان الوصول لحسابات العمل الرقمية',
    tags: ['عملي', 'توعوي'],
  },
  {
    id: 5,
    pillar: 'قانون الأعمال ببساطة',
    pillarId: 'b2b',
    title: 'كيف تحفظ حقوقك في عقد المقاولات',
    platform: 'LinkedIn',
    platformColor: '#0A66C2',
    description: 'نصائح للشركات والمقاولين عند إبرام عقود المقاولات',
    tags: ['تعليمي', 'B2B'],
  },
  {
    id: 6,
    pillar: 'ماذا يعني هذا القرار؟',
    pillarId: 'news',
    title: 'الجديد من هيئة التسويق: قرار حماية تجارب المستهلك',
    platform: 'X Thread',
    platformColor: '#94A3B8',
    description: 'تحليل مبسّط لأحدث القرارات التنظيمية وتأثيرها على الشركات',
    tags: ['تحليلي', 'أخبار'],
  },
  {
    id: 7,
    pillar: 'قانون الأعمال ببساطة',
    pillarId: 'b2b',
    title: '5 أخطاء تجنبها عند تأسيس شركة',
    platform: 'Instagram Reel',
    platformColor: '#E1306C',
    description: 'الأخطاء الشائعة التي يقع فيها رواد الأعمال عند بدء مشروعهم',
    tags: ['تعليمي', 'تحفيزي'],
  },
  {
    id: 8,
    pillar: 'هل يحق لك؟',
    pillarId: 'entitlement',
    title: 'هل يمكنك فسخ العقد بسبب التأخر عن التسليم؟',
    platform: 'TikTok',
    platformColor: '#FF004F',
    description: 'شرح للحقوق القانونية عند إخلال الطرف الآخر بمواعيد التسليم',
    tags: ['توعوي', 'قانوني'],
  },
]

function IdeaCard({ idea, index }) {
  const [hovered, setHovered] = useState(false)

  return (
    <AnimatedSection delay={index * 0.06} direction="up">
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
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
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
            gap: '0.5rem',
          }}
        >
          <span
            style={{
              padding: '0.25rem 0.75rem',
              borderRadius: '9999px',
              backgroundColor: 'rgba(196,250,0,0.1)',
              color: '#C4FA00',
              fontSize: '0.7rem',
              fontWeight: 600,
              whiteSpace: 'nowrap',
            }}
          >
            {idea.pillar}
          </span>
          <span
            style={{
              padding: '0.2rem 0.625rem',
              borderRadius: '9999px',
              backgroundColor: `${idea.platformColor}18`,
              color: idea.platformColor,
              fontSize: '0.65rem',
              fontWeight: 600,
              whiteSpace: 'nowrap',
            }}
          >
            {idea.platform}
          </span>
        </div>

        <h3
          style={{
            fontSize: '1.05rem',
            fontWeight: 700,
            color: '#F5F7FA',
            fontFamily: 'var(--font-display)',
            lineHeight: 1.5,
            margin: 0,
          }}
        >
          {idea.title}
        </h3>

        <p
          style={{
            fontSize: '0.8rem',
            color: '#94A3B8',
            lineHeight: 1.7,
            margin: 0,
            flex: 1,
          }}
        >
          {idea.description}
        </p>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            flexWrap: 'wrap',
          }}
        >
          {idea.tags.map((tag, i) => (
            <span
              key={i}
              style={{
                padding: '0.2rem 0.5rem',
                borderRadius: '6px',
                backgroundColor: 'rgba(148,163,184,0.1)',
                color: '#94A3B8',
                fontSize: '0.65rem',
                fontWeight: 500,
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}

export default function ContentExplorer() {
  const [activeTab, setActiveTab] = useState('all')

  const filteredIdeas =
    activeTab === 'all'
      ? ideas
      : ideas.filter((idea) => idea.pillarId === activeTab)

  return (
    <section
      id="content-explorer"
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
          top: '20%',
          insetInlineStart: '50%',
          transform: 'translateX(-50%)',
          width: '600px',
          height: '300px',
          borderRadius: '50%',
          background: 'rgba(196,250,0,0.03)',
          filter: 'blur(150px)',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <AnimatedSection delay={0}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.4rem 1rem',
                borderRadius: '9999px',
                backgroundColor: 'rgba(196,250,0,0.08)',
                border: '1px solid rgba(196,250,0,0.15)',
                marginBottom: '1.25rem',
              }}
            >
              <Lightbulb style={{ width: '0.875rem', height: '0.875rem', color: '#C4FA00' }} />
              <span
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: '#C4FA00',
                  letterSpacing: '0.05em',
                }}
              >
                INTERACTIVE
              </span>
            </div>
            <h2
              style={{
                fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
                fontWeight: 800,
                color: '#F5F7FA',
                fontFamily: 'var(--font-display)',
                marginBottom: '0.5rem',
                lineHeight: 1.3,
              }}
            >
              مستكشف أفكار المحتوى
            </h2>
            <p
              style={{
                fontSize: '1rem',
                color: '#94A3B8',
                maxWidth: '500px',
                margin: '0 auto',
              }}
            >
              Find the right content idea for your audience and platform
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.25rem',
              padding: '0.375rem',
              backgroundColor: 'rgba(16,31,50,0.8)',
              borderRadius: '14px',
              border: '1px solid rgba(255,255,255,0.06)',
              marginBottom: '2rem',
              overflowX: 'auto',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    padding: '0.6rem 1rem',
                    borderRadius: '10px',
                    border: 'none',
                    backgroundColor: isActive ? 'rgba(196,250,0,0.1)' : 'transparent',
                    color: isActive ? '#C4FA00' : '#64748B',
                    fontSize: '0.8rem',
                    fontWeight: isActive ? 700 : 500,
                    fontFamily: 'inherit',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                    whiteSpace: 'nowrap',
                    position: 'relative',
                    borderBottom: isActive ? '2px solid #C4FA00' : '2px solid transparent',
                    borderRadius: '8px',
                  }}
                >
                  {tab.label}
                </button>
              )
            })}
          </div>
        </AnimatedSection>

        <div
          className="explorer-grid"
          style={{
            display: 'grid',
            gap: '1.25rem',
          }}
        >
          {filteredIdeas.map((idea, i) => (
            <IdeaCard key={idea.id} idea={idea} index={i} />
          ))}
        </div>

        <AnimatedSection delay={0.2} direction="fade">
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              marginTop: '2.5rem',
              padding: '0.75rem 1.25rem',
              backgroundColor: 'rgba(16,31,50,0.5)',
              borderRadius: '12px',
              border: '1px solid rgba(255,255,255,0.04)',
              width: 'fit-content',
              marginInline: 'auto',
            }}
          >
            <ExternalLink style={{ width: '0.875rem', height: '0.875rem', color: '#64748B' }} />
            <span
              style={{
                fontSize: '0.8rem',
                color: '#64748B',
                fontWeight: 500,
              }}
            >
              عرض {filteredIdeas.length} من 60+ فكرة محتوى
            </span>
          </div>
        </AnimatedSection>
      </div>

      <style>{`
        .explorer-grid {
          grid-template-columns: repeat(4, 1fr);
        }
        @media (max-width: 1200px) {
          .explorer-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        @media (max-width: 900px) {
          .explorer-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 600px) {
          .explorer-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}
