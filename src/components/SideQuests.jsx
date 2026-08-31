import { useState } from 'react';
import { Award } from 'lucide-react';
import AnimatedHeading from './AnimatedHeading';
import './SideQuests.css';

export default function SideQuests({ data }) {
  const [imgErrors, setImgErrors] = useState({});

  const handleError = (id) => {
    setImgErrors((prev) => ({ ...prev, [id]: true }));
  };

  const { title = "Educational Side Quests", quests = [] } = data || {};

  return (
    <section id="side-quests" className="quests-section">
      <div className="container">
        <div className="quests-container">
          {/* Main Title */}
          <AnimatedHeading as="h2" className="quests-title" text={title} />

          <div className="quests-stack">
            {quests.map((quest, idx) => (
              <div key={quest.id} className={`quest-card reveal-scale delay-${idx + 1}`}>
                {!imgErrors[quest.id] && quest.image ? (
                  <img
                    src={quest.image}
                    alt={quest.title}
                    className="quest-img"
                    loading="lazy"
                    decoding="async"
                    onError={() => handleError(quest.id)}
                  />
                ) : (
                  <div className="quest-placeholder">
                    <Award size={36} />
                    <span>{quest.title}</span>
                    <small>{quest.image}</small>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
