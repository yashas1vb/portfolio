import { useState } from 'react';
import { X } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ThingsINotice from './components/ThingsINotice';
import WhatIBring from './components/WhatIBring';
import StoriesSeen from './components/StoriesSeen';
import CreatorHunting from './components/CreatorHunting';
import PopoVenturesTitle from './components/PopoVenturesTitle';
import PopoVenturesFood from './components/PopoVenturesFood';
import BrandPersonality from './components/BrandPersonality';
import BrandEvolution from './components/BrandEvolution';
import FounderFaceTop from './components/FounderFaceTop';
import FounderFaceReels from './components/FounderFaceReels';
import PRSocialsTitle from './components/PRSocialsTitle';
import PRSocialsDetails from './components/PRSocialsDetails';
import InfluencerVoice from './components/InfluencerVoice';
import CreativeWorks from './components/CreativeWorks';
import SideQuests from './components/SideQuests';
import WhyWorthAShot from './components/WhyWorthAShot';
import ContactSection from './components/ContactSection';
import StickyPanelTransition from './components/StickyPanelTransition';
import { portfolioData } from './data/portfolioData';
import { useScrollReveal } from './hooks/useScrollReveal';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import { useParallax } from './hooks/useParallax';

export default function App() {
  const [activeZoomImage, setActiveZoomImage] = useState(null);
  const [showResume, setShowResume] = useState(false);

  // Initialize smooth momentum scroll (Lenis) for 60fps velocity-based scrolling
  useSmoothScroll();

  // Initialize multi-layer parallax depth on scroll
  useParallax();

  // Initialize smooth on-scroll reveal animations across all sections
  useScrollReveal();

  return (
    <div className="portfolio-app">
      {/* Navigation */}
      <Navbar navLinks={portfolioData.navLinks} />

      {/* Main Content */}
      <main>
        {/* Section 1: Hero */}
        <Hero personal={portfolioData.personal} />

        {/* Section 2 & 3: Sticky Transition (Things I Notice -> What I Bring) */}
        <StickyPanelTransition
          direction="left"
          panelBehind={
            <ThingsINotice data={portfolioData.thingsINotice} />
          }
          panelSliding={
            <WhatIBring data={portfolioData.whatIBring} />
          }
        />

        {/* Section 4: Stories That Got Me Seen! (Horizontal Slide from Left) */}
        <div className="scroll-slide-wrapper scroll-slide-left" data-scroll-type="horizontal-left">
          <StoriesSeen data={portfolioData.storiesThatGotMeSeen} />
        </div>

        {/* Section 5 & 6a: Sticky Transition (Creator Hunting -> Popo Ventures Title) */}
        <StickyPanelTransition
          direction="right"
          panelBehind={
            <CreatorHunting data={portfolioData.creatorHunting} />
          }
          panelSliding={
            <PopoVenturesTitle data={portfolioData.brandBuilding} />
          }
        />

        {/* Section 6b: Popo Ventures Food */}
        <div className="scroll-slide-wrapper scroll-slide-up" data-scroll-type="vertical">
          <PopoVenturesFood data={portfolioData.brandBuilding} />
        </div>

        {/* Section 7: Brand Personality (Vertical Slide from Bottom) */}
        <div className="scroll-slide-wrapper scroll-slide-up" data-scroll-type="vertical">
          <BrandPersonality data={portfolioData.brandPersonality} />
        </div>

        {/* Section 8: Brand Evolution (Horizontal Slide from Left) */}
        <div className="scroll-slide-wrapper scroll-slide-left" data-scroll-type="horizontal-left">
          <BrandEvolution data={portfolioData.brandEvolution} />
        </div>

        {/* Section 9a: Founder Face Top (Title + Top Video) */}
        <div className="scroll-slide-wrapper scroll-slide-up" data-scroll-type="vertical">
          <FounderFaceTop data={portfolioData.founderFace} />
        </div>

        {/* Section 9b & 10a: Sticky Transition (Founder Face Reels -> The Strategy I'd Bring Title) */}
        <StickyPanelTransition
          direction="right"
          panelBehind={
            <FounderFaceReels data={portfolioData.founderFace} />
          }
          panelSliding={
            <PRSocialsTitle data={portfolioData.prSocials} />
          }
        />

        {/* Section 10b: The Strategy I'd Bring Details (Vertical Slide from Bottom) */}
        <div className="scroll-slide-wrapper scroll-slide-up" data-scroll-type="vertical">
          <PRSocialsDetails data={portfolioData.prSocials} />
        </div>

        {/* Section 11: Influencer Voice / Tin and Tah (Vertical Slide from Bottom) */}
        <div className="scroll-slide-wrapper scroll-slide-up" data-scroll-type="vertical">
          <InfluencerVoice data={portfolioData.influencerVoice} onZoomImage={setActiveZoomImage} />
        </div>

        {/* Section 12: Creative Works / Flipkart & Voyante (Horizontal Slide from Left) */}
        <div className="scroll-slide-wrapper scroll-slide-left" data-scroll-type="horizontal-left">
          <CreativeWorks data={portfolioData.creativeWorks} onZoomImage={setActiveZoomImage} />
        </div>

        {/* Section 13: Educational Side Quests (Vertical Slide from Bottom) */}
        <div className="scroll-slide-wrapper scroll-slide-up" data-scroll-type="vertical">
          <SideQuests data={portfolioData.sideQuests} />
        </div>

        {/* Section 14: Why I'm Worth A Shot! (Horizontal Slide from Right) */}
        <div className="scroll-slide-wrapper scroll-slide-right" data-scroll-type="horizontal-right">
          <WhyWorthAShot data={portfolioData.worthAShot} onZoomImage={setActiveZoomImage} />
        </div>
      </main>

      {/* Section 15: Contact Footer (Vertical Slide from Bottom) */}
      <div className="scroll-slide-wrapper scroll-slide-up" data-scroll-type="vertical">
        <ContactSection
          contact={portfolioData.contact}
          personal={portfolioData.personal}
          onViewResume={() => setShowResume(true)}
        />
      </div>

      {/* Zoom Image/Video Modal */}
      {activeZoomImage && (
        <div className="worth-modal-overlay" onClick={() => setActiveZoomImage(null)}>
          <div className="worth-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="worth-modal-close" onClick={() => setActiveZoomImage(null)} aria-label="Close modal">
              <X size={28} />
            </button>
            {activeZoomImage.videoUrl ? (
              <video
                src={activeZoomImage.videoUrl}
                controls
                autoPlay
                loop
                className="worth-modal-video"
              />
            ) : (
              <img src={activeZoomImage.image} alt={activeZoomImage.caption} className="worth-modal-img" />
            )}
            {activeZoomImage.caption && <p className="worth-modal-caption">{activeZoomImage.caption}</p>}
          </div>
        </div>
      )}

      {/* Resume PDF Viewer Modal */}
      {showResume && (
        <div className="resume-modal-overlay" onClick={() => setShowResume(false)}>
          <div className="resume-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="resume-modal-header">
              <span className="resume-modal-title">Supriya V Naregal - Resume</span>
              <div className="resume-modal-actions">
                <a
                  href="/assets/worth-a-shot/Supriya%20V%20Naregal.pdf"
                  download="Supriya_V_Naregal_Resume.pdf"
                  className="resume-download-btn"
                >
                  Download PDF
                </a>
                <button
                  className="resume-close-btn"
                  onClick={() => setShowResume(false)}
                  aria-label="Close resume"
                >
                  <X size={20} />
                </button>
              </div>
            </div>
            <div className="resume-modal-body">
              <iframe
                src="/assets/worth-a-shot/Supriya%20V%20Naregal.pdf#toolbar=0"
                width="100%"
                height="100%"
                title="Supriya V Naregal Resume"
                style={{ border: 'none', borderRadius: '8px' }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
