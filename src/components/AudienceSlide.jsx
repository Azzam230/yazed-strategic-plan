import React from 'react';
import AnimatedSection from './AnimatedSection';
import { Users, Building2, ChevronLeft } from 'lucide-react';

const b2cPainPoints = ['عقار', 'نزاعات مالية', 'أحوال شخصية', 'عقود', 'مطالبات'];
const b2bPainPoints = ['Contracts', 'Governance', 'Labor', 'Company Formation', 'Corporate Risk'];
const b2cPlatforms = ['Instagram', 'TikTok', 'X'];
const b2bPlatforms = ['LinkedIn', 'X'];
const b2cFlow = ['Attention', 'Trust', 'WhatsApp', 'Consultation'];
const b2bFlow = ['Authority', 'Lead', 'Consultation', 'Corporate Client'];

const FlowArrow = () => (
  <span style={{ color: '#999999', padding: '0 6px', flexShrink: 0, fontSize: '1rem' }}>
    <ChevronLeft size={18} />
  </span>
);

const AudienceSlide = () => {
  return (
    <section id="audience" className="section-padding" style={{ position: 'relative', overflow: 'clip' }}>
      <div className="section-container">
        <AnimatedSection direction="up">
          <div style={{ fontSize: '4rem', fontWeight: 800, color: '#FFFFFF', lineHeight: 1, marginBottom: 8, fontFamily: "'Noto Sans Arabic', sans-serif" }}>04</div>
        </AnimatedSection>

        <AnimatedSection direction="up" delay={0.1}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#FFFFFF', marginBottom: 60, fontFamily: "'Noto Sans Arabic', sans-serif" }}>الجمهور المستهدف</h2>
        </AnimatedSection>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
          {/* B2C Path */}
          <AnimatedSection direction="right" delay={0.3}>
            <div className="glass" style={{ padding: 40, display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 28 }}>
                <div style={{ width: 48, height: 48, borderRadius: 12, background: 'rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFFFFF', flexShrink: 0 }}>
                  <Users size={24} />
                </div>
                <div style={{ fontSize: '1.3rem', fontWeight: 700, color: '#FFFFFF' }}>B2C — الأفراد</div>
              </div>

              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 28 }}>
                {b2cPlatforms.map((p, i) => (
                  <span key={i} style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 50, padding: '6px 16px', fontSize: '0.8rem', fontWeight: 600, color: '#FFFFFF' }}>{p}</span>
                ))}
              </div>

              <div style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1.5, color: '#999999', marginBottom: 14, fontFamily: "'Noto Sans Arabic', sans-serif" }}>Pain Points</div>
              <div style={{ marginBottom: 32 }}>
                {b2cPainPoints.map((item, i) => (
                  <div
                    key={i}
                    style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 0', borderBottom: i < b2cPainPoints.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none', fontSize: '0.95rem', color: '#FFFFFF', fontFamily: "'Noto Sans Arabic', sans-serif" }}
                  >
                    <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#FFFFFF', flexShrink: 0 }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: 'auto' }}>
                <div style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1.5, color: '#999999', marginBottom: 14, fontFamily: "'Noto Sans Arabic', sans-serif" }}>Customer Flow</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 0, flexWrap: 'wrap' }}>
                  {b2cFlow.map((step, i) => (
                    <React.Fragment key={i}>
                      <span
                        style={
                          i === b2cFlow.length - 1
                            ? { background: '#FFFFFF', color: '#000000', border: '1px solid #FFFFFF', borderRadius: 50, padding: '10px 20px', fontSize: '0.85rem', fontWeight: 600, whiteSpace: 'nowrap' }
                            : { background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 50, padding: '10px 20px', fontSize: '0.85rem', fontWeight: 600, color: '#FFFFFF', whiteSpace: 'nowrap' }
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
          <AnimatedSection direction="left" delay={0.3}>
            <div className="glass" style={{ padding: 40, display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 28 }}>
                <div style={{ width: 48, height: 48, borderRadius: 12, background: 'rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFFFFF', flexShrink: 0 }}>
                  <Building2 size={24} />
                </div>
                <div style={{ fontSize: '1.3rem', fontWeight: 700, color: '#FFFFFF' }}>B2B — الشركات</div>
              </div>

              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 28 }}>
                {b2bPlatforms.map((p, i) => (
                  <span key={i} style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 50, padding: '6px 16px', fontSize: '0.8rem', fontWeight: 600, color: '#FFFFFF' }}>{p}</span>
                ))}
              </div>

              <div style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1.5, color: '#999999', marginBottom: 14, fontFamily: "'Noto Sans Arabic', sans-serif" }}>Pain Points</div>
              <div style={{ marginBottom: 32 }}>
                {b2bPainPoints.map((item, i) => (
                  <div
                    key={i}
                    style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 0', borderBottom: i < b2bPainPoints.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none', fontSize: '0.95rem', color: '#FFFFFF', fontFamily: "'Noto Sans Arabic', sans-serif" }}
                  >
                    <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#FFFFFF', flexShrink: 0 }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: 'auto' }}>
                <div style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1.5, color: '#999999', marginBottom: 14, fontFamily: "'Noto Sans Arabic', sans-serif" }}>Customer Flow</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 0, flexWrap: 'wrap' }}>
                  {b2bFlow.map((step, i) => (
                    <React.Fragment key={i}>
                      <span
                        style={
                          i === b2bFlow.length - 1
                            ? { background: '#FFFFFF', color: '#000000', border: '1px solid #FFFFFF', borderRadius: 50, padding: '10px 20px', fontSize: '0.85rem', fontWeight: 600, whiteSpace: 'nowrap' }
                            : { background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 50, padding: '10px 20px', fontSize: '0.85rem', fontWeight: 600, color: '#FFFFFF', whiteSpace: 'nowrap' }
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
