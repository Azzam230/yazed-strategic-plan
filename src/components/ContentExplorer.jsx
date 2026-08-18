import { useState, useMemo } from 'react'
import AnimatedSection from './AnimatedSection'
import { Lightbulb, ExternalLink, Filter } from 'lucide-react'

const categories = [
  { id: 'all', label: 'الكل' },
  { id: 'real-estate', label: 'عقار' },
  { id: 'labor', label: 'عمالي' },
  { id: 'financial', label: 'نزاعات مالية' },
  { id: 'family', label: 'أحوال شخصية' },
  { id: 'corporate', label: 'شركات وعقود' },
  { id: 'case-study', label: 'Case Studies' },
]

const platforms = [
  { id: 'all', label: 'الكل' },
  { id: 'instagram', label: 'Instagram' },
  { id: 'tiktok', label: 'TikTok' },
  { id: 'x', label: 'X' },
  { id: 'linkedin', label: 'LinkedIn' },
]

const ideas = [
  // العقار — 4
  {
    id: 1,
    category: 'real-estate',
    hook: 'اشتريت عقار وطلع فيه عيب؟ وش تسوي؟',
    description: 'الخطوات القانونية لما تكتشف عيب خفي في العقار بعد الشراء.',
    platform: 'instagram',
    type: 'Educational',
    pillar: 'عقار',
    objective: 'Reach + Trust',
  },
  {
    id: 2,
    category: 'real-estate',
    hook: 'المؤجر يرفض يرجّع لك مبلغ التأمين؟ هل يحق له؟',
    description: 'حقوقك كمستأجر عند انتهاء العقد وعودة مبلغ التأمين.',
    platform: 'tiktok',
    type: 'Educational',
    pillar: 'عقار',
    objective: 'Reach + Engagement',
  },
  {
    id: 3,
    category: 'real-estate',
    hook: 'بعت عقارك وبعدها اكتشفت مشكلة بالعقد.. وش موقفك؟',
    description: 'الخيارات القانونية متى تكتشف خلل في عقد البيع بعد التسليم.',
    platform: 'x',
    type: 'Educational',
    pillar: 'عقار',
    objective: 'Trust + Authority',
  },
  {
    id: 4,
    category: 'real-estate',
    hook: 'تأخر المقاول عن تسليم العقار؟ وش حقوقك؟',
    description: 'المطالبة بالتعويض أو فسخ العقد عند إخلال المقاول بالمواعيد.',
    platform: 'instagram',
    type: 'Carousel',
    pillar: 'عقار',
    objective: 'Reach + Trust',
  },

  // القضايا العمالية — 4
  {
    id: 5,
    category: 'labor',
    hook: 'فصلوك من العمل؟ قبل ما توقع على أي ورقة، انتبه.',
    description: 'أهم الأمور اللي لازم تعرفها قبل توقيع مخالصة أو إنهاء علاقة العمل.',
    platform: 'tiktok',
    type: 'Educational',
    pillar: 'عمالي',
    objective: 'Reach + Trust',
  },
  {
    id: 6,
    category: 'labor',
    hook: 'استقلت من وظيفتك وما صرفوا مستحقاتك.. وش تسوي؟',
    description: 'خطوات استرجاع حقوقك المالية عند الاستقالة.',
    platform: 'instagram',
    type: 'Reel',
    pillar: 'عمالي',
    objective: 'Reach + Engagement',
  },
  {
    id: 7,
    category: 'labor',
    hook: 'خصموا من راتبك مبلغ ما تعرف سببه؟ هل يحق لهم؟',
    description: 'الخصومات المسموح بها قانونيًا من راتب الموظف.',
    platform: 'x',
    type: 'Thread',
    pillar: 'عمالي',
    objective: 'Trust + Authority',
  },
  {
    id: 8,
    category: 'labor',
    hook: 'موظفك أخذ بيانات العملاء لما مشى.. وش موقفك؟',
    description: 'الإجراءات القانونية عند انتقال موظف لمنافس مع بيانات سرية.',
    platform: 'linkedin',
    type: 'Article',
    pillar: 'عمالي',
    objective: 'Authority + Trust',
  },

  // النزاعات المالية — 4
  {
    id: 9,
    category: 'financial',
    hook: 'شخص استلف منك مبلغ ورفض يرجّعه.. كيف تطالب بحقك؟',
    description: 'الخطوات القانونية لاسترداد الأموال المتقرضة.',
    platform: 'tiktok',
    type: 'Educational',
    pillar: 'نزاعات مالية',
    objective: 'Reach + Engagement',
  },
  {
    id: 10,
    category: 'financial',
    hook: 'حوّلت مبلغ لشخص وما نفّذ الاتفاق؟ وش تقدر تسوي؟',
    description: 'الخيارات القانونية عند عدم تنفيذ التعهد بعد التحويل.',
    platform: 'instagram',
    type: 'Reel',
    pillar: 'نزاعات مالية',
    objective: 'Reach + Trust',
  },
  {
    id: 11,
    category: 'financial',
    hook: 'عندك مبلغ مستحق وما تم سداده؟ وش أول خطوة؟',
    description: 'كيف تبدأ إجراءات المطالبة المالية بالطريقة الصحيحة.',
    platform: 'x',
    type: 'Thread',
    pillar: 'نزاعات مالية',
    objective: 'Trust + Authority',
  },
  {
    id: 12,
    category: 'financial',
    hook: 'البنك يرفض يسلّمك محفظتك المالية؟ وش تسوي؟',
    description: 'الإجراءات القانونية عند رفض البنك تسليمك محفظتك المالية.',
    platform: 'linkedin',
    type: 'Article',
    pillar: 'نزاعات مالية',
    objective: 'Authority + Trust',
  },

  // الأحوال الشخصية — 3
  {
    id: 13,
    category: 'family',
    hook: 'صار بينكم خلاف على الحضانة؟ وش الأمور اللي تؤخذ بعين الاعتبار؟',
    description: 'العوامل اللي تاخذها المحكمة بعين الاعتبار بخصوص حضانة الأطفال.',
    platform: 'instagram',
    type: 'Carousel',
    pillar: 'أحوال شخصية',
    objective: 'Trust + Engagement',
  },
  {
    id: 14,
    category: 'family',
    hook: 'بعد الطلاق.. مين يتحمل النفقة؟',
    description: 'حقوق الزوجة والزوج فيما يخص النفقة بعد الطلاق.',
    platform: 'tiktok',
    type: 'Educational',
    pillar: 'أحوال شخصية',
    objective: 'Reach + Trust',
  },
  {
    id: 15,
    category: 'family',
    hook: 'عندك خلاف على نفقة الأبناء؟ وش الخيارات المتاحة لك؟',
    description: 'الخيارات القانونية متى تختلف على مبلغ نفقة الأبناء.',
    platform: 'x',
    type: 'Thread',
    pillar: 'أحوال شخصية',
    objective: 'Trust + Authority',
  },

  // الشركات والعقود — 5
  {
    id: 16,
    category: 'corporate',
    hook: 'داخل شراكة مع صديقك؟ لا توقع قبل ما تتفقون على هذي الأمور.',
    description: 'البنود الأساسية اللي لازم تتفقون عليها قبل ما تبدأون الشراكة.',
    platform: 'linkedin',
    type: 'Article',
    pillar: 'شركات وعقود',
    objective: 'Authority + Trust',
  },
  {
    id: 17,
    category: 'corporate',
    hook: '3 أخطاء في عقود الشركات ممكن تكلفك كثير.',
    description: 'الأخطاء الشائعة في صياغة عقود الشركات ومراحل تجنبها.',
    platform: 'instagram',
    type: 'Carousel',
    pillar: 'شركات وعقود',
    objective: 'Reach + Engagement',
  },
  {
    id: 18,
    category: 'corporate',
    hook: 'بتأسس شركة؟ وش الأشياء اللي لازم تنتبه لها من البداية؟',
    description: 'المتطلبات القانونية الأساسية لتأسيس شركة في السعودية.',
    platform: 'tiktok',
    type: 'Educational',
    pillar: 'شركات وعقود',
    objective: 'Reach + Trust',
  },
  {
    id: 19,
    category: 'corporate',
    hook: 'شريكك انسحب من الشركة.. وش يصير؟',
    description: 'الإجراءات القانونية عند انسحاب شريك من شركة ناشئة.',
    platform: 'x',
    type: 'Thread',
    pillar: 'شركات وعقود',
    objective: 'Trust + Authority',
  },
  {
    id: 20,
    category: 'corporate',
    hook: 'بتعقد عقد مقاولات؟ 3 بنود لا تتنازل عنها.',
    description: 'البنود الحاسمة في عقود المقاولات لحماية حقوقك.',
    platform: 'linkedin',
    type: 'Post',
    pillar: 'شركات وعقود',
    objective: 'Authority + Trust',
  },

  // Case Studies — 4
  {
    id: 21,
    category: 'case-study',
    hook: 'جاءنا عميل عنده مشكلة في شراكة تجارية.. وش صار؟',
    description: 'تعارض أهداف بين شركاء تجاريين وكيف تم حله بالقانون.',
    platform: 'instagram',
    type: 'Carousel',
    pillar: 'Case Studies',
    objective: 'Trust + Authority',
  },
  {
    id: 22,
    category: 'case-study',
    hook: 'رفض الطرف الثاني دفع مستحقات العميل.. كيف تعاملنا مع القضية؟',
    description: 'مطالبة مالية رفضها الطرف الآخر والنتيجة النهائية.',
    platform: 'linkedin',
    type: 'Article',
    pillar: 'Case Studies',
    objective: 'Authority + Trust',
  },
  {
    id: 23,
    category: 'case-study',
    hook: 'نزاع عقاري استمر فترة.. وش كانت النتيجة؟',
    description: 'نزاع عقاري بين مالك ومستأجر وكيف وصلنا لحل.',
    platform: 'tiktok',
    type: 'Educational',
    pillar: 'Case Studies',
    objective: 'Reach + Trust',
  },
  {
    id: 24,
    category: 'case-study',
    hook: 'مطالبة مالية رفضها الطرف الآخر.. كيف انتهت القضية؟',
    description: 'قضية مالية استمرت عدة أشهر والنتيجة النهائية.',
    platform: 'x',
    type: 'Thread',
    pillar: 'Case Studies',
    objective: 'Trust + Authority',
  },
]

