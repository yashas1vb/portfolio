import { useState } from 'react';
import { Sparkles, Truck, User } from 'lucide-react';
import AnimatedHeading from './AnimatedHeading';
import './BrandEvolution.css';

export default function BrandEvolution({ data }) {
  const [imgErrors, setImgErrors] = useState({});

  const handleError = (id) => {
    setImgErrors((prev) => ({ ...prev, [id]: true }));
  };

  const {
    title = "How Did They Evolve",
    subtitle = "Finding a niche with a good idea is easy! Getting people to actually show up for it is the hard part.",
    items = [],
    summary = "They worked hard to nail the product, prove demand, and expand in that order every time without missing a step.",
  } = data || {};

  const pizzaItem = items.find((i) => i.id === 'pizza-bakery') || {};
  const truckItem = items.find((i) => i.id === 'food-truck') || {};
  const smashItem = items.find((i) => i.id === 'smash-guys') || {};

  return (
    <section id="evolution" className="evolution-section">
      <div className="parallax-watermark" aria-hidden="true">EVOLUTION</div>
      <div className="container">
        {/* Main Section Header */}
        <div className="evolution-header-area reveal">
          <AnimatedHeading as="h2" className="evolution-title" text={title} />
          {subtitle && <p className="evolution-subtitle">{subtitle}</p>}
        </div>

        {/* 3 Evolution Items Side-by-Side in a Row */}
        <div className="evolution-grid">
          {/* Item 1: The Pizza Bakery Round 3D Sign */}
          <div className="evolution-col reveal delay-1">
            <div className="evolution-image-wrap">
              <div className="evolution-cutout-card pb-sign-wrap">
                {!imgErrors['pizza-bakery'] && pizzaItem.image ? (
                  <img
                    src={pizzaItem.image}
                    alt="The Pizza Bakery Sign"
                    className="evolution-cutout-img pb-sign-img"
                    loading="lazy"
                    decoding="async"
                    onError={() => handleError('pizza-bakery')}
                  />
                ) : (
                  <div className="evolution-placeholder">
                    <Sparkles size={32} />
                    <span>Pizza Bakery Sign</span>
                  </div>
                )}
              </div>
            </div>

            <div className="evolution-text">
              <p>{pizzaItem.text}</p>
            </div>
          </div>

          {/* Item 2: Paris Panini Vintage Food Truck */}
          <div className="evolution-col reveal delay-2">
            <div className="evolution-image-wrap">
              <div className="evolution-cutout-card foodtruck-wrap">
                {!imgErrors['food-truck'] && truckItem.image ? (
                  <img
                    src={truckItem.image}
                    alt="Paris Panini Food Truck"
                    className="evolution-cutout-img foodtruck-img"
                    loading="lazy"
                    decoding="async"
                    onError={() => handleError('food-truck')}
                  />
                ) : (
                  <div className="evolution-placeholder">
                    <Truck size={36} />
                    <span>Vintage Food Truck</span>
                  </div>
                )}
              </div>
            </div>

            <div className="evolution-text">
              <p>{truckItem.text}</p>
            </div>
          </div>

          {/* Item 3: Smash Guys Founder / Pop-ups */}
          <div className="evolution-col reveal delay-3">
            <div className="evolution-image-wrap">
              <div className="evolution-cutout-card smash-chef-wrap">
                {!imgErrors['smash-guys'] && smashItem.image ? (
                  <img
                    src={smashItem.image}
                    alt="Smash Guys Pop-ups"
                    className="evolution-cutout-img smash-chef-img"
                    loading="lazy"
                    decoding="async"
                    onError={() => handleError('smash-guys')}
                  />
                ) : (
                  <div className="evolution-placeholder">
                    <User size={36} />
                    <span>Smash Guys Pop-ups</span>
                  </div>
                )}
              </div>
            </div>

            <div className="evolution-text">
              <p>{smashItem.text}</p>
            </div>
          </div>
        </div>

        {/* Bottom Summary Callout */}
        {summary && (
          <div className="evolution-bottom-summary reveal delay-2">
            <p className="evolution-summary-text">{summary}</p>
          </div>
        )}
      </div>
    </section>
  );
}
