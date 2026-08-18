import { useState, useEffect } from 'react';
import { Scale, Menu, X } from 'lucide-react';

const sectionIds = [
  'strategy', 'problem', 'data', 'audience', 'content',
  'organic', 'paid', 'roadmap', 'next'
];

const sectionLabels = [
  'الاستراتيجية', 'المشكلة', 'البيانات', 'الجمهور', 'المحتوى',
  'العضوي', 'المدفوع', 'خارطة الطريق', 'الخطوة القادمة'
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(progress);

      const offsets = sectionIds.map((id) => {
        const el = document.getElementById(id);
        return el ? el.offsetTop : 0;
      });

      let current = 0;
      for (let i = offsets.length - 1; i >= 0; i--) {
        if (window.scrollY >= offsets[i] - 200) {
          current = i;
          break;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (index) => {
    const el = document.getElementById(sectionIds[index]);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setMobileOpen(false);
    }
  };

  const counterLabel = `${String(activeSection + 1).padStart(2, '0')} / ${String(sectionIds.length).padStart(2, '0')}`;

  return (
    <>
      {/* Progress Bar */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '2px',
          zIndex: 1100,
          background: 'transparent',
        }}
      >
        <div
          style={{
            height: '100%',
            width: `${scrollProgress}%`,
            background: '#FFFFFF',
            transition: 'width 0.15s ease-out',
          }}
        />
      </div>

      {/* Navbar */}
      <nav
        style={{
          position: 'fixed',
          top: '2px',
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: '0 24px',
          height: '64px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: scrolled ? 'rgba(0,0,0,0.9)' : 'transparent',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: `1px solid ${scrolled ? 'rgba(255,255,255,0.08)' : 'transparent'}`,
          transition: 'background 0.3s ease, border-bottom 0.3s ease',
        }}
      >
        {/* Logo */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            cursor: 'pointer',
          }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div
            style={{
              width: '36px',
              height: '36px',
              background: '#FFFFFF',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Scale size={20} color="#000000" />
          </div>
          <div style={{ lineHeight: 1.2 }}>
            <div
              style={{
                color: '#FFFFFF',
                fontSize: '16px',
                fontWeight: 700,
                letterSpacing: '-0.02em',
              }}
            >
              يزيد اليوبي
            </div>
            <div
              style={{
                color: '#A0A0A0',
                fontSize: '11px',
                letterSpacing: '0.05em',
              }}
            >
              الاستراتيجية الرقمية
            </div>
          </div>
        </div>

        {/* Center Nav Links - Desktop */}
        <div
          className="md-hide-mobile"
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '2px',
          }}
        >
          {sectionLabels.map((label, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 12px',
                borderRadius: '6px',
                border: 'none',
                cursor: 'pointer',
                fontSize: '13px',
                fontWeight: activeSection === i ? 600 : 400,
                color: activeSection === i ? '#FFFFFF' : '#A0A0A0',
                background: activeSection === i ? 'rgba(255,255,255,0.08)' : 'transparent',
                transition: 'all 0.2s ease',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={(e) => {
                if (activeSection !== i) {
                  e.currentTarget.style.color = '#FFFFFF';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                }
              }}
              onMouseLeave={(e) => {
                if (activeSection !== i) {
                  e.currentTarget.style.color = '#A0A0A0';
                  e.currentTarget.style.background = 'transparent';
                }
              }}
            >
              <span
                style={{
                  fontSize: '10px',
                  fontWeight: 600,
                  color: activeSection === i ? '#FFFFFF' : '#999999',
                  fontVariantNumeric: 'tabular-nums',
                  minWidth: '16px',
                }}
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              {label}
            </button>
          ))}
        </div>

        {/* Right Side: Counter + Hamburger */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          {/* Progress Counter - Desktop */}
          <div
            className="md-hide-mobile"
            style={{
              display: 'none',
              fontSize: '12px',
              fontWeight: 600,
              color: '#999999',
              fontVariantNumeric: 'tabular-nums',
              letterSpacing: '0.05em',
            }}
          >
            {counterLabel}
          </div>

          {/* Mobile Hamburger */}
          <button
            className="show-mobile-only"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              display: 'none',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              padding: '8px',
              color: '#FFFFFF',
            }}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Slide-Down Panel */}
      <div
        style={{
          position: 'fixed',
          top: '66px',
          left: 0,
          right: 0,
          zIndex: 999,
          background: 'rgba(0,0,0,0.95)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
          maxHeight: mobileOpen ? '80vh' : '0',
          overflow: 'hidden',
          transition: 'max-height 0.3s ease',
        }}
      >
        <div style={{ padding: '12px 24px 24px' }}>
          {/* Mobile Counter */}
          <div
            style={{
              fontSize: '11px',
              fontWeight: 600,
              color: '#999999',
              marginBottom: '12px',
              fontVariantNumeric: 'tabular-nums',
              letterSpacing: '0.1em',
            }}
          >
            {counterLabel}
          </div>

          {/* Mobile Links */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            {sectionLabels.map((label, i) => (
              <button
                key={i}
                onClick={() => scrollTo(i)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '12px',
                  borderRadius: '8px',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'right',
                  width: '100%',
                  fontSize: '14px',
                  fontWeight: activeSection === i ? 600 : 400,
                  color: activeSection === i ? '#FFFFFF' : '#A0A0A0',
                  background: activeSection === i ? 'rgba(255,255,255,0.08)' : 'transparent',
                  transition: 'all 0.2s ease',
                }}
              >
                <span
                  style={{
                    fontSize: '11px',
                    fontWeight: 700,
                    color: activeSection === i ? '#FFFFFF' : '#999999',
                    fontVariantNumeric: 'tabular-nums',
                    minWidth: '20px',
                  }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
