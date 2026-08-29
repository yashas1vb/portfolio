import { useState } from 'react';
import { Image as ImageIcon } from 'lucide-react';
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
        {/* Title */}
        <h2 className="notice-title reveal">{title}</h2>

        {/* 3-Column Layout: Left Annotations | Central Moodboard | Right Annotations */}
        <div className="notice-board-wrapper">
          {/* Left Handwritten Annotations */}
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
                  onError={() => handleError('billboard')}
                />
              ) : (
                <div className="notice-placeholder">
                  <ImageIcon size={24} />
                  <span>Billboard / Ad</span>
                  <small>/assets/things-i-notice/billboard.png</small>
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
                  onError={() => handleError('trends')}
                />
              ) : (
                <div className="notice-placeholder">
                  <ImageIcon size={24} />
                  <span>Trends / Snacks</span>
                  <small>/assets/things-i-notice/trends.png</small>
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
                  onError={() => handleError('creators')}
                />
              ) : (
                <div className="notice-placeholder">
                  <ImageIcon size={24} />
                  <span>Creator Poster</span>
                  <small>/assets/things-i-notice/creators.png</small>
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
                  onError={() => handleError('memes')}
                />
              ) : (
                <div className="notice-placeholder">
                  <ImageIcon size={24} />
                  <span>Memes / Roman Statue</span>
                  <small>/assets/things-i-notice/memes.png</small>
                </div>
              )}
            </div>
          </div>

          {/* Right Handwritten Annotations */}
          <div className="notice-labels-right">
            <div className="notice-handwritten-label reveal-right delay-2">
              {trendsItem.label || "whimsymaxxingg/trends"}
            </div>
            <div className="notice-handwritten-label reveal-right delay-4">
              {memesItem.label || "memes/conversations"}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
