/**
 * CenterFilmstrip — a seamless infinite horizontal marquee band.
 *
 * Props:
 *   images       – array of { src, alt } objects for the strip
 *   stripHeight  – CSS value for band height (default "420px")
 *   speed        – animation duration in seconds (default 42)
 *   opacity      – strip-level opacity (default 0.82)
 */
export default function CenterFilmstrip({
  images = [],
  stripHeight = '420px',
  speed = 42,
  opacity = 0.82,
}) {
  // Double the array for seamless loop (standard marquee-doubling trick)
  const doubled = [...images, ...images];

  return (
    <div
      className="filmstrip-band"
      style={{ '--strip-height': stripHeight, '--strip-speed': `${speed}s`, '--strip-opacity': opacity }}
      aria-hidden="true"
    >
      {/* Fade-edge mask applied at the viewport edges */}
      <div className="filmstrip-mask">
        <div className="filmstrip-track">
          {doubled.map((img, idx) => (
            <div key={idx} className="filmstrip-tile">
              <img
                src={img.src}
                alt={img.alt || ''}
                className="filmstrip-img"
                draggable={false}
                decoding="async"
                /* Only the first real half gets regular loading;
                   duplicates are pure decoration */
                loading={idx < images.length ? 'eager' : 'lazy'}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
