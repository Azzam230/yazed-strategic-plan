import { useState } from 'react'
import AnimatedSection from './AnimatedSection'
import { MessageCircle, Bot, User, CheckCircle2, ArrowDown } from 'lucide-react'

const flowSteps = [
  {
    type: 'client',
    sender: 'العميل',
    text: 'أبي استشارة',
    time: '10:32 ص',
  },
  {
    type: 'auto',
    sender: 'رد آلي',
    text: 'مرحبًا، يسعدنا مساعدتك. أخبرنا: هل الاستشارة مرتبطة بـ (1) عقار، (2) عقود، (3) نزاع، (4) شركة، أو (5) أخرى؟',
    time: '10:32 ص',
  },
  {
    type: 'client',
    sender: 'العميل',
    text: '(2) عقود',
    time: '10:33 ص',
  },
  {
    type: 'auto',
    sender: 'رد آلي',
    text: 'ما هي المدينة؟',
    time: '10:33 ص',
  },
  {
    type: 'auto',
    sender: 'رد آلي',
    text: 'هل الحالة مرتبطة بـ تعاملات تجارية أم شخصية؟',
    time: '10:33 ص',
  },
  {
    type: 'client',
    sender: 'العميل',
    text: 'تعام تجارية، الرياض',
    time: '10:34 ص',
  },
  {
    type: 'response',
    sender: 'النظام',
    text: 'تم حجز موعدك. سيتواصل معك المستشار خلال 24 ساعة.',
    time: '10:34 ص',
  },
]

const qualificationQuestions = [
  { num: '1', text: 'هل الاستشارة مرتبطة بـ...؟', detail: 'نوع القضية: عقار / عقود / نزاع / شركة / أخرى' },
  { num: '2', text: 'ما هي المدينة؟', detail: 'تحديد الموقع الجغرافي للـ管辖法院' },
  { num: '3', text: 'هل الحالة مرتبطة بـ...؟', detail: 'النوع: تعاملات تجارية / شخصية' },
]

function ChatBubble({ step, index }) {
  const isClient = step.type === 'client'
  const isResponse = step.type === 'response'

  const bubbleStyle = isResponse
    ? {
        backgroundColor: 'rgba(196,250,0,0.08)',
        border: '1px solid rgba(196,250,0,0.2)',
      }
    : isClient
      ? {
          backgroundColor: 'rgba(196,250,0,0.12)',
          border: '1px solid rgba(196,250,0,0.18)',
          marginInlineStart: '2.5rem',
        }
      : {
          backgroundColor: 'rgba(7,17,31,0.6)',
          border: '1px solid rgba(255,255,255,0.06)',
          marginInlineEnd: '2.5rem',
        }

  return (
    <AnimatedSection delay={index * 0.08} direction={isClient ? 'right' : 'left'}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: isClient ? 'flex-start' : 'flex-end', gap: '0.375rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', paddingInline: '0.5rem' }}>
          <div
            style={{
              width: '1.5rem',
              height: '1.5rem',
              borderRadius: '6px',
              backgroundColor: isResponse ? 'rgba(196,250,0,0.15)' : isClient ? 'rgba(196,250,0,0.1)' : 'rgba(148,163,184,0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {isClient ? (
              <User style={{ width: '0.75rem', height: '0.75rem', color: '#C4FA00' }} />
            ) : (
              <Bot style={{ width: '0.75rem', height: '0.75rem', color: isResponse ? '#C4FA00' : '#94A3B8' }} />
            )}
          </div>
          <span
            style={{
              fontSize: '0.7rem',
              fontWeight: 600,
              color: isResponse ? '#C4FA00' : isClient ? '#C4FA00' : '#94A3B8',
            }}
          >
            {step.sender}
          </span>
        </div>

        <div
          className="glass"
          style={{
            borderRadius: '14px',
            padding: '0.875rem 1.125rem',
            maxWidth: '520px',
            width: '100%',
            ...bubbleStyle,
          }}
        >
          <p
            style={{
              fontSize: '0.875rem',
              color: '#F5F7FA',
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            {step.text}
          </p>
        </div>

        <span
          style={{
            fontSize: '0.6rem',
            color: '#64748B',
            paddingInline: '0.5rem',
          }}
        >
          {step.time}
        </span>
      </div>
    </AnimatedSection>
  )
}

