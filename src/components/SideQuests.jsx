import { useState } from 'react';
import { Award } from 'lucide-react';
import './SideQuests.css';

export default function SideQuests({ data }) {
  const [imgErrors, setImgErrors] = useState({});

  const handleError = (id) => {
    setImgErrors((prev) => ({ ...prev, [id]: true }));
  };

  const { title = "EDUCATIONAL SIDE QUESTS", quests = [] } = data || {};

  return (
    <section id="side-quests" className="quests-section">
      <div className="container">
        <div className="quests-container">
          <h2 className="quests-title reveal">{title}</h2>

          <div className="quests-stack">
            {quests.map((quest, idx) => (
              <div key={quest.id} className={`quest-card reveal-scale delay-${idx + 1}`}>
                {!imgErrors[quest.id] && quest.image ? (
                  <img
                    src={quest.image}
                    alt={quest.title}
                    className="quest-img"
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
