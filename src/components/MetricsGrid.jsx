import AnimatedSection from './AnimatedSection'
import SectionHeader from './SectionHeader'
import { TrendingUp, Eye, Users, DollarSign, Target, Zap } from 'lucide-react'

const metrics = [
  { value: '150K+', label: 'مشاهدة شهرياً', sub: 'Organic Reach', icon: Eye, accent: false },
  { value: '5,000+', label: 'زيارة ملف شخصي', sub: 'Profile Visits', icon: Users, accent: false },
  { value: '1,200', label: 'متابع جديد شهرياً', sub: 'Qualified Followers', icon: TrendingUp, accent: true },
  { value: '25%+', label: 'معدل التحويل', sub: 'Lead to Consultation', icon: Target, accent: false },
  { value: '4x-6x', label: 'العائد الإعلاني', sub: 'ROAS Target', icon: DollarSign, accent: true },
  { value: '<65', label: 'ريال / عميل محتمل', sub: 'B2C CPL', icon: Zap, accent: false },
]

export default function MetricsGrid() {
  return (
    <section id="metrics" className="section-padding" style={{ backgroundColor: '#000', position: 'relative' }}>
      <div className="section-container">
        <SectionHeader
          badge="مؤشرات الأداء"
          title="الأرقام التي تتحدث"
          subtitle="الTargets الشهرية لمؤشرات الأداء الرئيسية"
        />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '1.25rem' }}>
          {metrics.map((m, i) => (
            <AnimatedSection key={i} delay={i * 0.08}>
              <div style={{
                borderRadius: '1.5rem',
                padding: 'clamp(1.5rem, 3vw, 2rem)',
                height: '100%',
                transition: 'all 0.3s',
                backgroundColor: m.accent ? '#C4FA00' : 'rgba(255,255,255,0.04)',
                backdropFilter: 'blur(20px)',
                border: m.accent ? 'none' : '1px solid rgba(255,255,255,0.08)',
              }}>
                <div style={{
                  width: '2.5rem', height: '2.5rem', borderRadius: '0.75rem',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem',
                  backgroundColor: m.accent ? 'rgba(0,0,0,0.1)' : 'rgba(196,250,0,0.1)',
                }}>
                  <m.icon style={{ width: '1.25rem', height: '1.25rem', color: m.accent ? '#000' : '#C4FA00' }} />
                </div>
                <div style={{
                  fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', fontWeight: 900,
                  fontFamily: 'var(--font-display)', marginBottom: '0.5rem',
                  color: m.accent ? '#000' : '#FFF',
                }}>
                  {m.value}
                </div>
                <div style={{ fontSize: '0.875rem', fontWeight: 600, color: m.accent ? 'rgba(0,0,0,0.7)' : '#FFF', marginBottom: '0.25rem' }}>
                  {m.label}
                </div>
                <div style={{ fontSize: '0.75rem', color: m.accent ? 'rgba(0,0,0,0.4)' : '#6B7280' }}>
                  {m.sub}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
