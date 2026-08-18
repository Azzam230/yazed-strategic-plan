import { useState, useEffect } from 'react'
import AnimatedSection from './AnimatedSection'
import { MessageCircle, User, Bot, CheckCircle2, ArrowRight, Shield, Clock, Target } from 'lucide-react'

const scenarios = {
  b2c: {
    label: 'B2C — الأفراد',
    types: [
      { id: 'financial', label: 'نزاع مالي' },
      { id: 'real-estate', label: 'نزاع عقاري' },
      { id: 'labor', label: 'قضية عمالية' },
      { id: 'family', label: 'أحوال شخصية' },
    ],
    chat: [
      { sender: 'client', text: 'السلام عليكم، عندي مبلغ لشخص من فترة وما رجعه لي، وأحتاج أعرف وش أقدر أسوي.', time: '١٠:٣٢ ص' },
      { sender: 'office', text: 'وعليكم السلام ورحمة الله وبركاته. أهلًا بك، نقدر نساعدك في تقييم موقفك. حتى نوجّهك بشكل صحيح، عندنا كم سؤال بسيط.', time: '١٠:٣٢ ص' },
      { sender: 'office', text: 'كم تقريبًا المبلغ المستحق؟', time: '١٠:٣٣ ص' },
      { sender: 'client', text: 'حوالي ٨٥,٠٠٠ ريال.', time: '١٠:٣٣ ص' },
      { sender: 'office', text: 'هل عندك ما يثبت المبلغ أو الاتفاق بينكم؟', time: '١٠:٣٣ ص' },
      { sender: 'client', text: 'نعم، عندي تحويلات ومراسلات بيننا.', time: '١٠:٣٤ ص' },
      { sender: 'office', text: 'ممتاز. هل سبق وطالبت الطرف الآخر بالسداد؟', time: '١٠:٣٤ ص' },
      { sender: 'client', text: 'نعم، أكثر من مرة، لكنه ما سدد.', time: '١٠:٣٤ ص' },
      { sender: 'office', text: 'واضح. بناءً على المعلومات الأولية، نحتاج نراجع المستندات والتفاصيل لتحديد الإجراء القانوني المناسب.', time: '١٠:٣٥ ص' },
      { sender: 'cta', text: 'احجز استشارتك', time: '' },
      { sender: 'confirmation', text: 'تم حجز موعدك — سيقوم فريق المكتب بالتواصل معك لتأكيد الموعد.', time: '١٠:٣٥ ص' },
    ],
    qualification: [
      { num: '01', question: 'وش نوع المشكلة؟', answer: 'نزاع مالي' },
      { num: '02', question: 'قيمة المطالبة؟', answer: '٨٥,٠٠٠ ريال' },
      { num: '03', question: 'المستندات المتوفرة؟', answer: 'تحويلات + مراسلات' },
      { num: '04', question: 'حالة المطالبة؟', answer: 'تمت المطالبة بالسداد ولم يتم الدفع' },
    ],
  },
  b2b: {
    label: 'B2B — الشركات',
    types: [
      { id: 'contract', label: 'عقد تجاري' },
      { id: 'establish', label: 'تأسيس شركة' },
      { id: 'labor', label: 'نزاع عمالي' },
      { id: 'governance', label: 'حوكمة الشركات' },
    ],
    chat: [
      { sender: 'client', text: 'السلام عليكم، عندنا مشكلة في عقد تجاري مع شريك ونبي نعرف وش الإجراء.', time: '١٠:٣٢ ص' },
      { sender: 'office', text: 'وعليكم السلام ورحمة الله وبركاته. أهلًا بك، نقدر نساعدك. للتهيئة، عندنا كم سؤال.', time: '١٠:٣٢ ص' },
      { sender: 'office', text: 'وش نوع النشاط التجاري؟', time: '١٠:٣٣ ص' },
      { sender: 'client', text: 'تجارة تجزئة.', time: '١٠:٣٣ ص' },
      { sender: 'office', text: 'هل يوجد عقد مكتوب بين الطرفين؟', time: '١٠:٣٣ ص' },
      { sender: 'client', text: 'نعم، فيه عقد تأسيس شراكة.', time: '١٠:٣٤ ص' },
      { sender: 'office', text: 'وش طبيعة المشكلة بالتحديد؟', time: '١٠:٣٤ ص' },
      { sender: 'client', text: 'الشريك ما يفي بالتزاماته المالية حسب العقد.', time: '١٠:٣٤ ص' },
      { sender: 'office', text: 'واضح. نحتاج مراجعة العقد والمستندات الداعمة لتحديد الإجراء المناسب.', time: '١٠:٣٥ ص' },
      { sender: 'cta', text: 'أرسل المستندات', time: '' },
      { sender: 'confirmation', text: 'تم استلام طلبك — سيتواصل معك فريق المكتب خلال ٢٤ ساعة.', time: '١٠:٣٥ ص' },
    ],
    qualification: [
      { num: '01', question: 'وش نوع النشاط؟', answer: 'تجارة تجزئة' },
      { num: '02', question: 'المشكلة القانونية؟', answer: 'عدم التزام شريك مالي' },
      { num: '03', question: 'هل يوجد عقد؟', answer: 'عقد تأسيس شراكة' },
      { num: '04', question: 'طبيعة المطالبة؟', answer: 'التزامات مالية مخالفة للعقد' },
    ],
  },
}

