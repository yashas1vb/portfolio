import { useState, useEffect } from 'react';
import { Image as ImageIcon } from 'lucide-react';
import WheelCarousel from './WheelCarousel';
import AnimatedHeading from './AnimatedHeading';
import './Hero.css';

/*
 * Image order for the background arc carousel:
 * You can reorder, add, or change any image paths in this array below.
 */
const WHEEL_IMAGES = [
  { src: '/assets/hero/hero-left-2.webp', alt: 'Supriya – park 1' },
  { src: '/assets/hero/hero-right.webp', alt: 'Supriya – studio B&W' },
  { src: '/assets/hero/hero-right-3.webp', alt: 'Supriya – café' },
  { src: '/assets/hero/hero-right-2.webp', alt: 'Supriya – portrait' },
  { src: '/assets/hero/hero-left-3.webp', alt: 'Supriya – park 2' },
  { src: '/assets/hero/hero-left.webp', alt: 'Supriya – sitting' },
];

/* Sequential Typewriter for the two bio paragraphs */
function TypewriterBio({ leftText = '', rightText = '' }) {
  const [typedLeft, setTypedLeft] = useState('');
  const [typedRight, setTypedRight] = useState('');
  const [isLeftDone, setIsLeftDone] = useState(false);
  const [isRightDone, setIsRightDone] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setTypedLeft(leftText);
      setTypedRight(rightText);
      setIsLeftDone(true);
      setIsRightDone(true);
      setHasStarted(true);
      return;
    }

    const startTimer = setTimeout(() => {
      setHasStarted(true);
      let leftIdx = 0;
      const leftInterval = setInterval(() => {
        leftIdx++;
        if (leftIdx <= leftText.length) {
          setTypedLeft(leftText.slice(0, leftIdx));
        } else {
          clearInterval(leftInterval);
          setIsLeftDone(true);

          setTimeout(() => {
            let rightIdx = 0;
            const rightInterval = setInterval(() => {
              rightIdx++;
              if (rightIdx <= rightText.length) {
                setTypedRight(rightText.slice(0, rightIdx));
              } else {
                clearInterval(rightInterval);
                setIsRightDone(true);
              }
            }, 14);
          }, 300);
        }
      }, 14);
    }, 700);

    return () => clearTimeout(startTimer);
  }, [leftText, rightText]);

  return (
    <>
      <div className="hero-bio-col">
        <p className="hero-bio-p">
          {hasStarted ? (isLeftDone ? leftText : typedLeft) : ''}
          {hasStarted && !isLeftDone && <span className="hero-bio-cursor" aria-hidden="true" />}
        </p>
      </div>
      <div className="hero-bio-col">
        <p className="hero-bio-p">
          {isLeftDone ? (isRightDone ? rightText : typedRight) : ''}
          {isLeftDone && !isRightDone && <span className="hero-bio-cursor" aria-hidden="true" />}
        </p>
      </div>
    </>
  );
}

