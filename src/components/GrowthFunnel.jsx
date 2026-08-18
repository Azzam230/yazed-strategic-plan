import AnimatedSection from './AnimatedSection'
import SectionHeader from './SectionHeader'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  Megaphone,
  UserCheck,
  RotateCcw,
  MessageSquare,
  ClipboardCheck,
  Calendar,
  FileSignature,
} from 'lucide-react'

const funnelSteps = [
  {
    icon: Megaphone,
    step: '01',
    title: 'المحتوى العضوي / الإعلان',
    desc: 'يشاهد العميل فيديو Reel أو إعلان عن مشكلة يواجهها',
    color: 'from-brand/20 to-brand/5',
  },
  {
    icon: UserCheck,
    step: '02',
    title: 'زيارة الملف / الموقع',
    desc: 'يزور الحساب أو الموقع ويرى النتائج والهوية الاحترافية',
    color: 'from-brand/15 to-brand/3',
  },
  {
    icon: RotateCcw,
    step: '03',
    title: 'إعادة الاستهداف',
    desc: 'إعلان إعادة استهداف يحتوي على Case Study وإثبات الكفاءة',
    color: 'from-brand/15 to-brand/3',
  },
  {
    icon: MessageSquare,
    step: '04',
    title: 'الاتصال عبر الواتساب',
    desc: 'ينقر على رابط الواتساب لبدء الاستفسار المباشر',
    color: 'from-brand/20 to-brand/5',
  },
  {
    icon: ClipboardCheck,
    step: '05',
    title: 'تأهيل العميل',
    desc: 'أسئلة التأهيل الآلية لتصنيف جديته ونوع قضيته',
    color: 'from-brand/15 to-brand/3',
  },
  {
    icon: Calendar,
    step: '06',
    title: 'حجز الاستشارة',
    desc: 'تحديد موعد استشارة حضورية أو عن بُعد',
    color: 'from-brand/15 to-brand/3',
  },
  {
    icon: FileSignature,
    step: '07',
    title: 'العقد والوفاء',
    desc: 'تقديم العرض القانوني وتفعيل خيارات السداد الميسرة',
    color: 'from-brand/25 to-brand/10',
  },
]

export default function GrowthFunnel() {
  return (
    <section className="py-20 md:py-32 bg-surface-dark relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand/3 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="قمع التحويل"
          title="مسار التحويل الشامل"
          subtitle="من أول مشاهدة إلى توقيع العقد - مسار محدد ومحكم"
        />

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand/30 to-transparent -translate-y-1/2" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-4">
            {funnelSteps.map((step, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="relative group">
                  <div className={`bg-gradient-to-b ${step.color} rounded-2xl p-5 h-full border border-brand/10 group-hover:border-brand/30 transition-all duration-300 group-hover:-translate-y-1`}>
                    <div className="text-xs font-mono text-brand/50 mb-3">{step.step}</div>
                    <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center mb-3 group-hover:bg-brand/20 transition-colors">
                      <step.icon className="w-5 h-5 text-brand" />
                    </div>
                    <h4 className="text-sm font-bold text-text-primary mb-2 font-[family-name:var(--font-family-display)] leading-tight">{step.title}</h4>
                    <p className="text-xs text-text-muted leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
