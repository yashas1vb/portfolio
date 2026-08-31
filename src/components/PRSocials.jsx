import { useState } from 'react';
import { Sparkles, FileText, Quote } from 'lucide-react';
import AnimatedHeading from './AnimatedHeading';
import './PRSocials.css';

export default function PRSocials({ data }) {
  const [campaignImgError, setCampaignImgError] = useState(false);
  const [inHerWordsImgError, setInHerWordsImgError] = useState(false);

  const {
    mainTitle = "The Strategy I'd Bring",
    caseTitleLines = ["GIVA", "FROM", "BACKLASH", "TO", "BELIEF"],
    campaignImage = "/assets/pr-strategy/giva-campaign.webp",
    approachHeading = "The Approach",
    phases = [],
    inHerWordsHeading = "In Her Words",
    inHerWordsImage = "/assets/pr-strategy/in-her-words.webp",
    quote = "",
  } = data || {};

  return (
    <section id="pr-socials" className="pr-socials-section">
      <div className="parallax-watermark" aria-hidden="true">PR STRATEGY</div>
      <div className="container">
        <div className="pr-socials-container">
          {/* Main Title */}
          <AnimatedHeading as="h2" className="pr-main-title" text={mainTitle} />

          {/* 2x2 Visual Showcase Grid */}
          <div className="pr-showcase-grid">
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

            {/* Bottom Section: Two Apology Images Side by Side, with Context below */}
            <div className="pr-row-bottom-custom reveal delay-2">
              <div className="pr-apology-cards-wrap">
                {/* First Apology Statement */}
                <div className="pr-apology-card pr-apology-card-left">
                  {!apologyImgError && apologyImage ? (
                    <img
                      src={apologyImage}
                      alt="GIVA Apology Statement"
                      className="pr-apology-img"
                      loading="lazy"
                      decoding="async"
                      onError={() => setApologyImgError(true)}
                    />
                  ) : (
                    <div className="pr-placeholder">
                      <FileText size={36} />
                      <span>GIVA Apology Statement</span>
                    </div>
                  )}
                </div>

                {/* Second Apology Statement */}
                <div className="pr-apology-card pr-apology-card-right">
                  {!apologyImg2Error && apologyImage2 ? (
                    <img
                      src={apologyImage2}
                      alt="GIVA Response Statement"
                      className="pr-apology-img"
                      loading="lazy"
                      decoding="async"
                      onError={() => setApologyImg2Error(true)}
                    />
                  ) : (
                    <div className="pr-placeholder">
                      <FileText size={36} />
                      <span>GIVA Response Statement</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Centered Context underneath both images */}
              <div className="pr-context-wrap-centered">
                <p className="pr-context-highlight">{context}</p>
              </div>
            </div>
          </div>

          {/* Approach Section: Heading + 4 Sticky Notes in a Row */}
          {approachHeading && (
            <div className="pr-approach-header reveal">
              <AnimatedHeading as="h3" className="pr-approach-heading" text={approachHeading} />
            </div>
          )}

          <div className="pr-sticky-notes-row">
            {phases.map((phase, index) => (
              <div
                key={phase.id || index}
                className={`pr-sticky-note note-${phase.colorScheme || 'dark-yellow'} reveal-sticky delay-${(index % 4) + 1}`}
                style={{ '--note-rot': phase.rotation || '0deg' }}
              >
                {/* Washi Tape Accent */}
                <div className="sticky-tape" />

                {/* Phase Title */}
                <h4 className="sticky-note-title">{phase.title}</h4>

                {/* Phase Body */}
                <p className="sticky-note-body">{phase.body}</p>

                {/* 4th Sticky Note Core Thought */}
                {phase.coreThought && (
                  <div className="sticky-core-thought">
                    <p className="core-thought-text">{phase.coreThought}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* In Her Words Section: Heading + 4 Sticky Notes in a Row */}
          {inHerWordsHeading && (
            <div className="pr-approach-header pr-words-header reveal">
              <AnimatedHeading as="h3" className="pr-approach-heading" text={inHerWordsHeading} />
            </div>
          )}

          {wordsCards && wordsCards.length > 0 && (
            <div className="pr-sticky-notes-row">
              {wordsCards.map((card, index) => (
                <div
                  key={card.id || index}
                  className={`pr-sticky-note note-${card.colorScheme || 'dark-yellow'} reveal-sticky delay-${(index % 4) + 1}`}
                  style={{ '--note-rot': card.rotation || '0deg' }}
                >
                  {/* Washi Tape Accent */}
                  <div className="sticky-tape" />

                  {/* Body / Statement */}
                  <p className={`sticky-note-body ${card.isHighlight ? 'sticky-highlight-text' : ''}`}>
                    {card.body}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
