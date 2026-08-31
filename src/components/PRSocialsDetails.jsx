import { useState } from 'react';
import { FileText } from 'lucide-react';
import AnimatedHeading from './AnimatedHeading';
import './PRSocials.css';

export default function PRSocialsDetails({ data }) {
  const [apologyImgError, setApologyImgError] = useState(false);
  const [apologyImg2Error, setApologyImg2Error] = useState(false);

  const {
    apologyImage = "/assets/pr-strategy/kriti-message.webp",
    apologyImage2 = "/assets/pr-strategy/message-2.webp",
    context = "What happened: Rakhi ad, backlash, ad pulled, apology posted.",
    approachHeading = "How My Approach Would Look Like",
    phases = [],
    inHerWordsHeading = "GIVA Responds through Kriti!",
    wordsCards = [],
  } = data || {};

  return (
    <section id="pr-socials-details" className="pr-socials-section pr-socials-details-section">
      <div className="container">
        <div className="pr-socials-container">
          {/* Apology statements side by side with context underneath */}
          <div className="pr-row-bottom-custom reveal delay-1">
            <div className="pr-apology-cards-wrap">
              {/* First Apology Statement */}
              <div className="pr-apology-card pr-apology-card-left">
                {!apologyImgError && apologyImage ? (
                  <img
                    src={apologyImage}
                    alt="GIVA Brand Message 1"
                    className="pr-apology-img"
                    loading="lazy"
                    decoding="async"
                    onError={() => setApologyImgError(true)}
                  />
                ) : (
                  <div className="pr-placeholder">
                    <FileText size={36} />
                    <span>Statement 1</span>
                  </div>
                )}
              </div>

              {/* Second Apology Statement */}
              <div className="pr-apology-card pr-apology-card-right">
                {!apologyImg2Error && apologyImage2 ? (
                  <img
                    src={apologyImage2}
                    alt="GIVA Brand Message 2"
                    className="pr-apology-img"
                    loading="lazy"
                    decoding="async"
                    onError={() => setApologyImg2Error(true)}
                  />
                ) : (
                  <div className="pr-placeholder">
                    <FileText size={36} />
                    <span>Statement 2</span>
                  </div>
                )}
              </div>
            </div>

            {/* Centered Context underneath both images */}
            <div className="pr-context-wrap-centered">
              <p className="pr-context-highlight">{context}</p>
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
