import AnimatedSection from './AnimatedSection'
import SectionHeader from './SectionHeader'
import { Shield, Heart, MapPin } from 'lucide-react'

export default function BrandPositioning() {
  return (
    <section id="branding" className="section-padding" style={{ backgroundColor: '#0A0A0A', position: 'relative' }}>
      <div className="section-container">
        <SectionHeader
          badge="الهوية التسويقية"
          title="الشريك القانوني الحاسم والواقي"
          subtitle="التموضع الذي ينقل العميل من تعقيد النزاع إلى الطمأنينة واسترداد الحقوق"
          dark
        />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem', marginBottom: '3rem' }}>
          {[
            { icon: Shield, title: 'مهني ورصين', sub: 'Authoritative', desc: 'ثقة عالية دون استكبار، واستشهاد دقيق بالأنظمة السعودية الحديثة' },
            { icon: Heart, title: 'هادئ وحاسم', sub: 'Calm & Clear', desc: 'يمتلك زمام الأمور ويزيل التوتر عن العميل المعقد في قضيته' },
            { icon: MapPin, title: 'إنساني ومحلي', sub: 'Human & Local', desc: 'يتحدث بلسان أهل جدة والسعودية بأسلوب مفهوم يخلو من التعقيد' },
          ].map((item, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="glass-light" style={{ borderRadius: '1.5rem', padding: 'clamp(1.5rem, 3vw, 2rem)', height: '100%', transition: 'all 0.3s' }}>
                <div style={{ width: '3.5rem', height: '3.5rem', borderRadius: '1rem', backgroundColor: '#C4FA00', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                  <item.icon style={{ width: '1.75rem', height: '1.75rem', color: '#000' }} />
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#111111', marginBottom: '0.25rem', fontFamily: 'var(--font-display)' }}>{item.title}</h3>
                <span style={{ fontSize: '0.875rem', color: '#C4FA00', fontWeight: 600 }}>{item.sub}</span>
                <p style={{ color: '#4B5563', marginTop: '0.75rem', lineHeight: 1.7, fontSize: '0.875rem' }}>{item.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection>
          <div style={{ backgroundColor: '#C4FA00', borderRadius: '1.5rem', padding: 'clamp(2rem, 4vw, 3rem)', textAlign: 'center' }}>
            <p style={{ color: '#000', fontSize: 'clamp(1rem, 2.5vw, 1.5rem)', fontWeight: 700, fontFamily: 'var(--font-display)', lineHeight: 1.6, maxWidth: '56rem', marginInline: 'auto' }}>
              "مكتب يزيد اليوبي هو الشريك القانوني الحاسم والواقي، الذي ينقل العميل من تعقيد النزاع والخوف المالي إلى الطمأنينة واسترداد الحقوق بأسلوب نظامي مدروس ومرن."
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
