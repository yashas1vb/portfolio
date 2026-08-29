import { useState } from 'react';
import { Image as ImageIcon } from 'lucide-react';
import './Hero.css';

export default function Hero({ personal }) {
  const [leftErr, setLeftErr] = useState(false);
  const [centerErr, setCenterErr] = useState(false);
  const [rightErr, setRightErr] = useState(false);

  const {
    firstName = "Supriya",
    lastName = "Naregal",
    greeting = "Hi, my name is",
    tagline = "M.A Advertising and Public Relations",
    images = {},
    introColumns = {},
  } = personal || {};

  return (
    <section id="hero" className="hero-section">
      <div className="container">
        <div className="hero-stage">
          {/* Top Row: Supriya  [Cutout Space]  Naregal */}
          <div className="hero-top-row reveal">
            <div className="hero-left-header">
              <div className="hero-greeting">{greeting}</div>
              <h1 className="hero-first-name">{firstName}</h1>
            </div>

            {/* Visual spacer to allow the center cutout image head to emerge between the words */}
            <div className="hero-center-spacer" aria-hidden="true"></div>

            <div className="hero-right-header">
              {/* Spacer matching the greeting height so 'Naregal' aligns with 'Supriya' */}
              <div className="hero-greeting-spacer" aria-hidden="true">{greeting}</div>
              <h1 className="hero-last-name">{lastName}</h1>
              {tagline && <div className="hero-subtag">{tagline}</div>}
            </div>
          </div>

          {/* 3-Photo Collage Stage & Paper Plane */}
          <div className="hero-collage-stage">
            {/* Left Tilted Photo (Red shirt pose) - Enlarged with Pop/Bloom Entrance */}
            <div className="photo-card-left">
              {!leftErr && images.leftPhoto ? (
                <img
                  src={images.leftPhoto}
                  alt="Supriya - Left pose"
                  className="card-img"
                  onError={() => setLeftErr(true)}
                />
              ) : (
                <div className="hero-placeholder">
                  <ImageIcon size={50} />
                  <span>Left Photo</span>
                  <small>/assets/hero/hero-left.webp</small>
                </div>
              )}
            </div>

            {/* Center Standing Cutout (Emerges up between Supriya and Naregal) */}
            <div className="cutout-center-wrapper">
              {!centerErr && images.centerPhoto ? (
                <img
                  src={images.centerPhoto}
                  alt="Supriya Naregal"
                  className="center-cutout-img"
                  onError={() => setCenterErr(true)}
                />
              ) : (
                <div className="hero-placeholder" style={{ borderRadius: '16px', height: '90%', width: '90%' }}>
                  <ImageIcon size={38} />
                  <span>Center Cutout</span>
                  <small>/assets/hero/hero-center.png</small>
                </div>
              )}
            </div>

            {/* Minimalist 3D Paper Plane Animation traveling beside the center cutout */}
            <div className="hero-paper-plane-wrapper" aria-hidden="true">
              <svg
                className="hero-paper-plane-svg"
                viewBox="0 0 44 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Main upper wing */}
                <polygon
                  points="42 2, 2 20, 20 25"
                  fill="#dbeafe"
                  stroke="#1d4ea8"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                />
                {/* Bottom keel / fold */}
                <polygon
                  points="42 2, 20 25, 24 35"
                  fill="#93c5fd"
                  stroke="#1d4ea8"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                />
                {/* Right wing side */}
                <polygon
                  points="42 2, 24 35, 28 26"
                  fill="#bfdbfe"
                  stroke="#1d4ea8"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                />
                {/* Center crease fold line */}
                <line
                  x1="42" y1="2"
                  x2="20" y2="25"
                  stroke="#1d4ea8"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* Right Tilted Photo (Black top pose) - Enlarged with Pop/Bloom Entrance */}
            <div className="photo-card-right">
              {!rightErr && images.rightPhoto ? (
                <img
                  src={images.rightPhoto}
                  alt="Supriya - Right pose"
                  className="card-img"
                  onError={() => setRightErr(true)}
                />
              ) : (
                <div className="hero-placeholder">
                  <ImageIcon size={26} />
                  <span>Right Photo</span>
                  <small>/assets/hero/hero-right.jpeg</small>
                </div>
              )}
            </div>
          </div>

          {/* Bottom 2-Column Editorial Bio */}
          <div className="hero-bio-grid">
            <div className="hero-bio-col reveal delay-3">
              <p>{introColumns.left}</p>
            </div>
            <div className="hero-bio-col reveal delay-4">
              <p>{introColumns.right}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
