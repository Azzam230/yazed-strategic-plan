import React from 'react';
import AnimatedSection from './AnimatedSection';
import { TrendingUp, ArrowRight } from 'lucide-react';

const metrics = [
  {
    number: '131K+',
    label: 'Views',
    desc: 'Case-related legal content',
  },
  {
    number: '59K+',
    label: 'Views',
    desc: 'Legal rights awareness',
  },
  {
    number: '43K+',
    label: 'Views',
    desc: 'Risk prevention content',
  },
];

const formulaParts = ['Financial Pain', '+', 'Legal Problem', '+', 'Real Scenario', '→', 'Higher Attention'];

const styles = {
  section: {
    padding: '120px 0',
    background: '#07111F',
    position: 'relative',
    overflow: 'hidden',
  },
  container: {
    maxWidth: 1200,
    margin: '0 auto',
    padding: '0 24px',
  },
  sectionNum: {
    fontSize: '4rem',
    fontWeight: 800,
    color: '#C4FA00',
    lineHeight: 1,
    marginBottom: 8,
    fontFamily: "'Noto Sans Arabic', sans-serif",
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: 700,
    color: '#F5F7FA',
    marginBottom: 8,
    fontFamily: "'Noto Sans Arabic', sans-serif",
  },
  subtitle: {
    fontSize: '1rem',
    color: '#64748B',
    marginBottom: 60,
    fontWeight: 500,
    letterSpacing: 1,
  },
  metricsRow: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: 24,
    marginBottom: 80,
  },
  metricCard: {
    background: '#101F32',
    border: '1px solid rgba(255,255,255,0.06)',
    borderRadius: 20,
    padding: '48px 36px',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden',
    transition: 'transform 0.3s, border-color 0.3s',
  },
  metricCardHover: {
    transform: 'translateY(-4px)',
    borderColor: 'rgba(196,250,0,0.3)',
  },
  metricGlow: {
    position: 'absolute',
    top: -30,
    left: '50%',
    transform: 'translateX(-50%)',
    width: 120,
    height: 120,
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(196,250,0,0.08) 0%, transparent 70%)',
    pointerEvents: 'none',
  },
  metricIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 48,
    height: 48,
    borderRadius: 12,
    background: 'rgba(196,250,0,0.1)',
    margin: '0 auto 24px',
    color: '#C4FA00',
  },
  metricNumber: {
    fontSize: '3.5rem',
    fontWeight: 800,
    color: '#C4FA00',
    lineHeight: 1,
    marginBottom: 4,
    fontFamily: "'Noto Sans Arabic', sans-serif",
  },
  metricLabel: {
    fontSize: '1.1rem',
    fontWeight: 600,
    color: '#F5F7FA',
    marginBottom: 12,
  },
  metricDesc: {
    fontSize: '0.9rem',
    color: '#94A3B8',
    lineHeight: 1.6,
    fontFamily: "'Noto Sans Arabic', sans-serif",
  },
  insight: {
    textAlign: 'center',
    marginBottom: 80,
  },
  insightLine1: {
    fontSize: '1.8rem',
    fontWeight: 700,
    color: '#F5F7FA',
    lineHeight: 1.8,
    fontFamily: "'Noto Sans Arabic', sans-serif",
  },
  insightLine2: {
    fontSize: '1.8rem',
    fontWeight: 700,
    color: '#C4FA00',
    lineHeight: 1.8,
    fontFamily: "'Noto Sans Arabic', sans-serif",
  },
  formulaSection: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    flexWrap: 'wrap',
  },
  pill: {
    background: '#101F32',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: 50,
    padding: '12px 28px',
    color: '#F5F7FA',
    fontSize: '0.95rem',
    fontWeight: 600,
  },
  pillArrow: {
    background: '#C4FA00',
    borderRadius: 50,
    padding: '12px 24px',
    color: '#07111F',
    display: 'flex',
    alignItems: 'center',
    gap: 6,
    fontWeight: 800,
    fontSize: '0.95rem',
  },
};

const DataSlide = () => {
  const [hoveredCard, setHoveredCard] = React.useState(null);

  return (
    <section id="data" style={styles.section}>
      <div style={styles.container}>
        <AnimatedSection direction="up">
          <div style={styles.sectionNum}>03</div>
        </AnimatedSection>

        <AnimatedSection direction="up" delay={100}>
          <h2 style={styles.title}>ماذا تخبرنا البيانات؟</h2>
        </AnimatedSection>

        <AnimatedSection direction="up" delay={150}>
          <p style={styles.subtitle}>Previous Content Performance</p>
        </AnimatedSection>

        <div style={styles.metricsRow}>
          {metrics.map((m, i) => (
            <AnimatedSection key={i} direction="up" delay={300 + i * 150}>
              <div
                style={{
                  ...styles.metricCard,
                  ...(hoveredCard === i ? styles.metricCardHover : {}),
                }}
                onMouseEnter={() => setHoveredCard(i)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div style={styles.metricGlow} />
                <div style={styles.metricIcon}>
                  <TrendingUp size={24} />
                </div>
                <div style={styles.metricNumber}>{m.number}</div>
                <div style={styles.metricLabel}>{m.label}</div>
                <div style={styles.metricDesc}>{m.desc}</div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection direction="up" delay={700}>
          <div style={styles.insight}>
            <div style={styles.insightLine1}>المحتوى المرتبط بمشكلة قانونية حقيقية</div>
            <div style={styles.insightLine2}>يتفوق على المعلومة القانونية العامة.</div>
          </div>
        </AnimatedSection>

        <AnimatedSection direction="fade" delay={900}>
          <div style={styles.formulaSection}>
            {formulaParts.map((part, i) => {
              if (part === '+') {
                return (
                  <span key={i} style={{ color: '#64748B', fontSize: '1.2rem', fontWeight: 300 }}>
                    +
                  </span>
                );
              }
              if (part === '→') {
                return (
                  <span key={i} style={styles.pillArrow}>
                    <ArrowRight size={18} />
                    Higher Attention
                  </span>
                );
              }
              return (
                <span key={i} style={styles.pill}>{part}</span>
              );
            })}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default DataSlide;
