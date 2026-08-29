import { useState } from 'react';
import { Sparkles, Tv } from 'lucide-react';
import './WhyWorthAShot.css';

export default function WhyWorthAShot({ data }) {
  const [imgErrors, setImgErrors] = useState({});

  const handleError = (id) => {
    setImgErrors((prev) => ({ ...prev, [id]: true }));
  };

  const {
    title = "WHY I'M WORTH A SHOT!",
    subtitle = "You've seen my work; now here's a bit about how I show up too.",
    tvIcon = "/assets/worth-a-shot/vintage-tv.png",
    cards = [],
  } = data || {};

  const leftCards = cards.filter((c) => c.column === 'left');
  const rightCards = cards.filter((c) => c.column === 'right');

  return (
    <section id="why-me" className="worth-section">
      <div className="container">
        <div className="worth-container">
          {/* Header with Title and Vintage TV Icon */}
          <div className="worth-header-area">
            <div className="worth-title-row reveal">
              <h2 className="worth-main-title">{title}</h2>

              <div className="worth-tv-icon-card">
                {!imgErrors['tv-icon'] && tvIcon ? (
                  <img
                    src={tvIcon}
                    alt="Vintage TV"
                    className="worth-tv-img"
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
                <div key={card.id} className={`worth-card reveal-scale delay-${idx + 1}`}>
                  {!imgErrors[card.id] && card.image ? (
                    <img
                      src={card.image}
                      alt={card.caption}
                      className="worth-card-img"
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
                <div key={card.id} className={`worth-card reveal-scale delay-${idx + 2}`}>
                  {!imgErrors[card.id] && card.image ? (
                    <img
                      src={card.image}
                      alt={card.caption}
                      className="worth-card-img"
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
