import { useEffect } from 'react';

/**
 * Custom hook to calculate and apply multi-layer scroll parallax and alternating
 * horizontal/vertical section transitions tied to the user's scroll.
 */
export function useParallax() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const windowHeight = window.innerHeight;

          // 1. Hero Parallax Layering
          const heroSection = document.getElementById('hero');
          if (heroSection) {
            const heroRect = heroSection.getBoundingClientRect();
            if (heroRect.bottom > 0 && heroRect.top < windowHeight) {
              const heroProgress = scrollY / (heroSection.offsetHeight || 1);

              const leftPhoto = heroSection.querySelector('.photo-card-left');
              const rightPhoto = heroSection.querySelector('.photo-card-right');
              const centerCutout = heroSection.querySelector('.cutout-center-wrapper');
              const paperPlane = heroSection.querySelector('.hero-paper-plane-wrapper');

              if (leftPhoto) {
                leftPhoto.style.setProperty('--parallax-y', `${heroProgress * 45}px`);
              }
              if (rightPhoto) {
                rightPhoto.style.setProperty('--parallax-y', `${heroProgress * 65}px`);
              }
              if (centerCutout) {
                centerCutout.style.setProperty('--parallax-y', `${-heroProgress * 35}px`);
              }
              if (paperPlane) {
                paperPlane.style.setProperty('--plane-parallax-y', `${-heroProgress * 70}px`);
              }
            }
          }

          // 2. Alternating Horizontal & Vertical Section Parallax Transitions
          const slideSections = document.querySelectorAll('[data-scroll-type]');
          slideSections.forEach((el) => {
            const rect = el.getBoundingClientRect();
            const type = el.getAttribute('data-scroll-type');

            // When section is entering or active in viewport
            if (rect.top < windowHeight && rect.bottom > 0) {
              // Calculate progress from 0 (just entering bottom) to 1 (centered/exiting top)
              const rawProgress = (windowHeight - rect.top) / (windowHeight + rect.height * 0.4);
              const progress = Math.max(0, Math.min(1, rawProgress));

              const innerContent = el.querySelector('.container') || el.firstElementChild;
              if (innerContent) {
                if (type === 'horizontal-right') {
                  // Slides in horizontally from the right
                  const offsetX = (1 - progress) * 85;
                  innerContent.style.transform = `translateX(${offsetX}px)`;
                } else if (type === 'horizontal-left') {
                  // Slides in horizontally from the left
                  const offsetX = -(1 - progress) * 85;
                  innerContent.style.transform = `translateX(${offsetX}px)`;
                } else if (type === 'vertical') {
                  // Moves vertically
                  const offsetY = (1 - progress) * 45;
                  innerContent.style.transform = `translateY(${offsetY}px)`;
                }
              }
            }
          });

          // 3. Section Ghost Watermarks / Parallax Banners
          const parallaxWatermarks = document.querySelectorAll('.parallax-watermark');
          parallaxWatermarks.forEach((wm) => {
            const parent = wm.closest('section') || wm.parentElement;
            if (parent) {
              const rect = parent.getBoundingClientRect();
              if (rect.top < windowHeight && rect.bottom > 0) {
                const progress = (windowHeight - rect.top) / (windowHeight + rect.height);
                const shiftX = (progress - 0.5) * 140;
                wm.style.transform = `translateX(${shiftX}px)`;
              }
            }
          });

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);
}
