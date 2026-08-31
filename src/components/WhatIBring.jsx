import { useState } from 'react';
import { Image as ImageIcon } from 'lucide-react';
import AnimatedHeading from './AnimatedHeading';
import './WhatIBring.css';

export default function WhatIBring({ data }) {
  const [imgErrors, setImgErrors] = useState({});

  const handleError = (id) => {
    setImgErrors((prev) => ({ ...prev, [id]: true }));
  };

  const { title = "What I Bring?", pillars = [] } = data || {};

  const delays = ['delay-1', 'delay-2', 'delay-3', 'delay-4'];

  return (
    <section id="what-i-bring" className="bring-section">
      <div className="container">
        {/* Main Title with Typing Animation & Text Shadow/Outline */}
        <AnimatedHeading as="h2" className="bring-title" text={title} />

        <div className="bring-grid">
          {pillars.map((pillar, idx) => {
            const isLabelTop = pillar.labelPosition === 'top';
            const delayClass = delays[idx % delays.length];

            return (
              <div key={pillar.id} className={`bring-column reveal ${delayClass}`}>
                {/* Top Label (if position is 'top') */}
                {isLabelTop && (
                  <div className="bring-label">
                    {pillar.label}
                  </div>
                )}

                {/* Image Card */}
                <div className="bring-card">
                  {!imgErrors[pillar.id] && pillar.image ? (
                    <img
                      src={pillar.image}
                      alt={pillar.label}
                      className="bring-img"
                      loading="lazy"
                      decoding="async"
                      onError={() => handleError(pillar.id)}
                    />
                  ) : (
                    <div className="bring-placeholder">
                      <ImageIcon size={26} />
                      <span>{pillar.label}</span>
                      <small>{pillar.image}</small>
                    </div>
                  )}
                </div>

                {/* Bottom Label (if position is 'bottom') */}
                {!isLabelTop && (
                  <div className="bring-label">
                    {pillar.label}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
