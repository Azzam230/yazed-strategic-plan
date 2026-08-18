import AnimatedSection from './AnimatedSection'
import SectionHeader from './SectionHeader'
import { Shield, Heart, MapPin } from 'lucide-react'

export default function BrandPositioning() {
  return (
    <section id="branding" className="py-20 md:py-32 bg-surface-dark-alt relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="الهوية التسويقية"
          title="الشريك القانوني الحاسم والواقي"
          subtitle="التموضع الذي ينقل العميل من تعقيد النزاع إلى الطمأنينة واسترداد الحقوق"
          light
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            {
              icon: Shield,
              title: 'مهني ورصين',
              subtitle: 'Authoritative',
              desc: 'ثقة عالية دون استكبار، واستشهاد دقيق بالأنظمة السعودية الحديثة',
            },
            {
              icon: Heart,
              title: 'هادئ وحاسم',
              subtitle: 'Calm & Clear',
              desc: 'يمتلك زمام الأمور ويزيل التوتر عن العميل المعقد في قضيته',
            },
            {
              icon: MapPin,
              title: 'إنساني ومحلي',
              subtitle: 'Human & Local',
              desc: 'يتحدث بلسان أهل جدة والسعودية بأسلوب مفهوم يخلو من التعقيد',
            },
          ].map((item, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="glass-card-light rounded-3xl p-6 md:p-8 h-full hover:shadow-xl hover:shadow-brand/5 transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 rounded-2xl bg-brand flex items-center justify-center mb-5">
                  <item.icon className="w-7 h-7 text-surface-dark" />
                </div>
                <h3 className="text-xl font-bold text-text-dark mb-1 font-[family-name:var(--font-family-display)]">{item.title}</h3>
                <span className="text-sm text-brand font-semibold">{item.subtitle}</span>
                <p className="text-text-dark-secondary mt-3 leading-relaxed text-sm">{item.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection>
          <div className="bg-brand rounded-3xl p-8 md:p-12 text-center">
            <p className="text-surface-dark text-lg md:text-2xl font-bold font-[family-name:var(--font-family-display)] leading-relaxed max-w-4xl mx-auto">
              "مكتب يزيد اليوبي هو الشريك القانوني الحاسم والواقي، الذي ينقل العميل من تعقيد النزاع والخوف المالي إلى الطمأنينة واسترداد الحقوق بأسلوب نظامي مدروس ومرن."
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
