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

const ProblemSlide = () => {
  return (
    <section id="problem" className="section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="section-container">
        <AnimatedSection direction="up">
          <div style={{ fontSize: '4rem', fontWeight: 800, color: '#FFFFFF', lineHeight: 1, marginBottom: 8, fontFamily: "'Noto Sans Arabic', sans-serif" }}>02</div>
        </AnimatedSection>

        <AnimatedSection direction="up" delay={100}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#FFFFFF', marginBottom: 60, maxWidth: 700, lineHeight: 1.4, fontFamily: "'Noto Sans Arabic', sans-serif" }}>
            لماذا لا يكفي المحتوى القانوني التقليدي؟
          </h2>
        </AnimatedSection>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: 32, alignItems: 'center', marginBottom: 80 }}>
          <AnimatedSection direction="right" delay={300}>
            <div className="glass" style={{ padding: 40, minHeight: 380, borderLeft: '2px solid #FFFFFF' }}>
              <div style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 2, marginBottom: 8, color: '#FFFFFF' }}>الفُرصة</div>
              <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#FFFFFF', marginBottom: 32, fontFamily: "'Noto Sans Arabic', sans-serif", letterSpacing: 1 }}>OPPORTUNITY</div>
              {opportunityItems.map((item, i) => (
                <div
                  key={i}
                  style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '14px 0', borderBottom: i < opportunityItems.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none', fontSize: '1rem', color: '#FFFFFF', fontFamily: "'Noto Sans Arabic', sans-serif" }}
                >
                  <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#FFFFFF', flexShrink: 0 }} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection direction="fade" delay={500}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
              <ArrowDown size={48} style={{ color: '#FFFFFF', transform: 'rotate(-90deg)' }} />
              <span style={{ fontSize: '0.75rem', color: '#666666', fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1, fontFamily: "'Noto Sans Arabic', sans-serif" }}>TODAY</span>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="left" delay={300}>
            <div className="glass" style={{ padding: 40, minHeight: 380 }}>
              <div style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 2, marginBottom: 8, color: '#666666' }}>اليوم</div>
              <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#666666', marginBottom: 32, fontFamily: "'Noto Sans Arabic', sans-serif", letterSpacing: 1 }}>TODAY</div>
              {todayItems.map((item, i) => (
                <div
                  key={i}
                  style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '14px 0', borderBottom: i < todayItems.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none', fontSize: '1rem', color: '#A0A0A0', fontFamily: "'Noto Sans Arabic', sans-serif" }}
                >
                  <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#666666', flexShrink: 0 }} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection direction="up" delay={700}>
          <div style={{ textAlign: 'center', padding: '0 20px' }}>
            <div style={{ fontSize: '2rem', fontWeight: 700, color: '#FFFFFF', marginBottom: 8, lineHeight: 1.6, fontFamily: "'Noto Sans Arabic', sans-serif" }}>
              المشكلة ليست نقص المحتوى.
            </div>
            <div style={{ fontSize: '2rem', fontWeight: 700, color: '#FFFFFF', lineHeight: 1.6, fontFamily: "'Noto Sans Arabic', sans-serif" }}>
              المشكلة هي عدم تحويل المحتوى إلى Growth System.
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ProblemSlide;
