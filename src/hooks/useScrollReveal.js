import { useEffect } from 'react';

/**
 * Custom hook to initialize smooth on-scroll reveal animations
 * Uses IntersectionObserver to detect when elements enter the viewport.
 */
export function useScrollReveal() {
  useEffect(() => {
    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          // Once animated, we don't need to observe it again
          observer.unobserve(entry.target);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.08,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const observeElements = () => {
      const elements = document.querySelectorAll(
        '.reveal, .reveal-scale, .reveal-left, .reveal-right, .reveal-stagger, .reveal-sticky, .scroll-slide-wrapper, .scroll-slide-right, .scroll-slide-left, .scroll-slide-up'
      );
      elements.forEach((el) => observer.observe(el));
    };

    // Initial observation
    observeElements();

    // Re-run observer when DOM updates
    const mutationObserver = new MutationObserver(() => {
      observeElements();
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);
}
