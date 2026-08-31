import { useEffect, useRef } from 'react';
import './StickyPanelTransition.css';

/**
 * StickyPanelTransition
 *
 * Creates a scroll-driven "sticky horizontal slider":
 *  - The wrapper is 200vh tall, creating a full-viewport-height scroll zone.
 *  - Inside, a `position: sticky; top: 0; height: 100vh` container pins
 *    both panels to the viewport while the user scrolls through the wrapper.
 *  - panelBehind stays fixed at z-index 1.
 *  - panelSliding starts at translateX(-100%) and moves to translateX(0)
 *    as scroll progresses through the 100vh of extra scroll space.
 *
 * Works with Lenis / any smooth-scroll library because it uses
 * getBoundingClientRect() which reflects actual rendered position.
 */
export default function StickyPanelTransition({ panelBehind, panelSliding, direction = 'left' }) {
  const wrapperRef = useRef(null);
  const slidingRef = useRef(null);
  const behindRef = useRef(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const sliding = slidingRef.current;
    const behind = behindRef.current;
    if (!wrapper || !sliding) return;

    const onScroll = () => {
      const rect = wrapper.getBoundingClientRect();
      const totalScroll = wrapper.offsetHeight - window.innerHeight; // = 100vh
      const scrolled = -rect.top; // positive = how far past wrapper top we've scrolled

      // progress: 0 → 1 over the 100vh scroll range
      const progress = Math.max(0, Math.min(1, scrolled / totalScroll));

      if (direction === 'right') {
        // translateX: 100% (off right) → 0% (fully covering)
        sliding.style.transform = `translateX(${(1 - progress) * 100}%)`;
      } else {
        // translateX: -100% (off left) → 0% (fully covering)
        sliding.style.transform = `translateX(${(-1 + progress) * 100}%)`;
      }

      // Zoom out (scale down) and fade out the panel behind as the sliding panel covers it
      if (behind) {
        const scale = 1 - progress * 0.12; // scales smoothly from 1.0 down to 0.88
        const opacity = Math.max(0, 1 - progress * 1.05); // fades smoothly from 1.0 down to 0
        behind.style.transform = `scale(${scale})`;
        behind.style.opacity = `${opacity}`;
        behind.style.transformOrigin = 'center center';
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // sync on mount

    return () => window.removeEventListener('scroll', onScroll);
  }, [direction]);

  return (
    <div ref={wrapperRef} className="spt-wrapper">
      <div className="spt-sticky">

        {/* Panel 1: stays pinned behind, zooms out & fades out */}
        <div ref={behindRef} className="spt-panel spt-panel-behind">
          <div className="spt-panel-inner">{panelBehind}</div>
        </div>

        {/* Panel 2: slides in */}
        <div
          ref={slidingRef}
          className="spt-panel spt-panel-sliding"
          style={{ transform: direction === 'right' ? 'translateX(100%)' : 'translateX(-100%)' }}
        >
          <div className="spt-panel-inner">{panelSliding}</div>
        </div>

      </div>
    </div>
  );
}
