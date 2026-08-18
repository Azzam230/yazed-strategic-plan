import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function SectionHeader({ badge, title, subtitle, light = false }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="text-center mb-12 md:mb-16"
    >
      {badge && (
        <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4 ${
          light
            ? 'bg-[#0D0D0D] text-brand'
            : 'bg-brand/10 text-brand border border-brand/20'
        }`}>
          {badge}
        </span>
      )}
      <h2 className={`text-3xl md:text-5xl font-bold font-[family-name:var(--font-family-display)] leading-tight mb-4 ${
        light ? 'text-text-dark' : 'text-text-primary'
      }`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg md:text-xl max-w-3xl mx-auto leading-relaxed ${
          light ? 'text-text-dark-secondary' : 'text-text-secondary'
        }`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