function IdeaCard({ idea, index }) {
  const [hovered, setHovered] = useState(false)

  const platformColors = {
    instagram: '#E1306C',
    tiktok: '#000000',
    x: '#1DA1F2',
    linkedin: '#0A66C2',
  }

  const platformLabels = {
    instagram: 'Instagram',
    tiktok: 'TikTok',
    x: 'X',
    linkedin: 'LinkedIn',
  }

  const typeColors = {
    Educational: 'rgba(255,255,255,0.08)',
    Reel: 'rgba(255,255,255,0.08)',
    Carousel: 'rgba(255,255,255,0.08)',
    Thread: 'rgba(255,255,255,0.08)',
    Article: 'rgba(255,255,255,0.08)',
    Post: 'rgba(255,255,255,0.08)',
  }

  return (
    <AnimatedSection delay={index * 0.05} direction="up">
      <div
        className="glass"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          borderRadius: '16px',
          padding: '1.5rem',
          height: '100%',
          transition: 'all 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          border: hovered
            ? '1px solid rgba(255,255,255,0.15)'
            : '1px solid rgba(255,255,255,0.08)',
          transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
          cursor: 'default',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.875rem',
          position: 'relative',
          overflow: 'clip',
        }}
      >
        {/* Top accent line */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            insetInlineStart: 0,
            width: '100%',
            height: '3px',
            background: hovered
              ? 'linear-gradient(90deg, transparent, #FFFFFF, transparent)'
              : 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
            transition: 'all 0.35s',
          }}
        />

        {/* Tags row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '0.5rem',
          }}
        >
          <span
            style={{
              padding: '0.25rem 0.75rem',
              borderRadius: '9999px',
              backgroundColor: 'rgba(255,255,255,0.06)',
              color: '#FFFFFF',
              fontSize: '0.7rem',
              fontWeight: 600,
              whiteSpace: 'nowrap',
            }}
          >
            {idea.pillar}
          </span>
          <span
            style={{
              padding: '0.2rem 0.625rem',
              borderRadius: '9999px',
              backgroundColor: platformColors[idea.platform] || 'rgba(255,255,255,0.06)',
              color: '#FFFFFF',
              fontSize: '0.65rem',
              fontWeight: 600,
              whiteSpace: 'nowrap',
            }}
          >
            {platformLabels[idea.platform]}
          </span>
        </div>

        {/* Hook */}
        <h3
          style={{
            fontSize: '1.05rem',
            fontWeight: 700,
            color: '#FFFFFF',
            lineHeight: 1.5,
            margin: 0,
          }}
        >
          {idea.hook}
        </h3>

        {/* Description */}
        <p
          style={{
            fontSize: '0.8rem',
            color: '#A0A0A0',
            lineHeight: 1.7,
            margin: 0,
            flex: 1,
          }}
        >
          {idea.description}
        </p>

        {/* Metadata row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            flexWrap: 'wrap',
          }}
        >
          <span
            style={{
              padding: '0.2rem 0.5rem',
              borderRadius: '6px',
              backgroundColor: typeColors[idea.type] || 'rgba(255,255,255,0.06)',
              color: '#999999',
              fontSize: '0.65rem',
              fontWeight: 500,
            }}
          >
            {idea.type}
          </span>
          <span
            style={{
              padding: '0.2rem 0.5rem',
              borderRadius: '6px',
              backgroundColor: 'rgba(255,255,255,0.06)',
              color: '#999999',
              fontSize: '0.65rem',
              fontWeight: 500,
            }}
          >
            {idea.objective}
          </span>
        </div>
      </div>
    </AnimatedSection>
  )
}

export default function ContentExplorer() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [activePlatform, setActivePlatform] = useState('all')

  const filteredIdeas = useMemo(() => {
    return ideas.filter((idea) => {
      const categoryMatch = activeCategory === 'all' || idea.category === activeCategory
      const platformMatch = activePlatform === 'all' || idea.platform === activePlatform
      return categoryMatch && platformMatch
    })
  }, [activeCategory, activePlatform])

  return (
    <section
      id="content-explorer"
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
              <Lightbulb style={{ width: '0.875rem', height: '0.875rem', color: '#FFFFFF' }} />
              <span
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: '#FFFFFF',
                  letterSpacing: '0.05em',
                }}
              >
                INTERACTIVE
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
              مستكشف أفكار المحتوى
            </h2>
            <p
              style={{
                fontSize: '1rem',
                color: '#A0A0A0',
                maxWidth: '500px',
                margin: '0 auto',
              }}
            >
              كل فكرة مبنية على مشكلة حقيقية، سؤال حقيقي، محتوى مفيد، ثقة، استشارة
            </p>
          </div>
        </AnimatedSection>

        {/* Category Filters */}
        <AnimatedSection delay={0.1}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.25rem',
              padding: '0.375rem',
              backgroundColor: 'rgba(20,20,20,0.7)',
              borderRadius: '14px',
              border: '1px solid rgba(255,255,255,0.08)',
              marginBottom: '1rem',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  style={{
                    padding: '0.6rem 1rem',
                    borderRadius: '8px',
                    border: 'none',
                    backgroundColor: isActive ? 'rgba(255,255,255,0.1)' : 'transparent',
                    color: isActive ? '#FFFFFF' : '#999999',
                    fontSize: '0.8rem',
                    fontWeight: isActive ? 700 : 500,
                    fontFamily: 'inherit',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                    whiteSpace: 'nowrap',
                    position: 'relative',
                    borderBottom: isActive ? '2px solid #FFFFFF' : '2px solid transparent',
                  }}
                >
                  {cat.label}
                </button>
              )
            })}
          </div>
        </AnimatedSection>

        {/* Platform Filters */}
        <AnimatedSection delay={0.15}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.25rem',
              padding: '0.375rem',
              backgroundColor: 'rgba(20,20,20,0.7)',
              borderRadius: '14px',
              border: '1px solid rgba(255,255,255,0.08)',
              marginBottom: '2rem',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            <Filter style={{ width: '0.875rem', height: '0.875rem', color: '#999999', marginInlineEnd: '0.5rem' }} />
            {platforms.map((plat) => {
              const isActive = activePlatform === plat.id
              return (
                <button
                  key={plat.id}
                  onClick={() => setActivePlatform(plat.id)}
                  style={{
                    padding: '0.6rem 1rem',
                    borderRadius: '8px',
                    border: 'none',
                    backgroundColor: isActive ? 'rgba(255,255,255,0.1)' : 'transparent',
                    color: isActive ? '#FFFFFF' : '#999999',
                    fontSize: '0.8rem',
                    fontWeight: isActive ? 700 : 500,
                    fontFamily: 'inherit',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                    whiteSpace: 'nowrap',
                    position: 'relative',
                    borderBottom: isActive ? '2px solid #FFFFFF' : '2px solid transparent',
                  }}
                >
                  {plat.label}
                </button>
              )
            })}
          </div>
        </AnimatedSection>

        {/* Ideas Grid */}
        <div
          className="explorer-grid"
          style={{
            display: 'grid',
            gap: '1.25rem',
          }}
        >
          {filteredIdeas.map((idea, i) => (
            <IdeaCard key={idea.id} idea={idea} index={i} />
          ))}
        </div>

        {/* Footer info */}
        <AnimatedSection delay={0.2} direction="fade">
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              marginTop: '2.5rem',
              padding: '0.75rem 1.25rem',
              backgroundColor: 'rgba(20,20,20,0.7)',
              borderRadius: '12px',
              border: '1px solid rgba(255,255,255,0.08)',
              width: 'fit-content',
              marginInline: 'auto',
            }}
          >
            <ExternalLink style={{ width: '0.875rem', height: '0.875rem', color: '#999999' }} />
            <span
              style={{
                fontSize: '0.8rem',
                color: '#999999',
                fontWeight: 500,
              }}
            >
              عرض {filteredIdeas.length} من {ideas.length} فكرة محتوى
            </span>
          </div>
        </AnimatedSection>
      </div>

      <style>{`
        .explorer-grid {
          grid-template-columns: repeat(4, 1fr);
        }
        @media (max-width: 1200px) {
          .explorer-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        @media (max-width: 900px) {
          .explorer-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 600px) {
          .explorer-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}
