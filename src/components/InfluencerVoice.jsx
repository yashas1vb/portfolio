import { useState } from 'react';
import { ShoppingBag, Users } from 'lucide-react';
import './InfluencerVoice.css';

export default function InfluencerVoice({ data }) {
  const [imgErrors, setImgErrors] = useState({});

  const handleError = (id) => {
    setImgErrors((prev) => ({ ...prev, [id]: true }));
  };

  const {
    mainTitle = "FINDING RIGHT VOICE FOR YOUR BRAND!",
    subtitle = "(INFLUENCER MARKETING)",
    brandTitleLines = ["TIN", "AND TAH", "THE", "CRAFT", "YOU CAN", "CARRY"],
    heroImage = "/assets/influencer-voice/tin-and-tah-hero.jpg",
    heroStatement = "",
    middleImage = "/assets/influencer-voice/model-box-pose.png",
    middleStatement = "",
    creatorCards = [],
  } = data || {};

  return (
    <section id="influencer-voice" className="voice-section">
      <div className="container">
        <div className="voice-container">
          {/* Header Title & Subtitle */}
          <div className="voice-header-area reveal">
            <h2 className="voice-main-title">{mainTitle}</h2>
            <div className="voice-subtitle">{subtitle}</div>
          </div>

          {/* Block 1: Bag Hero Left | Stacked Title Right */}
          <div className="voice-hero-row">
            <div className="voice-hero-card reveal-left">
              {!imgErrors['hero-bag'] && heroImage ? (
                <img
                  src={heroImage}
                  alt="Tin and Tah Artisanal Bag"
                  className="voice-hero-img"
                  onError={() => handleError('hero-bag')}
                />
              ) : (
                <div className="voice-placeholder">
                  <ShoppingBag size={36} />
                  <span>Tin and Tah Bag Photo</span>
                  <small>{heroImage}</small>
                </div>
              )}
            </div>

            <div className="voice-stacked-title reveal-right delay-1">
              {brandTitleLines.map((line, index) => (
                <div key={index} className="voice-title-line">
                  {line}
                </div>
              ))}
            </div>
          </div>

          {/* Statement 1 */}
          {heroStatement && (
            <p className="voice-statement reveal delay-2">{heroStatement}</p>
          )}

          {/* Block 2: Middle Model Pose */}
          <div className="voice-middle-block reveal delay-1">
            <div className="voice-model-card reveal-scale">
              {!imgErrors['middle-model'] && middleImage ? (
                <img
                  src={middleImage}
                  alt="Model with Artisanal Bag"
                  className="voice-model-img"
                  onError={() => handleError('middle-model')}
                />
              ) : (
                <div className="voice-placeholder" style={{ height: '260px' }}>
                  <ShoppingBag size={36} />
                  <span>Model Seated with Bag Photo</span>
                  <small>{middleImage}</small>
                </div>
              )}
            </div>

            {middleStatement && (
              <p className="voice-statement reveal delay-2">{middleStatement}</p>
            )}
          </div>

          {/* Block 3: 2x2 Creator Strategy Showcase Cards */}
          <div className="voice-creators-grid">
            {creatorCards.map((card, idx) => (
              <div key={card.id} className={`creator-card reveal-scale delay-${idx + 1}`}>
                {!imgErrors[card.id] && card.image ? (
                  <img
                    src={card.image}
                    alt={card.caption}
                    className="creator-card-img"
                    onError={() => handleError(card.id)}
                  />
                ) : (
                  <div className="voice-placeholder">
                    <Users size={36} />
                    <span>Creator Showcase Photo</span>
                    <small>{card.image}</small>
                  </div>
                )}

                {/* Lower Caption Overlay with dark scrim */}
                <div className="creator-caption-overlay">
                  <p className="creator-caption-text">{card.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
