import { motion } from 'framer-motion'
import { ArrowDown, Scale, Shield, TrendingUp } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-surface-dark">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-brand/8 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-brand/5 rounded-full blur-[100px] animate-float-delay" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand/3 rounded-full blur-[150px]" />

        <div className="absolute top-20 right-[15%] w-20 h-20 rounded-2xl border border-brand/20 bg-brand/5 backdrop-blur-sm animate-float" />
        <div className="absolute bottom-32 left-[20%] w-16 h-16 rounded-full border border-brand/15 bg-brand/5 backdrop-blur-sm animate-float-delay" />
        <div className="absolute top-[40%] right-[10%] w-12 h-12 rotate-45 border border-brand/10 bg-brand/3 backdrop-blur-sm animate-float" />
      </div>

      <div className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(196,250,0,0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand/10 border border-brand/20 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-brand animate-pulse" />
          <span className="text-brand text-sm font-semibold">الخطة الاستراتيجية 2026/2027</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black font-[family-name:var(--font-family-display)] leading-tight mb-6"
        >
          <span className="text-text-primary">الخطة التسويقية</span>
          <br />
          <span className="text-gradient">المتكاملة</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          خطة استراتيجية شاملة لمكتب المحامي يزيد اليوبي للمحاماة والاستشارات القانونية
          <br className="hidden sm:block" />
          لترسيخ المكانة كعلامة قانونية مرجعية وتحقيق نمو مستدام
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          <a
            href="#cta"
            className="px-8 py-4 bg-brand text-surface-dark font-bold text-lg rounded-full hover:bg-brand-light transition-all hover:shadow-xl hover:shadow-brand/25 hover:-translate-y-0.5"
          >
            ابدأ التنفيذ الآن
          </a>
          <a
            href="#summary"
            className="px-8 py-4 border border-surface-dark-border text-text-primary font-semibold text-lg rounded-full hover:border-brand/30 hover:bg-brand/5 transition-all"
          >
            استعرض الخطة
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto"
        >
          {[
            { icon: Scale, label: 'منطقة جدة والغرب', sub: 'الاستهداف الجغرافي' },
            { icon: Shield, label: 'B2C + B2B', sub: 'قطاعات مزدوجة' },
            { icon: TrendingUp, label: 'ROAS 5x+', sub: 'الهدف المالي' },
          ].map((item, i) => (
            <div key={i} className="glass-card rounded-2xl p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center shrink-0">
                <item.icon className="w-5 h-5 text-brand" />
              </div>
              <div className="text-right">
                <div className="text-sm font-bold text-text-primary">{item.label}</div>
                <div className="text-xs text-text-muted">{item.sub}</div>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="mt-16"
        >
          <a href="#summary" className="inline-flex flex-col items-center text-text-muted hover:text-brand transition-colors">
            <span className="text-xs mb-2">اكتشف المزيد</span>
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
