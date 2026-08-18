import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function SectionHeader({ badge, title, subtitle, dark = true }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{ textAlign: 'center', marginBottom: '3rem' }}
    >
      {badge && (
        <span
          style={{
            display: 'inline-block',
            padding: '0.375rem 1rem',
            borderRadius: '9999px',
            fontSize: '0.875rem',
            fontWeight: 600,
            marginBottom: '1rem',
            backgroundColor: dark ? 'rgba(196, 250, 0, 0.1)' : '#0A0A0A',
            color: '#C4FA00',
            border: dark ? '1px solid rgba(196, 250, 0, 0.2)' : 'none',
          }}
        >
          {badge}
        </span>
      )}
      <h2
        style={{
          fontSize: 'clamp(1.875rem, 4vw, 3rem)',
          fontWeight: 800,
          fontFamily: 'var(--font-display)',
          lineHeight: 1.2,
          marginBottom: '1rem',
          color: dark ? '#FFFFFF' : '#111111',
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          style={{
            fontSize: 'clamp(1rem, 2vw, 1.125rem)',
            maxWidth: '48rem',
            marginInline: 'auto',
            lineHeight: 1.7,
            color: dark ? '#9CA3AF' : '#4B5563',
          }}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
