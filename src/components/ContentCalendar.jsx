import AnimatedSection from './AnimatedSection'
import SectionHeader from './SectionHeader'
import { Calendar, Play, FileText, Video, PenTool } from 'lucide-react'

const calendarData = [
  { day: 'اليوم 1', platform: 'Instagram/TikTok', pillar: 'P2', title: 'أخطاء توقيع عقد شراكة', format: 'Reel 40s' },
  { day: 'اليوم 3', platform: 'Instagram/X', pillar: 'P1', title: 'العيوب الخفية في العقارات', format: 'Reel + Carousel' },
  { day: 'اليوم 5', platform: 'LinkedIn/X', pillar: 'P5', title: 'المسؤولية الشخصية للمدير', format: 'Article' },
  { day: 'اليوم 7', platform: 'Instagram/TikTok', pillar: 'P3', title: 'Case Study: استرداد عقاري', format: 'Reel 60s' },
  { day: 'اليوم 10', platform: 'Instagram/TikTok', pillar: 'P4', title: 'المطالبة بالحقوق العمالية', format: 'Reel 35s' },
  { day: 'اليوم 12', platform: 'LinkedIn', pillar: 'P5', title: 'شرط عدم المنافسة', format: 'Carousel' },
  { day: 'اليوم 15', platform: 'Instagram/TikTok', pillar: 'P1', title: 'هل يحق للمالك زيادة الإيجار؟', format: 'Reel 30s' },
  { day: 'اليوم 18', platform: 'Instagram/X', pillar: 'P2', title: 'مرونة سداد الأتعاب', format: 'Graphic Reel' },
  { day: 'اليوم 21', platform: 'TikTok/Instagram', pillar: 'P6', title: 'التعديلات الأخيرة في الأنظمة', format: 'Reel 45s' },
  { day: 'اليوم 24', platform: 'LinkedIn/X', pillar: 'P5', title: 'حوكمة الشركات العائلية', format: 'Thread' },
  { day: 'اليوم 27', platform: 'Instagram/TikTok', pillar: 'P4', title: 'شيك بدون رصيد - التصرف', format: 'Reel 40s' },
  { day: 'اليوم 30', platform: 'Instagram/TikTok', pillar: 'P3', title: 'Case Study: شرط جزائي', format: 'Reel 50s' },
]

const pillarColors = {
  P1: 'bg-blue-500/10 text-blue-400',
  P2: 'bg-red-500/10 text-red-400',
  P3: 'bg-green-500/10 text-green-400',
  P4: 'bg-orange-500/10 text-orange-400',
  P5: 'bg-purple-500/10 text-purple-400',
  P6: 'bg-cyan-500/10 text-cyan-400',
}

export default function ContentCalendar() {
  return (
    <section className="py-20 md:py-32 bg-surface-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="التقويم التشغيلي"
          title="أول 30 يوماً من النشر"
          subtitle="جدول تنفيذي مفصل للبدء الفوري بنشر أول 12 منشور رئيسي"
        />

        <AnimatedSection>
          <div className="glass-card rounded-3xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[700px]">
                <thead>
                  <tr className="border-b border-surface-dark-border">
                    <th className="text-right px-5 py-4 text-sm font-bold text-text-muted">اليوم</th>
                    <th className="text-right px-5 py-4 text-sm font-bold text-text-muted">المنصة</th>
                    <th className="text-right px-5 py-4 text-sm font-bold text-text-muted">الركيزة</th>
                    <th className="text-right px-5 py-4 text-sm font-bold text-text-muted">الموضوع</th>
                    <th className="text-right px-5 py-4 text-sm font-bold text-text-muted">النوع</th>
                  </tr>
                </thead>
                <tbody>
                  {calendarData.map((row, i) => (
                    <tr key={i} className="border-b border-surface-dark-border/50 hover:bg-brand/3 transition-colors">
                      <td className="px-5 py-3.5 text-sm font-bold text-brand">{row.day}</td>
                      <td className="px-5 py-3.5 text-sm text-text-secondary">{row.platform}</td>
                      <td className="px-5 py-3.5">
                        <span className={`text-xs font-bold px-2 py-1 rounded-lg ${pillarColors[row.pillar]}`}>
                          {row.pillar}
                        </span>
                      </td>
                      <td className="px-5 py-3.5 text-sm text-text-primary font-medium">{row.title}</td>
                      <td className="px-5 py-3.5 text-xs text-text-muted">{row.format}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
