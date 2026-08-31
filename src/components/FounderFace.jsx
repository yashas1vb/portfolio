import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize2, Video as VideoIcon } from 'lucide-react';
import AnimatedHeading from './AnimatedHeading';
import './FounderFace.css';

export function VideoPlayerCard({ videoSrc, title, cardClass, delayClass }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateProgress = () => {
      if (video.duration) {
        setProgress((video.currentTime / video.duration) * 100);
      }
    };

    video.addEventListener('timeupdate', updateProgress);
    return () => {
      video.removeEventListener('timeupdate', updateProgress);
    };
  }, []);

  const togglePlay = (e) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;

    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const toggleFullscreen = (e) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;

    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.webkitRequestFullscreen) {
      video.webkitRequestFullscreen();
    }
  };

  return (
    <div className={`video-card ${cardClass} ${delayClass}`} onClick={togglePlay}>
      {!hasError && videoSrc ? (
        <>
          <video
            ref={videoRef}
            src={videoSrc}
            autoPlay
            loop
            muted
            playsInline
            className="video-element"
            onError={() => setHasError(true)}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          />

          {/* Central Play/Pause Indicator (Shown on pause or hover) */}
          <div className={`video-center-btn ${!isPlaying ? 'is-visible' : ''}`} aria-label={isPlaying ? 'Pause' : 'Play'}>
            {isPlaying ? <Pause size={28} fill="#ffffff" /> : <Play size={28} fill="#ffffff" style={{ marginLeft: 3 }} />}
          </div>

          {/* Bottom Floating Control Bar */}
          <div className="video-control-bar" onClick={(e) => e.stopPropagation()}>
            <button
              className="video-ctrl-btn"
              onClick={togglePlay}
              aria-label={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? <Pause size={18} /> : <Play size={18} />}
            </button>

            <button
              className="video-ctrl-btn"
              onClick={toggleMute}
              aria-label={isMuted ? 'Unmute' : 'Mute'}
            >
              {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
            </button>

            {/* Progress Scrubber */}
            <div className="video-progress-track">
              <div className="video-progress-fill" style={{ width: `${progress}%` }} />
            </div>

            <button
              className="video-ctrl-btn"
              onClick={toggleFullscreen}
              aria-label="Fullscreen"
            >
              <Maximize2 size={16} />
            </button>
          </div>
        </>
      ) : (
        <div className="video-placeholder">
          <VideoIcon size={36} />
          <span>{title}</span>
          <small>{videoSrc}</small>
        </div>
      )}
    </div>
  );
}

export default function FounderFace({ data }) {
  const {
    titleLines = ["WHEN", "FOUNDER", "BECOME", "THE", "FACE!"],
    topVideo = {},
    reels = [],
    paragraphs = [],
  } = data || {};

  return (
    <section id="founder-face" className="founder-section">
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

          {/* Middle Row: 2 Vertical Reel / Video Cards */}
          <div className="founder-reels-grid">
            {reels.map((reel, idx) => (
              <VideoPlayerCard
                key={reel.id}
                videoSrc={reel.video}
                title={reel.title}
                cardClass="video-reel-card reveal-scale"
                delayClass={`delay-${idx + 2}`}
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
