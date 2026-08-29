import { useState } from 'react';
import { Play, Sparkles, Image as ImageIcon } from 'lucide-react';
import './CreativeWorks.css';

export default function CreativeWorks({ data }) {
  const [imgErrors, setImgErrors] = useState({});

  const handleError = (id) => {
    setImgErrors((prev) => ({ ...prev, [id]: true }));
  };

  const {
    mainTitle = "OH, I ALSO MAKE THINGS",
    flipkart = {},
    voyante = {},
    aiVideo = {},
  } = data || {};

  return (
    <section id="creative-works" className="creative-section">
      <div className="container">
        <div className="creative-container">
          {/* Main Title */}
          <h2 className="creative-main-title reveal">{mainTitle}</h2>

          {/* ================= 1. FLIPKART CONCEPTUAL CAMPAIGNS ================= */}
          <div className="flipkart-block">
            <h3 className="creative-section-subhead reveal">{flipkart.title}</h3>

            <div className="flipkart-posters-stack">
              {flipkart.posters?.map((poster, idx) => (
                <div key={poster.id} className={`flipkart-poster-card reveal-scale delay-${idx + 1}`}>
                  {!imgErrors[poster.id] && poster.image ? (
                    <img
                      src={poster.image}
                      alt={poster.title}
                      className="flipkart-poster-img"
                      onError={() => handleError(poster.id)}
                    />
                  ) : (
                    <div className="creative-placeholder">
                      <ImageIcon size={36} />
                      <span>{poster.title}</span>
                      <small>{poster.image}</small>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* ================= 2. VOYANTE BY VOYAGE (AI CAMPAIGN) ================= */}
          <div className="voyante-block">
            <div className="voyante-header reveal">
              <h3 className="voyante-title">{voyante.brand}</h3>
              <div className="voyante-subtitle">{voyante.subheading}</div>
            </div>

            {/* Voyante Side-by-Side: Product Left | Billboard Right with text below */}
            <div className="voyante-showcase-grid reveal delay-1">
              {/* Product Column */}
              <div className="voyante-item">
                <div className="voyante-card">
                  {!imgErrors['voyante-product'] && voyante.productImage ? (
                    <img
                      src={voyante.productImage}
                      alt="Voyante Smart Suitcase Product"
                      className="voyante-img"
                      onError={() => handleError('voyante-product')}
                    />
                  ) : (
                    <div className="creative-placeholder">
                      <Sparkles size={36} />
                      <span>Voyante Smart Suitcase Product</span>
                      <small>{voyante.productImage}</small>
                    </div>
                  )}
                </div>
                <div className="voyante-label">Product</div>
              </div>

              {/* Billboard Column */}
              <div className="voyante-item">
                <div className="voyante-card voyante-card-billboard">
                  {!imgErrors['voyante-billboard'] && voyante.billboardImage ? (
                    <img
                      src={voyante.billboardImage}
                      alt="Voyante Billboard Advertisement"
                      className="voyante-img"
                      onError={() => handleError('voyante-billboard')}
                    />
                  ) : (
                    <div className="creative-placeholder">
                      <Sparkles size={36} />
                      <span>Voyante Billboard AD</span>
                      <small>{voyante.billboardImage}</small>
                    </div>
                  )}
                </div>
                <div className="voyante-label">Billboard AD</div>
              </div>
            </div>

            {/* Storyboard Block */}
            <div className="voyante-storyboard-block reveal delay-2">
              <h4 className="storyboard-title">{voyante.storyboardTitle}</h4>
              <div className="storyboard-sub">{voyante.storyboardSub}</div>

              <div className="storyboard-scenes-layout">
                {/* Scene 1: Top Center */}
                {voyante.scenes?.[0] && (
                  <div className="storyboard-scene-center">
                    <div className="storyboard-scene-title">{voyante.scenes[0].title}</div>
                    <div className="storyboard-scene-frame">
                      <img
                        src={voyante.scenes[0].image}
                        alt={voyante.scenes[0].title}
                        className="storyboard-scene-img"
                        onError={() => handleError('scene-1')}
                      />
                    </div>
                  </div>
                )}

                {/* Scenes 2 & 3: Row 2 */}
                <div className="storyboard-scenes-row">
                  {voyante.scenes?.slice(1, 3).map((scene) => (
                    <div key={scene.id} className="storyboard-scene-item">
                      <div className="storyboard-scene-title">{scene.title}</div>
                      <div className="storyboard-scene-frame">
                        <img
                          src={scene.image}
                          alt={scene.title}
                          className="storyboard-scene-img"
                          onError={() => handleError(scene.id)}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Scenes 4 & 5: Row 3 */}
                <div className="storyboard-scenes-row">
                  {voyante.scenes?.slice(3, 5).map((scene) => (
                    <div key={scene.id} className="storyboard-scene-item">
                      <div className="storyboard-scene-title">{scene.title}</div>
                      <div className="storyboard-scene-frame">
                        <img
                          src={scene.image}
                          alt={scene.title}
                          className="storyboard-scene-img"
                          onError={() => handleError(scene.id)}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ================= 3. AI VIDEO ================= */}
          <div className="ai-video-block reveal delay-1">
            <h3 className="ai-video-title">{aiVideo.title}</h3>

            <div className="ai-video-card">
              {aiVideo.videoUrl ? (
                <video
                  src={aiVideo.videoUrl}
                  poster={aiVideo.poster}
                  controls
                  playsInline
                  className="ai-video-player"
                />
              ) : (
                <div className="creative-placeholder">
                  <Play size={44} />
                  <span>AI Video Reel Slot</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
