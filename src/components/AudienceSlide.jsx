import React from 'react';
import AnimatedSection from './AnimatedSection';
import { Users, Building2, ChevronLeft } from 'lucide-react';

const b2cPainPoints = ['عقار', 'نزاعات مالية', 'أحوال شخصية', 'عقود', 'مطالبات'];
const b2bPainPoints = ['Contracts', 'Governance', 'Labor', 'Company Formation', 'Corporate Risk'];
const b2cPlatforms = ['Instagram', 'TikTok', 'X'];
const b2bPlatforms = ['LinkedIn', 'X'];
const b2cFlow = ['Attention', 'Trust', 'WhatsApp', 'Consultation'];
const b2bFlow = ['Authority', 'Lead', 'Consultation', 'Corporate Client'];

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
    fontFamily: "'Noto Sans Arabic', sans-serif",
  },
  pathRow: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 32,
  },
  pathCard: {
    background: '#101F32',
    border: '1px solid rgba(255,255,255,0.06)',
    borderRadius: 20,
    padding: 40,
    display: 'flex',
    flexDirection: 'column',
  },
  pathHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: 14,
    marginBottom: 28,
  },
  pathIcon: {
    width: 48,
    height: 48,
    borderRadius: 12,
    background: 'rgba(196,250,0,0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#C4FA00',
    flexShrink: 0,
  },
  pathTitle: {
    fontSize: '1.3rem',
    fontWeight: 700,
    color: '#F5F7FA',
  },
  platformsRow: {
    display: 'flex',
    gap: 8,
    flexWrap: 'wrap',
    marginBottom: 28,
  },
  platformBadge: {
    background: 'rgba(196,250,0,0.08)',
    border: '1px solid rgba(196,250,0,0.15)',
    borderRadius: 50,
    padding: '6px 16px',
    fontSize: '0.8rem',
    fontWeight: 600,
    color: '#C4FA00',
  },
  sectionLabel: {
    fontSize: '0.8rem',
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: 1.5,
    color: '#64748B',
    marginBottom: 14,
    fontFamily: "'Noto Sans Arabic', sans-serif",
  },
  painList: {
    marginBottom: 32,
  },
  painItem: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    padding: '10px 0',
    borderBottom: '1px solid rgba(255,255,255,0.06)',
    fontSize: '0.95rem',
    color: '#F5F7FA',
    fontFamily: "'Noto Sans Arabic', sans-serif",
  },
  painDot: {
    width: 6,
    height: 6,
    borderRadius: '50%',
    background: '#C4FA00',
    flexShrink: 0,
  },
  flowSection: {
    marginTop: 'auto',
  },
  flowRow: {
    display: 'flex',
    alignItems: 'center',
    gap: 0,
    flexWrap: 'wrap',
  },
  flowPill: {
    background: 'rgba(196,250,0,0.1)',
    border: '1px solid rgba(196,250,0,0.2)',
    borderRadius: 50,
    padding: '10px 20px',
    fontSize: '0.85rem',
    fontWeight: 600,
    color: '#C4FA00',
    whiteSpace: 'nowrap',
  },
  flowPillLast: {
    background: '#C4FA00',
    color: '#07111F',
    border: '1px solid #C4FA00',
  },
  flowArrow: {
    color: '#64748B',
    padding: '0 6px',
    flexShrink: 0,
    fontSize: '1rem',
  },
};

const FlowArrow = () => (
  <span style={styles.flowArrow}>
    <ChevronLeft size={18} />
  </span>
);

const AudienceSlide = () => {
  return (
    <section id="audience" style={styles.section}>
      <div style={styles.container}>
        <AnimatedSection direction="up">
          <div style={styles.sectionNum}>04</div>
        </AnimatedSection>

        <AnimatedSection direction="up" delay={100}>
          <h2 style={styles.title}>الجمهور المستهدف</h2>
        </AnimatedSection>

        <div style={styles.pathRow}>
          {/* B2C Path */}
          <AnimatedSection direction="right" delay={300}>
            <div style={styles.pathCard}>
              <div style={styles.pathHeader}>
                <div style={styles.pathIcon}>
                  <Users size={24} />
                </div>
                <div style={styles.pathTitle}>B2C — الأفراد</div>
              </div>

              <div style={styles.platformsRow}>
                {b2cPlatforms.map((p, i) => (
                  <span key={i} style={styles.platformBadge}>{p}</span>
                ))}
              </div>

              <div style={styles.sectionLabel}>Pain Points</div>
              <div style={styles.painList}>
                {b2cPainPoints.map((item, i) => (
                  <div
                    key={i}
                    style={
                      i === b2cPainPoints.length - 1
                        ? { ...styles.painItem, borderBottom: 'none' }
                        : styles.painItem
                    }
                  >
                    <div style={styles.painDot} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div style={styles.flowSection}>
                <div style={styles.sectionLabel}>Customer Flow</div>
                <div style={styles.flowRow}>
                  {b2cFlow.map((step, i) => (
                    <React.Fragment key={i}>
                      <span
                        style={
                          i === b2cFlow.length - 1
                            ? { ...styles.flowPill, ...styles.flowPillLast }
                            : styles.flowPill
                        }
                      >
                        {step}
                      </span>
                      {i < b2cFlow.length - 1 && <FlowArrow />}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* B2B Path */}
          <AnimatedSection direction="left" delay={300}>
            <div style={styles.pathCard}>
              <div style={styles.pathHeader}>
                <div style={styles.pathIcon}>
                  <Building2 size={24} />
                </div>
                <div style={styles.pathTitle}>B2B — الشركات</div>
              </div>

              <div style={styles.platformsRow}>
                {b2bPlatforms.map((p, i) => (
                  <span key={i} style={styles.platformBadge}>{p}</span>
                ))}
              </div>

              <div style={styles.sectionLabel}>Pain Points</div>
              <div style={styles.painList}>
                {b2bPainPoints.map((item, i) => (
                  <div
                    key={i}
                    style={
                      i === b2bPainPoints.length - 1
                        ? { ...styles.painItem, borderBottom: 'none' }
                        : styles.painItem
                    }
                  >
                    <div style={styles.painDot} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div style={styles.flowSection}>
                <div style={styles.sectionLabel}>Customer Flow</div>
                <div style={styles.flowRow}>
                  {b2bFlow.map((step, i) => (
                    <React.Fragment key={i}>
                      <span
                        style={
                          i === b2bFlow.length - 1
                            ? { ...styles.flowPill, ...styles.flowPillLast }
                            : styles.flowPill
                        }
                      >
                        {step}
                      </span>
                      {i < b2bFlow.length - 1 && <FlowArrow />}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AudienceSlide;
