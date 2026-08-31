import { useState } from 'react';
import { MessageSquare } from 'lucide-react';
import AnimatedHeading from './AnimatedHeading';
import './CreatorHunting.css';

export default function CreatorHunting({ data }) {
  const [imgErrors, setImgErrors] = useState({});

  const handleError = (id) => {
    setImgErrors((prev) => ({ ...prev, [id]: true }));
  };

  const {
    titleLines = ["I WENT", "CREATOR", "HUNTING"],
    role = "Boond Fragrances · Influencer Marketing",
    points = [],
    cards = [
      { id: "ss-1", src: "/assets/creator-hunting/1-ss.webp", alt: "Creator Profile @kadynjulia", number: 1 },
      { id: "ss-2", src: "/assets/creator-hunting/2-ss.webp", alt: "Creator Profile @madidecostee", number: 2 },
      { id: "ss-3", src: "/assets/creator-hunting/3-ss.webp", alt: "Creator Profile @hargun_kaurrrrr", number: 3 },
      { id: "ss-4", src: "/assets/creator-hunting/4-ss.webp", alt: "Creator Profile @aleshaahossain", number: 4 },
      { id: "ss-5", src: "/assets/creator-hunting/5-ss.webp", alt: "Outreach DM Collaboration Reply Khushi", number: 5 },
      { id: "ss-6", src: "/assets/creator-hunting/6-ss.webp", alt: "Outreach DM Collaboration Reply Madi", number: 6 },
    ],
  } = data || {};

  return (
    <section id="creator-hunting" className="creator-hunting-section">
      <div className="parallax-watermark" aria-hidden="true">CREATOR HUNT</div>
      <div className="container">
        <div className="creator-hunting-grid">
          {/* Left Column: Stacked Title + Role + Process Steps */}
          <div className="creator-hunting-content-left reveal-left">
            <AnimatedHeading lines={titleLines} className="creator-hunting-stacked-title" />

            <div className="creator-hunting-role-tag">{role}</div>

            <ul className="creator-hunting-points-list">
              {points.map((point, index) => (
                <li key={index} className={`creator-hunting-point-item reveal-left delay-point-${index + 1}`}>
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Instagram DM Outreach & Creator Stacked Fan Collage */}
          <div className="creator-hunting-image-wrapper reveal-right delay-2">
            <div className="creator-hunting-stack">
              {cards.map((card, idx) => {
                const cardNum = card.number || idx + 1;
                const hasError = imgErrors[card.id];

                return (
                  <div
                    key={card.id || idx}
                    className={`creator-card-layer card-layer-${cardNum}`}
                    title={card.alt}
                  >
                    {!hasError && card.src ? (
                      <img
                        src={card.src}
                        alt={card.alt || `Creator outreach card ${cardNum}`}
                        className="creator-card-img"
                        loading="lazy"
                        decoding="async"
                        onError={() => handleError(card.id)}
                      />
                    ) : (
                      <div className="creator-card-placeholder">
                        <MessageSquare size={26} />
                        <span>Screenshot {cardNum}</span>
                        <small>{card.src}</small>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
