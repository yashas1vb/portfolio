import { useState } from 'react';
import { Utensils } from 'lucide-react';
import './BrandBuilding.css'; // Reusing the same CSS

export default function PopoVenturesFood({ data }) {
  const [foodErrors, setFoodErrors] = useState({});

  const handleFoodError = (id) => {
    setFoodErrors((prev) => ({ ...prev, [id]: true }));
  };

  const { items = [] } = data || {};

  return (
    <section id="brand-building-food" className="brand-section">
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
