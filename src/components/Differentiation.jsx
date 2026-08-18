import { useState } from 'react'
import AnimatedSection from './AnimatedSection'
import { Shield, MessageCircle, Briefcase, Layers, Star } from 'lucide-react'

const items = [
  {
    icon: Shield,
    title: 'محتوى يبني ثقة',
    titleEn: 'Trust-Building Content',
    description: 'نقدّم محتوىً يعكس الخبرة ويصل بالعميل إلى القناعة',
  },
  {
    icon: MessageCircle,
    title: 'استشارة باللغة',
    titleEn: 'Language-First Consulting',
    description: 'نقدم الاستشارة بلغة واضحة ومباشرة',
  },
  {
    icon: Briefcase,
    title: 'خبرة ميدانية',
    titleEn: 'Field Experience',
    description: 'المحتوى مبني على قضايا واقعية وليست نظريات',
  },
  {
    icon: Layers,
    title: 'نموذج متكامل',
    titleEn: 'Integrated Model',
    description: 'نجمع بين المحتوى، الإعلانات، وخدمة العملاء',
  },
]

function DiffCard({ item, index }) {
  const [hovered, setHovered] = useState(false)

  return (
    <AnimatedSection delay={index * 0.1} direction="up">
      <div
        className="glass"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          borderRadius: '18px',
          padding: '2rem 1.5rem',
          height: '100%',
          transition: 'all 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          border: hovered
            ? '1px solid rgba(196,250,0,0.25)'
            : '1px solid rgba(255,255,255,0.06)',
          transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
          cursor: 'default',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          gap: '1.25rem',
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
            width: '4rem',
            height: '4rem',
            borderRadius: '16px',
            backgroundColor: hovered ? 'rgba(196,250,0,0.15)' : 'rgba(196,250,0,0.08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.35s',
          }}
        >
          <item.icon
            style={{
              width: '1.5rem',
              height: '1.5rem',
              color: '#C4FA00',
              transition: 'all 0.35s',
            }}
          />
        </div>

        <div>
          <h3
            style={{
              fontSize: '1.125rem',
              fontWeight: 700,
              color: '#F5F7FA',
              fontFamily: 'var(--font-display)',
              marginBottom: '0.25rem',
              lineHeight: 1.4,
            }}
          >
            {item.title}
          </h3>
          <span
            style={{
              fontSize: '0.7rem',
              color: '#C4FA00',
              fontWeight: 500,
            }}
          >
            {item.titleEn}
          </span>
        </div>

        <p
          style={{
            fontSize: '0.85rem',
            color: '#94A3B8',
            lineHeight: 1.7,
            margin: 0,
          }}
        >
          {item.description}
        </p>
      </div>
    </AnimatedSection>
  )
}

export default function Differentiation() {
  return (
    <section
      id="differentiation"
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
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
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
              <Star style={{ width: '0.875rem', height: '0.875rem', color: '#C4FA00' }} />
              <span
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: '#C4FA00',
                  letterSpacing: '0.05em',
                }}
              >
                WHY US
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
              لماذا هذا المكتب وليس غيره؟
            </h2>
            <p
              style={{
                fontSize: '1rem',
                color: '#94A3B8',
                maxWidth: '500px',
                margin: '0 auto',
              }}
            >
              The Differentiation
            </p>
          </div>
        </AnimatedSection>

        <div
          className="diff-grid"
          style={{
            display: 'grid',
            gap: '1.25rem',
          }}
        >
          {items.map((item, i) => (
            <DiffCard key={i} item={item} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        .diff-grid {
          grid-template-columns: repeat(4, 1fr);
        }
        @media (max-width: 1024px) {
          .diff-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 600px) {
          .diff-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}
