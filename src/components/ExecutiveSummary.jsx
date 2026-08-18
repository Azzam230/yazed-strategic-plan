import React from 'react';
import AnimatedSection from './AnimatedSection';
import { Shield, Eye, Target, ArrowLeft } from 'lucide-react';

const steps = [
  {
    num: '01',
    title: 'بناء السلطة',
    subtitle: 'Build Authority',
    desc: 'تأسيس حضور رقمي يعكس الخبرة والاحترافية',
    icon: Shield,
  },
  {
    num: '02',
    title: 'جذب الانتباه',
    subtitle: 'Create Attention',
    desc: 'محتوى يوقف السكرول ويبني التفاعل',
    icon: Eye,
  },
  {
    num: '03',
    title: 'التقاط الطلب',
    subtitle: 'Capture Demand',
    desc: 'تحويل البحث العضوي إلى استفسارات فعلية',
    icon: Target,
  },
  {
    num: '04',
    title: 'تحويل العملاء',
    subtitle: 'Convert Leads',
    desc: 'ضمان وصول كل استفسار إلى عميل مدفوع',
    icon: ArrowLeft,
  },
];

const formulaParts = ['Content', '+', 'Paid Media', '+', 'Retargeting', '=', 'Growth Engine'];

const b2cServices = [
  'التواصل العائلي والعقاري',
  'النزاعات المالية والديون',
  'الأحوال الشخصية والطلاق',
  'العقود والمطالبات',
  'الاستشارات القانونية العامة',
];

const b2bServices = [
  'صياغة ومراجعة العقود',
  'الحوكمة المؤسسية',
  'قانون العمل والتوظيف',
  'تأسيس الشركات',
  'المخاطر القانونية المؤسسية',
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
    marginBottom: 12,
    fontFamily: "'Noto Sans Arabic', sans-serif",
  },
  subtitle: {
    fontSize: '1.1rem',
    color: '#94A3B8',
    maxWidth: 600,
    lineHeight: 1.8,
    marginBottom: 60,
    fontFamily: "'Noto Sans Arabic', sans-serif",
  },
  stepsRow: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: 20,
    marginBottom: 60,
  },
  stepCard: {
    background: '#101F32',
    border: '1px solid rgba(255,255,255,0.06)',
    borderRadius: 16,
    padding: '36px 24px',
    position: 'relative',
    overflow: 'hidden',
    transition: 'transform 0.3s, border-color 0.3s',
  },
  stepCardHover: {
    transform: 'translateY(-4px)',
    borderColor: 'rgba(196,250,0,0.3)',
  },
  stepNum: {
    fontSize: '3rem',
    fontWeight: 800,
    color: 'rgba(196,250,0,0.12)',
    lineHeight: 1,
    marginBottom: 16,
    fontFamily: "'Noto Sans Arabic', sans-serif",
  },
  stepIcon: {
    marginBottom: 16,
    color: '#C4FA00',
  },
  stepTitle: {
    fontSize: '1.25rem',
    fontWeight: 700,
    color: '#F5F7FA',
    marginBottom: 4,
    fontFamily: "'Noto Sans Arabic', sans-serif",
  },
  stepSubtitle: {
    fontSize: '0.8rem',
    fontWeight: 600,
    color: '#C4FA00',
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 12,
  },
  stepDesc: {
    fontSize: '0.9rem',
    color: '#94A3B8',
    lineHeight: 1.7,
    fontFamily: "'Noto Sans Arabic', sans-serif",
  },
  accentLine: {
    width: 40,
    height: 3,
    background: '#C4FA00',
    borderRadius: 2,
    marginBottom: 20,
  },
  formulaSection: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    flexWrap: 'wrap',
    marginBottom: 80,
  },
  pill: {
    background: '#101F32',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: 50,
    padding: '12px 28px',
    color: '#F5F7FA',
    fontSize: '0.95rem',
    fontWeight: 600,
    fontFamily: "'Noto Sans Arabic', sans-serif",
  },
  pillEquals: {
    background: '#C4FA00',
    color: '#07111F',
    borderRadius: 50,
    padding: '12px 28px',
    fontSize: '1.1rem',
    fontWeight: 800,
  },
  pillResult: {
    background: 'rgba(196,250,0,0.12)',
    border: '1px solid rgba(196,250,0,0.3)',
    borderRadius: 50,
    padding: '12px 28px',
    color: '#C4FA00',
    fontSize: '0.95rem',
    fontWeight: 700,
  },
  twoCol: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 32,
  },
  b2bCard: {
    background: '#101F32',
    border: '1px solid rgba(255,255,255,0.06)',
    borderRadius: 20,
    padding: 40,
  },
  b2bHeader: {
    fontSize: '1.4rem',
    fontWeight: 700,
    color: '#C4FA00',
    marginBottom: 24,
    fontFamily: "'Noto Sans Arabic', sans-serif",
  },
  b2bItem: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    padding: '12px 0',
    borderBottom: '1px solid rgba(255,255,255,0.06)',
    fontSize: '0.95rem',
    color: '#F5F7FA',
    fontFamily: "'Noto Sans Arabic', sans-serif",
  },
  b2bDot: {
    width: 8,
    height: 8,
    borderRadius: '50%',
    background: '#C4FA00',
    flexShrink: 0,
  },
};

