import { useState } from 'react';
import { Newspaper } from 'lucide-react';
import AnimatedHeading from './AnimatedHeading';
import './StoriesSeen.css';

export default function StoriesSeen({ data }) {
  const [imgErrors, setImgErrors] = useState({});

  const handleError = (id) => {
    setImgErrors((prev) => ({ ...prev, [id]: true }));
  };

  const {
    titleLines = ["STORIES", "THAT", "GOT ME", "SEEN!"],
    role = "Apollo Spectra · PR Internship",
    points = [],
    papers = [
      { id: "paper-1", src: "/assets/stories/1-paper.webp", alt: "Amulyavani Press Coverage", number: 1 },
      { id: "paper-2", src: "/assets/stories/2-paper.webp", alt: "IndiaTV Press Coverage", number: 2 },
      { id: "paper-3", src: "/assets/stories/3-paper.webp", alt: "Hindustan Times Press Coverage", number: 3 },
    ],
  } = data || {};

  return (
    <section id="case-study" className="stories-section">
      <div className="parallax-watermark" aria-hidden="true">STORIES SEEN</div>
      <div className="container">
        <div className="stories-grid">
          {/* Left Column: Stacked Title + Role + Bullet Points */}
          <div className="stories-content-left reveal-left">
            <AnimatedHeading lines={titleLines} className="stories-stacked-title" />

            <div className="stories-role-tag">{role}</div>

            <ul className="stories-points-list">
              {points.map((point, index) => (
                <li key={index} className={`stories-point-item reveal-left delay-point-${index + 1}`}>
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Paper-on-Paper Stack Collage */}
          <div className="stories-image-wrapper reveal-right delay-2">
            <div className="stories-paper-stack">
              {papers.map((paper, idx) => {
                const paperNum = paper.number || idx + 1;
                const hasError = imgErrors[paper.id];

                return (
                  <div
                    key={paper.id || idx}
                    className={`stories-paper-layer paper-layer-${paperNum}`}
                    title={paper.alt}
                  >
                    {!hasError && paper.src ? (
                      <img
                        src={paper.src}
                        alt={paper.alt || `Press coverage paper ${paperNum}`}
                        className="stories-paper-img"
                        loading="lazy"
                        decoding="async"
                        onError={() => handleError(paper.id)}
                      />
                    ) : (
                      <div className="stories-paper-placeholder">
                        <Newspaper size={28} />
                        <span>Paper {paperNum}</span>
                        <small>{paper.src}</small>
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