const conversionFlow = [
  { step: 'MESSAGE', label: 'استفسار', icon: MessageCircle },
  { step: 'QUALIFY', label: 'فهم المشكلة', icon: Target },
  { step: 'CONSULT', label: 'تقييم قانوني', icon: Shield },
  { step: 'CONVERT', label: 'عميل', icon: CheckCircle2 },
]

const qualificationReasons = [
  { icon: Clock, title: 'توفير وقت الفريق', description: 'بدون التعامل مع استفسارات غير واضحة، نركز على الحالات الحقيقية.' },
  { icon: Target, title: 'فهم الحالة مسبقًا', description: 'نجمع المعلومات الأساسية قبل الاستشارة لكي نكون جاهزين.' },
  { icon: Shield, title: 'رفع جودة العملاء المحتملين', description: 'نركز الجهد على الحالات المناسبة لخدمات المكتب.' },
]

function ChatBubble({ message, index }) {
  const isClient = message.sender === 'client'
  const isCta = message.sender === 'cta'
  const isConfirmation = message.sender === 'confirmation'

  if (isCta) {
    return (
      <AnimatedSection delay={0.8 + index * 0.05} direction="up">
        <div style={{ display: 'flex', justifyContent: 'center', padding: '0.5rem 0' }}>
          <button
            style={{
              backgroundColor: '#FFFFFF',
              color: '#000000',
              border: 'none',
              borderRadius: '12px',
              padding: '0.75rem 1.5rem',
              fontSize: '0.9rem',
              fontWeight: 700,
              fontFamily: 'inherit',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'all 0.3s',
            }}
          >
            {message.text}
            <ArrowRight style={{ width: '1rem', height: '1rem' }} />
          </button>
        </div>
      </AnimatedSection>
    )
  }

  return (
    <AnimatedSection delay={0.3 + index * 0.08} direction={isClient ? 'right' : 'left'}>
      <div
        style={{
          display: 'flex',
          flexDirection: isClient ? 'row' : 'row-reverse',
          alignItems: 'flex-end',
          gap: '0.5rem',
          marginBottom: '0.25rem',
        }}
      >
        {/* Avatar */}
        <div
          style={{
            width: '2rem',
            height: '2rem',
            borderRadius: '50%',
            backgroundColor: isClient ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.06)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          {isClient ? (
            <User style={{ width: '0.875rem', height: '0.875rem', color: '#FFFFFF' }} />
          ) : (
            <Bot style={{ width: '0.875rem', height: '0.875rem', color: '#A0A0A0' }} />
          )}
        </div>

        {/* Bubble */}
        <div
          style={{
            maxWidth: '75%',
            padding: '0.75rem 1rem',
            borderRadius: isClient ? '14px 14px 4px 14px' : '14px 14px 14px 4px',
            backgroundColor: isClient ? 'rgba(255,255,255,0.1)' : isConfirmation ? 'rgba(255,255,255,0.04)' : 'rgba(20,20,20,0.7)',
            border: isConfirmation ? '1px solid rgba(255,255,255,0.15)' : '1px solid rgba(255,255,255,0.08)',
          }}
        >
          <p
            style={{
              fontSize: '0.85rem',
              color: '#FFFFFF',
              lineHeight: 1.7,
              margin: 0,
              textAlign: isClient ? 'right' : 'left',
            }}
          >
            {message.text}
          </p>
          {message.time && (
            <span
              style={{
                fontSize: '0.6rem',
                color: '#999999',
                display: 'block',
                marginTop: '0.25rem',
                textAlign: isClient ? 'left' : 'right',
              }}
            >
              {message.time}
            </span>
          )}
        </div>
      </div>
    </AnimatedSection>
  )
}

function LeadScore() {
  return (
    <AnimatedSection delay={0.6} direction="up">
      <div
        className="glass"
        style={{
          borderRadius: '16px',
          padding: '1.25rem',
          border: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#999999', letterSpacing: '0.05em' }}>
            LEAD QUALITY
          </span>
          <span style={{ fontSize: '0.7rem', color: '#999999', fontStyle: 'italic' }}>
            مثال توضيحي
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
          <div style={{ flex: 1, height: '6px', backgroundColor: 'rgba(255,255,255,0.06)', borderRadius: '3px', overflow: 'hidden' }}>
            <div style={{ width: '80%', height: '100%', backgroundColor: '#FFFFFF', borderRadius: '3px' }} />
          </div>
          <span style={{ fontSize: '1rem', fontWeight: 800, color: '#FFFFFF' }}>80%</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
          <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#FFFFFF' }} />
          <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#FFFFFF' }}>Qualified</span>
        </div>
      </div>
    </AnimatedSection>
  )
}

function QualificationSteps({ qualification }) {
  return (
    <AnimatedSection delay={0.15}>
      <div
        className="glass"
        style={{
          borderRadius: '20px',
          padding: '1.5rem',
          border: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        <h3
          style={{
            fontSize: '1rem',
            fontWeight: 700,
            color: '#FFFFFF',
            marginBottom: '1.25rem',
          }}
        >
          ماذا نعرف عن العميل؟
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {qualification.map((q, i) => (
            <AnimatedSection key={q.num} delay={0.2 + i * 0.1} direction="right">
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.75rem',
                  padding: '0.875rem',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(20,20,20,0.7)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <span
                  style={{
                    width: '1.75rem',
                    height: '1.75rem',
                    borderRadius: '8px',
                    backgroundColor: '#FFFFFF',
                    color: '#000000',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    flexShrink: 0,
                  }}
                >
                  {q.num}
                </span>
                <div>
                  <p style={{ fontSize: '0.8rem', color: '#999999', marginBottom: '0.25rem' }}>
                    {q.question}
                  </p>
                  <p style={{ fontSize: '0.9rem', color: '#FFFFFF', fontWeight: 600, margin: 0 }}>
                    {q.answer}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.7} direction="up">
          <div
            style={{
              marginTop: '1rem',
              padding: '0.875rem',
              borderRadius: '12px',
              backgroundColor: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.15)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.625rem',
            }}
          >
            <CheckCircle2 style={{ width: '1.125rem', height: '1.125rem', color: '#FFFFFF' }} />
            <span style={{ fontSize: '0.9rem', fontWeight: 700, color: '#FFFFFF' }}>
              Lead Qualified ✓
            </span>
          </div>
        </AnimatedSection>
      </div>
    </AnimatedSection>
  )
}

export default function WhatsAppConversion() {
  const [activeTab, setActiveTab] = useState('b2c')
  const [selectedType, setSelectedType] = useState('financial')
  const current = scenarios[activeTab]

  useEffect(() => {
    setSelectedType(current.types[0].id)
  }, [activeTab])

  return (
    <section
      id="whatsapp-conversion"
      className="section-padding"
      style={{
        backgroundColor: '#000000',
        position: 'relative',
        overflow: 'clip',
      }}
    >
      <div className="section-container" style={{ position: 'relative', zIndex: 10 }}>

        {/* Header */}
        <AnimatedSection delay={0}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="accent-line" style={{ marginInline: 'auto', marginBottom: '1rem' }} />
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.4rem 1rem',
                borderRadius: '9999px',
                backgroundColor: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.08)',
                marginBottom: '1.25rem',
              }}
            >
              <MessageCircle style={{ width: '0.875rem', height: '0.875rem', color: '#FFFFFF' }} />
              <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#FFFFFF', letterSpacing: '0.05em' }}>
                WHATSAPP FLOW
              </span>
            </div>
            <h2
              style={{
                fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
                fontWeight: 800,
                color: '#FFFFFF',
                marginBottom: '0.5rem',
                lineHeight: 1.3,
              }}
            >
              نحوّل المحادثة إلى استشارة
            </h2>
            <p style={{ fontSize: '1rem', color: '#A0A0A0', maxWidth: '550px', margin: '0 auto' }}>
              من أول رسالة إلى عميل مؤهل — بدون إضاعة وقت فريق المكتب.
            </p>
          </div>
        </AnimatedSection>

        {/* B2C / B2B Tabs */}
        <AnimatedSection delay={0.05}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
            <div
              style={{
                display: 'inline-flex',
                gap: '0.25rem',
                padding: '0.3rem',
                backgroundColor: 'rgba(20,20,20,0.7)',
                borderRadius: '12px',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              {Object.entries(scenarios).map(([key, val]) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  style={{
                    padding: '0.5rem 1.25rem',
                    borderRadius: '8px',
                    border: 'none',
                    backgroundColor: activeTab === key ? 'rgba(255,255,255,0.1)' : 'transparent',
                    color: activeTab === key ? '#FFFFFF' : '#999999',
                    fontSize: '0.8rem',
                    fontWeight: activeTab === key ? 700 : 500,
                    fontFamily: 'inherit',
                    cursor: 'pointer',
                    transition: 'all 0.25s',
                  }}
                >
                  {val.label}
                </button>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Scenario Type Chips */}
        <AnimatedSection delay={0.08}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
            {current.types.map((t) => (
              <button
                key={t.id}
                onClick={() => setSelectedType(t.id)}
                style={{
                  padding: '0.4rem 1rem',
                  borderRadius: '9999px',
                  border: selectedType === t.id ? '1px solid rgba(255,255,255,0.3)' : '1px solid rgba(255,255,255,0.08)',
                  backgroundColor: selectedType === t.id ? 'rgba(255,255,255,0.1)' : 'transparent',
                  color: selectedType === t.id ? '#FFFFFF' : '#999999',
                  fontSize: '0.75rem',
                  fontWeight: selectedType === t.id ? 700 : 500,
                  fontFamily: 'inherit',
                  cursor: 'pointer',
                  transition: 'all 0.25s',
                }}
              >
                {t.label}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Main Grid: Chat + Qualification */}
        <div
          className="whatsapp-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 1fr',
            gap: '2rem',
            alignItems: 'start',
          }}
        >
          {/* WhatsApp Chat — Right Side in RTL */}
          <AnimatedSection delay={0.1}>
            <div
              className="glass"
              style={{
                borderRadius: '20px',
                padding: '1.25rem',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              {/* Chat Header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.625rem',
                  marginBottom: '1.25rem',
                  paddingBottom: '0.875rem',
                  borderBottom: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <div
                  style={{
                    width: '2.25rem',
                    height: '2.25rem',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(255,255,255,0.06)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <MessageCircle style={{ width: '1rem', height: '1rem', color: '#FFFFFF' }} />
                </div>
                <div>
                  <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#FFFFFF', margin: 0 }}>
                    مكتب المحامي يزيد اليوبي
                  </h3>
                  <span style={{ fontSize: '0.7rem', color: '#999999' }}>متصل الآن</span>
                </div>
              </div>

              {/* Messages */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {current.chat.map((msg, i) => (
                  <ChatBubble key={`${activeTab}-${i}`} message={msg} index={i} />
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Left Side: Qualification + Lead Score */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <QualificationSteps qualification={current.qualification} />
            <LeadScore />
          </div>
        </div>

        {/* Conversion Flow */}
        <AnimatedSection delay={0.3} direction="up">
          <div style={{ marginTop: '3.5rem' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0',
                flexWrap: 'wrap',
              }}
            >
              {conversionFlow.map((item, i) => {
                const Icon = item.icon
                return (
                  <div key={item.step} style={{ display: 'flex', alignItems: 'center', gap: '0' }}>
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '1rem 1.5rem',
                      }}
                    >
                      <div
                        style={{
                          width: '3rem',
                          height: '3rem',
                          borderRadius: '12px',
                          backgroundColor: i === conversionFlow.length - 1 ? '#FFFFFF' : 'rgba(255,255,255,0.06)',
                          border: '1px solid rgba(255,255,255,0.08)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <Icon
                          style={{
                            width: '1.125rem',
                            height: '1.125rem',
                            color: i === conversionFlow.length - 1 ? '#000000' : '#FFFFFF',
                          }}
                        />
                      </div>
                      <span style={{ fontSize: '0.7rem', fontWeight: 700, color: '#FFFFFF', letterSpacing: '0.05em' }}>
                        {item.step}
                      </span>
                      <span style={{ fontSize: '0.75rem', color: '#999999' }}>
                        {item.label}
                      </span>
                    </div>
                    {i < conversionFlow.length - 1 && (
                      <ArrowRight style={{ width: '1.25rem', height: '1.25rem', color: '#999999', flexShrink: 0, marginInlineEnd: '0' }} />
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </AnimatedSection>

        {/* Mini Ad Flow */}
        <AnimatedSection delay={0.35} direction="up">
          <div
            style={{
              marginTop: '2rem',
              padding: '1.5rem',
              borderRadius: '16px',
              backgroundColor: 'rgba(20,20,20,0.7)',
              border: '1px solid rgba(255,255,255,0.08)',
              textAlign: 'center',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.75rem',
                flexWrap: 'wrap',
                marginBottom: '1rem',
              }}
            >
              {['PAID AD', 'عندك نزاع مالي؟', 'WHATSAPP', 'Qualification', 'Consultation'].map((step, i, arr) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span
                    style={{
                      padding: '0.4rem 0.875rem',
                      borderRadius: '8px',
                      backgroundColor: i === 0 ? 'rgba(255,255,255,0.06)' : i === arr.length - 1 ? '#FFFFFF' : 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      color: i === arr.length - 1 ? '#000000' : '#FFFFFF',
                    }}
                  >
                    {step}
                  </span>
                  {i < arr.length - 1 && (
                    <ArrowRight style={{ width: '0.875rem', height: '0.875rem', color: '#999999', flexShrink: 0 }} />
                  )}
                </div>
              ))}
            </div>
            <p style={{ fontSize: '0.85rem', color: '#A0A0A0', lineHeight: 1.7, maxWidth: '550px', margin: '0 auto' }}>
              الإعلان يجذب الانتباه. المحادثة تؤهل العميل. الاستشارة تحول الاهتمام إلى فرصة حقيقية.
            </p>
          </div>
        </AnimatedSection>

        {/* Why We Qualify */}
        <AnimatedSection delay={0.4} direction="up">
          <div style={{ marginTop: '3rem' }}>
            <h3
              style={{
                fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
                fontWeight: 800,
                color: '#FFFFFF',
                textAlign: 'center',
                marginBottom: '1.5rem',
              }}
            >
              لماذا نؤهل الـ Lead؟
            </h3>
            <div
              className="reasons-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '1.25rem',
              }}
            >
              {qualificationReasons.map((r, i) => {
                const Icon = r.icon
                return (
                  <AnimatedSection key={i} delay={0.45 + i * 0.1} direction="up">
                    <div
                      className="glass"
                      style={{
                        borderRadius: '16px',
                        padding: '1.5rem',
                        border: '1px solid rgba(255,255,255,0.08)',
                        textAlign: 'center',
                      }}
                    >
                      <div
                        style={{
                          width: '3rem',
                          height: '3rem',
                          borderRadius: '12px',
                          backgroundColor: 'rgba(255,255,255,0.06)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          margin: '0 auto 1rem',
                        }}
                      >
                        <Icon style={{ width: '1.125rem', height: '1.125rem', color: '#FFFFFF' }} />
                      </div>
                      <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '0.5rem' }}>
                        {r.title}
                      </h4>
                      <p style={{ fontSize: '0.8rem', color: '#A0A0A0', lineHeight: 1.6, margin: 0 }}>
                        {r.description}
                      </p>
                    </div>
                  </AnimatedSection>
                )
              })}
            </div>
          </div>
        </AnimatedSection>

        {/* Final Message */}
        <AnimatedSection delay={0.5} direction="up">
          <div
            style={{
              marginTop: '3rem',
              textAlign: 'center',
            }}
          >
            <h3
              style={{
                fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
                fontWeight: 800,
                color: '#FFFFFF',
                marginBottom: '0.5rem',
                lineHeight: 1.4,
              }}
            >
              الرسالة ليست الهدف.
            </h3>
            <h3
              style={{
                fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
                fontWeight: 800,
                color: '#FFFFFF',
                marginBottom: '2rem',
                lineHeight: 1.4,
              }}
            >
              الاستشارة المؤهلة هي الهدف.
            </h3>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.75rem',
                flexWrap: 'wrap',
              }}
            >
              {['AD', 'WHATSAPP', 'QUALIFIED LEAD', 'CONSULTATION', 'CLIENT'].map((step, i, arr) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span
                    style={{
                      padding: '0.6rem 1.25rem',
                      borderRadius: '10px',
                      backgroundColor: i === arr.length - 1 ? '#FFFFFF' : 'rgba(255,255,255,0.06)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      color: i === arr.length - 1 ? '#000000' : '#FFFFFF',
                      letterSpacing: '0.03em',
                    }}
                  >
                    {step}
                  </span>
                  {i < arr.length - 1 && (
                    <ArrowRight style={{ width: '1rem', height: '1rem', color: '#999999', flexShrink: 0 }} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .whatsapp-grid {
            grid-template-columns: 1fr !important;
          }
          .reasons-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