const ExecutiveSummary = () => {
  const [hoveredStep, setHoveredStep] = React.useState(null);

  return (
    <section id="strategy" style={styles.section}>
      <div style={styles.container}>
        <AnimatedSection direction="up">
          <div style={styles.sectionNum}>01</div>
        </AnimatedSection>

        <AnimatedSection direction="up" delay={100}>
          <h2 style={styles.title}>الاستراتيجية الرقمية المتكاملة</h2>
        </AnimatedSection>

        <AnimatedSection direction="up" delay={200}>
          <p style={styles.subtitle}>
            نظام متكامل يحوّل الحضور الرقمي إلى مصدر مستدام للثقة والعملاء
          </p>
        </AnimatedSection>

        <div style={styles.stepsRow}>
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <AnimatedSection key={i} direction="up" delay={300 + i * 120}>
                <div
                  style={{
                    ...styles.stepCard,
                    ...(hoveredStep === i ? styles.stepCardHover : {}),
                  }}
                  onMouseEnter={() => setHoveredStep(i)}
                  onMouseLeave={() => setHoveredStep(null)}
                >
                  <div style={styles.stepNum}>{step.num}</div>
                  <div style={styles.accentLine} />
                  <div style={styles.stepIcon}>
                    <Icon size={28} />
                  </div>
                  <h3 style={styles.stepTitle}>{step.title}</h3>
                  <div style={styles.stepSubtitle}>{step.subtitle}</div>
                  <p style={styles.stepDesc}>{step.desc}</p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        <AnimatedSection direction="fade" delay={600}>
          <div style={styles.formulaSection}>
            {formulaParts.map((part, i) => {
              if (part === '+') {
                return (
                  <span key={i} style={{ color: '#64748B', fontSize: '1.2rem', fontWeight: 300 }}>
                    +
                  </span>
                );
              }
              if (part === '=') {
                return (
                  <span key={i} style={styles.pillEquals}>=</span>
                );
              }
              if (part === 'Growth Engine') {
                return (
                  <span key={i} style={styles.pillResult}>{part}</span>
                );
              }
              return (
                <span key={i} style={styles.pill}>{part}</span>
              );
            })}
          </div>
        </AnimatedSection>

        <div style={styles.twoCol}>
          <AnimatedSection direction="left" delay={800}>
            <div style={styles.b2bCard}>
              <h3 style={styles.b2bHeader}>B2B — الشركات</h3>
              {b2bServices.map((s, i) => (
                <div key={i} style={styles.b2bItem}>
                  <div style={styles.b2bDot} />
                  <span>{s}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={800}>
            <div style={styles.b2bCard}>
              <h3 style={styles.b2bHeader}>B2C — الأفراد</h3>
              {b2cServices.map((s, i) => (
                <div key={i} style={styles.b2bItem}>
                  <div style={styles.b2bDot} />
                  <span>{s}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ExecutiveSummary;
