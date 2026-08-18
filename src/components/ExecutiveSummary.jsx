import React from 'react'
import AnimatedSection from './AnimatedSection'
import { Shield, Eye, Target, ArrowLeft } from 'lucide-react'

const steps = [
  { num: '01', title: 'بناء السلطة', subtitle: 'Build Authority', desc: 'تأسيس حضور رقمي يعكس الخبرة والاحترافية', icon: Shield },
  { num: '02', title: 'جذب الانتباه', subtitle: 'Create Attention', desc: 'محتوى يوقف السكرول ويبني التفاعل', icon: Eye },
  { num: '03', title: 'التقاط الطلب', subtitle: 'Capture Demand', desc: 'تحويل البحث العضوي إلى استفسارات فعلية', icon: Target },
  { num: '04', title: 'تحويل العملاء', subtitle: 'Convert Leads', desc: 'ضمان وصول كل استفسار إلى عميل مدفوع', icon: ArrowLeft },
]

const formulaParts = ['Content', '+', 'Paid Media', '+', 'Retargeting', '=', 'Growth Engine']

const b2cServices = ['التواصل العائلي والعقاري', 'النزاعات المالية والديون', 'الأحوال الشخصية والطلاق', 'العقود والمطالبات', 'الاستشارات القانونية العامة']
const b2bServices = ['صياغة ومراجعة العقود', 'الحوكمة المؤسسية', 'قانون العمل والتوظيف', 'تأسيس الشركات', 'المخاطر القانونية المؤسسية']

export default function ExecutiveSummary() {
  const [hoveredStep, setHoveredStep] = React.useState(null)

  return (
    <section className="section-padding" style={{ position: 'relative' }}>
      <div className="section-container">
        <AnimatedSection direction="up">
          <div style={{ fontSize: '4rem', fontWeight: 800, color: '#FFFFFF', lineHeight: 1, marginBottom: 8, fontFamily: "'Noto Sans Arabic', sans-serif" }}>01</div>
        </AnimatedSection>

        <AnimatedSection direction="up" delay={0.1}>
          <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', fontWeight: 700, color: '#FFFFFF', marginBottom: 12, fontFamily: "'Noto Sans Arabic', sans-serif" }}>
            الاستراتيجية الرقمية المتكاملة
          </h2>
        </AnimatedSection>

        <AnimatedSection direction="up" delay={0.15}>
          <p style={{ fontSize: '1.1rem', color: '#A0A0A0', maxWidth: 600, lineHeight: 1.8, marginBottom: 60, fontFamily: "'Noto Sans Arabic', sans-serif" }}>
            نظام متكامل يحوّل الحضور الرقمي إلى مصدر مستدام للثقة والعملاء
          </p>
        </AnimatedSection>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20, marginBottom: 60 }}>
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <AnimatedSection key={i} direction="up" delay={0.2 + i * 0.08}>
                <div
                  className="glass"
                  style={{
                    padding: '36px 24px', position: 'relative',
                    transition: 'transform 0.3s, border-color 0.3s',
                    border: hoveredStep === i ? '1px solid rgba(255,255,255,0.15)' : '1px solid rgba(255,255,255,0.08)',
                    transform: hoveredStep === i ? 'translateY(-4px)' : 'translateY(0)',
                    cursor: 'default',
                  }}
                  onMouseEnter={() => setHoveredStep(i)}
                  onMouseLeave={() => setHoveredStep(null)}
                >
                  <div style={{ fontSize: '3rem', fontWeight: 800, color: 'rgba(255,255,255,0.06)', lineHeight: 1, marginBottom: 16, fontFamily: "'Noto Sans Arabic', sans-serif" }}>
                    {step.num}
                  </div>
                  <div className="accent-line" />
                  <div style={{ marginBottom: 16, color: '#FFFFFF' }}>
                    <Icon size={28} />
                  </div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#FFFFFF', marginBottom: 4, fontFamily: "'Noto Sans Arabic', sans-serif" }}>
                    {step.title}
                  </h3>
                  <div style={{ fontSize: '0.8rem', fontWeight: 600, color: '#A0A0A0', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 12 }}>
                    {step.subtitle}
                  </div>
                  <p style={{ fontSize: '0.9rem', color: '#A0A0A0', lineHeight: 1.7, fontFamily: "'Noto Sans Arabic', sans-serif" }}>
                    {step.desc}
                  </p>
                </div>
              </AnimatedSection>
            )
          })}
        </div>

        <AnimatedSection direction="fade" delay={0.3}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, flexWrap: 'wrap', marginBottom: 80 }}>
            {formulaParts.map((part, i) => {
              if (part === '+') return <span key={i} style={{ color: '#999999', fontSize: '1.2rem', fontWeight: 300 }}>+</span>
              if (part === '=') return <span key={i} style={{ background: '#FFFFFF', color: '#000000', borderRadius: 50, padding: '12px 28px', fontSize: '1.1rem', fontWeight: 800 }}>=</span>
              if (part === 'Growth Engine') return <span key={i} style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 50, padding: '12px 28px', color: '#FFFFFF', fontSize: '0.95rem', fontWeight: 700 }}>{part}</span>
              return <span key={i} style={{ background: 'rgba(20,20,20,0.7)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 50, padding: '12px 28px', color: '#FFFFFF', fontSize: '0.95rem', fontWeight: 600, fontFamily: "'Noto Sans Arabic', sans-serif" }}>{part}</span>
            })}
          </div>
        </AnimatedSection>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 32 }}>
          <AnimatedSection direction="left" delay={0.35}>
            <div className="glass" style={{ padding: 40 }}>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#FFFFFF', marginBottom: 24, fontFamily: "'Noto Sans Arabic', sans-serif" }}>B2B — الشركات</h3>
              {b2bServices.map((s, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 0', borderBottom: i < b2bServices.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none', fontSize: '0.95rem', color: '#FFFFFF', fontFamily: "'Noto Sans Arabic', sans-serif" }}>
                  <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#FFFFFF', flexShrink: 0 }} />
                  <span>{s}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.35}>
            <div className="glass" style={{ padding: 40 }}>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#FFFFFF', marginBottom: 24, fontFamily: "'Noto Sans Arabic', sans-serif" }}>B2C — الأفراد</h3>
              {b2cServices.map((s, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 0', borderBottom: i < b2cServices.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none', fontSize: '0.95rem', color: '#FFFFFF', fontFamily: "'Noto Sans Arabic', sans-serif" }}>
                  <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#FFFFFF', flexShrink: 0 }} />
                  <span>{s}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
