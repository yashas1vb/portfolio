import { useRef, useEffect, useState } from 'react';
import './HorizontalPinScroll.css';

/**
 * Option A: Hybrid Horizontal + Vertical Pinning Component
 * Pins the section to viewport while scrolling vertically, sliding children horizontally.
 * Seamlessly degrades to smooth horizontal touch swipe on mobile.
 */
export default function HorizontalPinScroll({ children, className = '', pinHeight = '180vh' }) {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth > 860);
    };
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (!containerRef.current || !trackRef.current) {
            ticking = false;
            return;
          }

          const rect = containerRef.current.getBoundingClientRect();
          const totalDistance = containerRef.current.offsetHeight - window.innerHeight;

          if (totalDistance > 0) {
            const currentScroll = -rect.top;
            const progress = Math.max(0, Math.min(1, currentScroll / totalDistance));
            setScrollProgress(progress);

            const maxTranslate = trackRef.current.scrollWidth - window.innerWidth + 80;
            if (maxTranslate > 0) {
              trackRef.current.style.transform = `translateX(-${progress * maxTranslate}px)`;
            }
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDesktop]);

  return (
    <div
      ref={containerRef}
      className={`pin-scroll-outer ${className}`}
      style={{ height: isDesktop ? pinHeight : 'auto' }}
    >
      <div className="pin-scroll-sticky">
        <div ref={trackRef} className="pin-scroll-track">
          {children}
        </div>

        {isDesktop && (
          <div className="pin-scroll-indicator" style={{ opacity: scrollProgress > 0.02 && scrollProgress < 0.98 ? 1 : 0.4 }}>
            <div className="pin-scroll-pill">
              <span className="pin-scroll-text">← Horizontal Gallery →</span>
              <div className="pin-scroll-bar">
                <div
                  className="pin-scroll-fill"
                  style={{ width: `${Math.round(scrollProgress * 100)}%` }}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
