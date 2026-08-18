import AnimatedSection from './AnimatedSection'
import SectionHeader from './SectionHeader'
import { Camera, Tv, MessageCircle, Briefcase, ArrowUpRight } from 'lucide-react'

const platforms = [
  { icon: Camera, name: 'Instagram', gradient: 'linear-gradient(135deg, #E1306C, #833AB4)', strategy: ['3-4 Reels + 2 Carousel أسبوعياً + Stories يومية', 'Pinned Posts: تعريفي + خدمات + تقسيط الأتعاب', 'Highlights: نتائج وقضايا + خدماتنا + آراء العملاء'], goal: 'Lead Generation + Brand Awareness' },
  { icon: Tv, name: 'TikTok', gradient: 'linear-gradient(135deg, #25F4EE, #FE2C55)', strategy: ['التركيز الكامل على أول 3 ثوانٍ (Hook)', 'تحدث بتلقائية محترفة أمام الكاميرا', 'سرد سيناريوهات "ماذا تفعل إذا..."', 'الرد على أسئلة المتابعين بالفيديو'], goal: 'High Retention + Viral Reach' },
  { icon: MessageCircle, name: 'X (تويتر)', gradient: 'linear-gradient(135deg, #1DA1F2, #0D8ECF)', strategy: ['تفاعل مع الأحداث القانونية والتحديثات الرسمية', 'كتابة Threads متخصصة بالتفصيل', '10 أفكار سلاسل متنوعة'], goal: 'Thought Leadership + Engagement' },
  { icon: Briefcase, name: 'LinkedIn', gradient: 'linear-gradient(135deg, #0077B5, #005E93)', strategy: ['تحليلات المخاطر القانونية والقرارات الاستراتيجية', 'الجمهور: CEOs, Founders, HR Directors', '10 أفكار منشورات B2B متخصصة'], goal: 'B2B Leads + Enterprise Authority' },
]

export default function PlatformStrategy() {
  return (
    <section id="platforms" className="section-padding" style={{ backgroundColor: '#000', position: 'relative' }}>
      <div className="section-container">
        <SectionHeader badge="استراتيجيات المنصات" title="حضور رقمي متعدد المنصات" subtitle="استراتيجية متخصصة لكل منصة لضمان أعلى تأثير" />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.25rem' }}>
          {platforms.map((p, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="glass-dark" style={{ borderRadius: '1.5rem', padding: 'clamp(1.5rem, 3vw, 2rem)', height: '100%', transition: 'all 0.3s' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{ width: '3rem', height: '3rem', borderRadius: '1rem', background: p.gradient, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <p.icon style={{ width: '1.5rem', height: '1.5rem', color: '#FFF' }} />
                    </div>
                    <div>
                      <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#FFF', fontFamily: 'var(--font-display)' }}>{p.name}</h3>
                      <span style={{ fontSize: '0.75rem', color: '#C4FA00', fontWeight: 500 }}>{p.goal}</span>
                    </div>
                  </div>
                  <ArrowUpRight style={{ width: '1.25rem', height: '1.25rem', color: '#6B7280' }} />
                </div>
                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {p.strategy.map((item, j) => (
                    <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.625rem' }}>
                      <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#C4FA00', marginTop: '8px', flexShrink: 0 }} />
                      <span style={{ color: '#9CA3AF', fontSize: '0.875rem', lineHeight: 1.6 }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
