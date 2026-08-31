import { VideoPlayerCard } from './FounderFace';
import AnimatedHeading from './AnimatedHeading';
import './FounderFace.css';

export default function FounderFaceTop({ data }) {
  const {
    titleLines = ["WHEN", "FOUNDER", "BECOME", "THE", "FACE!"],
    topVideo = {},
  } = data || {};

  return (
    <section id="founder-face-top" className="founder-section founder-top-section">
      <div className="container">
        <div className="founder-container">
          {/* Top Row: Stacked Title Left | Horizontal Store Visit Video Right */}
          <div className="founder-top-row">
            <AnimatedHeading lines={titleLines} className="founder-stacked-title" />

            <VideoPlayerCard
              videoSrc={topVideo.video}
              title={topVideo.title}
              cardClass="video-top-card reveal-right"
              delayClass="delay-1"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
