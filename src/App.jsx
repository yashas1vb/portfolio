import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ThingsINotice from './components/ThingsINotice';
import WhatIBring from './components/WhatIBring';
import StoriesSeen from './components/StoriesSeen';
import CreatorHunting from './components/CreatorHunting';
import BrandBuilding from './components/BrandBuilding';
import BrandPersonality from './components/BrandPersonality';
import BrandEvolution from './components/BrandEvolution';
import FounderFace from './components/FounderFace';
import PRSocials from './components/PRSocials';
import InfluencerVoice from './components/InfluencerVoice';
import CreativeWorks from './components/CreativeWorks';
import SideQuests from './components/SideQuests';
import WhyWorthAShot from './components/WhyWorthAShot';
import ContactSection from './components/ContactSection';
import { portfolioData } from './data/portfolioData';
import { useScrollReveal } from './hooks/useScrollReveal';

export default function App() {
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

        {/* Section 2: Things I Notice! (My Take) */}
        <ThingsINotice data={portfolioData.thingsINotice} />

        {/* Section 3: WHAT I BRING? */}
        <WhatIBring data={portfolioData.whatIBring} />

        {/* Section 4: STORIES THAT GOT ME SEEN! (Case Study 1) */}
        <StoriesSeen data={portfolioData.storiesThatGotMeSeen} />

        {/* Section 5: I WENT CREATOR HUNTING (Case Study 2) */}
        <CreatorHunting data={portfolioData.creatorHunting} />

        {/* Section 6: BRAND BUILDING (Case Study 3 - Popo Ventures) */}
        <BrandBuilding data={portfolioData.brandBuilding} />

        {/* Section 7: AND THEY COME WITH SOME PERSONALITY!! */}
        <BrandPersonality data={portfolioData.brandPersonality} />

        {/* Section 8: HOW DID THEY EVOLVE */}
        <BrandEvolution data={portfolioData.brandEvolution} />

        {/* Section 9: WHEN FOUNDER BECOME THE FACE! */}
        <FounderFace data={portfolioData.founderFace} />

        {/* Section 10: IF I DID YOUR PR/SOCIALS */}
        <PRSocials data={portfolioData.prSocials} />

        {/* Section 11: FINDING RIGHT VOICE FOR YOUR BRAND! (Tin and Tah) */}
        <InfluencerVoice data={portfolioData.influencerVoice} />

        {/* Section 12: OH, I ALSO MAKE THINGS (Flipkart & Voyante AI Campaign) */}
        <CreativeWorks data={portfolioData.creativeWorks} />

        {/* Section 13: EDUCATIONAL SIDE QUESTS */}
        <SideQuests data={portfolioData.sideQuests} />

        {/* Section 14: WHY I'M WORTH A SHOT! (Why Me) */}
        <WhyWorthAShot data={portfolioData.worthAShot} />
      </main>

      {/* Section 15: Contact Footer */}
      <ContactSection contact={portfolioData.contact} personal={portfolioData.personal} />
    </div>
  );
}
