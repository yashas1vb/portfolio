import { VideoPlayerCard } from './FounderFace';
import './FounderFace.css';

export default function FounderFaceReels({ data }) {
  const {
    reels = [],
    paragraphs = [],
  } = data || {};

  return (
    <section id="founder-face-reels" className="founder-section founder-reels-section">
      <div className="container">
        <div className="founder-container founder-reels-container">
          {/* Middle Row: 2 Vertical Reel / Video Cards */}
          <div className="founder-reels-grid">
            {reels.map((reel, idx) => (
              <VideoPlayerCard
                key={reel.id}
                videoSrc={reel.video}
                title={reel.title}
                cardClass="video-reel-card reveal-scale"
                delayClass={`delay-${idx + 1}`}
              />
            ))}
          </div>

          {/* Bottom Centered Copy */}
          <div className="founder-bottom-copy reveal delay-2">
            {paragraphs.map((p, index) => (
              <p key={index} className="founder-copy-p">
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
