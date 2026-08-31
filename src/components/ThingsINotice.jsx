import { useState } from 'react';
import { Image as ImageIcon } from 'lucide-react';
import AnimatedHeading from './AnimatedHeading';
import './ThingsINotice.css';

export default function ThingsINotice({ data }) {
  const [imgErrors, setImgErrors] = useState({});

  const handleError = (id) => {
    setImgErrors((prev) => ({ ...prev, [id]: true }));
  };

  const { title = "Things I Notice!", items = [] } = data || {};

  const billboardItem = items.find((i) => i.id === 'billboard') || {};
  const trendsItem = items.find((i) => i.id === 'trends') || {};
  const creatorsItem = items.find((i) => i.id === 'creators') || {};
  const memesItem = items.find((i) => i.id === 'memes') || {};

  return (
    <section id="my-take" className="notice-section">
      <div className="container">
        {/* Main Title */}
        <AnimatedHeading as="h2" className="notice-title" text={title} />

        {/* Mobile Top Annotations Row (Above Images) */}
        <div className="notice-labels-mobile-top">
          <div className="notice-handwritten-label notice-mobile-label">
            {billboardItem.label || "interactive billboard/campaigns"}
          </div>
          <div className="notice-handwritten-label notice-mobile-label">
            {trendsItem.label || "whimsymaxxingg/trends"}
          </div>
        </div>

        {/* 3-Column Layout: Left Annotations | Central Moodboard | Right Annotations */}
        <div className="notice-board-wrapper">
          {/* Left Handwritten Annotations (Desktop) */}
          <div className="notice-labels-left">
            <div className="notice-handwritten-label reveal-left delay-1">
              {billboardItem.label || "interactive billboard/campaigns"}
            </div>
            <div className="notice-handwritten-label reveal-left delay-3">
              {creatorsItem.label || "creators/comeback"}
            </div>
          </div>

          {/* Central 4-Card Moodboard Cluster */}
          <div className="notice-collage-grid">
            {/* Top-Left: Billboard */}
            <div className="notice-card-top-left reveal-scale delay-1">
              {!imgErrors['billboard'] && billboardItem.image ? (
                <img
                  src={billboardItem.image}
                  alt={billboardItem.label}
                  className="notice-img"
                  loading="lazy"
                  decoding="async"
                  onError={() => handleError('billboard')}
                />
              ) : (
                <div className="notice-placeholder">
                  <ImageIcon size={24} />
                  <span>Billboard / Ad</span>
                  <small>/assets/things-i-notice/billboard.webp</small>
                </div>
              )}
            </div>

            {/* Top-Right: Trends / Candy */}
            <div className="notice-card-top-right reveal-scale delay-2">
              {!imgErrors['trends'] && trendsItem.image ? (
                <img
                  src={trendsItem.image}
                  alt={trendsItem.label}
                  className="notice-img"
                  loading="lazy"
                  decoding="async"
                  onError={() => handleError('trends')}
                />
              ) : (
                <div className="notice-placeholder">
                  <ImageIcon size={24} />
                  <span>Trends / Snacks</span>
                  <small>/assets/things-i-notice/trends.webp</small>
                </div>
              )}
            </div>

            {/* Bottom-Left: Creators Red Poster */}
            <div className="notice-card-bottom-left reveal-scale delay-3">
              {!imgErrors['creators'] && creatorsItem.image ? (
                <img
                  src={creatorsItem.image}
                  alt={creatorsItem.label}
                  className="notice-img"
                  loading="lazy"
                  decoding="async"
                  onError={() => handleError('creators')}
                />
              ) : (
                <div className="notice-placeholder">
                  <ImageIcon size={24} />
                  <span>Creator Poster</span>
                  <small>/assets/things-i-notice/creators.webp</small>
                </div>
              )}
            </div>

            {/* Bottom-Right: Statue Meme */}
            <div className="notice-card-bottom-right reveal-scale delay-4">
              {!imgErrors['memes'] && memesItem.image ? (
                <img
                  src={memesItem.image}
                  alt={memesItem.label}
                  className="notice-img"
                  loading="lazy"
                  decoding="async"
                  onError={() => handleError('memes')}
                />
              ) : (
                <div className="notice-placeholder">
                  <ImageIcon size={24} />
                  <span>Memes / Roman Statue</span>
                  <small>/assets/things-i-notice/memes.webp</small>
                </div>
              )}
            </div>
          </div>

          {/* Right Handwritten Annotations (Desktop) */}
          <div className="notice-labels-right">
            <div className="notice-handwritten-label reveal-right delay-2">
              {trendsItem.label || "whimsymaxxingg/trends"}
            </div>
            <div className="notice-handwritten-label reveal-right delay-4">
              {memesItem.label || "memes/conversations"}
            </div>
          </div>
        </div>

        {/* Mobile Bottom Annotations Row (Below Images) */}
        <div className="notice-labels-mobile-bottom">
          <div className="notice-handwritten-label notice-mobile-label">
            {creatorsItem.label || "creators/comeback"}
          </div>
          <div className="notice-handwritten-label notice-mobile-label">
            {memesItem.label || "memes/conversations"}
          </div>
        </div>
      </div>
    </section>
  );
}
