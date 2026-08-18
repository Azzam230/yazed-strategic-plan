import AnimatedSection from './AnimatedSection'
import SectionHeader from './SectionHeader'

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

const pillarColors = { P1: { bg: 'rgba(59,130,246,0.1)', text: '#3B82F6' }, P2: { bg: 'rgba(239,68,68,0.1)', text: '#EF4444' }, P3: { bg: 'rgba(34,197,94,0.1)', text: '#22C55E' }, P4: { bg: 'rgba(249,115,22,0.1)', text: '#F97316' }, P5: { bg: 'rgba(168,85,247,0.1)', text: '#A855F7' }, P6: { bg: 'rgba(6,182,212,0.1)', text: '#06B6D4' } }

export default function ContentCalendar() {
  return (
    <section className="section-padding" style={{ backgroundColor: '#000', position: 'relative' }}>
      <div className="section-container">
        <SectionHeader badge="التقويم التشغيلي" title="أول 30 يوماً من النشر" subtitle="جدول تنفيذي مفصل للبدء الفوري بنشر أول 12 منشور رئيسي" />

        <AnimatedSection>
          <div className="glass-dark" style={{ borderRadius: '1.5rem', overflow: 'hidden' }}>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', minWidth: '600px', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid #1C1C1C' }}>
                    {['اليوم', 'المنصة', 'الركيزة', 'الموضوع', 'النوع'].map((h) => (
                      <th key={h} style={{ textAlign: 'start', padding: '1rem 1.25rem', fontSize: '0.875rem', fontWeight: 700, color: '#6B7280' }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {calendarData.map((row, i) => {
                    const pc = pillarColors[row.pillar]
                    return (
                      <tr key={i} style={{ borderBottom: '1px solid rgba(28,28,28,0.5)' }}>
                        <td style={{ padding: '0.875rem 1.25rem', fontSize: '0.875rem', fontWeight: 700, color: '#C4FA00', whiteSpace: 'nowrap' }}>{row.day}</td>
                        <td style={{ padding: '0.875rem 1.25rem', fontSize: '0.875rem', color: '#9CA3AF', whiteSpace: 'nowrap' }}>{row.platform}</td>
                        <td style={{ padding: '0.875rem 1.25rem' }}>
                          <span style={{ fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 0.5rem', borderRadius: '0.5rem', backgroundColor: pc.bg, color: pc.text }}>{row.pillar}</span>
                        </td>
                        <td style={{ padding: '0.875rem 1.25rem', fontSize: '0.875rem', fontWeight: 500, color: '#FFF', whiteSpace: 'nowrap' }}>{row.title}</td>
                        <td style={{ padding: '0.875rem 1.25rem', fontSize: '0.75rem', color: '#6B7280', whiteSpace: 'nowrap' }}>{row.format}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
