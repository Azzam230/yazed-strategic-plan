import AnimatedSection from './AnimatedSection'
import {
  Lightbulb,
  Film,
  Music,
  Camera,
  MessageSquare,
  Briefcase,
  Smartphone,
  Target,
  ArrowDown,
} from 'lucide-react'

const assets = [
  { icon: Film, name: 'Reel', platform: 'Instagram' },
  { icon: Music, name: 'TikTok', platform: 'TikTok' },
  { icon: Camera, name: 'Instagram Carousel', platform: 'Instagram' },
  { icon: MessageSquare, name: 'X Thread', platform: 'X' },
  { icon: Briefcase, name: 'LinkedIn Post', platform: 'LinkedIn' },
  { icon: Smartphone, name: 'Story', platform: 'Instagram / TikTok' },
  { icon: Target, name: 'Retargeting Ad', platform: 'Meta Ads' },
]

export default function ContentTransformation() {
  return (
    <section
      className="section-padding"
      style={{
        backgroundColor: '#000000',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.015)',
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
              حول رؤية قانونية واحدة إلى 7 أصول تسويقية
            </h2>
            <p
              style={{
                fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)',
                color: '#A0A0A0',
                fontWeight: 500,
                letterSpacing: '0.03em',
              }}
            >
              One Legal Insight → 7 Marketing Assets
            </p>
          </div>
        </AnimatedSection>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1rem',
            maxWidth: '640px',
            marginInline: 'auto',
          }}
        >
          {/* Source Card */}
          <AnimatedSection delay={0.1}>
            <div
              className="glass"
              style={{
                padding: '1.5rem 2.5rem',
                borderRadius: '16px',
                border: '1px solid rgba(255,255,255,0.15)',
                background: 'rgba(20,20,20,0.7)',
                textAlign: 'center',
                minWidth: '280px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.75rem',
                }}
              >
                <div
                  style={{
                    width: '2.5rem',
                    height: '2.5rem',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(255,255,255,0.06)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Lightbulb
                    style={{ width: '1.25rem', height: '1.25rem', color: '#FFFFFF' }}
                  />
                </div>
                <div style={{ textAlign: 'start' }}>
                  <span
                    style={{
                      fontSize: '1.1rem',
                      fontWeight: 700,
                      color: '#FFFFFF',
                      fontFamily: 'var(--font-display)',
                    }}
                  >
                    رؤية قانونية
                  </span>
                  <br />
                  <span style={{ fontSize: '0.75rem', color: '#A0A0A0' }}>
                    Legal Insight
                  </span>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Arrow */}
          <AnimatedSection delay={0.2}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0',
              }}
            >
              <div
                style={{
                  width: '2px',
                  height: '40px',
                  background:
                    'linear-gradient(to bottom, rgba(255,255,255,0.25), rgba(255,255,255,0.05))',
                }}
              />
              <ArrowDown
                style={{
                  width: '1.25rem',
                  height: '1.25rem',
                  color: 'rgba(255,255,255,0.35)',
                }}
              />
            </div>
          </AnimatedSection>

          {/* Assets Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
              gap: '0.75rem',
              width: '100%',
            }}
          >
            {assets.map((asset, i) => (
              <AnimatedSection key={i} delay={0.15 + i * 0.06}>
                <div
                  className="glass"
                  style={{
                    padding: '1rem',
                    borderRadius: '12px',
                    border: '1px solid rgba(255,255,255,0.08)',
                    background: 'rgba(20,20,20,0.7)',
                    textAlign: 'center',
                    transition: 'all 0.3s',
                    cursor: 'default',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
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
                  <div
                    style={{
                      width: '2.25rem',
                      height: '2.25rem',
                      borderRadius: '10px',
                      backgroundColor: 'rgba(255,255,255,0.06)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <asset.icon
                      style={{ width: '1.1rem', height: '1.1rem', color: '#FFFFFF' }}
                    />
                  </div>
                  <span
                    style={{
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      color: '#FFFFFF',
                      fontFamily: 'var(--font-display)',
                    }}
                  >
                    {asset.name}
                  </span>
                  <span style={{ fontSize: '0.65rem', color: '#666666' }}>
                    {asset.platform}
                  </span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Bottom tagline */}
        <AnimatedSection delay={0.6}>
          <p
            style={{
              textAlign: 'center',
              fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
              color: '#A0A0A0',
              marginTop: '3rem',
              fontWeight: 500,
              letterSpacing: '0.02em',
            }}
          >
            محتوى واحد — توزيع متعدد — أثر أوسع
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}
