// Subtle holiday snow drawn over the StarField. Positions are deterministic
// (golden-ratio spread) so flakes stay evenly spaced and don't jump on re-render.
const spread = (i, step) => (i * step) % 1

function Snowfall({ count }) {
  return Array.from({ length: count }, (_, i) => {
    const crystal = i % 4 === 0
    const size = crystal ? 13 + spread(i, 0.37) * 6 : 3 + spread(i, 0.73) * 3
    const duration = 14 + spread(i, 0.41) * 12
    return (
      // Full-height rail: translateY percentages then cover the whole section.
      <span
        key={i}
        className="snow-rail"
        style={{
          left: `${spread(i + 1, 0.618) * 100}%`,
          animationDuration: `${duration}s`,
          // Negative delay: flakes are already spread out on first paint.
          animationDelay: `${-spread(i + 1, 0.383) * duration}s`,
        }}
      >
        <span
          className="snow-flake"
          style={{ animationDuration: `${3 + spread(i, 0.29) * 3}s` }}
        >
          {crystal ? (
            <svg viewBox="0 0 24 24" width={size} height={size}>
              <path
                d="M12 2v20M3.34 7l17.32 10M3.34 17 20.66 7M9 3.5l3 3 3-3M9 20.5l3-3 3 3M2.8 10.6l4.1-1.1-1.1-4.1M18.2 18.6l-1.1-4.1 4.1-1.1M5.8 18.6l1.1-4.1-4.1-1.1M21.2 10.6l-4.1-1.1 1.1-4.1"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <span className="snow-dot" style={{ width: size, height: size }} />
          )}
        </span>
      </span>
    )
  })
}

export default Snowfall
