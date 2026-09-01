import { useEffect } from 'react';
import Lenis from 'lenis';

/**
 * Initializes butter-smooth momentum scroll with Lenis
 * Provides 60fps silky scrolling while preserving native anchor links & touch behavior
 */
export function useSmoothScroll() {
  useEffect(() => {
    // Respect user's motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.5,
      infinite: false,
    });

    let animationFrameId;

    function raf(time) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }

    animationFrameId = requestAnimationFrame(raf);

    // Anchor click handler for smooth scrolling
    const handleAnchorClick = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (!target) return;

      const href = target.getAttribute('href');
      if (href && href.startsWith('#') && href.length > 1) {
        const element = document.querySelector(href);
        if (element) {
          e.preventDefault();

          // Check if target is inside a sticky panel transition
          const slidingParent = element.closest('.spt-panel-sliding');
          const wrapper = element.closest('.spt-wrapper');

          if (slidingParent && wrapper) {
            const wrapperTop = wrapper.getBoundingClientRect().top + window.scrollY;
            const targetY = wrapperTop + (wrapper.offsetHeight - window.innerHeight);
            lenis.scrollTo(targetY, { duration: 1.2 });
          } else if (wrapper && element.closest('.spt-panel-behind')) {
            const wrapperTop = wrapper.getBoundingClientRect().top + window.scrollY;
            lenis.scrollTo(wrapperTop, { duration: 1.2 });
          } else {
            lenis.scrollTo(element, { offset: -20, duration: 1.2 });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      cancelAnimationFrame(animationFrameId);
      document.removeEventListener('click', handleAnchorClick);
      lenis.destroy();
    };
  }, []);
}
