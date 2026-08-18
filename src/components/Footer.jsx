import AnimatedSection from './AnimatedSection'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Scale, ArrowUp, Phone, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <section id="cta" className="py-20 md:py-32 bg-surface-dark relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-brand/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-brand/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection>
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand/10 border border-brand/20 text-brand text-sm font-semibold mb-6">
            ابدأ التنفيذ
          </span>
          <h2 className="text-3xl md:text-6xl font-black font-[family-name:var(--font-family-display)] text-text-primary mb-6 leading-tight">
            جاهز لتحقيق
            <br />
            <span className="text-gradient">النمو المستدام؟</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed">
            الخطوة الأولى هي تفعيل الحسابات وبدء إنتاج المحتوى. الخطة جاهزة، المحتوى مصمم، والاستراتيجية محكمة.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="https://wa.me/966500000000"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-brand text-surface-dark font-bold text-lg rounded-full hover:bg-brand-light transition-all hover:shadow-xl hover:shadow-brand/25 hover:-translate-y-0.5 flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              تواصل عبر الواتساب
            </a>
            <a
              href="mailto:info@yazeedalyoubi.sa"
              className="px-10 py-4 border border-surface-dark-border text-text-primary font-semibold text-lg rounded-full hover:border-brand/30 hover:bg-brand/5 transition-all flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              info@yazeedalyoubi.sa
            </a>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="glass-card rounded-3xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center">
                  <Scale className="w-6 h-6 text-brand" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-text-primary font-[family-name:var(--font-family-display)]">مكتب يزيد اليوبي</h4>
                  <p className="text-sm text-text-muted">للمحاماة والاستشارات القانونية</p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-brand" />
                </div>
                <p className="text-sm text-text-secondary">جدة، المملكة العربية السعودية</p>
                <p className="text-xs text-text-muted">المنطقة الغربية</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-brand" />
                </div>
                <p className="text-sm text-text-secondary">واتساب مباشر</p>
                <p className="text-xs text-text-muted">خيارات سداد ميسرة</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <div className="mt-16 pt-8 border-t border-surface-dark-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-text-muted">
            &copy; 2026 مكتب المحامي يزيد اليوبي. جميع الحقوق محفوظة.
          </p>
          <p className="text-xs text-text-muted">
            الخطة الاستراتيجية والتسويقية المتكاملة | الإصدار 1.0 التنفيذي
          </p>
        </div>
      </div>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 left-6 w-12 h-12 rounded-full bg-brand text-surface-dark flex items-center justify-center shadow-lg shadow-brand/20 hover:shadow-xl hover:shadow-brand/30 transition-all hover:-translate-y-1 z-40"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </section>
  )
}