export default function WhatsAppConversion() {
  return (
    <section
      id="whatsapp-conversion"
      className="slide"
      style={{
        backgroundColor: '#07111F',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '15%',
          insetInlineStart: '50%',
          transform: 'translateX(-50%)',
          width: '650px',
          height: '320px',
          borderRadius: '50%',
          background: 'rgba(34,197,94,0.03)',
          filter: 'blur(150px)',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <AnimatedSection delay={0}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.4rem 1rem',
                borderRadius: '9999px',
                backgroundColor: 'rgba(34,197,94,0.08)',
                border: '1px solid rgba(34,197,94,0.15)',
                marginBottom: '1.25rem',
              }}
            >
              <MessageCircle style={{ width: '0.875rem', height: '0.875rem', color: '#22C55E' }} />
              <span
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: '#22C55E',
                  letterSpacing: '0.05em',
                }}
              >
                WHATSAPP FLOW
              </span>
            </div>
            <h2
              style={{
                fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
                fontWeight: 800,
                color: '#F5F7FA',
                fontFamily: 'var(--font-display)',
                marginBottom: '0.5rem',
                lineHeight: 1.3,
              }}
            >
              نحوّل المحادثة إلى استشارة
            </h2>
            <p
              style={{
                fontSize: '1rem',
                color: '#94A3B8',
                maxWidth: '500px',
                margin: '0 auto',
              }}
            >
              WhatsApp Qualification Flow
            </p>
          </div>
        </AnimatedSection>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '2.5rem',
            alignItems: 'start',
          }}
        >
          <AnimatedSection delay={0.1}>
            <div
              className="glass"
              style={{
                borderRadius: '20px',
                padding: '1.75rem',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.625rem',
                  marginBottom: '1.5rem',
                  paddingBottom: '1rem',
                  borderBottom: '1px solid rgba(255,255,255,0.06)',
                }}
              >
                <div
                  style={{
                    width: '2.25rem',
                    height: '2.25rem',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(34,197,94,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <MessageCircle style={{ width: '1rem', height: '1rem', color: '#22C55E' }} />
                </div>
                <h3
                  style={{
                    fontSize: '1rem',
                    fontWeight: 700,
                    color: '#F5F7FA',
                    fontFamily: 'var(--font-display)',
                  }}
                >
                  تسلسل المحادثة
                </h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {flowSteps.map((step, i) => (
                  <div key={i}>
                    <ChatBubble step={step} index={i} />
                    {i < flowSteps.length - 1 && (
                      <div style={{ display: 'flex', justifyContent: 'center', padding: '0.125rem 0' }}>
                        <ArrowDown style={{ width: '0.75rem', height: '0.75rem', color: '#64748B', opacity: 0.5 }} />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <AnimatedSection delay={0.15}>
              <div
                className="glass"
                style={{
                  borderRadius: '16px',
                  padding: '1.5rem',
                  border: '1px solid rgba(255,255,255,0.06)',
                }}
              >
                <h3
                  style={{
                    fontSize: '1rem',
                    fontWeight: 700,
                    color: '#F5F7FA',
                    fontFamily: 'var(--font-display)',
                    marginBottom: '1.25rem',
                  }}
                >
                  أسئلة التأهيل
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {qualificationQuestions.map((q) => (
                    <div
                      key={q.num}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.75rem',
                        padding: '1rem',
                        borderRadius: '12px',
                        backgroundColor: 'rgba(7,17,31,0.5)',
                        border: '1px solid rgba(255,255,255,0.04)',
                      }}
                    >
                      <span
                        style={{
                          width: '1.75rem',
                          height: '1.75rem',
                          borderRadius: '8px',
                          backgroundColor: '#C4FA00',
                          color: '#000',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '0.75rem',
                          fontWeight: 700,
                          flexShrink: 0,
                        }}
                      >
                        {q.num}
                      </span>
                      <div>
                        <p
                          style={{
                            fontSize: '0.85rem',
                            color: '#F5F7FA',
                            fontWeight: 600,
                            marginBottom: '0.25rem',
                          }}
                        >
                          {q.text}
                        </p>
                        <p
                          style={{
                            fontSize: '0.75rem',
                            color: '#64748B',
                            lineHeight: 1.5,
                            margin: 0,
                          }}
                        >
                          {q.detail}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2} direction="up">
              <div
                className="glass"
                style={{
                  borderRadius: '16px',
                  padding: '1.25rem 1.5rem',
                  border: '1px solid rgba(196,250,0,0.15)',
                  backgroundColor: 'rgba(196,250,0,0.04)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                }}
              >
                <div
                  style={{
                    width: '2.5rem',
                    height: '2.5rem',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(34,197,94,0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <CheckCircle2 style={{ width: '1.125rem', height: '1.125rem', color: '#22C55E' }} />
                </div>
                <div>
                  <p
                    style={{
                      fontSize: '0.9rem',
                      color: '#C4FA00',
                      fontWeight: 700,
                      marginBottom: '0.125rem',
                    }}
                  >
                    تم حجز موعدك
                  </p>
                  <p
                    style={{
                      fontSize: '0.75rem',
                      color: '#94A3B8',
                      margin: 0,
                    }}
                  >
                    تحويل فوري من استفسار إلى موعد محجوز
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #whatsapp-conversion .container > div:last-of-type {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
