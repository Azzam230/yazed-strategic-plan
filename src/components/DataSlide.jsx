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

const DataSlide = () => {
  const [hoveredCard, setHoveredCard] = React.useState(null);

  return (
    <section id="data" className="section-padding" style={{ position: 'relative', overflow: 'clip' }}>
      <div className="section-container">
        <AnimatedSection direction="up">
          <div style={{ fontSize: '4rem', fontWeight: 800, color: '#FFFFFF', lineHeight: 1, marginBottom: 8, fontFamily: "'Noto Sans Arabic', sans-serif" }}>03</div>
        </AnimatedSection>

        <AnimatedSection direction="up" delay={100}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#FFFFFF', marginBottom: 8, fontFamily: "'Noto Sans Arabic', sans-serif" }}>ماذا تخبرنا البيانات؟</h2>
        </AnimatedSection>

        <AnimatedSection direction="up" delay={150}>
          <p style={{ fontSize: '1rem', color: '#999999', marginBottom: 60, fontWeight: 500, letterSpacing: 1 }}>Previous Content Performance</p>
        </AnimatedSection>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginBottom: 80 }}>
          {metrics.map((m, i) => (
            <AnimatedSection key={i} direction="up" delay={300 + i * 150}>
              <div
                className="glass"
                style={{
                  padding: '48px 36px',
                  textAlign: 'center',
                  position: 'relative',
                  overflow: 'clip',
                  transition: 'transform 0.3s, border-color 0.3s',
                  border: hoveredCard === i
                    ? '1px solid rgba(255,255,255,0.15)'
                    : '1px solid rgba(255,255,255,0.08)',
                  transform: hoveredCard === i ? 'translateY(-4px)' : 'translateY(0)',
                  cursor: 'default',
                }}
                onMouseEnter={() => setHoveredCard(i)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div style={{ position: 'absolute', top: -30, left: '50%', transform: 'translateX(-50%)', width: 120, height: 120, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 48, height: 48, borderRadius: 12, background: 'rgba(255,255,255,0.06)', margin: '0 auto 24px', color: '#FFFFFF' }}>
                  <TrendingUp size={24} />
                </div>
                <div style={{ fontSize: '3.5rem', fontWeight: 800, color: '#FFFFFF', lineHeight: 1, marginBottom: 4, fontFamily: "'Noto Sans Arabic', sans-serif" }}>{m.number}</div>
                <div style={{ fontSize: '1.1rem', fontWeight: 600, color: '#FFFFFF', marginBottom: 12 }}>{m.label}</div>
                <div style={{ fontSize: '0.9rem', color: '#A0A0A0', lineHeight: 1.6, fontFamily: "'Noto Sans Arabic', sans-serif" }}>{m.desc}</div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection direction="up" delay={700}>
          <div style={{ textAlign: 'center', marginBottom: 80 }}>
            <div style={{ fontSize: '1.8rem', fontWeight: 700, color: '#FFFFFF', lineHeight: 1.8, fontFamily: "'Noto Sans Arabic', sans-serif" }}>المحتوى المرتبط بمشكلة قانونية حقيقية</div>
            <div style={{ fontSize: '1.8rem', fontWeight: 700, color: '#FFFFFF', lineHeight: 1.8, fontFamily: "'Noto Sans Arabic', sans-serif" }}>يتفوق على المعلومة القانونية العامة.</div>
          </div>
        </AnimatedSection>

        <AnimatedSection direction="fade" delay={900}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
            {formulaParts.map((part, i) => {
              if (part === '+') {
                return (
                  <span key={i} style={{ color: '#999999', fontSize: '1.2rem', fontWeight: 300 }}>
                    +
                  </span>
                );
              }
              if (part === '→') {
                return (
                  <span key={i} style={{ background: '#FFFFFF', borderRadius: 50, padding: '12px 24px', color: '#000000', display: 'flex', alignItems: 'center', gap: 6, fontWeight: 800, fontSize: '0.95rem' }}>
                    <ArrowRight size={18} />
                    Higher Attention
                  </span>
                );
              }
              return (
                <span key={i} style={{ background: 'rgba(20,20,20,0.7)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 50, padding: '12px 28px', color: '#FFFFFF', fontSize: '0.95rem', fontWeight: 600 }}>{part}</span>
              );
            })}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default DataSlide;
