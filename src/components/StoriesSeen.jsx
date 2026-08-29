import { useState } from 'react';
import { Newspaper } from 'lucide-react';
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
      { id: "paper-1", src: "/assets/stories/1-paper.png", alt: "Amulyavani Press Coverage", number: 1 },
      { id: "paper-2", src: "/assets/stories/2-paper.png", alt: "IndiaTV Press Coverage", number: 2 },
      { id: "paper-3", src: "/assets/stories/3-paper.png", alt: "Hindustan Times Press Coverage", number: 3 },
    ],
  } = data || {};

  return (
    <section id="case-study" className="stories-section">
      <div className="container">
        <div className="stories-grid">
          {/* Left Column: Stacked Title + Role + Bullet Points */}
          <div className="stories-content-left reveal-left">
            <div className="stories-stacked-title">
              {titleLines.map((line, index) => (
                <div key={index} className="stories-title-line">
                  {line}
                </div>
              ))}
            </div>

            <div className="stories-role-tag">{role}</div>

            <ul className="stories-points-list">
              {points.map((point, index) => (
                <li key={index} className={`stories-point-item reveal delay-${index + 1}`}>
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
                        onError={() => handleError(paper.id)}
                        loading="lazy"
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
