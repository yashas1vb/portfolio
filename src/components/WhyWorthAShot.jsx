import { useState } from 'react';
import { Sparkles, Tv, Image as ImageIcon } from 'lucide-react';
import AnimatedHeading from './AnimatedHeading';
import './WhyWorthAShot.css';

export default function WhyWorthAShot({ data, onZoomImage }) {
  const [imgErrors, setImgErrors] = useState({});

  const handleError = (id) => {
    setImgErrors((prev) => ({ ...prev, [id]: true }));
  };

  const {
    title = "Why I'm Worth A Shot!",
    subtitle = "Fast Learner. Deeply Curious. Driven by Culture & Creation.",
    tvIcon = "/assets/worth-a-shot/tv-icon.webp",
    cards = [],
  } = data || {};

  const leftCards = cards.filter((c) => c.column === 'left');
  const rightCards = cards.filter((c) => c.column === 'right');

  return (
    <section id="why-me" className="worth-section">
      <div className="parallax-watermark" aria-hidden="true">WHY ME</div>
      <div className="container">
        <div className="worth-container">
          {/* Header with Title and Vintage TV Icon */}
          <div className="worth-header-area">
            <div className="worth-title-row reveal">
              <AnimatedHeading as="h2" className="worth-main-title" text={title} />

              <div className="worth-tv-icon-card">
                {!imgErrors['tv-icon'] && tvIcon ? (
                  <img
                    src={tvIcon}
                    alt="Vintage TV"
                    className="worth-tv-img"
                    decoding="async"
                    onError={() => handleError('tv-icon')}
                  />
                ) : (
                  <Tv size={42} color="var(--text-blue)" />
                )}
              </div>
            </div>

            <p className="worth-subtitle reveal delay-1">{subtitle}</p>
          </div>

          {/* Staggered 2-Column Moodboard */}
          <div className="worth-masonry-grid">
            {/* Left Column (3 cards) */}
            <div className="worth-column">
              {leftCards.map((card, idx) => (
                <div
                  key={card.id}
                  className={`worth-card reveal-scale delay-${idx + 1}`}
                  onClick={() => onZoomImage && onZoomImage(card)}
                  style={{ cursor: 'pointer' }}
                >
                  {!imgErrors[card.id] && card.image ? (
                    <img
                      src={card.image}
                      alt={card.caption}
                      className="worth-card-img"
                      loading="lazy"
                      decoding="async"
                      onError={() => handleError(card.id)}
                    />
                  ) : (
                    <div className="worth-placeholder">
                      <Sparkles size={36} />
                      <span>Personality Card</span>
                      <small>{card.image}</small>
                    </div>
                  )}

                  <div className="worth-caption-overlay">
                    <p className="worth-caption-text">{card.caption}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column (2 cards, offset downwards) */}
            <div className="worth-column worth-column-offset">
              {rightCards.map((card, idx) => (
                <div
                  key={card.id}
                  className={`worth-card reveal-scale delay-${idx + 2}`}
                  onClick={() => onZoomImage && onZoomImage(card)}
                  style={{ cursor: 'pointer' }}
                >
                  {!imgErrors[card.id] && card.image ? (
                    <img
                      src={card.image}
                      alt={card.caption}
                      className="worth-card-img"
                      loading="lazy"
                      decoding="async"
                      onError={() => handleError(card.id)}
                    />
                  ) : (
                    <div className="worth-placeholder">
                      <Sparkles size={36} />
                      <span>Personality Card</span>
                      <small>{card.image}</small>
                    </div>
                  )}

                  <div className="worth-caption-overlay">
                    <p className="worth-caption-text">{card.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
