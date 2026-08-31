import { useState } from 'react';
import { Utensils } from 'lucide-react';
import AnimatedHeading from './AnimatedHeading';
import './BrandBuilding.css';

export default function BrandBuilding({ data }) {
  const [logoErrors, setLogoErrors] = useState({});
  const [foodErrors, setFoodErrors] = useState({});

  const handleLogoError = (id) => {
    setLogoErrors((prev) => ({ ...prev, [id]: true }));
  };

  const handleFoodError = (id) => {
    setFoodErrors((prev) => ({ ...prev, [id]: true }));
  };

  const {
    title = "Owning the Niche",
    subtitle = "(Case Study)",
    ventureTitle = ["POPO", "VENTURES", "GOURMET IDEA", "TO IDENTITY"],
    logos = [
      { id: "pizza-bakery", name: "The Pizza Bakery", image: "/assets/brand-building/Pizza Bakery Logo.webp" },
      { id: "paris-panini", name: "Paris Panini", image: "/assets/brand-building/Paris Panii Logo.webp" },
      { id: "smash-guys", name: "Smash Guys", image: "/assets/brand-building/Smash Guys Logo.webp" },
    ],
    summary = "All three serve gourmet food, but each found its own niche, gave it a personality, and let that identity do the work!",
    foodCards = [],
  } = data || {};

  return (
    <section id="brand-building" className="brand-section">
      <div className="parallax-watermark" aria-hidden="true">POPO VENTURES</div>
      <div className="container">
        {/* Main Section Header */}
        <div className="brand-header-area reveal">
          <AnimatedHeading as="h2" className="brand-main-title" text={title} />
          <div className="brand-subtitle-wrap">
            <span className="brand-subtitle-tag">{subtitle}</span>
          </div>
        </div>

        {/* Middle Row: Popo Ventures Title (Left) + 3 Logo Cards (Right) */}
        <div className="brand-middle-row reveal delay-1">
          <div className="brand-venture-title reveal-left">
            {ventureTitle.map((line, index) => (
              <div key={index} className="brand-venture-line">
                {line}
              </div>
            ))}
          </div>

          <div className="brand-logos-row reveal-right">
            {logos.map((logo, idx) => (
              <div key={logo.id} className={`brand-logo-card reveal-scale delay-${idx + 1}`}>
                {!logoErrors[logo.id] && logo.image ? (
                  <img
                    src={logo.image}
                    alt={logo.name}
                    className="brand-logo-img"
                    loading="lazy"
                    decoding="async"
                    onError={() => handleLogoError(logo.id)}
                  />
                ) : (
                  <div className="brand-logo-placeholder">
                    {logo.name}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Summary Paragraph */}
        <div className="brand-bottom-summary reveal delay-2">
          <p className="brand-summary-text">{summary}</p>
        </div>
      </div>

      {/* Full-bleed Alternating 3 Food Showcase Rows */}
      {items && items.length > 0 && (
        <div className="brand-food-showcase-list">
          {items.map((item, index) => {
            const isImageLeft = item.imagePosition === 'left';
            const delayClass = `delay-${index + 1}`;

            return (
              <div
                key={item.id}
                className={`brand-food-row brand-food-row-${item.id} ${isImageLeft ? 'food-image-left' : 'food-image-right'} reveal ${delayClass}`}
              >
                {/* Left Column: Either Image or Text */}
                {isImageLeft ? (
                  <div className="brand-food-img-container food-stick-left reveal-left">
                    {!foodErrors[item.id] && item.image ? (
                      <img
                        src={item.image}
                        alt="Gourmet Food"
                        className="brand-food-photo pizza-cutout"
                        loading="lazy"
                        decoding="async"
                        onError={() => handleFoodError(item.id)}
                      />
                    ) : (
                      <div className="brand-food-placeholder">
                        <Utensils size={32} />
                        <span>Food Photo</span>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="brand-food-desc-container desc-left reveal-left">
                    <p className="brand-food-desc-text">{item.description}</p>
                  </div>
                )}

                {/* Right Column: Either Image or Text */}
                {isImageLeft ? (
                  <div className="brand-food-desc-container desc-right reveal-right">
                    <p className="brand-food-desc-text">{item.description}</p>
                  </div>
                ) : (
                  <div className="brand-food-img-container food-stick-right reveal-right">
                    {!foodErrors[item.id] && item.image ? (
                      <img
                        src={item.image}
                        alt="Gourmet Food"
                        className={`brand-food-photo ${item.id}-cutout`}
                        loading="lazy"
                        decoding="async"
                        onError={() => handleFoodError(item.id)}
                      />
                    ) : (
                      <div className="brand-food-placeholder">
                        <Utensils size={32} />
                        <span>Food Photo</span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}
