import { useEffect } from 'react';

/**
 * Custom hook to initialize smooth on-scroll reveal animations.
 * Supports bidirectional triggers (re-reveals when scrolling back up and down).
 */
export default function useScrollReveal() {
  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        const isHero = entry.target.closest('#hero');
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        } else if (!isHero) {
          entry.target.classList.remove('is-visible');
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -30px 0px',
      threshold: 0.08,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const observeElements = () => {
      const elements = document.querySelectorAll(
        '.reveal, .reveal-scale, .reveal-left, .reveal-right, .reveal-stagger, .reveal-sticky, .scroll-slide-wrapper, .scroll-slide-right, .scroll-slide-left, .scroll-slide-up'
      );
      elements.forEach((el) => observer.observe(el));
    };

    observeElements();

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

export { useScrollReveal };
