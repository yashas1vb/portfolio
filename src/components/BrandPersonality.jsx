import { useState } from 'react';
import { Store } from 'lucide-react';
import './BrandPersonality.css';

export default function BrandPersonality({ data }) {
  const [imgErrors, setImgErrors] = useState({});

  const handleError = (id) => {
    setImgErrors((prev) => ({ ...prev, [id]: true }));
  };

  const {
    title = "AND THEY COME WITH SOME PERSONALITY!!",
    venues = [],
  } = data || {};

  return (
    <section id="personality" className="personality-section">
      <div className="container">
        <h2 className="personality-title reveal">{title}</h2>

        <div className="personality-stack">
          {venues.map((venue, index) => (
            <div key={venue.id} className={`personality-card reveal delay-${index + 1}`}>
              {!imgErrors[venue.id] && venue.image ? (
                <img
                  src={venue.image}
                  alt={venue.name}
                  className="personality-img"
                  onError={() => handleError(venue.id)}
                />
              ) : (
                <div className="personality-placeholder">
                  <Store size={36} />
                  <span>{venue.name} Interior Photo</span>
                  <small>{venue.image}</small>
                </div>
              )}

              {/* Floating Frosted Pill Overlay with Description */}
              <div className="personality-overlay-pill">
                <p className="personality-pill-text">{venue.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