export default function Hero({ personal }) {
  const [centerErr, setCenterErr] = useState(false);

  const {
    firstName = 'Supriya',
    lastName = 'Naregal',
    greeting = 'Hi, my name is',
    tagline = 'M.A Advertising and Public Relations',
    images = {},
    introColumns = {},
  } = personal || {};

  const leftText = introColumns.left || '';
  const rightText = introColumns.right || '';

  return (
    <section id="hero" className="hero-section">

      {/* ── Constrained content wrapper ── */}
      <div className="hero-stage">

        {/* ── NAME ROW (z-index 10, above the wheel) ── */}
        <div className="hero-top-row reveal">
          <div className="hero-left-header">
            <div className="hero-greeting">{greeting}</div>
            <AnimatedHeading
              as="h1"
              className="hero-first-name"
              text={firstName}
              typingSpeed={55}
              startDelay={200}
              replayOnScroll={false}
            />
          </div>

          {/* Gap for the portrait head to poke through */}
          <div className="hero-center-spacer" aria-hidden="true" />

          <div className="hero-right-header">
            <div className="hero-greeting-spacer" aria-hidden="true">{greeting}</div>
            <AnimatedHeading
              as="h1"
              className="hero-last-name"
              text={lastName}
              typingSpeed={55}
              startDelay={700}
              replayOnScroll={false}
            />
            {tagline && <div className="hero-subtag">{tagline}</div>}
          </div>
        </div>

        {/* ── COLLAGE STAGE: wheel (bg) + portrait (fg) ──
            NOTE: NO overflow:hidden here — the tall portrait cutout
            (top: -520px, height: 1120px) MUST overflow freely above
            and below this container. Clipping happens at hero-section level. */}
        <div className="hero-collage-stage">

          {/* ── 3 Paper-plane personality accents ── */}
          <div className="hero-paper-planes-container" aria-hidden="true">
            {/* Plane 1: Main right plane */}
            <div className="hero-paper-plane-wrapper hero-plane-1">
              <svg className="hero-paper-plane-svg" viewBox="0 0 44 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <polygon points="42 2, 2 20, 20 25" fill="#dbeafe" stroke="#1d4ea8" strokeWidth="1.8" strokeLinejoin="round" />
                <polygon points="42 2, 20 25, 24 35" fill="#93c5fd" stroke="#1d4ea8" strokeWidth="1.8" strokeLinejoin="round" />
                <polygon points="42 2, 24 35, 28 26" fill="#bfdbfe" stroke="#1d4ea8" strokeWidth="1.8" strokeLinejoin="round" />
                <line x1="42" y1="2" x2="20" y2="25" stroke="#1d4ea8" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </div>

            {/* Plane 2: Top-left plane soaring up */}
            <div className="hero-paper-plane-wrapper hero-plane-2">
              <svg className="hero-paper-plane-svg" viewBox="0 0 44 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <polygon points="42 2, 2 20, 20 25" fill="#e0f2fe" stroke="#1d4ea8" strokeWidth="1.8" strokeLinejoin="round" />
                <polygon points="42 2, 20 25, 24 35" fill="#7dd3fc" stroke="#1d4ea8" strokeWidth="1.8" strokeLinejoin="round" />
                <polygon points="42 2, 24 35, 28 26" fill="#bae6fd" stroke="#1d4ea8" strokeWidth="1.8" strokeLinejoin="round" />
                <line x1="42" y1="2" x2="20" y2="25" stroke="#1d4ea8" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </div>

            {/* Plane 3: Top-right mini plane */}
            <div className="hero-paper-plane-wrapper hero-plane-3">
              <svg className="hero-paper-plane-svg" viewBox="0 0 44 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <polygon points="42 2, 2 20, 20 25" fill="#eff6ff" stroke="#1d4ea8" strokeWidth="1.8" strokeLinejoin="round" />
                <polygon points="42 2, 20 25, 24 35" fill="#60a5fa" stroke="#1d4ea8" strokeWidth="1.8" strokeLinejoin="round" />
                <polygon points="42 2, 24 35, 28 26" fill="#93c5fd" stroke="#1d4ea8" strokeWidth="1.8" strokeLinejoin="round" />
                <line x1="42" y1="2" x2="20" y2="25" stroke="#1d4ea8" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </div>
          </div>

          {/* ── ARC CAROUSEL (6 images continuously circling arc) ── */}
          <WheelCarousel
            images={WHEEL_IMAGES}
            speed={26}
          />

          {/* ── CENTER PORTRAIT — highest z-index, always on top ── */}
          <div
            className="cutout-center-wrapper"
            id="hero-cutout-center"
            tabIndex={0}
            role="figure"
            aria-label="Supriya Naregal portrait"
          >
            <div className="center-cutout-inner">
              {!centerErr && images.centerPhoto ? (
                <img
                  src={images.centerPhoto}
                  alt="Supriya Naregal"
                  className="center-cutout-img"
                  fetchpriority="high"
                  decoding="async"
                  onError={() => setCenterErr(true)}
                />
              ) : (
                <div className="hero-placeholder" style={{ borderRadius: '16px', height: '90%', width: '90%' }}>
                  <ImageIcon size={38} />
                  <span>Center Cutout</span>
                  <small>/assets/hero/hero-center.webp</small>
                </div>
              )}
            </div>
          </div>

        </div>{/* end hero-collage-stage */}

        {/* ── Bottom bio: sequential typing paragraphs ── */}
        <div className="hero-bio-grid">
          <TypewriterBio leftText={leftText} rightText={rightText} />
        </div>

      </div>{/* end hero-stage */}
    </section>
  );
}
