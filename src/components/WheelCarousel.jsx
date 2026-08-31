import './WheelCarousel.css';

/**
 * ArcCarousel (exported as WheelCarousel for compatibility)
 *
 * Images travel right-to-left along a curved arc — like the top rim of
 * a large wheel. Center position is highest; side positions curve gently
 * downward, creating a "bent filmstrip" / half-wheel silhouette.
 *
 * Each image follows the SAME @keyframes arc path but starts at a
 * different negative delay so all positions on the arc are occupied
 * simultaneously from the first frame.
 *
 * Props:
 *   images   [{ src, alt }]
 *   speed    total duration for one image to cross the full arc (seconds)
 */
export default function WheelCarousel({ images = [], speed = 32 }) {
  const count = images.length;
  if (!count) return null;

  // Evenly spread images across the arc using negative delays
  const stagger = speed / count;

  return (
    <div
      className="arc-outer"
      aria-hidden="true"
      style={{ '--arc-speed': `${speed}s` }}
    >
      {images.map((img, idx) => (
        <div
          key={idx}
          className="arc-tile"
          style={{ animationDelay: `${-(stagger * idx)}s` }}
        >
          <img
            src={img.src}
            alt={img.alt || ''}
            className="arc-img"
            draggable={false}
            decoding="async"
            loading="eager"
          />
        </div>
      ))}
    </div>
  );
}
