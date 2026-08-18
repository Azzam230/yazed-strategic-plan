import AnimatedSection from './AnimatedSection'
import {
  Zap,
  BookmarkCheck,
  Gem,
  User,
  ShieldCheck,
  UserPlus,
  Target,
  Eye,
  BarChart3,
  Clock,
  MousePointer,
  Users,
  Heart,
} from 'lucide-react'

const growthFlow = [
  {
    icon: Zap,
    title: 'الخطاف',
    titleEn: 'Hook',
    desc: 'أول 3 ثوانٍ تقرر — محتوى يوقف السكرول',
  },
  {
    icon: BookmarkCheck,
    title: 'الاحتفاظ',
    titleEn: 'Retention',
    desc: 'محتوى يجذب ويحتفظ بالمشاهد حتى النهاية',
  },
  {
    icon: Gem,
    title: 'القيمة',
    titleEn: 'Value',
    desc: 'معلومات قانونية عملية يستطيع تطبيقها فوراً',
  },
  {
    icon: User,
    title: 'زيارة الملف',
    titleEn: 'Profile Visit',
    desc: 'المشاهد يزور الحساب لاكتشاف المزيد',
  },
  {
    icon: ShieldCheck,
    title: 'بناء الثقة',
    titleEn: 'Trust',
    desc: 'النتائج والشهادات والاحترافية تصنع الإقناع',
  },
  {
    icon: UserPlus,
    title: 'المتابعة',
    titleEn: 'Follow',
    desc: 'المشاهد يصبح متابعاً دائماً للمحتوى',
  },
  {
    icon: Target,
    title: 'إعادة الاستهداف',
    titleEn: 'Retargeting',
    desc: 'إعلان مخصص يعيد الاتصال بالمهتم',
  },
]

const kpis = [
  { icon: Eye, label: 'الوصول الشامل', labelEn: 'Reach', value: '+150K/شهر' },
  { icon: BarChart3, label: 'المشاهدات', labelEn: 'Views', value: '+200K/شهر' },
  { icon: Clock, label: 'وقت المشاهدة', labelEn: 'Watch Time', value: '> 45%' },
  { icon: MousePointer, label: 'زيارات الملف', labelEn: 'Profile Visits', value: '+5,000/شهر' },
  { icon: Users, label: 'المتابعون', labelEn: 'Followers', value: '+1,200/شهر' },
  { icon: Heart, label: 'التفاعل', labelEn: 'Engagement', value: '> 5%' },
]

export default function OrganicGrowth() {
  return (
    <section
      id="organic"
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
          top: '30%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '500px',
          height: '500px',
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
              محرك النمو العضوي
            </h2>
            <p
              style={{
                fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)',
                color: '#A0A0A0',
                fontWeight: 500,
              }}
            >
              النمو العضوي لا يعني النشر فقط — بل بناء نظام
            </p>
          </div>
        </AnimatedSection>

        {/* Growth Flow — Vertical Centered */}
        <div
          id="growth-flow"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0',
            maxWidth: '420px',
            marginInline: 'auto',
            marginBottom: '3.5rem',
            position: 'relative',
          }}
        >
          {/* Vertical connecting line */}
          <div
            style={{
              position: 'absolute',
              top: '2.5rem',
              bottom: '2.5rem',
              width: '2px',
              background:
                'linear-gradient(to bottom, rgba(255,255,255,0.12), rgba(255,255,255,0.03))',
              zIndex: 0,
            }}
          />

          {growthFlow.map((step, i) => (
            <AnimatedSection key={i} delay={0.1 + i * 0.07} direction="up">
              <div
                className="glass"
                style={{
                  width: '100%',
                  padding: '1rem 1.25rem',
                  borderRadius: '14px',
                  border: '1px solid rgba(255,255,255,0.08)',
                  background: 'rgba(20,20,20,0.7)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  position: 'relative',
                  zIndex: 1,
                  transition: 'all 0.3s',
                  cursor: 'default',
                  marginBottom: '0.5rem',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'
                  e.currentTarget.style.transform = 'scale(1.02)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
                  e.currentTarget.style.transform = 'scale(1)'
                }}
              >
                <div
                  style={{
                    width: '2.75rem',
                    height: '2.75rem',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(255,255,255,0.06)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <step.icon
                    style={{ width: '1.15rem', height: '1.15rem', color: '#FFFFFF' }}
                  />
                </div>
                <div style={{ minWidth: 0 }}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      marginBottom: '0.15rem',
                    }}
                  >
                    <h4
                      style={{
                        fontSize: '0.95rem',
                        fontWeight: 700,
                        color: '#FFFFFF',
                        fontFamily: 'var(--font-display)',
                        margin: 0,
                      }}
                    >
                      {step.title}
                    </h4>
                    <span
                      style={{
                        fontSize: '0.65rem',
                        color: '#999999',
                        fontWeight: 500,
                      }}
                    >
                      {step.titleEn}
                    </span>
                  </div>
                  <p
                    style={{
                      fontSize: '0.8rem',
                      color: '#A0A0A0',
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

        {/* KPIs — 3×2 Grid */}
        <AnimatedSection delay={0.5}>
          <div
            className="kpi-grid"
            style={{
              display: 'grid',
              gap: '1rem',
              maxWidth: '720px',
              marginInline: 'auto',
            }}
          >
            {kpis.map((kpi, i) => (
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
                    marginInline: 'auto',
                    marginBottom: '0.625rem',
                  }}
                >
                  <kpi.icon
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
                    marginBottom: '0.15rem',
                  }}
                >
                  {kpi.label}
                </span>
                <span
                  style={{
                    fontSize: '0.65rem',
                    color: '#999999',
                    display: 'block',
                    marginBottom: '0.5rem',
                  }}
                >
                  {kpi.labelEn}
                </span>
                <span
                  style={{
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    color: '#FFFFFF',
                  }}
                >
                  {kpi.value}
                </span>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>

      <style>{`
        .kpi-grid {
          grid-template-columns: repeat(3, 1fr);
        }
        @media (max-width: 768px) {
          .kpi-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 480px) {
          .kpi-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}
