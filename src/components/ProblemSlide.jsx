import React from 'react';
import AnimatedSection from './AnimatedSection';
import { ArrowDown } from 'lucide-react';

const todayItems = [
  'معلومات قانونية عامة',
  'منشورات تعريفية',
  'عرض الخدمات',
  'تصميمات ثابتة',
  'Reach غير مستغل',
];

const opportunityItems = [
  'Short-form Video',
  'Storytelling',
  'Case Studies',
  'Search-driven Topics',
  'Paid Acquisition',
  'Retargeting',
];

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
    marginBottom: 60,
    maxWidth: 700,
    lineHeight: 1.4,
    fontFamily: "'Noto Sans Arabic', sans-serif",
  },
  comparisonRow: {
    display: 'grid',
    gridTemplateColumns: '1fr auto 1fr',
    gap: 32,
    alignItems: 'center',
    marginBottom: 80,
  },
  card: {
    background: '#101F32',
    border: '1px solid rgba(255,255,255,0.06)',
    borderRadius: 20,
    padding: 40,
    minHeight: 380,
  },
  cardOpportunity: {
    background: '#101F32',
    border: '1px solid rgba(196,250,0,0.35)',
    borderRadius: 20,
    padding: 40,
    minHeight: 380,
    boxShadow: '0 0 40px rgba(196,250,0,0.06)',
  },
  cardLabel: {
    fontSize: '0.85rem',
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: 2,
    marginBottom: 8,
  },
  cardLabelMuted: {
    color: '#64748B',
  },
  cardLabelAccent: {
    color: '#C4FA00',
  },
  cardTitle: {
    fontSize: '1.5rem',
    fontWeight: 700,
    color: '#F5F7FA',
    marginBottom: 32,
    fontFamily: "'Noto Sans Arabic', sans-serif",
  },
  itemRow: {
    display: 'flex',
    alignItems: 'center',
    gap: 14,
    padding: '14px 0',
    borderBottom: '1px solid rgba(255,255,255,0.06)',
    fontSize: '1rem',
    color: '#94A3B8',
    fontFamily: "'Noto Sans Arabic', sans-serif",
  },
  itemRowLast: {
    borderBottom: 'none',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: '50%',
    flexShrink: 0,
  },
  dotMuted: {
    background: '#64748B',
  },
  dotAccent: {
    background: '#C4FA00',
  },
  arrowCol: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  arrowIcon: {
    color: '#C4FA00',
    transform: 'rotate(-90deg)',
  },
  arrowText: {
    fontSize: '0.75rem',
    color: '#64748B',
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: 1,
    fontFamily: "'Noto Sans Arabic', sans-serif",
  },
  statement: {
    textAlign: 'center',
    padding: '0 20px',
  },
  statementLine1: {
    fontSize: '2rem',
    fontWeight: 700,
    color: '#F5F7FA',
    marginBottom: 8,
    lineHeight: 1.6,
    fontFamily: "'Noto Sans Arabic', sans-serif",
  },
  statementLine2: {
    fontSize: '2rem',
    fontWeight: 700,
    color: '#C4FA00',
    lineHeight: 1.6,
    fontFamily: "'Noto Sans Arabic', sans-serif",
  },
};

const ProblemSlide = () => {
  return (
    <section id="problem" style={styles.section}>
      <div style={styles.container}>
        <AnimatedSection direction="up">
          <div style={styles.sectionNum}>02</div>
        </AnimatedSection>

        <AnimatedSection direction="up" delay={100}>
          <h2 style={styles.title}>لماذا لا يكفي المحتوى القانوني التقليدي؟</h2>
        </AnimatedSection>

        <div style={styles.comparisonRow}>
          <AnimatedSection direction="right" delay={300}>
            <div style={styles.cardOpportunity}>
              <div style={{ ...styles.cardLabel, ...styles.cardLabelAccent }}>الفُرصة</div>
              <div style={{ ...styles.cardTitle, color: '#C4FA00', fontSize: '1.1rem', letterSpacing: 1 }}>OPPORTUNITY</div>
              {opportunityItems.map((item, i) => (
                <div
                  key={i}
                  style={i === opportunityItems.length - 1 ? { ...styles.itemRow, ...styles.itemRowLast } : styles.itemRow}
                >
                  <div style={{ ...styles.dot, ...styles.dotAccent }} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection direction="fade" delay={500}>
            <div style={styles.arrowCol}>
              <ArrowDown size={48} style={styles.arrowIcon} />
              <span style={styles.arrowText}>TODAY</span>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="left" delay={300}>
            <div style={styles.card}>
              <div style={{ ...styles.cardLabel, ...styles.cardLabelMuted }}>اليوم</div>
              <div style={{ ...styles.cardTitle, color: '#64748B', fontSize: '1.1rem', letterSpacing: 1 }}>TODAY</div>
              {todayItems.map((item, i) => (
                <div
                  key={i}
                  style={i === todayItems.length - 1 ? { ...styles.itemRow, ...styles.itemRowLast } : styles.itemRow}
                >
                  <div style={{ ...styles.dot, ...styles.dotMuted }} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection direction="up" delay={700}>
          <div style={styles.statement}>
            <div style={styles.statementLine1}>المشكلة ليست نقص المحتوى.</div>
            <div style={styles.statementLine2}>المشكلة هي عدم تحويل المحتوى إلى Growth System.</div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ProblemSlide;
