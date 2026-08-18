import AnimatedSection from './AnimatedSection'
import { Palette, Video, Megaphone, ArrowLeft } from 'lucide-react'

const actions = [
  {
    icon: Palette,
    title: 'ابدأ بالتصميم',
    desc: 'Design System + Visual Identity',
    link: '#strategy',
  },
  {
    icon: Video,
    title: 'ابدأ بالمحتوى',
    desc: 'أول 60 فيديو + أول 20 Carousel',
    link: '#content',
  },
  {
    icon: Megaphone,
    title: 'ابدأ بالإعلانات',
    desc: 'أول حملة إعلانية + WhatsApp funnel',
    link: '#paid',
  },
]

export default function FinalSlide() {
  return (
    <section
      id="next"
      className="section-padding"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#000000',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          background:
            'radial-gradient(circle at 50% 40%, rgba(255,255,255,0.03) 0%, transparent 60%)',
        }}
      />

      <div
        className="section-container"
        style={{
          position: 'relative',
          zIndex: 10,
          textAlign: 'center',
        }}
      >
        <AnimatedSection>
          <h2
            style={{
              fontSize: 'clamp(2rem, 5.5vw, 4rem)',
              fontWeight: 800,
              lineHeight: 1.2,
              color: '#FFFFFF',
              marginBottom: '1rem',
            }}
          >
            هذه البداية
          </h2>
          <h2
            style={{
              fontSize: 'clamp(2rem, 5.5vw, 4rem)',
              fontWeight: 800,
              lineHeight: 1.2,
              color: '#FFFFFF',
              marginBottom: '1.5rem',
            }}
          >
            الآن أنت ترى الخطة.
          </h2>
          <p
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              color: '#A0A0A0',
              maxWidth: '40rem',
              marginInline: 'auto',
              lineHeight: 1.7,
              marginBottom: '3.5rem',
            }}
          >
            المستوى التالي هو التنفيذ.
          </p>
        </AnimatedSection>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.25rem',
            maxWidth: '64rem',
            marginInline: 'auto',
            marginBottom: '3.5rem',
          }}
        >
          {actions.map((item, i) => (
            <AnimatedSection key={item.title} delay={0.15 + i * 0.12} direction="up">
              <a
                href={item.link}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  gap: '1rem',
                  padding: '2rem',
                  borderRadius: '1rem',
                  backgroundColor: 'rgba(20,20,20,0.7)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  textDecoration: 'none',
                  transition: 'border-color 0.3s, transform 0.3s, box-shadow 0.3s',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'
                  e.currentTarget.style.transform = 'translateY(-4px)'
                  e.currentTarget.style.boxShadow =
                    '0 12px 40px rgba(255,255,255,0.05)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <div
                  style={{
                    width: '3rem',
                    height: '3rem',
                    borderRadius: '0.75rem',
                    backgroundColor: 'rgba(255,255,255,0.06)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <item.icon
                    style={{ width: '1.5rem', height: '1.5rem', color: '#FFFFFF' }}
                  />
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: 700,
                      color: '#FFFFFF',
                      marginBottom: '0.375rem',
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontSize: '0.875rem',
                      color: '#A0A0A0',
                      lineHeight: 1.6,
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.375rem',
                    marginTop: 'auto',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    color: '#FFFFFF',
                  }}
                >
                  ابدأ الآن
                  <ArrowLeft
                    style={{ width: '0.875rem', height: '0.875rem' }}
                  />
                </div>
              </a>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.5}>
          <a
            href="https://wa.me/966500000000"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '1rem 2.5rem',
              backgroundColor: '#FFFFFF',
              color: '#000000',
              fontWeight: 700,
              fontSize: '1.125rem',
              borderRadius: '9999px',
              textDecoration: 'none',
              boxShadow: '0 8px 32px rgba(255,255,255,0.1)',
              transition: 'box-shadow 0.3s, transform 0.3s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow =
                '0 12px 40px rgba(255,255,255,0.2)'
              e.currentTarget.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow =
                '0 8px 32px rgba(255,255,255,0.1)'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            تواصل مع المكتب الآن
            <ArrowLeft style={{ width: '1.125rem', height: '1.125rem' }} />
          </a>
        </AnimatedSection>

        <AnimatedSection delay={0.7} direction="fade">
          <p
            style={{
              marginTop: '3rem',
              fontSize: '0.8rem',
              color: '#666666',
              letterSpacing: '0.04em',
            }}
          >
            Growth isn't a one-time task. It's a system.
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}
