import { useState } from 'react';
import { Sparkles } from 'lucide-react';
import AnimatedHeading from './AnimatedHeading';
import './PRSocials.css';

export default function PRSocialsTitle({ data }) {
  const [campaignImgError, setCampaignImgError] = useState(false);

  const {
    mainTitle = "The Strategy I'd Bring",
    caseTitleLines = ["GIVA", "FROM", "BACKLASH", "TO", "BELIEF"],
    campaignImage = "/assets/pr-strategy/giva-campaign.webp",
  } = data || {};

  return (
    <section id="pr-socials-title" className="pr-socials-section pr-socials-title-section">
      <div className="parallax-watermark" aria-hidden="true">PR STRATEGY</div>
      <div className="container">
        <div className="pr-socials-container">
          {/* Main Title */}
          <AnimatedHeading as="h2" className="pr-main-title" text={mainTitle} />

          {/* Top Row: Stacked Title Left | Campaign Image Right */}
          <div className="pr-grid-row pr-row-top">
            <div className="pr-stacked-title reveal-left">
              {caseTitleLines.map((line, index) => (
                <div key={index} className="pr-title-line">
                  {line}
                </div>
              ))}
            </div>

            <div className="pr-campaign-card reveal-right delay-1">
              {!campaignImgError && campaignImage ? (
                <img
                  src={campaignImage}
                  alt="GIVA Rakhi Campaign"
                  className="pr-campaign-img"
                  loading="lazy"
                  decoding="async"
                  onError={() => setCampaignImgError(true)}
                />
              ) : (
                <div className="pr-placeholder">
                  <Sparkles size={36} />
                  <span>GIVA Rakhi Festive Campaign Ad</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
