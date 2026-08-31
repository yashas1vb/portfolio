import { useState, useEffect, useRef } from 'react';
import './AnimatedHeading.css';

/**
 * AnimatedHeading Component
 * Provides:
 * 1. Intersection-triggered typewriter effect with natural, snappy cadence.
 * 2. High-impact text shadows and sleek typographic outlines.
 * 3. Bidirectional scroll replay: smoothly re-types when scrolling away and scrolling back.
 * 4. Failsafe visibility: NEVER vanishes or leaves an empty blank box.
 * 5. Zero layout shifts using invisible ghost reservation.
 */
export default function AnimatedHeading({
  text,
  lines,
  as: Component = 'h2',
  className = '',
  typingSpeed = 22,
  startDelay = 20,
  replayOnScroll = true,
  children,
  ...props
}) {
  const containerRef = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);
  const [displayText, setDisplayText] = useState('');
  const [isDone, setIsDone] = useState(false);

  const fullText = text || (lines ? lines.join('\n') : (typeof children === 'string' ? children : ''));

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplayText(fullText);
      setIsDone(true);
      setHasStarted(true);
      return;
    }

    // Check if element is already in viewport on mount
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight + 50 && rect.bottom > -50) {
      setHasStarted(true);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHasStarted(true);
            if (!replayOnScroll) {
              observer.unobserve(entry.target);
            }
          } else if (replayOnScroll) {
            const r = entry.boundingClientRect;
            // Only reset when completely outside viewport bounds
            if (r.bottom < -80 || r.top > window.innerHeight + 80) {
              setHasStarted(false);
              setDisplayText('');
              setIsDone(false);
            }
          }
        });
      },
      { threshold: 0.02, rootMargin: '80px 0px 80px 0px' }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [replayOnScroll, fullText]);

  useEffect(() => {
    if (!hasStarted || lines) {
      if (!hasStarted) {
        setDisplayText('');
        setIsDone(false);
      }
      return;
    }

    let currentIndex = 0;
    const delayTimeout = setTimeout(() => {
      const interval = setInterval(() => {
        currentIndex++;
        if (currentIndex <= fullText.length) {
          setDisplayText(fullText.slice(0, currentIndex));
        } else {
          clearInterval(interval);
          setIsDone(true);
        }
      }, typingSpeed);

      return () => clearInterval(interval);
    }, startDelay);

    return () => {
      clearTimeout(delayTimeout);
    };
  }, [hasStarted, fullText, typingSpeed, startDelay, lines]);

  // If stacked lines are provided
  if (lines && Array.isArray(lines)) {
    return (
      <div
        ref={containerRef}
        className={`animated-stacked-title-wrap ${className}`}
        aria-label={lines.join(' ')}
        {...props}
      >
        {lines.map((line, idx) => {
          let lineDelay = startDelay;
          for (let i = 0; i < idx; i++) {
            lineDelay += lines[i].length * typingSpeed + 50;
          }
          return (
            <StackedLine
              key={idx}
              lineText={line}
              parentStarted={hasStarted}
              baseSpeed={typingSpeed}
              startDelay={lineDelay}
              replayOnScroll={replayOnScroll}
              className={className}
            />
          );
        })}
      </div>
    );
  }

  return (
    <Component
      ref={containerRef}
      className={`animated-main-heading ${isDone ? 'typing-complete' : 'typing-active'} ${className}`}
      aria-label={fullText}
      {...props}
    >
      <span className="heading-text-wrapper">
        {/* Ghost placeholder reserves exact dimensional bounding box to prevent layout shift */}
        <span className="heading-ghost-placeholder" aria-hidden="true">
          {fullText}
        </span>
        <span className="heading-visible-content">
          {hasStarted ? (isDone ? fullText : displayText) : ''}
          {hasStarted && !isDone && <span className="heading-typing-cursor" aria-hidden="true" />}
        </span>
      </span>
    </Component>
  );
}

function StackedLine({ lineText, parentStarted, baseSpeed, startDelay, replayOnScroll }) {
  const [displayed, setDisplayed] = useState('');
  const [lineDone, setLineDone] = useState(false);
  const [typingStarted, setTypingStarted] = useState(false);

  useEffect(() => {
    if (!parentStarted) {
      if (replayOnScroll) {
        setDisplayed('');
        setLineDone(false);
        setTypingStarted(false);
      }
      return;
    }

    let timer;
    const delayTimer = setTimeout(() => {
      setTypingStarted(true);
      let curr = 0;
      timer = setInterval(() => {
        curr++;
        if (curr <= lineText.length) {
          setDisplayed(lineText.slice(0, curr));
        } else {
          clearInterval(timer);
          setLineDone(true);
        }
      }, baseSpeed);
    }, startDelay);

    return () => {
      clearTimeout(delayTimer);
      if (timer) clearInterval(timer);
    };
  }, [parentStarted, lineText, baseSpeed, startDelay, replayOnScroll]);

  return (
    <div className={`animated-stacked-line ${lineDone ? 'typing-complete' : 'typing-active'}`}>
      <span className="heading-text-wrapper">
        <span className="heading-ghost-placeholder" aria-hidden="true">
          {lineText}
        </span>
        <span className="heading-visible-content">
          {typingStarted ? (lineDone ? lineText : displayed) : ''}
          {typingStarted && !lineDone && <span className="heading-typing-cursor" aria-hidden="true" />}
        </span>
      </span>
    </div>
  );
}
